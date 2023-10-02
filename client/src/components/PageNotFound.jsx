import React from 'react'
import Loader from '../components/layout/Loader/Loader.jsx';
import Button from './Button.jsx';
import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <div>
      <Link to='/'>
      <Button title={"Page not found go to home"} />
      </Link>
      <Loader/>
    </div>
  )
}
