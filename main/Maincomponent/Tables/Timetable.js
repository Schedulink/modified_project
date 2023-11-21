import React from "react";
import { AgGridReact } from "ag-grid-react";

const Timetable = ({
  TimetablecolumnDefs,
  TimetablerowData,
  TimetabledefaultColDef,
  onCellClicked,
  frameworkComponents,
  table_Ref,
}) => {
  return (
    <div>
      <h3 style={{ textAlign: 'center', fontSize: '1.5em', color: '#333', marginBottom: '10px',padding:'1.5em'}}>TIMETABLE</h3>
      <div className="ag-theme-alpine" style={{ height: "500px" }}>
        <AgGridReact
          ref={table_Ref}
          columnDefs={TimetablecolumnDefs}
          rowData={TimetablerowData}
          defaultColDef={TimetabledefaultColDef}
          frameworkComponents={frameworkComponents}
          // rowSelection='single'
          // enableFillHandle={enableFillHandle}
          rowHeight="150"
          onCellClicked={onCellClicked}
          // onGridReady={onGridReady}
        ></AgGridReact>
        {/* <button className='btn' onClick={getRowData}>store details</button> */}
      </div>
    </div>
  );
};

export default Timetable;
