import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
const NavBar = () => {
    const [state, setState] = useState({})

    const handleItemClick = (e, { name }) => setState({ activeItem: name })

    return ( 
        <div>
            <Menu>
                <Link to="/home"><Menu.Item
                    name='home'
                    active={state.activeItem === 'home'}
                    onClick={handleItemClick}
                    >
                    Home
                </Menu.Item>
                </Link>
                <Link to="/login"><Menu.Item
                name='contact'
                active={state.activeItem === 'contact'}
                onClick={handleItemClick}
                >
                Login
                </Menu.Item>
                </Link>

                <Link to="/todolist"><Menu.Item name='about-us' active={state.activeItem === 'about-us'} onClick={handleItemClick}>
                Todo List
                </Menu.Item>
                </Link>
                
            </Menu>
        </div>
     );
}
 
export default NavBar;