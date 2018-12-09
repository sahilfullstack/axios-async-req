import React from 'react';
import { connect } from 'react-redux';
import Post2 from './../components/Post';
import { deletePost2 } from '../actions';

function PostList2({ posts2, onDelete2 }) {
  if(!posts2.length) {
    return (
      <div>
        No Posts
      </div>
    )
  }
  return (
    <div>
      {posts2.map(post => {
        return (
          <Post2 post={ post } onDelete2={ onDelete2 } key={ post._id } />
        );
      })}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    posts2: []
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDelete2: id => {
      console.log("on delete 2")
      dispatch(deletePost2(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList2);