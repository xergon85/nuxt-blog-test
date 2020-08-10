<template>
  <section class="container">
    <div>
      <logo />
      <h1 class="title">
        Storyblok-blog
      </h1>
      <h2 class="subtitle">
        Awesome blog
      </h2>
      <div class="links">
        <a href="http://nuxtjs.org/">Documentation</a>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>
