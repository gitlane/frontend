import React from 'react';
import {render} from 'react-dom';

import {observer} from 'mobx-react';

import Devtools from 'mobx-react-devtools';

import sidebarStore from './components/sidebar/store';
import Sidebar from './components/sidebar/view';



class App extends React.Component{
	render(){

		return(
			<div>
				<Devtools />
				<Sidebar store={sidebarStore} />
			</div>
		)
	}
}

render(<App/>,document.getElementById('root'))


