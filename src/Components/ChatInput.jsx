import React, { useState } from "react";
import styled from "styled-components";
// import Picker from "emoji-picker-react";
import { IoMdSend } from "react-icons/io";
import { BsEmojiSmileFill } from "react-icons/bs";
import EmojiPicker from "emoji-picker-react";

const ChatInput = ({ handleSendMsg }) => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [msg, setMsg] = useState("");
  const handleEmojiPickerHideShow = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const Smile = () => {
    setShowEmojiPicker(false);
  };

  const handleEmojiClick = (event, emoji) => {
    let message = msg;
    message += event.emoji;
    setMsg(message);
  };
  const sendChat = (event) => {
    event.preventDefault();
    if (msg.length > 0) {
      handleSendMsg(msg);
      setMsg("");
    }
  };

  return (
    <Container>
      <div className="button-container">
        <div className="emoji">
          <BsEmojiSmileFill onClick={handleEmojiPickerHideShow} />
          {showEmojiPicker && (
            <EmojiPicker className="picker" onEmojiClick={handleEmojiClick} />
          )}
        </div>
      </div>

      <form
        className="input-container"
        onSubmit={(e) => {
          sendChat(e);
        }}
      >
        <input
          type="text"
          placeholder="type your message here"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          onClick={Smile}
        />
        <button type="submit" className="btn">
          <IoMdSend />
        </button>
      </form>
    </Container>
  );
};

export default ChatInput;

const Container = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 5% 95%;
  background-color: #080420;
  padding: 0 2rem;
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    padding: 0 1rem;
    gap: 1rem;
  }
  @media screen and (max-width: 680px) {
    padding: 0 1rem;
    gap: 1rem;
  }

  .button-container {
    display: flex;
    align-items: center;
    color: white;
    gap: 1rem;
    .emoji {
      position: relative;
      svg {
        font-size: 1.2rem;
        color: #ffff00c8;
      }
      @media screen and (min-width: 720px) and (max-width: 1080px) {
        svg {
        font-size: 1.2rem;

        color: #ffff00c8;
      }
    
      }
      @media screen and (max-width: 680px) {
        svg {
          font-size: 1rem;
          color: #ffff00c8;
          gap: 2rem;
          cursor: pointer;
        }

        //////////////////////////////////////////////////////////////////////////////////
        .EmojiPickerReact {
          max-height: 280px;
          font-size: 1px;
          top: -310px;
        }
      }
      /////////////////////////////////////////////////////////////////////
      .EmojiPickerReact {
        position: absolute;
        max-height: 350px;
        max-width: 200px;
        top: -360px;
        background-color: #080420;
        box-shadow: 0 5px 10px #9a86f3;
        border-color: #9a86f3;
      }
    }
  }

  .input-container {
    width: 100%;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    background-color: #ffffff34;
    input {
      width: 90%;
      height: 60%;
      background-color: transparent;
      color: white;
      border: none;
      padding-left: 1rem;
      font-size: 1.2rem;

      &::selection {
        background-color: #9a86f3;
      }
      &:focus {
        outline: none;
      }
      @media screen and (max-width: 680px) {
        font-size: 9px;
        width: 85%;
      }
    }
    @media screen and (max-width: 680px) {
      gap: 1rem;
    }
    button {
      padding: 0.3rem 2rem;
      border-radius: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #9a86f3;
      border: none;
      @media screen and (min-width: 720px) and (max-width: 1080px) {
        padding: 0.3rem 1rem;
        svg {
          font-size: 1rem;
        }
      }
      svg {
        font-size: 1rem;
        color: white;
      }
      @media screen and (max-width: 680px) {
        padding: 0rem 0.5rem;

        svg {
          font-size: 1rem;
        }
      }
    }
  }
`;
