<template>
  <div id="app">
    <Example01 />
    <Example02 />
    <Example03 />
    <Example04 />
    <Example05 />
    <Example06 />
    <Example07 />
    <Example08 />
    <Example09 />
  </div>
</template>

<script>
  import Example01 from "./components/3-2";
  import Example02 from "./components/3-4";
  import Example03 from "./components/3-5";
  import Example04 from "./components/3-6";
  import Example05 from "./components/3-7";
  import Example06 from "./components/3-11";
  import Example07 from "./components/3-13";
  import Example08 from "./components/3-16";
  import Example09 from "./components/3-17";
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Example01,
    Example02,
    Example03,
    Example04,
    Example05,
    Example06,
    Example07,
    Example08,
    Example09
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
