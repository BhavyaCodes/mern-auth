import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

type AppProps = {
  thickness?: number;
  className?: string;
};

function Input({ thickness, className }: AppProps) {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      line: {
        width: "100%",
        borderBottomWidth: thickness ? `${thickness}px` : "1px",
        borderBottomStyle: "solid",
        borderColor: "#dadde1",
      },
    })
  );
  const classes = useStyles();
  return <div className={`${classes.line} ${className || ""}`}></div>;
}

export default Input;
