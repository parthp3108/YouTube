import React from "react";

const CommentsContainer = () => {
  const commentsData = [
    {
      name: "Parth Pancholi",
      text: "commenting....",
      replies: [],
    },
    {
      name: "Parth Pancholi",
      text: "commenting....",
      replies: [
        {
          name: "Parth Pancholi",
          text: "commenting....",
          replies: [],
        },
        {
          name: "Parth Pancholi",
          text: "commenting....",
          replies: [],
        },
        {
          name: "Parth Pancholi",
          text: "commenting....",
          replies: [],
        },
      ],
    },
    {
      name: "Parth Pancholi",
      text: "commenting....",
      replies: [],
    },
    {
      name: "Parth Pancholi",
      text: "commenting....",
      replies: [],
    },
    {
      name: "Parth Pancholi",
      text: "commenting....",
      replies: [],
    },
  ];

  const Comment = ({ data }) => {
    const { name, text } = data;
    return (
      <div className="flex shadow-sm bg-slate-100 p-2 rounded-lg my-2">
        <img
          className="w-8 h-8"
          alt="user"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe7qKgRvChw4p7QLmLJ_Vw2PyM11C6ThI6oA&s"
        />
        <div className="px-3">
          <p className="font-semibold">{name}</p>
          <p>{text}</p>
        </div>
      </div>
    );
  };

  const CommentList = ({ comments }) => {
    return comments.map((comment, index) => (
      <Comment key={index} data={comment} />
    ));
  };

  return (
    <div className="m-5 p-2">
      <h1 className="text-3xl font-bold">Comments:</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
