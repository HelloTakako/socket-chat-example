import React, {Fragment} from 'react';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { sizing } from '@material-ui/system';

import NicknameForm from '../components/NicknameForm';
import HeroImage from '../assets/heroImage.jpg';

const useStyles = makeStyles({
    root: {
      height: "100vh",
    }
  });

function Home() {
    const classes = useStyles();

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