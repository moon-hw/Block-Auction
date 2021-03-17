var firebase = require("firebase");


var config = {
  apiKey: "AIzaSyBIT8bT9-_K0cMio-psKILS4dir6hJnI0w",
    authDomain: "blockauction-9e053.firebaseapp.com",
    projectId: "blockauction-9e053",
    storageBucket: "blockauction-9e053.appspot.com",
    messagingSenderId: "703413947930",
    appId: "1:703413947930:web:a9029ee30b55b7ac9ecba3"
};

firebase.initializeApp(config);

const db=firebase.firestore();

module.exports={db};

/*
예시
//get 

let ref = db.collection('user');//user collection 정보 가져오기
let getDoc = ref.get()
    .then(doc => {
        doc.forEach( item=>{  
            console.log(item.data());
        });
    })
    .catch(err => {
        console.log('Error getting document', err);
    });
console.log("done"); 

//post
let setSf = ref.doc('auctionInfo').set( { population: 4000, weather:'spring' } );// auctionInfo에 collection에 괄호 정보 넣기
*/