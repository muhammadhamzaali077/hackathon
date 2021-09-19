const firebaseConfig = {
    apiKey: "AIzaSyDW_lwxk17WQCklcihOBWWKfPiLmz6LG58",
    authDomain: "hamza-balloon-game.firebaseapp.com",
    projectId: "hamza-balloon-game",
    storageBucket: "hamza-balloon-game.appspot.com",
    messagingSenderId: "551065071785",
    appId: "1:551065071785:web:1e328ae6f721791ca339b8",
    measurementId: "G-1KDHL1G2G8"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);