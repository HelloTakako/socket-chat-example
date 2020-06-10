import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#fff",
        position: "fixed",
        right: 0,
        height: '100vh',
        overflow: "hidden",
        width: '15vw',
    },
  }));

export default function SubContents() {
    const classes = useStyles();
    return (
        <Box id="subContents" className={classes.root} p={2}>
            <List aria-label="online-user">
                <ListItem>
                    <ListItemAvatar>
                    <Avatar alt={`${document.cookie.slice(9, document.cookie.length)}`} src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText primary={`${document.cookie.slice(9, document.cookie.length)}`} />
                </ListItem>
            </List>            
        </Box>
    );
}