import React from 'react'
import './home.css';
import { Link } from 'react-router-dom'
const Home = props => (
    <div className="home">
        <h1 className="home-header">Assignments</h1>
        <Link to="/employee"><p className="home-body">Search Employees</p></Link>
        <Link to="/portfolio"><p className="home-body">Portfolio</p></Link>
        <Link to="/counter"><p className="home-body">Timer Counter</p></Link>
        <Link to="/memo"><p className="home-body">Memo</p></Link>
        <Link to="/CountVal"><p className="home-body">Counter</p></Link>
        <Link to="/RefApp"><p className="home-body">ToDo</p></Link>
        <Link to="/typeCheck"><p className="home-body">TypeChecking</p></Link>

    </div>
)

export default Home