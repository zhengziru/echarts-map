/*
* @Author: Administrator
* @Date:   2017-09-22 16:54:04
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-22 16:54:27
*/
$(function(){
    //地区名称和地区项目数量
    var arr=[{name:'北京',value:'10'},{name:'天津',value:'20'},{name:'上海',value:'121'},{name:'重庆',value:'231'},
             {name:'河北',value:'20'},{name:'河南',value:'33'},{name:'云南',value:'98'},{name:'辽宁',value:'10'},
             {name:'黑龙江',value:'65'},{name:'湖南',value:'76'},{name:'安徽',value:'56'},{name:'山东',value:'99'},
             {name:'新疆',value:'75'},{name:'江苏',value:'541'},{name:'浙江',value:'233'},{name:'江西',value:'56'},
             {name:'湖北',value:'88'},{name:'广西',value:'44'},{name:'甘肃',value:'12'},{name:'山西',value:'66'},
             {name:'内蒙古',value:'22'},{name:'陕西',value:'13'},{name:'吉林',value:'56'},{name:'福建',value:'87'},
             {name:'贵州',value:'67'},{name:'广东',value:'58'},{name:'青海',value:'69'},{name:'西藏',value:'49'},
             {name:'四川',value:'199'},{name:'宁夏',value:'56'},{name:'海南',value:'67'},{name:'台湾',value:'68'},
             {name:'香港',value:'46'},{name:'澳门',value:'66'}];
    var array2={};
	var array1=arr,val,f=1,d=[],color="#ddd";
	for(var i=0;i<array1.length;i++){
		if(array1[i].value>99){
			val=99+'+';
		}else{
			val=array1[i].value;
		}
		if(array1[i].name=='香港' || array1[i].name=='澳门'  ){
			array2[array1[i].name]=array1[i].name;
			array1[i].name=array1[i].name;
		}else{
		    array2[array1[i].name]=array1[i].name+'\n'+val;
		    array1[i].name=array1[i].name+'\n'+val;
		}
	}
	//每个地区的项目
	var project=[{address:'北京',name:['项目上均的范德萨看风景的空间飞快的将飞快的将疯狂的减肥快的看风景的空间飞快的将疯狂的减肥肯德基疯狂的减肥的1','项目二']},{address:'天津',name:['项目1','项目二']},{address:'新疆',name:['飞快的将疯狂的减肥肯德基疯狂的减肥的飞快的将疯狂的减肥肯德基疯狂的减肥的1','项目二']}];
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main'));
    // 指定图表的配置项和数据
    var option = {
        title: {
            text: '全国项目分布',
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            enterable:'true',
            formatter : function(data) {
            	d.push(data.name);
            	if(f==1){
            		var a=data.name.split('\n');
            		var html="<div id='divhover'>"+a[0]+'的项目数量：'+data.value+'\n'+"</div>";
            		return html ;
            	}else{
            		var projectname='';
            		var a=data.name.split('\n');
            		var html="<div id='divclick'>"
				    for(var i=0;i<project.length;i++){
				    	if(a[0]==project[i].address){
				    		for(var j=0;j<project[i].name.length;j++){
				    			var num=j+1;
				    			projectname=projectname+num+'、'+project[i].name[j]+'<br>';
				              //projectname.push(project[i].name[j]);
				            }
				    	}
				    }
				    if(projectname==''){
				    	projectname="无";
				    }
				    html=html+projectname+"</div>"
				    if(d.length>2){
				    	if(data.name=='' || d[d.length-1]!=d[d.length-2]){
					    	f=1;
					    }
				    }else{
				    	if(data.name=='' || d[d.length-1]!=d[d.length-2]){
					    	f=1;
					    }
				    }
				    return html;//projectname ;
            	}
			}
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data:['项目数量']
        },
        visualMap: {
            min: 0,
            max: 200,
            left: 'left',
            top: 'bottom',
            text: ['高','低'],           // 文本，默认为数值文本
            calculable: true
        },
        toolbox: {
            show: true,
            orient: 'vertical',
            left: '90%',
            top: 'center',
            feature: {
                dataView: {readOnly: false},
                restore: {},
                saveAsImage: {}
            }
        },
        series: [
            {
                name: '项目数量',
                type: 'map',
                mapType: 'china',
                roam: false,
                nameMap:array2,
                label: {
                    normal: {
                        show: true
                    },
                    emphasis: {
                        show: true
                    }
                },
                data:array1
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    myChart.on('click', function(data) {
    	f=2;
    });
    myChart.on('mouseout', function(data) {
    	f=1;
    });
    $(window).resize(function(){
        myChart.resize();
    });
    
});