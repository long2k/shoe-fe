import React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { useFormik } from 'formik'
import userApi from '../api/module/user.api'
import * as Yup from 'yup'
import Link from 'next/link'
import styles from '../styles/components/signin.module.css';


const signin = () => {
    const SignInSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('The Field is Required'),
        password: Yup.string()
            .max(25, 'Password is too long!')
            .required('The Field is Required'),

    });
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: SignInSchema,
        onSubmit: (values) => {

        },
    });
    return (
        <form
            onSubmit={formik.handleSubmit}
            className={`leading-form w-1/3 relative top-1/4 left-1/3 my-5 ${styles.signin}`}
        >
            <div className="w-full leading-10">
                <p>Start with Near</p>
                <h1 className='text-2xl'>Sign In With Account</h1>
                <p>If no account? <Link href='/register'>Register Now.</Link></p>
            </div>
            <div className='w-full mt-3 leading-loose my-3'>
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
            <div className='w-full mt-3 my-3'>
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
                className='w-full mt-3 my-3'
                sx={{ width: "80%", height: '55px' }}
                variant="outlined"
            >
                Sign In
            </Button>
        </form>
    )
}

export default signin