import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Search from './pages/Search';
import Saved from './pages/Saved';
import Book from './pages/Book';
import NoMatch from './pages/NoMatch'

const App = () => {
    return (
        <Router>
          <>
            <Nav />
            <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/saved" component={Saved} />
            <Route exact path="/books/:id" component={Book} />
            <Route component={NoMatch} />
            </Switch>
          </>
        </Router>
    )
}

export default App;