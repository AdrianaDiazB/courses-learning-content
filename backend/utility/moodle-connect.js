import Moodle from "moodle-client";
import dotenv from "dotenv";
dotenv.config();

// const wwwroot = process.env.WWWROOT;
const wwwroot = "pruebamocc.prowessec.com";
// const token = process.env.TOKEN;
const token = "be3e29b4d24ca87f4737756698ac5fc4";

if (!wwwroot || !token) {
  throw new Error("Missing Moodle credentials");
}

const moodle = Moodle.init({
  wwwroot,
  token,
});

export default moodle;
