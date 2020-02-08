import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";

const Cardbook = props => {
  const { card } = props;
  const { Meta } = Card;
  console.log(card._id);
  return (
    <Card
      className="card"
      hoverable
         style={{ width: "20%", margin: "2%",heigh:'350px' }}
      cover={<img alt="example" src={card.image} />}
    >
      <Meta title={card.title} description='To read that book Press the button' />
      <div className="buttonscard" >
        <Link
          to={{
            pathname: `/home/listen/${card.title}`,
            url: card.url,
            title: card.title
          }}
        >
          <button
            style={{ marginTop: "5%", alignContent: "start" }}
            class="btn btn-outline-primary"
          >
            Read Story
          </button>
        </Link>
        <span  class="glyphicon glyphicon-heart"></span>
      </div>
    </Card>
  );
};

export default Cardbook;
