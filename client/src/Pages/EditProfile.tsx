import { useState, ChangeEvent } from "react";
import { useUser } from "contexts/User";
import EmailIcon from "@material-ui/icons/Email";
import EventIcon from "@material-ui/icons/Event";
import Input from "components/common/Input";
import Button from "components/common/Button";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  Container,
  Toolbar,
  Grid,
  Avatar,
  Typography,
} from "@material-ui/core";
import DatePicker from "react-datepicker";

import Line from "components/common/Line";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
      height: "100%",
      paddingTop: theme.spacing(4),
      textAlign: "center",
    },
    large: {
      width: theme.spacing(40),
      height: theme.spacing(40),
      marginBottom: theme.spacing(4),
      fontSize: theme.spacing(20),
      backgroundColor: theme.palette.warning.light,
    },
    name: {
      textTransform: "capitalize",
    },
    gridLeft: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    gridRight: {
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
    },
    iconText: {
      fontSize: theme.spacing(3),
      // alignItems: "center",
      // "&:not(:last-child)": {
      //   marginBottom: theme.spacing(4),
      // },
    },
    icon: {
      marginRight: theme.spacing(1),
    },
    line: {
      margin: theme.spacing(2),
    },
    datePicker: {
      fontFamily: "inherit",
      fontSize: "1.2rem",
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      textAlign: "center",
      width: "fit-content",
    },
    imageInput: {},
  })
);

export function EditProfile() {
  const [fileInputState, setFileInputState] = useState("");
  const [previewSource, setPreviewSource] =
    useState<string | ArrayBuffer | null>(null);
  const [selectedFile, setSelectedFile] = useState("");
  const [user] = useUser();
  const [firstName, setFirstName] = useState<string>(user!.firstName);
  const [lastName, setLastName] = useState<string>(user!.lastName);
  const [email, setEmail] = useState<string>(user!.email);
  const [dob, setDob] = useState<Date | [Date, Date] | null>(
    new Date(user!.dob)
  );

  const classes = useStyles();

  const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e?.target?.files?.[0];
    if (file) {
      previewFile(file);
    }
  };

  const previewFile = (file: File) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  return (
    <div className={classes.root}>
      <Toolbar />
      <Container>
        <Grid container>
          <Grid item md={6} xs={12} className={classes.gridLeft}>
            <Avatar
              alt={`${user?.firstName} ${user?.lastName}`}
              src={(previewSource as string) || ""}
              className={classes.large}
            >
              {(user?.firstName[0]! + user?.lastName[0]!).toUpperCase()}
            </Avatar>
            <input
              type="file"
              name="image"
              onChange={handleFileInputChange}
              value={fileInputState}
              className={classes.imageInput}
            />
            <Input
              id="edit-first-name"
              value={firstName}
              placeholder=""
              type="text"
              topLabel="First Name"
            />
            <Input
              id="edit-last-name"
              value={lastName}
              placeholder=""
              type="text"
              topLabel="Last Name"
            />
          </Grid>
          <Grid item md={6} xs={12} className={classes.gridRight}>
            {/* <Typography className={classes.iconText}>
              <EventIcon fontSize="large" className={classes.icon} />
              {"Birthday " +
                new Date(user!.dob).getDate() +
                "/" +
                new Date(user!.dob).getMonth()}
            </Typography> */}
            <Input
              id="edit-last-name"
              value={email}
              placeholder=""
              type="text"
              topLabel="Email address"
            />
            <DatePicker
              selected={dob as Date}
              onChange={(date) => setDob(date)}
              className={classes.datePicker}
            />
          </Grid>
        </Grid>
        <Line className={classes.line} />
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Button fullWidth fontSize="2rem">
              Cancel
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button fullWidth fontSize="2rem" color="secondary">
              Save
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
