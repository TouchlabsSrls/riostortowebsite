# Registro contenuti — Homepage Rio Storto

Tracciamento di testi e asset usati nella homepage dimostrativa.  
I commenti HTML (`CONTENT STATUS` / `IMAGE STATUS`) riflettono lo stesso stato.

Stati ammessi:

- `verificato da materiale precedente`
- `riscritto provvisorio`
- `asset temporaneo`
- `da confermare`
- `definitivo`

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
| Prodotti | Immagine di sezione | Fallback CSS | asset temporaneo | Sì | `html/assets/img/home/prodotti-rio-storto.webp` |
| Agriturismo | Soprattitolo, titolo, testo | Brief fase 2 | riscritto provvisorio | Sì | Testo pagina agriturismo (senza menu/orari inventati) |
| Agriturismo | Immagine | Fallback CSS | asset temporaneo | Sì | `html/assets/img/home/agriturismo-rio-storto.webp` |
| Fattoria didattica | Titolo e testo | Brief fase 2 | riscritto provvisorio | Sì | Attività e modalità reali |
| Fattoria didattica | Immagine | Fallback CSS | asset temporaneo | Sì | `html/assets/img/home/fattoria-didattica-rio-storto.webp` |
| Stagionalità | Testo editoriale generico | Brief fase 2 | riscritto provvisorio | Sì | Eventi/prodotti solo se confermati |
| Contatti | Messaggio pubblico senza dati inventati | Brief fase 2 | riscritto provvisorio | Sì | Indirizzo, telefono, email, orari, mappa, social |
| Contatti | Campi strutturali (indirizzo, tel, email, orari, mappa, social) | Commento HTML interno | da confermare | Sì | Valori reali da inserire nel markup |
| Footer | Nome azienda + link privacy/cookie | Bozza | riscritto provvisorio | Sì | Ragione sociale, P. IVA, privacy/cookie definitive |
| Logo | PNG ottimizzati header/footer | Logo cliente 2024 | verificato da materiale precedente | No | Eventuale PNG/SVG trasparente ufficiale |

## Note operative

1. I fallback fotografici sono gradienti e forme CSS: la homepage resta completa anche senza WebP.
2. Quando arriva un file in `html/assets/img/home/`, sostituisce automaticamente lo strato superiore dello slot (nessuna modifica HTML obbligatoria).
3. Non pubblicare come certi: date eventi, orari, prezzi, certificazioni, quantità di animali, menu, aperture, P. IVA.
4. Aggiornare questa tabella a ogni conferma del cliente.
