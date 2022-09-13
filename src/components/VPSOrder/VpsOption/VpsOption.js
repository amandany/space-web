import React, { useContext, useState } from "react";
import "./VpsOption.scss";
import OptionList from "../../OptionList/OptionList";
import Context from "../../../context/Context";

const VpsOption = ({ Data, setFilteredVpsPlan }) => {
  const { Data: Store } = useContext(Context);

  let ValidData = [...Data, { id: "0", name: "Все", prior: "0", slug: "all" }];
  ValidData.sort((a, b) => parseInt(a.prior) - parseInt(b.prior));
  const [ActiveOption, setActiveOption] = useState(ValidData.find((x) => x.id === "0"));

  const onOption = (selectedOption) => {
    if (selectedOption.slug !== "all") {
      const Filtered = Store.vpsPlans.filter((el) => el.category === selectedOption.slug);
      setFilteredVpsPlan(Filtered);
    } else {
      setFilteredVpsPlan([]);
    }
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
