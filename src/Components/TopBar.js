import React from 'react';
import {Navbar, Nav, NavItem, Glyphicon, Button} from 'react-bootstrap';

export class TopBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: this.props.isOpen
        };

        this.text = this.text.bind(this);
        this.title = this.title.bind(this);
        this.icon = this.icon.bind(this);
        this.supportUrl = this.supportUrl.bind(this);
    }

    text() {
        if (this.props.isOpen) {
            return 'Close Search Panel'
        }
        return 'Open Search Panel'
    }

    title() {
        if (this.props.isOpen) {
            return 'Close Search Panel';
        }
        return 'Open Search Panel';
    }

    icon() {
        if (this.props.isOpen) {
            return 'remove-circle';
        }
        return 'search';

    }
    supportUrl(){
        return `https://calderaforms.com/support?utm_source=search&utm_term=${(this.props.lastParams.categories)}&utm_keyword=${encodeURIComponent(this.props.lastParams.s)}`;
    }


    render() {
        return (
            <Navbar
                inverse
                fixedTop
                className={'cf-doc-search-nav'}
            >
                <Nav>

                    <Button bsStyle="info" href={this.supportUrl()} glyph={'star'}>Support</Button>

                </Nav>

                <Nav
                    pullRight
                >
                    <NavItem
                        className={'cf-doc-search-sidebar-toggle'}
                        eventKey={1}
                        title={this.title()}
                        onClick={this.props.toggleOpen}
                    >
                        <Glyphicon
                            glyph={this.icon()}
                        />
                        <span
                            className={'description'}
                        >
                                {this.text()}
                            </span>
                    </NavItem>
                </Nav>
            </Navbar>

        )
    }
}
