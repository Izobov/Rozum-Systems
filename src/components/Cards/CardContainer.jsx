import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Cards from './Cards';



class CardContainer extends React.Component {
    componentDidMount() {


    };

    componentDidUpdate(prevProps, prevState) {
    }

    render() {
        return <Cards />
    }
}

let mapStateToProps = (state) => ({

});

export default CardContainer;

