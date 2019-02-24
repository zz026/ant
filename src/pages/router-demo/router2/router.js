import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './Home';
import Info from './Info';
import NoMatch from './NoMatch';
import Main from '../router1/Main';
import About from '../router1/About';
import Topics from '../router1/Topics';

export default class IRouter extends React.Component{
  render() {
    return (
      <HashRouter>
        <Home>
          <Route path="/main" render={() => 
            <Main>
              <Route path="/main/:id" component={Info}></Route>
            </Main>
          }></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/topics" component={Topics}></Route>
          <Route component={NoMatch}></Route>
        </Home>
      </HashRouter>
    );
  }
}
