const firebaseAdmin = require("firebase-admin");
const { secrets } = require("../config");
// const nodemailer = require("nodemailer");
// const crypto = require("crypto");

const ERRORS = {
  AUTH: {
    TOKEN_FAIL: "TOKEN_FAIL",
    NO_AUTH_IN_HEADER: "NO_AUTH_IN_HEADER",
    NO_UID: "NO_UID",
    CANT_SIGNUP: "CANT_SIGNUP",
    ALREADY_SIGNEDUP: "ALREADY_SIGNEDUP",
    NO_PERMISSION: "NO_PERMISSION",
  },
  DATA: {
    INVALID_DATA: "INVALID_DATA",
  },
};

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(secrets),
});

const firestore = firebaseAdmin.firestore;

const DB = {
  users: firestore().collection("users"),
  auctionInfo:firestore().collection("auctionInfo"),
  inbox:firestore().collection("inbox")
}

const tokenExporter = (headers) => {
    if (headers.authorization) {
      let idToken = headers.authorization.split("Bearer ")[1];
      return firebaseAdmin
        .auth()
        .verifyIdToken(idToken)
        .then((decodedToken) => decodedToken)
        .catch((_err) => {
          return ERRORS.AUTH.TOKEN_FAIL;
        });
    } else {
      return ERRORS.AUTH.NO_AUTH_IN_HEADER;
    }
  };

  const findStrInArray = (strToFind, array) => {
    let found = false;
    array.forEach((item) => {
      if (!found) {
        found = strToFind === item;
      }
    });
    return found;
  };

module.exports = {
  DB,
  firestore,
  firebaseAdmin,
  ERRORS,
  tokenExporter,
  findStrInArray,
}; 