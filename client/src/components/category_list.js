import React from 'react';
import {ButtonGroup, Button} from 'react-bootstrap';

class CategoryList extends React.Component {
    constructor(props) {
        super(props);
    }

    render()　{
        return (
            this.props.cates.map(c => (
                <ButtonGroup vertical>
                    <Button>Button</Button>
                </ButtonGroup>
            ))
        )
    }
}

export default CategoryList;