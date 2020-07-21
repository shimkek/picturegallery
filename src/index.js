var picQuantity = 6;
var isMaximized = false;
//добавляет увеличенный просмотр элементу
const onclick = (id) => {
    const el = document.getElementById(id);
    el.addEventListener('click', showMaximized);
}
//добавляет постер в галлерею, устанавливает id, добавляет увеличенный просмотр
const addPoster = () => {
    picQuantity++;
    const gallery = document.getElementById('gallery');
    const gallery__poster = document.createElement('div');
    const gallery__img = document.createElement('img');
    const picSrc = 'https://picsum.photos/1920/1080?random=' + picQuantity + '.jpg';
    
    gallery__poster.className = "gallery__poster";
    gallery__img.className = "gallery__img";

    gallery__img.setAttribute("src", picSrc);
    gallery__img.id = picQuantity;

    gallery__poster.appendChild(gallery__img);
    gallery.appendChild(gallery__poster);

    onclick(picQuantity);
}
//создает 6 постеров
const loadMore = () => {
    for (i = 0; i < 6; i++) {
        addPoster();
    }
}

const minimizeInterface = () => {
    document.getElementById('gallery').style.width = '1040px';
    document.getElementById('gallery').style.marginLeft = '40px';
    document.getElementById('loadmore').style.width = '1140px';
    document.getElementById('loadmore').style.marginLeft = '0';
}

const maximizeInterface = () => {
    document.getElementById('gallery').style.width = '1560px';
    document.getElementById('gallery').style.marginLeft = '180px';
    document.getElementById('loadmore').style.width = '100%';
    document.getElementById('loadmore').style.marginLeft = 'auto';
}

const showMaximized = (e) => {
    minimizeInterface();
    const pictureID = e.target.id;
    //убирает предыдущее изображение
    if (isMaximized === true) {
        const currentImg = document.getElementById('maximized__img');
        currentImg.remove();
    };
    const clone = document.getElementById(pictureID).cloneNode(true);
    clone.className = 'maximized__img';
    clone.id = 'maximized__img';
    document.getElementById('maximized').style.visibility = 'visible';
    document.getElementById('maximized__img-holder').appendChild(clone);
    isMaximized = true;
}

document.getElementById('loadMoreButton').addEventListener('click', loadMore);

document.getElementById('download-button').addEventListener('click', function () {
    const pic = document.getElementById('maximized__img').cloneNode(true);
    pic.id = '';
    const img_container = document.createElement('div');
    img_container.className = 'original';
    img_container.id = 'original';
    pic.className = 'original__pic';
    img_container.appendChild(pic);
    const button = document.createElement('button');
    button.className = 'original__button';
    button.id = "original__button";
    const cancelSymbol = document.createTextNode('×');
    button.appendChild(cancelSymbol);
    img_container.appendChild(button);
    document.body.appendChild(img_container);
    document.getElementById('original__button').addEventListener('click', function () {
        document.getElementById('original').remove();
    });
});

const galleryImages = document.querySelectorAll('.gallery__img');
for (i = 0; i < galleryImages.length; i++) {
    galleryImages[i].addEventListener('click', showMaximized);
}

document.getElementById('close-button').addEventListener('click', function () {
    maximizeInterface();
    document.getElementById('maximized').style.visibility = 'hidden';
});

