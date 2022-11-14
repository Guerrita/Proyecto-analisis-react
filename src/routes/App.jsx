import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Home from '../pages/Home';
import '@styles/global.css';
import IncrementalSearch from '../pages/functions/IncrementalSearch';
import FalseRule from '../pages/functions/FalseRule';
import FixedPoint from '../pages/functions/FixedPoint';
import MultipleRoots from '../pages/functions/MultipleRoots';
import Newton from '../pages/functions/Newton';
import Secant from '../pages/functions/Secant';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/incremental-search" component={IncrementalSearch} />
          <Route exact path="/false-rule" component={FalseRule} />
          <Route exact path="/fixed-point" component={FixedPoint} />
          <Route exact path="/multiple-roots" component={MultipleRoots} />
          <Route exact path="/newton" component={Newton} />
          <Route exact path="/secant" component={Secant} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App;
