import React from 'react';
import GMap from './map.jsx';

export default class CityDetail extends React.Component {
    // Constructor is responsible for setting up props and setting initial stte
    constructor(props){
        // Pass props to the parent component
        super(props);
    }

    render(){
        var lat = parseFloat(this.props.params.lat),
            long = parseFloat(this.props.params.long),
            markers = [{
                position: {
                    lat: lat,
                    lng: long,
                },
                key: '1',
                defaultAnimation: 2,
            }];
        
        return (
            <div>
                <h1>City Detail</h1>
                <div className="list-group">
                    <div className="col-md-4">
                        <form>
                            <div className="control-group form-group">
                                <div className="controls">
                                    <label>Latitude:</label>
                                    <input type="text" className="form-control" id="lat" name="lat" value={lat} />
                                </div>
                            </div>
                            <div className="control-group form-group">
                                <div className="controls">
                                    <label>Longitude:</label>
                                    <input type="text" className="form-control" id="long" name="long" value={long} />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-8">
                        <GMap 
                            markers={markers}
                            lat={lat}
                            long={long}
                            zoom="13"
                            height="500px"
                        />
                    </div>
                </div>
            </div>
        );
    }
}