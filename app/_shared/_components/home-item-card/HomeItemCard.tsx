import { Col, Card, Row } from 'react-bootstrap';
import Image from 'next/image';
import FireTypesIcon from '../fire-types-icon';

type HomeItemCardProps = {
  imagesrc: string;
  category: string;
  productName: string;
  description: string;
  types: ('A' | 'B' | 'C')[];
  sizes: string;
};

const HomeItemCard = ({
  imagesrc,
  category,
  productName,
  description,
  types,
  sizes,
}: HomeItemCardProps) => {
  return (
    <>
      <Col className="w-auto justify-content-center me-5">
        <Card
          className="justify-items-center h-auto"
          style={{ width: '18rem' }}
        >
          <Image
            src={imagesrc}
            width="150"
            height="250"
            alt={productName}
            className="img-fluid align-self-center mb-2"
          />
          <Card.Body className="text-center">
            <Card.Subtitle className="mb-2 text-muted text-uppercase"> {category} </Card.Subtitle>
            <Card.Title className="text-center fw-bold"> {productName} </Card.Title>
            <Card.Text className="text-center fw-light">{description}</Card.Text>
            <Col>
              <Row className="text-center justify-content-center mb-3">
                <h6> Pemadaman untuk Tipe: </h6>
                <Row>
                  <FireTypesIcon types={types} />
                </Row>
              </Row>

              <Row className="text-center justify-content-center">
                <h6> Tersedia dalam Ukuran: </h6>
                <p className="fw-bold text-center"> {sizes} kg</p>
              </Row>
            </Col>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default HomeItemCard;
