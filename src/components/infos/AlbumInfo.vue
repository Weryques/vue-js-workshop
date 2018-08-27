<template>
    <div>
        <div v-if="albumInfo" class="card">
            <div v-if="albumInfo.image" class="card-image">
                <figure class="image is-4by3">
                    <img :src="albumInfo.image[5]['#text']" alt="Cover image">
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-content">
                        <h1 class="title">
                            {{ albumInfo.name }}
                        </h1>
                        <div v-if="albumInfo.tags" class="field is-grouped is-grouped-multiline">
                            <div v-for="(tag, index) in albumInfo.tags.tag" :key="index" class="control">
                                <div class="tags has-addons">
                                    <a :href="tag.url" class="tag">{{ tag.name }}</a>
                                    <a :href="tag.url" class="tag">
                                        <b-icon
                                                size="is-small"
                                                icon="tag" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div v-if="albumInfo.wiki">
                            <hr>
                            <div class="has-text-justified">
                                <small v-html="albumInfo.wiki.summary" />
                            </div>
                            <hr>
                        </div>
                        <b-collapse v-if="albumInfo.tracks" :open="false">
                            <div class="is-inline-flex" slot="trigger" slot-scope="props">
                                <h4>Tracks</h4>
                                <a class="is-right">
                                    <b-icon
                                            :icon="props.open ? 'menu-up' : 'menu-down'">
                                    </b-icon>
                                </a>
                            </div>
                            <ul class="is-dark notification">
                                <li v-for="(track, key) in albumInfo.tracks.track" :key="key">
                                    {{ `${key+1} ${track.name}` }}
                                    <hr class="dropdown-divider">
                                </li>
                            </ul>
                        </b-collapse>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'

export default {
  created () {
    this.fetchAlbumInfo({
      albumName: this.$route.params.albumName,
      artistName: this.$route.params.artistName
    })
  },
  computed: {
    albumInfo () {
      return this.getAlbumInfo()
    }
  },
  methods: {
    ...mapActions('album', [
      'fetchAlbumInfo'
    ]),
    ...mapGetters('album', [
      'getAlbumInfo'
    ])
  }
}
</script>

<style>

</style>
