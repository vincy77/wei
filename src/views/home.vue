<template>
    <section>
        <bos-header></bos-header>
        <bos-nav></bos-nav>
        <router-view></router-view>
    </section>
</template>
<script>
    import bosHeader from '../components/bos-header.vue';
    import bosNav from '../components/bos-nav.vue';
    export default {
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        components: {bosHeader,bosNav}
    }
</script>