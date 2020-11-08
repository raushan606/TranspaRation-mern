const express = require("express");
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

const Feedback = require("../models/Feedback");

const router = express.Router();

//* @route  GET api/feedbacks
//* @desc   Get all feedbacks
//* @access Private
router.get("/", auth, async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    res.status(200).json(feedbacks);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//* @route  GET api/feedback/:id
//* @desc   Get single Feedback
//* @access Private
router.get("/:id", auth, async (req, res) => {
  try {
    let feedback = await Feedback.findById(req.params.id);

    //* Check if feedback is exists or not
    if (!feedback) {
      return res.status(404).json({
        msg: "Feedback Not Found",
      });
    }

    res.status(200).json(feedback);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//* @route  POST api/feedback
//* @desc   Create a feedback
//* @access Private
router.post(
  "/",
  [
    [
      check("name", "Name is required").not().isEmpty(),
      check("address", "Address is required").not().isEmpty(),
      check("pincode", "Pin Code is required")
        .not()
        .isEmpty()
        .isNumeric()
        .isLength({ min: 6, max: 6 }),

      check("phone", "Phone Number required")
        .isNumeric()
        .isLength({ min: 10, max: 10 }),
      check("aadharNo", "Aadhar Number is required")
        .not()
        .isEmpty()
        .isNumeric()
        .isLength({ min: 12, max: 12 }),

      check("vendorName", "Vendor Name is required").not().isEmpty(),
      check("content", "Please fill your complaint").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    try {
      const {
        name,
        address,
        pincode,
        phone,
        aadharNo,
        vendorName,
        content,
        email,
      } = req.body;
      console.log(req.body);

      const newFeedback = new Feedback({
        name,
        address,
        pincode,
        phone,
        aadharNo,
        vendorName,
        content,
        email,
      });

      const feedback = await newFeedback.save();
      res.json(feedback);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// // @route  PUT api/unidetails/:id
// // @desc   Update UniDetail
// // @access Private
// router.put("/:id", auth, async (req, res) => {
//   try {
//     let unidetail = await UniDetail.findById(req.params.id);

//     // Check if unidetail is exists or not
//     if (!unidetail) {
//       return res.status(404).json({
//         msg: "University Not Found",
//       });
//     }

//     unidetail = await UniDetail.findByIdAndUpdate(req.params.id, req.body);

//     res.status(200).json(unidetail);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("Server Error");
//   }
// });

//* @route  DELETE api/unidetails/:id
//* @desc   Delete UniDetail
//* @access Private
router.delete("/:id", auth, async (req, res) => {
  try {
    const unidetail = await UniDetail.findById(req.params.id);

    //* Check if unidetail is exists or not
    if (!unidetail) {
      return res.status(404).json({
        msg: "University Not Found",
      });
    }

    unidetail.remove();
    res.json(unidetail);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
