import React,{useState} from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Profile from './components/userProfile'
import ListUsers from './components/UserList'

function App() {
  const [users, setUsers] = useState([]);
  return (
    <Router>
      <Route exact path='/'>
      <ListUsers users={users}  setUsers={setUsers}/>
      </Route>

       <Route  path='/profile/:userId' >
       <Profile users={users}/>
      </Route>
      
    </Router>
  );
}

export default App;
