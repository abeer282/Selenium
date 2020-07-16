const {Builder}= require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const options =new chrome.Options();
options.setUserPreferences("browser.downloader","c:\\mydowns");
options.setUserPreferences("browser.download.folderList",2);
options.setUserPreferences("browser.helperApps.neverAsk.saveToDisk","application/x-csv");

const driver = new Builder().forBrowser('chrome').build();
driver.get("http://samplecsvc.s3.amazonaws.com/Sacramentorealestatetransaction.csv");

