import React from 'react';

export interface PropsT {
  posts?: Array<{ title: string }> | undefined;
  loading?: boolean;
}

export default class Posts extends React.Component<PropsT> {
  render(): React.ReactNode {
    if (this.props.loading) {
      return <div>Loading...</div>;
    }

    return (
      <div className={'Posts'}>
        {this.props.posts &&
          this.props.posts.map((post, idx) => {
            return <div key={idx}>{post.title}</div>;
          })}
      </div>
    );
  }
}
