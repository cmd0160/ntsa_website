import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

import './index.css';

import Nav from './components/Nav';
import Footer from './components/Footer';

import Home from "./pages/Home";
import About from "./pages/About"
import Offerings from "./pages/Offerings"
import Membership from "./pages/Membership"
import Login from "./pages/Login"
import Donate from "./pages/Donate";
import Contact from "./pages/Contact"

const httpLink = createHttpLink({
  uri: '/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
    <div>
      <Nav />
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/offerings" element={<Offerings />} />
          <Route exact path="/membership" element={<Membership />} />
          <Route exact path="/login_signup" element={<Login />} />
          <Route exact path="/donate" element={<Donate />} />
          <Route exact path="/contact" element={<Contact />} />
          {/* <Route exact path="/admin" component={Admin} /> */}
          {/* <Route component={NoMatch} /> */}
        </Routes>
      </div>
      <Footer />
    </div>
  </Router>
  </ApolloProvider>
  );
}

export default App;
