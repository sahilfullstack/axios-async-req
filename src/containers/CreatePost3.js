import { connect } from 'react-redux';
import { createPost3,fetchAllPosts3 } from '../actions';
import NewPost3 from './../components/NewPost3';

const mapDispatchToProps = dispatch => {
  return {
    onAddPost3: post => {
      dispatch(createPost3(post));
    },
    fetchAllPosts3: () => {
      fetchAllPosts3().then(response=>{
        console.log(response)
        console.log("well done sahil")
      }, error => {
        console.log("error is recieved")
      });
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NewPost3);