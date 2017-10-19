/*跟线上一制*/
require
		.config({
			baseUrl : "zpgSource/js",
			urlArgs : "bust=" + 206,
			paths : {
				zpgJqery : 'common/zpg_jquery.min',
				commonAll : 'computer/conmmAll.min',
				zhaopingou : 'computer/zhaopingou.min',
				daterangepicker : 'common/yuan/jquery.daterangepicker',
				activity : 'computer/activity.min',
				jquery : 'common/yuan/jquery-1.9.1',
				ajax : 'common/yuan/ajax',
				cookie : 'common/yuan/cookie',
				jqueryUi : 'common/yuan/jquery-ui-common',
				commonData : 'common/yuan/common-data',
				dayDate : 'common/yuan/day_date',
				header : 'computer/yuan/commPc/header',
				footer : 'computer/yuan/commPc/footer',
				scroll : 'computer/yuan/commPc/scroll',
				maskShow : 'computer/yuan/commPc/mask_show',
				form : 'computer/yuan/commPc/form',
				zpgDemand : 'computer/zpgDemand.min',
				mainIndex : 'computer/yuan/index/indexNew',
				resumeList : 'computer/yuan/resumePc/resumeList',
				resumeOperation : 'computer/yuan/resumePc/resumeOperation',
				resumeScreen : 'computer/yuan/resumePc/resumeScreen',
				workbench : 'computer/yuan/workbenchPc/workbench',
				message : 'computer/yuan/usersPc/message',
				brand : 'computer/yuan/usersPc/brand',
				usersInfo : 'computer/yuan/usersPc/usersInfo',
				accountSet : 'computer/yuan/usersPc/accountSet',
				usersMessageAll : 'computer/yuan/usersPc/usersMessageAll',
				userMessageSet : 'computer/yuan/usersPc/messageSet',
				userEcharts : 'computer/yuan/usersPc/echarts',
				userStatistics : 'computer/yuan/usersPc/statistics',
				userWorkStat : 'computer/yuan/usersPc/usersWork',
				contacts : 'computer/yuan/contact/contact',
				received : 'computer/yuan/receiver/receiverResume',
				resumeDetails : 'computer/yuan/resumePc/resumeDetails',
				newResumeDetails : 'computer/yuan/resumePc/resumeDetails.2.0',
				pinchzoom : 'common/yuan/pinchzoom',
				colleague : 'computer/yuan/showPagePc/sendColleague',
				arrangeInterview : 'computer/yuan/showPagePc/arrangeInterview',
				importResume : 'computer/yuan/showPagePc/importResume',
				blog : 'computer/yuan/blog/blog',
				error : 'computer/yuan/commPc/error',
				perview_brand : 'computer/yuan/workbenchPc/perview_brand',
				lunbo : 'computer/yuan/commPc/lunbo',
				netWork : 'computer/yuan/brandWebsite/netWork',
				anniversary : 'computer/yuan/activity/anniversary',
				awardRotate : 'computer/yuan/activity/awardRotate',
				augustActivity : 'computer/yuan/activity/augustActivity',
				worktable : 'computer/yuan/worktablePc/worktable',
				sortable : 'common/yuan/sortable',
				worktableInterviewArrangement : 'computer/yuan/showPagePc/worktable/InterviewArrangement',
				worktable_Inbox : 'computer/yuan/worktablePc/worktable_Inbox',
				worktableTwo : 'computer/yuan/worktablePc/worktable_two',
				buyservice : 'computer/yuan/memberPc/buyservice',
				resume_library : 'computer/yuan/resumePc/resume_library',
				rencai : 'computer/yuan/activity/rencai',
				moveResume : 'computer/yuan/showPagePc/worktable/moveResume',
				demandList : 'computer/yuan/demand/demandList',
				demandDetail : 'computer/yuan/demand/demandDetail',
				demandEdit : 'computer/yuan/demand/demandEdit',
				demandListManage : 'computer/yuan/demand/demandListManage',
				manageDetail : 'computer/yuan/demand/manageDetail',
				indexSelectCitys : 'computer/yuan/showPagePc/indexSelectCitys',
				resumeTrade : 'computer/yuan/showPagePc/resumeTrade',
				jobClassification : 'computer/yuan/showPagePc/jobClassification',
				//新购买服务
				vipService : 'computer/yuan/serviceVip/vipService',
				buyServiceNew : 'computer/yuan/serviceVip/buyService',
				carService : 'computer/yuan/serviceVip/carService',
				orderListService : 'computer/yuan/serviceVip/orderListService',
				detailsOrderService : 'computer/yuan/serviceVip/detailsOrderService',
				orderConfirmService : 'computer/yuan/serviceVip/orderConfirmService',
				wangEditor : 'computer/yuan/relessePosition/wangEditor',
				//砍价专场
				bargainSpecialJS : 'computer/yuan/activity/bargainSpecial'
			}
		});

/*
 * 配置js
 */
var zpgJqery = null;
var commonAll = null;
var zhaopingou = null;
var isDebug = function() {
	if (window.location.host.indexOf("zhaopingou.com") != -1) {
		return false;
	} else if (window.location.host.indexOf("hrkeep.cn") != -1) {
		return false;
	} else {
		return true;
	}
};

if (isDebug()) {
	zpgJqery = [ 'jquery', 'ajax', 'cookie', 'jqueryUi', 'commonData' ];
	commonAll = [ 'header', 'footer', 'scroll', 'dayDate', 'maskShow',
			'colleague', 'arrangeInterview', 'importResume', 'message',
			'lunbo', 'rencai', 'form' ];
	zhaopingou = [ 'mainIndex', 'resume_library', 'resumeOperation',
			'resumeList', 'buyservice', 'resumeScreen', 'workbench',
			'contacts', 'blog', 'received', 'resumeDetails',
			'newResumeDetails', 'usersInfo', 'accountSet', 'usersMessageAll',
			'userMessageSet', 'userStatistics', 'userEcharts', 'userWorkStat',
			'brand', 'perview_brand', 'error', 'netWork',
			'daterangepicker', 'anniversary', 'awardRotate', 'worktable',
			'worktable_Inbox', 'sortable', 'worktableInterviewArrangement',
			'worktableTwo', 'moveResume', 'demandList', 'demandDetail',
			'demandEdit', 'demandListManage', 'manageDetail',
			'indexSelectCitys', 'resumeTrade', 'jobClassification','vipService',
			'buyServiceNew', 'carService', 'orderListService',
			'detailsOrderService', 'orderConfirmService', 'bargainSpecialJS',
			'wangEditor', 'augustActivity'];
} else {
	zpgJqery = [ 'zpgJqery' ];
	commonAll = [ 'commonAll' ];
	zhaopingou = [ 'zhaopingou', 'zpgDemand','activity'];
}

