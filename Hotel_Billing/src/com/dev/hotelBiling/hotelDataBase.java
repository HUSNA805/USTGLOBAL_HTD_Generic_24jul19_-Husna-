package com.dev.hotelBiling;
import java.util.HashMap;
import java.util.Scanner;

public class hotelDataBase extends HotelIntImp {

	static HashMap<String, HotelBill> hm = new HashMap<String, HotelBill>();

	static HotelIntImp hii = new HotelIntImp();
	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		System.out.println("*********MENU************");
		System.out.println("1.Food Item List\n 2.Take Order\n 3.Operate on Food Items\n 4.Total Bill of the Day\n 5.Exit");
		int menuInput = sc.nextInt();

		switch(menuInput) {
		case 1: System.out.println("*******Food Item List*******");
		HotelBill hb = new HotelBill();
		hb.setItemCode(1);
		hb.setFoodName("Idle");
		hb.setPrice(20);
		hm.put("1", hb);

		HotelBill hb1 = new HotelBill();
		hb1.setItemCode(2);
		hb1.setFoodName("Idle");
		hb1.setPrice(20);
		hm.put("2", hb1);

		HotelBill hb2 = new HotelBill();
		hb2.setItemCode(3);
		hb2.setFoodName("Dosa");
		hb2.setPrice(30);
		hm.put("3", hb2);

		HotelBill hb3 = new HotelBill();
		hb3.setItemCode(4);
		hb3.setFoodName("Masala Dosa");
		hb3.setPrice(25);
		hm.put("4", hb3);

		HotelBill hb4 = new HotelBill();
		hb4.setItemCode(5);
		hb4.setFoodName("Pulav");
		hb4.setPrice(35);
		hm.put("5", hb4);

		HotelBill hb6 = new HotelBill();
		hb6.setItemCode(6);
		hb6.setFoodName("Anna Sambar");
		hb6.setPrice(40);
		hm.put("6", hb6);

		HotelBill hb7 = new HotelBill();
		hb7.setItemCode(7);
		hb7.setFoodName("Rasam");
		hb7.setPrice(45);
		hm.put("7", hb7);

		HotelBill hb8 = new HotelBill();
		hb8.setItemCode(8);
		hb8.setFoodName("Kesari Bath");
		hb8.setPrice(20);
		hm.put("8", hb8);

		HotelBill hb9 = new HotelBill();
		hb9.setItemCode(9);
		hb9.setFoodName("Briyani");
		hb9.setPrice(75);
		hm.put("9", hb9);

		HotelBill hb10 = new HotelBill();
		hb10.setItemCode(10);
		hb10.setFoodName("Fried Rice");
		hb10.setPrice(50);
		hm.put("10", hb10);

		System.out.println("ItemCode\tItemName\tPrice");
		System.out.println(hb.getItemCode()+"\t\t"+hb.getFoodName()+"\t\t"+hb.getPrice());
		System.out.println(hb1.getItemCode()+"\t\t"+hb1.getFoodName()+"\t\t"+hb1.getPrice());
		System.out.println(hb2.getItemCode()+"\t\t"+hb2.getFoodName()+"\t\t"+hb2.getPrice());
		System.out.println(hb3.getItemCode()+"\t\t"+hb3.getFoodName()+"\t"+hb3.getPrice());
		System.out.println(hb4.getItemCode()+"\t\t"+hb4.getFoodName()+"\t\t"+hb4.getPrice());
		System.out.println(hb6.getItemCode()+"\t\t"+hb6.getFoodName()+"\t"+hb6.getPrice());
		System.out.println(hb7.getItemCode()+"\t\t"+hb7.getFoodName()+"\t\t"+hb7.getPrice());
		System.out.println(hb8.getItemCode()+"\t\t"+hb8.getFoodName()+"\t"+hb8.getPrice());
		System.out.println(hb9.getItemCode()+"\t\t"+hb9.getFoodName()+"\t\t"+hb9.getPrice());
		System.out.println(hb10.getItemCode()+"\t\t"+hb10.getFoodName()+"\t"+hb10.getPrice());

		case 2:System.out.println("*******order***********");

		System.out.println("select foodItem");
		int foodItem = sc.nextInt();

		if(foodItem != 0) {
			foodItem = sc.nextInt();
		}
		else {
			price();
		}

		case 3: System.out.println("enter the operation to be performed");
		System.out.println("A.Add FoodItem");
		System.out.println("B.Remove FoodItem");
		System.out.println("c.Modify FoodItem");
		String operations = sc.nextLine();
		switch(operations) {
		case "A": HotelBill hb11 = new HotelBill();
		hb11.setItemCode(11);
		hb11.setFoodName("Vegetable Rice");
		hb11.setPrice(65);
		hm.put("11", hb11);
		HotelBill addedItem = hii.add(hb11);
		System.out.println("item added is: "+addedItem);

		case "B":HotelBill removedItem = hii.delete(1); 
		System.out.println("item removed is:"+removedItem);

		case "C":String updateItem = hii.update("Idle");
		hm.toString();
		System.out.println(updateItem);
		}
		case 4:System.out.println("total price: ");

		case 5:System.exit(0);

		default: System.out.println("invalid choice");
		}

	}

}
