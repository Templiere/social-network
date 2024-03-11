import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
	if (!props.profile) {
		return <Preloader/>;
	}
	return (
		<div>
			<div>
				<img src={props.profile.photos.large} alt="Аватар пользователя"/>
				<ProfileStatus status={props.profile.aboutMe}/>
			</div>
		</div>
	)
}

export default ProfileInfo;