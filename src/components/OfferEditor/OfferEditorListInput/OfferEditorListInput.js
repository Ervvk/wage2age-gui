import React, { useState, useEffect } from "react";
import { Button, Input, message } from "antd";
import { AiOutlineDelete } from "react-icons/ai";

import "./OfferEditorListInput.less";

const OfferEditorListInput = ({ title, listType, setData }) => {
  const [listData, setListData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddBtn = () => {
    if (inputValue.length < 3) {
      message.error("Wartość musi mieć przynajmniej 3 znaki");
      return;
    }
    setListData((prev) =>
      prev.length > 4 ? prev : [...prev, { value: inputValue, type: listType }]
    );
    resetInputField();
  };

  const handleDeleteBtn = (idxToDelete) => {
    setListData((prev) => prev.filter((el, idx) => idx != idxToDelete));
  };

  const handleUserInput = (e) => {
    setInputValue(e.target.value);
  };

  const resetInputField = () => {
    setInputValue("");
  };

  useEffect(() => {
    setData(listData, listType);
  }, [listData]);

  return (
    <div className="editor-list-input">
      <div className="editor-list-input-title">
        {" "}
        <span>{title}</span>
      </div>
      {listData.length > 0 && (
        <div className="editor-list-input-elements">
          <ul>
            {listData.map((el, idx) => (
              <li key={idx}>
                {el.value}
                <Button
                  onClick={() => handleDeleteBtn(idx)}
                  icon={<AiOutlineDelete />}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="editor-list-input-wrapper">
        <Input
          value={inputValue}
          onChange={handleUserInput}
          placeholder="Podaj wartość"
        ></Input>
        <Button onClick={handleAddBtn}> Dodaj</Button>
      </div>
    </div>
  );
};

export default OfferEditorListInput;
