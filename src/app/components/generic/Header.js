// External Components and Libraries
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.div`
    background-color: ${props => props.theme.header.background};
    a {
        color: ${props => props.theme.header.appName};
    }
    nav {
        a {
            color: ${props => props.theme.header.links};
        }
    }
    .btn-primary {
        color: ${props => props.theme.header.primary.color};
        background-color: ${props => props.theme.header.primary.backgroundColor};
        border-color: ${props => props.theme.header.primary.borderColor};
    }
`;

const Header = () => {
    return (
        <StyledHeader className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 border-bottom shadow-sm">
            <h5 className="my-0 mr-md-auto font-weight-normal">
                <Link to="/">App Title</Link>
            </h5>
            <nav className="my-2 my-md-0 mr-md-3">
                <Link to="/login" className="p-2">
                    Login
                </Link>
                <Link to="/features" className="p-2">
                    Features
                </Link>
                <Link to="/about" className="p-2">
                    About
                </Link>
                <Link to="/redux" className="p-2">
                    Redux
                </Link>
                <Link to="/lazy" className="p-2">
                    Lazy
                </Link>
            </nav>
            <Link to="/signup" className="btn btn-primary">
                Sign up
            </Link>
        </StyledHeader>
    );
};

export default Header;
