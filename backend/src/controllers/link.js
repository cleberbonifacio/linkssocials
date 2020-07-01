const express = require("express");
const { Link } = require("../models");

const router = express.Router();

router.get("/", async (req, res) => {
  const AccountId = 1;
  const links = await Link.findAll({ where: { AccountId } });
  if (!links) return res.jsonCodeNotFound();
  return res.jsonOK(links);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const AccountId = 1;
  const link = await Link.findOne({ where: { id, AccountId } });
  if (!link) return res.jsonCodeNotFound();
  return res.jsonOK(link);
});

router.post("/", async (req, res) => {
  const AccountId = 1;
  const { label, url, isSocial } = req.body;
  const image = "";

  const link = await Link.create({ label, url, isSocial, image, AccountId });

  return res.jsonOK(link);
});

router.put("/:id", async (req, res) => {
  const AccountId = 1;
  const { id } = req.params;
  const { body } = req;
  const fields = ["label", "url", "isSocial"];

  const link = await Link.findOne({ where: { id, AccountId } });
  if (!link) return res.jsonCodeNotFound();

  fields.map((fieldName) => {
    const newValue = body[fieldName];
    if (newValue && !undefined) link[fieldName] = newValue;
  });

  await link.save();

  return res.jsonOK(link);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const AccountId = 1;
  const link = await Link.findOne({ where: { id, AccountId } });
  if (!link) return res.jsonCodeNotFound();
  await link.destroy();
  return res.jsonOK("Deletado com sucesso!");
});

module.exports = router;
