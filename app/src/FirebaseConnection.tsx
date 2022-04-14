
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged } from 'firebase/auth';

const env = process.env;

export const cfg = {
    apiKey: env.REACT_APP_API_KEY,
    authDomain: env.REACT_APP_AUTH_DOMAIN,
    databaseURL: env.REACT_APP_DATABASE_URL,
    projectId: env.REACT_APP_PROJECT_ID,
    storageBucket: env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: env.REACT_APP_MESSAGING_SENDER_ID,
    appId: env.REACT_APP_APP_ID,
    measurementId: env.REACT_APP_MEASUREMENT_ID,
};


export const app = initializeApp(cfg);
export const firestore = getFirestore(app);

// export const getState = (): Promise<any> => {
//     let provider = new GoogleAuthProvider();

//     const auth = getAuth();
//     let ret = onAuthStateChanged( auth , (user) => {
//         if(user){
//             // const credential = GoogleAuthProvider.credentialFromResult(user);
//             const token = "";
//             return {user , token };
//         }else{
//             return { user:null, token: null}
//         }
//     });
// }

export const loginGoogleAuth = (): Promise<any> => {
    let provider = new GoogleAuthProvider();

    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

    const auth = getAuth();
    return signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;
            // The signed-in user info.
            const user = result.user;
            // ...
            // console.log(user);
            // console.log(token);
            return { user , token };
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
            return null;
        });
}
