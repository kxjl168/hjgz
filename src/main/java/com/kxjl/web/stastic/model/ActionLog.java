package com.kxjl.web.stastic.model;

import java.util.List;


import com.kxjl.web.system.model.base.BaseModel;

public class ActionLog extends BaseModel {

	
	
	/**
	 * 统计分类一
	 * 
	 * @param map
	 * @return
	 * @author zj
	 * @date 2017-12-13
	 */
	public enum StasticTypeOne {
		NIL("",""),
		HomePage("homepage","首页"),
		GSearch("gsearch","G搜索"),
		DetailPage("detailpag","详情页");
		

		private String value = "";
		private String desc = "";

		private StasticTypeOne(String val,String desc) {
			this.value = val;
			this.desc=desc;
		}

		@Override
		public String toString() {
			// TODO Auto-generated method stub
			return value.toString();
		}
		
		public  static StasticTypeOne parse(String val)
		{
			for (StasticTypeOne item : StasticTypeOne.values()) {
				if(item.value.equals(val))
					return item;
			}
			return StasticTypeOne.NIL;
		}

		public String getDesc() {
			return desc;
		}

		public void setDesc(String desc) {
			this.desc = desc;
		}

	}
	
	
	private String id;
	
	private String userid;// varchar(30) comment 'user表id', ip
	private String city;//地市
	private String action_date;// varchar(20) comment '操作时间 2016-01-01
								// 22:11:21',
	private String type_first;// varchar(20) comment '操作大类； 办事指南/应用服务',
	private String type_second;// varchar(20) comment '具体的项ID,'

	private String item_id;
	
	private Double total_click;
	private Double total_uv;
	
	//query 
	private String time1;
	private String time2;
	private String dateFormat;
	
	
	private Double lixian;
	private Double yujing;
	private Double gaojing;
	private Double total;
	private String table;
	private String wendu;
	
	
	//查询字段
	private String type_name;
	//查询结束时间
	private String action_date_end;// varchar(20) comment '操作时间 2016-01-01
	
	private String itemname;

	public String getUserid() {
		return userid;
	}

	public void setUserid(String userid) {
		this.userid = userid;
		this.id=this.userid+"_"+this.action_date;
	}

	public String getAction_date() {
		return action_date;
	}

	public void setAction_date(String action_date) {
		this.action_date = action_date;
		this.id=this.userid+"_"+this.action_date;
	}

	public String getType_first() {
		return type_first;
	}

	public void setType_first(String type_first) {
		this.type_first = type_first;
	}

	public String getType_second() {
		return type_second;
	}

	public void setType_second(String type_second) {
		this.type_second = type_second;
	}

	public Double getTotal_click() {
		return total_click;
	}

	public void setTotal_click(Double total_click) {
		this.total_click = total_click;
	}

	public Double getTotal_uv() {
		return total_uv;
	}

	public void setTotal_uv(Double total_uv) {
		this.total_uv = total_uv;
	}

	public String getType_name() {
		return type_name;
	}

	public void setType_name(String type_name) {
		this.type_name = type_name;
	}

	public String getAction_date_end() {
		return action_date_end;
	}

	public void setAction_date_end(String action_date_end) {
		this.action_date_end = action_date_end;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getTime1() {
		return time1;
	}

	public void setTime1(String time1) {
		this.time1 = time1;
	}

	public String getTime2() {
		return time2;
	}

	public void setTime2(String time2) {
		this.time2 = time2;
	}

	public String getDateFormat() {
		return dateFormat;
	}

	public void setDateFormat(String dateFormat) {
		this.dateFormat = dateFormat;
	}





	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getItem_id() {
		return item_id;
	}

	public void setItem_id(String item_id) {
		this.item_id = item_id;
	}

	public String getItemname() {
		return itemname;
	}

	public void setItemname(String itemname) {
		this.itemname = itemname;
	}

	public Double getLixian() {
		return lixian;
	}

	public void setLixian(Double lixian) {
		this.lixian = lixian;
	}

	public Double getYujing() {
		return yujing;
	}

	public void setYujing(Double yujing) {
		this.yujing = yujing;
	}

	public Double getGaojing() {
		return gaojing;
	}

	public void setGaojing(Double gaojing) {
		this.gaojing = gaojing;
	}

	public Double getTotal() {
		return total;
	}

	public void setTotal(Double total) {
		this.total = total;
	}

	public String getTable() {
		return table;
	}

	public void setTable(String table) {
		this.table = table;
	}

	public String getWendu() {
		return wendu;
	}

	public void setWendu(String wendu) {
		this.wendu = wendu;
	}

	
}
