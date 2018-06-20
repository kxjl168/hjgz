

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


	
	//initQuery();

	

};


app.filter("sanitize", [ '$sce', function($sce) {
	return function(htmlCode) {
		return htmlCode ? $sce.trustAsHtml(htmlCode) : "";
	}
} ]);


