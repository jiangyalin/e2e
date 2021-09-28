const { Builder, By } = require('selenium-webdriver')
const chrome = require('selenium-webdriver/chrome')
const path = require('chromedriver').path // 必要，不能删除
const jsDom = require('jsdom').JSDOM
const jquery = require('jquery')
const fs = require('fs')

const html = fs.readFileSync('./test.html', 'utf8')

async function example() {
  // const driver = new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().detachDriver(true)).build()
  try {
    // await driver.get('https://www.xiaohongshu.com/user/profile/59b62f1550c4b47fbfa368d9')
    // await driver.sleep(5000)
    // const html = await driver.getPageSource()
    let window = new jsDom(html).window
    let $ = jquery(window)
    fs.writeFileSync('./test.html', html)
    console.log('html', html)

  } finally {
    // driver.quit()
  }
}

example()
