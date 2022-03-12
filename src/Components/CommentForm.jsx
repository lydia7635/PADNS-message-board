/* eslint-disable react/prop-types */
import { ReactComponent as SendImg } from "../../assets/icons/send.svg";

const CommentForm = ({
  textInput,
  handleFormSubmit,
  handleTextInputChange,
  handleImageChange,
}) => {
  return (
    <>
      <div className="bg-slate-600 fixed bottom-0 z-10 h-28 w-full flex justify-start">
        <input
          className="w-32"
          type="file"
          name="avatar"
          onChange={handleImageChange}
        />
        <div className="flex flex-col w-[calc(100%-10rem)]">
          <input
            className="w-2/6 placeholder:text-blue-600 bg-slate-400 rounded-2xl mt-2 mb-1 p-1 text-black focus:outline outline-indigo-500 outline-2"
            name="name"
            placeholder="name"
            value={textInput.name}
            onChange={handleTextInputChange}
          />
          <textarea
            className="placeholder:text-blue-600 bg-slate-400 rounded-2xl mt-1 mb-2 p-1 h-full text-black focus:outline outline-indigo-500 outline-2"
            name="message"
            placeholder="messages..."
            value={textInput.message}
            onChange={handleTextInputChange}
          />
        </div>
        <button className="w-16 my-5 flex items-end justify-center">
          <SendImg className="h-10 w-10" onClick={handleFormSubmit} />
        </button>
      </div>
    </>
  );
};

export default CommentForm;
