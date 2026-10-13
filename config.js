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
  {"id": "entertainment", "titre": "Entertainment!", "artiste": "Gang of Four", "prix": 33.99, "acheter": "https://www.amazon.ca/dp/B00JLW5I14", "ecouter": "https://www.youtube.com/watch?v=F_7BVaDIAbA", "pochette": "https://m.media-amazon.com/images/I/71OJfIhEgoL._AC_SX385_.jpg"},
  {"id": "goo", "titre": "Goo", "artiste": "Sonic Youth", "prix": 36.99, "acheter": "https://www.amazon.ca/dp/B0152ENPDC", "ecouter": "https://www.youtube.com/watch?v=SDTSUwIZdMk", "pochette": "https://m.media-amazon.com/images/I/61ylKuCU26L._AC_SL1000_.jpg"},
  {"id": "the-piper-at-the-gates-of-dawn", "titre": "The Piper at the Gates of Dawn", "artiste": "Pink Floyd", "prix": 32.99, "acheter": "https://www.amazon.ca/dp/B09PNQZHH2", "ecouter": "https://www.youtube.com/watch?v=UFdn7LA56uE", "pochette": "https://m.media-amazon.com/images/I/91mFiAnfVHL._AC_SL1500_.jpg"},
  {"id": "violent-femmes", "titre": "Violent Femmes", "artiste": "Violent Femmes", "prix": 36.99, "acheter": "https://www.amazon.ca/dp/B07C5HF7SY", "ecouter": "https://www.youtube.com/watch?v=mk6qKx1Yswc", "pochette": "https://m.media-amazon.com/images/I/71kD7YYsWbL._AC_SL1400_.jpg"},
  {"id": "the-velvet-rope", "titre": "The Velvet Rope", "artiste": "Janet Jackson", "prix": 53.96, "acheter": "https://www.amazon.ca/dp/B07RWPD6DK", "ecouter": "https://www.youtube.com/watch?v=5CHEqJgf7dw", "pochette": "https://m.media-amazon.com/images/I/71Bm5DGzjEL._AC_SL1200_.jpg"},
  {"id": "damned-damned-damned", "titre": "Damned Damned Damned", "artiste": "The Damned", "prix": 42.98, "acheter": "https://www.amazon.ca/dp/B00TUPD6IY", "ecouter": "https://www.youtube.com/watch?v=d1dScWPaa_Y", "pochette": "https://m.media-amazon.com/images/I/61KGhIVSCzL._AC_SL1200_.jpg"},
  {"id": "the-dark-side-of-the-moon", "titre": "The Dark Side of the Moon", "artiste": "Pink Floyd", "prix": 34.98, "acheter": "https://www.amazon.ca/dp/B0CGJVLF9Q", "ecouter": "https://www.youtube.com/watch?v=-0kcet4aPpQ", "pochette": "https://m.media-amazon.com/images/I/61OBOiVbkeL._AC_SL1500_.jpg"},
  {"id": "the-stone-roses", "titre": "The Stone Roses", "artiste": "The Stone Roses", "prix": 36.14, "acheter": "https://www.amazon.ca/dp/B00I8CUFCA", "ecouter": "https://www.youtube.com/watch?v=CVVz1Hj_FSg", "pochette": "https://m.media-amazon.com/images/I/91DHJZt+j+L._AC_SX385_.jpg"},
  {"id": "raw-power", "titre": "Raw Power", "artiste": "Iggy and the Stooges", "prix": 39.99, "acheter": "https://www.amazon.ca/dp/B007IHH3L2", "ecouter": "https://www.youtube.com/watch?v=P9_hegaKOaY", "pochette": "https://m.media-amazon.com/images/I/713Y3miqskL._AC_SL1500_.jpg"},
  {"id": "pink-flag", "titre": "Pink Flag", "artiste": "Wire", "prix": 36.99, "acheter": "https://www.amazon.ca/dp/B07BLJ1P92", "ecouter": "https://www.youtube.com/watch?v=jOjCSLMZPok", "pochette": "https://m.media-amazon.com/images/I/71Ps5mqbj2L._AC_SL1000_.jpg"},
  {"id": "unknown-pleasures", "titre": "Unknown Pleasures", "artiste": "Joy Division", "prix": 44.99, "acheter": "https://www.amazon.ca/dp/B00XILAIWI", "ecouter": "https://www.youtube.com/watch?v=CYA-KtCfN6Q", "pochette": "https://m.media-amazon.com/images/I/618nkXxBxsL._AC_SL1425_.jpg"},
  {"id": "yankee-hotel-foxtrot", "titre": "Yankee Hotel Foxtrot", "artiste": "Wilco", "prix": 44.99, "acheter": "https://www.amazon.ca/dp/B09Y9JWC3H", "ecouter": "https://www.youtube.com/watch?v=efq95Pfqt5U"},
  {"id": "lola-versus-powerman-and-the-moneygoround", "titre": "Lola Versus Powerman and the Moneygoround", "artiste": "The Kinks", "prix": 41.1, "acheter": "https://www.amazon.ca/dp/B08KTXHGLV", "ecouter": "https://www.youtube.com/watch?v=LemG0cvc4oU", "pochette": "https://m.media-amazon.com/images/I/81rQcJQawdL._AC_SL1500_.jpg"},
  {"id": "toxicity", "titre": "Toxicity", "artiste": "System of a Down", "prix": 34.99, "acheter": "https://www.amazon.ca/dp/B07FSVYRXJ", "ecouter": "https://www.youtube.com/watch?v=iywaBOMvYLI", "pochette": "https://m.media-amazon.com/images/I/81O5BH0QI4L._AC_SL1500_.jpg"},
  {"id": "forever-changes", "titre": "Forever Changes", "artiste": "Love", "prix": 37.14, "acheter": "https://www.amazon.ca/dp/B0096PS4Y4", "ecouter": "https://www.youtube.com/watch?v=cPbNpIG8x_s", "pochette": "https://m.media-amazon.com/images/I/61iGFnlygvL._AC_SL1200_.jpg"},
  {"id": "all-hail-west-texas", "titre": "All Hail West Texas", "artiste": "The Mountain Goats", "prix": 42.08, "acheter": "https://www.amazon.ca/dp/B00CTAWSX6", "ecouter": "https://www.youtube.com/watch?v=c0VZzwTceOc", "pochette": "https://m.media-amazon.com/images/I/613dI273dzL._AC_SL1328_.jpg"},
  {"id": "nowhere", "titre": "Nowhere", "artiste": "Ride", "prix": 48.75, "acheter": "https://www.amazon.ca/dp/B09XYCW3CL", "ecouter": "https://www.youtube.com/watch?v=In9yq3oNqCg", "pochette": "https://m.media-amazon.com/images/I/91Dmprru6iL._AC_SL1500_.jpg"},
  {"id": "are-you-experienced", "titre": "Are You Experienced", "artiste": "The Jimi Hendrix Experience", "prix": 29.33, "acheter": "https://www.amazon.ca/dp/B00JFVORBI", "ecouter": "https://www.youtube.com/watch?v=HIOgqneBedg", "pochette": "https://m.media-amazon.com/images/I/81Umxm8x4qL._AC_SL1500_.jpg"},
  {"id": "down-by-the-jetty", "titre": "Down by the Jetty", "artiste": "Dr. Feelgood", "prix": 48.58, "acheter": "https://www.amazon.ca/dp/B0F9YZBVD3", "ecouter": "https://www.youtube.com/watch?v=vLw-vy6NGLQ", "pochette": "https://m.media-amazon.com/images/I/619MAhfpNwL._AC_SL1500_.jpg"},
  {"id": "the-clash", "titre": "The Clash", "artiste": "The Clash", "prix": 32.99, "acheter": "https://www.amazon.ca/dp/B00DYK3BKE", "ecouter": "https://www.youtube.com/watch?v=2D-l1MauBmM", "pochette": "https://m.media-amazon.com/images/I/71Ou-kgouWL._AC_SL1417_.jpg"},
  {"id": "i-see-a-darkness", "titre": "I See a Darkness", "artiste": "Bonnie \"Prince\" Billy", "prix": 44.49, "acheter": "https://www.amazon.ca/dp/B00004WWR1", "ecouter": "https://www.youtube.com/watch?v=YmFynsUrSz0", "pochette": "https://m.media-amazon.com/images/I/91AksZexaaL._AC_SL1500_.jpg"},
  {"id": "pronounced-leh-nerd-skin-nerd", "titre": "(Pronounced 'Leh-nerd 'Skin-nerd)", "artiste": "Lynyrd Skynyrd", "prix": 54.25, "acheter": "https://www.amazon.ca/dp/B07T1LHJGX", "ecouter": "https://www.youtube.com/watch?v=8eNoms9wsGc", "pochette": "https://m.media-amazon.com/images/I/81HnauxBU3L._AC_SL1400_.jpg"},
  {"id": "in-utero", "titre": "In Utero", "artiste": "Nirvana", "prix": 49.99, "acheter": "https://www.amazon.ca/dp/B00004WP7P", "ecouter": "https://www.youtube.com/watch?v=n6P0SitRwy8", "pochette": "https://m.media-amazon.com/images/I/51Up-ysJsAL._AC_SL1000_.jpg"},
  {"id": "horses", "titre": "Horses", "artiste": "Patti Smith", "prix": 28.99, "acheter": "https://www.amazon.ca/dp/B00XDCB9EI", "ecouter": "https://www.youtube.com/watch?v=bPO0bTaWcFQ"},
  {"id": "there-s-nothing-wrong-with-love", "titre": "There's Nothing Wrong with Love", "artiste": "Built to Spill", "prix": 44.99, "acheter": "https://www.amazon.ca/dp/B00008FYGI", "ecouter": "https://www.youtube.com/watch?v=CUIyppCO8BY", "pochette": "https://m.media-amazon.com/images/I/51gIVLTg4fS._AC_SL1200_.jpg"},
  {"id": "the-black-parade", "titre": "The Black Parade", "artiste": "My Chemical Romance", "prix": 54.36, "acheter": "https://www.amazon.ca/dp/B00PCI1HCU", "ecouter": "https://www.youtube.com/watch?v=RRKJiM9Njr8"},
  {"id": "odelay", "titre": "Odelay", "artiste": "Beck", "prix": 36.99, "acheter": "https://www.amazon.ca/s?k=Beck+Odelay+vinyl", "ecouter": "https://www.youtube.com/watch?v=EPfmNxKLDG4", "pochette": "https://m.media-amazon.com/images/I/71N3QZ7MRjL._AC_SL1200_.jpg"},
  {"id": "crooked-rain-crooked-rain", "titre": "Crooked Rain, Crooked Rain", "artiste": "Pavement", "prix": 42.96, "acheter": "https://www.amazon.ca/dp/B00348008C", "ecouter": "https://www.youtube.com/watch?v=QTTgpTeb0Z8", "pochette": "https://m.media-amazon.com/images/I/71KskfNNKYS._AC_SL1200_.jpg"}
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
