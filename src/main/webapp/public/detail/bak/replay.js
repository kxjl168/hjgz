$(function() {

	initReplayModel();

	var $scope = angular.element(ngSection).scope();
	kvalidate.init($("#fm"), {
		s_uid : {
			required : true,
			maxlength : 40,

		},
		s_ublog : {
			required : false,
			maxlength : 100,

		},
		s_text : {
			required : true,
			minlength : 5,
			maxlength : 500,
		},
		s_email : {
			
			maxlength : 100,
			email :true,
			required : false,
		}

	}, {
		s_uid : {
			required : "大侠请留名！",
			maxlength : "字数有点太多了-_-！",
		},
		s_ublog : {

			maxlength : "字数有点太多了-_-！",
		},
		s_text : {
			required : "写几个字吧 ",
			minlength : "再多写两个字呗 ",
			maxlength : "字数有点太多了-_-！",

		},
		s_email : {
			maxlength : "您的邮箱看起来非常非常的大... -_-!",
		}
	}, $scope.doupdate, "", "");

});

pass = function(event, id) {

	var obj = {};
	var http = getImUrl();
	obj.id = id;
	obj.state = "1";

	$("#myModal3").modal("show");
	$("#btnconfirm")
			.one(
					"click",

					function() {
						SZUMWS(http + "replay/updateState.action", JSON
								.stringify(obj),
								function succsess(json) {

									var code = json.ResponseCode;
									var message = json.ResponseMsg;
									console.log('-----return -code= ' + code
											+ ';message= ' + message);
									if (code == 200) {

										var $scope = angular.element(ngSection)
												.scope();

										setTimeout(function() {
											$("#myModal3").modal("hide");
										}, 10);

										$scope.getReplayList();

									} else {
										msg(message);
									}

								}, function error(data) {
									msg("net work error！");

								}, false, false

						);

					});

};

del = function(event, id) {
	var obj = {};
	var http = getImUrl();
	obj.id = id;
	obj.state = "1";

	$("#myModal3").modal("show");
	$("#btnconfirm")
			.one(
					"click",

					function() {
						SZUMWS(http + "replay/del.action", JSON.stringify(obj),
								function succsess(json) {

									var code = json.ResponseCode;
									var message = json.ResponseMsg;
									console.log('-----return -code= ' + code
											+ ';message= ' + message);
									if (code == 200) {

										var $scope = angular.element(ngSection)
												.scope();

										setTimeout(function() {
											$("#myModal3").modal("hide");
										}, 10);

										$scope.getReplayList();

									} else {
										msg(message);
									}

								}, function error(data) {
									msg("net work error！");

								}, false, false

						);

					});
};

canc = function(e, x) {
	var row = $("#rpdiv");

	kvalidate.resetForm("#fm");
	$("#rdivc").after(row);
	$("#cbtn").addClass("hide");
};

gourl = function(url) {
	var row = $("#rpdiv");

	if ($(url).attr("href").indexOf("http") > -1) {
		$("#myModal_outurl").modal("show");
		$("#btnconfirm_outurl").one("click", function() {

			window.open($(url).attr("href"), 'new', "")
		});
		return false;
	} else {
		return false;
		// window.location.hash = "#commet";
	}
};

beginReplay = function(e, mainid, preid) {
	var $scope = angular.element(ngSection)
	.scope();
	$scope.preplay={};
	$scope.preplay.recordid=mainid;
	
	$scope.preplay_main ={};
	$scope.preplay_main.recordid =preid;
	
	var row = $("#rpdiv");

	($(e).parent()).after(row);

	$("#cbtn").removeClass("hide");

};

