import React from "react";
import { Component } from "react";

export default class Women extends Component {
  state = {
    pageTitle: "Women",
    ProductList: [
      {
        title: "Blue Denim Jacket",
        image: "/Image/Women/Blue Denim Jacket.jpg",
        price: "1200",
      },
      {
        title: "Coat",
        image: "Image/Women/Coat.jpg",
        price: "1500",
      },
      {
        title: "Designer Top",
        image: "Image/Women/Designer Top.jpg",
        price: "1200",
      },
      {
        title: "Jeans Blue",
        image: "Image/Women/Jeans Blue.jpg",
        price: "800",
      },
      {
        title: "Jeans",
        image: "Image/Women/Jeans.jpg",
        price: "700",
      },
      {
        title: "Red Designer Top",
        image: "Image/Women/Red Designer Top.jpg",
        price: "500",
      },
      {
        title: "Red Top",
        image: "Image/Women/Red Top.jpg",
        price: "900",
      },
      {
        title: "White Top",
        image: "Image/Women/White Top.jpg",
        price: "600",
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
