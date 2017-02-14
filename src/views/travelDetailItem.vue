<template>
    <section class="mod-content" v-if="scenicDetail">
        <p class="scenic-name">{{scenicDetail.name}}</p>
        <p class="scenic-abstract">{{scenicDetail.abstract}}</p>
        <p class="scenic-name">简介</p>
        <p class="scenic-description">{{scenicDetail.description}}</p>
        <p class="scenic-star"><span class="scenic-name">推荐星级：</span>{{scenicDetail.star}}</p>
    </section>
</template>

<script>
    //接口
    import travel from '../factory/travel';
    export default{
        data () {
            return {
                scenic: null,
                scenicDetail: null
            }
        },
        mounted: function () {
            let that = this;
            that.scenic = that.getQueryString('name');
            var data = {
                id: 'lijiang'
            };
            travel.detail(data).then(function (response) {
                if(response.data.status == 'Success'){
                    console.log(response.data.result);
                    that.scenicDetail = response.data.result;
                    //return response.data.result;
                }else{
                    console.log('查询失败');
                    return false;
                }
            });
        },
        methods: {
            getQueryString (name) {
                var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
                var r = window.location.search.substr(1).match(reg);
                console.log(r);
                if (r != null) return unescape(r[2]); return null;
            }
        }
    }
</script>

<style lang="less">
    .mod-content{
        position: absolute;
        top: 50px;
        left: 180px;
        padding: 10px;
        .scenic-name{
            font-size: 20px;
            text-align: left;
            margin: 10px;
            color: #20a0ff;
        }
        .scenic-abstract{
            margin: 10px;
            text-align: left;
        }
        .scenic-description{
           margin: 10px;
            text-align: left;
        }
        .scenic-star{
            text-align: left;
        }
    }
</style>