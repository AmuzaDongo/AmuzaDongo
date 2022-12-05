const router = require("express").Router();
const Testimonial = require("../models/testimonial");

//CREATE testimonial
router.post("/", async (req, res) => {
  const newTestimonial = new Testimonial(req.body);
  try {
    const saveTestimonials = await newTestimonial.save();
    res.status(200).json(saveTestimonials);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE testimonial
router.put("/:id", async (req, res) => {
  try {
    const testimonial = await Testimonial.findById(req.params.id);
    if (testimonial.username === req.body.username) {
      try {
        const updateTestimonial = await Testimonial.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updateTestimonial);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can update only your testimonial!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE testimonial
router.delete("/:id", async (req, res) => {
  try {
    const testimonial = await Testimonial.findById(req.params.id);
    if (testimonial.username === req.body.username) {
      try {
        await testimonial.delete();
        res.status(200).json("testimonial has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can delete only your testimonial!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET testimonial
router.get("/:id", async (req, res) => {
  try {
    const testimonial = await Testimonial.findById(req.params.id);
    res.status(200).json(testimonial);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL testimonials
router.get("/", async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.status(200).json(testimonials);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
