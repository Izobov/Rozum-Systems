import React from 'react';
import { connect } from 'react-redux';
import Cards from './Cards';
import { setCoordinats } from '../../redux/reducers/cards_reducer';




class CardsContainer extends React.Component {
    componentDidMount() {
        this.props.setCoordinats()

    };

    componentDidUpdate(prevProps, prevState) {
    }

    render() {
        return <Cards {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    coords: state.cards.coords,
});


export default connect(mapStateToProps, { setCoordinats })(CardsContainer);

