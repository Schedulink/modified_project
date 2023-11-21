import React from "react";
import { AgGridReact } from "ag-grid-react";

const FacultySubjectTable = ({
  subfac_Ref,
  overallcolumns,
  subfac,
  defaultColDef,
  getRowData,
}) => {
  return (
    <div>
      <h3 style={{ textAlign: 'center', fontSize: '1.5em', color: '#333', marginBottom: '10px' ,padding:'1.5em'}}>OVERALL TABLE</h3>
      <div className="ag-theme-alpine" style={{ height: "200px",width:"1120px",}}>
        <AgGridReact
          ref={subfac_Ref}
          columnDefs={overallcolumns}
          rowData={subfac}
          defaultColDef={defaultColDef}
          rowSelection="single"
        ></AgGridReact>
        <button className="btn-facsub" onClick={getRowData}>
          STORE
        </button>
      </div>
    </div>
  );
};

export default FacultySubjectTable;
