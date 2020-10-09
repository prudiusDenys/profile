import {createMuiTheme} from "@material-ui/core";

export const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#00BFA5'
		},
		secondary: {
			main: '#359FF4'
		},
	},
	typography: {
		fontFamily: 'Open Sans',
		body2:{
			fontSize: '14px'
		}
	},
	overrides:{
		MuiBreadcrumbs:{
			root:{
					color: 'white'
			}
		}
	}
})