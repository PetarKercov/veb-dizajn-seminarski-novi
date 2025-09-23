// --- OPTIMIZOVANI I KOMPLETNI JS --- //
document.addEventListener('DOMContentLoaded', () => {
    // --- KONSTANTE I ELEMENTI --- //
    const ELEMENTI = {
        navLinkovi: document.querySelectorAll('#zaglavlje nav ul li a'),
        sekcije: document.querySelectorAll('section'),
        filterDugme: document.querySelectorAll('.dugme-filtera'),
        licnostiWrapper: document.querySelector('.omotac-licnosti'),
        promeniTemu: document.getElementById('promeni-temu'),
        hamburgerDugme: document.querySelector('.hamburger-dugme'),
        navZaglavlje: document.querySelector('#zaglavlje nav'),
        slajder: document.querySelector('.slajder'),
        prethodnaBtn: document.querySelector('.dugme-prethodna'),
        sledecaBtn: document.querySelector('.dugme-sledeca'),
        forma: document.querySelector('#kontakt form'),
        povecajDugme: document.getElementById('povecaj-font'),
        smanjiDugme: document.getElementById('smanji-font'),
    };

    const zaglavlje = document.getElementById('zaglavlje');

// --- PODACI --- // 
const SPORTISTI_PODACI = [ {"ime": "Novak Đoković", "sport": "tenis", "opis": "Najbolji teniser svih vremena, osvajač rekordnog broja Grand Slam titula.", "slika": "slike/novak-djokovic.jpg"}, 
    {"ime": "Jelena Janković", "sport": "tenis", "opis": "Bivša prva teniserka sveta, poznata po borbenom duhu i atraktivnoj igri.", "slika": "slike/jelena-jankovic.jpg"}, 
    {"ime": "Ana Ivanović", "sport": "tenis", "opis": "Grand Slam šampionka i bivša prva na WTA listi, popularna širom sveta.", "slika": "slike/ana-ivanovic.jpg"}, 
    {"ime": "Nikola Jokić", "sport": "kosarka", "opis": "Košarkaš Denver Nuggetsa i dvostruki MVP NBA lige. Poznat po neverovatnoj svestranosti i asistencijama.", "slika": "slike/nikola-jokic.jpg"}, 
    {"ime": "Bogdan Bogdanović", "sport": "kosarka", "opis": "Jedan od najboljih šutera u Evropi, igrač Atlanta Hawksa.", "slika": "slike/bogdan-bogdanovic.jpg"}, 
    {"ime": "Vlade Divac", "sport": "kosarka", "opis": "Legendarni igrač LA Lakersa i Sacramento Kingsa. Ušao je u Kuću slavnih.", "slika": "slike/vlade-divac.jpg"}, 
    {"ime": "Milica Mandić", "sport": "tekvondo", "opis": "Srpska tekvondoistkinja, dvostruka olimpijska šampionka.", "slika": "slike/milica-mandic.jpg"}, 
    {"ime": "Tijana Bogdanović", "sport": "tekvondo", "opis": "Olimpijska vicešampionka i osvajačica brojnih medalja sa svetskih prvenstava.", "slika": "slike/tijana-bogdanovic.jpg"}, 
    {"ime": "Damir Fejzić", "sport": "tekvondo", "opis": "Reprezentativac Srbije u tekvondou, osvajač bronzane medalje na Svetskom prvenstvu.", "slika": "slike/damir-fejzic.jpg"}, 
    {"ime": "Aleksandar Mitrović", "sport": "fudbal", "opis": "Najbolji strelac u istoriji fudbalske reprezentacije Srbije. Igrač Al Hilala.", "slika": "slike/aleksandar-mitrovic.jpg"}, 
    {"ime": "Dušan Tadić", "sport": "fudbal", "opis": "Kapiten fudbalske reprezentacije Srbije i kreator igre. Igrač Fenerbahčea.", "slika": "slike/dusan-tadic.jpg"}, 
    {"ime": "Dragan Džajić", "sport": "fudbal", "opis": "Legendarni fudbaler Crvene zvezde i jedan od najboljih krilnih napadača Evrope.", "slika": "slike/dragan-dzajic.jpg"}, 
    {"ime": "Tijana Bošković", "sport": "odbojka", "opis": "Jedna od najboljih odbojkašica na svetu, MVP Svetskog prvenstva.", "slika": "slike/tijana-boskovic.jpg"}, 
    {"ime": "Maja Ognjenović", "sport": "odbojka", "opis": "Odbojkašica sa brojnim medaljama sa reprezentacijom i u klupskoj karijeri.", "slika": "slike/maja-ognjenovic.jpg"}, 
    {"ime": "Nikola Grbić", "sport": "odbojka", "opis": "Bivši odbojkaš i aktuelni trener, osvajač olimpijskog zlata.", "slika": "slike/nikola-grbic.jpeg"}, 
    {"ime": "Filip Filipović", "sport": "vaterpolo", "opis": "Legendarni vaterpolista, višestruki olimpijski i svetski šampion.", "slika": "slike/filip-filipovic.jpg"}, 
    {"ime": "Andrija Prlainović", "sport": "vaterpolo", "opis": "Jedan od najboljih vaterpolista svih vremena, poznat po snažnom šutu.", "slika": "slike/andrija-prlainovic.jpg"}, 
    {"ime": "Duško Pijetlović", "sport": "vaterpolo", "opis": "Osvajač brojnih medalja sa reprezentacijom u vaterpolu. Jedan od najtrofejnijih igrača.", "slika": "slike/dusko-pijetlovic.jpg"} ]; 
const GALERIJA_PODACI = [ {"godina": "2000", "takmicenje": "Olimpijske igre, Sidnej", "medalja": "Zlato", "sport": "Muška odbojka", "slika": "slike/odbojka-2000.jpg"}, 
    {"godina": "2014", "takmicenje": "Svetsko prvenstvo, Španija", "medalja": "Srebro", "sport": "Muška košarka", "slika": "slike/kosarka-2014.jpg"}, 
    {"godina": "2015", "takmicenje": "Evropsko prvenstvo, Budimpešta", "medalja": "Zlato", "sport": "Ženska košarka", "slika": "slike/kosarka-2015.jpg"}, 
    {"godina": "2015", "takmicenje": "Svetsko prvenstvo, Kazanj", "medalja": "Zlato", "sport": "Vaterpolo", "slika": "slike/vaterpolo-2015.jpg"}, 
    {"godina": "2016", "takmicenje": "Olimpijske igre, Rio", "medalja": "Zlato", "sport": "Vaterpolo", "slika": "slike/vaterpolo-2016.jpg"}, 
    {"godina": "2016", "takmicenje": "Olimpijske igre, Rio", "medalja": "Srebro", "sport": "Muška košarka", "slika": "slike/kosarka-2016.jpg"}, 
    {"godina": "2018", "takmicenje": "Svetsko prvenstvo, Japan", "medalja": "Zlato", "sport": "Ženska odbojka", "slika": "slike/odbojka-2018.jpg"}, 
    {"godina": "2019", "takmicenje": "Evropsko prvenstvo, Pariz", "medalja": "Zlato", "sport": "Muška odbojka", "slika": "slike/odbojka-2019.jpg"}, 
    {"godina": "2021", "takmicenje": "Evropsko prvenstvo, Valensija", "medalja": "Zlato", "sport": "Ženska košarka", "slika": "slike/kosarka-2021.jpg"}, 
    {"godina": "2022", "takmicenje": "Svetsko prvenstvo, Holandija/Poljska", "medalja": "Zlato", "sport": "Ženska odbojka", "slika": "slike/odbojka-2022.jpg"}, 
    {"godina": "2024", "takmicenje": "Olimpijske igre, Pariz", "medalja": "Bronza", "sport": "Muška košarka", "slika": "slike/kosarka-2024.jpg"} ];

  
    // --- POMOĆNE FUNKCIJE --- //
    const dohvatiOsnovnuPutanju = () => {
        const trenutniUrl = window.location.href;
        if (trenutniUrl.startsWith('file://')) {
            const delovi = trenutniUrl.split('/');
            delovi.shift();
            delovi.shift();
            delovi.pop();
            return delovi.join('/') + '/';
        }
        const trenutnaPutanja = window.location.pathname;
        const delovi = trenutnaPutanja.split('/');
        delovi.pop();
        return delovi.join('/') + '/';
    };

    const osnovnaPutanja = dohvatiOsnovnuPutanju();

    const animirajSakrivanjeSekcije = (sekcija) => {
        if (!sekcija.classList.contains('active')) {
            sekcija.style.display = 'none';
            return;
        }
        sekcija.classList.remove('active');
        const priZavrsetku = (e) => {
            if (e.propertyName === 'opacity' && !sekcija.classList.contains('active')) {
                sekcija.style.display = 'none';
                sekcija.removeEventListener('transitionend', priZavrsetku);
            }
        };
        sekcija.addEventListener('transitionend', priZavrsetku);
    };

    // --- PRIKAZ SEKCIJE --- //
    const prikaziSekciju = (idSekcije) => {
        const ciljnaSekcija = document.getElementById(idSekcije);
        if (!ciljnaSekcija) return;

        if (ciljnaSekcija.classList.contains('active')) {
            window.scrollTo({ top: 0, behavior: 'auto' });
            return;
        }

        ELEMENTI.sekcije.forEach(sekcija => {
            if (sekcija === ciljnaSekcija) return;
            if (sekcija.classList.contains('active')) {
                animirajSakrivanjeSekcije(sekcija);
            } else {
                sekcija.style.display = 'none';
            }
        });

        ciljnaSekcija.style.display = 'block';
        void ciljnaSekcija.getBoundingClientRect();
        ciljnaSekcija.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'auto' });
    };

    // --- PRIKAZ SPORTISTA (filter) --- //
    const prikaziSportiste = (filter) => {
        if (!ELEMENTI.licnostiWrapper) return;
        ELEMENTI.licnostiWrapper.innerHTML = '';

        const filtrirani = (filter === 'svi' || !filter) ? SPORTISTI_PODACI : SPORTISTI_PODACI.filter(s => s.sport === filter);

        filtrirani.forEach(sportista => {
            const licnostDiv = document.createElement('div');
            licnostDiv.className = 'kutija-licnosti';
            licnostDiv.setAttribute('data-sport', sportista.sport);

            const img = document.createElement('img');
            img.className = 'sportista-slika';
            img.alt = sportista.ime;
            img.src = osnovnaPutanja + sportista.slika;

            const infoDiv = document.createElement('div');
            infoDiv.className = 'sportista-info';
            const h3 = document.createElement('h3');
            h3.textContent = sportista.ime;
            const p = document.createElement('p');
            p.textContent = sportista.opis;

            infoDiv.appendChild(h3);
            infoDiv.appendChild(p);

            licnostDiv.appendChild(img);
            licnostDiv.appendChild(infoDiv);

            ELEMENTI.licnostiWrapper.appendChild(licnostDiv);
        });
    };

    // --- SLAJDER / GALERIJA --- //
    let trenutniIndex = 0;
    const inicijalizujSlajder = () => {
        if (!ELEMENTI.slajder) return;
        ELEMENTI.slajder.innerHTML = '';

        GALERIJA_PODACI.forEach(podatak => {
            const slajd = document.createElement('div');
            slajd.className = 'slide';

            const slajdInfo = document.createElement('div');
            slajdInfo.className = 'slide-info';
            slajdInfo.innerHTML = `
                <p class="slide-sport">${podatak.sport}</p>
                <p class="slide-takmicenje">${podatak.takmicenje} (${podatak.godina})</p>
                <p class="slide-medalja">${podatak.medalja}</p>
            `;

            const img = document.createElement('img');
            img.alt = `Slika ${podatak.sport} reprezentacije`;
            img.src = osnovnaPutanja + podatak.slika;

            slajd.appendChild(slajdInfo);
            slajd.appendChild(img);
            ELEMENTI.slajder.appendChild(slajd);
        });

        const sviSlajdovi = ELEMENTI.slajder.querySelectorAll('.slide');
        if (!sviSlajdovi.length) return;

        sviSlajdovi.forEach((slajd, i) => {
            slajd.style.display = i === 0 ? 'block' : 'none';
        });

        // Dugmad za slajder
        if (ELEMENTI.sledecaBtn) {
            ELEMENTI.sledecaBtn.onclick = () => {
                sviSlajdovi[trenutniIndex].style.display = 'none';
                trenutniIndex = (trenutniIndex + 1) % sviSlajdovi.length;
                sviSlajdovi[trenutniIndex].style.display = 'block';
            };
        }
        if (ELEMENTI.prethodnaBtn) {
            ELEMENTI.prethodnaBtn.onclick = () => {
                sviSlajdovi[trenutniIndex].style.display = 'none';
                trenutniIndex = (trenutniIndex - 1 + sviSlajdovi.length) % sviSlajdovi.length;
                sviSlajdovi[trenutniIndex].style.display = 'block';
            };
        }
    };

    // --- AŽURIRANJE SLIKA --- //
    const azurirajStatickeSlike = () => {
        document.querySelectorAll('img[src^="slike/"]').forEach(img => {
            const original = img.getAttribute('src');
            if (!img.src.includes(osnovnaPutanja)) {
                img.src = osnovnaPutanja + original;
            }
        });
    };

     // --- COOKIE FUNKCIJE --- //
    // Kreiranje cookie-ja sa 30 dana trajanja
    function napraviCookie(ime, vrednost) {
        const danas = new Date();
        danas.setTime(danas.getTime() + (30 * 24 * 60 * 60 * 1000)); // 30 dana
        document.cookie = ime + "=" + encodeURIComponent(vrednost) + "; path=/; expires=" + danas.toUTCString();
    }

    // Brisanje cookie-ja
    function obrisiCookie(ime) {
        const danas = new Date(0); // postavi datum na prošlost
        document.cookie = ime + "=; path=/; expires=" + danas.toUTCString();
    }

    // Čitanje cookie-ja
    function uzmiCookie(ime) {
        const sviKukiji = "; " + document.cookie;
        const delovi = sviKukiji.split("; " + ime + "=");
        if (delovi.length === 2) return decodeURIComponent(delovi.pop().split(";").shift());
        return null;
    }
      


    // --- EVENT LISTENERI --- //
    if (ELEMENTI.navLinkovi && ELEMENTI.navLinkovi.length) {
        ELEMENTI.navLinkovi.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const href = link.getAttribute('href') || '';
                const idSekcije = href.replace(/^#/, '');
                if (idSekcije) prikaziSekciju(idSekcije);
            });
        });
    }

    if (ELEMENTI.filterDugme && ELEMENTI.filterDugme.length) {
        ELEMENTI.filterDugme.forEach(dugme => {
            dugme.addEventListener('click', () => {
                ELEMENTI.filterDugme.forEach(btn => btn.classList.remove('active'));
                dugme.classList.add('active');
                const filter = dugme.getAttribute('data-filter') || 'svi';
                prikaziSportiste(filter);
            });
        });
    }

