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
import {AlertDialog} from "../../common/components/ConfirmAlert/ConfirmAlert";
import {Alert} from "../../common/components/Alert/Alert";

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
	const [newProfile, setNewProfile] = useState<ProfileDataType>(profileData)
	const [editProfile, setEditProfile] = useState<boolean>(false)
	const [open, setOpen] = useState<boolean>(false);
	const [alert, setAlert] = useState<boolean>(false)


	const onClick = (value: boolean) => {
		setEditProfile(value)
	}
	const getNewProfileData = (data: ProfileDataType) => {
		setNewProfile(data)
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
					{!editProfile ? <Contacts phone={profile.phone} email={profile.email}/> :
						<Form setProfile={setProfile} setOpen={setOpen} getNewProfileData={getNewProfileData}/>}
				</div>
			</div>
			{!alert ? <AlertDialog open={open} setAlert={setAlert} setOpen={setOpen}/> :
				<Alert open={open} newProfile={newProfile} setAlert={setAlert} setProfile={setProfile} setOpen={setOpen}/>}
		</div>
	)
}