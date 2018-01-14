import React from 'react';
import {FeaturedImage} from "./FeaturedImage";

export class Post extends React.Component {
    constructor(props){
        super(props);
        this.url = this.url.bind(this);
    }

    url(){
        //@todo set utms here
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
            <article
                id={`post-${this.props.post.id}`}
                className={`post-${this.props.post.id} row not-box hentry`}
            >
                <div
                    className="entry-header"
                    role="heading"
                >
                    <h2
                        className="entry-title"
                    >
                        <a
                            href={this.props.post.link}
                            rel="bookmark"
                        >
                            <div dangerouslySetInnerHTML={this.createTitle()} />
                        </a>
                    </h2>
                </div>

                <FeaturedImage
                    apiRoot={this.props.apiRoot}
                    post={this.props.post}
                />

                <div className="entry-content">
                    <div dangerouslySetInnerHTML={this.createExcerpt()} />
                    <a
                        href={this.url()}
                        className="btn btn-green btn-block btn-readmore"
                        rel="bookmark"

                    >
                        Read More
                    </a>
                </div>



                <footer className="entry-footer">
                </footer>


            </article>

        )
    }

}