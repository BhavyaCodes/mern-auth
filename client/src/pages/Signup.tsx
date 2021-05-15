import { useState } from "react";
import AuthLayout from "components/AuthLayout";
import Card from "components/Card";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Input from "components/common/Input";
import Button from "components/common/Button";
import Line from "components/common/Line";
import { Typography } from "@material-ui/core";
import { Step1, Step2, Step3, Step4 } from "components/SignupForm";
import axios from "axios";

const Signup = () => {
  const [step, setStep] = useState<number>(0);
  const [fName, setFName] = useState<string>("");
  const [lName, setLName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [date, setDate] = useState<Date | [Date, Date] | null>(new Date());
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [signUpError, setSignUpError] = useState<null | string>(null);
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

  const handleSignup = async () => {
    setLoading(true);
    try {
      const res = await axios.post("/api/register", {
        email,
        password,
        firstName: fName,
        lastName: lName,
        dob: date,
      });
      setSuccess(true);
      console.log(res);
    } catch (error) {
      console.log(error);
      setSignUpError(error.response.data.message);
    }
  };

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
        return <Step2 setEmail={setEmail} nextStep={() => setStep(2)} />;
      }
      case 2: {
        return (
          <Step3
            date={date as Date}
            setDate={setDate}
            nextStep={() => setStep(3)}
          />
        );
      }
      case 3: {
        return (
          <Step4
            setPassword={setPassword}
            loading={loading}
            onSubmit={handleSignup}
            success={success}
            firstName={fName}
            signUpError={signUpError}
          />
        );
      }
      default:
        break;
    }
  };
  const classes = useStyles();
  return (
    <AuthLayout>
      <div className={classes.root}>
        <Card>{renderStep()}</Card>
      </div>
    </AuthLayout>
  );
};

export default Signup;
