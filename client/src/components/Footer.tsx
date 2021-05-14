import { Typography, Container } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

function Footer() {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: { backgroundColor: "#fff", display: "flex" },
      container: {
        display: "flex",
        justifyContent: "space-between",
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
      },
    })
  );
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <Container className={classes.container}>
        <Typography>&copy; 2021 GitHub, Inc.</Typography>
        <Typography>right</Typography>
      </Container>
    </footer>
  );
}

export default Footer;
