/*
* @Author: Administrator
* @Date:   2017-08-22 09:38:50
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-22 16:42:32
*/
$(function(){
	//河北省地图
	var data = [
	    {name: '井陉矿区',item1:'新收案件',value1: 120,item2:'未结案件',value2: 10 ,value:20},
	    {name: '井陉县',item1:'新收案件',value1: 120,item2:'未结案件',value2: 10 ,value:20},
	    {name: '裕华区',item1:'新收案件',value1: 120 ,item2:'未结案件',value2: 10 ,value:20},
	    {name: '新华区',item1:'新收案件',value1: 30 ,item2:'未结案件',value2: 10 ,value:20},
	    {name: '长安区',item1:'新收案件',value1: 40 ,item2:'未结案件',value2: 10 ,value:20},
	    {name: '藁城区',item1:'新收案件',value1: 50,item2:'未结案件',value2: 10  ,value:20},
	    {name: '鹿泉区',item1:'新收案件',value1: 60 ,item2:'未结案件',value2: 10  ,value:20},
	    {name: '栾城区',item1:'新收案件',value1: 70,item2:'未结案件',value2: 10 ,value:20},
	    {name: '桥西区',item1:'新收案件',value1: 90 ,item2:'未结案件',value2: 10 ,value:20},
	    {name: '正定县',item1:'新收案件',value1: 110 ,item2:'未结案件',value2: 10 ,value:20},
	    {name: '行唐县',item1:'新收案件',value1: 120 ,item2:'未结案件',value2: 10 ,value:20},
	    {name: '高邑县',item1:'新收案件',value1: 80 ,item2:'未结案件',value2: 10 ,value:20},
	    {name: '灵寿县',item1:'新收案件',value1: 90 ,item2:'未结案件',value2: 10 ,value:20},
	    {name: '深泽县',item1:'新收案件',value1: 110 ,item2:'未结案件',value2: 10 ,value:20},
	    {name: '赞皇县',item1:'新收案件',value1: 90 ,item2:'未结案件',value2: 10 ,value:20},
	    {name: '赵县',item1:'新收案件',value1: 110 ,item2:'未结案件',value2: 10 ,value:20},
	    {name: '无极县',item1:'新收案件',value1: 60 ,item2:'未结案件',value2: 10  ,value:20},
	    {name: '元氏县',item1:'新收案件',value1: 70,item2:'未结案件',value2: 10 ,value:20},
	    {name: '平山县',item1:'新收案件',value1: 80 ,item2:'未结案件',value2: 10 ,value:20},
	    {name: '辛集市',item1:'新收案件',value1: 90 ,item2:'未结案件',value2: 10 ,value:20},
	    {name: '晋州市',item1:'新收案件',value1: 110 ,item2:'未结案件',value2: 10 ,value:20},
	    {name: '新乐市',item1:'新收案件',value1: 120 ,item2:'未结案件',value2: 10 ,value:20}
	];
	var geoCoordMap = {
   	   '井陉矿区':[114.062062,38.095151],
   	   '井陉县':[114.145242,38.022118],
   	   '裕华区':[114.531202,38.00643],
   	   '新华区':[114.463377,38.07095],
   	   '长安区':[114.539395,38.066347],
   	   '藁城区':[114.847023,37.971453],
   	   '鹿泉区':[114.313654,38.135953],
   	   '栾城区':[114.638318,37.940199],
   	   '桥西区':[114.461088,38.034193],
   	   '正定县':[114.570941,38.236444],
   	   '行唐县':[114.552714,38.488377],
   	   '高邑县':[114.611121,37.655534],
   	   '灵寿县':[114.382614,38.358665],
   	   '深泽县':[115.20092,38.224033],
   	   '赞皇县':[114.366111,37.665663],
   	   '赵县':[114.776297,37.806578],
   	   '无极县':[114.97634,38.219192],
   	   '元氏县':[114.505409,37.816513],
   	   '平山县':[114.055918,38.387888],
   	   '辛集市':[115.317658,37.983121],
   	   '晋州市':[115.044213,37.933671],
   	   '新乐市':[114.703776,38.393319]
	}
	var res = [];
	function convertData(data) {
	   res = [];
	   for (var i = 0; i < data.length; i++) {
	       var geoCoord = geoCoordMap[data[i].name];
	       if (geoCoord) {
	           res.push({
	               name: data[i].name,
	               item1:data[i].item1,
	               item2:data[i].item2,
	               value1:data[i].value1,
	               value2:data[i].value2,
	               value:geoCoord.concat(data[i].value)
	           });
	       }
	   }
	   return res;
	};
	var myCharts5 = echarts.init(document.getElementById('js_echarts5'));
    var option5 = {
    	tooltip: {
    		position:function(point){
    		  var x=point[0]+50;
    		  var y=point[1]-32;
              return [x, y];
    		},
    		backgroundColor:'#000',
    		formatter:function(data){
    			 for (var i = 0; i < res.length; i++) {
				       if(res[i].name==data.name){
				       	   var html="<div class='echart-bg'><i class='icon-hr'></i><div><span class='echarts-case'>"+res[i].item1+"</span><span class='font-color'>"+res[i].value1+"</span>件</div><div><span class='echarts-case'>"+res[i].item2+"</span><span class='font-color'>"+res[i].value2+"</span>件</div></div>";
				       	   return html;
				       }
				   }
    		}
    	},
	    visualMap: {
	        min: 0,
	        max: 200,
	        left: '34',
	        bottom:'34',
	        //text: ['High','Low'],
	        seriesIndex: [1],
	        inRange: {
	            color:['#738dea','#0a1e66']
	        },
	        calculable : true,
	        textStyle: {
	        	color:'#fff'
	        }
	    },
	    geo: {
	        map: 'shijiazhuang',
	        roam: false,
	        selectedMode : 'single',
	        label: {
	            normal: {
	                show: true,
	                textStyle: {
	                    color: '#fff'
	                }
	            }
	        },
	        /*top:'10%',
	        left:'32%',
	        right:'10',*/
	        itemStyle: {
	            normal:{
	                borderColor: '#0e4c8a',
	                shadowColor: 'rgba(0, 0, 0, 0.5)',
	                shadowOffsetX: 5,
	                shadowOffsetY: 5,
    				shadowBlur: 10
	            }
	        }
	    },
	    series : [
	       {
	           type: 'effectScatter',
	           coordinateSystem: 'geo',
	           data: convertData(data),
	           symbolSize: 7,
	           rippleEffect: {
	          	 	period: 4,
					scale: 4,
	                brushType: 'stroke'
	            },
	            hoverAnimation: true,
	          
	           label: {
	               normal: {
	                   formatter: '{b}',
	                   position: 'right',
	                   show: false
	               }
	           },
	           itemStyle: {
	               normal: {
	                    color: '#ff8d8d'
	               }
	           }
	        },
	        {
	            name: 'categoryA',
	            type: 'map',
	            geoIndex: 0,
	            tooltip: {show: false},
	            selectedMode : 'multiple',
	            data:[
	                {name: '井陉矿区', value: 100},
	                {name: '井陉县', value: 100},
			        {name: '裕华区',value: 100 },
				    {name: '新华区',value: 30 },
				    {name: '长安区',value: 40 },
				    {name: '藁城区',value: 50 },
				    {name: '鹿泉区',value: 60 },
				    {name: '栾城区',value: 70 },
				    {name: '桥西区',value: 90 },
				    {name: '正定县',value: 110 },
				    {name: '行唐县',value: 120 },
				    {name:'高邑县',value:100},
			   	    {name:'灵寿县',value:100},
			   	    {name:'深泽县',value:100},
			   	    {name:'赞皇县',value:100},
			   	    {name:'赵县',value:100},
			   	    {name:'无极县',value:100},
			   	    {name:'元氏县',value:100},			   	    
			   	    {name:'平山县',value:100},
			   	    {name:'辛集市',value:100},
			   	    {name:'晋州市',value:100},
			   	    {name:'新乐市',value:100}
	            ]
	        }
	    ]
    };
	
	myCharts5.setOption(option5);
	$(window).resize(function(){
		myCharts5.resize();
	});
});