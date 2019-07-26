<template>
  <div>
    <button @click="increment">더하기</button>
  </div>
</template>
<script>
  import { mapMutations } from "vuex"
  export default {
    methods: {
      ...mapMutations([
        "INCREMENT"
      ]),
      increment () {
        this.INCREMENT(2)
      }
    }
  }
</script>
