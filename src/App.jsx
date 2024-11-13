import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/DashBoard/DashBoard";
import Landing from "./components/Landing/Landing";
import NavBar from "./components/NavBar/NavBar";

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
      </Routes>
    </>
  );
};

export default App;
