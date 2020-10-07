import React from "react";
import classes from "./Form.module.scss";
import {TextField} from "@material-ui/core";
import { useForm } from "react-hook-form";
import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PhoneIcon from '@material-ui/icons/Phone';
import {saveState} from "../../../localStorage/localStorage";
import {ProfileDataType} from "../Profile";


type PropsType = {
	setProfile: (profileData: ProfileDataType)=>void
}


// const schema = Yup.object().shape({
// 	name: Yup.string().required(),
// 	email: Yup.string().email('email is not valid').required(),
// 	phone: Yup.number().positive().integer(),
// })


export const Form = (props: PropsType) => {

	const {register, handleSubmit, errors, formState} = useForm<ProfileDataType>({
		mode: "all",
		// resolver: yupResolver(schema)
	});

	const onSubmit = (data: ProfileDataType, e: any) => {
		saveState('formData', data)
		props.setProfile(data)
	}

	return (
		<form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
			<div className={classes.inputsWrapper}>
				<label htmlFor="personName" className={classes.label}>
					<div className={classes.formIcon}>
						<AccountBoxIcon/>
					</div>
					<TextField color={'primary'} id="personName" label="Укажите ваши фамилию и имя" variant="outlined"
										 name={'personName'} className={classes.input} inputRef={register}/>
				</label>
				<label htmlFor="mail" className={classes.label}>
					<div className={classes.formIcon}>
						<AlternateEmailIcon/>
					</div>
					<TextField id="mail" label="Ivanova@mail.ru" variant="outlined" name={'email'} className={classes.input} inputRef={register}/>
				</label>
				<label htmlFor="phone" className={classes.label}>
					<div className={classes.formIcon}>
						<PhoneIcon/>
					</div>
					<TextField id="phone" label="Укажите номер телефона" variant="outlined" name={'phone'}
										 className={classes.input} inputRef={register}/>
				</label>
			</div>
			<button disabled={formState.isSubmitting} className={classes.formSubmit} type={'submit'}>Сохранить изменения</button>
		</form>
	)
}