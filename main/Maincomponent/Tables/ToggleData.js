import React from "react";

const ToggleData = ({
  filtersubfac,
  handleFit,
  // handleRetrieve,
  val,
  getdata,
  // isSelectOptionOpen,
  // data,
}) => {
  return (
    <div>
      {/* {isSelectOptionOpen && ( */}
      <select
        name="overall"
        style={{ width: "150px", position: "relative", top: "10px" }}
        onChange={getdata}
        value={val}
        onInput={handleFit}
      >
        <option value="default">subject</option>
        {filtersubfac &&
          filtersubfac.map((d) => (
            //   <option key={d.s_no} disabled={d.disabled}>{d.sub_title}</option>
            <option key={d.s_no} disabled={d.disabled}>
              {d.sub_title}
            </option>
          ))}
      </select>
      {/* )} */}
      {/* {!isSelectOptionOpen && (
        <div>
          <p style={{ position: "relative", top: "20px", left: "30px" }}>
            {val}
          </p>
          <button
            style={{ position: "relative", left: "40px" }}
            onClick={handleRetrieve}
          >
            edit
          </button>
        </div>
      )} */}
    </div>
  );
};

export default ToggleData;
