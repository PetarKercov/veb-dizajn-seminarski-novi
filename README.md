# Srpski Sportisti - Veb Prezentacija

## Opis
Veb prezentacija o poznatim sportistima Srbije sa dinamičkim učitavanjem podataka i slika.

## Struktura fajlova
```
Veb-dizajn-seminarski/
├── index.html          # Glavna HTML stranica
├── style.css           # CSS stilovi
├── script.js           # JavaScript funkcionalnost (sadrži ugrađene podatke)
├── slike/              # Direktorijum sa slikama
│   ├── Logo.png
│   ├── novak-djokovic.jpg
│   ├── ana-ivanovic.jpg
│   └── ... (ostale slike)
└── README.md           # Ovaj fajl
```

**Napomena:** JSON fajlovi (`sportisti.json` i `reprezentacije.json`) su sada ugrađeni direktno u `script.js` fajl radi bolje kompatibilnosti sa `file://` protokolom.

## Kako pokrenuti
1. Otvorite `index.html` u bilo kom veb pregledniku
2. Sajt će automatski detektovati putanju do fajlova
3. Sve slike i podaci će se učitati dinamički

## Portabilnost
- Sajt je dizajniran da radi sa bilo koje lokacije
- Automatski detektuje putanju do fajlova
- Ne zahteva server - može se pokretati direktno iz fajl sistema
- Uključuje fallback slike ako se originalne ne mogu učitati
- **Kompatibilan sa `file://` protokolom** - radi kada se otvori direktno iz fajl sistema

## Funkcionalnosti
- Dinamičko učitavanje sportista iz ugrađenih podataka
- Galerija reprezentacija sa slajderom
- Filter po sportovima
- Tamna/svetla tema
- Kontrola veličine fonta
- Responsive dizajn
- Kontakt forma sa validacijom

## Tehničke karakteristike
- Čist HTML, CSS i JavaScript (bez eksternih biblioteka)
- UTF-8 encoding za srpske karaktere
- Dinamičko rešavanje putanja
- Error handling za nedostajuće fajlove
- Fallback slike u SVG formatu
