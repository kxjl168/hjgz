package com.kxjl.web.autodata.model;

import java.util.Date;

import jdk.nashorn.internal.ir.TryNode;

public class ItemInfo {
    private String id;

    private String title;

    private String type;

    private String tags;

    private Date createDate;

    private Date updateDate;

    private String imei;
    
    //query
    private String type_first;
    private String type_second;
    private String wendu;
    
    private String prenum;
    private String endnum;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id == null ? null : id.trim();
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title == null ? null : title.trim();
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type == null ? null : type.trim();
    }

    public String getTags() {
        return tags;
    }

    public void setTags(String tags) {
        this.tags = tags == null ? null : tags.trim();
    }

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }

    public Date getUpdateDate() {
        return updateDate;
    }

    public void setUpdateDate(Date updateDate) {
        this.updateDate = updateDate;
    }

    public String getImei() {
        return imei;
    }

    public void setImei(String imei) {
        this.imei = imei == null ? null : imei.trim();
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

	public String getWendu() {
		return wendu;
	}

	public void setWendu(String wendu) {
		this.wendu = wendu;
		if(wendu!=null)
		{
			String[] ws=wendu.split("\\.");
			try {
				prenum=ws[0];
				endnum=ws[1];
			} catch (Exception e) {
				// TODO: handle exception
			}
			
		}
	}

	public String getPrenum() {
		return prenum;
	}

	public void setPrenum(String prenum) {
		this.prenum = prenum;
	}

	public String getEndnum() {
		return endnum;
	}

	public void setEndnum(String endnum) {
		this.endnum = endnum;
	}
}