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

  renderPosts(posts) {
    return this.props.posts.map((post) => {
      return (
        <li className='list-group-item' key={post.id}>
          <span className='pull-xs-right'>{post.categories}</span>
          <strong>{post.title}</strong>
        </li>
      );
    });
  }
  
  render() {
    return (
      <div>
        <div className='text-xs-right'>
          <Link to='/posts/new' className='btn btn-primary'>
            Add Post
          </Link>          
        </div>
        <h3>Blog Posts</h3>
        <ul className='list-group'>
          {this.renderPosts()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.all }
}


// function mapDispatchToProps(dispatch) {
//   return bindActionCreators( { fetchPosts }, dispatch);
// }

// we can do the above with
// connect('some state', {methodKey: method})(ClassComponent) 

export default connect(mapStateToProps, {fetchPosts} )(PostsIndex);