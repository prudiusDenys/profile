import React from "react";
import classes from "./Avatar.module.scss";
import avatar from '../../../assets/images/profileImage.png'


type PropsType = {
	width: string
	height: string
}

export const Avatar = (props:PropsType) => {

	const avatarStyle = {
		width: `${props.width}px`,
		height: `${props.height}px`
	}

	return(
		<div className={classes.avatar} style={avatarStyle}>
			<a href="#"><img src={avatar} alt=""/></a>
		</div>
	)
}