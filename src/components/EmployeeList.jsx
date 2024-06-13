import React from "react";

function EmployeeList({ employees, onDeleteEmployee }) {
  return (
    <div className="EmployeeList">
      <h2>Employees</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            {employee.firstName} {employee.lastName} - {employee.email}
            <button
              onClick={() => onDeleteEmployee(employee.id)}
              className="delete-btn"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;
