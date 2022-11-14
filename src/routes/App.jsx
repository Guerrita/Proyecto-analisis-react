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
import Cholesky from '../pages/Matrices/Cholesky';
import Crout from '../pages/Matrices/Crout';
import Doolittle from '../pages/Matrices/Doolittle';
import Gauss_Seidel from '../pages/Matrices/GaussSeidel';
import Jacobi from '../pages/Matrices/Jacobi';
import SOR from '../pages/Matrices/SOR';
import LUWithPartialPivoting from '../pages/Matrices/LUWithPartialPivoting';
import LUwithGaussianSimpleElimination from '../pages/Matrices/LUwithGaussianSimpleElimination';
import GaussianEliminationWithTotalPivoting from '../pages/Matrices/GaussianEliminationWithTotalPivoting';
import GaussianSimpleElimination from '../pages/Matrices/GaussianSimpleElimination';
import GaussianEliminationWhitPartialPivoting from '../pages/Matrices/GaussianEliminationWithPartialPivoting';


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
          <Route exact path="/cholesky" component={Cholesky} />
          <Route exact path="/crout" component={Crout} />
          <Route exact path="/doolittle" component={Doolittle} />
          <Route exact path="/gauss-seidel" component={Gauss_Seidel} />
          <Route exact path="/jacobi" component={Jacobi} />
          <Route exact path="/sor" component={SOR} />
          <Route exact path="/lu-with-partial-pivoting" component={LUWithPartialPivoting} />
          <Route exact path="/lu-with-gaussian-simple-elimination" component={LUwithGaussianSimpleElimination} />
          <Route exact path="/gaussian-elimination-with-total-pivoting" component={GaussianEliminationWithTotalPivoting} />
          <Route exact path="/gaussian-simple-elimination" component={GaussianSimpleElimination} />
          <Route exact path="/gaussian-elimination-with-partial-pivoting" component={GaussianEliminationWhitPartialPivoting} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App;
