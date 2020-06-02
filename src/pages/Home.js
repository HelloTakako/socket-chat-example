import React, {Fragment} from 'react';

import Grid from '@material-ui/core/Grid';

import NicknameForm from '../components/NicknameForm';
import HeroImage from '../assets/heroImage.jpg';



function Home() {

    return (
        <div>
            <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            style={{backgroundImage: `url(${HeroImage})`}}
            >
                <NicknameForm />
            </Grid>
        </div>
    );
}

export default Home;