# Registro contenuti — Rio Storto

Tracciamento di testi e asset usati nelle pagine dimostrative.  
I commenti HTML (`CONTENT STATUS` / `IMAGE STATUS`) riflettono lo stesso stato.

Stati ammessi:

- `verificato da materiale precedente`
- `riscritto provvisorio`
- `asset temporaneo`
- `da confermare`
- `definitivo`

## Homepage

| Sezione | Testo o immagine | Fonte | Stato | Conferma cliente necessaria | File definitivo richiesto |
| --- | --- | --- | --- | --- | --- |
| Hero | Titolo e lead | Brief creativo / bozza approvata | verificato da materiale precedente | No (salvo rifiniture) | — |
| Hero | Immagine atmosferica (`hero-rio-storto.webp` / `.jpg`) | Asset temporaneo in `html/assets/img/home/` | asset temporaneo | Sì | Fotografia reale Rio Storto (sostituzione futura) |
| Introduzione / Storia | Soprattitolo, titolo, testo (quattro generazioni, rio di risorgiva, prima del 1930) | Brief cliente (fase dimostrativa) | riscritto provvisorio | Sì | Testo definitivo storia |
| Introduzione / Storia | Immagine | Fallback CSS | asset temporaneo | Sì | `html/assets/img/home/storia-rio-storto.webp` |
| Filiera | Quattro momenti (Coltiviamo… Accogliamo) | Bozza homepage | riscritto provvisorio | Sì (tono e dettaglio) | — |
| Agricoltura | Titolo e testo | Brief fase 2 | riscritto provvisorio | Sì | Testo pagina agricoltura |
| Agricoltura | Immagine atmosferica (`agricoltura-rio-storto.webp` / `.jpg`) | Asset temporaneo in `html/assets/img/home/` | asset temporaneo | Sì | Fotografia reale Rio Storto (sostituzione futura) |
| Allevamento | Titolo e testo | Brief fase 2 | riscritto provvisorio | Sì | Testo pagina allevamento |
| Allevamento | Immagine atmosferica (`allevamento-rio-storto.webp` / `.jpg`) | Asset temporaneo in `html/assets/img/home/` | asset temporaneo | Sì | Fotografia reale Rio Storto (sostituzione futura) |
| Prodotti | Titolo e testo filiera | Brief fase 2 | riscritto provvisorio | Sì | Testo pagina prodotti |
| Prodotti | Categorie: Formaggi, Carni, Gelato, Forno, Idee regalo, Produzioni stagionali | Brief fase 2 | riscritto provvisorio | Sì | Elenco ufficiale categorie |
| Prodotti | Categoria Salumi | Rimossa dal pubblico; nota interna nel codice | da confermare | Sì | Conferma se reinserire |
| Prodotti | Immagine atmosferica (`prodotti-rio-storto.webp` / `.jpg`) | Asset temporaneo in `html/assets/img/home/` | asset temporaneo | Sì | Fotografia reale Rio Storto (stesso nome file) |
| Agriturismo | Soprattitolo, titolo, testo | Brief fase 2 | riscritto provvisorio | Sì | Testo pagina agriturismo (senza menu/orari inventati) |
| Agriturismo | Immagine atmosferica (`agriturismo-rio-storto.webp` / `.jpg`) | Asset temporaneo in `html/assets/img/home/` | asset temporaneo | Sì | Fotografia reale Rio Storto (stesso nome file) |
| Fattoria didattica | Titolo e testo | Brief fase 2 | riscritto provvisorio | Sì | Attività e modalità reali |
| Fattoria didattica | Immagine atmosferica (`fattoria-didattica-rio-storto.webp` / `.jpg`) | Asset temporaneo in `html/assets/img/home/` | asset temporaneo | Sì | Fotografia reale Rio Storto (stesso nome file) |
| Stagionalità | Testo editoriale generico | Brief fase 2 | riscritto provvisorio | Sì | Eventi/prodotti solo se confermati |
| Contatti | Messaggio pubblico + link a /contatti/ | Brief fase 2 | riscritto provvisorio | Sì | Pagina /contatti/ attiva |
| Contatti | Campi strutturali (indirizzo, tel, email, orari, mappa, social) | Commento HTML interno | da confermare | Sì | Dati pubblicati in /contatti/; orari e social ancora da confermare |
| Footer | Nome azienda + link privacy/cookie | Bozza | riscritto provvisorio | Sì | Ragione sociale, P. IVA, privacy/cookie definitive |
| Logo | PNG ottimizzati header/footer | Logo cliente 2024 | verificato da materiale precedente | No | Eventuale PNG/SVG trasparente ufficiale |

