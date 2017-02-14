<template>
    <section class="mod-content">
        <section>
            <el-input v-model="location" class="travel-name" placeholder="请输入景点名字"></el-input>
            <el-input v-model="day" class="travel-name" placeholder="请输入旅游天数"></el-input>
            <el-button type="primary" v-on:click="routeSearch()">查询</el-button>
        </section>
        <section>
            <el-dialog title="提示" v-model="dialogVisible" size="tiny">
                <span>{{dialogMessage}}</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
            </el-dialog>
        </section>
        <section v-if="routeData" class="route-detail">
            <h3>{{routeData.cityname}}</h3>
            <p>{{routeData.abstract}}</p>
            <p>{{routeData.description}}</p>
            <div v-for="type in routeData.itineraries">
                <p>{{type.name}}</p>
                <p>{{type.description}}</p>
                <div v-for="(item,index) in type.itineraries">
                    <h3>day{{index + 1}}</h3>
                    <p>{{item.description}}</p>
                    <p>{{item.dinning}}</p>
                    <p>{{item.accommodation}}</p>
                    <span v-for="path in item.path">
                        <span class="travel-detail" v-on:click="travelDetail(path.detail)">{{path.name}}</span>
                    </span>
                </div>
            </div>
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
    export default {
        data() {
            return {
                location: null,
                day: null,
                dialogVisible: false,
                dialogMessage: '',
                baidu:'https://www.baidu.com/',
                routeData: {},
                scenicDetail: {},
                dialogTableVisible: false
            }
        },
        mounted: function() {
            console.log('this is route...');
        },
        methods: {
            travelDetail(path){
                let that = this;
                let id = path.match(/id=(\S*)&output/)[1];
                if(!id){
                    that.$message({
                        showClose: true,
                        message: '没有数据！',
                        type: 'error'
                    });
                    return false;
                }
                var data = {
                    id: id
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
            },
            routeSearch() {
                let that = this;
                if(!that.location){

                }
                var data = {
                    location: that.location,
                    day: that.day
                };
                travel.travelRoute(data).then(function (response) {
                    if(response.data.status == 'Success'){
                        console.log(response.data.result);
                        that.routeData = response.data.result;
                        console.log(that.routeData.cityname);
                        //return response.data.result;
                    }else{
                        that.$message({
                            showClose: true,
                            message: '查询失败',
                            type: 'error'
                        });
                        return false;
                    }
                });
            }
        }
    }
</script>

<style lang="less">
    .mod-content{
    .route-detail{
        text-align:left;
        margin:20px;
        p{
            margin-top: 20px;
        }
        h3{
            margin-top: 20px;
        }
        .travel-detail{
            margin-right: 10px;
            margin-top: 10px;
            cursor: pointer;
            color: #20a0ff;
        }
    }
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
</style>