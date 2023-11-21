import React from "react";

const SemesterOption = ({ handlesemester }) => {
  return (
    <div>
      <label>
        <select
          name="semester"
          onChange={(e) => handlesemester(e.target.value)}
        >
          <option value="default">Session</option>
          <option value="odd">odd</option>
          <option value="even">even</option>
        </select>
      </label>
    </div>
  );
};

export default SemesterOption;
