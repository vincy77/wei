<template>
    <div id="header" class="mod-header">
        <p>this is bos...by vincy</p>
    </div>
</template>

<script type="text/javascript">
    export default {
        data () {
            return {
                msg:'hello vue'
            }
        }
    }
</script>

<style lang="less">
    .mod-header{
        position: fixed;
        background-color: #324057;
        height: 50px;
        width: 100%;
        z-index: 999;
        p{
            color: #fff;
            line-height: 50px;
            text-align: left;
            padding-left: 20px;
        }
        span{
            display: inline-block;
            color: #fff;
            line-height: 50px;
            text-align: right;
            padding-right: 20px;
        }
    }
</style>