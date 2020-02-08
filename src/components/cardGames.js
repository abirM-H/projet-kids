import React from "react";
import { Card } from "antd";

const Cardgame = props => {
  const { card } = props;
  const { Meta } = Card;

  return (
    <Card
      class="d-inline p-2 bg-primary text-white"
      hoverable
      style={{ width: "20%", margin: "2%",heigh:'350px' }}
      cover={<img style={{heigh:"100%"}} alt="example" src={card.image} />}
    >
      <Meta
        title={card.title}
        style={{color:'black'}}
        description="Pour sur la manette pour Jouer "
      />
      <a href={card.url}>
        <img
          src="https://image.flaticon.com/icons/png/512/37/37693.png"
          alt="Disponible sur Google Play"
          // data-lazy-src="https://app-enfant.fr/wp-content/themes/app-enfant/images/btn-googleplay.png"
          style={{ width: "50%", alignContent: "end" }}
          data-was-processed="true"
        />
      </a>
    </Card>
  );
};

export default Cardgame;
