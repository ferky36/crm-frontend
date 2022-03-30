import React from 'react';
import './entry.css';
import { Login } from '../../components/login/Login';
import { Card } from 'react-bootstrap';

export const Entry = () => {
  return (
    <div className='entry-page bg-info'>
        <Card className='form-box'>
            <Login></Login>
        </Card>
    </div>
  )
}
