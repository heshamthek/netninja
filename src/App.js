import './App.css';
import Navbar from "./Navbar";
import Home from "./Home"
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";


const link = "www.google.com";
function App() {
  return (
      <Router>
              <Navbar />
              <div className="content">
                  <Switch>
                      <Route exact path="/">
                          <Home />
                      </Route>
                      <Route path="/create">
                          <Create />
                      </Route>
                      <Route path="/blogs/:id">
                          <BlogDetails />
                      </Route>
                  </Switch>
              </div>
      </Router>
  );
}

export default App;
