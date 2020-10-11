import React, {useState} from 'react';
import classes from './ConfirmAlert.module.scss'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import {makeStyles, withStyles, IconButton, useMediaQuery, CircularProgress,} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import {theme} from "../../styles/theme";
import {restoreState, saveState} from "../../../localStorage/localStorage";
import {requestsAPI} from "../../../api/apiRequests";
import {ProfileDataType} from "../../../components/Profile/Profile";


type PropsType = {
	open: boolean
	setAlert: (value: boolean) => void
	setOpen: (value: boolean) => void
	newProfile: ProfileDataType
	setProfile: (value: ProfileDataType) => void
}

const useStyles = makeStyles(theme => ({
	cancelStyleButton: {
		color: '#00BFA5',
		background: '#fff',
		"&:hover": {
			background: '#fff'
		},
	},
	saveStyleButton: {
		color: '#fff',
		background: '#00BFA5',
		"&:hover": {
			background: '#00BFA5'
		},
	},
	iconClose: {
		width: '24px',
		height: '24px',
	}
}))

const StyledDialogContent = withStyles({
	root: {
		textAlign: 'center',
		padding: '0',
		"&:first-child": {
			paddingTop: '0'
		},
	},
})(DialogContent)
const StyledDialogContentText = withStyles({
	root: {
		margin: '0',
		fontSize: '24px',
		color: 'rgba(49, 49, 49, 0.7)',
		marginBottom: '40px',
		typography: {
			fontFamily: 'Open-Sans',
			fontWeight: '600',
		}
	},

})(DialogContentText)
const StyledDialogActions = withStyles({
	root: {
		display: 'block',
		margin: '0 auto',
		padding: '0',
		alignItems: 'normal',
		justifyContent: 'center',
		textAlign: 'center'
	},
	spacing: {
		"$:not(:first-child)": {
			marginLeft: '0'
		}
	}
})(DialogActions)
const StyledButton = withStyles({
	root: {
		border: '1px solid #00BFA5',
		padding: '16px',
		borderRadius: '41px',
		width: '200px',
		display: 'block',
		"&:first-child": {
			marginBottom: '28px'
		},
	}
})(Button)
const StyledIconButton = withStyles({
	root: {
		position: 'absolute',
		top: '8px',
		right: '8px',
		width: '24px',
		height: '24px',
	},
	contained: {}
})(IconButton)


export const AlertDialog = (props: PropsType) => {

	const [loading, setLoading] = useState(false)

	const matches = useMediaQuery(theme.breakpoints.down('xs'))

	const StyledDialog = withStyles({
		paperScrollPaper: {
			position: 'relative',
			maxWidth: matches ? '100%' : '600px',
			margin: matches ? '0' : 'inherit',
			width: '100%',
			padding: '69px 0 56px 0'
		},
	})(Dialog)

	const styles = useStyles()

	const handleClose = () => {
		props.setOpen(false)
	};

	const onSubmit = async () => {
		await setLoading(true)
		saveState('formData', props.newProfile)
		requestsAPI.createRequestAPI(props.newProfile)
			.then(res => {
				props.setProfile(restoreState('formData', props.newProfile))
				props.setOpen(true);
				props.setAlert(true)
				setLoading(false)
			})
			.catch(error => console.log(error))
	}

	return (
		<div>
			<StyledDialog
				open={props.open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<StyledIconButton aria-label="delete">
					<CloseIcon className={styles.iconClose} onClick={handleClose}/>
				</StyledIconButton>
				<StyledDialogContent>
					<StyledDialogContentText id="alert-dialog-description">
						<span className={classes.contentTextSpan}>Сохранить изменения?</span>
					</StyledDialogContentText>
				</StyledDialogContent>

				{!loading ? <StyledDialogActions>
					<StyledButton onClick={onSubmit} className={styles.saveStyleButton} color="primary"
												variant={'contained'}
												autoFocus>
						Сохранить
					</StyledButton>
					<StyledButton className={styles.cancelStyleButton} onClick={handleClose} color="primary"
												variant={'contained'}>
						Не сохранять
					</StyledButton>
				</StyledDialogActions> : <CircularProgress style={{margin: '0 auto'}}/>}


			</StyledDialog>
		</div>
	);
}
