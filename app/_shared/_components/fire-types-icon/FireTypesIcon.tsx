import { Col } from 'react-bootstrap';
import Image from 'next/image';

type FireTypesIconProps = {
  types: ('A' | 'B' | 'C')[];
};

const FireTypesIcon = ({ types }: FireTypesIconProps) => {
  return types.map((type, i) => {
    if (type === 'A') {
      return (
        <Col key={type}>
          <Image
            src="/assets/tipe-kebakaran-a.png"
            width="60"
            height="60"
            alt="tipe-a"
            className="img-fluid"
          />
        </Col>
      );
    } else if (type === 'B') {
      return (
        <Col key={type}>
          <Image
            src="/assets/tipe-kebakaran-b.png"
            width="60"
            height="60"
            alt="tipe-b"
            className="img-fluid"
          />
        </Col>
      );
    } else if (type === 'C') {
      return (
        <Col key={type}>
          <Image
            src="/assets/tipe-kebakaran-c.png"
            width="60"
            height="60"
            alt="tipe-a"
            className="img-fluid"
          />
        </Col>
      );
    }
  });
};

export default FireTypesIcon;
