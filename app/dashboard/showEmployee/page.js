// pages/dashboard/showEmployee.js
import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';


const ShowEmployee = () => {
  const [employees, setEmployees] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 10; // Number of items to display per page

  useEffect(() => {
    // Fetch employees data or use static data
    const data = [
      // Static data for demonstration
      { id: 1, name: 'John Doe', phone: '1234567890', username: 'johndoe', password: '********', address: '123 Main St, City' },
      // Add more employees here
      { id: 1, name: 'John Doe', phone: '1234567890', username: 'johndoe', password: '********', address: '123 Main St, City' },
      { id: 1, name: 'John Doe', phone: '1234567890', username: 'johndoe', password: '********', address: '123 Main St, City' },
      { id: 1, name: 'John Doe', phone: '1234567890', username: 'johndoe', password: '********', address: '123 Main St, City' },
    ];
    setEmployees(data);
    setTotalPages(Math.ceil(data.length / itemsPerPage));
  }, []);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="show-employee">
      <h1>Show Employee</h1>
      <table>
        <thead>
          <tr>
            <th>Sl/No</th>
            <th>Name</th>
            <th>Phone No</th>
            <th>Username</th>
            <th>Password</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {employees.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage).map((employee, index) => (
            <tr key={employee.id}>
              <td>{index + 1}</td>
              <td>{employee.name}</td>
              <td>{employee.phone}</td>
              <td>{employee.username}</td>
              <td>{employee.password}</td>
              <td>{employee.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ReactPaginate
        pageCount={totalPages}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        onPageChange={handlePageChange}
        previousLabel={"Previous"}
        nextLabel={"Next"}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default ShowEmployee;
