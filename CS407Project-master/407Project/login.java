import java.io.*;
import java.util.*;

public class login {

    public static void main(String[] args) {

        String filePath = "USDatabase.txt";
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter your username: ");
        String username = scanner.nextLine();
        System.out.println("Checking to see if username exists...");
        BufferedReader bufferedReader;
        try {
            
            bufferedReader = new BufferedReader(new FileReader(filePath));
            String line;
            Boolean usernameExists = true;
            while(usernameExists != false)
            {
                //System.out.println(usernameExists+"1");
                while((line = bufferedReader.readLine()) != null) {
                    if (line.equals(username)) {
                        //System.out.println(usernameExists+"2");
                        usernameExists = true;
                        break;
                    }
                    else
                    {
                        //System.out.println(usernameExists+"3");
                        usernameExists = false;
                    }
                }
                if (usernameExists) {
                    System.out.println("Username exists! Please try again.");
                } else {
                    //System.out.println(usernameExists+"4");
                    System.out.println("Username accepted");
                }
                if(usernameExists==true)
                {
                    System.out.println("Enter your username: ");
                    username = scanner.nextLine();
                }
            }
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        System.out.println("Enter a password:");
        String password = scanner.nextLine();
        try {
            FileWriter writer = new FileWriter("Database.txt", true);
            writer.write("\n"+username+" "+password);
            writer.close();
            FileWriter writer2 = new FileWriter("USDatabase.txt", true);
            writer2.write("\n"+username);
            writer.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
        try {
            FileWriter writer2 = new FileWriter("USDatabase.txt", true);
            writer2.write("\n"+username);
            writer2.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

}