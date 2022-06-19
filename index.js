window.addEventListener('load', function () {
    const videoIntro = document.getElementById('video-intro')
    const videoIntro2 = document.getElementById('video-loop')
    const introText = document.getElementById('intro-text')
    const headerLogo = document.getElementById('header-logo')
    const menu = document.getElementById('menu')
    const text = document.getElementById('text')
    const divLogo = document.getElementById('div-logo')

    videoIntro.addEventListener('ended', function () {

        videoIntro.style.display = 'none'

        videoIntro2.style.display = 'block'
        videoIntro2.currentTime = 0        
        videoIntro2.play()

        introText.classList.add("lineUp");
        introText.style.display = 'block'

        divLogo.style.display = 'block'

        headerLogo.classList.add("lineUp");
        headerLogo.style.display = 'block'

        menu.classList.add("lineUp");
        menu.style.display = 'block'

        text.classList.add("lineUp");
        text.style.display = 'block'
    

    })

    console.log('load')
})

