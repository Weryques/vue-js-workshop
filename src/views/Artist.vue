<template>
    <div>
        <header>
            <section class="hero is-dark">
                <div class="hero-head">
                    <nav class="navbar">
                        <div class="container">
                            <div class="navbar-brand has-text-centered">
                                <router-link to="/" tag="a" class="has-text-white title navbar-item">MUSIC FINDER</router-link>
                            </div>
                        </div>
                    </nav>
                </div>
            </section>
        </header>
        <body>
            <div style="margin: 30px">
                <div v-if="artistInfo" class="columns">
                    <div class="column">
                        <router-view />
                    </div>
                    <div class="column is-7">
                        <div class="media box">
                            <div class="media-content">
                                <div class="content has-text-justified">
                                    <h1 class="title">{{ artistInfo.name }}</h1>
                                    <div v-if="artistInfo.bio" v-html="artistInfo.bio.summary"></div>

                                    <br>

                                    <p v-if="artistInfo.bio">Published: {{ artistInfo.bio.published }}</p>

                                    <hr>

                                    <h4 v-if="artistInfo.similar">Similar artists:</h4>
                                    <ul v-if="artistInfo.similar" class="is-unstyled">
                                        <li v-for="(similarArtist, index) in artistInfo.similar.artist" :key="index">
                                            <div class="media">
                                                <div class="media-left">
                                                    <img width="32" :src="similarArtist.image[0]['#text']">
                                                </div>
                                                <div class="media-content">
                                                    {{ similarArtist.name }}
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <figure v-if="artistInfo.image" class="image is-128x128 media-right">
                                <img :src="artistInfo.image[4]['#text']" alt="Artist">
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  created () {
    this.fetchArtistInfo(this.$route.params.artistName)
  },
  computed: {
    artistInfo () {
      return this.getArtistInfo()
    }
  },
  methods: {
    ...mapGetters('artist', [
      'getArtistInfo'
    ]),
    ...mapActions('artist', [
      'fetchArtistInfo'
    ])
  }
}
</script>

<style lang="scss" scoped>

    ul.is-unstyled {
        list-style: none;
        margin: 0;
        padding: 0;
    }

</style>
