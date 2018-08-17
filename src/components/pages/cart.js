"use strict";
import React from "react";
import { connect } from "react-redux";
import { Panel, Col, Row, Well, Button } from "react-bootstrap";

class Cart extends React.Component {
  render() {
    if (this.props.cart[0]) {
      return this.renderCart();
    } else {
      return this.renderEmpty();
    }
  }
  renderEmpty() {
    return <div />;
  }
  renderCart() {
    const cartItemsList = this.props.cart.map(function(cartArr) {
      return (
        <Panel>
          <Panel.Body key={cartArr.id}>
            <Row>
              <Col xs={12} sm={4}>
                <h6>{cartArr.title}</h6>
              </Col>
            </Row>
          </Panel.Body>
        </Panel>
      );
    });
    return (
      <Panel bsStyle="primary">
        <Panel.Heading>
          <Panel.Title>Cart</Panel.Title>
        </Panel.Heading>
        <Panel.Body>{cartItemsList}</Panel.Body>
      </Panel>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart.cart
  };
}

export default connect(mapStateToProps)(Cart);
