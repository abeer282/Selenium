const {Builder, By, Key, util}= require('selenium-webdriver');
async function firstSearch(){
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get("https://google.com");
    await driver.findElement(By.name("q")).sendKeys("Selenium",Key.RETURN);
}
firstSearch();