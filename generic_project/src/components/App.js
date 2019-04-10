import React from 'react';
//import {BrowserRouter, Route} from 'react-router-dom';
//BrowserRouter ignores the history prop. SO use ROUTER
//BrowserRouter creates is own history prop - so doesnt allow create ur own
import {Router, Route, Switch} from 'react-router-dom';
import history from '../history';
import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';
import StreamShow from './streams/StreamShow';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import Header from './streams/Header';

const App = () => {
    return (<div className="container">
              <Router history={history}>
                <div>
                  <Header />
                    <Switch>
                      <Route path="/" exact component={StreamList} />
                      <Route path="/streams/new" exact component={StreamCreate} />
                      <Route path="/streams/:id" exact component={StreamShow} />
                      <Route path="/streams/edit/:id" exact component={StreamEdit} />
                      <Route path="/streams/delete/:id" exact component={StreamDelete} />
                    </Switch>
                </div>
               </Router>
            </div>
          )
};

export default App;
