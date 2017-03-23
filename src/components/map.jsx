import React from 'react';
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";

export default function GMap (props) {
  	return (
	    <section style={{height: props.height}}>
			<GoogleMapLoader
	        	containerElement={
	          		<div
	            		{...props.containerElementProps}
						style={{
							height: props.height,
						}}
	          		/>
	        	}
	        	googleMapElement={
	          		<GoogleMap
	            		ref={(map) => console.log(map)}
	            		defaultZoom={parseInt(props.zoom)}
	            		defaultCenter={{ lat: props.lat, lng: props.long }}
	          		>
	          			{props.markers.map((marker, index) => {
	              			return (
	                			<Marker {...marker} />
	              			);
	            		})}
	          		</GoogleMap>
	        	}
	      	/>
	    </section>
  	);
}