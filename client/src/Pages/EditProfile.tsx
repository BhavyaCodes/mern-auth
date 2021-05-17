import { useState, useRef, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { useUser } from "contexts/User";
import Input from "components/common/Input";
import Button from "components/common/Button";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
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
  const history = useHistory();
  // const [fileInputState, setFileInputState] = useState("");
  const [previewSource, setPreviewSource] =
    useState<string | ArrayBuffer | null>(null);
  // const [selectedFile, setSelectedFile] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);
  const [user, setUser] = useUser();
  const [firstName, setFirstName] = useState<string>(user!.firstName);
  const [lastName, setLastName] = useState<string>(user!.lastName);
  const [email, setEmail] = useState<string>(user!.email);
  const [dob, setDob] = useState<Date | [Date, Date] | null>(
    new Date(user!.dob)
  );

  const classes = useStyles();

  const fileChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file: File | null = e.target.files![0];
    if (!file) {
      setPreviewSource(null);
      return;
    }
    previewFile(file);
  };

  const handleEditSave = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const fd = new FormData();
      if (fileRef.current?.files![0]) {
        fd.append("image", fileRef.current?.files[0]);
      }
      fd.append("firstName", firstName);
      fd.append("lastName", lastName);
      fd.append("email", email);
      fd.append("dob", dob?.toString()!);

      await axios
        .post("/api/edit-profile", fd, {
          onUploadProgress: (progressEvent) => {
            console.log(
              `Upload Progress ${Math.round(
                (progressEvent.loaded / progressEvent.total) * 100
              )}%`
            );
          },
        })
        .then((res) => {
          setUser({
            firstName: res.data.firstName,
            lastName: res.data.lastName,
            dob: res.data.dob,
            email: res.data.email,
            imageUrl: res.data.imageUrl,
          });
          history.push("/");
        });
    } catch (error) {
      console.log(error);
    }
  };

  const previewFile = (file: Blob) => {
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
        <Typography variant="h3" gutterBottom>
          Edit mode
        </Typography>
        <Grid container>
          <Grid item md={6} xs={12} className={classes.gridLeft}>
            <Avatar
              alt={`${user?.firstName} ${user?.lastName}`}
              src={(previewSource as string) || user?.imageUrl || ""}
              className={classes.large}
            >
              {(user?.firstName[0]! + user?.lastName[0]!).toUpperCase()}
            </Avatar>
            <input
              type="file"
              name="image"
              accept=".jpg,.jpeg,.png,.gif"
              multiple={false}
              ref={fileRef}
              onChange={fileChangeHandler}
              className={classes.imageInput}
            />
            <Input
              id="edit-first-name"
              value={firstName}
              placeholder=""
              type="text"
              topLabel="First Name"
              onChange={setFirstName}
            />
            <Input
              id="edit-last-name"
              value={lastName}
              placeholder=""
              type="text"
              topLabel="Last Name"
              onChange={setLastName}
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
              onChange={setEmail}
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
            <form onSubmit={handleEditSave}>
              <Button fullWidth fontSize="2rem" color="secondary" type="submit">
                Save
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
