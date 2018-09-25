var optie1 = prompt("De draak slaapt. Wat doe je? (A. aanvallen met zwaard) (B. aanvallen met boog)"); 

if (optie1 == "A"){
	document.write("De draak slaapt. Wat doe je?")
	var optie2 = prompt("je valt aan met zwaard, maar je stuikelt en maakt de draak wakker. De draak valt aan. Wat doe je?(A. aanvallen) (B. wegduiken)");
}
else if (optie1 == "B"){
	document.write("<br>De draak slaapt.")
	var optie3 =prompt("je valt aan met boog. Je raakt de draak in de oog. De draak wordt boos. Wat doe je?(A. aanvallen met boog) (B. andere positie zoeken)");
}
if (optie2 == "A"){
	document.write("<br>je valt aan met zwaard, maar je struikelt en maakt de draak wakker. De draak valt aan.")
	document.write("<br>Je valt de draak aan. De draak eet je op. GAME OVER")
	alert("Je valt de draak aan. De draak eet je op. GAME OVER")
}
if (optie2 == "B"){
	document.write("<br>je valt aan met zwaard. je struikelt en valt voor de draak. De draak valt aan.")
	var optie4 =prompt("je duikt weg. De draak mist je. Wat doe je?(A. wegrennen) (B. aanvallen met zwaard) (C. aanvallen met boog)")
}
if (optie3 == "A"){
	document.write("je valt aan met boog. Je raakt de draak in de oog. De draak wordt boos.")
	var optie24 = prompt("je valt aan met boog. De draak ziet de pijl aankomen en slaat het weg. De draak gaat vuur spugen. Wat doe je? (A. blokkeren met schild) (B. wegduiken)")
}
if (optie4 == "A"){
	document.write("<br>je duikt weg. De draak mist je.")
	document.write("<br>je rent weg. GAME OVER")
	alert("je rent weg. GAME OVER.")
}
else if (optie4 == "B"){
	document.write("<br>je duikt weg. De draak mist je.")
	document.write("<br>je valt aan met zwaard. De draak eet je op. GAME OVER")
	alert("je valt aan met zwaard. De draak eet je op. GAME OVER")
}
else if (optie4 == "C"){
	document.write("<br>je duikt weg. De draak mist je.")
	var optie5 =prompt("je valt aan met boog. Je raakt de draak in de oog. De draak wordt boos wat doe je? (A. aanvallen met boog) (B. andere positie zoeken).")
}
if (optie5 == "A"){
	document.write("<br>je valt aan met boog. Je raakt de draak in de oog. De draak wordt boos.")
	var optie6 = prompt("je valt aan met boog. De draak ziet de pijl aankomen en slaat het weg. De draak gaat vuur spugen. Wat doe je? (A. blokkeren met schild) (B. wegduiken)")
}
if (optie6 == "A"){
	document.write("<br>Je valt aan met boog. De draak ziet de pijl aankomen en slaat het weg. De draak gaat vuur spugen.")
	var optie7 = prompt("je blokkeert het vuur met je schild maar je schild is verbrand. Wat doe je? (A.aanvallen) (B. blokkeren met schild) (C. wegduiken)")
}
else if (optie6 =="B"){
	document.write("<br>Je valt aan met boog. De draak ziet de pijl aankomen en slaat het weg. De draak gaat vuur spugen.")
	var optie8 = prompt("je duikt weg. Je zit nu in een hoek. Wat doe je? (A. aanvallen) (B.om hoog klimmen)")
}
if (optie7 == "A"){
	document.write("<br>je blokkeert het vuur met je schild maar je schild is verbrand.")
	var optie9 = prompt("je valt de draak aan en steekt het in de voet. de draak vliegt in de lucht. wat doe je? (A. boog schieten) (B.omhoog klimmen)")
}
else if (optie7 == "B"){
	document.write("<br>je blokkeert het vuur met je schild maar je schild is verbrand.")
	alert("je schild is verbrand en het vuur raakt je. GAME OVER.")
}
else if (optie7 == "C"){
	document.write("<br>je blokkeert het vuur met je schild maar je schild is verbrand.")
	var optie12 = prompt("je klimt omhoog om het vuur te vermijden. de draak vliegt omhoog. wat doe je? (A. aanvallen met zwaard) (B. aanvallen met boog)")
}

