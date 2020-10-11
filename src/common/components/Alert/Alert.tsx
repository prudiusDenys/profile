import React from 'react';
import classes from './Alert.module.scss'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import {makeStyles, withStyles, useMediaQuery, CircularProgress} from '@material-ui/core';
import {theme} from "../../styles/theme";

type PropsType = {
	open: boolean
	setOpen: (value: boolean) => void
	setAlert: (value: boolean) => void
	setEditProfile: (value: boolean) =>void
}

const useStyles = makeStyles({
	saveStyleButton: {
		color: '#fff',
		background: '#00BFA5',
		"&:hover": {
			background: '#00BFA5'
		},
	},
})

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


export const Alert = (props: PropsType) => {

	const matches = useMediaQuery(theme.breakpoints.down('xs'))
	const styles = useStyles()

	const StyledDialog = withStyles({
		paperScrollPaper: {
			position: 'relative',
			maxWidth: matches ? '100%' : '600px',
			margin: matches ? '0' : 'inherit',
			width: '100%',
			padding: '69px 0 56px 0'
		},
	})(Dialog)

	const onClickHandler = () => {
		props.setOpen(false);
		props.setAlert(false);
		props.setEditProfile(false)
	}

	return (
		<div>
			<StyledDialog
				open={props.open}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>

				<StyledDialogContent>
					<StyledDialogContentText id="alert-dialog-description">
						<span className={classes.contentTextSpan}>Данные успешно сохранены</span>
					</StyledDialogContentText>
				</StyledDialogContent>
				<StyledDialogActions>
					<StyledButton onClick={onClickHandler} className={styles.saveStyleButton} color="primary" variant={'contained'}
												autoFocus>
						Хорошо
					</StyledButton>
				</StyledDialogActions>
			</StyledDialog>
		</div>
	);
}
