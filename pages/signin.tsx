import React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { useFormik } from 'formik'
import { useSelector, useDispatch } from 'react-redux'
import { userSelector } from '../redux/slices/user.slice'
import userApi from '../api/module/user.api'
import * as Yup from 'yup'
import Link from 'next/link'
import '../scss/components/signin.module.scss'

const signin = () => {
    const SignInSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('The Field is Required'),
        password: Yup.string()
            .max(25, 'Password is too long!')
            .required('The Field is Required'),

    });
    const user = useSelector(userSelector)
    console.log("user:", user)
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: SignInSchema,
        onSubmit: (values) => {
            useDispatch(userApi.signIn(values))

        },
    });
    return (
        <form
            onSubmit={formik.handleSubmit}
            className="leading-form w-1/3 absolute top-1/4 left-1/3 form-style"
        >
            <div className="w-full">
                <p>Start with Near</p>
                <h1 className='text-2xl'>Sign In With Account</h1>
                <p>If no account? <Link href='/register'>Register Now.</Link></p>
            </div>
            <div className='w-full mt-3'>
                <TextField
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    type='email'
                    label="Email"
                    sx={{ width: "100%" }} />
            </div>
            <div className='w-full mt-3'>
                <TextField
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                    type='password'
                    label="Password"
                    sx={{ width: "100%" }} />
            </div>
            <Button
                type="submit"
                className='w-full mt-3'
                sx={{ width: "80%" }}
                variant="outlined"
            >
                Sign In
            </Button>
        </form>
    )
}

export default signin