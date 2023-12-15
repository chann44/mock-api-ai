import { Router } from "express";
import { getMockApi } from "../controllers/getMockApi";

const router = Router();

router.get("/:id", getMockApi);

export default router;
