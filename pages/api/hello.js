import connectMongo from "../../utils/connectMongo";
import Users from "../../models/userSchema";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function addTest(req, res) {
  try {
    console.log("CONNECTING TO MONGO");

    await connectMongo();
    console.log("CONNECTED TO MONGO");
    res.send("hi");
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
