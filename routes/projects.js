const router = require("express").Router();
const User = require("../models/User");
const Project = require("../models/Project");

//CREATE Project
router.post("/", async (req, res) => {
  const newProject = new Project(req.body);
  try {
    const saveProjects = await newProject.save();
    res.status(200).json(saveProjects);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE Project
router.put("/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (Project.username === req.body.username) {
      try {
        const updateProject = await Project.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updateProject);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can update only your Project!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE Project
router.delete("/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (project.username === req.body.username) {
      try {
        await Project.delete();
        res.status(200).json("Project has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can delete only your Project!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET Project
router.get("/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    res.status(200).json(project);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL projects
router.get("/", async (req, res) => {
  const username = req.query.user;
  const catName = req.query.cat;
  try {
    let projects;
    if (username) {
      projects = await Project.find({ username });
    } else if (catName) {
      projects = await Project.find({
        categories: {
          $in: [catName],
        },
      });
    } else {
      projects = await Project.find();
    }
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
