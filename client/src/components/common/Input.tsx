import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

type AppProps = {
  type: string;
  placeholder: string;
  autocomplete?: boolean;
  gutterBottom?: number;
};

function Input({ type, placeholder, autocomplete, gutterBottom }: AppProps) {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      // root: {
      //   display: "flex",
      //   justifyContent: "center",
      //   alignItems: "center",
      // },
      input: {
        fontFamily: "inherit",
        fontSize: "1.3rem",
        padding: "14px 16px",
        outline: "none",
        borderRadius: "6px",
        border: "1px solid #dddfe2",
        color: "inherit",
        width: theme.spacing(47),
        marginBottom: theme.spacing(gutterBottom || 0),
        "&::placeholder": {
          color: "#80838A",
        },
        "&:focus": {
          "&::placeholder": {
            color: "#BEC3C9",
          },
          boxShadow: "0 0 0 2px #e7f3ff",
          borderColor: theme.palette.primary.light,
          caretColor: theme.palette.primary.light,
        },
      },
    })
  );
  const classes = useStyles();
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        className={classes.input}
        autoComplete={autocomplete ? "on" : "off"}
      />
    </div>
  );
}

export default Input;
