import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import * as firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/database';

import Posts, { PostsT } from '../Posts';
import AddPost from '../AddPost';

// Types
export interface PropsT {
  children?: React.ReactNode;
}

type StateT = {
  posts: PostsT;
  loading: boolean;
};

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  databaseURL: process.env.REACT_APP_databaseURL,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId,
};

firebase.initializeApp(firebaseConfig);

class App extends React.Component<PropsT, StateT> {
  constructor(props: PropsT) {
    super(props);
    this.state = {
      posts: {},
      loading: false,
    };
  }
  componentDidMount(): void {
    const postsRef = firebase.database().ref('posts');

    postsRef.on('value', (snapshot) => {
      console.log('Updated value:', snapshot.val());
      this.setState({
        posts: snapshot.val(),
        loading: false,
      });
    });
  }

  render(): React.ReactNode {
    // console.log('children: ', this.props.children)
    // this.props.children &&
    // React.cloneElement(this.props.children as React.ReactElement, {
    //   firebaseRef: firebase.database().ref('posts'),
    //   posts: this.state.posts,
    //   loading: this.state.loading,
    // });

    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h2>rebbit</h2>
            <Link to="/world">Hello!</Link>
            <AddPost firebaseRef={firebase.database().ref('posts')} />
          </header>
          <Switch>
            <Route path="/world">
              <h2>Hello World</h2>
              <Link to="/posts">Posts</Link>
            </Route>
            <Route path="/posts">
              <Posts {...this.state} />
              <Link to="/">Home</Link>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
