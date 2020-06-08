import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';

import OnlineUser from './OnlineUser';

const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: "#fff",
        position: "fixed",
        right: 0,
        height: '100vh',
        overflow: "hidden",
    },
  })); 

export default function OnlineUsersList(props) {
    const classes = useStyles();
    const [onlineUsers, setOnlineUsers] = useState([]);

    // list component to render dynamically
    let ChildComponent = OnlineUser;

    useEffect(() => {

    // // get joined user name from server, update 'onlineUsers' variable.
    // props.socket.on('userjoin', function(nickname){
    //     // const slicedName = nickname.slice(9, nickname.length);
    //     // setOnlineUsers(onlineUsers=>[...onlineUsers, slicedName]);
    //     setOnlineUsers(onlineUsers=>[nickname.username]);
    // })



    // show "disconnected" message when a user disconnected from the socket
    props.socket.on('disconnected', function(nickname){
        console.log(document.cookie.slice(9, document.cookie.length) + "disconnected")
    })

    }, [props.socket]);

    //remove a user from the online list when logging out
    props.socket.on('loggedout', function(nickname){
        const slicedName = nickname.slice(9, nickname.length);
        console.log(onlineUsers, slicedName, nickname);
        setOnlineUsers(onlineUsers);
    })

    return (
        <Box className={classes.root} p={2}>
            <List aria-label="online-users" id="online-users" >
                {onlineUsers.map((user, i) => {
                    return React.createElement(ChildComponent, { key: i, username: user });
                })}
            </List>            
        </Box>
    );
}