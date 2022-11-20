import React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { useFormik } from 'formik';
import * as Yup from 'yup';

const register = () => {
    const RegisterSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('The Field is Required'),
        password: Yup.string()
            .max(25, 'Password is too long!')
            .required('The Field is Required'),
        firstName: Yup.string()
            .max(25, 'First Name is too long!')
            .required('The Field is Required'),
        lastName: Yup.string()
            .max(25, 'Last Name is too long!')
            .required('The Field is Required'),
        address: Yup.string()
            .max(25, 'Address is too long!')
            .required('The Field is Required'),

    });
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            address: ''
        },
        validationSchema: RegisterSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <form
            onSubmit={formik.handleSubmit}
            className="leading-form w-1/3 absolute top-1/4 left-1/3 "
        >
            <div className="w-full  text-white">
                <p>Start with Near</p>
                <h1 className='text-2xl'>Sign In With Account</h1>
                <p>If have account? <a>Sign In Now.</a></p>
            </div>
            <div className='w-full mt-3 flex content-between'>
                <TextField
                    name="firstName"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                    helperText={formik.touched.firstName && formik.errors.firstName}
                    label="First name"
                    sx={{ width: "40%" }}
                />
                <TextField
                    name="lastName"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                    helperText={formik.touched.lastName && formik.errors.lastName}
                    label="Last Name"
                    sx={{ marginLeft: '20%', width: "40%" }}
                />
            </div>
            <div className='w-full mt-3'>
                <TextField
                    name="address"
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    error={formik.touched.address && Boolean(formik.errors.address)}
                    helperText={formik.touched.address && formik.errors.address}
                    label="Address"
                    sx={{ width: "100%" }} />
            </div>
            <div className='w-full mt-3'>
                <TextField
                    name="email"
                    type="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    label="Email"
                    sx={{ width: "100%" }}
                />
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
                    sx={{ width: "100%" }}
                />
            </div>
            <Button type='submit' className='w-full mt-3' sx={{ width: "80%" }}>Register</Button>
        </form>
    )
}

export default register