module.exports = {
  'Donate to Black Lives Matter' : function(browser) {
    browser.url("https://blacklivesmatter.com/")
    browser.pause(1 * 1000)
    browser.click('body > div.wrap.container-fluid > div > aside > section.widget_text.widget.custom_html-4.widget_custom_html > div > p:nth-child(2) > a')
    browser.pause(3 * 1000)
  }
}
