const app = Vue.createApp({
    data() {
        return {
            pictureQuntity: 0,
            page: 0,
            gallery: [],
            isMaximized: false,
            maximizedPoster: {
                name: null,
                district: null,
                coordinates: null,
                src: null
            }
        }
    },
    methods: {
        async fetchImages () {
            this.page++;
            this.pictureQuntity = this.pictureQuntity + 6;
            let response = await fetch(this.fetchUrl);
            let posters = await response.json();
            console.log(posters);
            for (i=0; i< posters.data.length; i++) {
                this.gallery.push(posters.data[i]);
            }
        }, 
        showMaximized (poster) {
            this.maximizedPoster.name = poster.name;
            this.maximizedPoster.coordinates = poster.coordinates;
            this.maximizedPoster.district - poster.district;
            this.maximizedPoster.src - poster.src;
            this.isMaximized = true;
        }
    },
    computed: {
      fetchUrl () {
        return 'https://okolo.city/api/v1/subjects?only_paid=0&page='+ this.page + '&per_page=6'+ '&pagination_hash_random=1';
      }  
    },
    async mounted () {
        this.fetchImages();
    }
})
