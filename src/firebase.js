import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyClMVqKvaVNTKqMzOtFv1R7Fy518HN_q3I",
    authDomain: "nba-app-5d7f7.firebaseapp.com",
    databaseURL: "https://nba-app-5d7f7.firebaseio.com",
    projectId: "nba-app-5d7f7",
    storageBucket: "nba-app-5d7f7.appspot.com",
    messagingSenderId: "765346328531"
  };

  firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseArticles = firebaseDB.ref('articles');
const firebaseTeams = firebaseDB.ref('teams');
const firebaseVideos = firebaseDB.ref('videos');

const firebaseLooper = (snap) => {
  const data = [];
  snap.forEach((childSnapshot)=>{
    data.push({
        ...childSnapshot.val(),
        id:childSnapshot.key
    })
  });
  return data;
}

export {
  firebase,
  firebaseDB,
  firebaseArticles,
  firebaseVideos,
  firebaseTeams,
  firebaseLooper
}
