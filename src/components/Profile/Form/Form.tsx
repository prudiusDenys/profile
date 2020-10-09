import React from "react";
import classes from "./Form.module.scss";
import {TextField} from "@material-ui/core";
import {useForm} from "react-hook-form";
import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PhoneIcon from '@material-ui/icons/Phone';
import {ProfileDataType} from "../Profile";

type PropsType = {
	setProfile: (profileData: ProfileDataType) => void
	setOpen: (value: boolean) => void
	getNewProfileData: (value: ProfileDataType) => void
}


const schema = Yup.object().shape({
	personName: Yup.string().required('Поле обязятельно').matches(/^([A-ZА-ЯЁ][a-zа-яё]+)\s([A-ZА-ЯЁ][a-zа-яё])/g, 'Вы неверно указали имя'),
	email: Yup.string().email('Вы неверно указали email').required('Поле обязятельно'),
	phone: Yup.string().matches(/(\+(\d{1,3})[ -]?(\d{3})[ -]?(\d{3})[ -]?(\d{2})[ -]?(\d{2})|^$)/gm, 'Вы неверно указали номер')
})

export const Form = (props: PropsType) => {

	const {register, handleSubmit, errors, formState,} = useForm<ProfileDataType>({
		mode: "all",
		resolver: yupResolver(schema)
	});


	function buttonHandler() {
		props.setOpen(true)
	}

	const onSubmit = (data: ProfileDataType, e: any) => {
		props.getNewProfileData(data)
		buttonHandler()
	}


	return (
		<form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
			<div className={classes.inputsWrapper}>
				<label htmlFor="personName" className={classes.label}>
					<div className={classes.formIcon}>
						<AccountBoxIcon/>
					</div>
					<TextField color={'secondary'} type={'text'} id="personName" label="Укажите ваши фамилию и имя"
										 variant="outlined"
										 name={'personName'} className={classes.input} inputRef={register} error={errors.personName && true}
										 helperText={errors.personName?.message}/>
				</label>
				<label htmlFor="mail" className={classes.label}>
					<div className={classes.formIcon}>
						<AlternateEmailIcon/>
					</div>
					<TextField id="mail" color={'secondary'} label="E-mail" type={'email'} variant="outlined" name={'email'} className={classes.input}
										 inputRef={register}
										 error={errors.email && true} helperText={errors.email?.message}/>
				</label>
				<label htmlFor="phone" className={classes.label}>
					<div className={classes.formIcon}>
						<PhoneIcon/>
					</div>
					<TextField id="phone" color={'secondary'} label="Укажите номер телефона" variant="outlined" name={'phone'}
										 className={classes.input} inputRef={register} type={'tel'}
										 error={errors.phone && true} helperText={errors.phone?.message}/>
				</label>
			</div>
			<button disabled={formState.isSubmitting} className={classes.formSubmit}
			>Сохранить изменения
			</button>
		</form>
	)
}