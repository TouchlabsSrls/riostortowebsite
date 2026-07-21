# Direzione creativa — Rio Storto

## Direzione artistica

Il sito deve risultare caldo, elegante, raffinato ma accessibile. Agricolo senza folklorismo; artigianale senza apparire antiquato; naturale senza cliché “eco”; familiare senza infantilismo.

Riferimento estetico esterno (solo atmosfera, non da copiare): calore tonale, tipografia morbida, grande respiro, eleganza semplice, rapporto foto/testo/spazio vuoto.

Rio Storto deve avere un’identità propria.

## Palette (CSS custom properties)

| Token | Uso |
| --- | --- |
| `--color-ivory` | Sfondo principale |
| `--color-cream` / `--color-surface` | Superfici e pannelli |
| `--color-anthracite` / `--color-text` | Testo |
| `--color-bordeaux` | Accento identitario limitato (CTA, eyebrow, dettagli) |
| `--color-sage` | Secondario desaturato |
| `--color-terracotta` | Warm accent tenue |
| `--color-sky` | Piccolo richiamo al logo |
| `--color-beige` / `--color-sand` | Aree secondarie |

La pagina resta prevalentemente luminosa. Il bordeaux non deve dominare.

## Tipografia

- Display / titoli: **Fraunces** (`--font-display`)
- Corpo / UI: **DM Sans** (`--font-body`)
- Fallback: Georgia / system-ui
- Titoli grandi ma non aggressivi, interlinea ariosa, gerarchia chiara
- Eyebrow piccoli, uso raro del maiuscolo (solo etichette)
- Prima della pubblicazione: self-host in `/assets/fonts/`

## Logo

- Online: `html/assets/img/logo-rio-storto-96.png`, `logo-rio-storto-192.png`
- Sorgenti: `source-assets/logo/` (JPG originale, PNG alta risoluzione, varianti non usate)
- Forma circolare con bordeaux, verde, azzurro, nero, bianco
- Non ridisegnare né reinterpretare
- In header sostituisce la voce “Home”
- Finché assente: placeholder testuale/discreto già predisposto in markup

## Stile fotografico

- Immagini reali di campagna, animali, laboratori, tavola, accoglienza
- Proporzioni variate (verticale / orizzontale)
- Niente stock generici, niente immagini palesemente AI
- Hero predisposta a video MP4/WebM + poster + fallback grafico
- Lazy loading sotto la piega quando arriveranno le foto

## Componenti

- Header leggero, integrato nella hero; sfondo leggibile dopo scroll
- Dropdown accessibile “L’azienda”
- Menu mobile completo (focus, Escape, blocco scroll)
- Bottoni primari/secondari e text-link editoriali
- Sezioni narrative (non card commerciali ripetute)
- Linee sinuose sottili (richiamo al “rio”, non tema acquatico)
- Micro-animazioni di ingresso e hover discreti
- Placeholder stagionali e contatti chiaramente marcati

## Elementi da evitare

- Template generici da agriturismo
- Texture legno invadenti, juta, country americano
- Icone agricole da stock
- Font calligrafici poco leggibili
- Verdi saturi predominanti / pagine dominate dal bordeaux
- Ombre pesanti, bordi molto arrotondati
- Card tutte uguali, effetto e-commerce
- Overlay nero pesanti, animazioni vistose
- Layout aziendale freddo

## Responsive

Progettare realmente per:

- Desktop 1440px
- Laptop 1280px
- Tablet 768–1024px
- Smartphone 390px
- Piccoli 320px

Su mobile: niente overflow orizzontale, CTA cliccabili, menu accessibile, sezioni distanziate, decorazioni non invasive.
