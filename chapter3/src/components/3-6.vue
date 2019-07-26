<template>
  <div>
    {{ count }} + {{ number }} = {{ sum }}
  </div>
</template>
<script>
  import { mapState } from 'vuex';
  export default {
    data () {
      return {
        number: 3
      }
    },
    computed: {
      sum () {
        return this.count + this.number
      },
      ...mapState([
        'count'
      ])
    }
  }
</script>
