import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react'
const NavBar = () => {
    const [state, setState] = useState({})

    const handleItemClick = (e, { name }) => setState({ activeItem: name })

    return ( 
        <div>
            <Menu>
                <Menu.Item
                name='home'
                active={state.activeItem === 'home'}
                onClick={handleItemClick}
                >
                Home
                </Menu.Item>

                <Menu.Item name='about-us' active={state.activeItem === 'about-us'} onClick={handleItemClick}>
                About Us
                </Menu.Item>

                <Menu.Item
                name='contact'
                active={state.activeItem === 'contact'}
                onClick={handleItemClick}
                >
                Contact
                </Menu.Item>
            </Menu>
        </div>
     );
}
 
export default NavBar;