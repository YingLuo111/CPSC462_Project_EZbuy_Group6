// This app was created by group 6 for CSUF's CPSC 462 class. It is a collaborative effort to
//create a react-based website that functions as a unique web store.
//
import React, { Component } from 'react';

//Import components
import ProductDetailItemCarousel from './ProductDetailItemCarousel';
import PageTemplate from './PageTemplate'
import XRViwer from './XRViewer';
import axios from './commons/axios';

//Import render styling from react bootstrap
import Badge from 'react-bootstrap/Badge';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button'

import '../css/product/ProductItemDetail.scss';

class ProductDetailItem extends Component {

    constructor(props) {
        super(props);
        this.state = { products: null };
    }

    componentDidMount() {
        const productID = window.location.search.slice(11);

        axios.get(`/products/${productID}`).then((res) => {
            this.setState({ products: res.data['product'][0] })
        })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        const { products } = this.state;
        console.log(products);
        if (products === null) {
            return <div></div>
        }

        return (
            <PageTemplate>
                <Row className="product-container">
                    <Col className="product-control">
                        <div className="product_detail">
                            <Card className="product-detail-card box-detail">
                                <ProductDetailItemCarousel />
                                <Card.Body>
                                    <Card.Title className="product_detail">{products.productName}</Card.Title>
                                    <Card.Text id="productDescription">{products.productDescription}</Card.Text>
                                    <Card.Text id="price">{products.price}</Card.Text>
                                    <Button variant="primary">Add to cart</Button>
                                </Card.Body>
                            </Card>

                            <Card className="product-detail-card box-detail">
                                <Card.Body>
                                    <XRViwer/>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </PageTemplate >
        );
    }
}

export default ProductDetailItem;