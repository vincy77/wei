<template>
  <div id="app">
    <!--<bos-header></bos-header>-->
    <!--<bos-nav></bos-nav>-->
    <router-view></router-view>
  </div>
</template>

<script>
  import bosHeader from './components/bos-header.vue';
  import bosNav from './components/bos-nav.vue';
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted: function() {
    console.log('this is app...');
  },
  components: {bosHeader,bosNav}
}
</script>

<style>
  body,section,div,ul,p,h1,h2,h3,h4,h5,h6,dd,dl{
    padding:0;
    margin:0;
    font-family:"Helvetica Neue";
  }
  section,div,img,li{
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  body{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  li{
    list-style: none;
  }
  a{
    text-decoration: none;
    outline: none;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  //margin-top: 60px;
}

a {
  color: #2c3e50;
  text-decoration: none;
}
  .mod-content{
    position: absolute;
    top: 50px;
    left: 180px;
    padding: 10px;
  }
</style>
