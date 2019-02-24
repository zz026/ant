import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Admin from './admin';
import Login from './pages/login';
import NoMatch from './pages/noMatch';
// ui
import Buttons from './pages/ui/buttons';
import Modals from './pages/ui/modals';
import Loadings from './pages/ui/loadings';
import Notifications from './pages/ui/notification';
import Messages from './pages/ui/messages';
import myTabs from './pages/ui/tabs';
import Gallery from './pages/ui/gallery';
import Carousels from './pages/ui/carousel';
// 表格
import BasicTable from './pages/table/basic';
import HighTable from './pages/table/high';
// 表单
import LoginForm from './pages/form/login-form';
import RegistForm from './pages/form/regist-form';

export default class Router extends React.Component{

  render() {
    return (
      <HashRouter>
        <App>
          <Route path="/login" component={Login} />
          <Route path="/" render={()=>
            <Admin>
              <Switch>
                <Route path="/ui/buttons" component={Buttons}></Route>   
                <Route path="/ui/modals" component={Modals}></Route>
                <Route path="/ui/loadings" component={Loadings}></Route>
                <Route path="/ui/notification" component={Notifications}></Route>
                <Route path="/ui/messages" component={Messages}></Route>
                <Route path="/ui/tabs" component={myTabs}></Route>
                <Route path="/ui/carousel" component={Carousels}></Route>
                <Route path="/ui/gallery" component={Gallery}></Route>
                <Route path="/table/basic" component={BasicTable}></Route>
                <Route path="/table/high" component={HighTable}></Route>
                <Route path="/form/login" component={LoginForm}></Route>
                <Route path="/form/reg" component={RegistForm}></Route>
                <Route component={NoMatch}></Route>
              </Switch>
            </Admin>
          } />
        </App>
      </HashRouter>
    );
  }
}