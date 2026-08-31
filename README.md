# site-7e3

Voici le site de la classe des 7e3.

Le site de la classe de 7<sup>e</sup>3 (École Alsacienne, maîtresse Isabelle Mosnier) : Journal, Projets, Galerie, Contact.

Site statique HTML/CSS/JS, sans étape de build — prêt à déployer tel quel (Vercel, GitHub Pages, Netlify...).

## Structure

```
index.html       Journal (page d'accueil)
projets.html      Projets
galerie.html      Galerie
contact.html      Contact
css/style.css     Styles partagés (variables de couleur, typographie, mise en page)
js/main.js        Confirmation d'envoi du formulaire de contact
assets/           Logo de l'École Alsacienne
favicon.svg       Monogramme 7·3
```

## Charte graphique

Rouge École `#E4141E`, encre `#14161A`, craie `#F7F5F1`, ardoise `#6E7278`.
Titres en EB Garamond, textes en Work Sans, mentions en IBM Plex Mono.

Voir `project/Charte 7e3.dc.html` pour la charte complète (logo, motifs, règles d'usage, papeterie).

## À faire avant publication

- Remplacer les photos de substitution (zones rayées) par de vraies photos de la classe.
- Le formulaire de contact affiche une confirmation mais n'envoie rien : brancher un service d'envoi (ex. Formspree, une fonction serverless) ou passer par un `mailto:` si aucun backend n'est prévu.

## Origine

Ce site suit la charte graphique de la classe (`project/Charte 7e3.dc.html`, maquettée avec Claude Design — voir `chats/` pour la transcription de la conception). La mise en page et le contenu de ce site sont conçus indépendamment de la maquette `project/Site 7e3.dc.html` : seules les règles de la charte (couleurs, typographie, logo, motifs, ton, structure en 4 rubriques) sont reprises.

## Déploiement

Aucune étape de build n'est nécessaire : c'est un site statique. Sur Vercel, importer ce dépôt tel quel (aucune configuration de framework requise).
