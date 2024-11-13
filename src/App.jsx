import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Dashboard from "./components/DashBoard/DashBoard";
import Landing from "./components/Landing/Landing";
import NavBar from "./components/NavBar/NavBar";
import SignUpForm from "./components/SignUpForm/SignUpForm";

const App = () => {
  // To test this state. You can put a truthy value to get the opposite result
  const [user, setUser] = useState(true);

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
      </Routes>
    </>
  );
};

export default App;
