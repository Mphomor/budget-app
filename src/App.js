import logo from './logo.svg';
import './App.css';



import React, {useState, useEffect} from 'react'
import Home from './components/home'
import Login from './components/login'
import SignUp from './components/signup'

import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'

import {collection, getDocs} from 'firebase/firestore';

function App() {


  useEffect(()=>{

    
  })

  const [transaction, setTransaction] = useState ([]);

  const addTransaction = ((amount, name, transactionType)=>{


    setTransaction((item)=> [...item, {
      uid:transaction.length,
      amount:amount,
      name:name,
      transactionType:transactionType
    }])

  
  })
  return (
    <div className="container">
    <Router>

      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route path="/sign-up" component={SignUp}></Route>

        <Route path="/home">
          <Home list={transaction}   add={addTransaction} />
        </Route>



      </Switch>

    
    </Router>
    </div>


  );
}

export default App;
