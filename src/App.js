import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'
// pages & components
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Navbar from './components/Navbar'

function App() {
  const {authisReady, user} = useAuthContext()
  return (
    <div className="App">
      {authisReady && (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            {!user && <Redirect to='/login'/>}
            {user && <Home />}
          </Route>
          <Route path="/login">
            {user && <Redirect to='/' />}
            {!user && <Login />}
          </Route>
          <Route path="/signup">
            {user && <Redirect to ='/' />}
            {!user && <Signup />}
          </Route>
        </Switch>
      </BrowserRouter>)}

    </div>
  );
}

export default App