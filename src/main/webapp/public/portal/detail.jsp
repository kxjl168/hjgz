<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN">
<%@ page language="java" contentType="text/html; charset=UTF-8"%>

<%@include file="/common/tag.jsp"%>

<html lang="en">

<head>
<link rel="bookmark" type="image/x-icon" href="/favicon.ico" />
<link rel="shortcut icon" href="/favicon.ico" />

<meta charset="UTF-8">
	<meta name="viewport"
		content="width=device-width,user-scalable=no, initial-scale=1">
		<meta name="fragment" content="!">


			<meta name="author" content="ZHANG JIE-http://www.256kb.cn">

				<title>环境感知系统</title>
				<link rel="stylesheet" type="text/css" media="screen"
					href="${basePath}/js/plugin/bootstrap/css/bootstrap.min.css">
					<link rel="stylesheet" type="text/css" media="screen"
						href="${basePath}/js/plugin/angular-xeditable-0.8.1/css/xeditable.min.css">

						<link rel="stylesheet" href="${basePath}/css/kCommon.css">
							<link rel="stylesheet" href="${basePath}/css/common.css">

								<script type="text/javascript"
									src="${basePath}/js/plugin/jquery/jquery.v1.11.3.js"></script>
<script type="text/javascript"
									src="${basePath}/js/plugin/jquery/jquery-ui.js"></script>

								<script type="text/javascript"
									src="${basePath}/js/plugin/bootstrap/js/bootstrap.min.js"></script>

								
								<script type="text/javascript"
									src="${basePath}/js/plugin/angular/angular.min.js"></script>
								<script type="text/javascript"
									src="${basePath}/js/plugin/angular/angular-resource.min.js"></script>

								<script type="text/javascript"
									src="${basePath}/js/plugin/angular/angular-sanitize.min.js"></script>


								<link rel="stylesheet"
									href="<c:out value="${basePath}"/>/js/plugin/ckeditor4.8/plugins/codesnippet/lib/highlight/styles/obsidian.css">

									<script type="text/javascript"
										src="<c:out value="${basePath}"/>/js/plugin/ckeditor4.8/plugins/codesnippet/lib/highlight/highlight.pack.js"></script>
</head>


<body id="ngSection" ng-app="myApp" ng-controller="eduCtrl">



	<%@include file="../phead.jsp"%>

	<div class="" id="content" style="">

	

		<div class="center row margin-top-52">

			<div class="  " style="min-height: 500px;">


				<div id="pgdiv" name="pgdiv" class=" nopaddding col-sm-12 col-xs-12 ">

					<div class=" title row col-xs-12 nopaddding  ">
		<span class="back glyphicon glyphicon-chevron-left "></span><span class="tleft">${item.title}</span>	
			</div>					
	
				
<div class=" row ">

  <input type="hidden" id="item_id"  value="${item.id }"/> 
  <div class="dtop row">
  
     <div class="dleft col-xs-6 ">
      <div class="dimgdiv ">
      <div>
        
       <div class="wtop">当前温度</div>
       <div class="wnum">${item.prenum}<span class="wnum2"><span >.${item.endnum}</span>°C</span></div>
      </div>
      <img></img>
      </div>
      
      
     
     
     </div>
     
     
     <div class="dright col-xs-6 ">
     <div>
      <div>正常范围:22.0°C~43.0°C</div>
      <div>监测目标</div>
      </div>
      <br>
      
      <div>
      <div>当天</div>
      <div >温度告警：<span ng-cloak >{{tabledata.gaojing}}</span>次</div>
       <div>温度预警：<span ng-cloak >{{tabledata.yujing}}</span>次</div>
       <div>设备离线：<span ng-cloak >{{tabledata.lixian}}</span>次</div>
     </div>
     </div>
  
  
  </div>
  
  <div class="row col-xs-12 level">
      
       <div class=" small "><i class="fa fa-map-marker"></i>&nbsp;2楼#1</div>
      
      </div>
  
  
