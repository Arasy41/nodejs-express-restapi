module.exports = (app) => {
  const siswa = require("../controllers/siswa.controller");
  const r = require("express").Router();

  r.get("/", siswa.findAll);
  r.get("/:id", siswa.show);
  r.post("/", siswa.create);
  r.put("/:id", siswa.update);
  r.delete("/:id", siswa.delete);

  app.use("/siswa", r);
};
