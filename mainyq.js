const { Builder, By } = require('selenium-webdriver')
const chrome = require('selenium-webdriver/chrome')
const path = require('chromedriver').path // 必要，不能删除

async function example() {
  const driver = new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options()).build()
  try {
    await driver.get('http://192.168.1.97:6024/hzc_pc')
    await driver.findElement(By.css('#app [placeholder="请输入用户名"]')).sendKeys('adminWeb')
    await driver.findElement(By.css('#app [placeholder="请输入密码"]')).sendKeys('123456')
    // console.log('test', await driver.findElement(By.css('.loginUser')).getText())
    await driver.findElement(By.css('#app button')).click()
    await driver.sleep(1000)
    await driver.get('http://192.168.1.97:6024/hzc_pc/#/foodLibrary')
    await driver.sleep(3000)
    await driver.findElement(By.css('#app .ivu-btn.ivu-btn-primary')).click()
    await driver.findElement(By.css('[placeholder="请输入菜品名称"]')).sendKeys('土豆')
    // console.log(await checkIsPresence(driver, '[placeholder="请输入编码"]')) 检查元素是否存在
    await driver.findElement(By.css('[placeholder="请输入编码"][maxlength="20"]')).sendKeys('A100')
    // await driver.findElement(By.css('.ivu-icon.ivu-icon-ios-camera')).click()
    // await driver.findElement(By.css('.ivu-upload-input')).sendKeys('C:/Users/admin/Desktop/自动化测试/自动化测试/e2e/m.jpg')
    // await driver.findElement(By.css('.mingxi-table .ivu-btn.ivu-btn-default')).click()
    // await driver.findElement(By.css('[placeholder="请输入商品条码"]')).sendKeys('T001')
    // await driver.findElement(By.css('[placeholder="请输入商品数量"]')).click()
    // await driver.findElement(By.css('[placeholder="请输入商品数量"]')).sendKeys('\uE003')
    // await driver.findElement(By.css('[placeholder="请输入商品数量"]')).sendKeys('50')
    // await driver.findElement(By.css('[placeholder="请输入商品价格"]')).sendKeys('100')
    // await driver.findElement(By.css('.mingxi-table .ivu-btn.ivu-btn-default')).click()
    fs.writeFileSync(fileName, await driver.takeScreenshot(), 'base64')
    console.log('aaa', await driver.findElement(By.xpath('//div[@id="app"]')).takeScreenshot())
    // await driver.findElements(By.css('textarea'))[1]
    /**driver.findElements(By.css('textarea')).then(res => {
		res[1].sendKeys('土豆')
		// console.log('aaa', driver.findElement(By.xpath('//div[@class="ivu-modal-header"]/following-sibling::div[2]')))
		driver.findElement(By.xpath('//div[@class="ivu-modal-header"]/following-sibling::div[1]')).then(res => {
			console.log('res', res)
			console.log('text', res.getText())
			res.getText().then(data => {
				console.log('text2', data)
			})

			res.click()
		})
		// console.log(checkIsPresence(driver, '//div[@class="ivu-modal-header"]/following-sibling::div[1]'))
	})**/
    /** driver.findElements(By.css('textarea')).then(res => {
		res[1]
	})**/
    // console.log('aaa', await driver.findElements(By.css('textarea'))[1])
    // await driver.
    // console.log('aaa', await driver.findElement(By.css('body div(4)')).getText())
    // await driver.findElement(By.css('.ivu-modal-wrap[style="z-index: 1033;"] .ivu-form-item-content.ivu-input-wrapper.ivu-input-wrapper-default.ivu-input-type-textarea')).sendKeys('土豆，黄瓜')
    // await driver.sleep(1000)
    // await driver.findElement(By.css('#app .reportBarrier button.ivu-btn.ivu-btn-primary')).click()

    // driver.quit()
  } finally {
    // driver.quit()
  }
}

const checkIsPresence = async (driver, element) => {
  try {
    await driver.findElement(By.css(element))
    return true
  } catch  {
    return false
  }
}

example()
