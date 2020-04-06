import React from 'react';

interface PropsT {
  posts: PostsT;
  loading: boolean;
}

export interface PostsT {
  [index: string]: PostT;
}
export interface PostT {
  title: string;
}

export default class Posts extends React.Component<PropsT> {
  render(): React.ReactNode {
    if (this.props.loading) {
      return <div>Loading...</div>;
    }

    return (
      <div className={'Posts'}>
        {this.props.posts &&
          Object.keys(this.props.posts).map((key) => {
            return <div key={key}>{this.props.posts[key].title}</div>;
          })}
      </div>
    );
  }
}
