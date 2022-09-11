import React from "react";
import "./OptionList.scss";
import Arrow_down from "../../img/Arrow_down.svg";

const OptionList = ({ onOption, ActiveOption, Data = [], isHaveDescription = false }) => {
  return (
    <div className="select-option" tabIndex={100}>
      <p className="option-name">
        {isHaveDescription ? ActiveOption.description : ActiveOption.name}
      </p>
      <img className="arrow" src={Arrow_down} alt="↓" />

      <div className={`option`}>
        {Data.map((option, i) => {
          const isActiveOption = option.id === ActiveOption.id;
          return (
            <div
              key={i}
              tabIndex={101}
              onClick={() => onOption(option)}
              className={`option-item ${isActiveOption ? "option-item-active" : ""}`}
            >
              {option.description ? option.description : option.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OptionList;
