import React from 'react';
import {Post} from "./Post";

export class Results extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.posts.map((post) => {
                        return (
                            <div key={post.id}>
                                <Post
                                    post={post}
                                />
                            </div>
                        );
                    })
                }
            </div>

        );
    }
}