import { Row, Col } from "react-bootstrap";
import Product from "../components/product";
import { useEffect, useState } from "react";
import axios from "axios";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get("http://localhost:5000/api/products");

      setProducts(data.data);
    })();
  }, []);

  return (
    <>
      <h1>Latest products</h1>
      <Row>
        {products?.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product}>{product.name}</Product>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
