<template>
    <section class="mod-content">
        <el-input v-model="travelName" class="travel-name" placeholder="请输入景点的拼音"></el-input>
        <el-button type="primary" v-on:click="travelSearch()">搜索</el-button>
        <section class="hot-travel">
            <h3>热门推荐</h3>
        </section>
        <section class="hot-travel">
            <el-carousel :interval="4000" type="card" height="200px">
                <el-carousel-item v-for="item in 6">
                    <!--<router-link :to="baidu" style="display: inline-block;height: 100%;width:100%">-->
                        <!--<h3>{{ item }}</h3>-->
                    <!--</router-link>-->
                    <a href="https://www.baidu.com/" target="_blank">
                        <h3>{{item}}</h3>
                    </a>
                </el-carousel-item>
            </el-carousel>
        </section>
        <section class="hot-travel">
            <p>国内</p>
        </section>
        <section>
            <el-row>
                <el-col :span="3" v-for="(item, index) in hotTravel" class="hot-travel-item">
                    <div v-on:click="goTravelDetailItem(item.key)">
                        <el-card :body-style="{ padding: '7px' }">
                            <img :src="item.img" class="image">
                            <div class="hot-travel-title">
                                <span>{{item.title}}</span>
                                <div class="bottom clearfix">
                                    <time class="time">推荐指数<i class="el-icon-star-on hot-icon" v-for="(i, index) in item.hot"></i></time>
                                    <!--<el-button type="text" class="button">操作按钮</el-button>-->
                                </div>
                            </div>
                        </el-card>
                    </div>
                </el-col>
            </el-row>
        </section>
        <section class="hot-travel">
            <p>国外</p>
        </section>
        <section style="margin-bottom: 60px;">
            <el-row>
                <el-col :span="3" v-for="(item, index) in foreignHotTravel" class="hot-travel-item">
                    <el-card :body-style="{ padding: '7px' }">
                        <img :src="item.img" class="image">
                        <div class="hot-travel-title">
                            <span>{{item.title}}</span>
                            <div class="bottom clearfix">
                                <time class="time">推荐指数<i class="el-icon-star-on hot-icon" v-for="(i, index) in item.hot"></i></time>
                                <!--<el-button type="text" class="button">操作按钮</el-button>-->
                            </div>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </section>
        <section>
            <el-dialog :title="scenicDetail.name + '介绍'" v-model="dialogTableVisible">
                <p class="scenic-name">{{scenicDetail.name}}</p>
                <p class="scenic-abstract">{{scenicDetail.abstract}}</p>
                <p class="scenic-name">简介</p>
                <p class="scenic-description">{{scenicDetail.description}}</p>
                <p class="scenic-star"><span class="scenic-name">推荐星级：</span>{{scenicDetail.star}}</p>
                <p class="scenic-star"><span class="scenic-name">百度旅游：</span><a :href="scenicDetail.url" target="_blank">{{scenicDetail.url}}</a></p>
            </el-dialog>
        </section>
    </section>
</template>

