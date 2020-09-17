import firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/performance'

const config = {
    apiKey: 'AIzaSyBvO7paDhTJuU5IJYf6k9p1CuBC95luMPE',
    authDomain: 'herbievinedotcom.firebaseapp.com',
    databaseURL: 'https://herbievinedotcom.firebaseio.com',
    projectId: 'herbievinedotcom',
    storageBucket: 'herbievinedotcom.appspot.com',
    messagingSenderId: '950935660201',
    appId: '1:950935660201:web:3ab9397a9783238b032bb8',
    measurementId: 'G-D2D12FXG4Z'
}

const initFirebase = async () => {
    await firebase.initializeApp(config)
    await firebase.performance()
    if (await firebase.analytics.isSupported()) await firebase.analytics()
}

export { initFirebase }
