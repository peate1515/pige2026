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
  {"id": "crooked-rain-crooked-rain", "titre": "Crooked Rain, Crooked Rain", "artiste": "Pavement", "prix": 42.96, "acheter": "https://www.amazon.ca/dp/B00348008C", "ecouter": "https://www.youtube.com/watch?v=QTTgpTeb0Z8", "pochette": "https://m.media-amazon.com/images/I/71KskfNNKYS._AC_SL1200_.jpg"},
  {"id": "wayfaring-strangers-cosmic-american-music", "titre": "Wayfaring Strangers: Cosmic American Music", "artiste": "Artistes variés", "prix": 56.38, "acheter": "https://www.amazon.ca/dp/B0BVPKQNWB", "ecouter": "https://www.youtube.com/watch?v=WWu1SogTGRA", "pochette": "https://m.media-amazon.com/images/I/61Zudw+geHL._AC_SL1200_.jpg"},
  {"id": "xx", "titre": "xx", "artiste": "The xx", "prix": 54.64, "acheter": "https://www.amazon.ca/dp/B002N1AEMS", "ecouter": "https://www.youtube.com/watch?v=PElhV8z7I60", "pochette": "https://m.media-amazon.com/images/I/51B-5V0LYLL._AC_SL1418_.jpg"},
  {"id": "house-of-balloons", "titre": "House of Balloons", "artiste": "The Weeknd", "prix": 49.98, "acheter": "https://www.amazon.ca/dp/B09VLJR63K", "ecouter": "https://www.youtube.com/watch?v=WGqaNMvIv-E", "pochette": "https://m.media-amazon.com/images/I/71ir2fVeqYL._AC_SL1280_.jpg"},
  {"id": "wolfmother", "titre": "Wolfmother", "artiste": "Wolfmother", "prix": 39.98, "acheter": "https://www.amazon.ca/dp/B012ZFBDGW", "ecouter": "https://www.youtube.com/watch?v=YsfInnEBYHw", "pochette": "https://m.media-amazon.com/images/I/81rYa5KSE+L._AC_SL1400_.jpg"},
  {"id": "tonight-s-the-night", "titre": "Tonight's the Night", "artiste": "Neil Young", "prix": 53.68, "acheter": "https://www.amazon.ca/dp/B0H2JT2MLB", "ecouter": "https://www.youtube.com/watch?v=Hb5qfXD5_xw", "pochette": "https://m.media-amazon.com/images/I/81iZ6oMhL8L._AC_SL1500_.jpg"},
  {"id": "who-will-cut-our-hair-when-we-re-gone", "titre": "Who Will Cut Our Hair When We're Gone?", "artiste": "The Unicorns", "prix": 50.92, "acheter": "https://www.amazon.ca/dp/B0BXKR2HPL", "ecouter": "https://www.youtube.com/watch?v=e9OLLTKryiA", "pochette": "https://m.media-amazon.com/images/I/610l63Oe1WL._AC_.jpg"},
  {"id": "attack-on-memory", "titre": "Attack on Memory", "artiste": "Cloud Nothings", "prix": 46.2, "acheter": "https://www.amazon.ca/dp/B006HH60N6", "ecouter": "https://www.youtube.com/watch?v=0l5lJDvqWi4", "pochette": "https://m.media-amazon.com/images/I/81z9zVJifoL._AC_SL1500_.jpg"},
  {"id": "songs-the-lord-taught-us", "titre": "Songs the Lord Taught Us", "artiste": "The Cramps", "prix": 38.99, "acheter": "https://www.amazon.ca/dp/B0GPDW1HKR", "ecouter": "https://www.youtube.com/watch?v=8GLUmIf8STw", "pochette": "https://m.media-amazon.com/images/I/61yUyylVM6L._AC_SL1080_.jpg"},
  {"id": "every-hero-needs-a-villain", "titre": "Every Hero Needs a Villain", "artiste": "Czarface", "prix": 60.87, "acheter": "https://www.amazon.ca/dp/B00WU4XLQE", "ecouter": "https://www.youtube.com/watch?v=fTZSuprsH5A", "pochette": "https://m.media-amazon.com/images/I/81F9hufHgnL._AC_SL1500_.jpg"},
  {"id": "let-my-people-go", "titre": "Let My People Go", "artiste": "Darondo", "prix": 51.32, "acheter": "https://www.amazon.ca/dp/B00004GJWA", "ecouter": "https://www.youtube.com/watch?v=PZqQT5904_U", "pochette": "https://m.media-amazon.com/images/I/711mJQ4Mv8L._AC_SL1500_.jpg"},
  {"id": "the-money-store", "titre": "The Money Store", "artiste": "Death Grips", "prix": 35.99, "acheter": "https://www.amazon.ca/dp/B007I2BYIA", "ecouter": "https://www.youtube.com/watch?v=3_V_2BFWahc", "pochette": "https://m.media-amazon.com/images/I/61QR0QF+uvL._AC_SL1010_.jpg"},
  {"id": "milo-goes-to-college", "titre": "Milo Goes to College", "artiste": "Descendents", "prix": 34.95, "acheter": "https://www.amazon.ca/dp/B000006NMH", "ecouter": "https://www.youtube.com/watch?v=x9PPlQp5DT4", "pochette": "https://m.media-amazon.com/images/I/518V-8ZZMnL._AC_SL1000_.jpg"},
  {"id": "dusty-in-memphis", "titre": "Dusty in Memphis", "artiste": "Dusty Springfield", "prix": 43.23, "acheter": "https://www.amazon.ca/dp/B0BSLVSG5M", "ecouter": "https://www.youtube.com/watch?v=oAZLgsDRUv4", "pochette": "https://m.media-amazon.com/images/I/719ZGJPezkL._AC_SL1500_.jpg"},
  {"id": "pure-comedy", "titre": "Pure Comedy", "artiste": "Father John Misty", "prix": 56.58, "acheter": "https://www.amazon.ca/dp/B01N4R2QH7", "ecouter": "https://www.youtube.com/watch?v=wKrSYgirAhc", "pochette": "https://m.media-amazon.com/images/I/B1XiVtUgjES._AC_SX385_.jpg"},
  {"id": "transmissions-from-the-satellite-heart", "titre": "Transmissions from the Satellite Heart", "artiste": "The Flaming Lips", "prix": 42.99, "acheter": "https://www.amazon.ca/dp/B006UREP30", "ecouter": "https://www.youtube.com/watch?v=cvfxKbpoxRE", "pochette": "https://m.media-amazon.com/images/I/711G4qTWFrL._AC_SL1425_.jpg"},
  {"id": "white-blood-cells", "titre": "White Blood Cells", "artiste": "The White Stripes", "prix": 37.39, "acheter": "https://www.amazon.ca/dp/B09BY85PBC", "ecouter": "https://www.youtube.com/watch?v=DZPEUyiNcjA", "pochette": "https://m.media-amazon.com/images/I/713F2SUAWPL._AC_SL1500_.jpg"},
  {"id": "good-kid-m-a-a-d-city", "titre": "good kid, m.A.A.d city", "artiste": "Kendrick Lamar", "prix": 49.99, "acheter": "https://www.amazon.ca/dp/B009F1ZYO2", "ecouter": "https://www.youtube.com/watch?v=T_OWvLDIyno", "pochette": "https://m.media-amazon.com/images/I/81e-3lhg4rL._AC_SL1500_.jpg"},
  {"id": "paper-mache-dream-balloon", "titre": "Paper Mâché Dream Balloon", "artiste": "King Gizzard and the Lizard Wizard", "prix": 55.34, "acheter": "https://www.amazon.ca/dp/B0FVJBMFJF", "ecouter": "https://www.youtube.com/watch?v=sMQBJrGUivw", "pochette": "https://m.media-amazon.com/images/I/71Ds07lDJ2L._AC_SL1200_.jpg"},
  {"id": "exile-in-guyville", "titre": "Exile in Guyville", "artiste": "Liz Phair", "prix": 54.99, "acheter": "https://www.amazon.ca/dp/B07BF7BP14", "ecouter": "https://www.youtube.com/watch?v=znF6o0ME0-o", "pochette": "https://m.media-amazon.com/images/I/71H9VvUiMOL._AC_SL1425_.jpg"},
  {"id": "wide-awake", "titre": "Wide Awake!", "artiste": "Parquet Courts", "prix": 44.99, "acheter": "https://www.amazon.ca/dp/B079VTLZ45", "ecouter": "https://www.youtube.com/watch?v=eNk4JC_3S7s", "pochette": "https://m.media-amazon.com/images/I/61XVXqJR3-L._AC_SL1200_.jpg"},
  {"id": "transformer", "titre": "Transformer", "artiste": "Lou Reed", "prix": 32.99, "acheter": "https://www.amazon.ca/dp/B01LFGTVWK", "ecouter": "https://www.youtube.com/watch?v=kJoHspUta-E", "pochette": "https://m.media-amazon.com/images/I/61JueJt81pL._AC_SL1500_.jpg"},
  {"id": "coney-island-baby", "titre": "Coney Island Baby", "artiste": "Lou Reed", "prix": 32.99, "acheter": "https://www.amazon.ca/dp/B01LFGTW7O", "ecouter": "https://www.youtube.com/watch?v=1SHCsgqZvQM", "pochette": "https://m.media-amazon.com/images/I/61ESNZLPffL._AC_SL1500_.jpg"},
  {"id": "american-water", "titre": "American Water", "artiste": "Silver Jews", "prix": 42.43, "acheter": "https://www.amazon.ca/dp/B00008G3AC", "ecouter": "https://www.youtube.com/watch?v=vtujTq5u1lQ", "pochette": "https://m.media-amazon.com/images/I/61Yq33pAmDL._AC_SL1200_.jpg"},
  {"id": "a-seat-at-the-table", "titre": "A Seat at the Table", "artiste": "Solange", "prix": 44.82, "acheter": "https://www.amazon.ca/dp/B01LXP7I5N", "ecouter": "https://www.youtube.com/watch?v=qJSVEeuTwPU", "pochette": "https://m.media-amazon.com/images/I/71kX7Rx-90L._AC_SL1500_.jpg"},
  {"id": "a-trip-to-marineville", "titre": "A Trip to Marineville", "artiste": "Swell Maps", "prix": 47.31, "acheter": "https://www.amazon.ca/dp/B005VROF5I", "ecouter": "https://www.youtube.com/watch?v=7SJk0gmZ-CA", "pochette": "https://m.media-amazon.com/images/I/714sSLuUWyL._AC_SL1000_.jpg"},
  {"id": "igor", "titre": "Igor", "artiste": "Tyler, the Creator", "prix": 32.64, "acheter": "https://www.amazon.ca/dp/B07T6S1CC1", "ecouter": "https://www.youtube.com/watch?v=Aztdmq1tYY8", "pochette": "https://m.media-amazon.com/images/I/81MJUW7iUaL._AC_SL1500_.jpg"}
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
