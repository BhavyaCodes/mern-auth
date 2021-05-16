import { useRef, useState, useEffect, FormEvent } from "react";
import axios from "axios";
import AuthLayout from "components/AuthLayout";
import Card from "components/Card";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Input from "components/common/Input";
import Button from "components/common/Button";
import Line from "components/common/Line";
import { Typography } from "@material-ui/core";
import { Link, Redirect } from "react-router-dom";
import { useUser } from "contexts/User";

export const Login = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [user, setUser, loading] = useUser();

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        flexDirection: "column",
      },
      card: {
        width: "100%",
      },
      forgot: {
        "&:link,&:visited": {
          fontSize: "1rem",
          display: "inline-block",
          margin: theme.spacing(2),
          color: theme.palette.primary.main,
          textDecoration: "none",
        },
        "&:hover": {
          textDecoration: "underline",
        },
      },
      line: {
        marginTop: theme.spacing(0),
        marginBottom: theme.spacing(2),
      },
      createAPage: {
        marginTop: theme.spacing(2),
      },
      link: {
        "&:link,&:visited": {
          fontWeight: 700,
          color: "inherit",
          textDecoration: "none",
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
    const email = emailRef.current!.value;
    const password = passwordRef.current!.value;
    axios
      .post("/api/login", {
        email,
        password,
      })
      .then(() => setSubmitted(true))
      .catch((e) => {
        console.log(e);
        setSubmitted(true);
      });
  };

  useEffect(() => {
    if (submitted) {
      axios
        .get("/api/current-user")
        .then((res) => {
          setUser(res.data);
        })
        .catch((e) => {
          console.log(e);
          setUser(null);
        });
    }
  }, [setUser, submitted]);

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <AuthLayout>
      <div className={classes.root}>
        <Card>
          <form onSubmit={handleSubmit}>
            <Input
              inputRef={emailRef}
              placeholder="Email address"
              type="email"
              gutterBottom={2}
              id="login-email"
            />
            <Input
              inputRef={passwordRef}
              placeholder="Password"
              type="password"
              gutterBottom={2}
              id="login-password"
            />
            <Button type="submit" fullWidth color="primary" fontSize="20px">
              Log in
            </Button>
          </form>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" className={classes.forgot}>
            Forgotten password?
          </a>
          <Line className={classes.line} />
          <Link to="/signup">
            <Button fontSize="17px" color="secondary">
              Create New Account
            </Button>
          </Link>
        </Card>

        <Typography className={classes.createAPage}>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" className={classes.link}>
            Create a Page
          </a>{" "}
          for a celebrity, brand or business.
        </Typography>
      </div>
    </AuthLayout>
  );
};
