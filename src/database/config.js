
  import * as firebase from "firebase"
  
  var config = {
    apiKey: "AIzaSyDDm9RE8YT-Sen9j8hP6atv0gAxDBxJGto",
    authDomain: "photowall-e4880.firebaseapp.com",
    databaseURL: "https://photowall-e4880.firebaseio.com",
    projectId: "photowall-e4880",
    storageBucket: "photowall-e4880.appspot.com",
    messagingSenderId: "391048852096"
  };
  
firebase.initializeApp(config)
    
    const database = firebase.database()

    export {database}

