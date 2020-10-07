import React from "react";
import classes from "./MainInfoBlock.module.scss";
import {Avatar} from "../../../common/components/Avatar/Avatar";
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import CloseIcon from '@material-ui/icons/Close';


type PropsType = {
	onClick: (value: boolean)=>void
	editProfile: boolean
	personName: string
}

export const MainInfoBlock = (props: PropsType) => {

	const buttonData = {
		edit: 'редактировать',
		form: 'закрыть'
	}

	const onclickHandler = () => {
		props.onClick(!props.editProfile)
	}


	return (
		<div className={classes.mainInfoBlock}>
			<div className={classes.mainInfoBlockContent}>
				<div className={classes.AvatarAndName}>
					<div className={classes.avatar}>
						<Avatar width={'80'} height={'80'}/>
					</div>
					<div className={classes.personName}>
						{props.personName}
					</div>
				</div>
				<Button variant={'text'} color='inherit' endIcon={!props.editProfile ? <CreateIcon/> : <CloseIcon/>}
								onClick={onclickHandler}>{!props.editProfile ? buttonData.edit : buttonData.form}</Button>
			</div>
		</div>
	)
}