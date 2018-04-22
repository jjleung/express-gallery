const bookshelf = require("./bookshelf");
const knex = require("../knex");
const Users = require("./Users");

// console.log("knex ", knex.select());

const Gallery = bookshelf.Model.extend(
  {
    tableName: "gallery",
    idAttribute: "gallery_id",

    // author: function() {
    //   return this.belongsTo(Users);
    // },
    hasTimestamps: true
  },

  // bookshelf .query? model.on("fetching"...)?

  //   getAllPictures: curr_user => {
  {
    getAllPictures: () => {
      console.log("this.knex ", knex);

      return (
        knex
          .select()
          .from("gallery")
          //   .where({ user_id: curr_user })
          .orderBy("gallery_id", "asc")
          .then(data => {
            return data;
          })
          .catch(err => {
            console.log(err);
            res.json(err);
          })
      );
    },
    getPictureById: id => {
      return knex
        .select()
        .from("gallery")
        .where({
          gallery_id: id
        })
        .then(picture => {
          return picture[0];
        });
    },
    addPicture: (imgUrl, title, description, curr_user) => {
      return knex("gallery").insert({
        imgUrl: imgUrl,
        title: title,
        description: description,
        user_id: curr_user
      });
    },
    updatePicture: (id, imgUrl, title, description) => {
      return knex("gallery")
        .where("gallery_id", id)
        .update({
          imgUrl: imgUrl,
          title: title,
          description: description
        });
    },
    deletePicture: id => {
      return knex("gallery")
        .where("gallery_id", id)
        .del();
    }
  }
);

module.exports = Gallery;
