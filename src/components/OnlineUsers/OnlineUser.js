import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

export default function onlineUser(props) {

    return (
        <ListItem>
            <ListItemAvatar>
            <Avatar alt={props.username} src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText primary={props.username} />
        </ListItem>
    );
}