

var app = angular.module('myApp', [  "ngSanitize"]);
//var app = angular.module('myApp', [ ]);	
app.controller('eduCtrl', function($window,$scope) {
	

});
	

function a(){
	var $scope = angular.element(ngSection).scope();
	// $scope.$digest();
	 
	// msg($w.scrollTop());
	//alert($(window).scrollTop()+'/'+$('html').scrollTop()+'/'+window.pageYOffset+'/'+ document.documentElement.scrollTop);
}

$(function() {
	
	

	

	init();

	
	 //WdatePicker({eCont:'nDate'});
	 
	

});



function changerows(option) {
	var num = $(option).val();
	
	var $scope = angular.element(ngSection).scope();
	$scope.$apply(function() {
		$scope.rows = num;
		$scope.getList();
	});
};




function h_changetype(e){
	var item=$(e);
		$("#h_idDropDownAlertType").html($(item).find("a").html());
		$(item).parents().find("li").removeClass("active");
		$(item).addClass("active");
		$("#h_s_type").val($(item).find("a").attr("value"));
		//(".dropdown-menu").show();
		
		getChartTable();
	}


function changetype(e){
	var item=$(e);
		$("#idDropDownAlertType").html($(item).find("a").html());
		$(item).parents().find("li").removeClass("active");
		$(item).addClass("active");
		$("#s_type").val($(item).find("a").attr("value"));
		//(".dropdown-menu").show();
		
		getChartList();
	}

function getChartList(){
	
var $scope = angular.element(ngSection).scope();
$scope.$apply(function() {
$scope.getChartList();
});

}

function getChartTable(){
	
	var $scope = angular.element(ngSection).scope();
	$scope.$apply(function() {
	$scope.getChartTable();
	});

	}