if (optie9 == "A"){
	document.write("<br>je valt de draak aan en steekt het in de voet. de draak vliegt in de lucht.")
	document.write("<br>je schiet je boog maar mist de draak. de draak steekt je in de fik en vermoord je. GAME OVER.")
	alert("je schiet je boog maar mist de draak. de draak steekt je in de fik en vermoord je. GAME OVER.")
}
else if (optie9 == "B"){
	document.write("<br>je valt de draak aan en steekt het in de voet. de draak vliegt in de lucht.")
	var optie10 = prompt("je klimt omhoog om achter de draak te gaan. wat doe je? (A. aanvallen met boog) (B. aanvallen met zwaard)")
}
if (optie10 == "A"){
	document.write("<br>je klimt omhoog om achter de draak te gaan. wat doe je?")
	var optie11 = prompt("je sciet een pijl met je boog door de vleugel van de  draak. de draak stort neer. wat doe je?(A. vermoord de draak) (B. spaar de draak) ")
}
else if (optie10 == "B"){
	document.write("<br>je klimt omhoog om achter de draak te gaan. wat doe je?")
	document.write("<br>je spingt in actie, maar vergeet dat je op een klif staat. jij kan niet vliegen. GAME OVER")
	alert("je spingt in actie, maar vergeet dat je op een klif staat. jij kan niet vliegen. GAME OVER")
}
if (optie11 == "A"){
	document.write("<br>Je schiet een pijl met je boog door de vleugel van de draak. De draak stort neer.")
	document.write("<br>je vermoord de draak. YOU WIN")
	alert("je vermoord de draak. YOU WIN")
}
else if (optie11 == "B"){
	document.write("<br>Je schiet een pijl met je boog door de vleugel van de draak. De draak stort neer.")
	document.write("<br>je spaart de draak. de draak vind het aardig. dan eet het je op. wat had je verwacht. GAME OVER")
	alert("je spaart de draak. de draak vind het aardig. dan eet het je op. wat had je verwacht. GAME OVER")
}
if (optie12 == "A"){
	document.write("<br>je klimt omhoog om achter de draak te gaan. wat doe je?")
	document.write("<br>je spingt in actie, maar vergeet dat je op een klif staat. jij kan niet vliegen. GAME OVER")
	alert("je spingt in actie, maar vergeet dat je op een klif staat. jij kan niet vliegen. GAME OVER")
}
else if (optie12 == "B"){
	document.write("<br>je klimt omhoog om achter de draak te gaan. wat doe je?")
	var optie13 = prompt("je schiet een pijl met je boog door de vleugel van de  draak. de draak stort neer. wat doe je?(A. spaar de draak) (B. vermoord de draak) ")
}
if (optie13 == "A"){
	document.write("<br>Je schiet een pijl met je boog door de vleugel van de draak. De draak stort neer.")
	document.write("<br>je spaart de draak. de draak vind het aardig. dan eet het je op. wat had je verwacht. GAME OVER")
	alert("je spaart de draak. de draak vind het aardig. dan eet het je op. wat had je verwacht. GAME OVER")
}
else if (optie13 =="B"){
	document.write("<br>Je schiet een pijl met je boog door de vleugel van de draak. De draak stort neer.")
	document.write("<br>je vermoord de draak. YOU WIN")
	alert("je vermoord de draak. YOU WIN")
}
if (optie14 =="A"){
	document.write("<br>Je valt aan met boog. De draak ziet de pijl aankomen en slaat het weg. De draak gaat vuur spugen.")
	var optie15 = prompt("je blokkeert het vuur met je schild maar je schild is verbrand. Wat doe je? (A.blokkeren met schild) (B. aanvallen) (C. wegduiken)")
}
else if (optie14 == "B"){
	document.write("<br>Je valt aan met boog. De draak ziet de pijl aankomen en slaat het weg. De draak gaat vuur spugen.")
	var optie1 = prompt("je duikt weg. Je zit nu in een hoek. Wat doe je? (A. aanvallen) (B.om hoog klimmen)")
}
if (optie15 =="A"){
document.write("<br>je blokkeert het vuur met je schild maar je schild is verbrand.")
	alert("je schild is verbrand en het vuur raakt je. GAME OVER.")
}
else if(optie15 =="B"){
	document.write("<br>je blokkeert het vuur met je schild maar je schild is verbrand.")
	var optie16 = prompt("je valt de draak aan en steekt het in de voet. de draak slaat je met zijn staart. je bent duizelig. wat doe je? (A. aanvallen met zwaard) (B.wegduiken)")
}
else if(optie15 =="C"){
	document.write("<br>je blokkeert het vuur met je schild maar je schild is verbrand.")
	var optie20 = prompt("je klimt omhoog om het vuur te vermijden. de draak vliegt omhoog. wat doe je? (A. aanvallen met zwaard) (B. aanvallen met boog)")
}
if (optie16 =="A"){
	document.write("<br>je valt de draak aan en steekt het in de voet. de draak slaat je met zijn staart. je bent duizelig.")
	document.write("<br>je valt aan met zwaard. maar omdat je duizelig bent, raak je de draak niet. De draak eet je op. GAME OVER")
	alert("je valt aan met zwaard. De draak eet je op. GAME OVER")
}
else if (optie16 =="B"){
	document.write("<br>je valt de draak aan en steekt het in de voet. de draak slaat je met zijn staart. je bent duizelig.")
	var optie17 = prompt("je duikt weg. de draak vliegt omhoog. wat doe je? (A. boog schieten) (B.omhoog klimmen)")
}
if (optie17 == "A"){
	document.write("je duikt weg. de draak vliegt omhoog.")
	document.write("je schiet een pijl maar omdat je duizelig bent mis je. de draak een je op. GAME OVER")
	alert("je schiet een pijl maar omdat je duizelig bent mis je. de draak een je op. GAME OVER")
}
else if (optie17 =="B"){
	document.write("<br>je duikt weg. de draak vliegt omhoog.")
	var optie18 = prompt("je klimt omhoog achter de draak aan. wat doe je? (A. aanvallen met boog) (B. aanvallen met zwaard) (C. wachten)")
}
if (optie18 == "A"){
	document.write("<br>je klimt omhoog achter de draak aan.")
	document.write("<br>je valt aan met een boog, maar mist omdat je duizelig bent. de draak eet je op. GAME OVER")
	alert("je valt aan met een boog, maar mist omdat je duizelig bent. de draak eet je op. GAME OVER")
}
else if(optie18=="B"){
	document.write("<br>je klimt omhoog achter de draak aan.")
	document.write("<br>je spingt in actie, maar vergeet dat je op een klif staat. jij kan niet vliegen. GAME OVER")
	alert("je spingt in actie, maar vergeet dat je op een klif staat. jij kan niet vliegen. GAME OVER")
}
else if (optie18=="C"){
	document.write("<br>Je klimt omhoog achter de draak aan.")
	var optie19 = prompt("Je wacht tot de draak langsvliegt en springt op de rug. je steekt de draak in de vleugel en de draak stort neer. wat doe je?(A. spaar de draak) (B. vermoord de draak)")
}
if (optie19 =="A"){
	document.write("<br>Je wacht tot de draak langsvliegt en springt op de rug. je steekt de draak in de vleugel en de draak stort neer.")
	document.write("<br>Je spaart de draak. de draak vind het aardig. dan eet het je op. wat had je verwacht. GAME OVER")
	alert("je spaart de draak. de draak vind het aardig. dan eet het je op. wat had je verwacht. GAME OVER")
}
else if (optie19 == "B"){
	document.write("<br>Je wacht tot de draak langsvliegt en springt op de rug. je steekt de draak in de vleugel en de draak stort neer.")
	document.write("<br>Je vermoord de draak. YOU WIN")
	alert("je vermoord de draak. YOU WIN")
}
if (optie20 == "A"){
	document.write("je klimt omhoog om het vuur te vermijden. de draak vliegt omhoog.")
	document.write("<br>je spingt in actie, maar vergeet dat je op een klif staat. jij kan niet vliegen. GAME OVER")
	alert("je spingt in actie, maar vergeet dat je op een klif staat. jij kan niet vliegen. GAME OVER")
}
if (optie20 =="B"){
	document.write("je klimt omhoog om het vuur te vermijden. de draak vliegt omhoog.")
	var optie21 = prompt("je schiet een pijl met je boog door de vleugel van de  draak. de draak stort neer. wat doe je?(A. vermoord de draak) (B. spaar de draak) ")
}
if (optie21 == "A"){
	document.write("<br>Je schiet een pijl met je boog door de vleugel van de draak. De draak stort neer.")
	document.write("<br>je vermoord de draak. YOU WIN")
	alert("je vermoord de draak. YOU WIN")
}
else if (optie21 == "B"){
	document.write("<br>Je schiet een pijl met je boog door de vleugel van de draak. De draak stort neer.")
	document.write("<br>je spaart de draak. de draak vind het aardig. dan eet het je op. wat had je verwacht. GAME OVER")
	alert("je spaart de draak. de draak vind het aardig. dan eet het je op. wat had je verwacht. GAME OVER")
}
if (optie24 == "A"){
	document.write("<br>Je valt aan met boog. De draak ziet de pijl aankomen en slaat het weg. De draak gaat vuur spugen.")
	var optie7 = prompt("je blokkeert het vuur met je schild maar je schild is verbrand. Wat doe je? (A.aanvallen) (B. blokkeren met schild) (C. wegduiken)")
}