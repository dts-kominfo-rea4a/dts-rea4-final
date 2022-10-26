import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from '@mui/material';

const Input = ({
  name,
  label,
  type,
  placeholder,
  childPass,
  handleClickShowPassword,
  handleMouseDownPassword,
  value,
  onChange,
  kindPass,
  error,
  messageError,
  disabled,
}) => {
  if (type === 'password') {
    return (
      <FormControl error={error} fullWidth margin='normal' variant='outlined'>
        <InputLabel htmlFor='outlined-adornment-password'>Password</InputLabel>
        <OutlinedInput
          id='outlined-adornment-password'
          type={kindPass}
          value={value}
          onChange={onChange}
          endAdornment={
            <InputAdornment position='end'>
              <IconButton
                aria-label='toggle password visibility'
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge='end'
              >
                {childPass}
              </IconButton>
            </InputAdornment>
          }
          label='Password'
        />
        <FormHelperText id='component-error-text'>
          {messageError}
        </FormHelperText>
      </FormControl>
    );
  }
  return (
    <FormControl fullWidth margin='normal'>
      <TextField
        id='outlined-basic'
        label={label}
        variant='outlined'
        onChange={onChange}
        value={value}
        type={type}
        placeholder={placeholder}
        name={name}
        error={error}
        helperText={messageError}
        disabled={disabled}
      />
    </FormControl>
  );
};

export default Input;