/**
 * oauth2/access_token 配置页面
 */
var defineAddPage = {
	source : {
		resume : {
			link : "zpgSource/html/computer/resume/resumeOnline.html?version=206",
			data : null
		},
		resumeDetails : {
			link : "zpgSource/html/computer/resume/resumeDetails.html?version=206",
			data : null
		},
		resumeSerch : {// 在线简历搜索
			link : "zpgSource/html/computer/resume/resumeSerch.html?version=206",
			data : null
		},
		brand : {
			link : "zpgSource/html/computer/users/brand.html?version=206",
			data : null
		},
		contacts : {
			link : "zpgSource/html/computer/linkMan/newLinkMan.html?version=206",
			data : null
		},
		workbench : {
			link : "zpgSource/html/computer/workbench/workbench.html?version=206",
			data : null
		},
		received : {
			link : "zpgSource/html/computer/receivedResume/receivedResume.html?version=206",
			data : null
		},
		member : {
			link : "zpgSource/html/computer/member/memberInfo.html?version=206",
			data : null
		},
		prepaidRecords : {
			link : "zpgSource/html/computer/member/prepaidRecords.html?version=206",
			data : null
		},
		memberSuccess : { // 支付成功
			link : "zpgSource/html/computer/member/memberSuccess.html?version=206",
			data : null
		},
		login : {// 登录
			link : "zpgSource/html/computer/users/login.html?version=206",
			data : null
		},
		resetpassword : {// 重置密码
			link : "zpgSource/html/computer/users/resetpassword.html?version=206",
			data : null
		},
		blogEntry : {// 产品博客的首页
			link : "zpgSource/html/computer/blog/blog.html?version=206",
			data : null
		},
		blogSearch : {// 产品博客搜索页面
			link : "zpgSource/html/computer/blog/search.html?version=206",
			data : null
		},
		error : {// 错误页面
			link : "zpgSource/html/computer/error/error.html?version=206",
			data : null
		},
		account_set : {// 个人中心-帐号设置
			link : "zpgSource/html/computer/users/accountSet.html?version=206",
			data : null
		},
		usersInfo : {// 个人中心-首页
			link : "zpgSource/html/computer/users/usersInfo.html?version=206",
			data : null
		},
		accountSet : {// 个人中心-帐号管理
			link : "zpgSource/html/computer/users/accountSet.html?version=206",
			data : null
		},
		userMessage : {// 个人中心-消息
			link : "zpgSource/html/computer/users/message.html?version=206",
			data : null
		},
		userMessageAll : {// 个人中心-全部消息
			link : "zpgSource/html/computer/users/allMessage.html?version=206",
			data : null
		},
		unReadMessage : {
			link : "zpgSource/html/computer/users/unReadMessage.html?version=206",
			data : null
		},
		userMessageSet : {// 个人中心-消息设置
			link : "zpgSource/html/computer/users/messageSet.html?version=206",
			data : null
		},
		personalData : {// 个人中心-个人资料
			link : "zpgSource/html/computer/users/personalData.html?version=206",
			data : null
		},
		statistics : {// 个人中心-工作统计
			link : "zpgSource/html/computer/users/workStatistics.html?version=206",
			data : null
		},
		sendColleague : {
			link : "zpgSource/html/computer/showPage/sendColleague.html?version=206",
			data : null
		},
		arrangeInterview : {
			link : "zpgSource/html/computer/showPage/arrangeInterview.html?version=206",
			data : null
		},
		importResume : {
			link : "zpgSource/html/computer/showPage/importResume.html?version=206",
			data : null
		},
		sendIntroductionAsk : {
			link : "zpgSource/html/computer/showPage/sendIntroductionAsk.html?version=206",
			data : null
		},
		multiCitySwitch : {
			link : "zpgSource/html/computer/showPage/MultiCitySwitch.html?version=206",
			data : null
		},
		companyIntro : {// 预览邮件模板dialog
			link : "zpgSource/html/computer/showPage/companyIntro.html?version=206",
			data : null
		},
		ModifyProfile : {// 个人资料修改新
			link : "zpgSource/html/computer/showPage/ModifyProfile.html?version=206",
			data : null
		},
		jobDontFindWork : {// 求职者不想找工作dialog
			link : "zpgSource/html/computer/showPage/jobDontFindWork.html?version=206",
			data : null
		},
		userTesting : {// 未验证公司信息dialog
			link : "zpgSource/html/computer/showPage/userTesting.html?version=206",
			data : null
		},
		recommend : {// 推广落地页面
			link : "zpgSource/html/computer/tuiguang/recommend.html?version=206",
			data : null
		},
		emailAffirm : {// 过度页
			link : "zpgSource/html/computer/transition/emailAffirm.html?version=206",
			data : null
		},
		userscomment : {// 个人中心评论区
			link : "zpgSource/html/computer/users/usersComment.html?version=206",
			data : null
		},
		updateServices : {
			link : "zpgSource/html/computer/showPage/updateServices.html?version=206",
			data : null
		},
		pdfViewPerview : {
			link : "zpgSource/pdf/web/viewer.html?version=206",
			data : null
		},
		resumeJob : {// 全部职位
			link : "zpgSource/html/computer/showPage/resumeJob.html?version=206",
			data : null
		},
		resumeLibrary : {// 存量库
			link : "zpgSource/html/computer/resumeLibrary/resumeLibrary.html?version=206",
			data : null
		},
		unlockingResumeList : {// 简历解锁记录
			link : "zpgSource/html/computer/users/unlockingResumeList.html?version=206",
			data : null
		},
		createInvoice : {// 未开发票
			link : "zpgSource/html/computer/users/createInvoice.html?version=206",
			data : null
		},
		invoiceList : {// 已开发票
			link : "zpgSource/html/computer/users/invoiceList.html?version=206",
			data : null
		},
		paymentSuccessful : {// 支付成功
			link : "zpgSource/html/computer/users/paymentSuccessful.html?version=206",
			data : null
		},
		invoiceDetails : {// 支付成功
			link : "zpgSource/html/computer/users/invoiceDetails.html?version=206",
			data : null
		},
		applyInvoicDetail : {// 申请发票
			link : "zpgSource/html/computer/users/applyInvoicDetail.html?version=206",
			data : null
		},
		workTable : {// 新工作台
			link : "zpgSource/html/computer/worktable/workTable.html?version=206",
			data : null
		},
		twopage : {// 新工作台 二级页面
			link : "zpgSource/html/computer/worktable/twopage.html?version=206",
			data : null
		},
		searchResult : {// 新工作台 搜索结果页
			link : "zpgSource/html/computer/worktable/searchResult.html?version=206",
			data : null
		},
		newInterviewArrangement : {// 新工作台 安排面试页
			link : "zpgSource/html/computer/showPage/worktable/InterviewArrangement.html?version=206",
			data : null
		},// 一下是xin工作台的弹窗
		add_remarks : {
			link : "zpgSource/html/computer/showPage/worktable/add_remarks.html?version=206",
			data : null
		},
		sayCandidate : {
			link : "zpgSource/html/computer/showPage/worktable/sayCandidate.html?version=206",
			data : null
		},
		loginNew : {
			link : "zpgSource/html/computer/users/loginNew.html?version=206",
			data : null
		},
		buyservice : {
			link : "zpgSource/html/computer/member/buyservice201702231154.html?version=206",
			data : null
		},
		moveResume : {/* 移动文件夹 */
			link : "zpgSource/html/computer/showPage/worktable/moveResume.html?version=206",
			data : null
		},
		demandList : {/* 需求互助 */
			link : "zpgSource/html/computer/demand/demandlist.html?version=206",
			data : null
		},
		demandEdit : {/* 需求编辑 */
			link : "zpgSource/html/computer/demand/demandEdit.html?version=206",
			data : null
		},
		demandlistManage : {/* 管理需求 */
			link : "zpgSource/html/computer/demand/demandlistManage.html?version=206",
			data : null
		},
		manageDetail : {/* 需求详情 */
			link : "zpgSource/html/computer/demand/manage_detail.html?version=206",
			data : null
		},
		indexSelectCitys : {/* 选择城市 */
			link : "zpgSource/html/computer/showPage/indexSelectCitys.html?version=206",
			data : null
		},
		resumeTrade : {/* 所属行业 */
			link : "zpgSource/html/computer/showPage/resumeTrade.html?version=206",
			data : null
		},
		jobClassification : {/* 所有职位分类 */
			link : "zpgSource/html/computer/showPage/jobClassification.html?version=206",
			data : null
		},
		//新购买服务
		purchaseResume_limit : {// 购买服务商品页
			link : "zpgSource/html/computer/purchase/resume_limit.html?version=206",
			data : null
		},
		purchasefree_resume : {// 免费简历额度详情
			link : "zpgSource/html/computer/purchase/free_resume.html?version=206",
			data : null
		},
		purchaseTointerview : {// 包面试详情
			link : "zpgSource/html/computer/purchase/tointerview_con.html?version=206",
			data : null
		},
		purchaseConfirm_order_msg : {// 确认订单信息
			link : "zpgSource/html/computer/purchase/confirm_order_msg.html?version=206",
			data : null
		},
		purchaseShop_car : {// 购物车订单中有狗粮
			link : "zpgSource/html/computer/purchase/shop_car.html?version=206",
			data : null
		},
		purchaseSuccessful_trade : {// 交易成功-未开发票 
			link : "zpgSource/html/computer/purchase/successful_trade.html?version=206",
			data : null
		},
		purchaseAll_order : {// 所有订单 
			link : "zpgSource/html/computer/purchase/all_order.html?version=206",
			data : null
		},
		memberSuccess : {// 所有订单 
			link : "zpgSource/html/computer/member/memberSuccess.html?version=206",
			data : null
		},
		indentCode : {// 汇款识别码 
			link : "zpgSource/html/computer/purchase/indentCode.html?version=206",
			data : null
		}
	},
	addBackgroupPageLayout : function(pageSource, callback) {// 向功能区里追加页面
		$("#wrapDiv .resume").empty().hide();
		$("#wrapDiv .main").empty().show();
		if (pageSource.data == null) {
			$("#wrapDiv .main").load(pageSource.link,
					function(data, textStatus) {
						pageSource.data = data;
						callback && callback();
					});
		} else {
			$("#wrapDiv .main").html(pageSource.data);
			callback && callback();
		}

	},
	addBackgroupResumePageLayout : function(pageSource, callback) {// 向功能区里追加页面
		$("#wrapDiv .main").hide();
		$("#wrapDiv .resume").empty().show();
		if (pageSource.data == null) {
			$("#wrapDiv .resume").load(pageSource.link,
					function(data, textStatus) {
						pageSource.data = data;
						callback && callback();
					});
		} else {
			$("#wrapDiv .resume").html(pageSource.data);
			callback && callback();
		}

	},
	addDialogPageLayout : function(pageSource, callback) {// 向弹框区里追加页面
		if ($("#maskbox").length == 0) {
			$("body").append("<div id=\"maskbox\"></div>");
		}
		if (pageSource.data == null) {
			$("#maskbox").load(pageSource.link, function(data, textStatus) {
				pageSource.data = data;
				callback && callback();
			});
		} else {
			$("#maskbox").html(pageSource.data);
			callback && callback();
		}
	},
	addUserRightPageLayout : function(pageSource, callback) {// 向个人中心右侧区里追加页面
		if (pageSource.data == null) {
			$("#users_info_main").load(pageSource.link,
					function(data, textStatus) {
						pageSource.data = data;
						callback && callback();
					});
		} else {
			$("#users_info_main").html(pageSource.data);
			callback && callback();
		}
	},
	//新购买服务
	addVipDownPageLayout : function(pageSource, callback) {// 向服务页追加详情
		if (pageSource.data == null) {
			$("#service_vip_down").load(pageSource.link,
					function(data, textStatus) {
						pageSource.data = data;
						callback && callback();
					});
		} else {
			$("#service_vip_down").html(pageSource.data);
			callback && callback();
		}
	}
};
var commonPageData = {
	pageCode : 0,
	projectCode : 1,// 现在供 上传接口使用 1是招聘狗 2是求职者，3是人才服务4是猎头项目
	isNeedHeader : false,
	isNeedFooter : false,
	isNeedHeaderTop : true,
	headerId : 0,
	isLoadJs : false,
	isLoadPage : false,
	isLoadPageInterval : null
};
/**
 * 加载js的方法
 */
