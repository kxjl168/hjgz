package com.kxjl.web.autodata.dao;

import java.util.List;

import com.kxjl.web.autodata.model.ItemInfo;

public interface ItemInfoMapper {
    int deleteByPrimaryKey(String id);

    int insert(ItemInfo record);

    int insertSelective(ItemInfo record);

    ItemInfo selectByPrimaryKey(String id);

    int updateByPrimaryKeySelective(ItemInfo record);

    int updateByPrimaryKey(ItemInfo record);
    
    /**
     * 获取当前最新状态
     * 
     * @param map
     * @return
     * @author zj
     * @date 2018-6-23
     */
    List<ItemInfo> selectNowList(ItemInfo query);
}