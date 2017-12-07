<template>
    <div class="wrap-box">
        <sidebar></sidebar>
        <div id="wrap">
            <router-view/>
        </div>
    </div>
</template>

<script>
    import sidebar from '@/components/sidebar'
    export default {
        name: 'app',
        components:{
            sidebar
        }
    }
</script>

<style>
    #wrap {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        padding-left: 200px;
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
    .wrap-box{
        position: relative;
        width: 100%;
        height: 100%;
    }
</style>
