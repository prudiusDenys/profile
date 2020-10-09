import React from "react";
import classes from "./PersonInfo.module.scss";
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import {nameCut} from "../../../functions/functions";
import {Avatar} from "../../../common/components/Avatar/Avatar";

type PropsType = {
	personName: string
}

export const PersonInfo = (props: PropsType) => {
	return (
		<div className={classes.personalInfoWrapper}>
			<div className={classes.personInfo}>
				<div className={classes.personIcon}>
					<a href="#"><NotificationsNoneIcon/></a>
				</div>
				<div className={classes.personBox}>
					<div className={classes.avatar}>
						<Avatar/>
					</div>
					<span className={classes.personName}>{nameCut(props.personName)}</span>
				</div>
			</div>
		</div>
	)
}