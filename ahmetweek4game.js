alert("Hey! Welkom bij mijn game, Voordat we beginnen heb ik nog een paar gegevens van je nodig. (Let Op! je leeftijdkan effect hebben op het verhaal.)")
var naam = prompt("Hoe heet je?")
leeftijd = prompt("Hoe oud ben je?")
alert("dus jij bent " +naam+ " en je bent " +leeftijd+ " jaar?")
alert("Top! Dan kunnen we nu beginnen aan onze verhaal.")
beginkeuze = prompt("Je bent aan het gamen met je vrienden, Je vrienden vragen je het volgende: hey " +naam+ " kom je naar buiten rond 11 uur?(beantwoord met een ja of nee)") 
if (beginkeuze == "ja") {
	alert("vriend:is goed wij komen zo naar je huis en dan gaan we via daar naar het wielwijk park")
}
else{
	alert("vriend:hoezo kom je niet man, Kom gewoon of durf je niet?")
	alert(" jij:waarvoor moet ik bang zijn dan?")
	alert("vriend:...")
	alert("Je beslist om toch naar buiten te gaan.")
}
fietsvraag = prompt("Je vrienden vragen of jullie naar de park gaan met de fiets of te voet, Welke van de 2 kies je?\n (beantwoord deze vraag met 1 of 2, Als je dit niet doet stopt het spel en moet je opnieuw beginnen!)")
if (fietsvraag == 1) {
	alert("jullie zouden met de fiets gaan, Maar 1 van je vrienden kwam er achter dat zijn fiets kapot is dus jullie gaan toch maar te voet.(kies optie 2.)")
	window.location.reload();
}
//niet verderwerken aan deze^^
else if (fietsvraag == 2){
	alert("Jullie gaan te voet.")
	alert("als jullie zijn aangekomen bij het wielwijkpark, zien jullie een vrouw slapen op een bankje in het park. Ze heeft 2 tassen naast haar dus jullie proberen haar te vermijden.")
	keuze2 = prompt("nadat jullie langs haar lopen roept ze jullie ineens, wat gaan jullie doen? \n1.Jullie negeren haar en lopen door.\n2.Jullie gaan naar haar toe.")
	if (keuze2 == 1) {
		alert("Nadat jullie haar proberen te negeren schreeuwt ze om hulp,dus jullie lopen naar haar toe.")
		keuzes3 = prompt("Nadat jullie naar haar toe lopen praat ze warrig, Je ruikt een bier geur. Dus je weet dat ze onvoorspelbaar kan zijn. Je ziet iets schijnen in haar tas door de reflectie van de lantaarnpaal. Na een paar minuten praten wilt ze ineens jullie beroven en dreigt ze om jullie te steken met een mes. Je 2 vrienden zijn al weggerend maar jij staat daar nog, Wat doe je? \n 1.Je probeert de mes uit haar handen te slaan en daarna ga je proberen om haar knock out te slaan \n 2.je rent ook weg \n 3.je probeert haar eruit te praten.")
		if (keuzes3 == 1) {
			alert("je probeert de mes uit haar handen te slaan maar je mist haar slag en je word gestoken..DOOD!")
			window.location.reload();
		}
		else if (keuzes3 == 2) {
			alert("je rent ook weg,na een paar minuten rennen verstop je bij een boom,ze schreeuwt'pokkejong ik ga je doden!' ze loopt langs jouw boom je besluipt naar haar van achter en je slaat haar knock out en je belt de politie.")
			politievraag = prompt("De politie vraagt wat er is gebeurd,Vertel je hem de waarheid?\n 1.Ja.\n2.Nee. ")
		}
			if (politievraag == 1) {
				alert("Je vertelt de waarheid en de politie agent geeft je een schouderklopje,je hebt het goed afgehandeld.")
				alert("je wilt later naar de club gaan om het te vieren maar 1 van jou vrienden kon niet naar binnen omdat hij jonger dan 18 jaar was.")
				alert("jullie zijn aangekomen bij de club.")
				if (leeftijd<18) {
					alert("je bent te jong om naar binnen te gaan want je bent" +leeftijd+ "jaar,je keert terug naar huis.\n(als je de verhaal wilt afmaken met een goed einde maak je lefijtd 18 of ouder in het begin.)")
				}
				else if (leeftijd == 18){
					alert("je bent " +leeftijd+ " jaar,Je mag naar binnen.")
					alert("terwijl je in de club bent met een paar vrienden zie je een leuk meisje en jullie hebben een paar keer oogcontact gehad.")
					oogcontact = prompt("Je wilt om haar nummer vragen maar je twijfelt,wat doe je?\n 1.je vraagt om haar nummer \n 2.je vraagt niet om haar nummer.")
					if (oogcontact == "2") {
						alert("Je vraagt niet om haar nummer en jullie zien elkaar nooit meer.(einde van deze verhaal kies keuze 1 om langer te spelen.)")
					}
					else if (oogcontact == "1"){
						alert("je vraagt haar nummer en met succes heb je nu haar nummer,je vraagt of je met haar mee zal lopen naar haar huis en met toeval woont ze in de huis tegenover je.")
						laatste = prompt("ze vraagt je of je bij haar wilt slapen?\n 1.Ja \n 2.nee")
						if (laatste == "1") {
								alert("je gaat bij haar slapen en word de volgende ochten wakker en jullie gaan ontbijten daarna ga je naar huis.")
								document.write("Dit is het einde bedankt voor het spelen,ik weet het is een rare verhaal maar op het moment kon ik niks anders verzinnen maar ik heb aal een toffe plan gemaakt voor de volgende game opdracht.")

						}
					else if (laatste == "2")
						alert("je gaat naar huis en gaat slapen.")
						document.write("Hey"+naam+ "! Bedankt voor het spelen van mijn spel, ik weet het is een rare verhaal maar op het moment kon ik niks anders verzinnen maar ik heb aal een toffe plan gemaakt voor de volgende game opdracht.")





					}


				}
				//63 is van regel 44




			}
				else if (politievraag == 2){
					alert("je word aangehouden en word ondervraagd,je word beschuldigd van poging tot moord en krijgt een straf.(kies optie 1.)")
					window.location.reload();
				}

else{
	alert("deze optie is zo nutteloos dat je onmiddelijk word gestoken in je kruis...DOOD!")
	window.location.reload();
}


}

//deze is klaar.
else if (keuze2 == 2) {
alert("jullie lopen naar haar toe en ze begint te fluisteren, jullie komen dichterbij en ze steekt jullie met een mes. DOOD! (Kies optie 1.)")
window.location.reload();
}
//deze is klaar.


//deze is klaar*
else{
	alert("maak een keuze tussen 1 of 2!")
	window.location.reload();
}
//deze is klaar^*


//DEZE IS BELANGERIJK
}//deze is belangerijk
// deze } hoort bij fietsvraag

//deze is klaar
else{
	alert("je moet de vraag beantwoorden met 1 of 2!")
	window.location.reload();
}
//niet verderwerken aan deze^^