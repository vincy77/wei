<template>
    <section class="mod-content">
        <el-input v-model="city" class="travel-name" placeholder="请输入城市名"></el-input>
        <el-button type="primary" v-on:click="movieSearch()">搜索</el-button>
        <el-button type="primary" v-on:click="changeShowType()" v-if="showType">平铺</el-button>
        <el-button type="primary" v-on:click="changeShowType()" v-if="!showType">图标</el-button>
        <section class="hot-movie">
            <ul v-if="!showType" class="hot-movie-item">
                <li v-for="(item, index) in hotMovie.movie">
                    <img :src="item.movie_picture" class="movie-image">
                    <div class="movie-name">
                        <p>{{item.movie_name}}<span>{{item.movie_score}}</span></p>
                        <p>{{item.movie_message}}</p>
                    </div>
                </li>
            </ul>
            <ul v-if="showType" class="hot-movie-item2">
                <li v-for="(item, index) in hotMovie.movie">
                    <img :src="item.movie_picture" class="movie-image">
                    <div class="movie-name">
                        <p class="name">{{item.movie_name}}<span>{{item.movie_score}}</span></p>
                        <p class="msg">{{item.movie_message}}</p>
                        <p class="nation">{{item.movie_nation}}</p>
                        <p class="tag">类型：{{item.movie_tags}}</p>
                        <p class="length">时长：{{item.movie_length}}</p>
                        <p class="starring">演员：{{item.movie_starring}}</p>
                        <p class="director">导演：{{item.movie_director}}</p>
                        <p class="date">上映日期：{{item.movie_release_date}}</p>
                    </div>
                </li>
            </ul>
        </section>
    </section>
</template>
<script>
    import movie from '../factory/movie';
    export default{
        data () {
            return {
                showType: false,
                city: '杭州',
                hotMovie: {}
            }
        },
        mounted: function() {
            this.movieSearch();
        },
        methods: {
            movieSearch() {
                let that = this;
                var data = {
                    location: that.city
                };
                movie.hot(data).then(function (response) {
                    if(response.data.status == 'Success'){
                        console.log(response.data.result);
                        that.hotMovie = response.data.result;
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
            changeShowType() {
                let that = this;
                that.showType = !that.showType;
            }
        }
    }
</script>
<style lang="less">
    .mod-content{
        .hot-movie{
        margin-top: 20px;
            //border:1px solid blue;
        .hot-movie-item{
                li{
                    position: relative;
                    float: left;
                    margin-right:20px;
                    margin-bottom:20px;
                    .movie-image{
                        width:200px;
                        height:300px;
                    }
                    .movie-name{
                        position: absolute;
                        height: 50px;
                        width: 100%;
                        background-color: #000;
                        opacity: 0.7;
                        left:0;
                        bottom:0;
                        padding:5px;
                        p{
                            color: #fff;
                            text-align:left;
                            span{
                                color: #e64242;
                                font-size: 16px;
                                margin-left: 10px;
                                position: absolute;
                                right: 10px;
                                font-weight: 600;
                            }
                        }
                    }
                }
            }
        .hot-movie-item2{
            li{
                overflow:hidden;
                margin:20px;
                border-bottom: 1px solid #aaa;
                padding-bottom: 20px;
                .movie-image{
                    width:25%;
                    height:220px;
                    float: left;
                }
                .movie-name{
                    display: inline-block;
                    height:220px;
                    width:70%;
                    //border:1px solid red;
                    float:left;
                    margin-left:20px;
                    p{
                        text-align: left;
                        color: #999;
                    }
                    .name{
                        font-size: 18px;
                        color:#000;
                        span{
                            padding-left:10px;
                            color: #e64242;
                        }
                    }
                }
            }
        }
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
</style>