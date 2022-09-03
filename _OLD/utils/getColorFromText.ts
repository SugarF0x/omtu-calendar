export function getColorFromText(value: string): string {
  let hash = 0
  for (let i = 0; i < value.length; i++) {
    hash = value.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = '#';
  for (let i = 0; i < 3; i++) {
    const hexValue = (hash >> (i * 8)) & 0xFF;
    color += ('00' + hexValue.toString(16)).substr(-2);
  }
  return color;
}
