import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/DashBoard/DashBoard";
import Landing from "./components/Landing/Landing";
import NavBar from "./components/NavBar/NavBar";
import SignInForm from "./components/SignInForm/SignInForm";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import * as authService from "../src/services/authService.js";

const App = () => {
  // To test this state. You can put a truthy value to get the opposite result
  const [user, setUser] = useState(authService.getUser());

  return (
    <>
      <NavBar user={user} />
      <Routes>
        {user ? (
          <Route path="/" element={<Dashboard user={user} />} />
        ) : (
          <Route path="/" element={<Landing />} />
        )}

        <Route path="/signup" element={<SignUpForm setUser={setUser} />} />
        <Route path="/signin" element={<SignInForm setUser={setUser} />} />
      </Routes>
    </>
  );
};

export default App;
