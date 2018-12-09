import React from 'react';
import { connect } from 'react-redux';
import Post3 from './../components/Post3';
import { deletePost3 } from '../actions';

function PostList3({ posts3, onDelete3 }) {
  if(!posts3.length) {
    return (
      <div>
        No Posts
      </div>
    )
  }
  return (
    <div>
      {posts3.map(post => {
        return (
          <Post3 post={ post } onDelete3={ onDelete3 } key={ post._id } />
        );
      })}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    posts3: []
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDelete3: id => {
      console.log("on delete 3")
      dispatch(deletePost3(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList3);