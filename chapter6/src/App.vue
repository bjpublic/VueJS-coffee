<template>
  <div id="app">
    <router-view name="header" />
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
  @import 'http://localhost:8000/assets/index.css'
</style>
