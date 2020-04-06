import React from 'react';
import 'firebase/database';

interface PropsT {
  firebaseRef: firebase.database.Reference;
}

type StateT = {
  title: string;
};

export default class AddPost extends React.Component<PropsT, StateT> {
  constructor(props: PropsT) {
    super(props);
    this.state = {
      title: '',
    };
    this.submitHandler = this.submitHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }

  submitHandler(event: React.FormEvent<HTMLButtonElement>): void {
    event.preventDefault();
    this.props.firebaseRef.push({
      title: this.state.title,
    });
    this.setState({ title: '' });
  }
  changeHandler(event: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({ title: event.target.value });
  }

  render(): React.ReactNode {
    return (
      <div className={'AddPost'}>
        <input type={'text'} onChange={this.changeHandler} placeholder={'Start typing!'} value={this.state.title} />
        <button type="submit" onClick={this.submitHandler}>
          Submit
        </button>
      </div>
    );
  }
}
