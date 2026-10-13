# Ma liste de pige

Un petit site pour les personnes qui t'ont pigé : elles entrent leur budget, un disque vinyle tourne et choisit un album de ta liste qui entre dans ce budget. Si la personne confirme qu'elle l'achète, l'album est retiré de la roue pour tout le monde.

## Les fichiers

- `index.html` : le site (tu n'as pas besoin d'y toucher)
- `config.js` : **ta liste d'albums** et la configuration Firebase
- `README.md` : ce guide

## 1. Mettre tes albums

Ouvre `config.js` et remplace les albums d'exemple. Pour chaque album :

```js
{
  id: "album-1",            // unique, ne le change plus une fois le site partagé
  titre: "Nom de l'album",
  artiste: "Nom de l'artiste",
  prix: 24.99,              // avec un point, pas une virgule
  acheter: "https://...",   // lien pour l'acheter
  ecouter: "https://...",   // lien Spotify, YouTube, Bandcamp...
  pochette: "https://..."   // optionnel : image de la pochette
},
```

N'oublie pas la virgule entre chaque album.

## 2. Mettre le site sur GitHub Pages

1. Crée un compte sur github.com si ce n'est pas déjà fait.
2. Clique sur **New repository**, donne-lui un nom (ex. `ma-pige`), coche **Public**, puis **Create repository**.
3. Clique sur **uploading an existing file** et glisse les trois fichiers. Clique sur **Commit changes**.
4. Va dans **Settings** puis **Pages**. Sous *Branch*, choisis `main` et `/ (root)`, puis **Save**.
5. Après une minute ou deux, ton site sera à l'adresse `https://ton-nom.github.io/ma-pige/`.

À ce stade, le site fonctionne en **mode test** : les albums cochés restent seulement dans le navigateur de la personne. Pour que tout le monde voie les mêmes albums cochés, fais l'étape 3.

## 3. Partager les albums cochés avec Firebase (gratuit)

GitHub Pages ne peut pas enregistrer de données. Firebase sert de petite base de données partagée.

1. Va sur https://console.firebase.google.com et clique sur **Créer un projet** (tu peux refuser Google Analytics).
2. Dans le menu, va dans **Firestore Database** puis **Créer une base de données**. Choisis la région `northamerica-northeast1 (Montréal)` et le **mode production**.
3. Dans l'onglet **Règles** de Firestore, remplace tout par ceci, puis **Publier** :

   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /achats/{albumId} {
         allow read: if true;
         allow create: if request.resource.data.keys().hasOnly(['achete', 'date']);
         allow update, delete: if false;
       }
     }
   }
   ```

   Ces règles permettent à n'importe qui de cocher un album, mais personne ne peut le décocher depuis le site.

4. Ajoute une application Web à ton projet :
   - En haut à gauche, à côté de **Vue d'ensemble du projet**, clique sur la roue dentée ⚙️, puis sur **Paramètres du projet**.
   - Dans l'onglet **Général**, descends tout en bas jusqu'à la section **Vos applications**.
   - Clique sur l'icône `</>` (Web) ou sur **Ajouter une application**, puis choisis **Web**.
   - Donne-lui un surnom (ex. « pige »), laisse la case Firebase Hosting décochée et clique sur **Enregistrer l'application**.
5. Firebase affiche un bloc `const firebaseConfig = { ... }`. Si tu l'as manqué, retourne dans **Vos applications**, clique sur ton application et coche **Config** sous *Configuration du SDK*. Copie ce qui est entre les accolades dans `config.js` :

   ```js
   window.FIREBASE_CONFIG = {
     apiKey: "...",
     authDomain: "...",
     projectId: "...",
     storageBucket: "...",
     messagingSenderId: "...",
     appId: "..."
   };
   ```

6. Remplace `config.js` sur GitHub (ouvre le fichier sur GitHub, clique sur le crayon, colle, puis **Commit changes**).

Le bandeau jaune « Mode test » disparaîtra et les albums cochés seront partagés en temps réel.

> Les clés Firebase dans `config.js` ne sont pas secrètes : c'est normal qu'elles soient visibles. Ce sont les règles de l'étape 3 qui protègent les données.

## Décocher un album (si quelqu'un s'est trompé)

Dans la console Firebase, va dans **Firestore Database**, ouvre la collection `achats` et supprime le document qui porte l'`id` de l'album.

## Bon à savoir

- Si deux personnes tombent sur le même album en même temps, seule la première qui confirme l'obtient. L'autre reçoit un message lui demandant de refaire tourner le disque.
- Le site fait confiance aux gens : quelqu'un qui connaît le lien pourrait cocher un album sans l'acheter. Pour une pige entre amis ou en famille, ça ne pose généralement pas de problème.
