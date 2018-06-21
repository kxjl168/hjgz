<%@ page language="java" contentType="text/html; charset=UTF-8"%>

<div class="col-xs-12 padding5 ">


	<div class=" panel panel-success kpanel">
            <div class="panel-heading " title="" >
                <div class="row">
                    <h3 class="panel-title  col-xs-4 nopaddding">
                    <span class="blod">数据统计</span>
                    </h3>

<div class="small text-right dselect">
<span>


													
								 			
<div id="dbtn" class=" btn-group "  >
<input type="hidden" id="s_type" value="异常_"/>
<input type="hidden" id="dateType"/>
<input type="hidden" id="effectDate"/>
<input type="hidden" id="effectDate2"/>



							<a  class="btn btn-sm btn-default dropdown-toggle" href="#" data-hover="dropdown"  data-toggle="dropdown"  data-close-others="false">
							<span id="idDropDownAlertType">全部数据</span><i class="glyphicon glyphicon-chevron-down"></i>
							</a>
							<ul class="dropdown-menu" id="idUlAlertDropdown" style="min-width:100%;">
							
								<li class="active" onclick="changetype(this)"><a value="异常_">全部数据</a></li>
								<li ng-repeat="x in types_select " onclick="changetype(this)"><a value="{{x.dict_key}}">{{x.dict_name}}</a></li>
							
							</ul>
						</div>
					
						
					
	
							
							
							
							
						
</span>
<div class="time pull-right">
<span class="select">今天</span>
<span>本周</span>
<span>本月</span>
</div>
</div>


                    <span id="titlepic" class="hide"  class="glyphicon glyphicon-chevron-up pull-right "></span>
                </div>
            </div>
            <div id="collapseOner11" class="panel-collapse collapse in ">
                <div class="panel-body">

                  <div id="pchart"  style="height: 400px; width: 100%">></div>


                </div>
            </div>
        </div>




</div>


<div class="col-xs-12 padding5 ">


	<div class=" panel panel-success kpanel">
            <div class="panel-heading " title="" data-toggle="collapse" data-parent="#accordion" href="#collapseOner11">
                <div class="row">
                    <h3 class="panel-title  col-xs-6">
                    <span class="blod">历史统计</span>
                    </h3>

<div class="small text-right ">

<div>
<span>今天</span>
<span>本周</span>
<span>本月</span>
</div>
</div>


                    <span id="titlepic" class="hide" data-toggle="collapse" data-parent="#accordion" href="#collapseOner11" class="glyphicon glyphicon-chevron-up pull-right "></span>
                </div>
            </div>
            <div id="collapseOner11" class="panel-collapse collapse in ">
                <div class="panel-body">

                    4个次数



                </div>
            </div>
        </div>




</div>