## Pagina `/storia/`

| Sezione | Testo o immagine | Fonte | Stato | Conferma cliente necessaria | Note |
| --- | --- | --- | --- | --- | --- |
| Hero interna | Soprattitolo, H1, introduzione | Brief pagina storia | riscritto provvisorio | Sì | — |
| Origine del nome | Titolo e testo sul corso d’acqua di risorgiva | Brief pagina storia | riscritto provvisorio | Sì | Origine del nome: da verificare definitivamente con il cliente |
| Timeline | Quattro tappe (radici → oggi), senza anni inventati | Brief pagina storia | riscritto provvisorio | Sì | “Prima del 1930” e “quattro generazioni”: da verificare definitivamente con il cliente |
| Rio Storto oggi | Sezione breve: testo filiera + riga valori | Brief semplificazione | riscritto provvisorio | Sì | Sostituisce percorso a 5 passaggi e griglia valori |
| Valori | Riga editoriale Genuinità · Stagionalità · Cura · Accoglienza | Brief semplificazione | riscritto provvisorio | Sì | Lista semantica `.values-line` |
| CTA | Titolo da citazione + link agricoltura/allevamento | Brief semplificazione | riscritto provvisorio | — | Destinazioni /azienda/agricoltura/ e /azienda/allevamento/ attive |
| Immagini | Nessuna fotografia dedicata in pagina | — | — | Sì | Mancanti: fotografia storica della famiglia e dell’azienda |
| Media editoriale sotto hero | `hero-rio-storto.webp/.jpg` riusata come atmosfera | Asset homepage | asset temporaneo | Sì | Sostituire con foto storica dedicata; contenitore `.editorial-media` con fallback CSS |
| Nomi e date | Non presenti | — | da confermare | Sì | Non ancora forniti dal cliente |
| OG image | `hero-rio-storto.jpg` (provvisoria) | Asset homepage | asset temporaneo | Sì | Sostituire con visual dedicato quando disponibile |

## Pagina `/azienda/agricoltura/`

| Sezione | Testo o immagine | Fonte | Stato | Conferma cliente necessaria | Note |
| --- | --- | --- | --- | --- | --- |
| Hero | H1, intro, foto `agricoltura-rio-storto` | Brief | riscritto provvisorio / asset temporaneo | Sì | Foto atmosferica temporanea |
| Media secondaria | `hero-rio-storto.webp/.jpg` tra intro terra e ciclo stagionale | Asset homepage | asset temporaneo | Sì | Funzione: ampia atmosfera di campi/corso d’acqua; crop distinto dalla hero home (sinistra/centro, non destra) |
| Lavoro nei campi | Due paragrafi editoriali | Brief | riscritto provvisorio | Sì | — |
| Sequenza stagionale | Osservare / Coltivare / Raccogliere / Ricominciare | Brief | riscritto provvisorio | Sì | Volutamente generica, senza mesi/colture |
| Filiera collegata | Testo + foraggi per mucche | Brief + sito precedente | recuperato dal sito precedente — da confermare con il cliente | Sì | Foraggi, destinazione, formulazione |
| Continuità | Fascia breve | Brief | riscritto provvisorio | Sì | — |
| CTA | Link allevamento + prodotti | Brief | riscritto provvisorio | — | `/prodotti/` attiva |

