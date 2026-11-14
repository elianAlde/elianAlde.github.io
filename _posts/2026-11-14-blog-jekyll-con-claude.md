---
title: "Come ho aggiunto un blog al mio portfolio con Jekyll"
description: "Da un blog in PHP standalone a una sezione blog del mio portfolio generata da Jekyll"
lang: it
---

Da tempo volevo affiancare al portfolio uno spazio dove scrivere di progetti, esperimenti e cose che imparo. Avevo già un piccolo blog in PHP chiuso in una cartella, ma non era mai finito online. In questo articolo racconto come l'ho integrato nel sito lavorando con **Claude Code**, l'assistente di programmazione di Anthropic, e perché alla fine la soluzione giusta non è stata PHP ma **Jekyll**.

## Il punto di partenza

Il mio vecchio blog era volutamente minimale:

- ogni articolo era un file Markdown dentro una cartella `articles/`;
- `index.php` leggeva la cartella e costruiva l'elenco degli articoli;
- `article.php` convertiva il Markdown in HTML con un parser scritto a mano;
- un `.htaccess` rendeva gli indirizzi puliti, tipo `/blog/titolo-articolo`.

L'idea di scrivere in Markdown mi piaceva, e l'ho tenuta. Il problema era un altro.

## Il problema: GitHub Pages non esegue PHP

Il portfolio è ospitato su **GitHub Pages**, che pubblica solo file statici: HTML, CSS, JavaScript e immagini. Niente PHP e niente `.htaccess`. Quando ho chiesto a Claude se avesse senso integrare il blog così com'era, la prima cosa che mi ha fatto notare è proprio questa: su GitHub Pages quei file non sarebbero stati eseguiti, ma solo scaricati come testo.

## La soluzione: Jekyll, già integrato in GitHub Pages

GitHub Pages ha un vantaggio poco conosciuto: **compila Jekyll in automatico**. Basta aggiungere al repository un file `_config.yml` e qualche layout, e a ogni push GitHub genera da solo le pagine HTML. Non serve installare niente sul server né configurare una pipeline.

Rispetto al vecchio blog cambia poco nel modo di scrivere e molto nel risultato:

- gli articoli restano file Markdown, ora in `_posts/`, con il nome nel formato `AAAA-MM-GG-titolo.md`;
- in cima a ogni file c'è un piccolo blocco di intestazione (*front matter*) con titolo, descrizione e lingua;
- il Markdown viene convertito da un parser vero (kramdown), con evidenziazione del codice;
- le pagine generate sono HTML statico, quindi **indicizzabili da Google**.

La configurazione è di poche righe:

```yaml
markdown: kramdown
kramdown:
  input: GFM
  syntax_highlighter: rouge

permalink: /blog/:title/

defaults:
  - scope:
      path: ""
      type: posts
    values:
      layout: post
```

`permalink` mi ha permesso di mantenere gli stessi indirizzi puliti che prima ottenevo con `.htaccess`, mentre `defaults` assegna automaticamente il layout degli articoli a tutto quello che sta in `_posts/`.

## Un blog che sembra parte del sito

Non volevo un blog dall'aspetto diverso dal resto del portfolio. Con Claude abbiamo quindi estratto la barra di navigazione in un componente riutilizzabile (`_includes/nav.html`) e creato due layout:

- `default.html`, la struttura comune: stessi font, stessi colori, stessa barra in alto;
- `post.html`, che aggiunge data, lingua e titolo dell'articolo.

In questo modo il blog eredita gratis anche due funzioni che avevo appena aggiunto al portfolio:

- **la modalità chiara/scura**, con il pulsante sole/luna, che segue le preferenze del sistema;
- **il cambio lingua italiano/inglese** per l'interfaccia.

Per gli articoli ho scelto un compromesso semplice: ognuno è scritto in una sola lingua, indicata nell'intestazione e mostrata con un piccolo badge. Tradurre ogni post avrebbe raddoppiato il lavoro di scrittura, e per un blog personale non ne vale la pena.

Infine, nella home del portfolio c'è ora una sezione che mostra gli ultimi articoli, generata anche lei da Jekyll a ogni pubblicazione.

## Come si aggiunge un nuovo articolo

Da oggi, pubblicare un post è questione di tre passaggi:

1. creare un file in `_posts/`, ad esempio `2026-12-01-nuovo-articolo.md`;
2. scrivere in cima il front matter con `title`, `description` e `lang`;
3. fare commit e push: GitHub Pages ricostruisce il sito da solo.

Questo è il primo articolo. Il prossimo, probabilmente, parlerà della mia tesi: localizzare il bestiame con un drone e dei beacon Bluetooth Low Energy.
