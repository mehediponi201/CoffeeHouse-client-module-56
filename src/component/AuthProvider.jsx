import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth ,signInWithEmailAndPassword} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //signUp user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    } 

    //signIn user
    const signInUser = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const info = {
        user,
        loading,
        createUser,
        signInUser
    };

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;