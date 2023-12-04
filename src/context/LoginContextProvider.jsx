import React, { useState } from "react";
import LoginContext from "./logincontext";

const AuthState = ({children}) => {
    const [IsLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <LoginContext.Provider value={{ IsLoggedIn, setIsLoggedIn }}>
      {children}
    </LoginContext.Provider>
    )

}

export default AuthState;