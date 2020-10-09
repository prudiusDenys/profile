import React from "react";
import classes from "./BigAvatar.module.scss";
import avatar from '../../../assets/images/profileImage.png'


export const BigAvatar = () => {

	return(
		<div className={classes.avatar}>
			<a href="#"><img src={avatar} alt=""/></a>
		</div>
	)
}