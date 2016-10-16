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
 // 去掉前后及所有空格
function trimStr(str,is_global) {
    var result;
    result = str.replace(/(^\s*)|(\s*$)/g, "");
    if (is_global.toLowerCase() == "g") {
        result = result.replace(/\s/g, "");
    }
    return result;
}
function addAqiData() {
    var reg = /^[\u4e00-\u9fa5a-zA-Z]+$/;  //中英文字符匹配
    var regNum = /^[0-9]*[1-9][0-9]*$/;  //正整数匹配

	var city = trimStr(city_input.value,"g");
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