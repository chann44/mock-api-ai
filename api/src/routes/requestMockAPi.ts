import { Router } from "express";
import { getHello } from "../controllers/controllerRequestMockApi";

const router = Router();

router.get("/", getHello);

export default router;
