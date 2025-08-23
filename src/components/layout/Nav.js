let React = require('react');
let Search = require('../search/Search');
let submission = require('../search/submission');
let NavLink = require('react-router-dom').NavLink;

const Nav = (props) => {
    return (
        <div className='navbar'>
            <NavLink
                className='link-without-underline'
                to={{
                    pathname: '/'
                }}
            >
                <h1> The Very Unique Weather App ;)</h1>
            </NavLink>

            <Search
                onSubmit={submission.handleSubmit(props)}
                flexDirection='row' />
        </div>
    )
};


module.exports = Nav;