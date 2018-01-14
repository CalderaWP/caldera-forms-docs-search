import React from 'react';
import {Navbar, Nav, NavItem, Glyphicon} from 'react-bootstrap';

export class TopBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: this.props.isOpen
        };

        this.text = this.text.bind(this);
        this.title = this.title.bind(this);
        this.icon = this.icon.bind(this);
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

    render() {
        return (
            <Navbar
                inverse
                className={'affix cf-doc-search-nav'}
            >

                <Nav
                    pullRight
                >
                    <NavItem
                        className={'cf-doc-search-sidebar-toggle'}
                        eventKey={1}
                        href="#"
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
