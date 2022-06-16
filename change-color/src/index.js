// 1. 使用	ES6导入语法，导入jquery
import $ from 'jquery'

//导入样式（在webpack中，一切皆模块，都可以通过ES6导入语法导入和使用）
//如果某个模块，使用from接收到的成员为undefined，则没必要进行接收
import './css/index.css'

import './css/index.less'

//1. 导入图片
import logo from './images/logo.jpg'
//2. 给img标签的src动态赋值
$('.box').attr('src',logo)

// 2. 定义jquery入口函数
$(function() {
    //实现奇数行添加蓝色
    $('li:odd').css('background-color', 'yellow')
    
    $('li:even').css('background-color', 'skyblue')
    
})

//1. 定义了名为info的装饰器
function info(target) {
    //2. 为目标添加静态属性info
    target.info = 'Person info'
}


//3. 为Person类应用info装饰器
@info
class Person { }

//4. 打印Person的静态属性info
console.log(Person.info);