import { app } from './firebase';

import { 
    signInWithEmailAndPassword, 
    getAuth, 
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut, 
    GoogleAuthProvider,
    signInWithPopup, 
} from 'firebase/auth';

import {
    addDoc,
    collection,
    getFirestore,
    query,
    getDocs,
    where
} from "firebase/firestore"

const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
console.log("app", app)
const loginComEmailESenha = async ( email, senha ) => {
    try {
        await signInWithEmailAndPassword(auth, email, senha);
    } catch (error) {
        //
    }
}

const registrarComEmailESenha = async ( name, email, senha ) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, senha);
        const user = res.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email
        })
    } catch (error) {
        //
    }
}

const recuperarSenha = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        alert("Email para recuperação enviado!")
    } catch (error) {
      //  
    }
}

const logout = () => {
    signOut(auth);
}

const entrarComGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        const q = query(collection(db, "users"), where("uid", "==", user.uid))
        const docs = await getDocs(q);

        if (docs.docs.length === 0){
            await addDoc(collection(db, "users"),{
                uid: user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email,
            })
        }
    } catch (error) {
        //
    }
}
export {
    auth,
    loginComEmailESenha,
    registrarComEmailESenha,
    recuperarSenha,
    logout,
    entrarComGoogle
}