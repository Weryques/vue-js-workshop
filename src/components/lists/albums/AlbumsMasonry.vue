<template>
    <div class="hero is-fullheight" style="margin: 30px">
        <masonry
                :cols="masonry.columns"
                :gutter="masonry.gutter">
            <template v-for="(item, index) in items">
                <router-link
                        v-if="item.name != '(null)'"
                        :key="index"
                        tag="a"
                        :to="`/artist/${item.artist.name.replace(/\//g, '%2F').replace(/#/g, '%23')}/${item.name.replace(/\//g, '%2F').replace(/#/g, '%23')}`">
                    <div :style="{
                      marginBottom: masonry.gutter.default,
                      marginTop: masonry.gutter.default
                    }" class="card">
                        <div class="card-image">
                            <figure class="image is-4by3">
                                <img :src="item.image[3]['#text'] ? item.image[3]['#text'] : albumPlaceholderImage" alt="Cover image">
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-content">
                                    <h1 class="title is-6">{{ item.name }}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </router-link>
            </template>
        </masonry>
    </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      masonry: {
        columns: {
          default: 6,
          1000: 3,
          700: 2,
          400: 1
        },
        gutter: {
          default: '20px'
        }
      },
      albumPlaceholderImage: require('@/assets/placeholder-album.png')
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

<style lang="scss" scoped>

    @keyframes appear {
        from {
            opacity: 0;
            transform: translateY(-30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }

    }

    .card {
        animation-name: appear;
        animation-duration: 0.6s;

        transition-duration: 0.3s;
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);

        &:hover {
            -webkit-transform: scale(1.05);
            -ms-transform: scale(1.05);
            transform: scale(1.05);
        }
    }

</style>
