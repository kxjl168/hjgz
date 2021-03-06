package com.kxjl.web.system;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ConcurrentHashMap;

import org.json.JSONObject;


import com.kxjl.web.system.model.MenuInfo;

/**
 * 简单缓存系统
 * 
 * @param map
 * @return
 * @author zj
 * @date 2018-1-6
 */
public class Kdata {
	
	
	/**
	 * 是否启用/可见
	 * 
	 * @param map
	 * @return
	 * @author zj
	 * @date 2017-12-13
	 */
	public enum Enable {

		NIL("-1",""),Enable("1","可见"),	Disable("0","不可见");

		public String value = "";
		public String desc = "";

		private Enable(String val,String desc) {
			this.value = val;
			this.desc=desc;
		}

		@Override
		public String toString() {
			// TODO Auto-generated method stub
			JSONObject j = new JSONObject();
			try {
				j.put("value", value);
				j.put("desc", desc);
		

			} catch (Exception e) {
				// TODO: handle exception
			}

			return j.toString();
		}
		
		public  static Enable parse(String val)
		{
			for (Enable item : Enable.values()) {
				if(item.value.equals(val))
					return item;
			}
			return Enable.NIL;
		}

	}
	
	
	/**
	 * 缓存类型
	 * 
	 * @param map
	 * @return
	 * @author zj
	 * @date 2018-1-6
	 */
	public enum DataType {

		NIL("", ""), Common("0","common"), Blog("-1", "blog"), Replay("0", "Replay"), Menu("1",
				"Menu"),BlackIPList("2","BlackipList");

		private String value = "";
		private String desc = "";
		private Integer num = 0;

		private DataType(String val, String desc) {
			this.value = val;
			this.desc = desc;
			this.num=0;
		}

		@Override
		public String toString() {
			// TODO Auto-generated method stub
			JSONObject j = new JSONObject();
			try {
				j.put("value", value);
				j.put("desc", desc);
				j.put("num", num);

			} catch (Exception e) {
				// TODO: handle exception
			}

			return j.toString();
		}

		public static DataType parse(String val) {
			for (DataType item : DataType.values()) {
				if (item.value.equals(val))
					return item;
			}
			return DataType.NIL;
		}

		public String getValue() {
			return value;
		}

		public void setValue(String value) {
			this.value = value;
		}

		public String getDesc() {
			return desc;
		}

		public void setDesc(String desc) {
			this.desc = desc;
		}

		public Integer getNum() {
			return num;
		}

		public void setNum(Integer num) {
			this.num = num;
		}

	}

	
	
	
	// 其他通用缓存
		private static ConcurrentHashMap<String, Object> savedCommonList = new ConcurrentHashMap<String,Object>();
	
	
	private static ConcurrentHashMap<String, List<MenuInfo>> savedMenuList = new ConcurrentHashMap<String, List<MenuInfo>>();

	public int GetNumOfType(DataType type) {
		int num = 0;
	
		 if (type == DataType.Menu)
			num = savedMenuList.size();
		return num;
	}

	private Kdata() {

	}

	private static Kdata instance = null;

	public synchronized static Kdata getInstance() {
		if (instance == null)
			instance = new Kdata();

		return instance;

	}
	
	public Object getCommonList(String key) {
		return savedCommonList.get(key);
	}

	public void SavedCommonList(String key, Object list) {
		savedCommonList.put(key, list);// = savedBlogList;
	}

	public void cleanrCommonList(String key) {
		if (key != null && !key.equals("")) {
			if (savedCommonList.containsKey(key))
				savedCommonList.remove(key);
		} else
			savedCommonList.clear();
	}
	

	

	public List<MenuInfo> getMenuList(String key) {
		return savedMenuList.get(key);
	}

	public void SavedMenuList(String key, List<MenuInfo> list) {
		savedMenuList.put(key, list);// = savedMenuList;
	}

	public void cleanrMenuInfoList(String key) {
		if (key != null && !key.equals("")) {
			if (savedMenuList.containsKey(key))
				savedMenuList.remove(key);
		} else
			savedMenuList.clear();
	}

}
