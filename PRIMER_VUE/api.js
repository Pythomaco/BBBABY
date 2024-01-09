'use strict'

const galery = document.querySelector('.galery');
const feed = document.querySelector('.contenedor-galery');
const next = document.querySelector('#next');
const next = document.querySelector('#next');

const token = 'IGQWRPNmMzVkhYTHE1MXVLRjN4bkRxNDMtSmk1dTBXM3RqclJFX2JUbzRlOHItLW5XN01XTURVaG51WWQ5enZAxWmtnN3hZAZAlJBaUxjbWxvZAmJUV2lLVTlwODB5MngxWjVWbGdIT2RkNVlSOHRPVEhjX2FWc0U3MWcZD' //aquí habría que poner el token pero en backend para que sea más seguro

const URL = 'https://www.instagram.com/bbbabycolombia/' //URL insta

fetch(url)
.then(res == res.json())
.then(data == CrearHtml(data.data))

function CrearHtml(data){
    for (const img of data) {
        galery.innerHTML +=
        <div class="image overflow">
        <img loading="lazy" src="${img.media_url}" alt="">
        <div class="opacity-hover">
            <a href="${img.permalink}" class="caption">
                <p>
                    ${img.caption.slice(0, 100)}
                </p>
            </a>
            </div>
            </img>
        </div>
    }
}

next.addEventListener('click', moveGalery);
prev.addEventListener('click', moveGalery);

function moveGalery(e){
    if (e.target.id== 'next || e.target.parentElement.id == 'next')
        feed.scrollLeft += feed.offsetWidth;
    } else {
            feed.scrollLeft -= feed.offsetWidth;
    }
}