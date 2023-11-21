import React, { useState } from "react";
import SubjectTable from "./Tables/SubjectTable";
import { useRef } from "react";
import FacultyTable from "./Tables/FacultyTable";
import FacultySubjectTable from "./Tables/FacultySubjectTable";
import Timetable from "./Tables/Timetable";
import Timedata from "./Tables/Timedata";
import Axios from "axios";
// import ApiRequest from './ApiRequest';

const Tables = ({ fac, firstsub, setFirstsub }) => {
  const [firstfac, setFirstfac] = useState([]);
  const [subfac, setSubfac] = useState([]);
  const [filtersubfac, setFiltersubfac] = useState([]);
  // const [facname, setFacname] = useState([]);

  const sub_Ref = useRef();
  const fac_Ref = useRef();
  const subfac_Ref = useRef();
  const table_Ref = useRef();

  //Timetable Data

  const TimetablecolumnDefs = [
    { headerName: "Days", field: "Days", maxWidth: 100, cellRenderer: null },
    { headerName: "Period 1", field: "8:30-9:20" },
    { headerName: "Period 2", field: "9:30-10-20" },
    { headerName: "Period 3", field: "10:30-11:20" },
    { headerName: "Period 4", field: "11:30-12:10" },
    { headerName: "Period 5", field: "1:10-2:00" },
    { headerName: "Period 6", field: "2:00-2:50" },
    { headerName: "Period 7", field: "3:00-3:50" },
    { headerName: "Period 8", field: "3:50-4:30" },
  ];

  const TimetablerowData = [
    { Days: "Monday" },
    { Days: "Tuesday" },
    { Days: "Wednesday" },
    { Days: "Thursday" },
    { Days: "Friday" },
  ];


  const [val, setVal] = useState("");
  const [cellValues, setCellValues] = useState({});
  const updateCellValue = (rowIndex, colField, value) => {
    setCellValues((prevCellValues) => ({
      ...prevCellValues,
      [`${rowIndex}-${colField}`]: value,
    }));
  };

  let Row_Index = 0;
  let Column_Name = "";
  let Row_Name = "";

  const TimetabledefaultColDef = {
    sortable: true,
    filter: true,
    flex: 1,
    // textAlign: "center",
    cellRenderer: Timedata,
    cellRendererParams: {
      filtersubfac,
      setFiltersubfac,
      subfac,
      val,
      setVal,
      cellValues,
      updateCellValue,
      table_Ref,
      Row_Index,
      Column_Name,
      Row_Name,
    },
  };

  // const API_SUBFAC = "http://localhost:3500/subfac";
  // const API_SUBFAC = "http://localhost:8000/ttgapp"

  const frameworkComponents = {
    Timedata: Timedata,
  };

  const onCellClicked = (params) => {
    Row_Index = params.node.rowIndex;
    Column_Name = params.colDef.headerName;

    Row_Name = params.data;
    console.log(
      "row_index:",
      Row_Index,
      "columnname:",
      Column_Name,
      "row_name:",
      Row_Name
    );
  };

  //Faculty-Subject-Table Data

  const overallcolumns = [
    { headerName: "Subject Code", field: "sub_code" },
    { headerName: "Subject Title", field: "sub_title" },
    { headerName: "Faculty Name", field: "fac_name" },
    { headerName: "TCP", field: "tcp" },
  ];

  const getRowData = async () => {
    let rowData = [];
    subfac_Ref.current.api.forEachNode((node) =>
      // rowData.push(node.data)
      Axios({
        method: "post",
        url: "http://http://localhost:8000/api/subfac/",
        data: node.data,
      }).then((res) => console.log(res.data))
    );
    setFiltersubfac(rowData);
    console.log(filtersubfac);
  };

  //Faculty-Table Data

  const facultycolumns = [
    { headerName: "Faculty Name", field: "fac_name" },
    { headerName: "Subject Code", field: "sub_code" },
    { headerName: "Subject Title", field: "sub_title" },
    { headerName: "Department Name", field: "dept_name" },
    { headerName: "TCP", field: "tcp" },
  ];

  let sub_code = "";
  let title = "";
  let name = "";
  let ttcp = "";

  const handlesubfac = () => {
    const { api } = fac_Ref.current;
    const d = api.getSelectedRows();
    const s = d.values();
    for (const i of s) {
      name = i.fac_name;
      sub_code = i.sub_code;
      title = i.sub_title;
      ttcp = i.tcp;
    }

    const newobj = {
      s_no: subfac.length + 1,
      sub_code: sub_code,
      sub_title: title,
      fac_name: name,
      tcp: ttcp,
    };
    setSubfac([...subfac, newobj]);
    setFirstfac(null);

    const deletesubject = firstsub.filter((sub) => sub.sub_code !== sub_code);
    setFirstsub(deletesubject);
  };

  //Subject-Table Data

  const columnDefs = [
    { headerName: "Subject Code", field: "sub_code" },
    { headerName: "Subject Title", field: "sub_title" },
    { headerName: "Regulation", field: "req_year" },
    { headerName: "TCP", field: "tcp" },
  ];

  const defaultColDef = {
    sortable: true,
    filter: true,
    flex: 1,
  };

  let code = "";

  const Handlefaculty = () => {
    const { api } = sub_Ref.current;
    const d = api.getSelectedRows();
    const s = d.values();
    for (const i of s) {
      code = i.sub_code;
    }

    const data = fac.filter((d) => d.sub_code === code);
    setFirstfac(data);
  };
  return (
    <div>
      <SubjectTable
        sub_Ref={sub_Ref}
        firstsub={firstsub}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        handlefaculty={Handlefaculty}
      />
      <FacultyTable
        fac_Ref={fac_Ref}
        firstfac={firstfac}
        facultycolumns={facultycolumns}
        handlesubfac={handlesubfac}
        defaultColDef={defaultColDef}
      />
      <FacultySubjectTable
        subfac_Ref={subfac_Ref}
        overallcolumns={overallcolumns}
        subfac={subfac}
        defaultColDef={defaultColDef}
        getRowData={getRowData}
      />
      <Timetable
        table_Ref={table_Ref}
        TimetablecolumnDefs={TimetablecolumnDefs}
        TimetablerowData={TimetablerowData}
        TimetabledefaultColDef={TimetabledefaultColDef}
        onCellClicked={onCellClicked}
        frameworkComponents={frameworkComponents}
      />
    </div>
  );
};

export default Tables;
