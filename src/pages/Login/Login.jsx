import React, { useState } from 'react'
import './Login.css'
import { login, signup } from '../../firebase'
import { useNavigate } from 'react-router-dom'
import logo_facebook from '../../assets/logo_facebook.png'

const Login = () => {
  const [signState, setSignState] = useState("Sign In")
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const user_auth = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    
    try {
      let success = false;
      
      if (signState === "Sign In") {
        success = await login(email, password);
      } else {
        success = await signup(name, email, password);
      }
      
      if (success) {
        navigate("/");
      }
    } catch (error) {
      // Handle specific Firebase errors
      let errorMessage = "An error occurred";
      
      switch (error.code) {
        case 'auth/email-already-in-use':
          errorMessage = "This email is already registered. Try signing in instead.";
          break;
        case 'auth/user-not-found':
          errorMessage = "No account found with this email. Try signing up.";
          break;
        case 'auth/wrong-password':
          errorMessage = "Incorrect password. Please try again.";
          break;
        case 'auth/weak-password':
          errorMessage = "Password should be at least 6 characters.";
          break;
        case 'auth/invalid-email':
          errorMessage = "Please enter a valid email address.";
          break;
        default:
          errorMessage = error.message || "An error occurred. Please try again.";
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className='login'>
      <div className="login-logo">
        <img src={logo_facebook} alt="Facebook Logo" onError={(e) => {
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'block';
        }} />
        <div style={{ 
          display: 'none', 
          color: 'white', 
          fontSize: '48px', 
          fontWeight: 'bold',
          fontFamily: 'Arial, sans-serif'
        }}>
          facebook
        </div>
      </div>
      <div className="login-form">
        <h1>{signState}</h1>
        <form onSubmit={user_auth}>
          {signState === "Sign Up" && (
            <input 
              type="text" 
              placeholder='Your name' 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required
            />
          )}
          <input 
            type="email" 
            placeholder='Email' 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required
          />
          <input 
            type="password" 
            placeholder='Password' 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required
          />
          {error && <div className="error-message">{error}</div>}
          <button type='submit' disabled={loading}>
            {loading ? "Loading..." : signState}
          </button>
        </form>
        <div className="form-switch">
          {signState === "Sign In" ? (
            <p>New to Facebook? <span onClick={() => setSignState("Sign Up")}>Sign Up Now</span></p>
          ) : (
            <p>Already have account? <span onClick={() => setSignState("Sign In")}>Sign In Now</span></p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Login
