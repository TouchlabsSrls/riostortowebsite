# Azienda Agricola Rio Storto — Sito web

Sito statico HTML, CSS e JavaScript. In sviluppo locale viene servito tramite Docker/Nginx.

## Avvio locale

```bash
docker compose up -d
```

Apri nel browser:

**http://localhost:8086**

Per fermare i container:

```bash
docker compose down
```

## Cartella pubblica

La document root del sito è **`html/`**.

Contiene tutto ciò che viene servito online: HTML, CSS, JavaScript, immagini ottimizzate, icone, font e file pubblici.

## Pubblicazione su Plesk

Plesk distribuisce l’intero repository dentro `httpdocs/` e il dominio utilizza `httpdocs/html` come document root.

Flusso di pubblicazione (modalità manuale):

1. Verifica in locale che il sito funzioni su http://localhost:8086.
2. Commit e push del repository tramite SourceTree.
3. Su Plesk: **Pull Updates** → **Deploy from Repository**.

In questo modo:

- l’intero repository viene distribuito in `httpdocs/`;
- `html/` resta l’unica cartella servita pubblicamente;
- `docker/`, `docs/`, `reference/`, `source-assets/` e `scripts/` restano fuori dalla document root e non sono raggiungibili dal web.

## Struttura del repository

| Percorso | Contenuto |
| --- | --- |
| `html/` | Sito pubblico (document root: `httpdocs/html`) |
| `docker/` | Configurazione Nginx per sviluppo locale |
| `docs/` | Documentazione di progetto |
| `source-assets/` | Originali e file sorgente non ottimizzati |
| `reference/` | Screenshot e riferimenti visivi |
| `scripts/` | Script di supporto allo sviluppo |

Dettaglio completo in [`docs/FILE_STRUCTURE.md`](docs/FILE_STRUCTURE.md).

## Git

Il repository è gestito manualmente tramite SourceTree. Non sono previsti workflow automatici in questo README.
