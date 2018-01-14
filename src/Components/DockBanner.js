import React from 'react';
import {FeaturedImage} from "./FeaturedImage";
import Image from './Image';

export class DockBanner extends React.Component {
    render(){
        return(
            <div>
                {'left' === this.props.panelPosition &&
                    <FeaturedImage
                        post={{id: 97065}}
                        style={this.props.style}
                    />
                }

            </div>
        )
    }
}
