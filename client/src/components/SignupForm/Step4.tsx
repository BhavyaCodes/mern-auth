import { useRef, useState, Dispatch, FormEvent, SetStateAction } from "react";
import passwordValidator from "password-validator";
import { Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from "../common/Button";
import Input from "components/common/Input";
import { Link } from "react-router-dom";

type AppProps = {
  setPassword: Dispatch<SetStateAction<string>>;
  loading: boolean;
  success: boolean;
  onSubmit: (password: string) => void;
  firstName: string;
  signUpError: string | null;
};

export function Step4({
  setPassword,
  loading,
  onSubmit,
  success,
  firstName,
  signUpError,
}: AppProps) {
  const passwordRef = useRef<HTMLInputElement>(null);
  const reEnterRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<null | string>(null);

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        width: "100%",
      },
      title: {
        fontWeight: 700,
        fontSize: "2rem",
      },
      subtitle: {
        fontSize: "1rem",
        fontWeight: 400,
        width: "80%",
        display: "inline-block",
      },
      input: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
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
      errorMessage: {
        marginTop: theme.spacing(-2),
        color: theme.palette.error.main,
        marginBottom: theme.spacing(1),
      },
      signUpErrorMessage: {
        color: theme.palette.error.dark,
        fontWeight: 700,
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(1),
      },
      welcome: {
        fontSize: "4rem",
      },
      firstName: {
        textTransform: "capitalize",
      },
      fakebook: {
        color: theme.palette.primary.main,
        fontWeight: 700,
      },
      btn: {
        display: "block",
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(2),
      },
    })
  );

  const classes = useStyles();
  const schema = new passwordValidator();
  schema.is().min(6).has().uppercase();
  const errorMessages = {
    min: "Enter minimum of 6 characters",
    uppercase: "Enter atleast 1 uppercase letter",
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const password = passwordRef.current!.value;
    console.log(password);
    const reEnter = reEnterRef.current!.value;
    if (password !== reEnter) {
      return setError("Passwords don't match");
    }

    const errorList = schema.validate(password, {
      list: true,
    });

    if (errorList.length === 0) {
      console.log("here");
      setError(null);
      setPassword(password);
      onSubmit(password);
    }
    const errorKey = errorList[0] as "min" | "uppercase";
    setError(errorMessages[errorKey]);
  };

  return (
    <div className={classes.root}>
      {success ? (
        <>
          <Typography className={classes.welcome}>
            Welcome, <span className={classes.firstName}>{firstName}!</span>
          </Typography>
          <Typography variant="h4">
            Thank you for joining{" "}
            <span className={classes.fakebook}>fakebook</span>
          </Typography>
          <Link to="/login" className={classes.btn}>
            <Button fontSize="17px" color="secondary">
              Login now
            </Button>
          </Link>
        </>
      ) : (
        <>
          <Typography className={classes.title}>Create a password</Typography>
          <Typography className={classes.subtitle}>
            Create a strong password with minimum of 6 characters, and atleast 1
            uppercase character
          </Typography>
          <form onSubmit={handleSubmit}>
            <Input
              className={classes.input}
              topLabel="Enter Password"
              inputRef={passwordRef}
              type="password"
              id="password-signup"
              placeholder=""
              // autocomplete
              width="100%"
            />
            <Input
              className={classes.input}
              topLabel="Re-Enter Password"
              inputRef={reEnterRef}
              type="password"
              id="password-reenter-signup"
              placeholder=""
              // autocomplete
              width="100%"
            />
            {error && (
              <Typography align="left" className={classes.errorMessage}>
                {error}
              </Typography>
            )}
            <Button type="submit" halfWidth fontSize="17px" disabled={loading}>
              Sign Me Up
            </Button>
            {signUpError && (
              <Typography align="left" className={classes.signUpErrorMessage}>
                {signUpError}
              </Typography>
            )}
          </form>
          <Typography align="left" className={classes.loginLinkContainer}>
            <Link to="/login" className={classes.loginLink}>
              Already have an account?
            </Link>
          </Typography>
        </>
      )}
    </div>
  );
}
