<template>
  <div>
    {{ multiply }}
  </div>
</template>
<script>
  import { mapGetters } from 'vuex';
  export default {
    computed: {
      ...mapGetters([
        'multiply'
      ]),
    }
  }
</script>
