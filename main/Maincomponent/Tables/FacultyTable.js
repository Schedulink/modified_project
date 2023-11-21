import React from "react";
import { AgGridReact } from "ag-grid-react";
import "./SelectOption.css";

const FacultyTable = ({
  fac_Ref,
  facultycolumns,
  firstfac,
  defaultColDef,
  handlesubfac,
}) => {
  return (
    <div>
      <h3 style={{ textAlign: 'center', fontSize: '1.5em', color: '#333', marginBottom: '10px',padding:'1.5em'}}>SELECT FACULTY</h3>
      <div className="ag-theme-alpine" style={{ height: "200px" }}>
        <AgGridReact
          ref={fac_Ref}
          columnDefs={facultycolumns}
          rowData={firstfac}
          defaultColDef={defaultColDef}
          rowSelection="single"
          // onSelectionChanged={handlesubfac}
          // onGridReady={onGridReady}
        ></AgGridReact>
      </div>
    </div>
  );
};

export default FacultyTable;
