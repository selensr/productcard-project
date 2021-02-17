import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  ImageContainer,
  IconContainer,
  Title,
  Price,
  ShipmentStatus,
} from "./style";
import { HeartFill, Heart, Truck } from "../Icons";

const ProductCard = (props) => {
  const {
    onLike,
    isLiked,
    isFreeShipment,
    id,
    title,
    imageUrl,
    url,
    price,
    shipment,
    ...attr
  } = props;

  return (
    <Card {...attr}>
      <Link href={url}>
        <a>
          <ImageContainer>
            <Image src={imageUrl} alt="product" width={196} height={196} />
            <IconContainer onClick={onLike}>
              {isLiked ? (
                <HeartFill color="#f24141" width={28} height={28} />
              ) : (
                <Heart color="gray" width={28} height={28} />
              )}
            </IconContainer>
          </ImageContainer>
          <Title>
            <p>{title}</p>
          </Title>
          <Price>
            <p>{price}</p>
          </Price>
          <ShipmentStatus>
            {isFreeShipment && <Truck color="#45a133" width={28} height={28} />}
            <p>{shipment}</p>
          </ShipmentStatus>
        </a>
      </Link>
    </Card>
  );
};

ProductCard.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  url: PropTypes.string,
  price: PropTypes.string,
  shipment: PropTypes.string,
  isLiked: PropTypes.bool,
  isFreeShipment: PropTypes.bool,
  onLike: PropTypes.func,
};

ProductCard.defaultProps = {
  id: "0",
  title: "Product name",
  imageUrl:
    "https://mcdn01.gittigidiyor.net/65570/tn30/655708439_tn30_0.jpg?161340",
  url: "#",
  price: "0 TL",
  shipment: "",
  isLiked: false,
  isFreeShipment: false,
  onLike: () => {},
};

export default ProductCard;
