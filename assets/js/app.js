const main = document.querySelector('main');
const textileImg = document.querySelector('.textile');
const textileName = document.querySelector('.textile-name .value');
const textileColor = document.querySelector('.textile-color .value');
const currentcolor = document.querySelectorAll('.currentcolor');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let count = 0;

const textile =
    [
        {
            name: 'Flor',
            url: './assets/img/flor.svg',
            color: '#71BFBA'
        },
        {
            name: 'Meteor',
            url: './assets/img/Meteor.svg',
            color: '#1c538e'
        },
        {
            name: 'Camouflage',
            url: './assets/img/camouflage.svg',
            color: '#575753'
        },
        {
            name: 'React Light',
            url: './assets/img/Rect-Light.svg',
            color: '#C73C3C'
        },
        {
            name: 'Flowers',
            url: './assets/img/Flowers.svg',
            color: '#002D49'
        },
        {
            name: 'circle',
            url: './assets/img/circle.svg',
            color: '#B3B881'
        }
    ];

function start() {
    main.style.backgroundImage = `linear-gradient(to bottom, rgba(0,0,0,0.96), rgba(0,0,0,0.96)), url(${textile[count].url})`;
    textileImg.setAttribute('xlink:href', textile[count].url)
    textileName.innerHTML = textile[count].name;
    textileColor.innerHTML = textile[count].color
}

start()


for (const item of currentcolor) {
    item.style.fill = textile[count].color;
}

prev.addEventListener('click', () => {
    let textileSize = textile.length;
    if (count <= 0) return;

    count--;

    main.style.background = `linear-gradient(to bottom, rgba(0,0,0,0.96), rgba(0,0,0,0.96)), url(${textile[count].url})`;
    textileImg.setAttribute('xlink:href', textile[count].url)
    for (const item of currentcolor) {
        item.style.fill = textile[count].color;
    }
    textileName.innerHTML = textile[count].name;
    textileColor.innerHTML = textile[count].color
})

next.addEventListener('click', () => {
    let textileSize = textile.length;
    if (count >= textileSize - 1) return;

    count++;

    main.style.background = `linear-gradient(to bottom, rgba(0,0,0,0.96), rgba(0,0,0,0.96)), url(${textile[count].url})`;
    textileImg.setAttribute('xlink:href', textile[count].url)

    for (const item of currentcolor) {
        item.style.fill = textile[count].color;
    }
    textileName.innerHTML = textile[count].name;
    textileColor.innerHTML = textile[count].color
})