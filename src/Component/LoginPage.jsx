import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import '../CSS/LoginPageCSS.css'
import { useAuth  } from '../utils/UserContext';

export function LoginPage() {

    const navigate = useNavigate();

    const {
        authUser, setAuthUser, isLoggedIn, setIsLoggedIn
    } = useAuth()

    const [loginAttempts, setLoginAttempts] = useState(3); 

    const handleLogin = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        validateLogin(data.get("username"), data.get("password"));
        // console.log({
        //   email: data.get("username"),
        //   password: data.get("password"),
        // });
    }

    const validateLogin = async (username, password) => {
        const res = await fetch(`http://localhost:8000/api/users/${username}`);
        const data = await res.json();
        const pswrd = data.user.password;

        if (password !== pswrd) {
            setLoginAttempts(loginAttempts => loginAttempts - 1);
            console.log("ATTMEPTS:", loginAttempts, "Password", password, "pswrd:", pswrd);
        } else {
            setIsLoggedIn(true);
            setAuthUser(username);
            navigate('/home');
        }
    }

    return (
        <div>
            {
                loginAttempts > 0 ? (
                    <div className='LoginPage_container'>
                        <div>
                            <h2>Welcome to THE SPACE</h2>
                            <p>Login to get started</p>

                        </div>
                        <Box
                            onSubmit={handleLogin}
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <div>
                                <TextField
                                    id="username"
                                    name="username"
                                    label="Username"
                                />
                                <TextField
                                    id="password"
                                    name="password"
                                    label="Password"
                                />
                            </div>
                            <Button
                                name="password"
                                type="submit"
                                variant="contained"
                            >
                                Sign In
                            </Button>
                        </Box>
                    </div>
                ) : <h1>Too many attempts, aborting</h1>
          }
        </div>
    )

}