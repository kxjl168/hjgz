<%@ page language="java" contentType="text/html; charset=UTF-8"%>

<div class="col-xs-12 nopaddding">


	<div class="titem  col-xs-7  ">
		<div class="widget-subscribe  itemg" ng-click="todo(1)">
			<span class="itype">待处理</span> <span ng-cloak  class="alarmnum">{{tododata.total}}</span>


		</div>
	</div>
	
	<div class="titem  col-xs-5  ">
		<div class="widget-subscribe itemr" ng-click="todo(3)">
			<span class="itype">告警</span> <span ng-cloak class="alarmnum">{{tododata.gaojing}}</span>


		</div>
	</div>

	<div class="titem   col-xs-7 ">
		<div class="widget-subscribe itemb " ng-click="todo(4)">
			<span class="itype">离线</span> <span ng-cloak class="alarmnum">{{tododata.lixian}}</span>


		</div>
	</div>

	<div class="titem   col-xs-5 ">
		<div class="widget-subscribe itemy" ng-click="todo(2)">
			<span class="itype">预警</span> <span  ng-cloak class="alarmnum">{{tododata.yujing}}</span>


		</div>
	</div>




</div>