import React, {Component} from 'react';

class Scroll extends Component{
	render(){
		return(
			<div style={{overflowY: 'scroll', border: '1px solid black', height:'70vh'}}>
				{this.props.children}
			</div>
		);
	}
}

export default Scroll;