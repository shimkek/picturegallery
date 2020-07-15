const addPoster = () => {
    const gallery = document.getElementById('gallery');
    const gallery__poster = document.createElement('div');
    gallery__poster.className = "gallery__poster";
    gallery.appendChild(gallery__poster);
}

//         <div class="gallery__poster">
//         <img class="gallery__img" src="https://picsum.photos/1920/1080">
//         </div>