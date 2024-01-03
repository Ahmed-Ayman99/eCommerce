import { Row, Col } from "react-bootstrap";
import Product from "../components/product";
import { useGetProductsQuery } from "../slices/productsSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";

const HomeScreen = () => {
  const { data, isError, isLoading, error } = useGetProductsQuery();

  if (isLoading) return <Loader />;
  if (isError) return <Message>{error}</Message>;

  const products = data.data;
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
