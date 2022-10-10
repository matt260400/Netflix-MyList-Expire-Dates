console.log('injection ok')

/* 
    Il problema è che la pagina non ha ancora caricato, quindi attendi la fine del caricamento.
    Si potrebbe usare la funzione di attesa per temporizzare l'esecuzione, o cercare di includere il defer.
    https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
*/

document.querySelector("#appMountPoint > div > div > div:nth-child(1) > div.bd.dark-background > div.pinning-header > div > div.sub-header > div > div > div > div").innerHTML = 'La mia incredibile e meravigliosa lista di film'

function onResponse(promise) {
    return promise.text()
}

function onText(text) {

    let parser = new DOMParser();

    let doc = parser.parseFromString(text, "text/html");

    let date = doc.querySelector('#section-hook').querySelector('.hook-header').innerHTML;
    let title = doc.querySelector("#section-hero > div.hero-container > div.info-container > div.details-container > div > h1").innerHTML;
    let id = doc.querySelector("#meta-url").content

    if (title !== undefined) {
        let str = date.split(': ', 2)
        let strID = id.split('title/', 2)

        console.log(title + ': ' + str[1] + ', ID: ' + strID[1]);

        list[strID[1]] = str[1]

        //list.push(strID[1])
    }
}

// cerca le arrow functions

let position = window.scrollY;
let check = 0

function scrollToBottom() {

    let _autoScroller = setInterval(function () {
        window.scrollBy({
            top: 1700,
            behavior: 'smooth'
        });

        let newPosition = window.scrollY;
        console.log(newPosition)
        if (newPosition === position) {
            check++
        }
        else {
            position = newPosition;
        }
        if (check === 5) {
            clearInterval(_autoScroller);
            window.scroll({
                top: 0,
                behavior: 'smooth'
            });
            checkIds()
        }
    }, 500);
    //setTimeout(function () {
    //    clearInterval(_autoScroller);
    //    window.scroll({
    //        top: 0,
    //        behavior: 'smooth'
    //    });
    //    checkIds()
    //}, 8 * 1000);
}

function checkIds() {
    console.log('sono nella funzione')

    const buttonForIds = document.querySelector('.buttonForIds')

    const imgDiv = document.createElement('div')
    const img = document.createElement('img')

    imgDiv.classList.add('loadingImage')

    img.src = 'https://i.pinimg.com/originals/65/ba/48/65ba488626025cff82f091336fbf94bb.gif'

    buttonForIds.appendChild(imgDiv)
    imgDiv.appendChild(img)

    buttonForIds.classList.add('transparentBackground')

    button.removeEventListener('click', checkIds)

    //let ids = document.querySelector("#appMountPoint > div > div > div:nth-child(1) > div.bd.dark-background > div.mainView > div > div.rowList").querySelectorAll('.rowListItem')
    let ids = document.querySelector("#main-view > div > div.galleryContent > div > div").querySelectorAll("div.ptrack-content > a")

    scraping(ids)
}

async function scraping(element) {
    let count = 0
    for (item of element) {
        //console.log(item.getAttribute("href"))
        let splice = item.getAttribute("href").split('watch/', 2).pop().split('?', 2)
        //console.log(splice)
        //let id = splice[1].split('?', 2)
        console.log(splice[0])

        //console.log(item.querySelector("div.title > a").innerHTML + ': ' + item.dataset.id)

        fetch('https://www.netflix.com/it/title/' + splice[0], {
            credentials: 'omit'
        }).then(onResponse).then(onText)

        count++
        await sleep(900);
    }

    console.log('Totale elementi in lista: ' + count)

    //let idsToCheck = document.querySelector("#appMountPoint > div > div > div:nth-child(1) > div.bd.dark-background > div.mainView > div > div.rowList").querySelectorAll('.rowListItem')
    let idsToCheck = document.querySelector("#main-view > div > div.galleryContent > div > div").querySelectorAll("div.ptrack-content > a")

    // https://stackoverflow.com/questions/35835362/what-does-dollar-sign-and-curly-braces-mean-in-a-string-in-javascript

    for (const [key, value] of Object.entries(list)) {
        console.log(`${value}`);
    }

    console.log('Dimensione lista: ' + Object.keys(list).length)

    for (item of idsToCheck) {
        let splice = item.getAttribute("href").split('watch/', 2).pop().split('?', 2)
        for (const [key, value] of Object.entries(list)) {
            if (splice[0] === `${key}`) {
                console.log('Corrispondenza trovata: ' + splice[0] + ' con ' + `${key}`)

                const infoDiv = document.createElement('div')
                const info = document.createElement('p')

                info.textContent = `${value}`

                infoDiv.classList.add('infoDiv')
                info.classList.add('info')

                const notes = item.parentElement.parentElement

                console.log(notes)

                notes.appendChild(infoDiv)
                infoDiv.appendChild(info)

                delete list[`${key}`]

                break
            }
        }
    }

    console.log('Dimensione lista: ' + Object.keys(list).length)

    const buttonForIds = document.querySelector('.buttonForIds')
    const loadingImage = document.querySelector('.loadingImage')

    buttonForIds.classList.remove('transparentBackground')
    loadingImage.remove()

    button.addEventListener('click', checkIds)
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const buttonContainer = document.querySelector("#appMountPoint > div > div > div:nth-child(1) > div.bd.dark-background > div.pinning-header > div > div.sub-header > div > div > div")
const button = document.createElement('div')
const list = {}
let key = 0

button.textContent = 'Verifica scadenze dei film'

button.classList.add('buttonForIds')

buttonContainer.appendChild(button)

button.addEventListener('click', scrollToBottom)

//document.querySelector("#appMountPoint > div > div > div:nth-child(1) > div.bd.dark-background > div.pinning-header > div > div > ul > li:nth-child(6) > a").addEventListener('click', function () {
//   const buttonContainer = document.querySelector("#appMountPoint > div > div > div:nth-child(1) > div.bd.dark-background > div.pinning-header > div > div.sub-header > div > div > div")
//   const button = document.createElement('div')
//   const list = {}
//   let key = 0
//
//   button.textContent = 'Verifica scadenze dei film'
//
//   button.classList.add('buttonForIds')
//
//   buttonContainer.appendChild(button)
//
//   button.addEventListener('click', scrollToBottom)
//)