import React from "react";
import { Container, Card, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Members() {
  return (
    <Container>
      <Card body>
        <div className="text-center mt-3 mb-4">
          <h2>Club Members</h2>
        </div>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Class</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>President</td>
              <td>Loriel</td>
              <td>Tura</td>
              <td>@loriel</td>
            </tr>
            <tr>
              <td>Sakristan</td>
              <td>Noel</td>
              <td>Allawan</td>
              <td>@noel</td>
            </tr>
            <tr>
              <td>Web Dev</td>
              <td colSpan="2">Job Villanca</td>
              <td>@drwxrwxrwx</td>
            </tr>
          </tbody>
        </Table>
      </Card>
    </Container>
  );
}

export default Members;
