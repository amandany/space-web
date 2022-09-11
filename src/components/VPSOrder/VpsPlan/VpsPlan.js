import React, { useContext } from "react";
import Context from "../../../context/Context";
import VpsCard from "../VpsCard/VpsCard";
import './VpsPlan.scss'
const VpsPlan = () => {
  const { Data } = useContext(Context);


  return (
    <div className="vps-plans">
      {Data.vpsPlans.map((plan, index) => {
        return <VpsCard key={index} plan={plan} />;
      })}
    </div>
  );
};

export default VpsPlan;
