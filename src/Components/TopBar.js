import React from 'react';
import { Navbar } from 'react-bootstrap';

export class TopBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isOpen:this.props.isOpen
        };

        this.text = this.text.bind(this);
        this.title = this.title.bind(this);
        this.iconClass = this.iconClass.bind(this);
    }

    text(){
        if( this.props.isOpen ){
            return 'Close'
        }
        return 'Open'
    }

    title(){
        if( this.props.isOpen ){
            return 'Close Search Panel';
        }
        return 'Open Search Panel';
    }

    iconClass(){
        if( this.props.isOpen ){
            return 'a fa-times-circle-o';
        }
        return 'a fa-search-plus';

    }

    render(){
        return(
            <div>
                <Navbar
                    inverse
                    className="affix"
                >
                    <button
                        style={{width:'100%'}}
                        title={this.title()}
                        onClick={this.props.toggleOpen}
                    >

                        <i
                            className={this.iconClass()}
                            aria-hidden="true"
                        />
                            {this.text()}
                    </button>
                </Navbar>
            </div>
        )
    }
}
