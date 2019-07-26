<template>
  <div id="post">
    <h4>Post 컴포넌트입니다.</h4>
    <!-- 중첩된 router-view에 다른 컴포넌트를 렌더할 수 있다. -->
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    name: "Post"
  }
</script>
