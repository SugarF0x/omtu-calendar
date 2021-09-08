export default async () => {
  const workbox = await (window as any).$workbox;

  if (!workbox) {
    console.debug("Workbox couldn't be loaded.");
    return;
  }

  workbox.addEventListener('installed', (event: any) => {
    if (!event.isUpdate) {
      console.debug('The PWA is on the latest version.');
      return;
    }

    console.debug('There is an update for the PWA, reloading...');
    window.location.reload();
  });
};
