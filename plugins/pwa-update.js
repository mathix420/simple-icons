export default async () => {
  const workbox = await window.$workbox

  if (!workbox) {
    // Workbox couldn't be loaded
    return
  }

  function eventHandler(event) {
    if (!event.isUpdate) {
      // The PWA is on the latest version
      return
    }

    alert('Une nouvelle version est disponible!\nLa page va se mettre à jour.')
    window.location.reload()
  }

  workbox.addEventListener('installed', eventHandler)
  workbox.addEventListener('waiting', eventHandler)
}
