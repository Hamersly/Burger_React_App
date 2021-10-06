import Rebase from 're-base';
import firebase from 'firebase';
import {pass} from './passBase';

const firebaseApp = firebase.initializeApp({
	apiKey: pass.apiKey,
	authDomain: pass.authDomain,
	databaseURL: pass.databaseURL,
});

const base = Rebase.createClass(firebaseApp.database());

export {firebaseApp};
export default base;