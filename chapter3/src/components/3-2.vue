<template>
  <div>
    {{ count }}
  </div>
</template>
<script>
  import store from 'src/store';
  export default {
    computed: {
      count () {
        return store.state.count;
      }
    }
  }
</script>
