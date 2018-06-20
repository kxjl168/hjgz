

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

function init() {

	initmenu_p($("#menuul"), "public/index/");



	
	initDetailTable();

};

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
        pagination: true, // 是否显示分页（*）
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
        queryParams: function queryParams(params) { // 设置查询参数
        	
        	var rows= params.limit; // 每页要显示的数据条数
           var offset= params.offset; // 每页显示数据的开始行号
           
           
        	var page=1+ offset/rows;
     
            var param = {
            		rows: params.limit, // 每页要显示的数据条数
                offset: params.offset, // 每页显示数据的开始行号
                page:page,
                sort: params.sort, // 要排序的字段
             
                qType :"异常_",//$("#s_type").val(),
                date_type : "DAY",//$("#dateType").val(),
               
                date:cdate,
               
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
            align: 'center',
            valign: 'middle'
        },
        
        {
            title: '操作',
            field: 'vehicleno',
            align: 'center',
           /* formatter: modifyAndDeleteButton,
            events: PersonnelInformationEvents */
        }
        ],
    });
}



app.filter("sanitize", [ '$sce', function($sce) {
	return function(htmlCode) {
		return htmlCode ? $sce.trustAsHtml(htmlCode) : "";
	}
} ]);


