import User from "../../models/User";
import dbConnect from "../../utils/dbConnect";

export default async function handler(req, res) {
    await dbConnect();

    const { username, password } = req.body;
    try {
        const user = await User.findOne({
            username: username,
            password: password,
        });
        if (!user) {
            res.json({ message: "false" });
        } else {
            res.json({ message: "true" });
        }
    } catch (error) {
        console.log(error);
        res.json({ message: "false" });
    }
}
