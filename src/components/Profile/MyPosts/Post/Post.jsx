import c from './Post.module.css';

const Post = (props) => {
	return (
		<div className={c.item}>
			<img src="https://www.boxofficepro.com/wp-content/uploads/2022/12/Avatar-The-Way-of-Water-Loak.jpg" alt=""/>
			{props.message}
			<div>
				<span>Like</span>
			</div>
		</div>
	)
}

export default Post;