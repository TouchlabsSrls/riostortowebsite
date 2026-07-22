# Struttura file — Rio Storto

Questo documento descrive come è organizzato il repository e cosa va pubblicato sul server.

## Panoramica

```
RioStortoWebsite/
├── html/                 → SITO PUBBLICO (document root: httpdocs/html)
├── docker/               → Solo sviluppo locale
├── docs/                 → Documentazione (fuori dalla document root)
├── reference/            → Riferimenti visivi (fuori dalla document root)
├── source-assets/        → Originali non ottimizzati (fuori dalla document root)
├── scripts/              → Strumenti locali (fuori dalla document root)
├── docker-compose.yml    → Solo sviluppo locale
├── README.md             → Istruzioni di progetto
└── .gitignore
```

## Cosa viene pubblicato

Plesk distribuisce l’intero repository dentro `httpdocs/` e il dominio utilizza `httpdocs/html` come document root.

Il sito online è quindi servito **solo** da `html/`. Include:

- `index.html`, `404.html` e future pagine HTML
- `assets/css/` — fogli di stile
- `assets/js/` — JavaScript
- `assets/img/` — immagini ottimizzate effettivamente usate dal sito
- `assets/icons/` — favicon e icone
- `assets/fonts/` — font self-hosted (quando disponibili)
- `robots.txt`, `sitemap.xml`, `.htaccess` — se presenti e necessari

Le altre cartelle del repository (`docker/`, `docs/`, `reference/`, `source-assets/`, `scripts/`) restano in `httpdocs/` ma **fuori dalla document root** e non sono raggiungibili dal web.

### Contenuto attuale di `html/`

```
html/
├── index.html
├── 404.html
├── storia/
│   └── index.html              → /storia/
├── prodotti/
│   └── index.html              → /prodotti/
├── azienda/
│   ├── agricoltura/
│   │   └── index.html          → /azienda/agricoltura/
│   └── allevamento/
│       └── index.html          → /azienda/allevamento/
└── assets/
    ├── css/main.css
    ├── js/main.js
    ├── img/
    │   ├── logo-rio-storto-96.png
    │   ├── logo-rio-storto-192.png
    │   ├── home/               → fotografie homepage (webp/jpg)
    │   └── prodotti/           → fotografie pagina prodotti (webp/jpg)
    ├── icons/favicon.svg
    └── fonts/                  (vuota — font ancora da CDN in prototipo)
```

## Cosa resta fuori dalla document root

| Percorso | Scopo |
| --- | --- |
| `docker/` | Configurazione Nginx per ambiente di sviluppo |
| `docker-compose.yml` | Avvio container locale sulla porta 8086 |
| `docs/` | Contesto, direzione creativa, checklist contenuti |
| `reference/` | Screenshot, mockup, audit visivi |
| `source-assets/` | JPG/PNG originali, varianti non usate, export pesanti |
| `scripts/` | Script di ottimizzazione o utilità di sviluppo |
| `.gitignore` | Regole Git locali |

Queste cartelle sono presenti nel repository distribuito da Plesk in `httpdocs/`, ma non sono servite dal dominio perché la document root è impostata su `httpdocs/html`.

## Dove inserire nuovi file

### Fotografie originali

`source-assets/` — organizzare per cartelle tematiche, ad esempio:

```
source-assets/
├── logo/
├── hero/
├── agricoltura/
├── allevamento/
└── prodotti/
```

### Immagini ottimizzate per il web

Dopo l’ottimizzazione (JPEG/WebP/AVIF, dimensioni appropriate), inserire in:

`html/assets/img/`

Aggiornare i percorsi in HTML/CSS e verificare `width`/`height` o `aspect-ratio` per evitare layout shift.

### Nuove pagine

Creare sottocartelle in `html/` seguendo gli URL previsti, ad esempio:

```
html/storia/index.html
html/prodotti/index.html
html/agriturismo/index.html
```

I percorsi degli asset restano assoluti dalla root del sito: `/assets/css/main.css`, `/assets/js/main.js`, ecc.

### CSS e JavaScript

- CSS principale: `html/assets/css/main.css`
- JS principale: `html/assets/js/main.js`
- File aggiuntivi solo se la separazione migliora la manutenibilità; aggiornare i `<link>` e `<script>` nelle pagine.

### Font

1. Inserire i file in `html/assets/fonts/`
2. Dichiararli in `main.css` con `@font-face`
3. Rimuovere il caricamento da CDN in `index.html` prima della pubblicazione

### Riferimenti visivi

Screenshot, confronti con altri siti, output di audit: `reference/`

## Cosa non deve essere raggiungibile dal web

- Documentazione Markdown (`docs/`)
- File in `source-assets/` e `reference/`
- Configurazioni Docker
- File `.env`, chiavi private, credenziali
- Originali multimediali pesanti non ottimizzati
- PSD, AI, ZIP, video non compressi
- File temporanei, log, cache
- Configurazioni IDE (`.idea/`, `.vscode/`)

Questi elementi non devono trovarsi in `html/`. Se presenti altrove nel repository, restano fuori dalla document root `httpdocs/html`.

## Flusso consigliato per un nuovo asset

1. Ricevere l’originale → `source-assets/`
2. Ottimizzare per il web
3. Copiare la versione ottimizzata in `html/assets/img/` (o sottocartella)
4. Aggiornare HTML/CSS/JS con il nuovo percorso
5. Verificare in locale su http://localhost:8086
6. Pubblicare tramite SourceTree (commit/push) → Plesk Pull Updates → Deploy from Repository

## Pubblicazione su Plesk

Plesk distribuisce l’intero repository dentro `httpdocs/` e il dominio utilizza `httpdocs/html` come document root.

Flusso (modalità manuale):

1. Commit e push del repository tramite SourceTree
2. Su Plesk: **Pull Updates** → **Deploy from Repository**

## Note su `.cursor/`

Al momento **non esiste** una cartella `.cursor/` nel repository. Se verrà aggiunta in futuro, controllare se contiene regole progettuali utili prima di escluderla da Git.
