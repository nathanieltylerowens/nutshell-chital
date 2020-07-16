import firebase from 'firebase/app';
import 'firebase/auth';

const signinUser = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const signoutUser = (e) => {
  e.preventDefault();
  firebase.auth().signOut();
};

const loginButton = () => {
  $('#google-auth-in').click(signinUser);
};

const logoutButton = () => {
  $('#google-auth-out').click(signoutUser);
};

export default { loginButton, logoutButton };
//  hey
