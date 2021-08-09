<template>
  <div id="publication-group">
    <b-card img-left body-class="card-publication" v-for="publication in publications">
      {{
        `${getAuthor(publication.bibtex)} (${getYear(publication.bibtex)}). ${getTitle(publication.bibtex)}, In ${getConference(publication.bibtex)}`
      }}
      <b-button @click="openModal(publication)" target="_blank">
        <b-icon icon="info-circle" aria-hidden="true"></b-icon>
      </b-button>
    </b-card>
    <b-modal id="modal" title="More information" centered>
      <div style="display: flex; flex-direction: column" className="mx-5">
        <b-button v-if="selected_publication.filePath" className="button-publication m-2" v-bind:href=publication.filePath>
          <b-icon icon="download" aria-hidden="true"></b-icon>
          Download File
        </b-button>

        <b-button v-if="selected_publication.bibtex" className="button-publication m-2"
                  v-on:click="copyToClipboard(selected_publication.bibtex)">
          <b-icon icon="clipboard" aria-hidden="true"></b-icon>
          Copy Bibtex
        </b-button>

        <b-button v-if="selected_publication.officialLink" className="button-publication m-2"
                  v-bind:href="selected_publication.officialLink" target="_blank">
          <b-icon icon="link" aria-hidden="true"></b-icon>
          Go to Official page
        </b-button>

        <b-button v-if="selected_publication.arxivLink" className="button-publication m-2"
                  v-bind:href="selected_publication.arxivLink" target="_blank">
          <b-icon icon="link" aria-hidden="true"></b-icon>
          Go to Arxiv page
        </b-button>

      </div>
    </b-modal>
  </div>
</template>

<script>
import bibtexParse from "@orcid/bibtex-parse-js"
import copy from 'copy-to-clipboard'


export default {
  name: "PublicationGroup",

  props: {
    publications: Array
  },
  computed: {
    showModal() {
      return false;
    }
  },
  data(){
    return {
      selected_publication: Object
    }
  },
  methods: {

    getAuthor(bibtex) {
      return bibtexParse.toJSON(bibtex)[0].entryTags.author
    },

    getYear(bibtex) {
      return bibtexParse.toJSON(bibtex)[0].entryTags.year
    },

    getTitle(bibtex) {
      return bibtexParse.toJSON(bibtex)[0].entryTags.title
    },

    getConference(bibtex) {
      return bibtexParse.toJSON(bibtex)[0].entryTags.booktitle
    },

    copyToClipboard(bibtex) {
      try {
        copy(bibtex)
        this.clipboardSuccessHandler()
      } catch (e) {
        this.clipboardErrorHandler()
      }
    },

    clipboardSuccessHandler() {
      this.$bvToast.toast(`The bibtex was successfully copied`, {
        title: 'Copied successfully',
        autoHideDelay: 5000,
        appendToast: true
      })
    },

    clipboardErrorHandler() {
      this.$bvToast.toast(`Failed to copy bibtex to clipboard`, {
        title: 'Failed to copy',
        autoHideDelay: 5000,
        appendToast: true
      })
    },

    openModal(publication){
      this.selected_publication = publication
      this.$bvModal.show('modal')
    }
  },
}
</script>

<style scoped>
</style>