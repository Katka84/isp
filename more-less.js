function less(){
	var kwiatki = "@@@@@@@@@@@@@@@@@@@@";
	var miejsceNaKwiatki = document.getElementByld("wynik");
	miejsceNaKwiatki.innerText=''
	var licznikPetli=0;
	
	do {
		let kwiatkiJakoObiekt = document.createTextNode(kwiatki);
		let nowaLinia = document.createElement("br");
		miejsceNaKwiatki.append(kwiatkiJakoObiekt, nowaLinia);
		kwiatki = kwiatki.slice(0, -1);
		licznikPetli++;
		
	}
	while(licznikPetli<20);
}
	function more() {
		var kwiatki = "";
		var miejsceNaKwiatki = document.getElementByld("wynik");
		miejsceNaKwiatki.innerText='';
		var licznikPetli=0;
		
		do {
		kwiatki +="@";
		let kwiatkiJakoObiekt = document.createTextNode(kwiatki);
		let nowaLinia = document.createElement("br");
		miejsceNaKwiatki.append(kwiatkiJakoObiekt, nowaLinia);
		licznikPetli++;
	}
	while(licznikPetli<20);
}