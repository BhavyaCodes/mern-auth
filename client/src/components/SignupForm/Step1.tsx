import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from "../common/Button";
import Input from "components/common/Input";
import { Link } from "react-router-dom";

export function Step1() {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      title: {
        fontWeight: 700,
        fontSize: "1.5rem",
      },
      grid: { marginTop: theme.spacing(1), marginBottom: theme.spacing(2) },
      subtitle: {},
      inputContainer: {
        padding: theme.spacing(1),
      },
      loginLink: {
        textAlign: "left",
        marginTop: theme.spacing(2),
      },
    })
  );
  const classes = useStyles();
  return (
    <>
      <Typography className={classes.title}>What's your name?</Typography>
      <Typography className={classes.subtitle}>
        Enter the name you use in real life.
      </Typography>
      <Grid container spacing={2} className={classes.grid}>
        <Grid item xs={6}>
          <Input
            type="text"
            placeholder=""
            width="100%"
            id="signup-name"
            topLabel="First name"
          />
        </Grid>
        <Grid item xs={6}>
          <Input
            type="text"
            placeholder=""
            width="100%"
            id="signup-name"
            topLabel="Surname"
          />
        </Grid>
      </Grid>
      <Button halfWidth fontSize="17px">
        Next
      </Button>
      <Link to="/login">
        <Typography className={classes.loginLink}>
          Already have an account?
        </Typography>
      </Link>
    </>
  );
}
