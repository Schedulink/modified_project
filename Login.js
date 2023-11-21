import React from 'react'
import {Grid,Paper,Avatar,TextField,FormControl,InputLabel,OutlinedInput,InputAdornment,Button,Typography,Link} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Login = () => {

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const paperstyle = {
    padding:20,
    height:'65vh',
    width: 300,
    margin: "70px auto",
  }
  const avatarstyle = {
    backgroundColor:'blue'
  }

  const btnstyle = {
    margin: "8px 0"
  }

  const linkstyle = {
    margin: "8px 0"
  }

  return (
    <Grid>
        <Paper elevation={20} style={paperstyle}>
          <Grid align='center'>
            <Avatar style={avatarstyle}><LockOutlinedIcon/></Avatar>
            <h2>Login</h2>
          </Grid>
          <TextField label='Id' placeholder='Enter Id' required fullWidth />
          <br />
          <br />
          <TextField label='Email' placeholder='Enter Email' required fullWidth />
          <br />
          <br />
          <FormControl sx={{ m: 1, width: '35ch', right:'9px' }} variant="outlined" required >
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
              placeholder='Enter Password'
              required
            />
        </FormControl>
        <Button type='submit' color='primary' variant='contained' fullWidth style={btnstyle}>Submit</Button>
        <Typography>
          <Link href="#">Forget Password?</Link>
        </Typography>
        <Typography style={linkstyle}> Do you have an account?
          <Link href="Signup"> SignUp</Link>
        </Typography>
        </Paper>
    </Grid>
  )
}

export default Login