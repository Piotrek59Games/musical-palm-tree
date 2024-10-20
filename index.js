const wybory = ["Papier", "Kamień", "Nożyce"];
const wyborGracza = document.getElementById("wyborGracza");
const wyborKomputera = document.getElementById("wyborKomputera");
const ktoWygral = document.getElementById("ktoWygral");
const zwyciestwa = document.getElementById("zwyciestwa");
const przegrane = document.getElementById("przegrane");
const remisy = document.getElementById("remisy");

var licznikWygranych = 0;
var licznikPrzegranych = 0;
var licznikRemisow = 0;

function gra(Gracz){
    const Komputer = wybory[Math.floor(Math.random() * 3)]
    let wynik = "";


    if (Gracz === Komputer) {
        wynik = "Remis!";
        licznikRemisow++
    }
    else if (Gracz === "Kamień" && Komputer === "Nożyce") {
        wynik = "Wygrana!";  
        licznikWygranych++
    }
    else if (Gracz === "Papier" && Komputer === "Kamień") {
        wynik  = "Wygrana!";  
        licznikWygranych++ 
    }
    else if (Gracz === "Nożyce" && Komputer === "Papier") {
        wynik  = "Wygrana!";  
        licznikWygranych++ 
    }
    else {
        wynik  = "Przegrana!";
        licznikPrzegranych++;
    }

    wyborGracza.textContent = `Twój wybór: ${Gracz}`;
    wyborKomputera.textContent = `Wybór komputera: ${Komputer}`;
    zwyciestwa.textContent = `Licznik wygranych: ${licznikWygranych}`;
    przegrane.textContent = `Licznik przegranych: ${licznikPrzegranych}`;
    remisy.textContent = `Licznik remisów: ${licznikRemisow}`;
    ktoWygral.textContent = wynik;
}

function reset() {
    wyborGracza.textContent = "Twój wybór:";
    wyborKomputera.textContent = "Wybór komputera:";
    zwyciestwa.textContent = "Licznik wygranych: 0";
    przegrane.textContent = "Licznik przegranych: 0";
    remisy.textContent = "Licznik remisów: 0";
    ktoWygral.textContent = "";
    licznikWygranych = 0;
    licznikPrzegranych = 0;
    licznikRemisow = 0;
}    

