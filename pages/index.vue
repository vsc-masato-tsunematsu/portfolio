<template>
  <div class="has-text-centered">
    <h1 class="title">
      Portfolio
    </h1>
    <p class="subtitle">
      My awe-inspiring brilliant cool dignified excellent fabulous godlike portfolio
    </p>
    <nuxt-link to="about" class="button is-about">
      <span class="icon">
        <i class="fas fa-terminal"></i>
      </span>
      <span>About</span>
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  metaInfo: {
    title: 'Top'
  }
})
export default class Index extends Vue {}
</script>

<style lang="scss" scoped>
.spinner {
  margin: 1rem auto;
}
</style>
