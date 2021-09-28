const { Builder, By } = require('selenium-webdriver')
const chrome = require('selenium-webdriver/chrome')
const path = require('chromedriver').path // 必要，不能删除

async function example() {
  const driver = new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().detachDriver(true)).build()
  try {
    await driver.get('http://192.168.1.97:6024/hzc_pc')
    await driver.findElement(By.css('#app [placeholder="请输入用户名"]')).sendKeys('adminWeb')
    await driver.findElement(By.css('#app [placeholder="请输入密码"]')).sendKeys('123456')
    await driver.findElement(By.css('#app button')).click()
    await driver.sleep(1000)
    await driver.get('http://192.168.1.97:6024/hzc_pc/#/foodLibrary')
    await driver.sleep(1000)
    await driver.findElement(By.css('#app .reportBarrier button.ivu-btn.ivu-btn-primary')).click()

    // driver.quit()
  } finally {
    driver.quit()
  }
}

example()
