/**
 * Created by Administrator on 16-10-17.
 */
/* ���ݸ�ʽ��ʾ
 var aqiSourceData = {
 "����": {
 "2016-01-01": 10,
 "2016-01-02": 10,
 "2016-01-03": 10,
 "2016-01-04": 10
 }
 };
 */

/*
 * addEventHandler����
 * �������ʵ���¼���
 */
function addEventHandler(ele, event, hanlder) {
    if (ele.addEventListener) {
        ele.addEventListener(event, hanlder, false);
    } else if (ele.attachEvent) {
        ele.attachEvent("on"+event, hanlder);
    } else  {
        ele["on" + event] = hanlder;
    }
}

// �������������������ģ�����ɲ�������
function getDateStr(dat) {
    var y = dat.getFullYear();
    var m = dat.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    var d = dat.getDate();
    d = d < 10 ? '0' + d : d;
    return y + '-' + m + '-' + d;
}
function randomBuildData(seed) {
    var returnData = {};
    var dat = new Date("2016-01-01");
    var datStr = '';
    for (var i = 1; i < 92; i++) {
        datStr = getDateStr(dat);
        returnData[datStr] = Math.ceil(Math.random() * seed);
        dat.setDate(dat.getDate() + 1);
    }
    return returnData;
}

var aqiSourceData = {
    "bj": randomBuildData(500),
    "sh": randomBuildData(300),
    "gz": randomBuildData(200),
    "sz": randomBuildData(100),
    "cd": randomBuildData(300),
    "xa": randomBuildData(500),
    "fz": randomBuildData(100),
    "xm": randomBuildData(100),
    "sy": randomBuildData(500)
};

// ������Ⱦͼ�������
var chartData = {};
console.log(aqiSourceData["bj"]);
// ��¼��ǰҳ��ı�ѡ��
var pageState = {
    nowSelectCity: -1,
    nowGraTime: "day"
};

/**
 * ��Ⱦͼ��
 */
function renderChart() {
    var city  = Object.keys(aqiSourceData);
    city.forEach(function (item,index,array) {
        var data = aqiSourceData[item];
        var time = Object.keys(data);
        var timeStr = "";
        console.log(time);
        time.forEach(function(item,index){
            timeStr += '<li>'
           var quality = data[item];

        });

    })
}

/**
 * �ա��ܡ��µ�radio�¼����ʱ�Ĵ�����
 */
function graTimeChange() {
    // ȷ���Ƿ�ѡ����˱仯

    // ���ö�Ӧ����

    // ����ͼ����Ⱦ����
}

/**
 * select�����仯ʱ�Ĵ�����
 */
function citySelectChange() {
    // ȷ���Ƿ�ѡ����˱仯

    // ���ö�Ӧ����

    // ����ͼ����Ⱦ����
}

/**
 * ��ʼ���ա��ܡ��µ�radio�¼��������ʱ�����ú���graTimeChange
 */
function initGraTimeForm() {

}

/**
 * ��ʼ������Select����ѡ����е�ѡ��
 */
function initCitySelector() {
    // ��ȡaqiSourceData�еĳ��У�Ȼ������idΪcity-select�������б��е�ѡ��

    // ��select�����¼�����ѡ����仯ʱ���ú���citySelectChange

}

/**
 * ��ʼ��ͼ����Ҫ�����ݸ�ʽ
 */
function initAqiChartData() {
    // ��ԭʼ��Դ���ݴ����ͼ����Ҫ�����ݸ�ʽ
    // ����õ����ݴ浽 chartData ��
}

/**
 * ��ʼ������
 */
function init() {
    renderChart();
    initGraTimeForm();
    initCitySelector();
    initAqiChartData();
}

init();