<script>
    //接口
    import travel from '../factory/travel';
    export default{
        //components: {elcarousel},
        data(){
            return{
                travelName:'',
                hotImg: [1,2,3],
                currentDate: new Date(),
                baidu:'https://www.baidu.com/',
                hotTravel: [
                    {
                        title:'丽江',
                        key: 'lijiang',
                        img: 'http://imgbdb3.bendibao.com/weixinbdb/201611/5/201611593129179.jpg',
                        hot:5,
                        url: ''
                    },{
                        title:'张家界',
                        key: 'zhangjiajie',
                        img: 'http://imgbdb3.bendibao.com/weixinbdb/201611/5/201611593129179.jpg',
                        hot:5
                    },
                    {
                        title:'台湾',
                        key: 'taiwan',
                        img: 'http://imgbdb3.bendibao.com/weixinbdb/201611/5/201611593129179.jpg',
                        hot:5
                    },{
                        title:'漠河',
                        key: 'mohe',
                        img: 'http://imgbdb3.bendibao.com/weixinbdb/201611/5/201611593129179.jpg',
                        hot:5
                    },
                    {
                        title:'九寨沟',
                        key: 'jiuzhaigou',
                        img: 'http://imgbdb3.bendibao.com/weixinbdb/201611/5/201611593129179.jpg',
                        hot:4
                    },{
                        title:'长白山',
                        key: 'changbaishan',
                        img: 'http://imgbdb3.bendibao.com/weixinbdb/201611/5/201611593129179.jpg',
                        hot:4
                    },
                    {
                        title:'喀纳斯',
                        key: 'kanasi',
                        img: 'http://imgbdb3.bendibao.com/weixinbdb/201611/5/201611593129179.jpg',
                        hot:3
                    }
                ],
                foreignHotTravel: [
                    {
                        title:'西湖',
                        img: 'http://imgbdb3.bendibao.com/weixinbdb/201611/5/201611593129179.jpg',
                        hot: 5
                    },
                    {
                        title:'凤凰',
                        img: 'http://imgbdb3.bendibao.com/weixinbdb/201611/5/201611593129179.jpg',
                        hot: 4
                    },{
                        title:'拉萨',
                        img: 'http://imgbdb3.bendibao.com/weixinbdb/201611/5/201611593129179.jpg',
                        hot: 3
                    },
                    {
                        title:'莫高窟',
                        img: 'http://imgbdb3.bendibao.com/weixinbdb/201611/5/201611593129179.jpg',
                        hot: 2
                    },{
                        title:'呼伦贝尔',
                        img: 'http://imgbdb3.bendibao.com/weixinbdb/201611/5/201611593129179.jpg',
                        hot: 3
                    },
                    {
                        title:'乌镇',
                        img: 'http://imgbdb3.bendibao.com/weixinbdb/201611/5/201611593129179.jpg',
                        hot: 1
                    },
                    {
                        title:'故宫',
                        img: 'http://imgbdb3.bendibao.com/weixinbdb/201611/5/201611593129179.jpg',
                        hot: 5
                    }
                ],
                dialogTableVisible: false,
                scenicDetail: {}
            }
        },
        mounted:function() {
            console.log('this is detail...');
        },
        methods: {
            travelSearch() {
                let that = this;
                var data = {
                    id: that.travelName
                };
                travel.detail(data).then(function (response) {
                    if(response.data.status == 'Success'){
                        console.log(response.data.result);
                        return response.data.result;
                    }else{
                        that.$message({
                            showClose: true,
                            message: '查询失败！',
                            type: 'error'
                        });
                        return false;
                    }
                });
            },
            goTravelDetailItem(name) {
                console.log(name);
                let that = this;
                that.scenicDetail = {};

                var data = {
                    id: name
                };
                travel.detail(data).then(function (response) {
                    if(response.data.status == 'Success'){
                        console.log(response.data.result);
                        that.scenicDetail = response.data.result;
                        that.dialogTableVisible = true;
                        //return response.data.result;
                    }else{
                        that.$message({
                            showClose: true,
                            message: '查询失败！',
                            type: 'error'
                        });
                        return false;
                    }
                });
                //this.$router.push({path: '/travel/travelDetailItem'});
                //this.$router.push({path: '/travel/travelDetailItem&name=' + name});
                //window.open('/travel/travelDetailItem?name=' + name);
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
    .travel-name{
        width:200px;
        display: inline-block;
    }
    .hot-travel{
        clear: both;
        margin-top: 20px;
        text-align: left;
        .el-carousel__item h3 {
            color: #475669;
            font-size: 14px;
            opacity: 0.75;
            line-height: 200px;
            margin: 0;
        }

        .el-carousel__item:nth-child(2n) {
            background-color: #99a9bf;
        }

        .el-carousel__item:nth-child(2n+1) {
            background-color: #d3dce6;
        }
    }
    .hot-travel-item{
        margin-top:1.5%;
        margin-left:1.5%;
        .image{
            height: 130px;
        }
        .hot-travel-title{
            padding: 7px 0;
            .hot-icon{
                color:#58B7FF;
            }
        }
    }
    .hot-travel-item:hover{
        cursor:pointer;
        .el-card__body{
            padding: 0 !important;
        }
    }
.time {
    font-size: 13px;
    color: #999;
}

.bottom {
    margin-top: 13px;
    line-height: 12px;
}

.button {
    padding: 0;
    float: right;
}

.image {
    width: 100%;
    display: block;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
}
}
</style>
