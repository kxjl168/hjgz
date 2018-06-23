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


				<div id="pgdiv" name="pgdiv" class="col-sm-12 col-xs-12 nopaddding ">


				<div class="tcenter title row col-xs-12 nopaddding  ">
		<span class="back glyphicon glyphicon-chevron-left"></span>	监控日志
			</div>	
				
			

					<div class=" row listdiv dtab">
						
						
						<ul class="nav nav-tabs" id="myTab">

										<li class="col-xs-2 p20 active"><a href="#identifier1" data-toggle="tab">所有</a></li>
										<li class="col-xs-2 p20"><a href="#identifier2" data-toggle="tab">预警</a></li>
										<li class="col-xs-2 p20"><a href="#identifier3" data-toggle="tab">告警</a></li>
										<li class="col-xs-2 p20"><a href="#identifier4" data-toggle="tab">离线</a></li>
										<li class="col-xs-2 p20"><a href="#identifier5" data-toggle="tab">处理</a></li>
									
									</ul>

									<div class="tab-content">
										
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




	<script type="text/javascript"
		src="${basePath}/js/plugin/bootstrap-table/js/bootstrap-table.min.js"></script>
	<script type="text/javascript"
		src="${basePath}/js/plugin/bootstrap-table/js/bootstrap-table-zh-CN.js"></script>


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
	<script type="text/javascript" src="${basePath}/public/portal/list.js"></script>



</body>
</html>