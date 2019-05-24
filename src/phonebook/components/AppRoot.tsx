import React from 'react';
import style from './AppRoot-style';
import { withStyles, WithStyles, AppBar, Toolbar } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Router from "./Router";

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

const AppContent_ = ({classes}: WithStyles<typeof style>) =>
    <div>
        <AppBar position="sticky">
            <Toolbar className={classes.toolbar}>
                <h3 className={classes.headingText}>Phonebook</h3>
            </Toolbar>
            <div className={classes.toolbarBorder}></div>
        </AppBar>
        <Router/>
    </div>

const AppContent = withStyles(style)(AppContent_);

export default () => (
    <MuiThemeProvider theme={theme}>
        <AppContent />
    </MuiThemeProvider>
); 
