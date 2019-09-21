package com.dev.hotelBiling;

public interface HotelInterface {

	public HotelBill delete(int itemCode);
	public HotelBill add(HotelBill h);
	public String update(String foodName);
	public double priceTotal(int foodItem, int count);
}
