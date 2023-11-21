import React from "react";

const RegulationOption = ({ handlereq_year }) => {
  return (
    <div>
      <label>
        <select
          name="requlation"
          onChange={(e) => handlereq_year(e.target.value)}
        >
          <option value="default">Regulation</option>
          <option value="2019">2019</option>
          <option value="2023">2023</option>
        </select>
      </label>
    </div>
  );
};

export default RegulationOption;
