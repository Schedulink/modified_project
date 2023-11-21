// import React, { useEffect } from "react";
// import { useState } from "react";
import ToggleData from "./ToggleData";

const Timedata = (props) => {
  const {
    // data,
    filtersubfac,
    setFiltersubfac,
    val,
    setVal,
    table_Ref,
    Row_Index,
    Column_Name,
    Row_Name,
    // cellValues,
    // updateCellValue,
    // subfac,
    // setTcpCount,
    // isSelectOptionOpen,
    // setIsSelectOptionOpen,
    // val,
    // setVal,
  } = props;
  // console.log(subfac)

  // let facname = "";

  // const [isSelectOptionOpen, setIsSelectOptionOpen] = useState(true);

  // const getdata = async () => {
  // console.log(Row_Index, Column_Name, Row_Name);
  table_Ref.current.api.forEachNode((params) => {
    // Access the values of each cell using params.data
    const AllrowIndex = params.rowIndex;
    const AllrowName = params.data.Days; // Assuming 'rowName' is a field in your row data
    // const Column_Name = params.column.colDef.field;

    // console.log(`Row Index: ${AllrowIndex}, Row Name: ${AllrowName}`);
  });
  // };

  const handleFit = (e) => {
    e.preventDefault();
    const selectedValue = e.target.value;
    // setVal(selectedValue);
    setVal(selectedValue);
    props.node.setDataValue(props.column, selectedValue);

    // console.log(val);

    // const { rowIndex, colField } = props.node;

    // updateCellValue(rowIndex, colField, selectedValue);

    const updatedOptions = filtersubfac.map((option) => {
      if (option.sub_title === selectedValue) {
        // console.log(selectedValue);
        const newCount = option.tcp - 1;
        return { ...option, tcp: newCount, disabled: newCount === 0 };
      }
      return option;
    });
    console.log(updatedOptions);
    setFiltersubfac(updatedOptions);

    // setTcpCount(updatedOptions);

    // setIsSelectOptionOpen(false);
    // console.log(isSelectOptionOpen);

    // const fac = subfac.filter((d) => d.sub_title === selectedValue);

    // fac.map((d) => (facname = d.fac_name));

    // console.log(facname);
  };

  // const handleRetrieve = () => {
  //   setIsSelectOptionOpen(!isSelectOptionOpen);
  // };

  return (
    <div>
      <ToggleData
        // data={data}
        filtersubfac={filtersubfac}
        handleFit={handleFit}
        // handleRetrieve={handleRetrieve}
        val={val}
        // getdata={getdata}
        // isSelectOptionOpen={isSelectOptionOpen}
        // setIsSelectOptionOpen={setIsSelectOptionOpen}
      />
    </div>
  );
};

export default Timedata;