function init() {

	initmenu_p($("#menuul"), "public/stastic/");

	



	//$(item).addcss("active");
	


	var $scope = angular.element(ngSection).scope();
	$scope.$apply(function() {

	$scope.getTypeList = function (id, fucOnFinished, clear) {

		var http = getImUrl();// "";

		var obj = new Object();

		//obj.deviceid = $scope.id;// "12345678";
		//obj.ip = $scope.ip;
		//obj.compy_name = $scope.compy_name;
		obj.page = 1;// 1;// "12345678";
		obj.rows = 40;// 10;// "12345678";

		SZUMWS(http + "statistics/getTypeInfoList.action", JSON
			.stringify(obj), function succsess(json) {

				var code = json.ResponseCode;
				var message = json.ResponseMsg;
				console.log('-----return -code= ' + code + ';message= '
					+ message);
				if (code == 200) {


					$scope.types_select = eval(json.datalist);

					 setTimeout(function(){
							
						  // $('#p_proxyserver_id').find("option:selected").attr("selected", false);
						   $('#s_type').get(0).selectedIndex=1;
						   // alert($("#p_proxyserver_id").val());
						    $scope.s_type=$("#s_type").val();
						  
						    
						//    $scope.getList();
						    
					   }, 30);
					

					$scope.$apply();

					console.log('-----guideList -OK= ');

				} else {
					msg(message);
				}

				


			}, function error(data) {
				msg("网络异常!");

			

			}, false, false

		);

	};
	$scope.getTypeList();
	
	

	$scope.getTodo = function(id, fucOnFinished, clear) {

			
			
			
			$scope.page = (id != null) ? id :1;
			
			
			if($scope.page>$scope.pageNum)
				$scope.page=$scope.page-1;
			
			if($scope.page<=0)
				$scope.page=1;
			
			
			var now=new Date();
			var before=new Date();
			var format = "yyyy-MM-dd";
			
				before.setHours(0);
				format = "yyyy-MM-dd";
			
			var begindate =before.Format(format);
			var enddate = now.Format(format);
			
			
			

			var http = getImUrl();// "";

			var obj = new Object();
			obj.date1 = begindate;// "12345678";
			obj.date2 = enddate;// "12345678";
			obj.date_type = "DAY";
			//obj.qName = $("#s_type ").find("option:selected").text();
			obj.table="item_action_log";
			obj.qType ="异常_";
			//obj.showall = $scope.showall?"false":"true";
			
			//msg(obj.showall);
			
			
			obj.page = $scope.page;// 1;// "12345678";
			obj.rows = $scope.rows;// 10;// "12345678";
			SZUMWS(http + "statistics/GetStaticData.action", JSON
					.stringify(obj), function succsess(json) {
				// var json = JSON.parse(decryData);
				var code = json.ResponseCode;
				var message = json.ResponseMsg;
				//console.log('-----return -code= ' + code + ';message= '
				//		+ message);
				if (code == 200) {

			
					$scope.tododata =json.rows[0];
					
					//setchartdatabledatata(json.rows);

				
						
						$scope.$apply();
						
					//console.log('-----guideList -OK= ');

				} else {
					msg(message);
				}

			

				//$('#refresh').removeClass('visible');
				//$('#refresh2').removeClass('visible');

			}, function error(data) {
				msg("网络异常!");

			
			//	$("#refresh").removeClass('visible');
				//$('#refresh2').removeClass('visible');

			}, false, "json"

			);
			
		};
		$scope.getTodo();
		
	

	
$scope.getChartTable = function(id, fucOnFinished, clear) {

		
		
		
		$scope.page = (id != null) ? id :1;
		
		
		if($scope.page>$scope.pageNum)
			$scope.page=$scope.page-1;
		
		if($scope.page<=0)
			$scope.page=1;
		
		

		var http = getImUrl();// "";

		var obj = new Object();
		obj.date1 = $("#h_effectDate").val();// "12345678";
		obj.date2 = $("#h_effectDate2").val();// "12345678";
		obj.date_type = $("#h_dateType").val();
		//obj.qName = $("#s_type ").find("option:selected").text();
		
		obj.qType =$("#h_s_type").val();
		//obj.showall = $scope.showall?"false":"true";
		
		//msg(obj.showall);
		
		
		obj.page = $scope.page;// 1;// "12345678";
		obj.rows = $scope.rows;// 10;// "12345678";
		SZUMWS(http + "statistics/GetStaticData.action", JSON
				.stringify(obj), function succsess(json) {
			// var json = JSON.parse(decryData);
			var code = json.ResponseCode;
			var message = json.ResponseMsg;
			//console.log('-----return -code= ' + code + ';message= '
			//		+ message);
			if (code == 200) {

		
				$scope.tabledata =json.rows[0];
				
				//setchartdatabledatata(json.rows);

			
					
					$scope.$apply();
					
				//console.log('-----guideList -OK= ');

			} else {
				msg(message);
			}

		

			//$('#refresh').removeClass('visible');
			//$('#refresh2').removeClass('visible');

		}, function error(data) {
			msg("网络异常!");

		
		//	$("#refresh").removeClass('visible');
			//$('#refresh2').removeClass('visible');

		}, false, "json"

		);
		
	};
	
	
	$scope.getChartList = function(id, fucOnFinished, clear) {

		
		
		
		$scope.page = (id != null) ? id :1;
		
		
		if($scope.page>$scope.pageNum)
			$scope.page=$scope.page-1;
		
		if($scope.page<=0)
			$scope.page=1;
		
		

		var http = getImUrl();// "";

		var obj = new Object();
		obj.date1 = $("#effectDate").val();// "12345678";
		obj.date2 = $("#effectDate2").val();// "12345678";
		obj.date_type = $("#dateType").val();
		//obj.qName = $("#s_type ").find("option:selected").text();
		
		obj.qType =$("#s_type").val();
		//obj.showall = $scope.showall?"false":"true";
		
		//msg(obj.showall);
		
		
		obj.page = $scope.page;// 1;// "12345678";
		obj.rows = $scope.rows;// 10;// "12345678";
		SZUMWS(http + "statistics/getAppStaticData.action", JSON
				.stringify(obj), function succsess(json) {
			// var json = JSON.parse(decryData);
			var code = json.ResponseCode;
			var message = json.ResponseMsg;
			console.log('-----return -code= ' + code + ';message= '
					+ message);
			if (code == 200) {

		
				$scope.datalist =eval(json.rows);
				
				setchartdata(json.rows);

			
					
					$scope.$apply();
					
				//console.log('-----guideList -OK= ');

			} else {
				msg(message);
			}

		

			//$('#refresh').removeClass('visible');
			//$('#refresh2').removeClass('visible');

		}, function error(data) {
			msg("网络异常!");

		
		//	$("#refresh").removeClass('visible');
			//$('#refresh2').removeClass('visible');

		}, false, "json"

		);
		
	}
	
	
	
	});

	
	initDetailTable();
	

	inittime();
	
	inittime2();
	
	
		
};


function inittime2(){
$.each($(".time2").find("span"),function(index,item){
		
		$(item).click(function(){
			$(".time2 span").removeClass("select");
			$(item).addClass("select");
			
			if($(item).html()=="今天")
				$("#h_dateType").val("DAY");
			else if($(item).html()=="本月")
				$("#h_dateType").val("MONTH");
			else
				$("#h_dateType").val("DAY");
			
			
			var datetype = $(item).html();
			var now=new Date();
			var before=new Date();
			var format = "yyyy-MM-dd HH";
			if (datetype == "今天")
				{
				before.setHours(0);
				format = "yyyy-MM-dd";
				}
				
			else if (datetype == "本周")
				{
				before.setDate(before.getDate()- ((before.getDay()==0)?7:before.getDay())+1);
				format = "yyyy-MM-dd";
				}
				
			else if (datetype == "本月")
				{
				before.setMonth(now.getMonth());
				format = "yyyy-MM";
				}
				

			var begindate =before.Format(format);
			var enddate = now.Format(format);
			
			$("#h_effectDate").val(begindate);
			$("#h_effectDate2").val(enddate);
			
			getChartTable();
		});
		
		
	});
$(".time2").find(".select").trigger("click");
}

