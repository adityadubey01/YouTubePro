import React from "react";
import Comment from "./Comment";
import { CommentsList } from "./Comment";

const commentsData = [
  {
    id: "1",
    name: "Aditya Dubey",
    text: "This is my comment...Please read, understand and then like",
    reply: [],
  },
  {
    id: "2",
    name: "Aditya Dubey",
    text: "This is my comment...Please read, understand and then like",
    reply: [
      {
        id: "3",
        name: "Aditya Dubey",
        text: "This is my comment...Please read, understand and then like",
        reply: [],
      },
      {
        id: "4",
        name: "Aditya Dubey",
        text: "This is my comment...Please read, understand and then like",
        reply: [
          {
            id: "5",
            name: "Aditya Dubey",
            text: "This is my comment...Please read, understand and then like",
            reply: [
              {
                id: "6",
                name: "Aditya Dubey",
                text: "This is my comment...Please read, understand and then like",
                reply: [
                  {
                    id: "7",
                    name: "Aditya Dubey",
                    text: "This is my comment...Please read, understand and then like",
                    reply: [],
                  },
                  {
                    id: "8",
                    name: "Aditya Dubey",
                    text: "This is my comment...Please read, understand and then like",
                    reply: [
                      {
                        id: "9",
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
            id: "10",
            name: "Aditya Dubey",
            text: "This is my comment...Please read, understand and then like",
            reply: [],
          },
        ],
      },
    ],
  },
  {
    id: "11",
    name: "Aditya Dubey",
    text: "This is my comment...Please read, understand and then like",
    reply: [],
  },
  {
    id: "12",
    name: "Aditya Dubey",
    text: "This is my comment...Please read, understand and then like",
    reply: [
      {
        id: "13",
        name: "Aditya Dubey",
        text: "This is my comment...Please read, understand and then like",
        reply: [],
      },
      {
        id: "14",
        name: "Aditya Dubey",
        text: "This is my comment...Please read, understand and then like",
        reply: [],
      },
    ],
  },
  {
    id: "15",
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
