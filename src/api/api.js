import * as axios from "axios";
import data from './api/endpoint/coordinats.json'


export const CardsAPI = {

    getCards() {
        return data
    }
}