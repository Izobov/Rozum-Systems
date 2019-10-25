import React from 'react';
import { connect } from 'react-redux';
import Cards from './Cards';
import { setCards } from '../../redux/reducers/cards_reducer';
import { SetMarkerPosition } from '../../redux/reducers/map_reducer';
import { Logout } from '../../redux/reducers/auth_reducer';




class CardsContainer extends React.Component {
    componentDidMount() {
        setInterval(() => this.props.setCards(), 3000)


    };
    componentWillUpdate() {
        setInterval(() => this.props.setCards(), 3000)
        setInterval(() => console.log("didUpdate"), 3000)
    }



    render() {
        console.log("RenderCards")
        return <div>
            <button on onClick={this.props.Logout}>Logout</button>
            <Cards {...this.props} />
        </div>

    }
}

let mapStateToProps = (state) => ({
    coords: state.cards.Cardscoords,
});


export default connect(mapStateToProps, { setCards, SetMarkerPosition, Logout })(CardsContainer);

