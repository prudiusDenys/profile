import React from "react";
import classes from "./MainInfoBlock.module.scss";
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import CloseIcon from '@material-ui/icons/Close';
import {BigAvatar} from "../../../common/components/BigAvatar/BigAvatar";


type PropsType = {
	onClick: (value: boolean) => void
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
						<BigAvatar/>
					</div>
					<div className={classes.personName}>
						{props.personName}
					</div>
				</div>
				<Button style={{color: '#fff', fontWeight: 'bold', fontSize: '14px'}} variant={'text'} color='inherit'
								endIcon={!props.editProfile ? <CreateIcon/> : <CloseIcon/>}
								onClick={onclickHandler}><span
					className={classes.btnSpan}>{!props.editProfile ? buttonData.edit : buttonData.form}</span> </Button>
			</div>
		</div>
	)
}