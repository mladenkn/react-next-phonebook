import React from 'react';
import style from './AppRoot-style';
import { withStyles, WithStyles, AppBar, Toolbar, Typography } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Routes from "./Router";
import { homePageUrl } from "../urls";
import { BrowserRouter } from 'react-router-dom';
import { Link } from './reusables';
import { SaveWorkAction } from './actions';
import ContactService from '../stateMgmt/ContactService';

//const secondaryThemeColor = purple[500]

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#78C9CE',
            main: '#2DA1AD',
            dark: '#2496A2'
        },
        secondary: {
            main: '#BBC4C3',
            light: '#E3E3E3',
            dark: 'rgba(0, 0, 0, 0.4000000059604645)'
        },
        text: {
            primary: '#BBC4C3',
            secondary: '#2DA1AD',
        },
    },
    overrides: {
        MuiButton: {
            root: {
                textTransform: 'none',
            },
        },
    }
});

const contactService = new ContactService();

const AppContent_ = ({classes}: WithStyles<typeof style>) =>
    <BrowserRouter>
        <AppBar position="sticky">
            <Toolbar className={classes.toolbar}>
                <Link className={classes.headingLink} underline="none" href={homePageUrl}>
                    <Typography className={classes.headingLinkText}>Phonebook</Typography>
                </Link>
                <SaveWorkAction className={classes.saveWorkAction} onClick={() => contactService.persist()} />
            </Toolbar>
            <div className={classes.toolbarBorder}></div>
        </AppBar>
        <Routes contactService={contactService}/>
    </BrowserRouter>

const AppContent = withStyles(style)(AppContent_);

export default () => (
    <MuiThemeProvider theme={theme}>
        <AppContent />
    </MuiThemeProvider>
); 
