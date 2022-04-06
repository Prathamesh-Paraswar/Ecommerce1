import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Card, Row, Col } from "react-bootstrap";
import {useSelector,useDispatch} from 'react-redux';
import Carousel from "./Carousel";

function Item() {
  const dispatch=useDispatch();
  const products=useSelector(state => state.products.products);
  // console.log(products)
  function addItem(event){
    // console.log(event.target.value);
    dispatch({type:'cart/addItem',payload:parseInt(event.target.value)});
  }
  return (
    <>
    <Header />
    <Carousel/>
    <Row xs={1} md={3} className="g-4">
      {products?.map((item) => (
        <Col>
          <Card>
            <img src={item.Image} alt={item.Name}></img>
            <Card.Body>
              <Card.Title>{item.Name}</Card.Title>
              <Card.Text>{`Rating: ${item.Rating}`}</Card.Text>
              <button
                onClick={addItem}
                className="btn btn-primary"
                value={item.id}
              >
                Add To Cart
              </button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    <Footer />
    </>
  );
}
export default Item;


// const breakPoints = [
//   { width: 1, itemsToShow: 1 },
//   { width: 550, itemsToShow: 2, itemsToScroll: 2 },
//   { width: 768, itemsToShow: 3 },
//   { width: 1200, itemsToShow: 4 }
// ];