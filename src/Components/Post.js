import React from 'react';
import {FeaturedImage} from "./FeaturedImage";
import {Grid,Row,Col} from 'react-bootstrap';

export class Post extends React.Component {
    constructor(props){
        super(props);
        this.url = this.url.bind(this);
    }

    url(){
        return this.props.post.link + `?utm_source=search&utm_term=${(this.props.lastParams.categories)}&utm_keyword=${encodeURIComponent(this.props.lastParams.s)}`;
    }

    createExcerpt() {
        return {__html: this.props.post.excerpt.rendered};
    }

    createTitle() {
        return {__html: this.props.post.title.rendered};
    }

    render() {
        return (
            <Grid>
                <article
                    id={`post-${this.props.post.id}`}
                    className={`post-${this.props.post.id} row not-box hentry`}
                >
                    <Row>
                        <Col xs={12}>
                            <div
                                className="entry-header"
                                role="heading"
                            >
                                <h2
                                    className="entry-title"
                                >
                                    <a
                                        href={this.url()}
                                        rel="bookmark"
                                    >
                                        <div dangerouslySetInnerHTML={this.createTitle()} />
                                    </a>
                                </h2>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={12} sm={3} md={4}>
                            <FeaturedImage
                                apiRoot={this.props.apiRoot}
                                post={this.props.post}
                                lastParams={this.props.lastParams}
                            />
                        </Col>
                        <Col xs={12} sm={12} md={8}>
                            <div className="entry-content">
                                <div dangerouslySetInnerHTML={this.createExcerpt()} />

                            </div>
                        </Col>
                        <Col xs={12}>
                            <a
                                href={this.url()}
                                className="btn btn-green btn-block btn-readmore"
                                rel="bookmark"

                            >
                                Read More
                            </a>
                        </Col>
                    </Row>








                    <footer className="entry-footer">
                    </footer>


                </article>
            </Grid>


        )
    }

}