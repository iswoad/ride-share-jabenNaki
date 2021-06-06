import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div class = 'header'>
            <nav>
                <Link>Home</Link>
                <Link>Destination</Link>
                <Link>Blog</Link>
                <Link>Contact</Link>
            </nav>

        </div>
    );
};

export default Header;