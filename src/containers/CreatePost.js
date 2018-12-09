import { connect } from 'react-redux';
import { createPost, fetchAllPosts } from '../actions';
import NewPost from './../components/NewPost';

const mapDispatchToProps = dispatch => {
  return {
    onAddPost: post => {
      dispatch(createPost(post));
    },
    fetchAllPosts: () => {
      dispatch(fetchAllPosts());
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NewPost);