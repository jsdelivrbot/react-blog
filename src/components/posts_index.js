import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {
  
  // 'componentWillMount' is a lifecycle method,
  // that will be called once when the component
  // is about to be rendered
  componentWillMount() {
    this.props.fetchPosts();
  }
  
  render() {
    return (
      <div>
        <div className='text-xs-right'>
          <Link to='/posts/new' className='btn btn-primary'>
            Add Post
          </Link>          
        </div>
      </div>
    )
  }
}

// we can do the below by 
// connect('some state', {methodKey: method})(ClassComponent) 

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators( { fetchPosts }, dispatch);
// }



export default connect(null, {fetchPosts})(PostsIndex);