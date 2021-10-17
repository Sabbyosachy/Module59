import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut } from "firebase/auth";
import InitializeAuthetication from "../Firebase/Initialize";

InitializeAuthetication();
const auth = getAuth();
const useFirebase=()=>{
   const [user,setUser]=useState({}); 
   const GoogleProvider= new GoogleAuthProvider();

   const SignInUsingGoogle=()=>{
    signInWithPopup(auth, GoogleProvider)
    .then((result) => {
        console.log(result.user);
      })
   }

   const logOut=()=>{
    signOut(auth).then(() => {
        setUser({});
      })
   }

   useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
        }
      });
      
   },[])

   return {
       user,
       logOut,
       SignInUsingGoogle
   }
  
}
export default useFirebase;