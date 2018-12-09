import React from 'react';

class NewPost2 extends React.Component {
  state = {
    title: '',
    body: ''
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.fetchAllPosts2();
    if (this.state.title.trim() && this.state.body.trim()) {
      this.props.onAddPost2(this.state);
      this.handleReset();
    }
  };

  handleReset = () => {
    this.setState({
      title: '',
      body: ''
    });
  };

  render() {
    return (
      <div>
          <form onSubmit={ this.handleSubmit }>
          <div className="form-group">
              <input
              type="text"
              hidden={true}
              placeholder="Title"
              className="form-control"
              name="title"
              onChange={ this.handleInputChange }
              value={ this.state.title }
            />
          </div>
          <div className="form-group">
            <textarea
              cols="19"
              rows="8"
              hidden={true}
              placeholder="Body"
              className="form-control"
              name="body"
              onChange={ this.handleInputChange }
              value={ this.state.body }>
            </textarea>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">Add Post</button>
            <button type="button" className="btn btn-warning" onClick={ this.handleReset }>
              Reset
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default NewPost2;