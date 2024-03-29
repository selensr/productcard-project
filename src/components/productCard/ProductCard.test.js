import React, { useState } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ProductCard from "./ProductCard";

const data = {
  id: "733324",
  title: "Apple iPhone 11",
  imageUrl:
    "https://mcdn01.gittigidiyor.net/65570/tn30/655708439_tn30_0.jpg?161340",
  url: "https://www.gittigidiyor.com/apple-iphone-12_spp_849455",
  price: "7,500 TL",
  shipment: "Ücretsiz Kargo",
};

test("should render title", () => {
  render(<ProductCard {...data} />);
  expect(screen.getByText("Apple iPhone 11")).toBeInTheDocument();
});

test("should render image", () => {
  render(<ProductCard {...data} />);
  expect(screen.getByAltText("product")).toBeInTheDocument();
});

test("should render link with url", () => {
  const { container } = render(<ProductCard {...data} />);
  expect(container.querySelector("a")).toHaveAttribute(
    "href",
    expect.stringContaining(
      "https://www.gittigidiyor.com/apple-iphone-12_spp_849455"
    )
  );
});

test("should render price", () => {
  render(<ProductCard {...data} />);
  expect(screen.getByText("7,500 TL")).toBeInTheDocument();
});

test("should render shipment", () => {
  render(<ProductCard {...data} />);
  expect(screen.getByText("Ücretsiz Kargo")).toBeInTheDocument();
});

test("should like product on click event", () => {
  const ProductCardComponent = () => {
    const [likedProducts, setLikedProducts] = useState([]);
    const { shipment, id } = data;
    const isLiked = !!likedProducts.find((el) => el === id);
    const isFreeShipment = shipment.indexOf("Ücretsiz") > -1;

    const onLike = (e) => {
      e.preventDefault();
      if (isLiked) {
        const newProductArr = likedProducts.filter((el) => el !== id);
        setLikedProducts(newProductArr);
      } else {
        setLikedProducts([...likedProducts, id]);
      }
    };
    return (
      <ProductCard
        {...data}
        onLike={onLike}
        isLiked={isLiked}
        isFreeShipment={isFreeShipment}
      />
    );
  };
  const { container } = render(<ProductCardComponent />);
  fireEvent.click(container.querySelector("span"));
  expect(container.querySelector("svg")).toHaveAttribute(
    "color",
    expect.stringContaining("f24141")
  );
});

test("should dislike product on click event", () => {
  const ProductCardComponent = () => {
    const [likedProducts, setLikedProducts] = useState([]);
    const { shipment, id } = data;
    const isLiked = !!likedProducts.find((el) => el === id);
    const isFreeShipment = shipment.indexOf("Ücretsiz") > -1;

    const onLike = (e) => {
      e.preventDefault();
      if (isLiked) {
        const newProductArr = likedProducts.filter((el) => el !== id);
        setLikedProducts(newProductArr);
      } else {
        setLikedProducts([...likedProducts, id]);
      }
    };
    return (
      <ProductCard
        {...data}
        onLike={onLike}
        isLiked={isLiked}
        isFreeShipment={isFreeShipment}
      />
    );
  };
  const { container } = render(<ProductCardComponent />);
  fireEvent.click(container.querySelector("span"));
  fireEvent.click(container.querySelector("span"));

  expect(container.querySelector("svg")).toHaveAttribute(
    "color",
    expect.stringContaining("gray")
  );
});
