# Contesto di progetto — Azienda Agricola Rio Storto

## Contesto dell’azienda

Rio Storto è una storica azienda agricola a conduzione familiare. L’identità riunisce agricoltura, allevamento, trasformazione delle materie prime e accoglienza.

Aree di attività:

- agricoltura
- allevamento
- trasformazione
- formaggi, carni, salumi
- gelato e prodotti da forno
- produzioni stagionali e idee regalo
- fattoria didattica
- agriturismo
- eventi e attività per famiglie e gruppi

L’agriturismo non è un ristorante indipendente: è il punto di arrivo naturale del percorso che parte dai campi e dagli allevamenti.

## Obiettivi del sito

1. Comunicare genuinità, filiera interna, territorialità e accoglienza.
2. Presentare l’azienda come un ecosistema unico (terra → animali → laboratori → tavola).
3. Orientare i visitatori verso storia, azienda, prodotti, fattoria didattica, agriturismo e contatti.
4. Restare luminoso, elegante e familiare, senza toni e-commerce o folkloristici.

## Architettura futura

Percorsi previsti (non ancora sviluppati in questa fase):

| Percorso | Contenuto |
| --- | --- |
| `/` | Homepage (riferimento grafico e strutturale) |
| `/storia/` | La nostra storia |
| `/azienda/allevamento/` | Allevamento |
| `/azienda/agricoltura/` | Agricoltura |
| `/prodotti/` | I nostri prodotti |
| `/fattoria-didattica/` | Fattoria didattica |
| `/agriturismo/` | Agriturismo |
| `/contatti/` | Contatti |
| `/privacy/` | Privacy policy |
| `/cookie/` | Cookie policy |

## Valori del brand

Genuinità, naturalezza, artigianalità, stagionalità, filiera interna, territorialità, accoglienza, serenità, sapore di casa, rapporto diretto con animali e terra, conduzione familiare, trasparenza sul processo produttivo.

## Indicazioni tecniche

- Stack: HTML, CSS, JavaScript vanilla.
- Serving: Docker + Nginx, porta `8086`.
- Nessun framework JS, nessun build system, nessuna dipendenza npm.
- Asset pubblici in `html/assets/` (`css`, `js`, `img`, `icons`, `fonts`).
- Originali e sorgenti in `source-assets/`; documentazione in `docs/`.
- Logo ottimizzato online: `html/assets/img/logo-rio-storto-96.png` e `-192.png`.
- Font di prototipo: Fraunces + DM Sans (da ospitare localmente prima della pubblicazione).
- Non modificare Docker/Nginx se non strettamente necessario.

## Regole da mantenere durante lo sviluppo

1. Non inventare dati aziendali (indirizzi, orari, P. IVA, eventi, social).
2. Usare placeholder espliciti (`[DA CONFERMARE]`, `data-placeholder`) dove mancano i contenuti.
3. Non copiare layout o codice da altri siti.
4. Non trasformare il sito in e-commerce (niente prezzi, carrello, “acquista”).
5. Non dichiarare completate funzionalità future (video hero, pagine interne, prenotazioni).
6. Preferire HTML semantico, accessibilità e performance.
7. Mantenere la homepage come riferimento estetico e strutturale.
8. Evitare cliché “agriturismo template”, verdi saturi dominanti, ombre pesanti, card ripetitive.
9. Il bordeaux del logo è accento identitario, non colore dominante di pagina.
10. Documentare i contenuti mancanti in `docs/CONTENT_NEEDED.md`.
