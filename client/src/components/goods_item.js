import React from 'react';

class Goodsitem extends React.Component {
	render() {
		return (
			<div>
				{this.props.model.name}
			</div>
		)
	}
}

export default Goodsitem;