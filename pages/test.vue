<template>
  <div class="container">
    <h2>Name: {{ user.name }}</h2>
    <p>Username: {{ user.username }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import type { IUser, IAsyncParams } from '@/models/User.ts'

@Component({
  components: {},
  async asyncData({ params, app }: IAsyncParams) {
    console.log(params)
    const data = await app.$axios.$get(
      `https://jsonplaceholder.typicode.com/users/1`
    )
    console.log(data)
    return {
      user: data
    }
  }
})
export default class Index extends Vue {
  user: IUser | null = null
}
</script>
