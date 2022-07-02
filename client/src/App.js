import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from "@apollo/client/link/context";


import './index.css';
import './mobile.css';

import Nav from './components/Nav';
import Footer from './components/Footer';

import Home from "./pages/Home";
import About from "./pages/About"
import Offerings from "./pages/Offerings"
import Membership from "./pages/Membership"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Profile from "./pages/Profile";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact"

const httpLink = createHttpLink({
  // uri: "/graphql", uncomment for live server and delete row below
  uri: "http://localhost:3001/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  // link: httpLink,
  cache: new InMemoryCache(),
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
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/profile" element={<Profile />} />
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
