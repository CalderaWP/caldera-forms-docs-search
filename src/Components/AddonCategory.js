import axios from 'axios';
import React from 'react';
import { Checkbox, ControlLabel, FormGroup } from 'react-bootstrap';
import { Catdera } from './Catdera';
import { cacheAdapterEnhancer } from 'axios-extensions';

export class AddonCategory extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loaded: false,
            category:{
                name: 'Placeholder Name'
            }
        }
    }

    componentDidMount(){
        return axios({
            method: 'get',
            url: `https://calderaforms.com/wp-json/wp/v2/categories/${this.props.category}`,
            adapter: cacheAdapterEnhancer(axios.defaults.adapter, true)
        })
            .then( (response) => {
                setTimeout(() => {
                    this.setState({loaded: true});
                }, 250 );
                this.setState({category: response.data});
            });
    }
    render(){
        return(
            <FormGroup>
                {!this.state.loaded &&
                    <Catdera
                        width={10}
                    />
                }
                {this.state.loaded &&

                    <Checkbox
                        onChange={this.props.onChange}
                        checked={this.props.checked}
                        category={this.props.category}
                    >
                        <ControlLabel>
                            {this.state.category.name}
                        </ControlLabel>
                    </Checkbox>
                }

            </FormGroup>

        )
    }
}