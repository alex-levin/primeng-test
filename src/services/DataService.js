import axios from 'axios';

class DataService {
    
    getCarsSmall() {
        return axios.get('data/cars-small.json')
                .then(res => res.data.data);
    }

    getCarsMedium() {
        return axios.get('data/cars-medium.json')
                .then(res => res.data.data);
    }

    getCarsLarge() {
        return axios.get('data/cars-large.json')
                .then(res => res.data.data);
    }

    getTreeTableNodes() {
        return axios.get('data/treetablenodes.json')
                .then(res => res.data.root);
    }
}

export default DataService;