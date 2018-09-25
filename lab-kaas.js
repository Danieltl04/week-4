var geel = prompt("Is de kaas geel?")


if (geel == "ja"){
	document.write ("De kaas is geel")
	var gaten = prompt("Heeft de kaas gaten?")
}

if (gaten =="ja"){
	document.write ("<br> De kaas heeft gaten")
	var duur = prompt("Is de kaas belachelijk duur?")
}

else if (gaten =="nee"){
	document.write ("<br>De kaas heeft geen gaten")
	var hard = prompt("Is de kaas hard als steen?")
}

if (duur =="ja"){
	document.write("<br>De kaas is belachelijk duur")
	document.write("<br>De kaas is Emmentaler")
}
else if (duur =="nee"){
	document.write("<br>De kaas is niet belachelijk duur")
	document.write("<br>De kaas is Leerdammer")
}
if (hard =="ja"){
	document.write("<br>De kaas is hard als steen")
	document.write("<br>De kaas is Parmigiano Reggiano")
}

else if (hard == "nee"){
	document.write("<br>De kaas is niet hard als steen")
	document.write("<br>De kaas is Goudse kaas")
}

else if (geel == "nee"){
	document.write ("De kaas is niet geel")
	var blauweSchimmel = prompt("Heeft de kaas blauwe schimmel?")
}

if (blauweSchimmel == "ja"){
	document.write("<br>De kaas heeft blauwe schimmels")
	var blauweSchimmelkorst = prompt("Heeft de kaas een korst")
}

if (blauweSchimmelkorst == "ja"){
	document.write("<br>De kaas heeft korst")
	document.write("<br>De kaas is Blue de Rochbaron")
}

else if (blauweSchimmelkorst == "nee"){
	document.write("<br>De kaas heeft geen korst")
	document.write("<br>De kaas is Fourme d'Ambert")
}

else if (blauweSchimmel == "nee"){
	document.write("<br>De kaas heeft geen blauwe schimmels")
	var korst = prompt("Heeft de kaas een korst")
}

if (korst == "ja"){
	document.write("<br>De kaas heeft een korst")
	document.write("<br>De kaas is Camembert")
}
else if (korst == "nee"){
	document.write("<br>De kaas heeft geen korst")
	document.write("<br>De kaas is Mozzarella")
}

