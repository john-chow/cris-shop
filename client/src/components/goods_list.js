import React from 'react';
import GoodsItem from './goods_item';

class Goodslist extends React.Component {
	constructor(props) {
    	super(props);
  	}

	render() {
        const items = this.props.goods.map(g => 
            <GoodsItem key={g.id} model={g} />
        )
        return (
            <div>{items}</div>
        )
	}
}

export default Goodslist;