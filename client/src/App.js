import React from 'react';
import Goodslist from './goods_list';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
    	<div>
    	<div id="header"></div>
    	<Goodslist page="1" pagesize="100" />
    	<div id="footer"></div>
    	</div>
    );
  }
}

export default App;

