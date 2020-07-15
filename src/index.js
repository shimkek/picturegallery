var picQuantity = 6;

const addPoster = () => {
    picQuantity++;
    const gallery = document.getElementById('gallery');
    const gallery__poster = document.createElement('div');
    gallery__poster.className = "gallery__poster";
    const gallery__img = document.createElement('img');
    gallery__img.className = "gallery__img";
    const picSrc = 'https://picsum.photos/1920/1080?random='+ picQuantity+'.jpg';
    gallery__img.setAttribute("src", picSrc);
    gallery__poster.appendChild(gallery__img);
    gallery.appendChild(gallery__poster);
}

const loadMore = () => {
    for (i = 0; i < 6; i++) {
        addPoster();
      }
}

document.getElementById("loadMoreButton").addEventListener("click", function(){
    loadMore();
  });


