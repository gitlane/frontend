import {observer} from 'mobx-react';
import React from 'react';

@observer class Counter extends React.Component{

	render(){
		return(
			<div>
				Counter:{this.props.store.count}<br/>
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

module.exports = Counter;