const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const checkRole = require("../middleware/role");

const {
  createRecord,
  getRecords,
  updateRecord,
  deleteRecord,
} = require("../controllers/recordController");

router.post("/", auth, checkRole(["admin"]), createRecord);
router.get("/", auth, createRecord);
router.put("/:id", auth, checkRole(["admin"]), updateRecord);
router.delete("/:id", auth, checkRole(["admin"]), deleteRecord);

module.exports = router;