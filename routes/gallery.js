const express = require("express");
const router = express.Router();
const Gallery = require("../db/models/Gallery");

router
  .get("/", (req, res) => {
    return res.render("index");
  })
  .get("/gallery", (req, res) => {
    Gallery.getAllPictures().then(allPics => {
      //   res.json(allPics);
      return res.render("gallery", { allPics });
    });
  })
  .get("/gallery/new", (req, res) => {
    return res.render("new", {
      //stuff
    });
  })
  .get("/gallery/:id", (req, res) => {
    Gallery.getAllPictures().then(picArr => {
      const bodyData = picArr.filter(
        obj => obj.gallery_id === Number(req.params.id)
      )[0];
      return res.render("image", {
        gallery_id: bodyData.gallery_id,
        imgUrl: bodyData.imgUrl,
        title: bodyData.title,
        description: bodyData.description
      });
    });
  })
  .get("/gallery/:id/edit", (req, res) => {
    Gallery.getAllPictures().then(picArr => {
      const formData = picArr.filter(
        obj => obj.gallery_id === Number(req.params.id)
      )[0];
      console.log("formData: ", formData);
      return res.render("edit", {
        gallery_id: formData.gallery_id,
        imgUrl: formData.imgUrl,
        title: formData.title,
        description: formData.description
      });
    });
  });

router.post("/gallery/new", (req, res) => {
  const { imgUrl, title, description } = req.body;
  Gallery.addPicture(imgUrl, title, description).then(() => {
    return res.redirect(`/gallery/`);
  });
});

router.put("/gallery/:id/edit", (req, res) => {
  const { imgUrl, title, description } = req.body;
  const id = req.params.id;
  Gallery.updatePicture(id, imgUrl, title, description).then(gallery_id => {
    return res.redirect(`/gallery/${gallery_id}`);
  });
});

router.delete("/gallery/:id", (req, res) => {
  const id = Number(req.params.id);
  Gallery.deletePicture(id).then(() => {
    return res.redirect("/gallery");
  });
});

module.exports = router;
