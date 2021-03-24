const firebaseAdmin = require("firebase-admin");
const crypto = require("crypto");

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
    credential: firebaseAdmin.credential.applicationDefault()
  });

const firestore = firebaseAdmin.firestore;

const DB = {
  user: firestore().collection("user"),
};

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

  module.exports = {
    firestore,
    firebaseAdmin,
    DB,
    ERRORS,
    tokenExporter
  }; 