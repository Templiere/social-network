import c from './MyPosts.module.css';
import Post from "./Post/Post";
import React from 'react';

const MyPosts = (props) => {

	let postsElements = props.posts
		.map( p => <Post message={p.message} likesCount={p.likesCount}/> );

	let newPostElement = React.createRef();

	let onAddPost = () => {
		props.addPost();
	};

	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.updateNewPostText(text);
	};

	return (
		<div>
			My posts
			<div>
				<textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
				<button onClick={onAddPost}>Add post</button>
			</div>
			<div className={c.posts}>
				{postsElements}
			</div>
		</div>
	)
}

export default MyPosts;