<template>
  <div>
    <section class="hero is-fullheight" :class="[`is-${$route.name || 'primary'}`]">
      <header class="hero-head">
        <div class="container">
          <nav class="navbar is-spaced" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
              <nuxt-link to="/"  class="navbar-item has-text-weight-bold">
                Portfolio
              </nuxt-link>

              <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbar-menu" @click="toggleMenu">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>

            <div id="navbar-menu" class="navbar-menu" :class="{'is-active': isActive}">
              <div class="navbar-end">
                <nuxt-link to="/about" class="navbar-item">
                  About
                </nuxt-link>

                <nuxt-link to="/works" class="navbar-item">
                  Works
                </nuxt-link>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <main class="hero-body">
        <transition name="fade">
          <div class="container">
            <Nuxt />
          </div>
        </transition>
      </main>
    </section>
    <footer class="footer has-background-dark has-text-light">
      <div class="content has-text-centered">
        <div class="buttons justify-content-center">
          <a href="https://github.com/vsc-masato-tsunematsu" target="_blank" class="button is-github is-rounded">
            <span class="icon">
              <i class="fab fa-github"></i>
            </span>
            <span>GitHub</span>
          </a>
        </div>
        <small>
          Handcrafted with <i class="fas fa-heart"></i> by myself.
          Copyright &copy; 2019.
          <br>
          Made with
          <a href="https://nuxtjs.org/" target="_blank" class="has-text-light"><b>Nuxt.js</b></a>
          &
          <a href="https://bulma.io/" target="_blank" class="has-text-light"><b>Bulma</b></a>.
          <br><br>
          Hosted on <a href="https://pages.github.com/" target="_blank" class="has-text-light"><b>GitHub Pages</b></a>.
        </small>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Layout extends Vue {
  isActive: Boolean = false

  get colorName() {
    const root = this.$route.matched[0]
    switch (root.name) {
      case 'about':
        return 'about'
      case 'works':
        return "works"
      default:
        return "index"
    }
  }

  toggleMenu() {
    this.isActive = !this.isActive
  }
}
</script>

<style lang="scss">
.justify-content-center {
  justify-content: center;
}
ul.list-unstyled {
  list-style: none;
  margin: 0;
}
.margin-0-auto {
  margin: 0 auto !important;
}
.appear-active {
  transition: opacity 0.4s ease;
}
.page-enter-active, .page-leave-active {
  transition: all 0.2s ease;
}
.appear, .page-enter, .page-leave-active {
  opacity: 0;
}
</style>
