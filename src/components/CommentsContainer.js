import React from "react";
import Comment from "./Comment";
import { CommentsList } from "./Comment";

const commentsData = [
  {
    name: "Aditya Dubey",
    text: "This is my comment...Please read, understand and then like",
    reply: [],
  },
  {
    name: "Aditya Dubey",
    text: "This is my comment...Please read, understand and then like",
    reply: [
      {
        name: "Aditya Dubey",
        text: "This is my comment...Please read, understand and then like",
        reply: [],
      },
      {
        name: "Aditya Dubey",
        text: "This is my comment...Please read, understand and then like",
        reply: [
          {
            name: "Aditya Dubey",
            text: "This is my comment...Please read, understand and then like",
            reply: [
              {
                name: "Aditya Dubey",
                text: "This is my comment...Please read, understand and then like",
                reply: [
                  {
                    name: "Aditya Dubey",
                    text: "This is my comment...Please read, understand and then like",
                    reply: [],
                  },
                  {
                    name: "Aditya Dubey",
                    text: "This is my comment...Please read, understand and then like",
                    reply: [
                      {
                        name: "Aditya Dubey",
                        text: "This is my comment...Please read, understand and then like",
                        reply: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "Aditya Dubey",
            text: "This is my comment...Please read, understand and then like",
            reply: [],
          },
        ],
      },
    ],
  },
  {
    name: "Aditya Dubey",
    text: "This is my comment...Please read, understand and then like",
    reply: [],
  },
  {
    name: "Aditya Dubey",
    text: "This is my comment...Please read, understand and then like",
    reply: [
      {
        name: "Aditya Dubey",
        text: "This is my comment...Please read, understand and then like",
        reply: [],
      },
      {
        name: "Aditya Dubey",
        text: "This is my comment...Please read, understand and then like",
        reply: [],
      },
    ],
  },
  {
    name: "Aditya Dubey",
    text: "This is my comment...Please read, understand and then like",
    reply: [],
  },
];

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
