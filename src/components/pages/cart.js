"use strict";
import React from "react";
import { connect } from "react-redux";
import {
  Panel,
  Col,
  Row,
  Well,
  Button,
  ButtonGroup,
  Label
} from "react-bootstrap";

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
          <Panel.Body key={cartArr._id}>
            <Row>
              <Col xs={12} sm={4}>
                <h6>{cartArr.title}</h6>
                <span>    </span>
              </Col>
              <Col xs={12} sm={2}>
                <h6>usd. {cartArr.price}</h6>
              </Col>
              <Col xs={12} sm={2}>
                <h6>
                  qty. <Label bsStyle="success" />
                </h6>
              </Col>
              <Col xs={6} sm={4}>
                <ButtonGroup style={{ minWidth: "300px" }}>
                  <Button bsStyle="default" bsSize="small">
                    -
                  </Button>
                  <Button bsStyle="default" bsSize="small">
                    +
                  </Button>
                  <span>    </span>
                  <Button bsStyle="danger" bsSize="small">
                    DELETE
                  </Button>
                </ButtonGroup>
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
