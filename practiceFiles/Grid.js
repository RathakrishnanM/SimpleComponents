import React, { useState } from "react";

function Grid() {
  const [rows, setRows] = useState([
    { id: 1, name: "John" },
    { id: 2, name: "Michale" },
    { id: 3, name: "Robert" },
  ]);

  const [newRowName, setNewRowName] = useState("");

  const handleNameChange = (e) => {
    setNewRowName(e.target.value);
  };

  const addRow = () => {
    const newId = rows.length + 1;
    const newName = newRowName.trim() !== "" ? newRowName : `Row ${newId}`;
    const newNameWithDuplicateCheck = rows.some((row) => row.name === newName)
      ? `${newName} Duplicate`
      : newName;
    setRows([...rows, { id: newId, name: newNameWithDuplicateCheck }]);
    setNewRowName("");
  };

  return (
    <div>
      <h2>Grid</h2>
      <div>
        <input
          type="text"
          value={newRowName}
          onChange={handleNameChange}
          placeholder="Enter name for new row"
        />
        <button onClick={addRow}>Add Row</button>
      </div>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Grid;
