import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import './index.css';
import App from './components/app/App';
import Headers from './components/headers/Header';
import FooterComponent from './components/footer/Footer';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {store, history} from './redux/store';
import { Layout } from 'antd';



const Home = (props) => { 
	return (
        <Provider store={store}>
		<Layout className="layout">
		<Headers />
				<Router>
					 <Switch>
				          	<Route exact path="/" component={App} history={history} />
				     </Switch>
			 	</Router>
	 <FooterComponent />
	 </Layout>
        </Provider>

	 );
};

		
	 

ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();
