import { useUser } from "contexts/User";
import EmailIcon from "@material-ui/icons/Email";
import EventIcon from "@material-ui/icons/Event";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  Container,
  Toolbar,
  Grid,
  Avatar,
  Typography,
} from "@material-ui/core";

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
      display: "flex",
      fontSize: theme.spacing(3),
      alignItems: "center",
      "&:not(:last-child)": {
        marginBottom: theme.spacing(4),
      },
    },
    icon: {
      marginRight: theme.spacing(1),
    },
  })
);

export function MyProfile() {
  const [user] = useUser();
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Toolbar />
      <Container>
        <Grid container>
          <Grid item md={6} xs={12} className={classes.gridLeft}>
            <Avatar
              alt={`${user?.firstName} ${user?.lastName}`}
              src="/static/images/avatar/1.jpg"
              className={classes.large}
            >
              {(user?.firstName[0]! + user?.lastName[0]!).toUpperCase()}
            </Avatar>
            <Typography variant="h3" className={classes.name}>
              {user!.firstName + " " + user!.lastName}
            </Typography>
          </Grid>
          <Grid item md={6} xs={12} className={classes.gridRight}>
            <Typography className={classes.iconText}>
              <EmailIcon fontSize="large" className={classes.icon} />
              {user!.email}
            </Typography>
            <Typography className={classes.iconText}>
              <EventIcon fontSize="large" className={classes.icon} />
              {"Birthday " +
                new Date(user!.dob).getDate() +
                "/" +
                new Date(user!.dob).getMonth()}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
