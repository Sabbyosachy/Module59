import { initializeApp } from "firebase/app";
import firebaseConfig from "./Config";

const InitializeAuthetication=() =>{
    initializeApp(firebaseConfig);
} 
export default InitializeAuthetication;