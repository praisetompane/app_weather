let React = require('react');
let Search = require('./search/Search');
let submission = require('./search/submission');

const Home = (props) => {
    return (
        <div className='home-container'>
            <h1 className='header'> Enter a City</h1>
            <Search
                onSubmit={submission.handleSubmit(props)}
                flexDirection='column' />
        </div>)
};

module.exports = Home;