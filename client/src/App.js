import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import { useContext } from "react";
import { Context } from "./context/Context";
import Sidebar from "./components/admin/sidebar/Sidebar";
import Dashboard from './components/admin/dashboard/Dashboard';
import Invoices from './pages/invoices/Invoices';
import Mainblog from './pages/mainblog/Mainblog';
import Mainprojects from './pages/mainprojects/Mainprojects';
import MainReport from "./pages/reportpage/MainReport";
import Nopage from './pages/pagenotfound/Nopage';
import Editpost from "./pages/mainblog/Editpost";


function App() {
  const { user } = useContext(Context);
  // const user = true;
  return (
    <Router>
      {
        user ?(
          <div className="dashboard-view">
            <Sidebar />
            <Switch>
              <Route path='/' exact component={Dashboard} />
              <Route path="/projects">
                {user ? <Mainprojects />:<Home />}
              </Route>
              <Route path="/blog">
                <Mainblog />
              </Route>
              <Route path="/edit-blog">
                <Editpost />
              </Route>
              <Route path="/reports">
                <MainReport />
              </Route>
              <Route path="/invoice">
                <Invoices />
              </Route>
              <Route path="/settings">
                {user ? <Settings /> : <Register />}
              </Route>
            </Switch>
          </div>
        ):(
          
          <div>
            <NavBar />
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/register">
                  {user ? <Home /> : <Register />}
                </Route>
                <Route path="/post/:postId">
                  <Single />
                </Route>
                <Route component={Nopage}/>
              </Switch>
            <Footer />
          </div>
        )
    } 
    </Router>
  );
}

export default App;
