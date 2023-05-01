import dbConnect from "../../../utils/dbconnect";
import gravatar from "gravatar";
import jwt from "jsonwebtoken";
import Users from "../../../models/userSchema";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */

export default async function handler(req, res) {
  const { method } = req;
  console.log("connecting");
  await dbConnect();
  console.log("connected");
  console.log(method);
  switch (method) {
    case "GET":
      try {
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const { name, email, password } = req.body;

        let avatar;
        let token;
        const users = await Users.findOne({ email: email });

        if (users) {
          res.json({ exists: true });
          return;
        } else {
          avatar = gravatar.url(email, { s: "200", r: "pg", d: "mm" });
          const newUser = new Users({
            name: name,
            email: email,
            password: password,
            walletId: "kkk",
            bio: "kkk",
            avatar: avatar,
          });

          const createduser = await newUser.save();
          console.log("lolop");
          token = jwt.sign(
            { userEmail: email, designation: "user" },
            process.env.JWT_SECRATE,
            { expiresIn: "3hr" }
          );
        }

        var userinfo = {
          name: name,
          email: email,
          password: password,
          avatar: avatar,
        };

        res.json({ exists: false, token: token, user: userinfo });
      } catch (error) {
        console.log(error);
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
// const register = async (req, res, next) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }
//     const { name, email, password } = req.body;

//     let users;
//     try {
//       users = await user.findOne({ email: email });
//       console.log(users);
//     } catch (e) {
//       const error = new HttpError("Wrong Email Credentials", 400);
//       return next(error);
//     }

// if (users) {
//   res.json({ exists: true });
//   return;
// } else {
//       let avatar;
//       try {
//         avatar = gravatar.url(email, { s: "200", r: "pg", d: "mm" });
//       } catch (e) {
//         const error = new HttpError("gravatar error", 400);
//         return next(error);
//       }

//       const newUser = new user({
//         name: name,
//         email: email,
//         password: password,
//         avatar: avatar,
//       });

//       try {
//         const createduser = await newUser.save();

//         let token;

//         try {
//           token = jwt.sign(
//             { userEmail: email, designation: "user" },
//             process.env.JWT_SECRATE,
//             { expiresIn: "3hr" }
//           );
//         } catch (err) {
//           const error = new HttpError("Error logging user", 401);
//           console.log(err);
//           return next(error);
//         }
//         var userinfo = {
//           name: name,
//           email: email,
//           password: password,
//           avatar: avatar,
//         };
//         res.json({ exists: false, token: token, user: userinfo });
//       } catch (err) {
//         console.log(err);
//         const error = new HttpError("Cannot add user", 400);
//         return next(error);
//       }
//     }
//   };
