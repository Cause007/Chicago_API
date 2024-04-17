//Declarations for our title values

async function clickedEvent(img_index) {
    let artID = document.getElementsByTagName('img')[img_index].attributes[1].value;

    let request = new Request(`https://api.artic.edu/api/v1/artworks/${artID}?fields=title,artist_display,date_display,description`, {
        method: 'GET'
    });

    let result = await fetch(request);
    let response = await result.json();

    console.log(response)
    let artTitle = response.data.title;
    let artArtist = response.data.artist_display;
    let artDate = response.data.date_display;
    let artDescription = response.data.description

    let markup =    `<div class="modal-header"><h1>${artTitle}</h1>
                    </div>
                    <div class="modal-body"><p>${artArtist}</p>
                        <p>\n${artDate}</p>
                        <p>\n${artDescription}</p>
                    </div>`

    document.querySelector('.modal').insertAdjacentHTML('beforeend', markup)
}

const openModalButtons = document.querySelectorAll('[data-modal-target]')
// const closeModalButtons = document.querySelectorAll('[data-modal-close]')
const overlay = document.getElementById('overlay')


openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

function openModal(modal) {
if (modal == null) return
modal.classList.add('active')
overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
    document.querySelector('.modal-header').remove();
    document.querySelector('.modal-body').remove()
}

overlay.addEventListener('click', () => {
        const modals = document.querySelectorAll('.modal.active')
        modals.forEach(modal => {
            closeModal(modal)
    }) 
})


function getInfo(id, event) {
    switch(id){
        case 'fig1': {
            event.stopPropagation();
            clickedEvent(0)
            break;
        }
        case 'fig2': {
            event.stopPropagation();
            clickedEvent(1)
            break;
        }
        case 'fig3': {
            event.stopPropagation();
            clickedEvent(2)
            break;
        }
        case 'fig4': {
            event.stopPropagation();
            clickedEvent(3)
            break;
        }
        case 'fig5': {
            event.stopPropagation();
            clickedEvent(4)
            break;
        }
        case 'fig6': {
            event.stopPropagation();
            clickedEvent(5)
            break;
        }
    }
}

// /**
// *@param url
// *
// // *url = Song Preview_url
// // *
// // *Function will return an audio clip given by the preview url
// // */
// // function songSnippet(url){
// //     playSong = new Audio(url);
// //     return playSong.play()
// // }

// // /**
// // *No param
// // *
// // *Function returns event to stop song snippet
// // */
// // function stopSnippet() {
// //     return playSong.pause();
// // }