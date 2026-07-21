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
| Contatti | Messaggio pubblico senza dati inventati | Brief fase 2 | riscritto provvisorio | Sì | Indirizzo, telefono, email, orari, mappa, social |
| Contatti | Campi strutturali (indirizzo, tel, email, orari, mappa, social) | Commento HTML interno | da confermare | Sì | Valori reali da inserire nel markup |
| Footer | Nome azienda + link privacy/cookie | Bozza | riscritto provvisorio | Sì | Ragione sociale, P. IVA, privacy/cookie definitive |
| Logo | PNG ottimizzati header/footer | Logo cliente 2024 | verificato da materiale precedente | No | Eventuale PNG/SVG trasparente ufficiale |

## Pagina `/storia/`

| Sezione | Testo o immagine | Fonte | Stato | Conferma cliente necessaria | Note |
| --- | --- | --- | --- | --- | --- |
| Hero interna | Soprattitolo, H1, introduzione | Brief pagina storia | riscritto provvisorio | Sì | — |
| Origine del nome | Titolo e testo sul corso d’acqua di risorgiva | Brief pagina storia | riscritto provvisorio | Sì | Origine del nome: da verificare definitivamente con il cliente |
| Timeline | Quattro tappe (radici → oggi), senza anni inventati | Brief pagina storia | riscritto provvisorio | Sì | “Prima del 1930” e “quattro generazioni”: da verificare definitivamente con il cliente |
| Filiera narrativa | Terra → Accoglienza + testo | Brief pagina storia | riscritto provvisorio | Sì | — |
| Valori | Genuinità, Stagionalità, Cura, Accoglienza | Brief pagina storia | riscritto provvisorio | Sì | — |
| Citazione editoriale | Frase non attribuita | Brief pagina storia | riscritto provvisorio | Sì | Non è una testimonianza personale |
| CTA | Link ad agricoltura / allevamento | Brief | riscritto provvisorio | — | Destinazioni 404 fino al prossimo ciclo |
| Immagini | Nessuna fotografia dedicata in pagina | — | — | Sì | Mancanti: fotografia storica della famiglia e dell’azienda |
| Media editoriale sotto hero | `hero-rio-storto.webp/.jpg` riusata come atmosfera | Asset homepage | asset temporaneo | Sì | Sostituire con foto storica dedicata; contenitore `.editorial-media` con fallback CSS |
| Nomi e date | Non presenti | — | da confermare | Sì | Non ancora forniti dal cliente |
| OG image | `hero-rio-storto.jpg` (provvisoria) | Asset homepage | asset temporaneo | Sì | Sostituire con visual dedicato quando disponibile |

## Note operative

1. I fallback fotografici sono gradienti e forme CSS: le pagine restano complete anche senza WebP.
2. Quando arriva un file in `html/assets/img/home/`, sostituisce automaticamente lo strato superiore dello slot (nessuna modifica HTML obbligatoria).
3. Non pubblicare come certi: date eventi, orari, prezzi, certificazioni, quantità di animali, menu, aperture, P. IVA, nomi dei familiari.
4. Aggiornare questa tabella a ogni conferma del cliente.
