import { ReactNode } from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

function Signup({ children }: { children: ReactNode }) {
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
      card: {
        backgroundColor: "#fff",
        height: theme.spacing(20),
        boxShadow: "0 2px 4px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1)",
        borderRadius: "8px",
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
              Fakebook helps you disconnect and share your data so we can sell
              ads.
            </Typography>
          </Grid>
          <Grid item lg={6} md={12}>
            <div className={classes.card}>{children}</div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Signup;
