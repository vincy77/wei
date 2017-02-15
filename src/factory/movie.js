import * as config from '../config';
import Vue from 'vue';

let hot = (params)=> {
    console.log(params.location);
    //?qt=hot_movie&location=北京&ak=E4805d16520de693a3fe707cdc962045
    return Vue.http.jsonp(config.config.movie.hot + '?ak=WctKqdbigbIPwXb8kLfGDyhRVs9XDqnD&output=json&qt=hot_movie&location=' + params.location);
};
//查询旅游路线
let travelRoute = (params) => {
    return Vue.http.jsonp(config.config.travel.route + '?ak=WctKqdbigbIPwXb8kLfGDyhRVs9XDqnD&output=json&location=' + params.location + '&day=' + params.day);
};


export default{
    hot,
    travelRoute
};
