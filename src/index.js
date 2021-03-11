import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Router from './router'

ReactDOM.render(
  <Suspense fallback='loading...'>
    <Router />
  </Suspense>,
  document.getElementById('root')
)
