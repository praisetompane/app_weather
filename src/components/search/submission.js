'use strict';

function handleSubmit(props) {
    return (city) => {
        props.history.push({
            pathname: 'results',
            city: city
        })
    }
}

module.exports = {
    handleSubmit
};