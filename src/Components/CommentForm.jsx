/* eslint-disable react/prop-types */
import { ReactComponent as SendIcon } from "../../assets/icons/send.svg";
import { ReactComponent as UploadIcon } from "../../assets/icons/upload.svg";

const CommentForm = ({
  textInput,
  handleFormSubmit,
  handleTextInputChange,
  handleImageChange,
  handleEnterKey,
  inputNameRef,
  inputMessageRef,
}) => {
  return (
    <>
      <div className="bg-slate-600 fixed bottom-0 z-10 h-28 w-full flex justify-start">
        <div className="w-28 flex items-center justify-center">
          <input
            id="avatar"
            className="w-32 hidden"
            type="file"
            accept="image/*"
            name="avatar"
            onChange={handleImageChange}
          />
          <label
            htmlFor="avatar"
            className="relative h-20 w-20 rounded-full cursor-pointer"
          >
            <img
              className="absolute object-cover h-20 w-20 rounded-full"
              src={textInput.avatar}
              alt="default avatar"
            ></img>
            <UploadIcon className="h-20 w-20 p-5 absolute rounded-full opacity-0 hover:opacity-75" />
          </label>
        </div>
        <div className="flex flex-col w-[calc(100%-10rem)]">
          <input
            className="w-2/6 rounded-md mt-2 mb-1 p-1 placeholder:text-slate-600 bg-slate-400 text-slate-900 focus:outline outline-slate-800 outline-2"
            name="name"
            placeholder="name"
            value={textInput.name}
            onChange={handleTextInputChange}
            onKeyDown={handleEnterKey}
            ref={inputNameRef}
          />
          <textarea
            className="rounded-md mt-1 mb-2 p-1 h-full resize-none scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-slate-800 placeholder:text-slate-600 bg-slate-400 text-slate-900 focus:outline outline-slate-800 outline-2"
            name="message"
            placeholder="messages..."
            value={textInput.message}
            onChange={handleTextInputChange}
            onKeyDown={handleEnterKey}
            ref={inputMessageRef}
          />
        </div>
        <div className="w-16 my-5 flex items-end justify-center">
          <SendIcon
            className="h-10 w-10 cursor-pointer hover:invert"
            onClick={handleFormSubmit}
          />
        </div>
      </div>
    </>
  );
};

export default CommentForm;
