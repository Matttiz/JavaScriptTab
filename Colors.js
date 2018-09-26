javascript:(function() { 
function ChangeColorsCharts(){
	var dashboardList = getElementsByXPath("//*[@class='piechart-gadget']");
	for (var j = 0, leng = dashboardList.length + 1 ; j < leng; j++){
		var legendList = getElementsByXPath("(//*[@class='piechart-gadget'])["+ j +"]//ul//a[text()]");
		var legendColorList = getElementsByXPath("(//*[@class='piechart-gadget'])["+ j +"]//a[text()]/../preceding-sibling::*[1]");
		for (var i = 0, len = legendList.length; i < len; i++) {
			var colorToFindInChartPie = ChangeColor(legendList[i],legendColorList[i]);
			var pieceChartPie = FindPieChartPieceByColor(j, colorToFindInChartPie);
			ChangeColorChartPie(pieceChartPie, legendList[i].textContent);
		}
	}
}

function ChangeColor(element, element2) {
	var color;
	switch(element.textContent) {
    case "Unresolved":
		color = "#3b7fc5";
        break;
    case "Fixed":
        color = "#8eb022";
        break;
    case "Failed":
        color = "#d04436";
        break;
		}
	var previousColor = GetAttributeColor(element2, "style");
	element2.style.backgroundColor = color;
	return previousColor;
}

function getElementsByXPath(xpath, parent)
{
	let results = [];
	let query = document.evaluate(xpath, parent || document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
	for (let i=0, length=query.snapshotLength; i<length; ++i) {
		var style = window.getComputedStyle(query.snapshotItem(i));
		if (style.display !== 'none'){
			results.push(query.snapshotItem(i));
		}
	}
  return results;
}

function getElementByXpath(path) { 
		return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
} 

function FindPieChartPieceByColor(piechartGadgetNumber, color){
	var xpath = "(//*[@class='piechart-gadget'])["+piechartGadgetNumber+"]//*[@class='piechart-graph']//*[@class='piechart-fill']";
	var substringXpath1 = xpath.substring(0,xpath.lastIndexOf("@")) + "(";
	var substringXpath2 = xpath.substring(xpath.lastIndexOf("@"),xpath.lastIndexOf("]"));
	var newXpath = substringXpath1 + substringXpath2 + ") and (@fill='" + color + "')]";
	var element = getElementByXpath(newXpath);
	return element;
}

function ChangeColorChartPie(element, name) {
	var color;
	switch(name) {
 case "Unresolved":
		color = "#3b7fc5";
        break;
    case "Fixed":
        color = "#8eb022";
        break;
    case "Failed":
        color = "#d04436";
        break;
		}
		element.setAttribute("fill", color);
}

function GetAttributeColor(element, attributeName){
	var attribut = element.getAttribute(attributeName);
	var color = attribut.substring(attribut.indexOf("#"));
	return color;
}
ChangeColorsCharts() })(); 