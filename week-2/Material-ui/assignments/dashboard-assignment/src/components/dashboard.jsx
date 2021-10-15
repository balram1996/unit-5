import Carding from "./card";
import Grid from '@mui/material/Grid';

export default function Dashboard(){
    return (
        <>
        <Grid>
            <Grid container spacing={5}>
                <Grid item xs ={3}>
                    <Carding  value="50" profit="20"order="2"/>
                </Grid>
                <Grid item xs ={3}>
                    <Carding  value="100" profit="200"order="5"/>
                </Grid>
                <Grid item xs ={3}>
                    <Carding  value="500" profit="200"order="3"/>
                </Grid>
                <Grid item xs ={3}>
                    <Carding value="5000" profit="2000"order="50"/>
                </Grid>
                
            </Grid>
        </Grid>
        </>
    )
}