import { useRef, Dispatch, FormEvent, SetStateAction } from "react";
import { Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from "../common/Button";
import Input from "components/common/Input";
import { Link } from "react-router-dom";

type AppProps = {
  setEmail: Dispatch<SetStateAction<string>>;

  nextStep: () => void;
};

export function Step2({ setEmail, nextStep }: AppProps) {
  const emailRef = useRef<HTMLInputElement>(null);

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
      inputContainer: {
        padding: theme.spacing(1),
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
    setEmail(emailRef.current!.value);
    nextStep();
  };

  return (
    <div className={classes.root}>
      <Typography className={classes.title}>
        Enter your email address
      </Typography>
      <Typography className={classes.subtitle}>
        Enter the email address at which you can be contacted. You can hide this
        from you profile later.
      </Typography>
      <form onSubmit={handleSubmit}>
        <Input
          className={classes.input}
          topLabel="Email address"
          inputRef={emailRef}
          type="email"
          id="email-signup"
          placeholder="example@gmail.com"
          autocomplete
          width="100%"
        />
        <Button halfWidth fontSize="17px">
          Next
        </Button>
      </form>
      <Typography align="left" className={classes.loginLinkContainer}>
        <Link to="/login" className={classes.loginLink}>
          Already have an account?
        </Link>
      </Typography>
    </div>
  );
}
