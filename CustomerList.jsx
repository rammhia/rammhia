import React, { Component } from "react";
//import "./index.css";
export default class CustomerList extends Component {
  state = {
    pageTitle: "Customers",
    customersCount: 5,
    customers: [
      {
        id: 1,
        Name: "Rishi",
        Phone: "123-321",
        Address: "Patna",
        //Here using nested concept.
        City: { Pin: "800020", Code: "1" },
        //Here I add photo from picsum website
        Photo: "https://picsum.photos/id/1020/60",
      },
      {
        id: 2,
        Name: "Pihu",
        Phone: null,
        Address: "Gaya",
        City: { Pin: "823001", Code: "2" },
        Photo: "https://picsum.photos/id/1050/60",
      },
      {
        id: 3,
        Name: "Gauri",
        Phone: "432-123",
        Address: "Gaya",
        City: { Pin: "823001", Code: "3" },
        Photo: "https://picsum.photos/id/1040/60",
      },
      {
        id: 4,
        Name: "Aditi",
        Phone: "555-111",
        Address: "Gaya",
        City: { Pin: "823001", Code: "4" },
        Photo: "https://picsum.photos/id/1035/60",
      },
      {
        id: 5,
        Name: "Ananya",
        Phone: null,
        Address: "Gaya",
        City: { Pin: "823001", Code: "5" },
        Photo: "https://picsum.photos/id/1045/60",
      },
    ],
  };

  customersNameStyle = (custName) => {
    if (custName.startsWith("A"))
      return "green-highlight"; //{ backgroundColor: "green" };
    else if (custName.startsWith("R"))
      return "blue-highlight"; //{ backgroundColor: "blue" };
    else return "yellow-highlight"; //{ backgroundColor: "yellow" };
  };
  render() {
    return (
      <React.Fragment>
        <h4 className="border-bottom m-1 p-1">
          {this.state.pageTitle}
          <span className="badge bg-secondary m-2">
            {this.state.customersCount}
          </span>
          <button className="btn btn-info" onClick={this.onRefreshClick}>
            Refresh
          </button>
        </h4>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Pin</th>
              <th>Code</th>
            </tr>
          </thead>
          <tbody>{this.getCustomersTableData()}</tbody>
        </table>
      </React.Fragment>
    );
  }
  //When click on refresh then this function works
  onRefreshClick = () => {
    //console.log("Refresh Clicked");
    if (this.state.customersCount === 5) {
      this.setState({ customersCount: 7 });
    } else this.setState({ customersCount: 5 });
    //return 5;
  };

  getPhoneNumber = (Phone) => {
    if (Phone) return Phone;
    else {
      return (
        <div className="bg-warning p-2 text-center"> No. not available </div>
      );
    }
  };

  getCustomersTableData = () => {
    return this.state.customers.map((cust, index) => {
      return (
        <tr key={cust.id}>
          <td>{cust.id}</td>
          <td>
            <img src={cust.Photo} alt="customers" />
            <div
              className="btn btn-sm btn-secondary"
              onClick={() => {
                this.onChangePicClick(cust, index);
              }}
            >
              Change Picture
            </div>
          </td>
          <td
            //style={
            className={
              this.customersNameStyle(cust.Name)
              //{
              //backgroundColor: cust.Name.startsWith("A") ? "blue" : "red",
              //}
            }
          >
            {cust.Name}
          </td>
          <td>{this.getPhoneNumber(cust.Phone)}</td>
          <td>{cust.Address}</td>
          <td>{cust.City.Pin}</td>
          <td>{cust.City.Code}</td>
        </tr>
      );
    });
  };
  onChangePicClick = (cust, index) => {
    //console.log(cust);
    //console.log(index);
    var custArray = this.state.customers;
    custArray[index].Photo = "https://picsum.photos/id/1010/60";
    this.setState({ customers: custArray });
  };
}
