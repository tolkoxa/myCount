<template>
    <div>
        Login
        <router-link to="/">Home</router-link>
        {{ newcount_data }}
        123
    </div>
</template>

<script>
export default {
    props: {
      newcount_data: {
        type: Object,
        default() {
          return {}
        }
      }
    }
}
</script>