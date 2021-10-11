import Rebase from 're-base';
import firebase from 'firebase/app';
import {pass} from './passBase';
require('firebase/database');

const firebaseApp = firebase.initializeApp({
	apiKey: pass.apiKey,
	authDomain: pass.authDomain,
	databaseURL: pass.databaseURL,
});

const base = Rebase.createClass(firebaseApp.database());

export {firebaseApp};
export default base;