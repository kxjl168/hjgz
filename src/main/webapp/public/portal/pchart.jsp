<%@ page language="java" contentType="text/html; charset=UTF-8"%>



<div class="row col-xs-12 padding5 ">


	<div class=" panel panel-success kpanel">
		<div class="panel-heading " title="">
			<div class="row">
				<h3 class="panel-title top5 col-xs-4 nopaddding">
					<span class="blod font-blue">数据统计</span>
				</h3>

				<div class="small text-right dselect">
					<span>

						<div id="dbtn" class=" btn-group ">
							<input type="hidden" id="s_type" value="异常_" /> <input
								type="hidden" id="dateType" /> <input type="hidden"
								id="effectDate" /> <input type="hidden" id="effectDate2" /> <a
								class="btn btn-sm btn-default dropdown-toggle" href="#"
								data-hover="dropdown" data-toggle="dropdown"
								data-close-others="false"> <span id="idDropDownAlertType">全部数据</span><i
								class="glyphicon glyphicon-chevron-down"></i>
							</a>
							<ul class="dropdown-menu" id="idUlAlertDropdown"
								style="min-width: 100%;">

								<li class="active" onclick="changetype(this)"><a
									value="异常_">全部数据</a></li>
								<li ng-repeat="x in types_select " onclick="changetype(this)"><a
									value="{{x.dict_key}}">{{x.dict_name}}</a></li>

							</ul>
						</div>
					</span>
					<div class="time pull-right">
						<span class="select">今天</span> <span>本周</span> <span>本月</span>
					</div>
				</div>


				<span id="titlepic" class="hide"
					class="glyphicon glyphicon-chevron-up pull-right "></span>
			</div>
		</div>
		<div id="collapseOner11" class="panel-collapse collapse in ">
			<div class="panel-body">

				<div id="pchart" style="height: 400px; width: 100%">></div>


			</div>
		</div>
	</div>
</div>


<div class="row col-xs-12 padding5 ">


	<div class=" panel panel-success kpanel stastic">
		<div class="panel-heading " title="" >
			<div class="row">
				<h3 class="panel-title top5 col-xs-4 nopaddding">
					<span class="blod  font-blue">历史统计</span>
				</h3>

				<div class="small text-right dselect">
					<span>

						<div id="dbtn" class="hide  btn-group ">
							<input type="hidden" id="h_s_type" value="异常_" /> <input
								type="hidden" id="h_dateType" /> <input type="hidden"
								id="h_effectDate" /> <input type="hidden" id="h_effectDate2" />
							<a class="btn btn-sm btn-default dropdown-toggle" href="#"
								data-hover="dropdown" data-toggle="dropdown"
								data-close-others="false"> <span id="h_idDropDownAlertType">全部数据</span><i
								class="glyphicon glyphicon-chevron-down"></i>
							</a>
							<ul ng-cloak class="dropdown-menu" id="idUlAlertDropdown"
								style="min-width: 100%;">

								<li class="active" onclick="h_changetype(this)"><a
									value="异常_">全部数据</a></li>
								<li ng-repeat="x in types_select " onclick="h_changetype(this)"><a
									value="{{x.dict_key}}">{{x.dict_name}}</a></li>

							</ul>
						</div>
					</span>
					<div class="time2 pull-right">
						<span class="select">今天</span> <span>本周</span> <span>本月</span>
					</div>
				</div>


				<span id="titlepic" class="hide" data-toggle="collapse"
					data-parent="#accordion" href="#collapseOner11"
					class="glyphicon glyphicon-chevron-up pull-right "></span>
			</div>
		</div>
		<div id="collapseOner11" class="panel-collapse collapse in ">
			<div class="panel-body">

				<div class="row">

					<div class="titem tb col-xs-6  ">
						<div class="widget-subscribe  font-grey-mint ">
							<div class=" col-xs-10 nopaddding">总数</div> 
							<div class="alarmnum2 col-xs-10 nopaddding "><span ng-cloak class="font-black">{{tabledata.total}}</span>次</div>


						</div>
					</div>

					<div class="titem tb col-xs-6  ">
						<div class="widget-subscribe  font-grey-mint ">
							<div class=" col-xs-10 nopaddding">预警</div> 
							<div class="alarmnum2 col-xs-10 nopaddding "><span ng-cloak class="font-yellow">{{tabledata.yujing}}</span>次</div>


						</div>
					</div>
					
					<div class="titem tb col-xs-6  ">
						<div class="widget-subscribe  font-grey-mint ">
							<div class=" col-xs-10 nopaddding">告警</div> 
							<div class="alarmnum2 col-xs-10 nopaddding "><span ng-cloak class="font-red">{{tabledata.gaojing}}</span>次</div>


						</div>
					</div>
					
					<div class="titem tb col-xs-6  ">
						<div class="widget-subscribe  font-grey-mint ">
							<div class=" col-xs-10 nopaddding">离线</div> 
							<div class="alarmnum2 col-xs-10 nopaddding "><span ng-cloak class="font-blue">{{tabledata.lixian}}</span>次</div>


						</div>
					</div>


				</div>
			</div>
		</div>




	</div>
</div>