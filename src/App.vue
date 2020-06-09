<template>

  <div id="app">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet"> 
    <router-view></router-view>
  </div>

</template>
  

<script>
export default {
  name: 'app',
}

</script>

<style>
*{
 font-family: 'Roboto', sans-serif;
}

.container{
  max-width:50%;
  margin:0 auto;
  background-color:white;
  text-align:center;
  padding:50px 0;

}


</style>