var locationJsCode = function() {
	if (commonPageData.isLoadJs) {
		checkCurrentUserInfo(function() {
			commonPageData.isLoadPageInterval = setInterval(function() {
				if ($("div").length != 0 && !commonPageData.isLoadPage) {
					clearInterval(commonPageData.isLoadPageInterval);
					commonPageData.isLoadPage = true;
					loading_header(function() {
						showCurrentPage(commonPageData.pageCode);
						window_resize_onload();
					});
				}
			}, 100);
		});
	} else {
		require(
				zpgJqery,
				function() {
					require(
							commonAll.concat(zhaopingou),
							function() {
								commonPageData.isLoadJs = true;
								checkCurrentUserInfo(function() {
									commonPageData.isLoadPageInterval = setInterval(
											function() {
												if ($("div").length != 0
														&& !commonPageData.isLoadPage) {
													clearInterval(commonPageData.isLoadPageInterval);
													commonPageData.isLoadPage = true;
													loading_header(function() {
														showCurrentPage(commonPageData.pageCode);
														window_resize_onload();
													});
												}
											}, 100);

								});
							});
				});
	}
};
/**
 * 加载页面
 */
function showCurrentPage(pageCode) {
	getUrlParam(urlParamData.generalize_tn);
	getUrlParam(urlParamData.generalize_pe);
	getUrlParam(urlParamData.generalize_k);
	getUrlParam(urlParamData.cityId);
	if (urlParamData.generalize_k.data != null
			&& urlParamData.generalize_k.data != "") {
		setCookie("zhaopingou_generalize_k_value",
				urlParamData.generalize_k.data);
		if (urlParamData.generalize_tn.data != null
				&& urlParamData.generalize_tn.data != "") {
			setCookie("zhaopingou_generalize_tn_value",
					urlParamData.generalize_tn.data);
		} else {
			setCookie("zhaopingou_generalize_tn_value", "");
		}
		if (urlParamData.generalize_pe.data != null
				&& urlParamData.generalize_pe.data != "") {
			setCookie("zhaopingou_generalize_pe_value",
					urlParamData.generalize_pe.data);
		} else {
			setCookie("zhaopingou_generalize_pe_value", "");
		}
		if (urlParamData.cityId.data != null && urlParamData.cityId.data != "") {
			setCookie("zhaopingou_generalize_cityId_value",
					urlParamData.cityId.data);
		} else {
			setCookie("zhaopingou_generalize_cityId_value", "");
		}
	}
	switch (pageCode) {
	case 1:// 简历库主页
		loading_new_index_layout();
		break;
	case 2:// 全站简历
	case 3:// 付费简历
	case 4:// 免费简历
		isResgiterDialogTip(function() {
			resume_library.entry();
		}, true);
		break;
	case 790:// 需求互助
//		isResgiterDialogTip(function() {
//			defineAddPage.addBackgroupPageLayout(
//					defineAddPage.source.demandList, function() {
//						demand_screen.init();
//					});
//		}, true);
//		break;
	case 798:// 需求管理
//		isResgiterDialogTip(function() {
//			defineAddPage.addBackgroupPageLayout(
//					defineAddPage.source.demandlistManage, function() {
//						demand_manage.init();
//					});
//		}, true);
		break;
	case 797:// 需求管理 详情
//		isResgiterDialogTip(function() {
//			manageDetail.init();
//		}, true);
		break;
	case 799:// 需求编辑
//		isResgiterDialogTip(function() {
//			defineAddPage.addBackgroupPageLayout(
//					defineAddPage.source.demandEdit, function() {
//						demand_edit.init();
//					});
//		}, true);
		break;
	case 796:// 管理 详情
		isResgiterDialogTip(function() {
			demandDetail.init();
		}, true);
		break;
	case 202:// 工作台的在线搜索
		isResgiterDialogTip(function() {
			defineAddPage.addBackgroupPageLayout(
					defineAddPage.source.resumeSerch, function() {
						workbench_search.loading_resume_search_entity();
					});
		}, true);
		break;
	case 200:// 我的工作台
	case 220:// 我的收件箱
	case 230:// 我的回收站
		isResgiterDialogTip(function() {
			defineAddPage.addBackgroupPageLayout(
					defineAddPage.source.workTable, function() {
						worktable.init();
					});
		}, true);
		break;
	case 206:// xin工作台 二级页面jsp
		isResgiterDialogTip(function() {
			worktable_TwoEntry.worktableTwoEntry();
		}, true);
		break;
	case 221:// 我的收件箱-二级页面
		isResgiterDialogTip(function() {
			worktable_InboxEntry.entry();
		}, true);
		break;
	case 199:// 简历详情
		isResgiterDialogTip(function() {
			new_resume_detail_entry();
		}, true);
		break;
	case 599:// 简历详情
		defineAddPage.addBackgroupPageLayout(
				defineAddPage.source.resumeDetails, function() {
					resumeDetailEntry();
				});
		break;
	case 300:// 个人中心主页
	case 302:// 个人中心主页
	case 301:// 消息中心
	case 303:// 工作统计
	case 304:// 帐号管理
	case 305:// 消息中心-设置
	case 306:// 消息中心-全部消息
	case 307:// 会员中心
	case 308:// 消息中心-同事
	case 309:// 消息中心-求职者
	case 310:// 消息中心-官方
	case 311:// 消息中心-回复
	case 313:// 简历解锁记录
	case 314:// 未开发票
	case 315:// 已开发票
	case 316:// 支付成功
	case 317:// 发票详情 - 招聘狗
	case 318:// 申请发票 - 招聘狗
		isResgiterDialogTip(function() {
			defineAddPage.addBackgroupPageLayout(
					defineAddPage.source.usersInfo, function() {
						userInfoEntry();
					});
		}, true);
		break;
	case 350:// 联系人主页
	case 351:// 联系人详情
	case 352:// 编辑联系人
	case 353:// 添加联系人
		isResgiterDialogTip(function() {
			defineAddPage.addBackgroupPageLayout(defineAddPage.source.contacts,
					function() {
						contactsEntry();
					});
		}, true);
		break;
	case 370:// 雇主品牌
		isResgiterDialogTip(function() {
			defineAddPage.addBackgroupPageLayout(defineAddPage.source.brand,
					function() {
						queryCompanyInfoByEditCompany();
					});
		}, true);
		break;
	case 400:// 产品博客
	case 407:// 产品博客详情
	case 409:// 活动信息
	case 410:// 官方动态与公告
	case 411:// 招聘专场与专题
	case 412:// 招聘专场与专题list
		defineAddPage.addBackgroupPageLayout(defineAddPage.source.blogEntry,
				function() {
					blogEntry();
				});
		break;
	case 401:// 帮助中心
		question.init();
		break;
	case 406:// 商务合作
	case 408:// 关于我们
	case 414:// 用户协议
		blogEntry();
		break;
	case 413:// 动态搜索
		defineAddPage.addBackgroupPageLayout(defineAddPage.source.blogSearch,
				function() {
					blogEntry();
				});
		break;
	case 499:// 404
		defineAddPage.addBackgroupPageLayout(defineAddPage.source.error,
				function() {
					load_error_page();
				});
		break;
	case 500:// 收到的简历
		defineAddPage.addBackgroupPageLayout(defineAddPage.source.received,
				function() {
					received_resume_show();
				});
		break;
	case 603:// 我的充值记录
		defineAddPage.addBackgroupPageLayout(
				defineAddPage.source.prepaidRecords, function() {
					load_prepaid_record_list_entity();
				});
		break;
	case 602:// 支付成功
		defineAddPage.addBackgroupPageLayout(
				defineAddPage.source.memberSuccess, function() {
					member_pay_success_entity();
				});
		break;
	case 600:// 会员介绍
		defineAddPage.addBackgroupPageLayout(defineAddPage.source.buyservice,
				function() {
					//userVip.init();
					buyservice.init();
				});
		break;
	//新购买服务
	case 610:// 商品详情
		vip_service.init();
		
		break;
	
	case 611:// 购物车订单中有狗粮
		isResgiterDialogTip(function() {
			defineAddPage.addBackgroupPageLayout(defineAddPage.source.purchaseShop_car,
					function() {
						car_service.init();
					});
		}, true);
		
		break;
	case 612:// 未开发票详情
		isResgiterDialogTip(function() {
			defineAddPage.addBackgroupPageLayout(defineAddPage.source.purchaseSuccessful_trade,
					function() {
						order_details_service.init();
					});
		}, true);
		break;
	case 613:// 所有订单
		isResgiterDialogTip(function() {
			defineAddPage.addBackgroupPageLayout(defineAddPage.source.purchaseAll_order,
					function() {
						order_service.init();
					});
		}, true);
		break;
	case 614:// 确认订单信息
		isResgiterDialogTip(function() {
			defineAddPage.addBackgroupPageLayout(defineAddPage.source.purchaseConfirm_order_msg,
					function() {
						order_confirm_service.init();
					});
		}, true);
		break;
	case 615:// 微信支付
		isResgiterDialogTip(function() {
			weChat.init();
		}, true);
		
		break;
	case 616:// 汇款识别码
		isResgiterDialogTip(function() {
			defineAddPage.addBackgroupPageLayout(defineAddPage.source.indentCode,
					function() {
						indent_code.init();
					});
		}, true);
		
		break;
	case 700:// 推广页面
		defineAddPage.addBackgroupPageLayout(defineAddPage.source.recommend,
				function() {
					recommend_resume_entry();
				});
		break;
	case 750:// 公司简介
	case 751:// 安排面试
	case 752:// 公司简介-预览
		company_interivew_invite_entry();
		break;
	case 820:// 周年庆
		anniversary_entry();
		break;
	case 821:// 分享链接
		loading_share_anniversary();
		break;
	case 822:
		// TODO 人才服务
		rencai_object.rencai_init();
		break;
	case 801:// 过渡页面
	case 802:// 过渡页面
	case 803:// 过渡页面
		defineAddPage.addBackgroupPageLayout(defineAddPage.source.emailAffirm,
				function() {
					if (pageCode == 801) {
						$(".transPage").show();
						$(".job_status_div").hide();
						$(".trans_info").html(
								"非常感谢您接受我们的面试邀请，随后公司的HR会与您电话联系确定具体的见面时间。");
					} else if (pageCode == 802) {
						$(".transPage").show();
						$(".job_status_div").hide();
						$(".trans_info").html("很遗憾听到这个消息，我们会将您的意见反馈给公司的HR的。");
					} else if (pageCode == 803) {
						$(".job_status_div").show();
						$(".transPage").hide();
					}
				});
		break;
	case 1000:// 合作机构
		// loading_brand_website_layout();
		break;
	case 2003:// 
		isResgiterDialogTip(function() {
			header_position_manage(function() {
				defineAddPage.addBackgroupPageLayout(
						defineAddPage.source.jobList, function() {
							job_list.init();
						});
			});
		}, true);
		break;
	case 2000:// 
		break;
	case 3000:// 砍价专场
		bargain_special.init();
		break;
	case 3001:// 随机专场
		randomSpecial();
		break;
	case 3002:// 随机专场
		august_activity.click_augustActivity();
		break;
	default:
		break;
	}
}
/**
 * 页面入口
 */
