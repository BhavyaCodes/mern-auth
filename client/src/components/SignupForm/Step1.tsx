import { useRef, Dispatch, FormEvent, SetStateAction } from "react";
import { Typography, Grid } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from "../common/Button";
import Input from "components/common/Input";
import { Link } from "react-router-dom";

type AppProps = {
  setFName: Dispatch<SetStateAction<string>>;
  setLName: Dispatch<SetStateAction<string>>;
  nextStep: () => void;
};

export function Step1({ setFName, setLName, nextStep }: AppProps) {
  const fNameRef = useRef<HTMLInputElement>(null);
  const lNameRef = useRef<HTMLInputElement>(null);

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      title: {
        fontWeight: 700,
        fontSize: "2rem",
      },
      grid: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(2),
      },
      subtitle: {
        fontSize: "1rem",
        fontWeight: 400,
      },
      loginLinkContainer: {
        marginTop: theme.spacing(2),
      },
      loginLink: {
        textAlign: "left",
        marginLeft: "1px",
        "&:link,&:visited": {
          textDecoration: "none",
          color: theme.palette.primary.dark,
        },
        "&:hover": {
          textDecoration: "underline",
        },
      },
    })
  );

  const classes = useStyles();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFName(fNameRef.current!.value!);
    setLName(lNameRef.current!.value);
    nextStep();
  };

  return (
    <>
      <Typography className={classes.title}>What's your name?</Typography>
      <Typography className={classes.subtitle}>
        Enter the name you use in real life.
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} className={classes.grid}>
          <Grid item xs={6}>
            <Input
              type="text"
              placeholder=""
              width="100%"
              id="signup-name"
              topLabel="First name"
              required
              inputRef={fNameRef}
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              type="text"
              placeholder=""
              width="100%"
              id="signup-name"
              topLabel="Surname"
              required
              inputRef={lNameRef}
            />
          </Grid>
        </Grid>
        <Button type="submit" halfWidth fontSize="17px">
          Next
        </Button>
      </form>
      <Typography align="left" className={classes.loginLinkContainer}>
        <Link to="/login" className={classes.loginLink}>
          Already have an account?
        </Link>
      </Typography>
    </>
  );
}
