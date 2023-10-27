import React from "react";
import { Component } from "react";

export default class Electronic extends Component {
  state = {
    pageTitle: "Electronic",
    ProductList: [
      {
        title: "Headphone",
        image: "/Image/Electronic/Headphone.jpg",
        price: "1300",
      },
      {
        title: "Joy Stick",
        image: "Image/Electronic/Joy Stick.jpg",
        price: "1500",
      },
      {
        title: "Laptop",
        image: "Image/Electronic/Laptop.jpg",
        price: "65000",
      },
      {
        title: "Mac PC",
        image: "Image/Electronic/Mac PC.jpg",
        price: "97000",
      },
      {
        title: "Mobile",
        image: "Image/Electronic/Mobile.jpg",
        price: "35000",
      },
      {
        title: "Tab",
        image: "Image/Electronic/Tab.jpg",
        price: "16000",
      },
      {
        title: "VR",
        image: "Image/Electronic/VR.jpg",
        price: "2000",
      },
      {
        title: "Watch",
        image: "Image/Electronic/Watch.jpg",
        price: "1800",
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