// --- Promena teme sa cookie-jem --- //
    if (ELEMENTI.promeniTemu) {
    ELEMENTI.promeniTemu.addEventListener('click', () => {
        const aktivnaTamna = document.body.classList.toggle('tamna-tema');
        if (aktivnaTamna) {
            napraviCookie('tema', 'tamna-tema'); // sačuvaj
        } else {
            obrisiCookie('tema'); // obriši
        }
    });

    const sacuvanaTema = uzmiCookie("tema");
    if (sacuvanaTema) {
        document.body.classList.add(sacuvanaTema);
    }
}

    if (ELEMENTI.hamburgerDugme) {
        ELEMENTI.hamburgerDugme.addEventListener('click', () => {
            ELEMENTI.navZaglavlje?.classList.toggle('active');
        });
    }

    if (ELEMENTI.navZaglavlje) {
        ELEMENTI.navZaglavlje.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                ELEMENTI.navZaglavlje.classList.remove('active');
            });
        });
    }

    if (ELEMENTI.forma) {
        ELEMENTI.forma.addEventListener('submit', (e) => {
            e.preventDefault();
            const imeInput = document.getElementById('ime');
            const emailInput = document.getElementById('email');
            const porukaInput = document.getElementById('poruka');

            if (!imeInput || !emailInput || !porukaInput) {
                alert('Forma nije ispravna (nedostaju polja).');
                return;
            }

            if (!imeInput.value || !emailInput.value || !porukaInput.value) {
                alert('Molimo Vas da popunite sva polja!');
                return;
            }
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
                alert('Molimo Vas da unesete ispravnu e-mail adresu!');
                return;
            }
            alert('Forma je uspešno poslata!');
            ELEMENTI.forma.reset();
        });
    }

    // Povećavanje i smanjenje fonta
    let trenutniFont = parseInt(window.getComputedStyle(document.body).fontSize) || 16;
    if (ELEMENTI.povecajDugme) {
        ELEMENTI.povecajDugme.addEventListener('click', () => {
            trenutniFont += 2;
            document.body.style.fontSize = trenutniFont + 'px';
        });
    }
    if (ELEMENTI.smanjiDugme) {
        ELEMENTI.smanjiDugme.addEventListener('click', () => {
            trenutniFont = Math.max(12, trenutniFont - 2);
            document.body.style.fontSize = trenutniFont + 'px';
        });
    }

    // --- INICIJALIZACIJA --- //
    ELEMENTI.sekcije.forEach(sec => {
        if (sec.id === 'pocetna') {
            sec.style.display = 'block';
            void sec.getBoundingClientRect();
            sec.classList.add('active');
        } else {
            sec.style.display = 'none';
            sec.classList.remove('active');
        }
    });

    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    azurirajStatickeSlike();
    prikaziSportiste('svi');
    inicijalizujSlajder();
});