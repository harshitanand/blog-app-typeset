"use strict";

module.exports = BlogPost => {
  BlogPost.getPostById = async id => {
    const postFilter = {
      where: { id },
      include: [
        {
          relation: "postContents",
          scope: {
            order: "priority ASC",
            include: [
              {
                relation: "contentComments",
              },
            ],
          },
        },
      ],
    };
    return BlogPost.findOne(postFilter);
  };

  BlogPost.remoteMethod("getPostById", {
    accepts: [
      {
        arg: "id",
        type: "number",
        required: true,
      },
    ],
    returns: {
      type: "object",
      root: true,
    },
    http: {
      path: "/getPostById/:id",
      verb: "get",
    },
  });

  BlogPost.getAllPosts = async (skip, limit) => BlogPost.find({ skip, limit });

  BlogPost.remoteMethod("getAllPosts", {
    accepts: [
      {
        arg: "skip",
        type: "number",
        required: true,
      },
      {
        arg: "limit",
        type: "number",
        required: true,
      },
    ],
    returns: {
      type: "array",
      root: true,
    },
    http: {
      path: "/getAllPosts",
      verb: "get",
    },
  });
};
