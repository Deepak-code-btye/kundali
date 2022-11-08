import Home from "./pages/Home";
import Success from "./pages/paytmStatus";
import UserDetails from "./pages/UserDetails";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Home2 from "./components/swiper";
import { useEffect } from "react";
import axios from "axios";
import Choosepayment from "./pages/choosepayment";
import Payment from "./pages/payment";
function App() {
  const { loginWithRedirect, isAuthenticated, logout, getAccessTokenSilently } =
    useAuth0();

  async function callProtectedApi() {
    try {
      const token = await getAccessTokenSilently();
      localStorage.setItem("token", JSON.stringify(token));
      const response = await axios.get("http://localhost:4000/protected", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    callProtectedApi();
  }, []);

  return (
    <div className="bg-mainBanner mix-blend-overlay bg-[#feefce] bg-fixed min-h-screen">
      {isAuthenticated ? (
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="user-form" element={<UserDetails />} />
            <Route exact path="choose" element={<Choosepayment />} />
            <Route exact path="payment" element={<Payment />} />
            <Route exact path="status/:id" element={<Success />} />
          </Routes>
        </>
      ) : (
        <Home2 />
      )}
    </div>
  );
}

export default App;
