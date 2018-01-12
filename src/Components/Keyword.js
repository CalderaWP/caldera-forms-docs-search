import React from 'react';
import { ControlLabel, FormGroup,FormControl } from 'react-bootstrap';

export  class  Keyword extends React.Component {
    render() {
        return (
            <FormGroup controlId="keyword-search">

                <ControlLabel>Keyword Search</ControlLabel>
                <FormControl
                    type="text"
                    value={this.props.value}
                    placeholder="Enter text"
                    onChange={this.props.change}
                />
            </FormGroup>
        );
    }
}

