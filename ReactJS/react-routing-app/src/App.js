import logo from './logo.svg';
import './App.css';
import { Home } from './Components/Home'
import { About } from './Components/About'
import { Contact } from './Components/Contact'
import { Services } from './Components/Services'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import { PageNotFound } from './Components/PageNotFound';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container px-5">
            <a class="navbar-brand" href="#!">Start Bootstrap</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item"><Link class="nav-link" to="/">Home</Link></li>
                <li class="nav-item"><Link class="nav-link" to="/about">About</Link></li>
                <li class="nav-item"><Link class="nav-link" to="/services">Service</Link></li>
                <li class="nav-item"><Link class="nav-link" to="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>
        </nav>

        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />
          <Route component={PageNotFound} />
        </Switch>

        {/* <Home />
        <About />
        <Contact />
        <Services /> */}

        <footer class="py-5 bg-dark">
          <div class="container px-4 px-lg-5">
            <p class="m-0 text-center text-white">Copyright &copy; Your Website 2021</p>
          </div>
        </footer>
      </div>

    </BrowserRouter >
  );
}

export default App;
