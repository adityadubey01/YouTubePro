import React from "react";

export const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div>
      <Comment key={index} data={comment} />
      <div className="pl-5 ml-5 border border-l-black">
        <CommentsList comments={comment.reply} />
      </div>
    </div>
  ));
};

const Comment = ({ data }) => {
  const { name, text, reply } = data;
  return (
    <div className="flex p-2 shadow-sm bg-gray-100 rounded-lg my-2">
      <img
        className="w-11 h-11"
        alt="User"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnF-wtqndIensQ2gIC-2KZPTJw_bTGZ50qNA&usqp=CAU"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
