# FireLib

It isn't a clever name and it isn't anything unique, but I understand the inner workings of this library and it saves me a bunch of time when interacting with Firebase.

---

## Firebase

Firebase is an app development platform that helps you build and grow apps and games users love. Backed by Google and trusted by millions of businesses around the world.

---

## Installation

```
npm i
npm run dev
```

---

## Getting Started

### 1. Create a Firebase Account

Before you can add Firebase to your JavaScript app, you need to create a Firebase project and register your app with that project. When you register your app with Firebase, you'll get a Firebase configuration object that you'll use to connect your app with your Firebase project resources.

https://firebase.google.com/docs/web/setup

### 2. Configure FireLib

Grab your Firebase configuration object and add it to `firelib/_init.js`

```
const firebaseConfig = {
    // TODO: Replace the following with your app's Firebase project configuration
};
```

### 3. Initialize Firebase in your project

```
import { app } from '/firelib/_init.js'
```

### 4. Import and use the desired SDK

> **_NOTE:_** You must first initialize Firebase so that you can pass the Firebase 'app' to the SDK

```
import { <class> } from '/firelib/<sdk>'
const <sdk> = new <class>(app)
```