function inittime(){
$.each($(".time").find("span"),function(index,item){
		
		$(item).click(function(){
			$(".time span").removeClass("select");
			$(item).addClass("select");
			
			if($(item).html()=="今天")
				$("#dateType").val("HOUR");
			else if($(item).html()=="本月")
				$("#dateType").val("DAY");
			else
				$("#dateType").val("DAY");
			
			
			var datetype = $(item).html();
			var now=new Date();
			var before=new Date();
			var format = "yyyy-MM-dd HH";
			if (datetype == "今天")
				{
				before.setHours(0);
				format = "yyyy-MM-dd HH";
				}
				
			else if (datetype == "本周")
				{
				before.setDate(before.getDate()- ((before.getDay()==0)?7:before.getDay())+1);
				format = "yyyy-MM-dd";
				}
				
			else if (datetype == "本月")
				{
				before.setDate(0);//(before.getDate()-20);
				format = "yyyy-MM-dd";
				}
				

			var begindate =before.Format(format);
			var enddate = now.Format(format);
			
			$("#effectDate").val(begindate);
			$("#effectDate2").val(enddate);
			
			getChartList();
		});
		
		
	});
$(".time").find(".select").trigger("click");
}

var cdate="2018-06-21";
var type="";
function initDetailTable() {
	
	var http = getImUrl();// "";

	
	

    // 初始化Table
    $('#table_detail').bootstrapTable({
        url:http + "statistics/GetActionList.action", // 请求后台的URL（*）
        method: 'post', // 请求方式（*）
        contentType: 'application/x-www-form-urlencoded',
        toolbar: '#toolbar', // 工具按钮用哪个容器
    
        showHeader: false,
        searchAlign: 'left',
        buttonsAlign: 'left',
        searchOnEnterKey: true,
        striped: true, // 是否显示行间隔色
        cache: false, // 是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
        pagination: false, // 是否显示分页（*）
        sidePagination: "server", // 分页方式：client客户端分页，server服务端分页（*）
        pageNumber: 1, // 初始化加载第一页，默认第一页
        pageSize: 10, // 每页的记录行数（*）
        pageList: [10, 25], // 可供选择的每页的行数（*）
        search: false, // 是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
        detailView: false,
        // showColumns: true, //是否显示所有的列
        uniqueId: "id", // 每一行的唯一标识，一般为主键列
        // queryParamsType : "limit",
        formatNoMatches: function(){
            return "今天很安静，没有发生任何情况";
          },
          formatLoadingMessage: function(){
              return "";
          },
        queryParams: function queryParams(params) { // 设置查询参数
        	
        	var rows= params.limit; // 每页要显示的数据条数
           var offset= params.offset; // 每页显示数据的开始行号
           
           
        	var page=1+ offset/rows;
     
        	
        	var now=new Date();
			var before=new Date();
			var format = "yyyy-MM-dd HH";
			
				before.setHours(0);
				format = "yyyy-MM-dd HH";
			
			var begindate =before.Format(format);
			var enddate = now.Format(format);
			
			
			

			var http = getImUrl();// "";

			var obj = new Object();
			obj.date1 = begindate;// "12345678";
			obj.date2 = enddate;// "12345678";
        	
        	
            var param = {
            		rows: params.limit, // 每页要显示的数据条数
                offset: params.offset, // 每页显示数据的开始行号
                page:page,
                sort: params.sort, // 要排序的字段
             
                qType :"异常_",//$("#s_type").val(),
                date_type : "HOUR",//$("#dateType").val(),
               
                date1:begindate,
                date2:enddate
               
            };
            return param;
        },
        columns: [
        	{
                field: 'id',
                title: '订单编号',
                align: 'center',
                valign: 'middle',
                visible:false
            }, 
            
        	{
            field: 'itemname',
            title: '标题',
            align: 'left',
            valign: 'middle',
            formatter:function(value,row,index){
            	return  '<img class="rimg small img-responsive" src="'+basePath+"/images/hjgz/see.png"+'">'+row.itemname+','+row.type_second;
            }
        },
        
        {
            title: '操作',
            field: 'vehicleno',
            align: 'center',
           formatter: modifyAndDeleteButton,
            events: PersonnelInformationEvents 
        }
        ],
    });
}

function modifyAndDeleteButton(value,row,index){
	return " <img id='see' class='rimg img-responsive'  src='"+basePath+"/images/hjgz/detail.png"+"'>";
}
window.PersonnelInformationEvents={
 "click #see":function(){
	 info("ddd");
 },
 }



app.filter("sanitize", [ '$sce', function($sce) {
	return function(htmlCode) {
		return htmlCode ? $sce.trustAsHtml(htmlCode) : "";
	}
} ]);


