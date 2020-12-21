app.component('gallery-poster', {
    props: {
        poster: {}
    },
    data () {
        return {
        }
    },
    methods: {
        maximize () {
            console.log('poster component');
            let poster = {
                name: this.poster.name,
                coordinates: this.poster.coordinates_geo_object,
                district: this.poster.district,
                src: this.poster.preview
            };
            console.log(poster);
            this.$emit('maximize-poster', poster);
        }
    },
    computed: {

    },
    template: 
    /*html*/
    `
    <div class="gallery__poster" @click="maximize">
        <img class="gallery__img" :src="this.poster.preview">
    </div>
    `
})