## Pagina `/azienda/allevamento/`

| Sezione | Testo o immagine | Fonte | Stato | Conferma cliente necessaria | Note |
| --- | --- | --- | --- | --- | --- |
| Hero | H1, intro, foto `allevamento-rio-storto` | Brief | riscritto provvisorio / asset temporaneo | Sì | Foto atmosferica temporanea |
| Presenza quotidiana | Due paragrafi | Brief | riscritto provvisorio | Sì | Nessuna certificazione |
| Tre principi | Alimentazione, attenzione, origine | Brief | riscritto provvisorio | Sì | Relazione foraggi/mucche da confermare |
| Latte e carne | Materie prime | Sito precedente | recuperato dal sito precedente — da confermare con il cliente | Sì | Disponibilità e formulazione |
| Media secondaria (origine → prodotto) | `prodotti-rio-storto.webp/.jpg` nel blocco “Dall’origine al prodotto” | Asset homepage | asset temporaneo | Sì | Funzione: ponte narrativo verso trasformazione/lavorazioni; non documentazione dei prodotti reali; layout split (immagine sopra su mobile, affiancata su desktop). Non riusa `hero-rio-storto` |
| Mucche in allevamento | Presenza implicita nei testi foraggi/foto | Sito precedente | recuperato dal sito precedente — da confermare con il cliente | Sì | Non inventare razze o quantità |
| Campi e animali | Collegamento ad agricoltura | Brief | riscritto provvisorio | Sì | — |
| CTA | Prodotti + Storia | Brief | riscritto provvisorio | — | `/prodotti/` attiva |

## Pagina `/prodotti/`

| Sezione | Testo o immagine | Fonte | Stato | Conferma cliente necessaria | Note |
| --- | --- | --- | --- | --- | --- |
| Hero | H1, intro, foto `prodotti-rio-storto` | Brief pagina prodotti | riscritto provvisorio / asset temporaneo | Sì | Fotografia atmosferica temporanea (tavola); non documentazione catalogo |
| Introduzione | Due colonne editoriali | Brief | riscritto provvisorio | Sì | — |
| Categorie pubbliche | Formaggi, Carni, Gelato, Prodotti da forno, Idee regalo, Produzioni stagionali | Brief + homepage | riscritto provvisorio | Sì | Mosaico editoriale, non schede e-commerce; senza link a pagine categoria |
| Media Formaggi | `formaggi-rio-storto-temporanea.webp/.jpg` nel blocco principale del mosaico | source-assets → `html/assets/img/prodotti/` | asset temporaneo | Sì | Fotografia atmosferica temporanea generata; non rappresenta prodotti reali specifici Rio Storto; sostituire con fotografia autentica del cliente |
| Media Prodotti da forno | `prodotti-da-forno-rio-storto-temporanea.webp/.jpg` nel blocco largo dedicato | source-assets → `html/assets/img/prodotti/` | asset temporaneo | Sì | Fotografia atmosferica temporanea generata; non rappresenta prodotti reali specifici Rio Storto; sostituire con fotografia autentica del cliente |
| Categoria Salumi | Non pubblicata | Materiale progettuale | da confermare | Sì | Salumificio non stabilmente in produzione; non annunciare aperture o disponibilità |
| Latte | Menzionato in testi Formaggi/Gelato e percorso | Sito precedente | recuperato dal sito precedente — da confermare con il cliente | Sì | Non elencare varietà |
| Carne | Menzionata in categoria Carni | Sito precedente | recuperato dal sito precedente — da confermare con il cliente | Sì | Nessun taglio/specie inventato |
| Percorso produzione | Origine / Cura / Trasformazione / Stagionalità | Brief | riscritto provvisorio | Sì | Compatto; distinto dalla timeline homepage |
| Disponibilità | Fascia stagionale + link Contatti | Brief | riscritto provvisorio | Sì | Formulazione neutra; assortimento da definire con il cliente |
| Idee regalo / confezioni | Solo testo editoriale | Brief | riscritto / da documentare | Sì | Documentare proposte e confezioni reali quando disponibili |
| Foto per categoria | Formaggi e forno con atmosfere temporanee; altre categorie tipografiche | Asset temporanei | asset temporaneo | Sì | Servono fotografie reali dedicate delle produzioni Rio Storto |
| Navigazione correlata | Agricoltura + Allevamento | Brief | — | — | Componente `.related-navigation` |
| OG image | `prodotti-rio-storto.jpg` | Asset homepage | asset temporaneo | Sì | — |

