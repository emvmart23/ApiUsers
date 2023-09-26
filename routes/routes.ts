import { Router } from "express";
import {
  showAllUsers,
  saveUser,
  showUser,
  updateUser,
  deleteUser
} from "../controllers/userController";

const defaultRoute = Router();

defaultRoute.get("/users", showAllUsers);
defaultRoute.get("/:id", showUser);
defaultRoute.post("/newuser", saveUser);
defaultRoute.put("/update/:id",updateUser )
defaultRoute.delete("/delete/:id",deleteUser)


export { defaultRoute };
