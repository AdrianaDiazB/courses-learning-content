import Moodle from "moodle-client";
import dotenv from "dotenv";
dotenv.config();

// const wwwroot = process.env.WWWROOT;
const wwwroot = "https://cursosmocc.prowessec.com";
// const token = process.env.TOKEN;
const token = "c7a1fdeb93592eacc0480e164e52fe3c";

if (!wwwroot || !token) {
  throw new Error("Missing Moodle credentials");
}

const moodle = Moodle.init({
  wwwroot,
  token,
});

export default moodle;
