import React, { useState } from "react";
import { auth, provider } from "./firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import "./index.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful");
    } catch (error) {
      alert(error.message);
    }
  };

  const loginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
      alert("Google login successful");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-background text-primary">
      <h1 className="text-3xl font-bold mb-6">Worker Portal Login</h1>
      <input
        className="mb-2 p-2 rounded bg-white text-black"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="mb-4 p-2 rounded bg-white text-black"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="mb-2 bg-primary text-black px-4 py-2 rounded"
        onClick={login}
      >
        Login
      </button>
      <button
        className="bg-primary text-black px-4 py-2 rounded"
        onClick={loginWithGoogle}
      >
        Login with Google
      </button>
    </div>
  );
}

export default App;