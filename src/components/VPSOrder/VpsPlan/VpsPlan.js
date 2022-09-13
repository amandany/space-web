import React from "react";
import VpsCard from "../VpsCard/VpsCard";
import './VpsPlan.scss'
const VpsPlan = ({Data}) => {

  return (
    <div className="vps-plans">
      {Data.map((plan, index) => {
        return <VpsCard key={index} plan={plan} />;
      })}
    </div>
  );
};

export default VpsPlan;
