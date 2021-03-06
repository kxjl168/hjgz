package com.kxjl.web.system.action;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;
import com.kxjl.tool.common.Constant;
import com.kxjl.tool.utils.JsonUtil;

import com.kxjl.web.privilege.model.Role;
import com.kxjl.web.privilege.service.PrivilegeService;
import com.kxjl.web.system.Kdata;
import com.kxjl.web.system.action.base.BaseController;
import com.kxjl.web.system.model.MenuGroup;
import com.kxjl.web.system.model.MenuInfo;
import com.kxjl.web.system.model.SysUserBean;
import com.kxjl.web.system.model.SysUserBean.UserType;
import com.kxjl.web.system.service.MenuInfoService;

/**
 * 菜单 controller
 * 
 * @author kangyongji
 * 
 */
@Controller
@RequestMapping(value = "/menu")
public class MenuInfoController extends BaseController {

	@Autowired
	private MenuInfoService menuService;

	@Autowired
	PrivilegeService privilegeService;

	// 日志记录对象
	private Logger logger = Logger.getLogger(MenuInfoController.class);

	@RequestMapping(value = "/getRootMenus")
	public void getRootMenus(HttpServletRequest request,
			HttpServletResponse response, HttpSession session) {

		JSONObject jobj = new JSONObject();
	//	logger.info("sid:"+ session.getId());
		SysUserBean user = (SysUserBean) session
				.getAttribute(Constant.SESSION_USER);

		/*
		 * if (user == null) { try {
		 * request.getRequestDispatcher("/login").forward(request, response); }
		 * catch (Exception e) { // TODO: handle exception }
		 * 
		 * return; }
		 */

		if (user == null) {
			// 设置普通用户模式
			user = new SysUserBean();
			user.setUtype(UserType.UnLoginUser);
			user.setUserid(request.getRequestedSessionId());
			session.setAttribute(Constant.SESSION_USER, user);
		}

		String key = user.getUtype().toString();
		List<MenuInfo> rst = Kdata.getInstance().getMenuList(key);

		if (rst == null || rst.size() == 0) {
			rst = menuService.updateUserMenus(user);
			Kdata.getInstance().SavedMenuList(key, rst);// list)
		} else {
			if (user.getMenus() == null || user.getMenus().size() == 0) {
				user.setMenus(rst);
			}
		}

		Gson gs = new Gson();
		String jsStr = gs.toJson(rst);

		try {
			jobj = new JSONObject();
			jobj.put("utype", user.getUtype().toString());
			jobj.put("menus", jsStr);

		} catch (Exception e) {
			// TODO: handle exception
		}

		JsonUtil.responseOutWithJson(response, jobj.toString());

	}

	//
	// @RequestMapping(value="/getChildMenus")
	// public String getMenusByParentId(String pid,HttpServletRequest request,
	// HttpServletResponse response){
	// List<MenuInfo> menus = menuService.queryMenusByParent(pid);
	// logger.info("获得子菜单："+menus);
	//
	// request.setAttribute("menus", menus);
	//
	// return "/home/leftTree";
	// }

	@RequestMapping(value = "/getChildMenus")
	public @ResponseBody
	List<MenuGroup> getMenusByParentId(String pid, HttpServletRequest request,
			HttpServletResponse response, HttpSession session) {

		List<MenuInfo> menus = menuService.queryMenusByParent(pid);
		if (pid.equals("machineManager")) {
			for (MenuInfo menu : menus) {
				if (menu.getMenuOrderid().equals("3")) {
					menu.setMenuName("虚拟机内外网映射");
				}
			}
		}
		logger.info("获得子菜单：" + menus);

		SysUserBean user = (SysUserBean) session
				.getAttribute(Constant.SESSION_USER);

		List<MenuInfo> rst = new ArrayList<MenuInfo>();
		List<Role> roles = privilegeService.getManagerRoleList(user);

		// 过滤权限
		if (roles != null) {

			for (int i = 0; i < roles.size(); i++) {
				if (roles.get(i).getRole_en().equals("root")) {
					rst = menus;
					break;
				}
			}

			// 普通权限
			if (rst.size() == 0) {

				List<MenuInfo> menuList = privilegeService
						.getManagerMenusList(user);

				if (menuList != null) {
					for (int i = 0; i < menus.size(); i++) {
						for (int j = 0; j < menuList.size(); j++) {
							if (menuList.get(j).getMenuId()
									.equals(menus.get(i).getMenuId()))
								rst.add(menus.get(i));
						}

					}
				}
			}
		}

		// 分组
		List<MenuGroup> groups = new ArrayList<MenuGroup>();

		for (int i = 0; i < rst.size(); i++) {

			MenuInfo menu = rst.get(i);

			MenuGroup g = getItemFromGroups(groups, menu.getMenuGroup());
			g.getMenus().add(menu);

			setItemFromGroups(groups, g);
		}

		// request.setAttribute("menus", menus);

		return groups;
	}

	/**
	 * 检查并获取菜单分组
	 * 
	 * @param groups
	 * @param groupName
	 * @return
	 * @date 2016-10-17
	 * @author zj
	 */
	private MenuGroup getItemFromGroups(List<MenuGroup> groups, String groupName) {

		if (groupName == null)
			groupName = "";
		MenuGroup group = new MenuGroup();
		if (groups != null)
			for (int i = 0; i < groups.size(); i++) {
				if (groups.get(i).getGroupName().equals(groupName))
					return groups.get(i);
			}

		group.setGroupName(groupName);

		return group;
	}

	/**
	 * 更新菜单分组
	 * 
	 * @param groups
	 * @param group_new
	 * @date 2016-10-17
	 * @author zj
	 */
	private void setItemFromGroups(List<MenuGroup> groups, MenuGroup group_new) {

		boolean isfind = false;

		if (group_new.getGroupName() == null)
			group_new.setGroupName("");

		if (groups != null)
			for (int i = 0; i < groups.size(); i++) {
				if (groups.get(i).getGroupName()
						.equals(group_new.getGroupName())) {
					groups.get(i).setMenus(group_new.getMenus());
					isfind = true;
				}

			}

		if (!isfind)
			groups.add(group_new);

	}

}
