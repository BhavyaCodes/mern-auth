import { useState } from "react";
import AuthLayout from "components/AuthLayout";
import Card from "components/Card";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Input from "components/common/Input";
import Button from "components/common/Button";
import Line from "components/common/Line";
import { Typography } from "@material-ui/core";
import { Step1, Step2 } from "components/SignupForm";

const Signup = () => {
  const [step, setStep] = useState<number>(0);
  const [fName, setFName] = useState<string>("");
  const [lName, setLName] = useState<string>("");
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
  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <Step1
            setFName={setFName}
            setLName={setLName}
            nextStep={() => setStep(1)}
          />
        );
      case 1: {
        return <Step2 />;
      }
      default:
        break;
    }
  };
  const classes = useStyles();
  return (
    <AuthLayout>
      <div className={classes.root}>
        <Card>
          {renderStep()}
          {/* <Step1 setFName={setFName} setLName={setLName} /> */}
        </Card>
      </div>
    </AuthLayout>
  );
};

export default Signup;
