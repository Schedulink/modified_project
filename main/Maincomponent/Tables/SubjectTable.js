import React from "react";
import { AgGridReact } from "ag-grid-react";

const SubjectTable = ({
  sub_Ref,
  columnDefs,
  firstsub,
  defaultColDef,
  handlefaculty,
}) => {
  return (
    <div>
      <h3 style={{ textAlign: 'center', fontSize: '1.5em', color: '#333', marginBottom: '10px' ,padding:'1.5em'}}>SUBJECT TABLE</h3>
      <div className="ag-theme-alpine" style={{ height: "200px"}}>
        <AgGridReact
          ref={sub_Ref}
          columnDefs={columnDefs}
          rowData={firstsub}
          defaultColDef={defaultColDef}
          rowSelection="single"
        ></AgGridReact>
      </div>
    </div>
  );
};

export default SubjectTable;
