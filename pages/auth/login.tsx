import React from 'react'
import { Formik, Field, Form } from 'formik'
import {
  FormControl,
  Input,
  InputLabel,
  InputAdornment,
  IconButton,
  Button
} from '@material-ui/core';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

interface AuthValue {
  username: string;
  password: string;
  showPassword: boolean;
}

const login = () => {
  const [values, setValues] = React.useState<AuthValue>({
    username: '',
    password: '',
    showPassword: false,
  })
  const handleChange = (prop: keyof AuthValue) => (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("key:", prop)
    setValues({ ...values, [prop]: event.target.value })
  }
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword
    })
  }
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }
  return (
    <div className='w-full relative '>
      <Formik
        initialValues={{
          username: '',
          password: ''
        }}
        onSubmit={() => { }}
      >
        <form className='w-3/5 h3/5 absolute translate-x-1/2 translate-y-1/2 flex flex-col  leading-10 '>
          <div className=''>
            <h1>Login Form</h1>
          </div>
          <FormControl  variant="standard">
            <InputLabel htmlFor="standard-username">Username</InputLabel>
            <Input
              id="standard-username"
              type='text'
              value={values.username}
              onChange={handleChange('username')}
            />
          </FormControl>

          <FormControl className='' variant="standard">
            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
            <Input
              id="standard-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Button variant="contained">Login</Button>
        </form>
      </Formik>
    </div>

  )
}

export default login