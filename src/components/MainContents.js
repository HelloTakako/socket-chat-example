import React, { Fragment } from 'react';

import Timeline from './Timeline';
import TextInput from './TextInput';

export default function MainComponents(props) {
    return (
        <Fragment>
            <Timeline socket={props.socket} />
            <TextInput socket={props.socket} />
        </Fragment>
    );
}