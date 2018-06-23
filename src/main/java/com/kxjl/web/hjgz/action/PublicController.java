package com.kxjl.web.hjgz.action;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.ibatis.annotations.Param;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import org.springframework.web.servlet.ModelAndView;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.kxjl.tool.common.Constant;
import com.kxjl.tool.utils.JEscape;
import com.kxjl.tool.utils.JsonUtil;

import com.kxjl.web.autodata.dao.ItemInfoMapper;
import com.kxjl.web.autodata.model.ItemInfo;
import com.kxjl.web.system.action.base.BaseController;
import com.kxjl.web.system.model.DictInfo;
import com.kxjl.web.system.model.SysUserBean;
import com.kxjl.web.system.service.SysService;

import sun.util.logging.resources.logging;

@Controller
@RequestMapping(value = "/")
public class PublicController extends BaseController {

	@Autowired
	SysService sysService;

	@Autowired
	ItemInfoMapper itemDao;

	@RequestMapping(value = "/public/index/")
	public ModelAndView index(HttpServletRequest request) {

		ModelAndView view = getSysData();
		view.setViewName("/public/portal/main");

		return view;
	}

	@RequestMapping(value = "/public/detail/")
	public ModelAndView detail(String id, HttpServletRequest request) {

		ModelAndView view = getSysData();
		ItemInfo item = itemDao.selectByPrimaryKey(id);

		view.addObject("item", item);

		view.setViewName("/public/portal/detail");

		return view;
	}
	
	@RequestMapping(value = "/public/todo/")
	public ModelAndView todo(String type, HttpServletRequest request) {

		ModelAndView view = getSysData();
		
		view.addObject("index", type);

		view.setViewName("/public/portal/todo");

		return view;
	}

	@RequestMapping(value = "/public/stastic/")
	public ModelAndView stastic(HttpServletRequest request) {

		ModelAndView view = getSysData();
		view.setViewName("/public/portal/stastic");

		return view;
	}

	@RequestMapping(value = "/public/list/")
	public ModelAndView list(HttpServletRequest request) {

		ModelAndView view = getSysData();
		view.setViewName("/public/portal/list");

		return view;
	}

	
	

	@RequestMapping(value = "/public/nowdata")
	public void nowdata(String qType, HttpServletRequest request,HttpServletResponse response) {
		ModelAndView view = getSysData();

		String type1 = qType.substring(0, qType.lastIndexOf("_"));
		String type2 = qType.substring(qType.lastIndexOf("_") + 1,
				qType.length());
		
		ItemInfo q=new ItemInfo();
		q.setType_first(type1);
		q.setType_second(type2);
		List<ItemInfo> items = itemDao.selectNowList(q);

		Gson gs=new Gson();
		String rst=gs.toJson(items);
		
		JSONObject jsonOut=new JSONObject();
		jsonOut.put("ResponseCode", "200");
		jsonOut.put("ResponseMsg", "");
		jsonOut.put("rows", new JSONArray(rst));
		
		JsonUtil.responseOutWithJson(response, jsonOut.toString());
	}
	
	@RequestMapping(value = "/public/now/")
	public ModelAndView now(String qType, HttpServletRequest request) {
		ModelAndView view = getSysData();

		
		view.setViewName("/public/portal/now");

		return view;
	}

	private ModelAndView getSysData() {
		ModelAndView view = new ModelAndView();

		/*
		 * Map jsInfo = sysService.getSysInfo();
		 * 
		 * view.addObject("httppath", jsInfo.get("httppath"));
		 * view.addObject("head", jsInfo.get("fileinfo"));
		 * view.addObject("sign", jsInfo.get("sign"));
		 * view.addObject("visitdata", jsInfo.get("visitData"));
		 */
		return view;
	}

	@RequestMapping(value = "/page/set/")
	public ModelAndView set() {
		ModelAndView view = getSysData();
		view.setViewName("/page/set/main");

		return view;
	}

}