## Pagina `/contatti/`

| Sezione | Testo o immagine | Fonte | Stato | Conferma cliente necessaria | Note |
| --- | --- | --- | --- | --- | --- |
| Hero | H1, intro, foto `hero-rio-storto` (crop distinto dalla home) | Brief | riscritto / asset temporaneo | Sì | Sostituire con foto reale ingresso/sede |
| Ragione sociale | Società Agricola Storica Rio Storto di Ferro Lucia & C. S.A.S. | Sito precedente | recuperato dal sito precedente — da confermare con il cliente | Sì | — |
| Indirizzo | Via Pila 27/C, 35012 Camposampiero (PD) | Sito precedente | recuperato dal sito precedente — da confermare con il cliente | Sì | — |
| P.IVA / C.F. | 05100260289 | Sito precedente | recuperato dal sito precedente — da confermare con il cliente | Sì | — |
| REA | PD 443079 | Sito precedente | recuperato dal sito precedente — da confermare con il cliente | Sì | — |
| PEC | soc.agr.amabile.ferro.lucia.sas@pec.it | Sito precedente | recuperato dal sito precedente — da confermare con il cliente | Sì | Solo area “Comunicazioni legali”, non contatto principale |
| Telefono | 392 395 4176 / tel:+393923954176 | Materiali pubblici recenti | dato pubblico recuperato — da confermare con il cliente prima della pubblicazione definitiva | Sì | — |
| Email | ff.eferro@gmail.com | Materiali pubblici recenti | dato pubblico recuperato — da confermare con il cliente prima della pubblicazione definitiva | Sì | — |
| Orari di apertura | Non pubblicati | — | da verificare | Sì | Esclusi volutamente in questo ciclo |
| WhatsApp | Non pubblicato | — | da verificare | Sì | Non inventare canale |
| Social Instagram / Facebook | Non pubblicati | — | da confermare | Sì | URL non presenti nel progetto; non inventati |
| Indicazioni | Link Google Maps search (no iframe) | Brief | — | — | Via Pila 27/C Camposampiero |
| Temi informativi | Rimossi nella semplificazione strutturale | — | — | — | La pagina Contatti non elenca più i motivi di contatto |
| Come raggiungerci (pannello) | Fascia salvia compatta con link Maps | Brief bilanciamento | — | — | Azione Maps fuori dalla directory; senza mappa/iframe |
| Dati societari in footer | Ragione sociale, P.IVA/CF, REA, link PEC (solo etichetta) | Sito precedente | recuperato dal sito precedente — da confermare con il cliente | Sì | In `.site-footer__company` su tutte le pagine; PEC non mostrata per esteso |
| Struttura pagina | Hero + directory + fascia indicazioni + footer | Brief bilanciamento | — | — | Nessun blocco legale autonomo prima del footer |
| Modulo di contatto | Non inserito | — | rimandato | Sì | Richiede definizione del destinatario, gestione SMTP/API, privacy e protezione antispam |
| Form | — | — | — | — | Modulo di contatto non inserito: richiede definizione del destinatario, gestione SMTP/API, privacy e protezione antispam |

## Pagina `/fattoria-didattica/`

