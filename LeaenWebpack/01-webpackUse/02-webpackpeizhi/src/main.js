import {sex, weight} from "./js/mathutils";

console.log(sex + "sss");
console.log(weight + "ddd");
// const {add, mul} = require('./js/mathutils')
//
// console.log(add(10, 50));
// console.log(mul(100, 200));

require('./css/my.css')
require('./css/special.less')
document.writeln('<h2>孙悟空大闹天宫</h2>')
import Vue from 'vue'
import  App  from './vue/App.vue'
new Vue({
    el: '#app',
    template: '<App></App>',
    components:{
        App
    }
});