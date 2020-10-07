import React from "react";
import classes from "./Contacts.module.scss";
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PhoneIcon from '@material-ui/icons/Phone';
import {Divider} from "@material-ui/core";

type PropsType = {
	email: string
	phone: string
}

export const Contacts = (props: PropsType) => {
	return (
		<div className={classes.contacts}>
			<div className={classes.contact}>
				<div className={classes.contactIcon}>
					<AlternateEmailIcon/>
				</div>
				<div className={classes.contactType}>
					{props.email}
				</div>
			</div>
			<Divider/>
			<div className={classes.contact}>
				<div className={classes.contactIcon}>
					<PhoneIcon/>
				</div>
				<div className={classes.contactType}>
					{props.phone.length > 0 ? props.phone : 'Укажите номер телефона'}
				</div>
			</div>
		</div>
	)
}