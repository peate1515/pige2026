// =====================================================================
//  TA LISTE D'ALBUMS
//  Pour chaque album :
//    id       : un identifiant unique (ne le change plus une fois le site partagé)
//    titre    : le nom de l'album
//    artiste  : le nom de l'artiste
//    prix     : le prix en dollars, avec un POINT (ex. 24.99)
//    acheter  : le lien vers la page où l'acheter
//    ecouter  : le lien pour l'écouter (Spotify, YouTube, Bandcamp, etc.)
//    pochette : (optionnel) un lien vers l'image de la pochette
// =====================================================================

window.ALBUMS = [
  {
    id: "album-1",
    titre: "Album exemple A",
    artiste: "Artiste un",
    prix: 18.99,
    acheter: "https://www.archambault.ca/",
    ecouter: "https://open.spotify.com/"
  },
  {
    id: "album-2",
    titre: "Album exemple B",
    artiste: "Artiste deux",
    prix: 24.99,
    acheter: "https://www.archambault.ca/",
    ecouter: "https://www.youtube.com/"
  },
  {
    id: "album-3",
    titre: "Album exemple C (vinyle)",
    artiste: "Artiste trois",
    prix: 34.99,
    acheter: "https://bandcamp.com/",
    ecouter: "https://bandcamp.com/"
  },
  {
    id: "album-4",
    titre: "Album exemple D",
    artiste: "Artiste quatre",
    prix: 29.99,
    acheter: "https://www.archambault.ca/",
    ecouter: "https://open.spotify.com/"
  },
  {
    id: "album-5",
    titre: "Album exemple E (édition double)",
    artiste: "Artiste cinq",
    prix: 49.99,
    acheter: "https://www.archambault.ca/",
    ecouter: "https://open.spotify.com/"
  },
  {
    id: "album-6",
    titre: "Album exemple F",
    artiste: "Artiste six",
    prix: 21.5,
    acheter: "https://bandcamp.com/",
    ecouter: "https://bandcamp.com/"
  }
];

// =====================================================================
//  FIREBASE (pour que les albums cochés soient partagés entre tout le monde)
//  Laisse à null pour tester : les albums cochés seront alors gardés
//  seulement dans TON navigateur. Voir le README pour la configuration.
//
//  Exemple une fois configuré :
//  window.FIREBASE_CONFIG = {
//    apiKey: "AIza...",
//    authDomain: "ma-pige.firebaseapp.com",
//    projectId: "ma-pige",
//    storageBucket: "ma-pige.appspot.com",
//    messagingSenderId: "123456789",
//    appId: "1:123456789:web:abc123"
//  };
// =====================================================================

window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyB3qRwW-IWjO6uvyXUhCJhnJLZGMRDXdtE",
  authDomain: "pige2026-b920a.firebaseapp.com",
  projectId: "pige2026-b920a",
  storageBucket: "pige2026-b920a.firebasestorage.app",
  messagingSenderId: "391446507090",
  appId: "1:391446507090:web:b31feac688247b8da2398b"
};
