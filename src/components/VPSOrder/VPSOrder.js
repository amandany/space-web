import React, { useEffect, useState } from "react";
import { getData } from "../../api/api";
import Context from "../../context/Context";
import VpsOption from "./VpsOption/VpsOption";
import "./VPSOrder.scss";
import VpsPlan from "./VpsPlan/VpsPlan";
const VPSOrder = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [Data, setData] = useState(null);

  useEffect(() => {
    getData().then((res) => {
      setIsLoading(false);
      setData(res.result);
      console.log(res.result);
    });

    return () => {};
  }, []);

  if (!isLoading && !Data) return <h1>Ошибка с сервером</h1>;

  if (isLoading || !Data) return <div>Загрузка...</div>;
  const contx = { Data };
  return (
    <Context.Provider value={contx}>
      <div className="VPS-order">
        <div className="header">
          <p className="header-account">Аккаунт</p>
          <h1 className="header-order-vps">Заказать vps</h1>
        </div>

        <VpsOption Data={Data.categories} />

        <VpsPlan />
      </div>
    </Context.Provider>
  );
};

export default VPSOrder;
