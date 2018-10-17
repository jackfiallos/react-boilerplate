// External Components and Libraries
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
return (
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
            <h5 className="my-0 mr-md-auto font-weight-normal">
                <Link to="/">App Title</Link>
            </h5>
            <nav className="my-2 my-md-0 mr-md-3">
                <Link to="/login" className="p-2 text-dark">Login</Link>
                <Link to="/features" className="p-2 text-dark">Features</Link>
                <Link to="/about" className="p-2 text-dark">About</Link>
                <Link to="/redux" className="p-2 text-dark">Redux</Link>
            </nav>
            <Link to="/signup" className="btn btn-primary">Sign up</Link>
        </div>
    );
}

export default Header;
