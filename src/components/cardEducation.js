import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";

const CardEd = props => {
  const { card } = props;
  const { Meta } = Card;
  return (
    <Card
      className="card"
      hoverable
         style={{ width: "20%", margin: "2%",heigh:'350px' }}
      cover={<img  style={{height:"50%"}} alt="example" src={card.image} />}
    >
      <Meta title={card.title} description='Pour voir le Video Appuez sur le bouton si dessous' />
      <div className="buttonscard" >
        <Link
          to={{
            pathname: `/home/edVideo/${card.title}`,
            url: card.url,
            title: card.title
          }}
        >
          <button
            style={{ marginTop: "5%", alignContent: "start" }}
            class="btn btn-outline-primary"
          >
            WATCH MOVIE
          </button>
        </Link>
        <span  class="glyphicon glyphicon-heart" style={{color:'red'}}></span>
      </div>
    </Card>
  );
};

export default CardEd;
