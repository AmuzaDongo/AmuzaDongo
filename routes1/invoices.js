const router = require("express").Router();
const Invoice = require("../models/Invoice");

//CREATE invoice
router.post("/", async (req, res) => {
  const newInvoice = new Invoice(req.body);
  try {
    const saveinvoices = await newInvoice.save();
    res.status(200).json(saveinvoices);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE invoice
router.put("/:id", async (req, res) => {
  try {
    const invoice = await Invoice.findById(req.params.id);
    if (invoice.username === req.body.username) {
      try {
        const updateinvoice = await Invoice.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updateinvoice);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can update only your invoice!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE invoice
router.delete("/:id", async (req, res) => {
  try {
    const invoice = await Invoice.findById(req.params.id);
    if (invoice.username === req.body.username) {
      try {
        await Invoice.delete();
        res.status(200).json("invoice has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can delete only your invoice!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET invoice
router.get("/:id", async (req, res) => {
  try {
    const invoice = await Invoice.findById(req.params.id);
    res.status(200).json(invoice);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL invoices
router.get("/", async (req, res) => {
  try {
    const invoices = await Invoice.find();
    res.status(200).json(invoices);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
