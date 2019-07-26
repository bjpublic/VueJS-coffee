<template>
  <div>
    <button @click="incrementHandler">더하기</button>
  </div>
</template>
<script>
  import { mapActions } from 'vuex'
  export default {
    methods: {
      ...mapActions([
        'increment'
      ]),
      incrementHandler () {
        this.increment(3);
      }
    }
  }
</script>
