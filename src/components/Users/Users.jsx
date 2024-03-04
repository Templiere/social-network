import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user-image.png";
import {NavLink} from "react-router-dom";

let Users = (props) => {
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

	let pages = [];

	for (let i = 1; i <= 20; i++) {
		pages.push(i);
	}
	return (
		<div>
			<div>
				{pages.map(p => {
					return <span className={props.currentPage === p && styles.selectedPage}
								 onClick={() => {
									 props.onPageChanged(p)
								 }}>{p} </span>;
				})}
				<span>Всего страниц: {pagesCount}</span>
			</div>
			{props.users.map(u => {
				return (
					<div key={u.id}>
						<span>
							<div>
								<NavLink to={'/profile/' + u.id}>
									<img className={styles.userPhoto}
										 src={u.photos.small !== null ? u.photos.small : userPhoto}
										 alt="Фото пользователя"/>
								</NavLink>
							</div>
							<div>
								{u.followed
									? <button onClick={() => {
										props.unfollow(u.id)
									}}>Unfollow</button>
									: <button onClick={() => {
										props.follow(u.id)
									}}>Follow</button>}
							</div>
						</span>
						<span>
							<span>
								<div>{u.name}</div>
								<div>{u.status}</div>
							</span>
							<span>
								<div>{'u.location.country'}</div>
								<div>{'u.location.city'}</div>
							</span>
						</span>
					</div>
				)
			})}
		</div>
	);
};

export default Users;