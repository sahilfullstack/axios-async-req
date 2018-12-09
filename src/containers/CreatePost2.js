import { connect } from 'react-redux';
import { createPost2, fetchAllPosts2 } from '../actions';
import NewPost2 from './../components/NewPost2';

const mapDispatchToProps = dispatch => {
  return {
    onAddPost2: post => {
      dispatch(createPost2(post));
    },
    fetchAllPosts2: () => {
      dispatch(fetchAllPosts2());
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NewPost2);