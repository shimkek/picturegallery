
app.component('maximized', {
    props: {
        poster: {
        }
    },
    template:
    /*html*/
    `    
    <div class="maximized">
        <button class="maximized__close-button" @click="$emit('exit-maximized')">×</button>
        <div class="maximized__img-holder">
        <img :src="this.poster.src" class="maximized__img" >
        </div>
        <p class="maximized__text">Name:<span class="maximized__text_aligned-right"> {{poster.name}}</span></p>
        <p class="maximized__text">Coordinates:<span class="maximized__text_aligned-right">{{poster.coordinates}}</span></p>
        <p class="maximized__text">District:<span class="maximized__text_aligned-right">{{poster.district}}</span></p>
    </div>
    `
})