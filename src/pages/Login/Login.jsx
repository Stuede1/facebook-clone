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
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const user_auth = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    
    try {
      let result = null;
      
      if (signState === "Sign In") {
        result = await login(email, password);
        if (result.success) {
          setSuccess("Successfully signed in! Redirecting...");
        }
      } else {
        result = await signup(name, email, password);
        if (result.success) {
          setSuccess("Account created successfully! Redirecting...");
          console.log("Signup result user:", result.user);
          console.log("User displayName:", result.user?.displayName);
          // Add extra delay for signup to allow profile update to propagate
          setTimeout(() => navigate("/"), 2000);
          return;
        }
      }
      
      if (result.success) {
        setTimeout(() => navigate("/"), 1500);
      }
    } catch (error) {
      // Handle specific Firebase errors
      let errorMessage = "An error occurred";
      
      switch (error.code) {
        case 'auth/email-already-in-use':
          errorMessage = "This email is already registered. Try signing in instead.";
          break;
        case 'auth/user-not-found':
          errorMessage = "No account found with this email. Would you like to sign up?";
          break;
        case 'auth/wrong-password':
          errorMessage = "Incorrect password. Please check your password and try again.";
          break;
        case 'auth/invalid-credential':
          errorMessage = "Invalid email or password. Please check your credentials and try again.";
          break;
        case 'auth/weak-password':
          errorMessage = "Password should be at least 6 characters long.";
          break;
        case 'auth/invalid-email':
          errorMessage = "Please enter a valid email address.";
          break;
        case 'auth/too-many-requests':
          errorMessage = "Too many failed attempts. Please try again later.";
          break;
        case 'auth/network-request-failed':
          errorMessage = "Network error. Please check your internet connection.";
          break;
        default:
          errorMessage = "Something went wrong. Please try again.";
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
          {success && <div className="success-message">{success}</div>}
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
