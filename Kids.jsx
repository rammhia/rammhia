import React from "react";
import { Component } from "react";

export default class Kids extends Component {
  state = {
    pageTitle: "Kids",
    ProductList: [
      {
        title: "Frock in White",
        image: "/Image/Kids/Frock in White.jpg",
        price: "1100",
      },
      {
        title: "Frock White",
        image: "Image/Kids/Frock White.jpg",
        price: "900",
      },
      {
        title: "Frock",
        image: "Image/Kids/Frock.jpg",
        price: "1000",
      },
      {
        title: "Kid's Frock",
        image: "Image/Kids/Kid's Frock .jpg",
        price: "950",
      },
      {
        title: "Light Frock",
        image: "Image/Kids/Light Frock.jpg",
        price: "1150",
      },
      {
        title: "Long Frock",
        image: "Image/Kids/Long Frock.jpg",
        price: "800",
      },
      {
        title: "Dress",
        image: "Image/Kids/Dress.jpg",
        price: "900",
      },
      {
        title: "Yellow Dress",
        image: "Image/Kids/Yellow Dress.jpg",
        price: "1600",
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
