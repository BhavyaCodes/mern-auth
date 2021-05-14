import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

function Signup() {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      title: {
        fontWeight: theme.typography.fontWeightBold,
        color: theme.palette.primary.main,
      },
    })
  );
  const classes = useStyles();
  return (
    <div>
      <Container>
        <Grid container>
          <Grid item lg={6} md={12}>
            <Typography variant="h1" className={classes.title}>
              fakebook
            </Typography>
          </Grid>
          <Grid item lg={6} md={12}>
            right
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Signup;
