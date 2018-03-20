import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Logo from '../../dumb/logo/index';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        };
    }



    render() {
        const menus = [
            { linkName: 'Home', path: '/home' },
            { linkName: 'Menu', path: '/Menu' },
            { linkName: 'Trending', path: '/Trending' },
            { linkName: 'Email', path: '/Email' },
        ];
        return (
            <aside className='navigation'>
                <Logo/>
                <nav>
                    <ul className="nav-list">
                        {menus.map((value, index) => <li key={index} className="text-center">
                            <Link to={value.path.toLowerCase()} className={value.linkName.toLowerCase()} />
                        </li>)}
                    </ul>
                </nav>
            </aside>
        );
    }
}
Navigation.propTypes = {
    navToggle: PropTypes.bool,
};
Navigation.defaultProps  = {
    navToggle: false,
};
export default Navigation;
