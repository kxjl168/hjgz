var app = angular.module('myApp', [  "ngSanitize"]);
//var app = angular.module('myApp', [ ]);	
app.controller('eduCtrl', function($window,$scope) {
	

});
	

$(function(){
	
	init();

});

function init() {

	initmenu_p($("#menuul"), "public/now/");

	


	var $scope = angular.element(ngSection).scope();
	$scope.$apply(function() {


		$scope.getDetail = function(type,out, id, fucOnFinished, clear) {

				
				
				
				$scope.page = (id != null) ? id :1;
				
				
				if($scope.page>$scope.pageNum)
					$scope.page=$scope.page-1;
				
				if($scope.page<=0)
					$scope.page=1;
				
				

				var http = getImUrl();// "";

				var now=new Date();
				var before=new Date();
				var format = "yyyy-MM-dd";
				
					before.setHours(0);
					format = "yyyy-MM-dd";
				
				var begindate =before.Format(format);
				var enddate = now.Format(format);
				
				var obj = new Object();
				//obj.date1 = begindate;// "12345678";
				//obj.date2 = enddate;// "12345678";
				//obj.date_type = "DAY";
				//obj.qName = $("#s_type ").find("option:selected").text();
				//obj.table="item_action_log";
				obj.qType =type;//"异常_";
				//obj.item_id=$("#item_id").val();
				
				
				obj.page = $scope.page;// 1;// "12345678";
				obj.rows = $scope.rows;// 10;// "12345678";
				SZUMWS(http + "public/nowdata.action", JSON
						.stringify(obj), function succsess(json) {
					// var json = JSON.parse(decryData);
					var code = json.ResponseCode;
					var message = json.ResponseMsg;
					//console.log('-----return -code= ' + code + ';message= '
					//		+ message);
					if (code == 200) {

				
						var list=eval(json.rows);
						
						
						$.each(list,function(index,item){
							
							if(item.type_second=='预警')
								list[index].img="fa fa-thermometer-half";
							else if(item.type_second=='告警')
								list[index].img="fa fa-thermometer-full";
							else if(item.type_second=='离线')
								list[index].img="fa fa-thermometer-empty";
							else
								list[index].img="fa fa-thermometer-quarter";
						});
						
						
						if(out==1)
							$scope.datalist1=list;
						if(out==2)
							$scope.datalist2=list;
						if(out==3)
							$scope.datalist3=list;
						
						if(out==4)
							$scope.datalist4=list;
						
						

						
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
			
			
			$scope.showdetail=function(item){
				window.location.href=basePath+"/public/detail/?id="+item.id;
			}
			
			$scope.datalist1={};
			$scope.datalist2={};
			$scope.datalist3={};
			$scope.datalist4={};
	$scope.getDetail("_",1);
	$scope.getDetail("异常_告警",2);
	$scope.getDetail("异常_预警",3);
	$scope.getDetail("异常_离线",4);
	
	});
}
	


function initDetailTable(tableid, status) {
	
	var http = getImUrl();// "";

	
	

    // 初始化Table
    $(tableid).bootstrapTable({
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
            return "<div class='successtip'>恭喜设备一切正常</div>";
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
             
                qType :status,//$("#s_type").val(),
                date_type : "HOUR",//$("#dateType").val(),
               
                date1:begindate,
                date2:enddate,
                
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
            	var css='green_w.png ';
            	var status= row.city+"°C "+"正常";
            	if(row.type_second=='预警'){
            		status=row.city+"°C "+"高温预警";
            		css='alarm_w.png ';
            	}
            		 
            	if(row.type_second=='告警'){
            		status=row.city+"°C "+"异常告警";
            		css='gaojing_w.png';
            	}
           		 
            	if(row.type_second=='离线'){
            		status="离线";
            		css='gray_w.png ';
            	}
           		 
            	
            	
            	row.type_second
            		
            	return  '<img class="rimg  small img-responsive" src="'+basePath+'/images/hjgz/'+css+' " ><div class="drow">'+row.action_date+" "+row.itemname+','+status+"</div>";
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
