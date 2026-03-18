// src/auth/Register.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signOut
} from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../firebase/firebase";
import "./Register.css";

import ReCAPTCHA from "react-google-recaptcha";

import guruji from "../assets/guruji.webp";
import guruji2 from "../assets/photo11.webp";
import guruji3 from "../assets/photo10.webp";

import pic from "../assets/pic.jpeg";
import bg1 from "../assets/bg1.webp";
import bg2 from "../assets/bg2.webp";

const Register = () => {
  const bgImages = [pic, bg1, bg2];
  const guruImages = [guruji, guruji2, guruji3];
  const [bgIndex, setBgIndex] = useState(0);

  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState("");
  const [success,setSuccess]=useState("");

  const [captchaToken,setCaptchaToken]=useState(null);
  const captchaRef=useRef(null); // ✅ added

  useEffect(()=>{
    const interval=setInterval(()=>{
      setBgIndex((prev)=>(prev+1)%bgImages.length);
    },5000);
    return ()=>clearInterval(interval);
  },[]);

  const handleRegister=async(e)=>{
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    // ✅ Step 1: check captcha
    if(!captchaToken){
      setError("Please verify that you are not a robot.");
      setLoading(false);
      return;
    }

    // ✅ Step 2: verify captcha with backend
    try{
      const res=await fetch("/api/verify-captcha",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({token:captchaToken})
      });

      const data=await res.json();

      if(!data.success){
        setError("Captcha verification failed.");
        setLoading(false);
        return;
      }
    }catch(err){
      setError("Captcha error. Try again.");
      setLoading(false);
      return;
    }

    // ✅ Step 3: register user
    try{
      const res=await createUserWithEmailAndPassword(
        auth,
        email.trim(),
        password
      );

      await sendEmailVerification(res.user);

      await setDoc(doc(db,"users",res.user.uid),{
        name,
        email,
        role:"user",
        emailVerified:false,
        createdAt:serverTimestamp()
      });

      await signOut(auth);

      setSuccess("Verification email sent. Please verify before login.");

      setName("");
      setEmail("");
      setPassword("");

      // ✅ reset captcha
      if(captchaRef.current){
        captchaRef.current.reset();
        setCaptchaToken(null);
      }

    }catch(err){
      if(err.code==="auth/email-already-in-use"){
        setError("Email already registered.");
      }else if(err.code==="auth/invalid-email"){
        setError("Invalid email.");
      }else if(err.code==="auth/weak-password"){
        setError("Password must be at least 6 characters.");
      }else{
        setError("Something went wrong.");
      }
    }

    setLoading(false);
  };

  return(
    <div className="register-page">
      <div className="register-bg-wrapper">
        {bgImages.map((img,index)=>(
          <div
            key={index}
            className={`register-bg ${index===bgIndex?"active":""}`}
            style={{
              backgroundImage:`linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.3)), url(${img})`
            }}
          ></div>
        ))}
      </div>

      <div className="register-card">
        <div className="register-image">
          <img src={guruImages[bgIndex%guruImages.length]} alt="Register"/>
        </div>

        <h2 className="register-title">
          <span>🙏 Jai Gurubande 🙏</span>
          <span>Create Account</span>
        </h2>

        {success && <p className="register-success">{success}</p>}
        {error && <p className="register-error">{error}</p>}

        <form onSubmit={handleRegister} className="register-form">

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
          />

          {/* ✅ CAPTCHA */}
          <div style={{display:"flex",justifyContent:"center",marginBottom:"15px"}}>
            <ReCAPTCHA
              ref={captchaRef}
              sitekey="6Lfed4ksAAAAAB8zC6bmp-LdJLaUD45xf27NUGbX"
              onChange={(token)=>setCaptchaToken(token)}
              onExpired={()=>setCaptchaToken(null)}
            />
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Creating..." : "Register"}
          </button>

        </form>

        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;