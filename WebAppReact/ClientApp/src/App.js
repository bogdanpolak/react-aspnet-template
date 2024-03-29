import React from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';

import './custom.css'

export default function App() {
  return (
    <Layout>
      <Route exact path='/'> <Home /> </Route>
      <Route path='/counter'> <Counter initialValue="100" /> </Route>
      <Route path='/fetch-data'> <FetchData /> </Route>
    </Layout>
  );
}
