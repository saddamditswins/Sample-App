import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Home from "./pages/dashbord";
import Login from "./components/auth/Login";

const publicRoutes = [{ path: "/login", component: <Login /> }];
const privateRoutes = [
  { path: "/", component: <Home /> },
  {
    path: "about",
    component: <About />,
  },
  { path: "/contact", component: <Contact /> },
];
const authToken = localStorage.getItem("token") || null;
const App = () => {
const [token,setToken] = useState(null);

  useEffect(() => {
   setToken(authToken)
  },[authToken])


  return <>
    {token ? privateRoutes.map((route) => (
      <>
        {(
          <Route
            index
            key={route.path}
            path={route.path}
            exact
            element={route?.component}
          />
        )}
      </>
    )) : publicRoutes.map((route)=> ( <Route path={route.path} element={route.component}>
      {route.subMenu.map((item) => (
        <Route path={item.path} element={item.component} />
      ))}
    </Route>))  }
  </>
}
<>
</>
export default App;