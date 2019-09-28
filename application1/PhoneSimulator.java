package com.dev.application;

import java.util.LinkedHashSet;
import java.util.Scanner;
import java.util.Set;

public class ContactData {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		Set<Contact> s = new LinkedHashSet<Contact>();
		ContactImplement ci = new ContactImplement();

		Contact cont = new Contact();
		cont.setName("husna");
		cont.setNumber(265874356);
		cont.setGroup("Family");

		Contact cont1 = new Contact();
		cont1.setName("Ruhi");
		cont1.setNumber(92456269l);
		cont1.setGroup("Office");

		Contact cont2 = new Contact();
		cont2.setName("Aniya");
		cont2.setNumber(69875423l);
		cont2.setGroup("Home");

		s.add(cont);
		s.add(cont1);
		s.add(cont2);

		for(;;) {
			System.out.println("1.Show all contacts\n2.Search for contacts\n3.Operate on contact\n4.Exit");
			System.out.println("Enter your choice");
			int choice = sc.nextInt();

			switch(choice) {
			case 1: for(Contact c: s) {
				System.out.println(c.getName());
			}
			break;
			case 2: for(Contact c: s) {
				System.out.println(c);
			}

			System.out.println("1.Call\n2.Message\n3.Back to Menu");
			System.out.println("Enter your choice");
			int ch = sc.nextInt();

			switch(ch) {
			case 1:	System.out.println(cont.getNumber()+ "Calling....");
			System.out.println("End Call? (true/false)");
			boolean bool = sc.nextBoolean();
			if(bool == true) {
				System.out.println("Call ended");
			}

			break;
			case 2:System.out.println("Compose the message");
			String msg = sc.next();
			System.out.println("Sending message to...");
			break;
			case 3: System.exit(0);
				break;
			default: System.out.println("Invalid choice");
			}


			break;

			case 3:	System.out.println("1.Add\n2.Delete\n3.Edit");
			System.out.println("Enter your Choice");
			int ch1 = sc.nextInt();

			switch(ch1) {
			case 1: Contact cont3 = ci.addContact();
					s.add(cont3);
			
			break;
			
			case 2: System.out.println("Enter the name to delete?");
					String newName = sc.next();
					if(cont.getName().equalsIgnoreCase(newName)) {
						s.remove(cont);
					}else if(cont1.getName().equalsIgnoreCase(newName)){
						s.remove(cont1);
					}else if(cont2.getName().equals(newName)) {
						s.remove(cont2);
					}
					
					
				break;
			case 3: 
				break;

			}
			break;

			case 4:System.exit(0);
			break;

			default: System.out.println("Invalid choice");
			}
		}
	}

}
