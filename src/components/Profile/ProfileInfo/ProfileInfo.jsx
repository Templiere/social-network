import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
	if (!props.profile) {
		return <Preloader/>;
	}
	return (
		<div>
			<img height="100px" width='100%'
				src="https://img1.akspic.ru/attachments/crops/7/6/1/9/99167/99167-more-otel-tropicheskaya_zona-nebo-palma-2560x1440.jpg"
				alt=""/>
			<div>
				<img src={props.profile.photos.large} alt="Аватар пользователя"/>
				<div>{props.profile.aboutMe}</div>
			</div>
		</div>
	)
}

export default ProfileInfo;