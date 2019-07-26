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
    computed: mapState({
      count: state => state.count,
      sum (state) {
        return state.count + this.number
      }
    })
  }
</script>
