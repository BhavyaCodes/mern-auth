import { Dispatch, FormEvent, SetStateAction } from "react";
import { Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from "../common/Button";
import Input from "components/common/Input";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

type AppProps = {
  date: Date | [Date, Date] | null;
  setDate: Dispatch<SetStateAction<Date | [Date, Date] | null>>;

  nextStep: () => void;
};

export function Step3({ date, setDate, nextStep }: AppProps) {
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
      datePicker: {
        // display: "block",
        fontFamily: "inherit",
        fontSize: "1.2rem",
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        textAlign: "center",
        width: "fit-content",
      },
      input: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
      },
      form: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
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
    // setEmail(emailRef.current!.value);
    nextStep();
  };

  return (
    <div className={classes.root}>
      <Typography className={classes.title}>
        What's your date of birth?
      </Typography>
      <Typography className={classes.subtitle}>
        Choose your date of birth. You can always make this private later.
      </Typography>
      <form onSubmit={handleSubmit} className={classes.form}>
        {/* <Input
          className={classes.input}
          topLabel="Email address"
          inputRef={emailRef}
          type="email"
          id="email-signup"
          placeholder="example@gmail.com"
          autocomplete
          width="100%"
        /> */}
        <DatePicker
          selected={date as Date}
          onChange={(date) => setDate(date)}
          className={classes.datePicker}
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
