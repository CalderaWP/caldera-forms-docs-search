import React from 'react';
import axios from 'axios';
import Image from './Image';
import { cacheAdapterEnhancer } from 'axios-extensions';

export  class FeaturedImage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loaded: true,
            alt_text: '',
            width: 1484,
            height: 592,
            source_url: 'https://calderaforms.com/wp-content/uploads/2017/12/forms_copy.jpg',
            style: props.style ? props.style : {},
        };

        this.url = this.url.bind(this);
    }

    url(){
        return this.props.post.link + `?utm_source=search&utm_term=${(this.props.lastParams.categories)}&utm_keyword=${encodeURIComponent(this.props.lastParams.s)}`;
    }

    componentDidMount(){
        axios({
            method: 'get',
            url: `${this.props.apiRoot}/wp/v2/media`,
            params: {
                parent: this.props.post.id
            },
            adapter: cacheAdapterEnhancer(axios.defaults.adapter, true)
        }).then((response)=>{
            const newImage = response.data[0];

            if (newImage && newImage.hasOwnProperty( 'alt_text')) {
                this.setState({
                    alt_text: newImage.alt_text,
                    source_url: newImage.source_url,
                    width: newImage.media_details.width,
                    height: newImage.media_details.height,
                });
            }

        })
    }

    render(){
        return(
            <div>

                <a href={this.url()} >
                    <Image
                        className="large img-responsive"
                        alt={this.state.alt_text}
                        width={this.state.width}
                        height={this.state.height}
                        src={this.state.source_url}
                        style={this.state.style}
                    />
                </a>

            </div>

        )

    }


}