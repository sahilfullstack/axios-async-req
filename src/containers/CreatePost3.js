import { connect } from 'react-redux';
import { createPost3,fetchAllPosts3 } from '../actions';
import NewPost3 from './../components/NewPost3';

const mapDispatchToProps = dispatch => {
  return {
    onAddPost3: post => {
      dispatch(createPost3(post));
    },
    fetchAllPosts3: () => {
      dispatch(fetchAllPosts3());
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NewPost3);