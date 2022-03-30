import React from 'react';
import './entry.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Login } from '../../components/login/Login';
import { Card } from 'react-bootstrap';
import Register from '../../components/register/Register';

export const Entry = () => {
  return (
    <Router>
      <div className='entry-page bg-info'>
          <Card className='form-box'>
            <Routes>
              <Route exact path="/" element={<Login/>}>
              </Route>
              <Route path="/register" element={<Register/>}>
              </Route>
            </Routes>
          </Card>
      </div>
    </Router>
  )
}
