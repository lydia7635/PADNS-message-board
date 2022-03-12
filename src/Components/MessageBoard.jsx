/* eslint-disable react/prop-types */
import { Fragment } from "react";
import moment from "moment";

const multipleLines = (text) =>
  text.split("\n").map((e, index) => (
    <Fragment key={index}>
      {e}
      <br />
    </Fragment>
  ));

const MessageBoard = ({ comments }) => {
  return (
    <>
      <div className="pt-2 flex flex-col col-auto items-center">
        {comments.map((comment) => (
          <div
            key={`${comment.id}`}
            className="bg-zinc-900 m-2 rounded-lg p-2 w-4/5 flex"
          >
            <div className="w-24 flex flex-col justify-center whitespace-nowrap items-center mr-2">
              <img
                className="object-cover h-16 w-16 rounded-full"
                src={comment.avatar}
                alt="default avatar"
              ></img>
              <div className="text-center align-middle mt-1 w-full overflow-hidden text-ellipsis">
                {comment.name}
              </div>
            </div>
            <div className="relative w-full p-1">
              <div className="p-1 mb-8">{multipleLines(comment.message)}</div>
              <div className="absolute right-0 bottom-0 h-8 text-right pr-2">
                {moment(comment.timestamp).format("YYYY/MM/DD HH:mm:ss")}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MessageBoard;
