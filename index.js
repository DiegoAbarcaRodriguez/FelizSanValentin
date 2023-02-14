document.addEventListener('DOMContentLoaded', () => {
    const btnYes = document.querySelector('#btn-yes');
    const btnNo = document.querySelector('#btn-no');
    let sound = new Audio('./audio/audio.mp3');

    btnNo.addEventListener('mouseover', () => {
        btnNo.style.position = 'absolute';
        btnNo.style.top = (Math.random() * window.innerHeight) + 'px';
        btnNo.style.left = (Math.random() * window.innerWidth) + 'px';
    });

    btnYes.addEventListener('click', () => {
        sound.play();

        Swal.fire({
            title: 'Sabía que dirías que sí 😍😍😍',
            width: 600,
            padding: '3em',
            color: 'crimson',
            backdrop: `
              url("./img/nyan-cat.gif")
              left top
              no-repeat
            `
        })
    });
});