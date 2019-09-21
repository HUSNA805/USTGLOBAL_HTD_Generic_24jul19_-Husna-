package com.dev.hotelBiling;

public class HotelBill {

	private int itemCode;
	private String foodName;
	static private double price;
	
	public int getItemCode() {
		return itemCode;
	}
	public void setItemCode(int itemCode) {
		this.itemCode = itemCode;
	}
	public String getFoodName() {
		return foodName;
	}
	public void setFoodName(String foodName) {
		this.foodName = foodName;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	@Override
	public String toString() {
		return "HotelBill [itemCode=" + itemCode + ", foodName=" + foodName + ", price=" + price + "]";
	}
	
}
