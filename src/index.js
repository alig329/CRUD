import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Create';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './home';
import Login from './login';
import CreatePost from './componets/createpost';
import UpdateUser from './componets/updateuser';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  

  
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path="createpost" element={<CreatePost />} />
          <Route path="/" element={<Login></Login>} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login></Login>} />
          <Route path="/updateuser" element={<UpdateUser/>} />
          <Route path="/createuser" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);