import React, { useState, useEffect } from "react";
import { Router, Route, Routes } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material/styles";

import Signin from './components/Signin'
import Signup from './components/Signup'

export default ({ history, onSignIn }) => {
  const [location, setLocation] = useState(history.location)
  
  useEffect(() => {
    const unlisten = history.listen((location) => {
      setLocation(location)
    })

    return unlisten
  }, [history])
  
  return (
    <div>
      <StyledEngineProvider>
        <Router location={location} navigator={history}>
          <Routes>
            <Route path="auth/signin" element={<Signin onSignIn={onSignIn} />} />
            
            <Route path="auth/signup" element={<Signup onSignIn={onSignIn} />} />
          </Routes>
        </Router>
      </StyledEngineProvider>
    </div>
  );
};
