import React, { useState } from "react";
import "./VpsOption.scss";
import OptionList from "../../OptionList/OptionList";

const VpsOption = ({ Data }) => {
  let ValidData = [...Data, { id: "0", name: "Все", prior: "0", slug: "all" }];
  ValidData.sort((a, b) => parseInt(a.prior) - parseInt(b.prior));
  const [ActiveOption, setActiveOption] = useState(ValidData.find((x) => x.id === "0"));

  const onOption = (selectedOption) => {
    console.log("onOption");
    setActiveOption(selectedOption);
  };

  return (
    <div className="vps-option">
      <p className="name">Категория</p>
      <OptionList ActiveOption={ActiveOption} onOption={onOption} Data={ValidData} />
    </div>
  );
};

export default VpsOption;
