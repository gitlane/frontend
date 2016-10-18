import {observer} from 'mobx-react';
import React from 'react';
import style from './Style.sass';

@observer class Sidebar extends React.Component{
	render(){
		return(
			<div className='deneme'>
				Sidebar:{this.props.store.count}<br/>
				<button onClick={this.handleInc}> + </button>
				<button onClick={this.handleDec}> - </button>
			</div>
		)
	}
	handleInc = () => {
		this.props.store.increment()
	}
	handleDec = () => {
		this.props.store.decrement()
	}
}

module.exports =  Sidebar
