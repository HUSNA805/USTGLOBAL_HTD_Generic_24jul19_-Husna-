package com.dev.application;

import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class ContactImplement implements ContactInter{
	Set<Contact> s = new HashSet<Contact>();
	Scanner sc = new Scanner(System.in);
	Contact c = new Contact();

	@Override
	public Contact addContact() {
		System.out.println("Enter name");
		String name = sc.next();
		c.setName(name);
		System.out.println("Enter number");
		long num = sc.nextLong();
		c.setNumber(num);
		System.out.println("Enter group");
		String grp = sc.next();
		c.setGroup(grp);
		
		return c;
		
	}

	
	
	
}
