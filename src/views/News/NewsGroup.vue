<template>
<div id="news-group">
  <b-card
      v-for="_new in news"
      v-bind:img-src="require('../../'+_new.imageSource)"
      img-left
      img-width="20%"
      v-bind:title="_new.title"
      v-bind:sub-title="_new.date"
      class="mb-3"
  >{{_new.description}}</b-card>
</div>
</template>

<script>
export default {
  name: "NewsGroup",
  props: {
    news: Array
  }
}
</script>

<style scoped>

</style>