<template>
  <div class="has-text-centered">
    <h1 class="title">About</h1>
    <p class="subtitle">
      My english is not very good.
    </p>
    <div id="avater"></div>
    <div class="has-text-left">
      <div class="card" style="padding-top: 96px;">
        <div class="card-content">
          <!-- Profile -->
          <section class="content has-text-centered">
            <h2><i class="fas fa-terminal"></i> Masato Tsunematsu</h2>
            <p>
              I'm a coke drinking engineer, work for company based in Tokyo, Japan.<br>
              I can transform into legendary warriors known as the Cure Gorilla.
              With the assistance of creatures known as fairies,<br>
              use their physical powers and enhanced Banana to fight against evil forces and organizations who create monsters to bring misery to the Earth and further their plans.
            </p>
            <div class="buttons justify-content-center">
              <nuxt-link to="works" class="button is-works">
                <span class="icon">
                  <i class="fas fa-pen"></i>
                </span>
                <span>Works</span>
              </nuxt-link>
            </div>
            <hr>
            <div class="columns is-desktop">
            <div class="column">
                <section class="has-text-centered">
                  <h4><i class="fas fa-heart"></i> Love languages</h4>
                  <ul class="is-inline-block has-text-left margin-0-auto">
                    <li>Typescript</li>
                    <li>Ruby</li>
                    <li>Python</li>
                    <li>Go lang</li>
                  </ul>
                </section>
              </div>
              <div class="column">
                <section class="has-text-centered">
                  <h4><i class="fas fa-tools"></i> Magical weapons</h4>
                  <ul class="is-inline-block has-text-left margin-0-auto">
                    <li>Amazon Web Service</li>
                    <li>Visual Studio Code</li>
                    <li>GitHub</li>
                    <li>Slack</li>
                  </ul>
                </section>
              </div>
              <div class="column">
                <section class="has-text-centered">
                  <h4><i class="fas fa-book-open"></i> Holy Scriptures</h4>
                  <ul class="is-inline-block has-text-left margin-0-auto">
                    <li>Otome no Teikoku</li>
                    <li>HELLSING</li>
                    <li>Grappler Baki</li>
                    <li>Oyasumi Punpun</li>
                  </ul>
                </section>
              </div>
            </div>
          </section><!-- Profile -->
          <hr>
          <!-- Recent works -->
          <section class="content has-text-centered">
            <h2><i class="fas fa-newspaper"></i> Recent works</h2>
            <p>
              <i class="fas fa-pray"></i> WIP...
            </p>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class About extends Vue {
}
</script>

<style lang="scss" scoped>
#avater {
  position: relative;
  z-index: 2;
  width: 192px;
  height: 192px;
  background-image: url(https://picsum.photos/192/192?image=1074);
  background-size: cover;
  margin: 0px auto -96px;
  border-width: 8px;
  border-style: solid;
  border-color: white;
  border-image: initial;
  border-radius: 100%;
}
hr {
  margin: 3rem 0;
}
</style>
