import React, {useState} from "react";
import classes from "./Profile.module.scss";
import {PersonInfo} from "./PersonInfo/PersonInfo";
import containerStyle from '../../common/styles/container.module.scss';
import profileBg from '../../assets/images/profileBC.jpg';
import {Title} from "../../common/components/Title/Title";
import {Breadcrumb} from "../../common/components/Breadcrumbs/Breadcrumb";
import {MainInfoBlock} from "./MainInfoBlock/MainInfoBlock";
import {Contacts} from "./Contacts/Contacts";
import {Form} from "./Form/Form";
import {restoreState} from "../../localStorage/localStorage";

export type ProfileDataType = {
	personName: string
	email: string
	phone: string
}

const profileBackground = {
	backgroundImage: `url('${profileBg}')`
}


export const Profile = () => {

	const profileData: ProfileDataType = {
		personName: 'Иванова Анна Михайловна',
		email: 'Ivanova@mail.ru',
		phone: ''
	}

	const [profile, setProfile] = useState<ProfileDataType>(restoreState('formData', profileData))

	const [editProfile, setEditProfile] = useState(false)

	const onClick = (value: boolean) => {
		setEditProfile(value)
	}

	return (
		<div className={classes.profile} style={profileBackground}>
			<div className={containerStyle.container}>
				<div className={classes.profileContent}>
					<PersonInfo personName={profile.personName}/>
					<div className={classes.profileTitle}>
						<Title title={'личный профиль'}/>
					</div>
					<div className={classes.profileBreadCrumbs}>
						<Breadcrumb/>
					</div>
					<div className={classes.profileMainInfoBlock}>
						<MainInfoBlock onClick={onClick} editProfile={editProfile} personName={profile.personName}/>
					</div>
					{!editProfile ? <Contacts phone={profile.phone} email={profile.email}/> : <Form setProfile={setProfile}/>}
				</div>
			</div>
		</div>
	)
}