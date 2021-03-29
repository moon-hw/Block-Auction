const firebaseAdmin = require("firebase-admin");
const dotenv = require("dotenv");
dotenv.config();

var adminConfig = {
    type: process.env.TYPE,
    project_id: process.env.PROJECT_ID,
    private_key_id: process.env.PRIVATE_KEY_ID,
    private_key: process.env.PRIVATE_KEY,
    client_email: process.env.CLIENT_EMAIL,
    client_id: process.env.CLIENT_ID,
    auth_uri: process.env.AUTH_URI,
    token_uri: process.env.TOKEN_URI,
    auth_provider_x509_cert_url: process.env.AUTH_PROVIDER_X509_CERT_URL,
    client_x509_cert_url: process.env.CLIENT_X509_CERT_URL,
};

firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(adminConfig),
});

const firestore = firebaseAdmin.firestore;

const DB = {
    users: firestore().collection("users"),
};

module.exports={ 
    firestore,
    firebaseAdmin,
    DB
 };

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