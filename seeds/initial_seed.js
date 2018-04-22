exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(() => {
      // Inserts seed entries
      return knex("users").insert([
        { email: "amail@bla.com", password: "1111" },
        { email: "bmail@bla.com", password: "2222" },
        { email: "cmail@bla.com", password: "3333" }
      ]);
    })
    .then(() => {
      return knex("gallery")
        .del()
        .then(() => {
          return knex("gallery").insert([
            {
              imgUrl:
                "http://www.photoandvideography.com/wp-content/uploads/2012/01/awkward_photos.jpg",
              title: "Ingesting Biomatter",
              description:
                "This human's organs will convert this plant into chemical energy and excrement. Neat!",
              user_id: 1
            },
            {
              imgUrl:
                "http://i0.kym-cdn.com/photos/images/original/001/290/488/349.jpg",
              title: "Primitive Technology",
              description: "Just an average human scientist.",
              user_id: 1
            },
            {
              imgUrl: "https://i.imgur.com/tnbXCPi.jpg",
              title: "Belief in Sky Wizards",
              description: "Clouds, amiright?",
              user_id: 1
            },
            {
              imgUrl: "https://i.ytimg.com/vi/PXcfaYRJAv0/maxresdefault.jpg",
              title: "Organs on the Inside",
              description: "What will I do with all these organs?",
              user_id: 1
            },
            {
              imgUrl:
                "http://i0.kym-cdn.com/photos/images/newsfeed/001/316/888/f81.jpeg",
              title: "Shooting the Guns",
              description: "This is how we humans communicate. I am human.",
              user_id: 2
            },
            {
              imgUrl: "https://www.kiplinger.com/kipimages/pages/18048.jpg",
              title: "Opposing Thumbs",
              description: "Isn't that weird?",
              user_id: 3
            },
            {
              imgUrl:
                "https://thumb1.shutterstock.com/display_pic_with_logo/175351/412139623/stock-photo-disgusted-dietitian-nutritionist-checking-examine-sweet-roll-bun-with-stethoscope-woman-with-412139623.jpg",
              title: "Listening to Music",
              description: "Maybe she will dancing now. Go humans!",
              user_id: 3
            }
          ]);
        });
    });
};
