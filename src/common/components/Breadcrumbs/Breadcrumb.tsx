import React from "react";
import classes from "./Breadcrumb.module.scss";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import {Link} from "@material-ui/core";

export const Breadcrumb = () => {

	function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
		event.preventDefault();
		console.info('You clicked a breadcrumb.');
	}

	return (
		<div>
			<Breadcrumbs aria-label="breadcrumb">
				<Link color={'initial'} underline={'none'} href="/" onClick={handleClick}
							className={classes.BreadcrumbsLink}>Главная</Link>
				<Link color={'initial'} underline={'none'} href="/profile" onClick={handleClick} aria-current="page"
							className={classes.BreadcrumbsLink}>Личный профиль</Link>
			</Breadcrumbs>
		</div>
	)
}