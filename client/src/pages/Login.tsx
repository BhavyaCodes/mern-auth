import AuthLayout from "components/AuthLayout";
import Card from "components/Card";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Input from "components/common/Input";
import Button from "components/common/Button";
import Line from "components/common/Line";
import { Typography } from "@material-ui/core";

const Login = () => {
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

  return (
    <AuthLayout>
      <div className={classes.root}>
        <Card>
          <Input
            placeholder="Email address"
            type="email"
            gutterBottom={2}
            id="login-email"
          />
          <Input
            placeholder="Password"
            type="password"
            gutterBottom={2}
            id="login-password"
          />
          <Button fullWidth color="primary" fontSize="20px">
            Log in
          </Button>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" className={classes.forgot}>
            Forgotten password?
          </a>
          <Line className={classes.line} />
          <Button fontSize="17px" color="secondary">
            Create New Account
          </Button>
        </Card>

        <Typography className={classes.createAPage}>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" className={classes.link}>
            Create a Page
          </a>{" "}
          for a celebrity, band or business.
        </Typography>
      </div>
    </AuthLayout>
  );
};

export default Login;
