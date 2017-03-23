import React from 'react';
import { Link } from 'react-router';

export default class CityList extends React.Component {
    // Constructor is responsible for setting up props and setting initial stte
    constructor(props){
        // Pass props to the parent component
        super(props);
        // Set initial state
        this.state = {
            // State needed
            list: []
        };
    }

    componentDidMount(){
        // Static data
        let data = [
            {
                id: 1,
                name: 'Bangalore',
                lat:  '12.9716',
                long: '77.5946',

            },
            {
                id: 2,
                name: 'Hyderabad',
                lat:  '17.3850',
                long: '78.4867',

            },
            {
                id: 3,
                name: 'Mumbai',
                lat:  '19.0760',
                long: '72.8777',

            },
        ];
        // Update state
        this.setState({list: data});
    }

    render(){
        // Map through cars and return linked cars
        const listNode = this.state.list.map((city) => {
            return (
                <Link
                    to={"/view/"+city.lat+"/"+city.long}
                    className="list-group-item"
                    key={city.id}>
                    {city.name}
                </Link>
            )
        });
        return (
            <div>
                <h1>City List</h1>
                <div className="list-group">
                    {listNode}
                </div>
            </div>
        );
    }
}