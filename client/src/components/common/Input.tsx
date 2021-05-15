import { RefObject } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

type AppProps = {
  type: string;
  placeholder: string;
  autocomplete?: boolean;
  gutterBottom?: number;
  width?: string;
  className?: string;
  topLabel?: string;
  id: string;
  required?: boolean;
  inputRef?: RefObject<HTMLInputElement>; //change later to not optional
};

function Input({
  id,
  type,
  placeholder,
  autocomplete,
  gutterBottom,
  width,
  className,
  topLabel,
  required,
  inputRef,
}: AppProps) {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      // root: {
      //   display: "flex",
      //   justifyContent: "center",
      //   alignItems: "center",
      // },
      root: {
        textAlign: "left",
      },
      input: {
        fontFamily: "inherit",
        fontSize: "1.3rem",
        padding: "14px 16px",
        outline: "none",
        borderRadius: "6px",
        border: "1px solid #dddfe2",
        color: "inherit",
        width: width || theme.spacing(47),
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
      topLabel: {
        display: "inline-block",
        marginLeft: theme.spacing(0.2),
        marginBottom: theme.spacing(0.3),
        opacity: 0.7,
      },
    })
  );
  const classes = useStyles();
  return (
    <div className={`${className || ""} ${classes.root}`}>
      {topLabel && (
        <label className={classes.topLabel} htmlFor={id}>
          {topLabel}
        </label>
      )}
      <input
        ref={inputRef}
        id={id}
        type={type}
        placeholder={placeholder}
        className={classes.input}
        autoComplete={autocomplete ? "on" : "off"}
        required={required && true}
      />
    </div>
  );
}

export default Input;
