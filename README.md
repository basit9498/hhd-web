# HHD Web App

## Table of contents

1. [First start](#first-start)
2. [Project structure](#structure)
3. [Routing](#routing)

# Using npm dependencies

### Nodejs Version

18.14.2

### Npm Version

9.5.0

## Install Dependency

```bash
npm install
# or if there is in issue in above cmd then try this
npm install --legacy-peer-deps
```

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

# Structure

```
.
├── README.md
├── package.json
├── public
├── src
│   ├── assets
│   ├── components
│   ├── context
│   ├── routes
│   ├── pages
│   │   └── index.jsx
│   ├── services
│   ├── styles
│   │   └── style.css
│   │   └── variable.css
│   ├── App.jsx
│   ├── index.jsx
```

# Routing

We use [`react-router-dom`](https://reactrouter.com/web/guides/quick-start) for routing in the application.

Routes are stored in the `routes/PrivateRoute.jsx` file.

```javascript
import React from "react";
import { Navigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const PrivateRoute = ({ children }) => {
  const { user } = useUserContext();

  return user ? children : <Navigate to={"/"} />;
};

export default PrivateRoute;
```

Adding new route: Add public or Private route

```javascript
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import PrivateRoute from "./routes/PrivateRoute";
import User from "./pages/User";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route
            path="/app"
            element={
              <PrivateRoute>
                <User />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
```
