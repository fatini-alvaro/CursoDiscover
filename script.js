function toggleMode () {
    const root = document.documentElement
    root.classList.toggle('light')

    const photo = document.querySelector('#profile img')

    if (root.classList.contains('light')) {
        photo.setAttribute('src', './assets/avatar-light.png')
    } else {
        photo.setAttribute('src', './assets/avatar.png')
    }
}

// apenas para testes futuros
let flag;
