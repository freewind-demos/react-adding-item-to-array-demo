import React, { Component } from 'react';
import _ from 'lodash';

class Hello extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: ['Apple', 'Orange', 'Banana']
		}
	}

	render() {
		const { items } = this.state;
		return <div>
		  <input style={{width: '400px'}} type="text" onKeyPress={this._onInputItem.bind(this)} 
		placeholder="Input something and press enter to add" />
		  <ul>
				{
					items.map((item, index) => <li key={index}>{item}</li>)
				}
			</ul>
		</div>;
	}

	_onInputItem(event) {
		if (event.charCode === 13) {
			const content = event.target.value;
			if (content) {
				event.target.value = '';
				this.setState({
					items: _.concat(this.state.items, content)
				})
			}
		}
	}
}

export default Hello;