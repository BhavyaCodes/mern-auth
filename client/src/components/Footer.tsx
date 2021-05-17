import { Typography, Container, IconButton } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";

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
      right: {
        display: "flex",
      },
      link: {
        color: "inherit",
        textDecoration: "none",
        marginLeft: theme.spacing(2),
        "&:hover": {
          textDecoration: "underline",
        },
      },
    })
  );
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <Container className={classes.container}>
        <Typography>&copy; 2021 GitHub, Inc.</Typography>
        <div className={classes.right}>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className={classes.link} href="#" target="_blank" rel="noreferrer">
            <Typography>Terms</Typography>
          </a>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className={classes.link} href="#" target="_blank" rel="noreferrer">
            <Typography>Privacy policy</Typography>
          </a>
          <a
            className={classes.link}
            href="https://github.com/BhavyaCodes/mern-auth"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