function locationCode(loadJs) {
	// 简历库从1-199 工作台 200-299 个人中心 300-349 联系人350-369 雇主品牌 370-399
	// 400-499是产品博客
	// 500-599是收到的简历
	// 600-699 是会员中心
	// 800-899 活动页面
	var locationPath = window.location.pathname;
	var locationHref = window.location.href;
	if (locationPath.indexOf("/message/more") != -1) {// 消息中心-全部消息
		setPageCommonData(306, true, true, true, 0, "所有消息 - 招聘狗");
	} else if (locationPath.indexOf("/message/colleague") != -1) {// 消息中心-设置
		setPageCommonData(308, true, true, true, 0, "同事消息 - 招聘狗");
	} else if (locationPath.indexOf("/message/job") != -1) {// 消息中心-设置
		setPageCommonData(309, true, true, true, 0, "求职者消息 - 招聘狗");
	} else if (locationPath.indexOf("/message/official") != -1) {// 消息中心-设置
		setPageCommonData(310, true, true, true, 0, "招聘狗官方消息 - 招聘狗");
	} else if (locationPath.indexOf("/message/reply") != -1) {// 消息中心-设置
		setPageCommonData(311, true, true, true, 0, "给我的回复 - 招聘狗");
	} else if (locationPath.indexOf("/account_set") != -1) {// 个人资料-设置
		setPageCommonData(312, true, true, true, 0, "帐号设置 - 招聘狗");
	} else if (locationPath.indexOf("/buy_list") != -1) {// 简历解锁记录
		setPageCommonData(313, true, true, true, 0, "简历解锁记录 - 招聘狗");
	} else if (locationPath.indexOf("/invoice/create") != -1) {// 未开发票
		setPageCommonData(314, true, true, true, 0, "未开发票 - 招聘狗");
	} else if (locationPath.indexOf("/invoice/list") != -1) {// 已开发票
		setPageCommonData(315, true, true, true, 0, "已开发票 - 招聘狗");
	} else if (locationPath.indexOf("/invoice/success_url") != -1) {// 支付成功
		setPageCommonData(316, true, true, true, 0, "支付成功 - 招聘狗");
	} else if (locationPath.indexOf("/invoice/detail") != -1) {// 发票详情
		setPageCommonData(317, true, true, true, 0, "发票详情 - 招聘狗");
	} else if (locationPath.indexOf("/invoice/entry") != -1) {// 申请发票
		setPageCommonData(318, true, true, true, 0, "申请发票 - 招聘狗");
	} else if (locationPath.indexOf("/message/set") != -1) {// 消息中心-设置
		setPageCommonData(305, true, true, true, 0, "消息提醒设置 - 招聘狗");
	} else if (locationPath.indexOf("/message") != -1) {// 消息中心
		setPageCommonData(301, true, true, true, 0, "消息中心 - 招聘狗");
	} else if (locationPath.indexOf("/user/statistics") != -1) {// 工作统计
		setPageCommonData(303, true, true, true, 0, "工作统计 - 招聘狗");
	} else if (locationPath.indexOf("/user") != -1) {// 个人中心主页-帐号设置
		setPageCommonData(300, true, true, true, 0, "帐号设置 - 招聘狗");
	} else if (locationPath.indexOf("/resume/detail") != -1) {// 简历库详情
		setPageCommonData(199, true, true, true, 0);
	} else if (locationPath.indexOf("/brand/networkHome") != -1) {// 合作机构
		setPageCommonData(1000, false, true, true, 0, "合作品牌 - 招聘狗");
	} else if (locationPath.indexOf("/brand") != -1) {// 雇主品牌
		setPageCommonData(370, false, true, true, 0, "雇主品牌 - 招聘狗");
	} else if (locationPath.indexOf("/contacts/create") != -1) {// 添加联系人
		setPageCommonData(353, false, false, true, 0, "创建联系人 - 招聘狗");
	} else if (locationPath.indexOf("/contacts/edit") != -1) {// 编辑联系人
		setPageCommonData(352, false, false, true, 0, "编辑联系人 - 招聘狗");
	} else if (locationPath.indexOf("/contacts/detail") != -1) {// 联系人详情
		setPageCommonData(351, false, false, true, 0, "联系人详情 - 招聘狗");
	} else if (locationPath.indexOf("/contacts") != -1) {// 联系人主页
		setPageCommonData(350, false, false, true, 0, "联系人 - 招聘狗");
	} else if (locationPath.indexOf("/workbench/search") != -1) {// 在线简历库搜索页面
		setPageCommonData(206, false, false, false, 2, "我的工作台 - 招聘狗");
	} else if (locationPath.indexOf("/myInbox/positionSearch") != -1) {// 我的收件箱
		setPageCommonData(221, false, false, false, 2, "我的收件箱 - 招聘狗");
	} else if (locationPath.indexOf("/myInbox") != -1) {// 我的收件箱
		setPageCommonData(220, true, false, true, 2, "我的收件箱 - 招聘狗");
	} else if (locationPath.indexOf("/recycle") != -1) {// 我的回收站
		setPageCommonData(230, true, false, true, 2, "我的回收站 - 招聘狗");
	} else if (locationPath.indexOf("/workbench") != -1) {// 我的工作台
		setPageCommonData(200, true, false, true, 2, "我的工作台 - 招聘狗");
	} else if (locationPath.indexOf("/bargainSpecial") != -1) {// 砍价
		setPageCommonData(3000, false, true, true, 0, "老铁，帮我砍招聘狗一刀呗");
	} else if (locationPath.indexOf("/randomSpecial") != -1) {// 随机专场
		setPageCommonData(3001, false, true, true, 0, "解锁付费简历拼手气，享狗粮随机减免");
	} else if (locationPath.indexOf("/augustActivity") != -1) {// 818活动
		setPageCommonData(3002, false, true, true, 0, "818活动");
	} else if (locationPath.indexOf("/receiver_resume/detail") != -1) {// 收到的简历
		if (isMobileOrPc()) {
			window.location.replace("mobile/receiver_resume/detail"
					+ locationHref.substr(locationHref.indexOf("?")));
			return;
		} else {
			setPageCommonData(599, true, false, true, 0);
		}
	} else if (locationPath.indexOf("/receiver_resume") != -1) {// 收到的简历
		if (isMobileOrPc()) {
			window.location.replace("mobile/receiver_resume"
					+ locationHref.substr(locationHref.indexOf("?")));
			return;
		} else {
			setPageCommonData(500, false, false, true, 0, "收到的简历 - 招聘狗");
		}
	} else if (locationPath.indexOf("/error") != -1) {// 404
		setPageCommonData(499, false, true, true, 0, "哎呦~您的页面找不到了呢 - 招聘狗");
	} else if (locationPath.indexOf("/protocol") != -1) {// 用户协议
		setPageCommonData(414, true, true, true, 5, "用户协议 - 招聘狗");
	} else if (locationPath.indexOf("/blog/search") != -1) {// 用户协议
		setPageCommonData(413, true, true, true, 5, "搜索动态 - 招聘狗");
	} else if (locationPath.indexOf("/resume/session/list") != -1) {// 招聘专场
		setPageCommonData(412, true, true, true, 5, "招聘专场与专题 - 招聘狗");
	} else if (locationPath.indexOf("/resume/session") != -1) {// 招聘专场
		setPageCommonData(411, false, true, true, 5, "招聘专场与专题 - 招聘狗");
	} else if (locationPath.indexOf("/blog/activity") != -1) {// 活动信息
		setPageCommonData(410, false, true, true, 5, "活动信息 - 招聘狗");
	} else if (locationPath.indexOf("/blog/dynamic") != -1) {// 官方动态与公告
		setPageCommonData(409, false, true, true, 5, "官方动态与公告 - 招聘狗");
	} else if (locationPath.indexOf("/about/business") != -1) {// 商务合作
		setPageCommonData(406, false, true, true, 5, "商务合作 - 招聘狗");
	} else if (locationPath.indexOf("/about") != -1) {// 关于我们
		setPageCommonData(408, false, true, true, 5, "关于我们 - 招聘狗");
	} else if (locationPath.indexOf("/blog/detail") != -1) {// 博客详情
		setPageCommonData(407, true, true, true, 5);
	} else if (locationPath.indexOf("/outterSupport") != -1) {// 加入我们
		setPageCommonData(405, false, true, true, 5, "加入我们 - 招聘狗");
	} else if (locationPath.indexOf("/blog/update") != -1) {// 更新公告
		setPageCommonData(404, true, true, true, 5, "更新公告 - 招聘狗");
	} else if (locationPath.indexOf("/contact_us") != -1) {// 联系我们
		setPageCommonData(403, false, true, true, 5, "联系我们 - 招聘狗");
	} else if (locationPath.indexOf("/feedback") != -1) {// 问题反馈
		setPageCommonData(402, false, true, true, 5, "问题反馈 - 招聘狗");
	} else if (locationPath.indexOf("/blog/help") != -1) {// 帮助中心
		setPageCommonData(401, true, true, true, 5, "帮助中心 - 招聘狗");
	}
	//新购买服务
	else if (locationPath.indexOf("/vip/resume_limit") != -1) {// 免费简历额度
		setPageCommonData(415, true, true, true, 8, "免费简历 - 简历额度");
	} else if (locationPath.indexOf("/vip/tointerview") != -1) {// 包面试
		setPageCommonData(416, true, true, true, 8, "包面试 - 包面试");
	} else if (locationPath.indexOf("/vip/shopCar") != -1) {// 购物车订单中有狗粮
		setPageCommonData(611, true, true, true, 8, "购物车 - 购买服务");
	} else if (locationPath.indexOf("/vip/successful_trade") != -1) {// 未开发票详情
		setPageCommonData(612, true, true, true, 8, "订单详情 - 全部订单");
	} else if (locationPath.indexOf("/vip/all_order") != -1) {// 全部订单
		setPageCommonData(613, true, true, true, 8, "全部订单 - 招聘狗");
	} else if (locationPath.indexOf("/vip/confirm_order_msg") != -1) {// 确认订单信息
		setPageCommonData(614, true, true, true, 8, "确认订单信息 - 招聘狗");
	} else if (locationPath.indexOf("/vip/wechat_pay") != -1) {// 微信支付页面
		setPageCommonData(615, true, true, true, 8, "微信支付 - 微信支付");
	} else if (locationPath.indexOf("/vip/indentCode") != -1) {// 微信支付页面
		setPageCommonData(616, true, true, true, 8, "汇款识别码 - 招聘狗");
	} else if (locationPath.indexOf("/vip/commodity") != -1) {// 支付成功
		setPageCommonData(610, true, true, true, 8, "商品服务 - 招聘狗");
	} else if (locationPath.indexOf("/blog") != -1) {// 产品博客
		setPageCommonData(400, false, true, true, 5, "狗狗动态 - 招聘狗");
	} else if (locationPath.indexOf("/bill/detail") != -1) {// 支付成功
		setPageCommonData(603, true, true, true, 0, "充值记录 - 招聘狗");
	} else if (locationPath.indexOf("/vip/success_url") != -1) {// 支付成功
		setPageCommonData(602, true, true, true, 8, "支付成功 - 招聘狗");
	} else if (locationPath.indexOf("/vip") != -1) {// 会员介绍
		setPageCommonData(600, false, true, true, 8, "购买服务 - 招聘狗");
	} else if (locationPath.indexOf("/recommend") != -1) {// 推广页面
		setPageCommonData(700, false, true, true, 0, "招聘狗 - 招聘路上走，还得有只狗");
	} else if (locationPath.indexOf("/interviewInvite") != -1
			|| locationPath.indexOf("/introduction") != -1) {// 公司简介
		setPageCommonData(750, false, false, false, 0);
	} else if (locationPath.indexOf("/invited") != -1) {// 安排面试
		setPageCommonData(751, false, false, false, 0);
	} else if (locationPath.indexOf("/p/introduction") != -1) {// 公司简介预览
		setPageCommonData(752, false, false, false, 0);
	} else if (locationPath.indexOf("/agree_interview_feedback") != -1) {// 求职者同意面试
		setPageCommonData(801, false, false, false, 0, "接受邀请成功 - 招聘狗");
	} else if (locationPath.indexOf("/refuse_interview_feedback") != -1) {// 求职者拒绝面试
		setPageCommonData(802, false, false, false, 0, "拒绝面试邀请 - 招聘狗");
	} else if (locationPath.indexOf("/job_status_settings_feedback") != -1) {// 求职者不想找工作的设置
		setPageCommonData(803, false, false, false, 0, "简历管理 - 招聘狗");
	} else if (locationPath.indexOf("/rencai") != -1) {// 付费简历
		setPageCommonData(822, false, true, true, 6, "人才服务 - 招聘狗");
	} else if (/demand\/\d{0,11}.html$/.test(locationPath)) {// 需求详情
		setPageCommonData(796, true, true, true, 7, null);
	} else if (locationPath.indexOf("/demand/edit") != -1) {// 需求详情
		setPageCommonData(799, true, true, true, 7, "创建新需求 - 招聘狗");
	} else if (locationPath.indexOf("/demand/manage") != -1) {// 需求详情
		setPageCommonData(798, true, true, true, 7, "管理需求 - 招聘狗");
	} else if (locationPath.indexOf("/demand") != -1) {// 付费简历
		setPageCommonData(790, true, true, true, 7, "需求互助 - 招聘狗");
	} else if (locationPath.indexOf("/manage/detail") != -1) {// 管理详情
		setPageCommonData(797, true, true, true, 7, "管理详情 - 招聘狗");
	} else if (locationPath.indexOf("/resume/free") != -1) {// 免费简历库
		setPageCommonData(4, false, true, true, 3, "免费简历库 - 招聘狗");
	} else if (locationPath.indexOf("/resume/charge") != -1) {// 中高端简历库
		setPageCommonData(3, false, true, true, 3, "中高端简历库 - 招聘狗");
	} else if (locationPath.indexOf("/resume") != -1) {// 全站简历库
		setPageCommonData(2, false, true, true, 3, "简历库 - 招聘狗");
	} else if (locationPath.indexOf("/zhaopingou_client") != -1
			|| locationPath == "/" || locationPath.length == 0) {// 简历库
		setPageCommonData(1, false, true, true, 1, "招聘狗 - 招聘路上走，还得有只狗");
	} else {
		setPageCommonData(499, false, true, true, 0, "哎呦~您的页面找不到了呢 - 招聘狗");
	}
	if (loadJs) {
		commonPageData.isLoadPage = false;
		locationJsCode();
	} else {
		load_site_nav();
		addfooter();
		$("body,html").animate({
			scrollTop : 0
		}, 30);
	}
};
function setPageCommonData(pageCode, isNeedHeader, isNeedFooter,
		isNeedHeaderTop, headerId, title) {
	commonPageData.pageCode = pageCode;
	commonPageData.isNeedHeader = isNeedHeader;
	commonPageData.isNeedFooter = isNeedFooter;
	commonPageData.isNeedHeaderTop = isNeedHeaderTop;
	commonPageData.headerId = headerId;// headerId
	// 1在线简历库，2工作台，3雇主品牌，4联系人，5是狗狗动态 ， 6存量简历库 8购买服务
	if (title == null) {

	} else if (typeof title != "undefined") {
		document.title = title;
	} else {
		document.title = "招聘狗 - 招聘路上走，还得有只狗";
	}

}
locationCode(true);

