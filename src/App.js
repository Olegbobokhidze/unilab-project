import GetStartedPage from "./GetStartedPage";
import TodoList from "./TodoList";
import { GlobalStyle } from "./GlobalStyle";
import SignInPage from "./SignInPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useLocalStorage from "./useLocalStorage";
import { Navigate } from "react-router-dom";
function App() {
  const [image, setImage] = useLocalStorage("image", []);
  const [name, setName] = useLocalStorage("name", []);
  const [loggedIn, setLoggedIn] = useLocalStorage("login", false);
  return (
    <>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route
            path="/"
            element={
              !loggedIn ? <GetStartedPage /> : <Navigate to="/todolist" />
            }
          />
          <Route
            path="/signup"
            element={
              !loggedIn ? (
                <SignInPage
                  image={image}
                  setImage={setImage}
                  name={name}
                  setName={setName}
                  setLoggedIn={setLoggedIn}
                  loggedIn={loggedIn}
                />
              ) : (
                <Navigate to="/todolist" />
              )
            }
          />
          <Route
            path="/todolist"
            element={
              loggedIn ? (
                <TodoList
                  image={image}
                  name={name}
                  setImage={setImage}
                  setName={setName}
                  setLoggedIn={setLoggedIn}
                  loggedIn={loggedIn}
                />
              ) : (
                <Navigate to="/" />
              )
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
