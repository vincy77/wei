<template>
    <el-col :span="8">
        <div style="width:180px;position: fixed;margin-top: 50px;height: 100%">
            <el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark"
                     unique-opened router>
                <section v-for="(item, index) in $router.options.routes" v-if="!item.hidden">
                    <el-submenu :index="index+''" v-if="!item.leaf">
                        <template slot="title">{{item.name}}</template>
                        <el-menu-item v-for="sub in item.children" :index="sub.path" v-if="!sub.hidden">{{sub.name}}</el-menu-item>
                    </el-submenu>
                    <el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path">{{item.children[0].name}}</el-menu-item>
                </section>
            </el-menu>
        </div>
    </el-col>
</template>
<script>
    export default {
        data() {
            return {
            }
        },
        mounted: function() {
            console.log('this is nav...');
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>
<style lang="less">
    .el-menu{
        height: 100%;
    }
</style>