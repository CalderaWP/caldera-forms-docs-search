import React from 'react';

export class Catdera extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            width: props.hasOwnProperty('width' ) ? props.width : '50px',
            height: props.hasOwnProperty('height' ) ? props.height : 'auto',
            className: props.spin  ? 'catdera-logo spin-loader' : 'catdera-logo'
        };



    }

    componentDidMount(){
        if( this.props.spin){
            this.state.className = 'catdera-logo spin-loader';
        }
    }
    render(){
        return(
            <img
                src="https://calderaforms.com/wp-content/uploads/2017/05/catdera-no-text-768x747.jpg"
                className={this.state.className}
                style={
                    {
                        width:this.state.width,
                        height: this.state.height
                    }
                }
                alt="Catdera Mascot"
            />
        )
    }
}