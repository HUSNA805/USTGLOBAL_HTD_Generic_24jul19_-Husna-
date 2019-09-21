package com.dev.hotelBiling;

import java.util.HashMap;

public class HotelIntImp implements HotelInterface  {

	HashMap<String, HotelBill> hm = new HashMap<String, HotelBill>();
	
	@Override
	public HotelBill delete(int itemCode) {
		HotelBill h = hm.remove(itemCode);
		return h;
	}

	@Override
	public HotelBill add(HotelBill hb) {
		hm.put("11", hb);
		return hb;
	}

	@Override
	public String update(String foodName) {
		return foodName;
	}

	@Override
	public double priceTotal(int foodItem, int count) {
		for(int i=foodItem; i<=count; i++) {
			
		}
		return 0;
	}

}