<ul class="nav nav-tabs dtab" id="myTab">

										<li class="col-xs-4">
										<div class="col-xs-12">
										<img  class="timg img-responsive" src="${ basePath }/images/hjgz/alarm.png"></img>
										<a href="#identifier3" index="2" data-toggle="tab">告警</a>
										</div>
									</li>
										
										<li class="col-xs-4">
										<div class="col-xs-12">
										<img  class="timg img-responsive" src="${ basePath }/images/hjgz/yujing.png"></img>
										<a href="#identifier2" index="1" data-toggle="tab">预警</a>
										</div>
										</li>
										
										<li class="col-xs-4">
										<div class="col-xs-12">
										<img  class="timg img-responsive" src="${ basePath }/images/hjgz/offline.png"></img>
										<a href="#identifier4" index="3" data-toggle="tab">离线</a>
										</div>
										</li>
										
									
									</ul>
									<div class="centert row col-xs-12">
									<div class="col-xs-4"><i class="fa fa-sticky-note-o"></i>&nbsp;监测日志</div>
									<div class="pull-right"><a href="#identifier1" index="4" data-toggle="tab">查看全部</a></div>
									</div>

									<div class="row col-xs-12 nopaddding tab-content listdiv">
										
										<div class="row tab-pane active" id="identifier1">

											<div class=" col-lg-12 margin-top-5 nopaddding">



												<div class="table-responsive" style="">
													<table id="table_list1"
														class="table table-bordered  table-hjgz table-hover table-striped"></table>
												</div>



											</div>
										</div>

										<div class="row tab-pane " id="identifier2">

											<div class=" col-lg-12 margin-top-5 nopaddding">



												<div class="table-responsive" style="">
													<table id="table_list2"
														class="table table-bordered  table-hjgz table-hover table-striped"></table>
												</div>



											</div>
										</div>

										<div class="row tab-pane " id="identifier3">

											<div class=" col-lg-12 margin-top-5 nopaddding">



												<div class="table-responsive" style="">
													<table id="table_list3"
														class="table table-bordered  table-hjgz table-hover table-striped"></table>
												</div>



											</div>
										</div>

										<div class="row tab-pane " id="identifier4">

											<div class=" col-lg-12 margin-top-5 nopaddding">



												<div class="table-responsive" style="">
													<table id="table_list4"
														class="table table-bordered  table-hjgz table-hover table-striped"></table>
												</div>



											</div>
										</div>
										<div class="row tab-pane " id="identifier5">

											<div class=" col-lg-12 margin-top-5 nopaddding">



												<div class="table-responsive" style="">
													<table id="table_list5"
														class="table table-bordered  table-hjgz table-hover table-striped"></table>
												</div>



											</div>
										</div>
										
										</div>
 

						
						
						
						
						
					</div>

				</div>





			</div>












		</div>

	</div>









	<%@include file="../pfoot.jsp"%>




	<script type="text/javascript" src="${basePath}/js/plugin/bootstrap-table/js/bootstrap-table.min.js"></script>
				<script type="text/javascript" src="${basePath}/js/plugin/bootstrap-table/js/bootstrap-table-zh-CN.js"></script>


	<script type="text/javascript"
		src="${basePath}/js/plugin/jquery/jquery.noty.min.js"></script>
	<script type="text/javascript"
		src="${basePath}/js/plugin/jquery/noty.layout.center.js"></script>
	<script type="text/javascript"
		src="${basePath}/js/plugin/jquery/noty.themes.bootstrap.js"></script>


	<script type="text/javascript"
		src="${basePath}/js/plugin/jquery/jquery.validate.js"></script>

	<script type="text/javascript" src="${basePath}/js/own/kvalidate.js"></script>

	<script src="${basePath}/js/own/menu.js"></script>
	<script src="${basePath}/js/own/loading.js"></script>

 
  <script src="<c:out value="${basePath}"/>/js/plugin/echart/echarts.js"></script>
  <script type="text/javascript" src="${basePath}/public/portal/time.js"></script>
 
 <script type="text/javascript" src="${basePath}/public/portal/chart.js"></script>
 
	<!-- <script type="text/javascript" src="${basePath}/js/plugin/select2/select2.full.min.js"></script>  -->
	<script type="text/javascript" src="${basePath}/public/portal/detail.js"></script>



</body>
</html>