function openLocationUrl(urlState, parameter, isNotLoadJs, isReplace,
		isInterior) {
	$(".date-picker-wrapper").hide();
	if (commonPageData.pageCode == 370) {
		companyMouldShowBox(function() {
			openLocationUrlSrc(urlState, parameter, isNotLoadJs, isReplace,
					isInterior);
		});
	} else {
		window.onbeforeunload = null;
		openLocationUrlSrc(urlState, parameter, isNotLoadJs, isReplace,
				isInterior);
	}

}
function openLocationUrlSrc(urlState, parameter, isNotLoadJs, isReplace,
		isInterior) {
	var url = null;
	if (isNaN(urlState)) {
		url = urlState;
	} else {
		if (typeof parameter != undefined && parameter != null
				&& parameter != "") {
			url = getAddressUrlPath(urlState) + "?" + parameter;
		} else {
			url = getAddressUrlPath(urlState);
		}
		if (urlState == 1 || urlState >= 2000) {
			window.location.href = hrefJumpPage(url);
			return;
		}
		commonPageData.pageCode = urlState;
	}
	var title = "招聘狗 - 招聘路上走，还得有只狗";
	var state = {
		title : title,
		url : url,
		otherkey : null
	};
	if (isReplace) {
		if ((!isInterior && commentData.is_open_page(urlState))
				|| !history.pushState) {
			window.location.replace(hrefJumpPage(url));
			return;
		} else {
			history.replaceState(state, title, url);
			if (url.indexOf("/") != 0) {
				url = "/" + url;
			}
			if (typeof _hmt != "undefined") {
				_hmt.push([ '_trackPageview', url ]);
			}
			isInterior && isInterior();
		}
	} else {
		if ((!isInterior && commentData.is_open_page(urlState))
				|| !history.pushState) {
			window.location.href = hrefJumpPage(url);
			return;
		} else {
			history.pushState(state, title, url);
			if (url.indexOf("/") != 0) {
				url = "/" + url;
			}
			if (typeof _hmt != "undefined") {
				_hmt.push([ '_trackPageview', url ]);
			}
			isInterior && isInterior();
		}
	}

	if (isInterior) {
		return;
	}
	if (typeof removeBrandJs == "function") {
		removeBrandJs && removeBrandJs();
	}
	commonPageData.isLoadPage = false;
	if (!isNotLoadJs) {
		locationCode(true);
	} else {
		locationCode(false);
	}
}
function getAddressUrlPath(state) {
	var path = "";
	switch (state) {
	case 1:
		path = "/";
		break;
	case 2:
		path = "resume";
		break;
	case 3:
		path = "resume/charge";
		break;
	case 4:
		path = "resume/free";
		break;
	case 790:
		path = "demand";
		break;
	case 798:
		path = "demand/manage";
		break;
	case 797:
		path = "manage/detail";
		break;
	case 799:
		path = "demand/edit";
		break;
	case 199:
		path = "resume/detail";
		break;
	case 206:
		path = "workbench/search";
		break;	
	case 200:
		path = "workbench";
		break;
	case 220:
		path = "myInbox";
		break;
	case 221:
		path = "myInbox/positionSearch";
		break;
	case 230:
		path = "recycle";
		break;
	case 300:
		path = "user";
		break;
	case 301:
		path = "message";
		break;
	case 303:
		path = "user/statistics";
		break;
	case 304:
		path = "user/accounts";
		break;
	case 305:
		path = "message/set";
		break;
	case 306:
		path = "message/more";
		break;
	case 313:// 简历解锁记录
		path = "buy_list";
		break;
	case 314:// 未开发票
		path = "invoice/create";
		break;
	case 315:// 已开发票
		path = "invoice/list";
		break;
	case 316:// 支付成功
		path = "invoice/success_url";
		break;
	case 317:// 发票详情 - 招聘狗
		path = "invoice/detail";
		break;
	case 318:// 申请发票 - 招聘狗
		path = "invoice/entry";
		break;
	case 308:
		path = "message/colleague";
		break;
	case 309:
		path = "message/job";
		break;
	case 310:
		path = "message/official";
		break;
	case 311:
		path = "message/reply";
		break;
	case 350:
		path = "contacts";
		break;
	case 351:
		path = "contacts/detail";
		break;
	case 352:
		path = "contacts/edit";
		break;
	case 353:
		path = "contacts/create";
		break;
	case 370:
		path = "brand";
		break;
	case 400:
		path = "blog";
		break;
	case 401:
		path = "blog/help";
		break;
	case 402:
		path = "feedback";
		break;
	case 403:
		path = "contact";
		break;
	case 404:
		path = "blog/update";
		break;
	case 405:
		path = "outterSupport";
		break;
	case 406:
		path = "about/business";
		break;
	case 407:
		path = "blog/detail";
		break;
	case 408:
		path = "about";
		break;
	case 409:
		path = "blog/dynamic";
		break;
	case 410:
		path = "blog/activity";
		break;
	case 411:
		path = "resume/session";
		break;
	case 412:
		path = "resume/session/list";
		break;
	case 413:
		path = "blog/search";
		break;
	case 414:
		path = "protocol";
		break;
	//新购买服务
	case 415:
		path = "vip/resume_limit";
		break;
	case 416:
		path = "vip/tointerview";
		break;
	case 610:
		path = "vip/commodity";
		break;
	case 611:
		path = "vip/shopCar";
		break;
	case 612:
		path = "vip/successful_trade";
		break;
	case 613:
		path = "vip/all_order";
		break;
	case 614:
		path = "vip/confirm_order_msg";
		break;
	case 615:
		path = "vip/wechat_pay";
		break;
	case 616:
		path = "vip/indentCode";
		break;
	case 499:
		path = "error";
		break;
	case 500:
		path = "receiver_resume";
		break;
	case 599:
		path = "receiver_resume/detail";
		break;
	case 603:
		path = "bill/detail";
		break;
	case 602:
		path = "vip/success_url";
		break;
	case 600:
		path = "vip";
		break;
	case 700:
		path = "recommend";
		break;
	case 820:
		path = "anniversary/lottery";
		break;
	case 821:
		path = "anniversary/share";
		break;
	case 822:
		path = "rencai";
		break;
	case 2003:
		path = "jobList";
		break;
	case 2000:
		path = "zpRelease";
		break;
	case 3000:
		path = "bargainSpecial";
		break;
	case 3001:
		path = "randomSpecial";
		break;
	case 3002:
		path = "augustActivity";
		break;
	default:
		path = "/";
		break;
	}
	return path;

}

/**
 * 判断是手机还是电脑访问的
 * 
 * @param callback
 */
function isMobileOrPc() {
	var isAndroid = navigator.userAgent.match(/android/ig);
	var isIos = navigator.userAgent.match(/iphone|ipod/ig);
	if (isAndroid || isIos) {
		return true;
	} else {
		return false;
	}
}
