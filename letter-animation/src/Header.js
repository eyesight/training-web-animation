import React, { Component } from 'react';
import { NavLink, withRouter } from "react-router-dom";

class Header extends Component {

    componentDidMount() {
    }
    componentWillUnmount(){
    }
    render() {
        return (
            <header className="header">
                <div className="header__inner">
                    <ul className="navigation">
                        <li className="navigation__item"><NavLink activeClassName="active" className="anchor" exact to="/">Page 1</NavLink></li>                
                        <li className="navigation__item"><NavLink activeClassName="active" className="anchor" exact to="/page2">Page 2</NavLink></li>
                    </ul>
                </div>
            </header>
        );
    }
}


export default withRouter(Header);
