var picQuantity = 6;

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
    gallery__poster.id = picQuantity;
    const gallery__img = document.createElement('img');
    gallery__img.className = "gallery__img";
    const picSrc = 'https://picsum.photos/1920/1080?random=' + picQuantity + '.jpg';
    gallery__img.setAttribute("src", picSrc);
    gallery__poster.appendChild(gallery__img);
    gallery.appendChild(gallery__poster);
  //  onclick(picQuantity); doesn't work with random photos
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
    const imgSrc = "https://picsum.photos/1920/1080?random=" + pictureID;
    document.getElementById('maximized__img').setAttribute('src', imgSrc);
    document.getElementById('maximized').style.visibility='visible';
}

document.getElementById('loadMoreButton').addEventListener('click', function () {
    loadMore();
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



