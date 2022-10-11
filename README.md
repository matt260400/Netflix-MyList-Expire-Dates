<a name="readme-top"></a>

# Netflix-MyList-Expire-Dates
Un'estensione per browser Chromium e Firefox per visualizzare le date di scadenza dei contenuti presenti nella sezione "La mia lista" di <a href="https://www.netflix.com">Netflix</a>.

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Indice</summary>
  <ol>
    <li>
      <a href="#lestensione">L'estensione</a>
    </li>
    <li>
      <a href="#per-iniziare">Per iniziare</a>
      <ul>
        <li><a href="#installazione">Installazione</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## L'estensione

[![Screen Shot][product-screenshot]](https://example.com)

L'estensione permette di visualizzare le date di scadenza dei contenuti presenti all'interno della pagina "La mia lista".
Alla pressione del bottone viene effettuata una ricerca in background di ogni elemento presente all'interno della lista.
A causa del lazy-loading la pagina deve essere caricata per intero, quindi automaticamente viene eseguita una funzione per arrivare in fondo alla lista, non sarà necessario nessun intervento da parte dell'utente.
Il tempo necessario per la ricerca è di circa 0.8s per elemento. Attualmente questa è la soglia minima raggiungibile.
È possibile monitorare l'avanzamento della ricerca premendo `CTRL + Shift + I` e recandosi alla tab `console`.

<p align="right">(<a href="#readme-top">torna all'inizio</a>)</p>

<!-- GETTING STARTED -->
## Per iniziare

L'estensione non è ancora presente negli store, quindi sarà necessario eseguire pochi semplici step per aggiungerla manualmente al proprio browser.

### Prerequisiti

È necessario avere un browser Chromium come Google Chrome o Microsoft Edge oppure Firefox.
Una lista esaustiva di browser Chromium è presente al seguente <a href="https://it.wikipedia.org/wiki/Chromium#Browser_basati_su_Chromium">link</a>.

### Installazione

_La seguente guida è scritta per l'installazione su Chrome. La procedura è simile per gli altri browser. Ulteriori istruzioni per altri browser verranno aggiunte man mano._

Una volta effettuato il download estrarre il contenuto in una directory a propria scelta.

1. Andare sulla repository e cliccare `Code -> Download ZIP`;
2. Estrarre il contenuto in una directory a propria scelta;
3. Aprire Chrome e andare su `Chrome -> Estensioni -> Gestisci estensioni`;
4. Cliccare su `Modalità sviluppatore`;
5. Cliccare `Carica estensione non pacchettizzata` e selezionare la directory (punto 2.) contenente l'estensione (`Netflix Chrome`);
6. Recarsi alla pagina <a href="https://www.netflix.com/browse/my-list">Netflix</a> nella sezione "La mia lista". Potrebbe essere necessario ricaricare la pagina;
7. Cliccare il bottone `Verifica scadenze dei film`;
8. In base alla quantità di elementi presenti nella lista e alla velocità di connessione la durata della ricerca può variare.

<p align="right">(<a href="#readme-top">torna all'inizio</a>)</p>

<!-- ROADMAP -->
## Roadmap

- [ ] Aggiungere il changelog
- [ ] Aggiungere una cache per non ricercare gli elementi di cui si conosce già la data di scadenza
- [ ] Aggiungere un tasto per permettere il download di un file .xls contenente l'intera lista di elementi
- [ ] Supporto multi-lingue
    - [ ] Inglese

<p align="right">(<a href="#readme-top">torna all'inizio</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
[product-screenshot]: images/screenshot.png
