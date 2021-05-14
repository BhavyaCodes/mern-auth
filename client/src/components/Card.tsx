import { ReactNode } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

function Card({ children }: { children: ReactNode }) {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      card: {
        backgroundColor: "#fff",
        height: theme.spacing(20),
        boxShadow: "0 2px 4px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1)",
        borderRadius: "8px",
      },
    })
  );
  const classes = useStyles();
  return <div className={classes.card}>{children}</div>;
}

export default Card;
