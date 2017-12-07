<template>

       <div id="app">
           <router-view/>
       </div>

</template>

<script>

    export default {
        name: 'app',

    }
</script>
<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    html,body{
        position: relative;
        width: 100%;
        height: 100%;
    }
    html,body,div,p,span,img{
        margin: 0;
        padding: 0;
    }
    a{
        color: inherit;
        text-decoration: none;
        display: block;
    }
</style>
