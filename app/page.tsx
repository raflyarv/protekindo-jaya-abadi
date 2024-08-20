'use client';
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Button,
  Card,
  Row,
  Col,
  Form,
  Carousel,
  CarouselCaption,
} from 'react-bootstrap';
import Image from 'next/image';
import React, { useState } from 'react';
import { HomeItemCard } from './_shared/_components';
import Link from 'next/link';

export default function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <main className="h-100 overflow-hidden">
      <Navbar
        className="shadow px-md-3 position-sticky"
        expand="lg"
      >
        <Container
          fluid
          className="d-flex flex-row"
        >
          <Navbar.Brand
            href="#home"
            className="w-50 d-flex align-items-center"
          >
            <Image
              src="/assets/logo-protekindo.png"
              width="75"
              height="65"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            <div className="w-100">
              <h5 className="text-uppercase text-wrap fw-bold mb-0"> Protekindo Jaya Abadi </h5>
              <h6 className="fw-semibold text-truncate">
                {' '}
                Your trusted fire safety equipment supplier{' '}
              </h6>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="w-auto">
            <Nav>
              <Nav.Link
                eventKey="1"
                href="#home"
              >
                Tentang Kami
              </Nav.Link>
              <Nav.Link
                eventKey="2"
                href="#link"
              >
                Produk
              </Nav.Link>
              <Nav.Link
                eventKey="1"
                href="#home"
              >
                Sertifikasi
              </Nav.Link>
              <Nav.Link
                eventKey="1"
                href="#home"
              >
                Testimoni
              </Nav.Link>
              <NavDropdown
                title="Dropdown"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated links</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container
        fluid
        className="d-flex vh-100 align-items-center justify-content-center position-relative"
      >
        <Image
          src="/assets/fire-extinguisher.jpg"
          layout="fill"
          objectFit="cover"
          alt="fire-extinguisher"
          className="img-fluid"
        />
        <div className="w-75 h-auto position-absolute text-white">
          <h1> CV Protekindo Jaya Abadi </h1>
          <h3> Your trusted fire safety equipment supplier </h3>
        </div>
      </Container>

      <Container
        fluid
        className="mb-5 py-5 text-center"
        style={{ backgroundColor: 'whitesmoke' }}
      >
        <Container className="py-5">
          <div className="mb-5">
            <h2 className="fw-bold"> Statistik Kejadian Periode Tahun 2024 </h2>
            <h4> *per bulan Agustus 2024 </h4>
          </div>

          <Row>
            <Col
              md={4}
              xs={12}
              className="mb-5 mb-md-0"
            >
              <div className="py-3 d-flex flex-column text-center align-items-center">
                <div className="mb-2">
                  <Image
                    src="/graphics/fire.png"
                    alt="Kebakaran"
                    width={80}
                    height={80}
                    className="img-fluid mb-3"
                  />
                  <h3 className="fw-bold"> 460 </h3>
                </div>

                <h5
                  className="px-3 py-2 text-white"
                  style={{ width: 'max-content', backgroundColor: 'red' }}
                >
                  KEJADIAN KEBAKARAN
                </h5>
              </div>
            </Col>

            <Col
              md={4}
              xs={12}
              className="mb-5 mb-md-0"
            >
              <div className="py-3 d-flex flex-column text-center align-items-center">
                <div className="mb-2">
                  <Image
                    src="/graphics/safe.png"
                    alt="Kebakaran"
                    width={80}
                    height={80}
                    className="img-fluid mb-3"
                  />
                  <h3 className="fw-bold"> 21 </h3>
                </div>

                <h5
                  className="px-3 py-2 text-white"
                  style={{ width: 'max-content', backgroundColor: 'green' }}
                >
                  {' '}
                  PENYELAMATAN{' '}
                </h5>
              </div>
            </Col>

            <Col
              md={4}
              xs={12}
              className="mb-5 mb-md-0"
            >
              <div className="py-3 d-flex flex-column text-center align-items-center">
                <div className="mb-2">
                  <Image
                    src="/graphics/socialize.png"
                    alt="Kebakaran"
                    width={80}
                    height={80}
                    className="img-fluid mb-3"
                  />
                  <h3 className="fw-bold"> 20 </h3>
                </div>

                <h5
                  className="px-3 py-2 text-white"
                  style={{ width: 'max-content', backgroundColor: 'blue' }}
                >
                  {' '}
                  RW TERSOSIALISASI{' '}
                </h5>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      <Button
        variant="success"
        style={{
          borderRadius: '100%',
          width: '72px',
          height: '72px',
          padding: '18px',
          bottom: '20px',
          right: '20px',
          zIndex: '100',
        }}
        className="position-fixed shadow"
      >
        <Image
          src="/social-media/whatsapp-logo-white.png"
          width={52}
          height={52}
          alt="Whatsapp Logo White"
          className="img-fluid"
        />
      </Button>

      <Container className="w-100 d-flex flex-column-reverse bg-red">
        <Container className="w-100 d-flex flex-column text-center text-md-start">
          <h3
            className="w-65 fw-bold mb-3 text-capitalize text-white p-3"
            style={{
              backgroundColor: 'red',
            }}
          >
            apakah sudah ada alat pemadam api di kantor/anda ?
          </h3>
          <h3
            className="fw-bold mb-3 text-capitalize text-center text-md-end text-white p-3"
            style={{
              backgroundColor: 'red',
            }}
          >
            {' '}
            apakah alat pemadam api anda sudah dicek dengan baik ?{' '}
          </h3>
          <h3
            className="fw-bold mb-3 text-capitalize text-center text-white p-3"
            style={{
              backgroundColor: 'red',
            }}
          >
            {' '}
            APAKAH ANDA SUDAH MERASA AMAN ?
          </h3>
        </Container>

        <Container className="w-70 mb-3">
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
          >
            <Carousel.Item
              as={Link}
              href="https://news.detik.com/berita/d-7492580/4-rumah-di-jakbar-terbakar-16-unit-damkar-diterjunkan"
              target="_blank"
            >
              <div
                style={{
                  width: '100%',
                  height: '70vh',
                }}
              >
                <Image
                  src={'/news/kebakaran-jakbar.jpeg'}
                  layout="fill"
                  objectFit="cover"
                  alt="Kebakaran Jakbar 2024"
                />
              </div>

              <CarouselCaption
                style={{
                  background:
                    'linear-gradient(180deg, rgba(255,255,255,0) 7%, rgba(0,0,0,0.5522584033613445) 44%)',
                }}
              >
                <h3> 4 Rumah di Jakbar Terbakar, 16 Unit Damkar Diterjunkan </h3>
                <h4>
                  {' '}
                  oleh Zunita Putri | <span> detikNews </span>
                </h4>
                <p> 16 Agustus 2024 </p>
              </CarouselCaption>
            </Carousel.Item>

            <Carousel.Item
              as={Link}
              href="https://news.detik.com/berita/d-7487249/3-000-warga-terdampak-kebakaran-di-manggarai-jaksel-tak-ada-korban-jiwa"
              target="_blank"
            >
              <div
                style={{
                  width: '100%',
                  height: '70vh',
                }}
              >
                <Image
                  src={'/news/kebakaran-manggarai.jpeg'}
                  layout="fill"
                  objectFit="cover"
                  alt="Kebakaran Manggarai 2024"
                />
              </div>

              <CarouselCaption
                style={{
                  background:
                    'linear-gradient(180deg, rgba(255,255,255,0) 7%, rgba(0,0,0,0.5522584033613445) 44%)',
                }}
              >
                <h3> 3.000 Warga Terdampak Kebakaran di Manggarai Jaksel, Tak Ada Korban Jiwa </h3>
                <h4>
                  {' '}
                  oleh Kurniawan Fadillah | <span> detikNews </span>
                </h4>
                <p> 13 Agustus 2024 </p>
              </CarouselCaption>
            </Carousel.Item>

            <Carousel.Item
              as={Link}
              href="https://www.kompas.id/baca/metro/2024/08/14/kebakaran-di-penjaringan-hanguskan-120-rumah-satu-orang-tewas"
              target="_blank"
            >
              <div
                style={{
                  width: '100%',
                  height: '70vh',
                }}
              >
                <Image
                  src={'/news/kebakaran-penjaringan.jpg'}
                  layout="fill"
                  objectFit="cover"
                  alt="Kebakaran Penjaringan 2024"
                />
              </div>

              <CarouselCaption
                style={{
                  background:
                    'linear-gradient(180deg, rgba(255,255,255,0) 7%, rgba(0,0,0,0.5522584033613445) 44%)',
                }}
              >
                <h3> Kebakaran di Penjaringan Hanguskan 120 Rumah, Satu Orang Tewas </h3>
                <h4>
                  {' '}
                  oleh Rhama Purna Jati | <span> Kompas </span>
                </h4>
                <p> 14 Agustus 2024 </p>
              </CarouselCaption>
            </Carousel.Item>
          </Carousel>
        </Container>

        <Container className="w-100 text-center">
          <h2 className="fw-bold mb-4 px-3">
            <span
              className="px-2 me-1 py-1"
              style={{ backgroundColor: 'red', color: 'white' }}
            >
              Resiko Kebakaran Selalu Ada
            </span>
            di Sekitar Kita
          </h2>
        </Container>
      </Container>

      <Container className="py-5">
        <div className="w-100 mb-5 text-center">
          <h2 className="fw-bold"> Tipe Kebakaran yang Dapat Terjadi </h2>
          <h4>
            {' '}
            Menurut Peraturan Menteri Tenaga Kerja dan Transmigrasi Nomor 04/MEN/1980 Bab I Pasal 2
            Ayat 1{' '}
          </h4>
        </div>

        <Row
          xs={12}
          md={3}
          className="w-100 mb-5 d-flex gy-5"
        >
          <Col
            md={4}
            className="d-flex justify-content-center"
          >
            <Card
              className="justify-items-center "
              style={{ width: '20rem', height: '27rem' }}
            >
              <Image
                src="/assets/tipe-kebakaran-a.png"
                width="250"
                height="250"
                alt="Tipe Kebakaran A"
                className="img-fluid align-self-center mb-2"
              />
              <Card.Body className="text-center">
                <Card.Text className="text-center">
                  Kebakaran Kelas A merupakan kelas kebakaran yang dikarenakan oleh bahan-bahan
                  padat non-logam seperti Kertas, Plastik, Kain, Kayu, Karet dan lain sebagainya.{' '}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col
            md={4}
            className="d-flex justify-content-center"
          >
            <Card
              className="justify-items-center"
              style={{ width: '20rem', height: '27rem' }}
            >
              <Image
                src="/assets/tipe-kebakaran-b.png"
                width="250"
                height="250"
                alt="Tipe Kebakaran B"
                className="img-fluid align-self-center mb-2"
              />
              <Card.Body className="text-center">
                <Card.Text className="text-center">
                  Kebakaran Kelas B merupakan kelas kebakaran yang dikarenakan oleh bahan-bahan cair
                  yang mudah terbakar seperti Minyak (Bensin, Solar, Oli), Alkohol, Cat, Solvent,
                  Methanol dan lain sebagainya.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col
            md={4}
            className="d-flex justify-content-center"
          >
            <Card
              className="justify-items-center"
              style={{ width: '20rem', height: '27rem' }}
            >
              <Image
                src="/assets/tipe-kebakaran-c.png"
                width="250"
                height="250"
                alt="Tipe Kebakaran C"
                className="img-fluid align-self-center mb-2"
              />
              <Card.Body className="text-center">
                <Card.Text className="text-center">
                  Kebakaran Kelas C merupakan kelas kebakaran yang dikarenakan oleh Instalasi
                  Listrik yang bertegangan tinggi.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container
        fluid
        className="w-100 d-flex flex-column align-items-center mb-5"
      >
        <div className="mb-5 text-center">
          <h4 className="fw-bold"> Biarkan Kami Membantu Anda Merasa Aman </h4>
          <h2 className="fw-bold"> dengan APAR GM PROTECT </h2>
        </div>

        <Container className="w-100 p-0 d-flex overflow-x-auto">
          <HomeItemCard
            productName="ABC DRY CHEMICAL POWDER"
            category="Portable"
            description="Berbahan dasar bubuk kimia dan dapat digunakan untuk memadamkan semua jenis
          kebakaran."
            imagesrc="/assets/portable.png"
            sizes="1 - 2"
            types={['A']}
          />

          <HomeItemCard
            productName="ABC DRY CHEMICAL POWDER"
            category="Portable"
            description="Berbahan dasar bubuk kimia dan dapat digunakan untuk memadamkan semua jenis
          kebakaran."
            imagesrc="/assets/portable.png"
            sizes="1 - 2"
            types={['A']}
          />

          <HomeItemCard
            productName="ABC DRY CHEMICAL POWDER"
            category="Portable"
            description="Berbahan dasar bubuk kimia dan dapat digunakan untuk memadamkan semua jenis
          kebakaran."
            imagesrc="/assets/portable.png"
            sizes="1 - 2"
            types={['A']}
          />

          <HomeItemCard
            productName="ABC DRY CHEMICAL POWDER"
            category="Portable"
            description="Berbahan dasar bubuk kimia dan dapat digunakan untuk memadamkan semua jenis
          kebakaran."
            imagesrc="/assets/portable.png"
            sizes="1 - 2"
            types={['A']}
          />

          <HomeItemCard
            productName="ABC DRY CHEMICAL POWDER"
            category="Portable"
            description="Berbahan dasar bubuk kimia dan dapat digunakan untuk memadamkan semua jenis
          kebakaran."
            imagesrc="/assets/portable.png"
            sizes="1 - 2"
            types={['A']}
          />

          <HomeItemCard
            productName="ABC DRY CHEMICAL POWDER"
            category="Portable"
            description="Berbahan dasar bubuk kimia dan dapat digunakan untuk memadamkan semua jenis
          kebakaran."
            imagesrc="/assets/portable.png"
            sizes="1 - 2"
            types={['A']}
          />
          <HomeItemCard
            productName="ABC DRY CHEMICAL POWDER"
            category="Portable"
            description="Berbahan dasar bubuk kimia dan dapat digunakan untuk memadamkan semua jenis
          kebakaran."
            imagesrc="/assets/portable.png"
            sizes="1 - 2"
            types={['A']}
          />

          <HomeItemCard
            productName="ABC DRY CHEMICAL POWDER"
            category="Portable"
            description="Berbahan dasar bubuk kimia dan dapat digunakan untuk memadamkan semua jenis
          kebakaran."
            imagesrc="/assets/portable.png"
            sizes="1 - 2"
            types={['A']}
          />
          <HomeItemCard
            productName="ABC DRY CHEMICAL POWDER"
            category="Portable"
            description="Berbahan dasar bubuk kimia dan dapat digunakan untuk memadamkan semua jenis
          kebakaran."
            imagesrc="/assets/portable.png"
            sizes="1 - 2"
            types={['A']}
          />

          <HomeItemCard
            productName="ABC DRY CHEMICAL POWDER"
            category="Portable"
            description="Berbahan dasar bubuk kimia dan dapat digunakan untuk memadamkan semua jenis
          kebakaran."
            imagesrc="/assets/portable.png"
            sizes="1 - 2"
            types={['A']}
          />
        </Container>
      </Container>

      <Container className="d-flex flex-column flex-md-row align-items-center py-5">
        <h2 className="fw-bold mb-3 mb-md-0"> Our Satisfied Clients </h2>
        <div
          style={{
            width: '100%',
            height: '500px',
            position: 'relative',
          }}
        >
          <Image
            src="/testimony/satisfied-client.png"
            layout="fill"
            objectFit="cover"
            alt="Our Satisfied Client"
          />
        </div>
      </Container>

      <Container className="justify-content-center d-flex flex-column mb-5 py-5">
        <div className="mb-3 text-center">
          <h2 className="fw-bold"> Hubungi Kami </h2>
          <h5 className="fw-bold"> Email: protekindojaya@gmail.com </h5>
        </div>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label> Name </Form.Label>
            <Form.Control
              name="name"
              type="text"
              placeholder="Enter your name"
              size="lg"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label> Company </Form.Label>
            <Form.Control
              name="company"
              type="text"
              placeholder="Enter your company"
              size="lg"
            />
          </Form.Group>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group className="mb-3 mb-md-0">
                <Form.Label> Email </Form.Label>
                <Form.Control
                  name="email"
                  type="text"
                  placeholder="Enter your email"
                  size="lg"
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group>
                <Form.Label> Phone </Form.Label>
                <Form.Control
                  name="phone"
                  type="text"
                  placeholder="Enter your phone number"
                  size="lg"
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label> Message </Form.Label>
            <Form.Control
              name="phone"
              type="text"
              as="textarea"
              rows={5}
              size="lg"
              placeholder="Type your message here..."
            />
          </Form.Group>

          <div className="w-100 d-flex justify-content-end">
            <Button
              className="rounded px-5"
              size="lg"
            >
              Submit
            </Button>
          </div>
        </Form>
      </Container>

      <Container
        fluid
        className="bg-primary pb-4"
        style={{ minHeight: '300px' }}
      >
        <Row className="d-flex flex-column flex-md-row justify-content-between align-items-center px-5 pt-5">
          <Col
            xs={12}
            md={4}
            className="w-auto my-5 my-md-0 d-flex flex-column flex-md-row align-items-center"
          >
            <Image
              src="/assets/logo-protekindo.png"
              width="75"
              height="65"
              className="d-inline-block align-top mb-3 me-md-3"
              alt="React Bootstrap logo"
            />
            <div className="w-auto text-white text-center text-md-start">
              <h5 className="text-uppercase text-wrap fw-bold mb-0"> Protekindo Jaya Abadi </h5>
              <h6 className="fw-semibold text-truncate">
                {' '}
                Your trusted fire safety equipment supplier{' '}
              </h6>
            </div>
          </Col>

          <Col
            xs={12}
            md={3}
            className="w-auto mb-5 mb-md-0 d-flex flex-column justify-content-center"
          >
            <Link
              href="#"
              className="text-white text-decoration-none mb-3"
            >
              <h5> Tentang Kami </h5>
            </Link>
            <Link
              className="text-white text-decoration-none mb-3"
              href="#"
            >
              <h5> Produk </h5>
            </Link>
            <Link
              className="text-white text-decoration-none mb-3"
              href="#"
            >
              <h5> Sertifikasi </h5>
            </Link>
            <Link
              className="text-white text-decoration-none"
              href="#"
            >
              <h5> Testimoni </h5>
            </Link>
          </Col>

          <Col
            xs={12}
            md={5}
            className="w-60 d-flex flex-column"
          >
            <div className="d-flex align-items-center">
              <i
                className="bi bi-buildings text-white me-3"
                style={{ fontSize: '32px' }}
              ></i>
              <h6 className="text-white">
                Grand Slipi Tower Lt 5 Unit F Jl. Jend. S. Parman Kav 22 - 24 , Jakarta Barat 11480
                || 021-5362358
              </h6>
            </div>

            <div className="d-flex align-items-center">
              <i
                className="bi bi-phone text-white me-3"
                style={{ fontSize: '32px' }}
              ></i>
              <h6 className="text-white"> 0877 7778 8625 / 0813 8825 4809 </h6>
            </div>

            <div className="d-flex align-items-center">
              <i
                className="bi bi-person-workspace text-white me-3"
                style={{ fontSize: '32px' }}
              ></i>
              <h6 className="text-white">
                Jl. Pal Merah Utara II No.212B, RT.8/RW.16, Palmerah,Kec. Palmerah, Kota Jakarta
                Barat, Daerah Khusus Ibukota Jakarta 11480, Indonesia
              </h6>
            </div>
          </Col>
        </Row>
      </Container>
      <Container
        fluid
        className="w-100 d-flex align-items-center justify-content-center text-white "
        style={{ height: '50px', backgroundColor: '#034694' }}
      >
        <h6 className="text-center">
          {' '}
          Copyright © CV Protekindo Jaya Abadi . All rights reserved.{' '}
        </h6>
      </Container>
    </main>
  );
}

