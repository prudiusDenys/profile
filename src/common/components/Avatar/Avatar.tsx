import React from "react";
import classes from "./Avatar.module.scss";
import avatar from '../../../assets/images/profileImage.png'


export const Avatar = () => {

	return(
		<div className={classes.avatar}>
			<a href="#"><img src={avatar} alt=""/></a>
		</div>
	)
}