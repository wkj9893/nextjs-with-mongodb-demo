import { TextField, Button } from "@material-ui/core";
import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function signin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    async function handleSignup(event) {
        event.preventDefault();
        try {
            const response = await axios.post("/api/signup", {
                username: username,
                password: password,
            });
            console.log(response.data);
            if (response.data.message === "true") {
                router.push("/signin");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <TextField
                variant="outlined"
                label="username"
                margin="normal"
                fullWidth
                onChange={(event) => setUsername(event.target.value)}
            />
            <TextField
                label="password"
                variant="outlined"
                margin="normal"
                fullWidth
                onChange={(event) => setPassword(event.target.value)}
            />
            <Button variant="contained" color="primary" onClick={handleSignup}>
                signup
            </Button>
        </div>
    );
}
