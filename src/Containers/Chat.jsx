/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import MessageBoard from "../Components/MessageBoard";
import CommentForm from "../Components/CommentForm";
import defaultAvatar from "../../assets/img/default-avatar.png";

const Chat = ({ setPage }) => {
  const [textInput, setTextInput] = useState({
    name: "",
    message: "",
    avatar: defaultAvatar,
  });
  const [comments, setComments] = useState(
    /** @type {{name: string, message: string, timestamp}[]} */ ([])
  );

  const handleTextInputChange = ({ target: { name, value } }) => {
    setTextInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (event) => {
    setComments((prev) => [
      ...prev,
      {
        ...textInput,
        name: textInput.name ? textInput.name : "匿名",
        timestamp: new Date(),
        id: uuidv4(),
      },
    ]);
    setTextInput((prev) => ({
      ...prev,
      name: "",
      message: "",
      avatar: defaultAvatar,
    }));
    event.preventDefault();
  };

  const handleImageChange = ({ target: { files } }) => {
    if (files && files[0]) {
      const newAvatar = files[0];
      setTextInput((prev) => ({
        ...prev,
        avatar: URL.createObjectURL(newAvatar),
      }));
    }
  };

  useEffect(() => {
    setPage("Chat");
  }, []);

  return (
    <>
      <div className="mb-32">
        <MessageBoard comments={comments} />
        <CommentForm
          textInput={textInput}
          handleTextInputChange={handleTextInputChange}
          handleFormSubmit={handleFormSubmit}
          handleImageChange={handleImageChange}
        />
      </div>
    </>
  );
};

export default Chat;
