const express = require("express");
const router = express.Router();

const {
  getAll,
  getOne,
  createOneJob,
  updateOneJob,
  deleteOneJob,
} = require("../controllers/JobCRUD");

router.get("/", getAll);
router.get("/:id", getOne);
router.post("/", createOneJob);
router.put("/:id", updateOneJob);
router.delete("/:id", deleteOneJob);

module.exports = router;