<template>
  <v-btn small>
    {{ label }}
  </v-btn>
</template>

<script lang="ts">
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: '000000'
    }
  }
}
</script>
