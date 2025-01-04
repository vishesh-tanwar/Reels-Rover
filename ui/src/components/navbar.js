// import { useNavigate } from "react-router-dom";
// import Cookies from "js-cookie";
// import { useEffect, useState } from "react";
// import axios from "axios";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const [authenticated, setAuthenticated] = useState(false);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const checkAuth = async () => {
//       try {
//         const response = await axios.get('http://localhost:9000/user/status', { withCredentials: true });
//         setAuthenticated(response.data.authenticated);
//         setUser(response.data.user);
//       } catch (error) {
//         setAuthenticated(false);
//         setUser(null);
//       }
//     };

//     checkAuth();
//   }, []);

// const handleLogout = async () => {
//     try {
//       // Send a request to the backend to log out and remove the token
//       await axios.post('http://localhost:9000/user/logout', {withCredentials : true}) ; 
//       setAuthenticated(false);
//         setUser(null);
//       navigate('/');
//     } catch (error) {
//       console.error("Logout error: ", error);
//     }
//   };
  

//   return (
//     <div style={{backgroundColor : "gold"}}> 

//       {authenticated ? (
//         <div style={{justifyContent : "space-between", display: "flex"}}>
//         <div>  
//           <span onClick={() => navigate("/home")}>Home</span>
//           <span onClick={() => navigate("/watchlist")}>Watchlist</span>
//           <span onClick={() => navigate("/profile")}>Profile</span>
//         </div> 
//         <div> 
//           <span onClick={handleLogout}>Logout</span>
//         </div>
//         </div> 
//       ) : (
//         <span onClick={() => navigate("/")}>Login</span>
//       )}
//     </div>
//   );
// };

// export default Navbar;

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./navbar.css"; 

const Navbar = () => {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get('http://localhost:9000/user/status', { withCredentials: true });
        setAuthenticated(response.data.authenticated);
        setUser(response.data.user);
      } catch (error) {
        setAuthenticated(false);
        setUser(null);
      }
    };

    checkAuth();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:9000/user/logout', { withCredentials: true });
      setAuthenticated(false);
      setUser(null);
      navigate('/');
    } catch (error) {
      console.error("Logout error: ", error);
    }
  };

  return (
    <div className="navbar">
      {authenticated ? (
        <div className="navbar-authenticated">
          <div className="navbar-links">
            <span className="navbar-item" onClick={() => navigate("/home")}>Home</span>
            <span className="navbar-item" onClick={() => navigate("/watchlist")}>Watchlist</span>
            <span className="navbar-item" onClick={() => navigate("/profile")}>Profile</span>
          </div>
          <div className="navbar-logout">
            <span className="navbar-item logout" onClick={handleLogout}>Logout</span>
          </div>
        </div>
      ) : (
        <div className="navbar-login">
          <span className="navbar-item login" onClick={() => navigate("/")}>Home</span>
          <span className="navbar-item login" onClick={() => navigate("/login")}>Login</span>
          <span className="navbar-item login" onClick={() => navigate("/signup")}>Sign Up</span> 
        </div>
      )}
    </div>
  );
};

export default Navbar;
