import { Router } from "express";
import getCurentUser from "../controllers/use.controllers.js";

const curentUserRouts =Router();

curentUserRouts.get('/curentUser', getCurentUser );

export default curentUserRouts 