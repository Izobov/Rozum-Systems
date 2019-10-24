import React from 'react';
import { connect } from 'react-redux';
import Cards from './Cards';
import { setCards } from '../../redux/reducers/cards_reducer';
import { SetMarkerPosition } from '../../redux/reducers/map_reducer';




class CardsContainer extends React.Component {
    componentDidMount() {
        this.props.setCards()

    };

    componentDidUpdate(prevProps, prevState) {
    }

    render() {
        return <Cards {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    coords: state.cards.Cardscoords,
});


export default connect(mapStateToProps, { setCards, SetMarkerPosition })(CardsContainer);

