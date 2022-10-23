import React, { useState } from "react";
import { Box } from "@mui/system";
import { Button, TextField, Typography } from "@mui/material";


export default function Login() {
    const [register, setRegister] = useState(false);
    return (
        <div>
            <form>
                <Box
                    display="flex"
                    flexDirection={"column"}
                    maxWidth={400}
                    alignItems="center"
                    justifyContent={"center"}
                    margin="auto"
                    marginTop={5}
                    padding={3}
                    // border-Radius={5}
                    boxShadow={"3px 3px 20px #ccc"}
                    sx={{
                        ":hover": {
                            boxShadow: "10px 10px 20px #ccc",
                        },
                    }}
                >
                    <Typography
                        variant="h4"
                        padding={3}
                        textAlign="center">
                        {register ? "Register" : "Login"}
                    </Typography>
                    {
                        register && <TextField
                            name="name"
                            margin="normal"
                            type={'text'}
                            variant="outlined"
                            placeholder="Username"
                        />
                    }
                    <TextField
                        name="email"
                        margin="normal"
                        type={'email'}
                        variant="outlined"
                        placeholder="Email"
                    />
                    <TextField
                        name="password"
                        margin="normal"
                        type={'password'}
                        variant="outlined"
                        placeholder="Password"
                    />
                    <Button
                        sx={{ marginTop: 3, borderRadius: 3 }}
                        variant="contained"
                        color="warning"
                    >{register ? "Register" : "Login"}
                    </Button>
                    <Button
                        onClick={() => setRegister(!register)}
                        sx={{ marginTop: 2, borderRadius: 3 }}
                    >Change to {register ? "Login" : "Register"}
                    </Button>
                </Box>
            </form>
        </div>
    )
}