import { TextField, Button } from "@material-ui/core";
import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function signin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    async function handleLogin(event) {
        event.preventDefault();
        const response = await axios.post("/api/signin", {
            username: username,
            password: password,
        });
        console.log(response.data.message);
        if (!response.data || response.data.message === "false") {
            alert("用户名或密码错误");
            return;
        }
        if (response.data.message === "true") {
            router.push("/signup");
        }
        return;
    }

    return (
        <div>
            <TextField
                variant="outlined"
                label="username"
                margin="normal"
                fullWidth
                onChange={(event) => setUsername(event.target.value)}
            ></TextField>
            <TextField
                label="password"
                variant="outlined"
                margin="normal"
                fullWidth
                onChange={(event) => setPassword(event.target.value)}
            ></TextField>
            <Button variant="contained" color="primary" onClick={handleLogin}>
                signin
            </Button>
        </div>
    );
}
