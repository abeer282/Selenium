import org.openqa.selenium.By;  
import org.openqa.selenium.WebDriver;  
import org.openqa.selenium.chrome.ChromeDriver;  
import java.util.Scanner; 


public class AutomaticSearch {

	public static void main(String[] args) {  
		String searchString; 
		Scanner sc = new Scanner(System.in);
 		System.out.println("Enter a string for search:"); 
 		searchString = sc.nextLine(); 
	    System.setProperty("webdriver.chrome.driver", "C:\\Drivers\\ChromeDriver\\chromedriver.exe");  
	    WebDriver driver=new ChromeDriver();  
	    driver.navigate().to("https://duckduckgo.com/");  
	    driver.findElement(By.id("search_form_input_homepage")).sendKeys(searchString);  
	    driver.findElement(By.id("search_button_homepage")).click();  

	}

}
