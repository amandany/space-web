import React, { useContext, useState } from "react";
import "./VpsCard.scss";
import ssd from "../../../img/ssd.svg";
import OptionList from "../../OptionList/OptionList";
import icon_plus from "../../../img/icon_plus.svg";
import Context from "../../../context/Context";

const VpsCard = ({ plan }) => {
  const { Data } = useContext(Context);

  const [DistributionActiveOption, setDistributionActiveOption] = useState(
    Data.selectOs[0],
  );

  const [SystemActiveOption, setSystemActiveOption] = useState(Data.selectPanel[0]);
  const [FilteredSystem, setFilteredSystem] = useState([]);

  const onDistributionActiveOption = (selectedOption) => {
    console.log("onDistributionActiveOption", selectedOption);
    if (!selectedOption.panel_type.includes(SystemActiveOption.name)) {
      setSystemActiveOption(Data.selectPanel[0]);
    }

    const FilteredSystem = Data.selectPanel.filter((el) =>
      selectedOption.panel_type.includes(el.name),
    );
    setFilteredSystem(FilteredSystem)

    setDistributionActiveOption(selectedOption);
  };

  const onSystemActiveOption = (selectedOption) => {
    console.log("onSystemActiveOption", selectedOption);
    setSystemActiveOption(selectedOption);
  };

  return (
    <div className="VpsCard">
      <section className="proccessor">
        <img src={ssd} alt="ssd" />
        <p>{plan.name}</p>
      </section>
      <section className="price">
        <p>{plan.price_per_month} ₽/мес.</p>
      </section>
      <section className="specifications">
        <div className="specifications-option">
          <p>CPU</p>
          <p>RAM</p>
          <p>DISK</p>
        </div>
        <div className="specifications-characteristic">
          <p>{plan.cpu_cores} x 2,8 ГГц</p>
          <p>{plan.ram} МБ</p>
          <p>
            {plan.volume_disk} {plan.disk_type}
          </p>
        </div>
      </section>
      <section className="distribution">
        <p className="distribution-header">Дистрибутив</p>
        <OptionList
          ActiveOption={DistributionActiveOption}
          onOption={onDistributionActiveOption}
          Data={Data.selectOs}
          isHaveDescription={true}
        />
      </section>
      <section className="system">
        <p className="system-header">Программное обеспечение</p>
        <OptionList
          ActiveOption={SystemActiveOption}
          onOption={onSystemActiveOption}
          Data={FilteredSystem.length > 0 ? FilteredSystem : Data.selectPanel}
          isHaveDescription={true}
        />
      </section>
      <section className="data-center">
        <p className="name">Дата-центр</p>
        <div className="city">
          <p className="spb">Санкт-Петербург</p>
          <p className="moscow">Москва</p>
        </div>
      </section>
      <section className="advantages">
        <img className="plus-img" src={icon_plus} alt="+" />
        <div className="text">
          <p>2 IP-адреса (lPv4 + lPv6)</p>
          <p>3 резервных копии</p>
        </div>
      </section>
      <button className="btn-order">Заказать</button>
    </div>
  );
};

export default VpsCard;
