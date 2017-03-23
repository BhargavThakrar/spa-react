import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from './components/app.jsx';
import CityList from './components/city_list.jsx';
import CityDetail from './components/city_detail.jsx';

ReactDOM.render(
	<Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={CityList} />
            <Route path="/view/:lat/:long" component={CityDetail}/>
        </Route>
    </Router>,
    document.getElementById('app')
);