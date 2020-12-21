app.component('loadmore-button', {
    data () {
        return {
        }
    },
    template:
    /*html*/
    `    
    <div class="loadmore">
    <button class="loadmore__button" @click="this.$root.fetchImages">
        ↻ Load more
    </button>
    </div>`
})