<template>
    <div style="margin: 30px">
        <masonry
            :cols="masonry.columns"
            :gutter="masonry.gutter">
            <div v-for="(item, index) in items" :key="index">
                <div style="margin: 10px" class="card">
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <img :src="item.image[3]['#text']" alt="cover image">
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                <p class="title is-6">{{ item.name }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </masonry>
    </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      masonry: {
        columns: 3,
        gutter: 10
      }
    }
  },
  methods: {
    ...mapGetters('artist', [
      'getTopAlbums'
    ])
  },
  computed: {
    items () {
      return this.getTopAlbums()
    }
  }
}
</script>

<style lang="scss">

</style>
