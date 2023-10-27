import React from "react";
import { Component } from "react";

export default class Men extends Component {
  state = {
    pageTitle: "Men",
    ProductList: [
      {
        title: "Black Round T-shirt",
        image: "/Image/Men/black round neck t-shirt.jpg",
        price: "300",
      },
      {
        title: "Polo T-shirt",
        image: "Image/Men/Polo 2 piece multi colour t-shirt.jpg",
        price: "600",
      },
      {
        title: "Polo T-shirt",
        image: "Image/Men/Polo 4 piece multi colour t-shirt.jpg",
        price: "1200",
      },
      {
        title: "Red Round T-shirt",
        image: "Image/Men/Red round neck t-shirt.jpg",
        price: "280",
      },
      {
        title: "Multi Color Round T-shirt",
        image: "Image/Men/Round neck multi-color t-shirt.jpg",
        price: "700",
      },
      {
        title: "White Round T-shirt",
        image: "Image/Men/White round neck t-shirt.jpg",
        price: "275",
      },
      {
        title: "White T-shirt",
        image: "Image/Men/White t-shirt.jpg",
        price: "250",
      },
      {
        title: "White Designer T-shirt",
        image: "Image/Men/White with multi design.jpg",
        price: "500",
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        {this.state.ProductList.map((product) => (
          <div className="card">
            <div className="headingHeader">{product.title}</div>
            <div className="cardSub img-hover-zoom">
              <img
                src={product.image}
                alt={product.title}
                width="170"
                height="115"
                centered
              />
            </div>

            <div className="textCenter">Rs.{product.price}</div>
            <div className="textCenter">
              <button
                type="add to cart"
                className="btn btn-primary btnGeneral"
                onClick={this.onSubmit}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </React.Fragment>
    );
  }
}
