import { RefObject, ChangeEvent } from "react";
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
  value?: string | undefined;
  onChange?: (arg0: string) => void;
  autoFocus?: boolean;
};

function Input({
  autoFocus,
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
  value,
  onChange,
}: AppProps) {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
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
        transitionDuration: "0.3s",
        transitionProperty: "box-shadow border",
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
        display: "block",
        marginLeft: theme.spacing(0.2),
        marginBottom: theme.spacing(0.3),
        opacity: 0.7,
      },
    })
  );
  const classes = useStyles();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };
  return (
    <div className={`${className || ""} ${classes.root}`}>
      {topLabel && (
        <label className={classes.topLabel} htmlFor={id}>
          {topLabel}
        </label>
      )}
      <input
        autoFocus={autoFocus}
        ref={inputRef}
        id={id}
        type={type}
        placeholder={placeholder}
        className={classes.input}
        autoComplete={autocomplete ? "on" : "off"}
        required={required && true}
        value={null || value}
        onChange={handleChange}
      />
    </div>
  );
}

export default Input;
