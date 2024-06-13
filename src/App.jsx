import React, { useState, useEffect } from "react";
import axios from "axios";
import EmployeeList from "./components/EmployeeList";
import EmployeeForm from "./components/EmployeeForm";
import "./App.css";

function App() {
  const [employees, setEmployees] = useState([]);
  const [nextId, setNextId] = useState(1000); // Start IDs for new employees at 1000

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/users");
      setEmployees(response.data.users);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  const addEmployee = (newEmployee) => {
    const employeeWithId = { ...newEmployee, id: nextId };
    setEmployees([...employees, employeeWithId]);
    setNextId(nextId + 1); // Increment the ID for the next new employee
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  };

  return (
    <div className="App">
      <div className="pane">
        <EmployeeList employees={employees} onDeleteEmployee={deleteEmployee} />
      </div>
      <div className="pane">
        <EmployeeForm onAddEmployee={addEmployee} />
      </div>
    </div>
  );
}

export default App;
