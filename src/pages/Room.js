import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Timeline from '../components/Timeline';
import TextInput from '../components/TextInput';

export default function Room() {
    return (
        <Fragment>
            <Timeline />
            <TextInput />
        </Fragment>
    );
}