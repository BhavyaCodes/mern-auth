import { Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

function Footer() {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: { backgroundColor: "#fff", display: "flex" },
      section: {
        paddingLeft: theme.spacing(4),
      },
    })
  );
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <div className={classes.section}>
        <Typography>India</Typography>
      </div>
      <div className={classes.section}>
        <Typography>India</Typography>
      </div>
    </footer>
  );
}

export default Footer;
