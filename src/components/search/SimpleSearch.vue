<template>
    <div style="width: 40%">
        <b-field>
            <b-autocomplete
                @input="searchAutoComplete()"
                v-model="anyText"
                :loading="isSearching"
                :data="searchResult"
                placeholder="Search artist"
                field="name"
                @select="(option) => selected = option">
                <template slot-scope="props">
                    <div class="media">
                        <div class="media-left">
                            <img width="32" :src="props.option.image[0]['#text']">
                        </div>
                        <div class="media-content">
                            {{ props.option.name }}
                        </div>
                    </div>
                </template>
            </b-autocomplete>
        </b-field>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import debounce from 'lodash.debounce'

export default {
  data () {
    return {
      anyText: '',
      isSearching: false,
      searchResult: [],
      selected: ''
    }
  },
  watch: {
    selected (newValue, oldValue) {
      if (newValue) {
        this.fetchTopAlbums(newValue.name)
      }
    }
  },
  methods: {
    ...mapActions('artist', [
      'fetchTopAlbums',
      'searchArtist'
    ]),
    ...mapGetters('artist', [
      'getSearchResult'
    ]),
    searchAutoComplete: debounce(function () {
      this.isSearching = true
      this.searchResult = []

      if (!this.anyText) {
        this.isSearching = false
        return
      }

      this.searchArtist(this.anyText)
        .then(() => {
          this.searchResult = this.getSearchResult().artistmatches.artist

          this.isSearching = false
        })
        .catch(error => {
          console.error(error)

          this.isSearching = false
        })
    }, 500)
  }
}
</script>

<style lang="scss">

</style>
