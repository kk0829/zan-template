import _global from "./_global";
import auth from "../policies/auth";
import fail from "./fail";

module.exports = [_global, auth, fail];
