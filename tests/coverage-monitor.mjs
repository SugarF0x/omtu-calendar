import path from "path"
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'
import http from 'http'
import jsdom from 'jsdom'
import WebSocket from "ws"
import open from "open"
import { createClient } from "@vitest/ws-client"

const __dirname = dirname(fileURLToPath(import.meta.url))
const coveragePath = path.resolve(__dirname, "../coverage")

let ws = null
const wss = new WebSocket.Server({ port: 9012 })
wss.on("connection", (client) => { ws = client })

function connect() {
  const ws = new WebSocket("ws://localhost:9012")

  ws.onmessage = (e) => { if (e.data === "HMR") location.reload() }

  ws.onerror = (e) => {
    e.preventDefault()
    ws.close()
  }
}

http.createServer((req, res) => {
  const resource = req.url + (req.url.at(-1) === "/" ? "index.html" : "")

  fs.readFile(coveragePath + resource, (err,data) => {
    if (err) {
      res.writeHead(404)
      res.end(JSON.stringify(err))
      return
    }

    const isHTML = resource.split('.').at(-1) === 'html'
    if (!isHTML) {
      res.writeHead(200)
      res.end(data)
      return
    }

    const dom = new jsdom.JSDOM(data.toString())
    const document = dom.window.document

    const script = document.createElement('script')
    script.innerHTML = `
      ${connect.toString()}

      connect();
    `

    document.head.appendChild(script)
    res.writeHead(200)
    res.end(dom.serialize())
  })
}).listen(8080)

setTimeout(() => {
  let isBrowserOpen = false
  createClient("ws://localhost:51204/__vitest_api__", {
    WebSocketConstructor: WebSocket,
    handlers: {
      onFinished() {
        if (!isBrowserOpen) {
          isBrowserOpen = true
          setTimeout(() => {
            open('http://localhost:8080')
          }, 500)
        }

        ws?.send("HMR")
      },
    },
    autoReconnect: true
  })
}, 500)
