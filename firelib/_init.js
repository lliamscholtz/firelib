/* 
===========================================================================
Install the SDK and initialize Firebase
===========================================================================

$ npm install firebase

A Firebase App is a container-like object that stores common configuration 
and shares authentication across Firebase services. After you initialize a 
Firebase App object in your code, you can add and start using Firebase services.

https://firebase.google.com/docs/web/setup?hl=en&authuser=0
*/

import { initializeApp } from 'firebase/app';
console.log('Initialising Firebase');

const firebaseConfig = {
    // TODO: Replace the following with your app's Firebase project configuration
};

export const app = initializeApp(firebaseConfig);
