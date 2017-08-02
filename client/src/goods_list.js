import React from 'react';
import GoodsItem from './goods_item';
import {xhrget} from './request';

class Goodslist extends React.Component {
	constructor(props) {
    	super(props);
        this.state = {data: []};
        this.fetch(this.props.page, this.props.pagesize);
  	}

    fetch(page, pagesize) {
        xhrget('/goods', {
            page:       page,
            pagesize:   pagesize,
        }).then(data => this.setState({data: data}))
    }

	render() {
        const items = this.state.data.map((one) => 
            <GoodsItem key={one.id} model={one} />
        )
        return (
            <div>{items}</div>
        )
	}
}

export default Goodslist;