const addPoster = () => {
    const gallery = document.getElementById('gallery');
    const gallery__poster = document.createElement('div');
    gallery__poster.className = "gallery__poster";
    const gallery__img = document.createElement('img');
    gallery__img.className = "gallery__img";
    gallery__poster.appendChild(gallery__img);
    gallery.appendChild(gallery__poster);
}

const loadMore = () => {
    for (i = 0; i < 6; i++) {
        addPoster();
      }
}

//         <div class="gallery__poster">
//         <img class="gallery__img" src="https://picsum.photos/1920/1080">
//         </div>