function initReplayModel() {
	var $scope = angular.element(ngSection).scope();
	$scope
			.$apply(function() {
				$scope.replay = function(x) {

					kvalidate.validate("#fm");

				};

				var http = getImUrl();

				$scope.doupdate = function(fm) {

					var obj = {};

					if (typeof ($scope.preplay) == "undefined") {

					} else {
						obj.pid = $scope.preplay.recordid;
					}

					if (typeof ($scope.preplay_main) == "undefined") {

					} else {
						obj.ppid = $scope.preplay_main.recordid;
					}

					obj.imei = $scope.x.imei;
					obj.userid = escape($scope.s_uid);
					obj.context = escape($scope.s_text);
					obj.ublog = $scope.s_ublog ? escape($scope.s_ublog) : "";
					obj.email = escape($scope.s_email);

					SZUMWS(http + "replay/addOrUpdate.action", JSON
							.stringify(obj), function succsess(json) {

						var code = json.ResponseCode;
						var message = json.ResponseMsg;
						console.log('-----return -code= ' + code + ';message= '
								+ message);
						if (code == 200) {

							msg("感谢您的关注,评论等待审核中...");

							setTimeout(function() {
								$scope.s_uid = "";
								$scope.s_text = "";
								$scope.s_ublog = "";
								$scope.s_email = "";
								$scope.canc();

								$scope.$apply();
								
								$scope.getReplayList();
							}, 10);

						

						} else {
							msg(message);
						}

					}, function error(data) {
						msg("net work error！");

					}, false, false

					);

				};

				$scope.gourl = function(url) {
					var row = $("#rpdiv");

					if (url.indexOf("http") > -1) {
						$("#myModal4").modal("show");
						$("#btnconfirm4").one("click", function() {

							window.open(url, 'new', "")
						});
					} else {
						return false;
						// window.location.hash = "#commet";
					}
				};

				$scope.canc = function(event, x) {
					var row = $("#rpdiv");

					kvalidate.resetForm("#fm");
					$("#rdivc").after(row);
					$("#cbtn").addClass("hide");
				};

				$scope.beginReplay = function(event, x, t) {
					$scope.preplay = x;
					$scope.preplay_main = t;
					var row = $("#rpdiv");

					($(event.target).parent()).after(row);

					$("#cbtn").removeClass("hide");

				};

				$scope.getReplayList = function() {

					var http = getImUrl();

					var obj = new Object();

					obj.imei = $scope.x.imei;

					obj.page = $scope.rpage;
					obj.rows = $scope.rrows;
					SZUMWS(
							http + "replay/getInfoList.action",
							JSON.stringify(obj),
							function succsess(json) {

								var code = json.ResponseCode;
								var message = json.ResponseMsg;
								console.log('-----return -code= ' + code
										+ ';message= ' + message);
								if (code == 200) {
									
									
									

									$scope.rdatalist = eval(json.datalist);
									$scope.rnum = $scope.rdatalist.length;
									$scope.root = json.isRoot;

									$
											.each(
													$scope.rdatalist,
													function(index, item) {
														$scope.rdatalist[index].content = unescape(item.content);
														$scope.rdatalist[index].userid = unescape(item.userid);
														$scope.rdatalist[index].user_blog = item.user_blog ? unescape(item.user_blog)
																: "";

														$
																.each(
																		$scope.rdatalist[index].reback,
																		function(
																				index2,
																				item2) {
																			$scope.rdatalist[index].reback[index2].content = unescape(item2.content);
																			$scope.rdatalist[index].reback[index2].userid = unescape(item2.userid);
																			$scope.rdatalist[index].reback[index2].user_blog = item2.user_blog ? unescape(item2.user_blog)
																					: "";
																			$scope.rdatalist[index].reback[index2].tuid = unescape(item2.tuid);
																			$scope.rdatalist[index].reback[index2].tuser_blog = item2.tuser_blog ? unescape(item2.tuser_blog)
																					: "";

																		});

													});
									$scope.$apply();
									
									$scope.buildReplay();

								} else {
									msg(message);
								}

							}, function error(data) {
								msg("net work error！");

							}, false, false

					);

				};
				
				
				
				$scope.buildReplay = function() {
					
			
					var html="";
					
					$.each($scope.rdatalist,function(index,item){
						
						
						html+='<div class="row col-xs-12 ">'
						 

			             +'    <div class="row col-lg-10 replayblock b1"> '


			             +'        <div class="hide" id="f'+($scope.rnum-index)+'">'+($scope.rnum-index)+'楼&nbsp;<a href="'+item.user_blog+'" title="'+item.user_blog+'">'+item.userid+'</a> <span class="pull-right text-right">&nbsp;'+item.create_date+'</span> </div> '

			             +'        <div id="f'+($scope.rnum-index)+'"><a href="'+item.user_blog+'"   onclick="return gourl(this);"  title="'+item.user_blog+'">'+item.userid+' </a> <span class=" text-right">&nbsp;'+item.create_date+' </span> ';
			                    
			             if($scope.root)
			            	 {
			            	 html+='       <span  >【  ';
			            	  if(item.state!=1)
			            		  html+='<a   href="#f'+($scope.rnum-index)+'" class="   text-success margin-right-20" onclick="pass(this,\''+item.recordid+'\')">审核通过</a>&nbsp; ';
			            	  html+='                          <a href="#f'+($scope.rnum-index)+'" class="   text-warning margin-right-20" onclick="del(this,\''+item.recordid+'\')">删除</a>'
				             +'】 '
				             +'                           </span> ';	
				            
			            	 }
			             
			             html+='    </div> '

			             +'    		<div class="rcct">'+item.content+'</div> '
			             +'         <div class="row  margin-bottom-5"> '

			             +'         <a href="#f'+($scope.rnum-index)+'" class="ba1 replaybtn  text-info margin-right-20" onclick="beginReplay(this,\''+item.recordid+'\')">回复</a> '
			                    
			             +'       	</div> '

			             +'   		<div class=" rcblock"> ';
			             
			             
			             $.each(item.reback,function(iindex,t)
			            		 {
			            	 
			            	   html+= '    <div  class="replayblock b2"> '
					             +'                <div id=""><a href="'+t.user_blog+'"  onclick="return gourl(this)"   title="'+t.user_blog+'">'+t.userid+'</a> @ <a href="'+t.tuser_blog+'" title="'+t.tuser_blog+'">'
					             +t.tuid+'</a> <span class=" text-right">&nbsp;'+t.create_date+'</span> ';
					         
					             if($scope.root)
				            	 {
				            	 html+='       <span  >【  ';
				            	  if(t.state!=1)
				            		  html+='<a   href="#f'+($scope.rnum-iindex)+'" class="   text-success margin-right-20" onclick="pass(this,\''+t.recordid+'\')">审核通过</a>&nbsp; ';
				            	  html+='                          <a href="#f'+($scope.rnum-iindex)+'" class="   text-warning margin-right-20" onclick="del(this,\''+t.recordid+'\')">删除</a>'
					             +'】 '
					             +'                           </span>';
					          			
				            	 }
			            	  
					             
					             
			            	   html+= '       		</div>'
					             +'              	<div class="rcct">'+t.content+'</div> '
					             +'              	 <div class="row  margin-bottom-5"> '

					             +'                    <a href="#ff'+($scope.rnum-iindex)+'" class=" replaybtn text-info margin-right-20" onclick="beginReplay(this,\''+t.recordid+'\',\''+item.recordid+'\')">回复</a> '
					                            
					             +'                 	</div> '
					             +'            </div> ';
					           
					             
			            		 });
			             
			          
			             html+= '     </div> '
			             +'    </div> '
			            +'    </div>  ';
						
					});
					
					$("#cblock").html(html);
					
					
					
					
				};


			});
	
	
	

};

