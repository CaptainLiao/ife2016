//JavaScript中的正则表达式总结:http://caibaojian.com/javascript-zhengze.html
// 去掉前后及所有空格
function trimStr(str,is_global) {
    //var reg = /^[\u4e00-\u9fa5a-zA-Z]+$/;  //中英文字符匹配
    //var regNum = /^[0-9]*[1-9][0-9]*$/;  //正整数匹配
    var result;
    result = str.replace(/(^\s*)|(\s*$)/g, "");
    if (is_global.toLowerCase() == "g") {
        result = result.replace(/\s/g, "");
    }
    return result;
}

// 手机号码验证
function checkMobile (value) {
    var reg = /^1[34578]\d{9}$/;
    if(value && reg.test(value)) {
        console.log("手机号码正确");
    }else {
        console.log("请填写正确的手机号码");
        return false;
    }
}
// 六位数字验证
function checkCode (value){
    var reg = /^\d{6}$/;
    if(reg.test(value)) {
        console.log("手机验证码正确");
    }else {
        console.log("请填写正确的手机验证码");
        return false;
    }
}
//  回车键实现click方法
function keyLogin(event,id){
    if (event.keyCode==13)  //回车键的键值为13
        document.getElementById(id).click(); //调用登录按钮的登录事件
}
// 密码验证 [6-18位非空字符]
function checkPassword(value) {
    var reg=/^(\S){6,20}$/;
    if(reg.test(value)) {
        console.log("密码输入正确");
        console.log(value);
    }else {
        console.log("请输入6-18位密码");
        return false;
    }
}

/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};
var addBtn = document.getElementById("add-btn");
var city_input = document.getElementById("aqi-city-input");
var value_input = document.getElementById("aqi-value-input");
var table = document.getElementById("aqi-table");

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 	用户输入的城市名必须为中英文字符，空气质量指数必须为整数
    用户输入的城市名字和空气质量指数需要进行前后去空格及空字符处理（trim）
    用户输入不合规格时，需要给出提示（允许用alert，也可以自行定义提示方式）
 */

function addAqiData() {
    var reg = /^[\u4e00-\u9fa5a-zA-Z]+$/;  //中英文字符匹配
    var regNum = /^[0-9]*[1-9][0-9]*$/;  //正整数匹配
	//var city = trimStr(city_input.value,"g");
    var city = checkPassword(city_input.value);
    var value = trimStr(value_input.value,"g");
    if(reg.test(city) && regNum.test(value)){
        /*aqiData = [city,value];*/
        aqiData[city] = value;
        console.log(aqiData);
        return aqiData;
    }else {
        alert("请输入中英文字符的城市和整数空气质量值");
    }
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
    var items = "<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";
    for(var city in aqiData) {
        items += "<tr><td>"+city+"</td><td>"+aqiData[city]+"</td><td><button type='button' data-city='"+city+"'>删除</button></td></tr>"
    }
    table.innerHTML = items;
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(city) {
  // do sth.
  delete aqiData[city];
  renderAqiList();
}

function init() {
  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
  addBtn.onclick = function (){
  	addBtnHandle();
  };
  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
    table.addEventListener('click',function(event){
        if(event.target.nodeName.toLowerCase() === "button"){
            delBtnHandle.call(null,event.target.dataset.city);
        }
    })
}

init();