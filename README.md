# PoolParty-handleiding van de RCE

Deze PoolParty-handleiding helpt je om erfgoedbegrippen te maken, te beschrijven en te verbinden. De documentatie is bedoeld voor gebruikers die met PoolParty werken in samenwerking met de Rijksdienst voor het Cultureel Erfgoed (RCE).

**[Lees de handleiding](https://cultureelerfgoed.github.io/Poolparty-User-Documentation/)**

## Beginnen met PoolParty

De handleiding bevat een route voor beginners, oefeningen en uitleg bij veelgebruikte handelingen.

- [Je eerste concept](docs/2%20gebruikershandleiding/je-eerste-concept.md): maak een begrip, voeg een naam en een toelichting toe en controleer de relatie.
- [Een bestaand concept aanpassen](docs/2%20gebruikershandleiding/een-bestaand-concept-aanpassen.md): wijzig een naam, vul een toelichting aan en bekijk History.
- [Invoerafspraken](docs/2%20gebruikershandleiding/2.5%20invoerafspraken.md): kies het juiste veld voor voorkeursnamen, alternatieve namen en toelichtingen.
- [Kwaliteit controleren](docs/2%20gebruikershandleiding/2.10%20quality-report.md): lees meldingen uit Quality Report en bepaal je volgende actie.
- [SPARQL-voorbeelden](docs/5%20bijlagen/5.2%20sparql-queries.md): vraag labels en relaties op, filter op Nederlands en gebruik OPTIONAL voor gegevens die kunnen ontbreken.
- [Begrippenlijst](docs/6.%20glossary.md): zoek Nederlandse benamingen en Engelse schermnamen op.

Voor oefeningen heb je een PoolParty-account, toegang tot een oefenproject en bewerkrechten nodig. De beschikbare functies hangen af van jouw versie, rol en projectinstellingen.

## Wat staat er in deze repository?

| Bestand of map | Inhoud |
| --- | --- |
| `index.md` | De landingspagina en startroute. |
| `docs/2 gebruikershandleiding/` | Handelingen en beginnersoefeningen. |
| `docs/3 verdieping gebruikershandleiding/` | Verdieping over SKOS, projectkoppelingen en de API. |
| `docs/4 best-practices/` | Tips en pagina’s voor fouten en vragen. |
| `docs/5 bijlagen/` | Aanvullende bronnen en SPARQL-voorbeelden. |
| `docs/6. glossary.md` | De begrippenlijst. |
| `docs/afbeeldingen/` en `docs/icons/` | Afbeeldingen en pictogrammen. |
| `assets/css/styles.css` | Aanvullende opmaak, waaronder de landingspagina en mobiele weergave. |
| `_includes/` en `_layouts/` | Gedeelde onderdelen en paginasjablonen. |
| `_config.yml` | Instellingen voor de website. |
| `Gemfile` en `Gemfile.lock` | Afhankelijkheden voor het bouwen van de website. |
| `.github/workflows/pages.yml` | De workflow voor bouwen en publiceren op GitHub Pages. |

## Documentatie aanpassen

De pagina’s gebruiken Markdown en Jekyll. Bovenaan staat een instellingenblok. Een nieuwe pagina onder de gebruikershandleiding krijgt bijvoorbeeld:

```yaml
---
layout: home
title: Naam van jouw hoofdstuk
parent: Gebruikershandleiding
nav_order: 15
---
```

`parent` moet precies overeenkomen met de titel van de bovenliggende pagina. Kies een vrije `nav_order` binnen die groep. Behoud bestaande bestandsnamen waar mogelijk, zodat links blijven werken.

Houd bij het schrijven deze afspraken aan:

- Schrijf in het Nederlands, spreek de lezer aan met **je** en gebruik korte stappen.
- Gebruik **concept** voor het begrip en **naam** of **label** voor de benaming.
- Noem bij een veld of knop ook de Engelse schermnaam, bijvoorbeeld **voorkeursnaam (Preferred Label)**.
- Geef voorbeelden en vermeld of het oefenteksten of officiële definities zijn.
- Voeg bronnen toe en onderscheid SKOS-regels van aanvullende projectafspraken.
- Controleer interne links, afbeeldingen en de weergave op desktop en mobiel.

Gebruik voor een interne link in een websitepagina de Jekyll-linkvorm:

```liquid
[Invoerafspraken]({% link docs/2 gebruikershandleiding/2.5 invoerafspraken.md %})
```

Gebruik in deze README gewone Markdown-links. De README verschijnt op GitHub en is uitgesloten van de gebouwde website.

## Lokaal bekijken

De website gebruikt [Jekyll](https://jekyllrb.com/) en [Just the Docs](https://just-the-docs.github.io/just-the-docs/). De publicatieworkflow gebruikt Ruby 3.3. Installeer Ruby en Bundler voordat je lokaal bouwt; de lockfile vermeldt Bundler 2.5.23.

Voer vanuit de hoofdmap van de repository uit:

```shell
bundle install
bundle exec jekyll serve
```

Open daarna [de lokale website](http://localhost:4000/Poolparty-User-Documentation/). De gebouwde bestanden staan in `_site/`. Voor alleen een bouwcontrole gebruik je:

```shell
bundle exec jekyll build
```

## Publicatie

De [GitHub Actions-workflow](.github/workflows/pages.yml) bouwt en publiceert de website wanneer een wijziging in de ingestelde websitebestanden op `main` terechtkomt. Je kunt de workflow ook handmatig starten via **Actions**.

In **Settings > Pages** hoort de publicatiebron op **GitHub Actions** te staan. Controleer na een publicatie de workflowstatus en de live website. Een wijziging die alleen deze README raakt, start geen websitepublicatie.

## Bronnen en contact

Bekijk de [aanvullende bronnen](docs/5%20bijlagen/5.1%20doorverwijzingen-naar-aanvullende-bronnen.md) voor de RCE-kennisbank, Graphwise-documentatie, thesaurusdatasets en controles met SPARQL.

Heb je een vraag over PoolParty of deze handleiding? Mail de beheerders via [thesauri@cultureelerfgoed.nl](mailto:thesauri@cultureelerfgoed.nl). Vermeld jouw project en de stap waarbij je vastloopt.
