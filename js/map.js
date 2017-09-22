/**
 * Created by Administrator on 2017/6/23.
 */
$(function () {
    var geoCoordMap={
        // 内蒙古
        "总驻地":[111.80,40.23],
        // 阿拉善盟
        "驻地1":[101.03,41.57],
        "驻地2":[105.47,38.51],
        // 乌海市
        "驻地3":[106.88,39.44],
        "驻地4":[106.82,39.69],
        // 巴彦淖尔市
        "驻地5":[107.07,41.08],
        "驻地6":[107.38,40.74],
        // 鄂尔多斯市
        "驻地7":[109.99,40.40],
        "驻地8":[109.98,39.82],
        // 包头
        "驻地9":[109.85,40.63],
        "驻地10":[109.83,40.66],
        // 呼和浩特市
        "驻地11":[111.43,41.09],
        "驻地12":[111.66,40.81],
        // 乌兰察布市
        "驻地13":[111.77,41.53],
        "驻地14":[113.18,41.43],
        // 锡林郭勒盟
        "驻地15":[113.84,42.23],
        "驻地16":[116.01,42.23],
        // 赤峰市
        "驻地17":[119.92,42.29],
        "驻地18":[118.88,42.24],
        // 通辽市
        "驻地19":[122.27,43.64],
        "驻地20":[122.29,43.59],
        // 兴安盟
        "驻地21":[121.59,45.38],
        "驻地22":[122.07,46.08],
        // 呼伦贝尔市
        "驻地23":[120.18,50.24],
        "驻地24":[119.78,49.15]
    };
    // 内蒙古
    var dataMap=[
        {name:"总驻地"}
    ];
    // 阿拉善盟
    var dataMap1=[
        {name: "驻地1"},
        {name: "驻地2"}
    ];
    // 乌海市
    var dataMap2=[
        {name: "驻地3"},
        {name: "驻地4"}
    ];
    var dataMap3=[
        {name: "驻地5"},
        {name: "驻地6"}
    ];
    var dataMap4=[
        {name: "驻地7"},
        {name: "驻地8"}
    ];
    var dataMap5=[
        {name: "驻地9"},
        {name: "驻地10"}
    ];
    var dataMap6=[
        {name: "驻地11"},
        {name: "驻地12"}
    ];
    var dataMap7=[
        {name: "驻地13"},
        {name: "驻地14"}
    ];
    var dataMap8=[
        {name:"驻地15"},
        {name:"驻地16"}
    ];
    var dataMap9=[
        {name:"驻地17"},
        {name:"驻地18"}
    ];
    var dataMap10=[
        {name:"驻地19"},
        {name:"驻地20"}
    ];
    var dataMap11=[
        {name:"驻地21"},
        {name:"驻地22"}
    ];
    var dataMap12=[
        {name:"驻地23"},
        {name:"驻地24"}
    ];
    function convertData(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord
                });
            }
        }
        return res;
    };
    // 基于准备好的dom，初始化echarts实例
    map1 = echarts.init(document.getElementById('js_map'));
    // 指定图表的配置项和数据
    var optionMap = {
        tooltip:{
            show:true,
            enterable:true,
            formatter:function (params) {
               return '<a href="#" class="fy-name">'+params.data.name+'</a>';
            }
        },
        geo: {
            map: '内蒙古',
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#fff'//地图每个区域名字的颜色
                    }
                },
                emphasis:{
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            itemStyle:{
                normal:{
                    /* borderColor: '#b1d2e5', */
                    borderColor:'#0991ba',
                    borderWidth: 0.5,
                    color: '#65bef6' //地图颜色
                    /*
                     * shadowBlur:3,
                     * shadowOffsetX:3,
                     * shadowOffsetY:3,
                     * shadowColor:'rgba(20,60,85,1)',
                     */
                },
                emphasis:{
                    borderColor: '#b1d2e5',
                    borderWidth: 1,
                    color:'#51a3ff' //地图鼠标悬浮颜色
                }
            }
        },
        series : [
            {
                name: '最高人民法院',
                type: 'scatter',
                coordinateSystem: 'geo',//该系列使用的坐标系:地理坐标系
                data: convertData(dataMap),
                selectedMode : 'single',
                symbolSize: 8,
                symbol:'circle',
                // symbol:'image://../yingyong123/img/icon-map1.png',
                // symbol:
                // 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z',
                symbolRotate: 35,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                itemStyle:{
                    normal:{
                        label:{
                            show:true,
                            textStyle: {
                                color: '#fff'
                            }
                        },
                        borderColor: '#b1d2e5',
                        borderWidth: 1,
                        shadowBlur:3,
                        shadowColor:'#b1d2e5',
                        color:'#e16567'

                    },
                    emphasis:{
                        label:{
                            show:true,
                            textStyle: {
                                color: "#fff"
                            }
                        },
                        borderColor: '#b1d2e5',
                        borderWidth: 0
                    }
                }
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    map1.setOption(optionMap);
    map1.on('click',function (param){
        var mt=optionMap.geo.map;
        if(param.componentType=="geo"){
            if (mt == '内蒙古'){//点击的是地图
                optionMap.geo.map= param.name;
                if(param.name=='阿拉善盟'){
                    optionMap.series[0].data=convertData(dataMap1);
                }else if(param.name=='乌海市'){
                    optionMap.series[0].data=convertData(dataMap2);
                }else if(param.name=='巴彦淖尔市'){
                    optionMap.series[0].data=convertData(dataMap3);
                }else if(param.name=='鄂尔多斯市'){
                    optionMap.series[0].data=convertData(dataMap4);
                }else if(param.name=='包头市'){
                    optionMap.series[0].data=convertData(dataMap5);
                }else if(param.name=='呼和浩特市'){
                    optionMap.series[0].data=convertData(dataMap6);
                }else if(param.name=='乌兰察布市'){
                    optionMap.series[0].data=convertData(dataMap7);
                }else if(param.name=='锡林郭勒盟'){
                    optionMap.series[0].data=convertData(dataMap8);
                }else if(param.name=='赤峰市'){
                    optionMap.series[0].data=convertData(dataMap9);
                }else if(param.name=='通辽市'){
                    optionMap.series[0].data=convertData(dataMap10);
                }else if(param.name=='兴安盟'){
                    optionMap.series[0].data=convertData(dataMap11);
                }else if(param.name=='呼伦贝尔市'){
                    optionMap.series[0].data=convertData(dataMap12);
                }
                map1.setOption(optionMap,true);
                $('.back').css('display','block');
            }else{

            }
        }else{//点击的是小红点

        }
    });
    /* 自适应 */
    $(window).resize(function(){
        setTimeout(function(){
            map1.resize();
        },10)
    });
    $('.back').click(function(){
        optionMap.geo.map= '内蒙古';
        optionMap.series[0].data=convertData(dataMap);
        map1.setOption(optionMap,true);
        $('.back').css('display','none');
    });
});
