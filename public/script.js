if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/SW.js')
    .then(reg => console.log('Registro de SW exitoso', reg))
    .catch(err => console.warn('Error al tratar de registrar el sw', err))
}