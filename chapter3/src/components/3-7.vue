<template>
  <div>
    {{ multiply }}
  </div>
</template>
<script>
  import { mapState } from 'vuex';
  export default {
    computed: {
      multiply () {
        return this.count * this.count
      },
      ...mapState([
        'count'
      ])
    }
  }
</script>
