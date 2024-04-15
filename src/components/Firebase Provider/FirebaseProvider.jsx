import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from '../../Firebase/firebase.config';


export const AuthContext = createContext(null)

//social auth providers
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider()

const FirebaseProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const [reload,setReload] = useState(false)

    //creating User 
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //update Profile
    const updateUserProfile = (fullName,image) =>{
        return updateProfile(auth.currentUser,{
            displayName: fullName,
            photoURL: image
        })
    }

    //sign in user
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //google sign in
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    //github sign in
    const githubSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    //logout
    const logout = () => {
        setLoading(true)
        setUser(null)
        return signOut(auth)
    }

    //observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user in observe', currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    }, [reload]);

    const values = {
        user,
        loading,
        createUser,
        signInUser,
        googleSignIn,
        githubSignIn,
        logout,
        setReload,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

FirebaseProvider.propTypes = {
    children: PropTypes.node
}
export default FirebaseProvider;