| Sezione | Testo o immagine | Fonte | Stato | Conferma cliente necessaria | Note |
| --- | --- | --- | --- | --- | --- |
| Hero | Soprattitolo, H1, intro, link Contatti | Brief pagina fattoria | riscritto provvisorio | Sì | Nessuna durata, prezzo o prenotazione |
| Hero media | `fattoria-didattica-rio-storto.webp/.jpg` | Asset homepage | asset temporaneo | Sì | Fotografia atmosferica temporanea; non documenta un’attività specifica Rio Storto |
| Introduzione | Titolo + testo + accento tipografico | Brief | riscritto provvisorio | Sì | — |
| Percorso scoperta | Tre momenti (animali / natura e campi / origine del cibo) | Brief | riscritto provvisorio | Sì | Concetti generali; non elenco laboratori |
| Fascia sensoriale | “Vedere. Toccare. Ascoltare. Domandare.” | Brief | riscritto provvisorio | Sì | — |
| Per chi | Famiglie / Scuole / Gruppi + nota modalità | Brief | riscritto provvisorio | Sì | Nessun pacchetto, programma o tariffa |
| Contatto | Conversazione → Contatti + link agricoltura/allevamento | Brief | riscritto provvisorio | — | Nessun form, calendario o prenotazione online |
| Attività / laboratori specifici | Non pubblicati | — | da confermare | Sì | Elenco laboratori da confermare |
| Fasce d’età | Non pubblicate | — | da confermare | Sì | — |
| Prezzi | Non pubblicati | — | da confermare | Sì | — |
| Durata e calendario | Non pubblicati | — | da confermare | Sì | Disponibilità da definire con l’azienda |
| Modalità scuole e gruppi | Solo testo generico | Brief | da confermare | Sì | Dettaglio operativo da definire |
| Accessibilità | Non dichiarata | — | da confermare | Sì | Non inventare accessibilità completa |
| Prenotazione | Non implementata | — | rimandato | Sì | Solo contatto diretto |
| Percorsi naturalistici | Non descritti come completati | — | evoluzione futura | Sì | Non presentare come servizio esistente |
| QR code | Non presenti | — | evoluzione futura | Sì | — |
| Virtual tour | Non presente | — | evoluzione futura | Sì | — |
| Video autentico | Non inserito | — | da produrre | Sì | Futuro clip 8–15 s: bambini e adulti in esperienza, animali, campi/natura, gesti reali, luce naturale; muto o audio opzionale; con poster; non autoplay se prefers-reduced-motion; compresso; non sostituisce testi |
| Fotografie reali | Solo atmosfera temporanea in hero | Asset temporaneo | asset temporaneo | Sì | Servono foto reali di attività + eventuali dettagli ravvicinati |
| OG image | `fattoria-didattica-rio-storto.jpg` | Asset homepage | asset temporaneo | Sì | — |

### Informazioni recuperate dal sito precedente (da confermare)

1. Produzione di latte — `recuperato dal sito precedente — da confermare con il cliente`
2. Produzione di carne — `recuperato dal sito precedente — da confermare con il cliente`
3. Presenza di mucche nell’allevamento — `recuperato dal sito precedente — da confermare con il cliente`
4. Utilizzo di foraggi coltivati dall’azienda per l’alimentazione delle mucche — `recuperato dal sito precedente — da confermare con il cliente`

Non utilizzati perché non verificati: ettari, razze, quantità animali, certificazioni, claim assoluti di sostenibilità o benessere.

## Note operative

1. I fallback fotografici sono gradienti e forme CSS: le pagine restano complete anche senza WebP.
2. Quando arriva un file in `html/assets/img/home/`, sostituisce automaticamente lo strato superiore dello slot (nessuna modifica HTML obbligatoria).
3. Non pubblicare come certi: date eventi, orari, prezzi, certificazioni, quantità di animali, menu, aperture, P. IVA, nomi dei familiari.
4. Aggiornare questa tabella a ogni conferma del cliente.
