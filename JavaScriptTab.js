javascript:(function() { function getElementByXpath(path) { return 
document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, 
null).singleNodeValue } 
getElementByXpath("(//*[contains(@class,'lcontrast')])[4]").style. 
backgroundColor="black"; })(); 
