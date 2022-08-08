import React, { useState, useRef } from "react";
import "./OfferEditorListInput.less";
import { Button, Input } from "antd";
import { AiOutlineDelete } from "react-icons/ai";

const OfferEditorListInput = () => {
  const inputRef = useRef(null);
  const title = "Test Element";
  const [listData, setListData] = useState(["test", "test2", "test3"]);

  const handleAddBtn = () => {
    setListData((prev) =>
      prev.length > 4 ? prev : [...prev, inputRef.current.input.value]
    );
  };

  const handleDeleteBtn = (idxToDelete) => {
    setListData((prev) => prev.filter((el, idx) => idx != idxToDelete));
  };

  return (
    <div className="editor-list-input">
      <span>{title}</span>
      <div className="editor-list-input-wrapper">
        <Input ref={inputRef} placeholder="Podaj wartość"></Input>
        <Button type="primary" onClick={handleAddBtn}>
          {" "}
          Dodaj
        </Button>
      </div>
      <div className="editor-list-input-elements">
        <ul>
          {listData.map((el, idx) => (
            <li key={idx}>
              {el}
              <Button
                onClick={() => handleDeleteBtn(idx)}
                icon={<AiOutlineDelete />}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OfferEditorListInput;
