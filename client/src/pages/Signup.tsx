import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

function Signup() {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        backgroundColor: "#f0f2f5",
        // height: "100%",
      },
      container: {
        display: "flex",
        alignItems: "center",
        // height: "100%",
      },
      title: {
        fontWeight: theme.typography.fontWeightBold,
        color: theme.palette.primary.main,
        fontSize: "4rem",
        letterSpacing: "-0.1rem",
      },
      subtitle: {
        fontSize: "2.2rem",
      },
    })
  );
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Grid container>
          <Grid item lg={6} md={12}>
            <Typography variant="h1" className={classes.title}>
              fakebook
            </Typography>
            <Typography className={classes.subtitle}>
              Facebook helps you connect and share with the people in your life.
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
