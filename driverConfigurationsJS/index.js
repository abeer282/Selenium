const {Builder}= require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');
const options =new firefox.Options();
options.setProfile("./SeleniumNewProfile");
/*
//setting browser preferences:
options.setPreference("browser.download.dir","C:/Users/abeer/Desktop");
options.setPreference("browser.download.folderList",2);
options.setPreference("browser.helperApps.neverAsk.saveToDisk","application/x-csv");
options.setPreference("browser.helperApps.alwaysAsk.force", false);
options.setPreference("browser.download.manager.showWhenStarting",false);
*/


const driver = new Builder().setFirefoxOptions(options).forBrowser('firefox').build();
//when download apps of csv type
//driver.get("http://samplecsvs.s3.amazonaws.com/Sacramentorealestatetransactions.csv");

driver.get("http://google.com");