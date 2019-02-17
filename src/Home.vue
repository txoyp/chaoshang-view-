<template>
    <div>
        <Header></Header>
        <router-view/>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from './views/Header'
    import Footer from './views/Footer'

    export default {
        components:{
            Header,Footer
        }
    }
</script>

<style scoped>

</style>