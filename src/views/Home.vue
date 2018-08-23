<template>
  <div>
    <div v-if="showWelcomeSlide" @click="showWelcomeSlide = false">
      <welcome-slide/>
    </div>
    <div v-else>
      <header>
        <section class="hero is-primary">
          <div class="hero-head">
            <nav class="navbar">
              <div class="container">
                <div class="navbar-brand has-text-centered">
                  <h1 class="has-text-white title navbar-item">MUSIC FINDER</h1>
                </div>
              </div>
            </nav>
          </div>

          <!-- Hero content: will be in the middle -->
          <div class="hero-body">
            <div class="container has-text-centered">
              <simple-search />
            </div>
          </div>

          <!-- Hero footer: will stick at the bottom -->
          <div class="hero-foot">
            <nav class="tabs">
              <div class="container">
                <ul>
                </ul>
              </div>
            </nav>
          </div>
        </section>
      </header>
      <body>
      <div>
        <albums-masonry />
      </div>
      </body>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import WelcomeSlide from '@/components/welcome/WelcomeSlide.vue'
import AlbumsMasonry from '@/components/lists/albums/AlbumsMasonry.vue'
import SimpleSearch from '@/components/search/SimpleSearch.vue'

export default {
  data () {
    return {
      showWelcomeSlide: true
    }
  },
  components: {
    WelcomeSlide,
    AlbumsMasonry,
    SimpleSearch
  }
}
</script>
