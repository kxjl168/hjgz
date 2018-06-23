var app = angular.module('myApp', [  "ngSanitize"]);
//var app = angular.module('myApp', [ ]);	
app.controller('eduCtrl', function($window,$scope) {
	

});
	

$(function(){
	
	init();
	
	initDetailTable("#table_list1","异常_");
	initDetailTable("#table_list2","异常_预警");
	initDetailTable("#table_list3","异常_告警");
	initDetailTable("#table_list4","异常_离线");
	//initDetailTable("table_list1","_");
	
	
	$('#myTab li:eq('+($("#index").val()-1)+') a').tab('show');
});

function init() {

	initmenu_p($("#menuul"), "public/index/");

	



	//$(item).addcss("active");
	


	var $scope = angular.element(ngSection).scope();
	$scope.$apply(function() {

		
		
	});
}
	


function initDetailTable(tableid, status) {
	
	var http = getImUrl();// "";

	
	

    // 初始化Table
    $(tableid).bootstrapTable({
        url:http + "public/nowdata.action", // 请求后台的URL（*）
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
            return "<div class='successtip'></div>";
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
             
                qType :status,//"异常_";
                
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
            	var status= row.wendu+"°C "+"正常";
            	if(row.type_second=='预警'){
            		status=row.wendu+"°C "+"高温预警";
            		css='alarm_w.png ';
            	}
            		 
            	if(row.type_second=='告警'){
            		status=row.wendu+"°C "+"异常告警";
            		css='gaojing_w.png';
            	}
           		 
            	if(row.type_second=='离线'){
            		status="离线";
            		css='gray_w.png ';
            	}
           		 
            	
            	
            	row.type_second
            		
            	return  '<img class="rimg  small img-responsive" src="'+basePath+'/images/hjgz/'+css+' " ><div class="drow">'+" "+row.title+','+status+"</div>";
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
 "click #see":function(value,index,row){
	window.location.href=basePath+"/public/detail/?id="+row.item_id;
 },
 }
