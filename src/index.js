var picQuantity = 6;
var isMaximized = false;

const onclick = (id) => {
    document.getElementById(id).addEventListener('click', function () {
        showMaximized(id);
    });
}

const addPoster = () => {
    picQuantity++;
    const gallery = document.getElementById('gallery');
    const gallery__poster = document.createElement('div');
    gallery__poster.className = "gallery__poster";
    const gallery__img = document.createElement('img');
    gallery__img.className = "gallery__img";
    const picSrc = 'https://picsum.photos/1920/1080?random=' + picQuantity + '.jpg';
    gallery__img.setAttribute("src", picSrc);
    gallery__img.id = picQuantity;
    gallery__poster.appendChild(gallery__img);
    gallery.appendChild(gallery__poster);
    onclick(picQuantity); //doesn't work with random photos
}

const loadMore = () => {
    for (i = 0; i < 6; i++) {
        addPoster();
    }
}

const minimizeInterface = () => {
    document.getElementById('gallery').style.width='1040px';
    document.getElementById('gallery').style.marginLeft='40px';
    document.getElementById('loadmore').style.width='1140px';
    document.getElementById('loadmore').style.marginLeft='0';
}

const maximizeInterface = () => {
    document.getElementById('gallery').style.width='1560px';
    document.getElementById('gallery').style.marginLeft='180px';
    document.getElementById('loadmore').style.width='100%';
    document.getElementById('loadmore').style.marginLeft='auto';
}

const showMaximized = (pictureID) => {
    minimizeInterface();
   // const imgSrc = "https://picsum.photos/1920/1080?random=" + pictureID;
   // document.getElementById('maximized__img').setAttribute('src', imgSrc);
   if (isMaximized === true) {
    const currentImg = document.getElementById('maximized__img');
    currentImg.remove();
   };
    const clone = document.getElementById(pictureID).cloneNode(true);
    clone.className = 'maximized__img';
    clone.id='maximized__img';
    document.getElementById('maximized').style.visibility='visible';
    document.getElementById('maximized__img-holder').appendChild(clone);
    isMaximized = true;
}

document.getElementById('loadMoreButton').addEventListener('click', function () {
    loadMore();
});

document.getElementById('download-button').addEventListener('click', function () {
    const pic = document.getElementById('maximized__img').cloneNode(true);
    pic.id='';
    const img_container = document.createElement('div');
    img_container.className = 'original';
    img_container.id='original';
    pic.className= 'original__pic';
    img_container.appendChild(pic);
    const button = document.createElement('button');
    button.className= 'original__button';
    button.id="original__button";
    const cancelSymbol = document.createTextNode('×');
    button.appendChild(cancelSymbol);
    img_container.appendChild(button);
    document.body.appendChild(img_container);
    document.getElementById('original__button').addEventListener('click', function () {
        document.getElementById('original').remove();
    });
});

document.getElementById(1).addEventListener('click', function () {
    showMaximized(1);
});
document.getElementById(2).addEventListener('click', function () {
    showMaximized(2);
});
document.getElementById(3).addEventListener('click', function () {
    showMaximized(3);
});
document.getElementById(4).addEventListener('click', function () {
    showMaximized(4);
});
document.getElementById(5).addEventListener('click', function () {
    showMaximized(5);
});
document.getElementById(6).addEventListener('click', function () {
    showMaximized(6);
});
document.getElementById('close-button').addEventListener('click', function () {
    maximizeInterface();
    document.getElementById('maximized').style.visibility='hidden';
});


//             <img class= "maximized__img" id="maximized__img" src=""> 