import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { ReactNode } from "react";

type AppProps = {
  children: ReactNode;
  fullWidth?: boolean;
  color?: "primary" | "secondary";
  fontSize: string;
};

function Input({ fullWidth, children, color, fontSize }: AppProps) {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      button: {
        color: theme.palette.primary.contrastText,
        fontSize,
        backgroundColor:
          color === "secondary"
            ? theme.palette.secondary.light
            : theme.palette.primary.light,
        width: fullWidth ? "100%" : "inherit",
        fontFamily: "inherit",
        fontWeight: 700,
        border: "none",
        outline: "none",
        cursor: "pointer",
        padding: theme.spacing(1.5),
        borderRadius: "6px",
        "&:hover": {
          backgroundColor:
            color === "secondary"
              ? theme.palette.secondary.main
              : theme.palette.primary.main,
        },
        "&:active": {
          backgroundColor:
            color === "secondary"
              ? theme.palette.secondary.dark
              : theme.palette.primary.dark,
        },
      },
    })
  );
  const classes = useStyles();
  return <button className={classes.button}>{children}</button>;
}

export default Input;
