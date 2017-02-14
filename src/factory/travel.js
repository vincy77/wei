import * as config from '../config';
import Vue from 'vue';

let detail = (params)=> {
    console.log(params.id);
    return Vue.http.jsonp(config.config.travel.detail + '?ak=WctKqdbigbIPwXb8kLfGDyhRVs9XDqnD&output=json&id=' + params.id);
};
//查询旅游路线
let travelRoute = (params) => {
    return Vue.http.jsonp(config.config.travel.route + '?ak=WctKqdbigbIPwXb8kLfGDyhRVs9XDqnD&output=json&location=' + params.location + '&day=' + params.day);
};


export default{
    detail,
    travelRoute
};
