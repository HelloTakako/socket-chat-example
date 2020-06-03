import React, {Fragment} from 'react';

import Grid from '@material-ui/core/Grid';

import NicknameForm from '../components/NicknameForm';
import HeroImage from '../assets/heroImage.jpg';

function Home() {

    return (
        <Fragment>
            <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            style={{backgroundImage: `url(${HeroImage})`, backgroundSize: "cover"}}
            >
                <NicknameForm />
            </Grid>
        </Fragment>
    );
}

export default Home;