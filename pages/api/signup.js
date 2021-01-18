import User from "../../models/User";
import dbConnect from "../../utils/dbConnect";

export default async function handler(req, res) {
    await dbConnect();
    const { username, password } = req.body;
    const user = new User({
        username: username,
        password: password,
    });
    try {
        await user.save();
        res.json({
            message: "true",
        });
    } catch (error) {
        console.log(error);
        res.json({
            message: "false",
        });
    }
}
