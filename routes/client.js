const router = require("express").Router();
const Client = require("../models/client");

//CREATE client
router.post("/", async (req, res) => {
  const newClient = new Client(req.body);
  try {
    const saveclients = await newClient.save();
    res.status(200).json(saveclients);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE client
router.put("/:id", async (req, res) => {
  try {
    const client = await Client.findById(req.params.id);
    if (client.username === req.body.username) {
      try {
        const updateclient = await Client.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updateclient);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can update only your client!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE client
router.delete("/:id", async (req, res) => {
  try {
    const client = await Client.findById(req.params.id);
    if (client.username === req.body.username) {
      try {
        await client.delete();
        res.status(200).json("client has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can delete only your client!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET client
router.get("/:id", async (req, res) => {
  try {
    const client = await Client.findById(req.params.id);
    res.status(200).json(client);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL clients
router.get("/", async (req, res) => {
  try {
    const clients = await Client.find();
    res.status(200).json(clients);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
