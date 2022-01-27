import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

export default function Home() {


  return (

    <div>
      <br />
      <br />
      <div>
        <Carousel>
          <Carousel.Item style={{ height: '600px', width: '100%' }} interval={1000}>
            <Link class="card2-image" to={`/Service1`}>
              <img
                className="d-block w-100"
                src='https://www.radlawfirm.com/wp-content/uploads/sites/1502144/2021/03/How-to-Prepare-for-a-Consultation-with-an-Attorney-Rad-Law-Firm-scaled-2.jpg'
                alt="Solutions"
              />
            </Link>
            <Carousel.Caption>
              <h3>Legal advice</h3>
              <p>Legal advice is the giving of a professional or formal opinion regarding the substance or procedure of the law in relation to a particular factual situation.
                The provision of legal advice will often involve analyzing a set of facts and advising a person to take a specific course of action based on the applicable law</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ height: '600px', width: '100%' }} interval={500}>
            <Link class="card2-image" to={`/Service2`}>
              <img
                className="d-block w-100"
                src="https://www.onthemap.com/wp-content/uploads/2020/12/lawyer-law-firm-businessman-working-writing-lawbook-attorney.jpg"
                alt="Arbitration"
              />
            </Link>
            <Carousel.Caption>
              <h3>Pleading a legal case</h3>
              <p>pleading, in law, written presentation by a litigant in a lawsuit setting forth the facts upon which he claims legal relief or challenges the claims of his opponent.
                A pleading includes claims and counterclaims but not the evidence by which the litigant intends to prove his case</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ height: '600px', width: '100%' }}  >
            <Link class="card2-image" to={`/Service3`}>
              <img
                className="d-block w-100"
                src="https://www.bwhlegal.com/wp-content/uploads/bfi_thumb/dreamstime_s_112214873-oo38duoaskq1x9lj31c7g5r74uwhpfjhsg1pn51p7y.jpg"
                alt="Pleadings"
              />
            </Link>
            <Carousel.Caption>
              <h3>Small claims court help</h3>
              <p>Get help with small claims court, so you have the confidence you need to present your case</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <br />
        <br />
        <MDBFooter className="footer-copyright text-center py-3">
          <MDBContainer className="text-right text-md-right">
            <div className="footer-copyright text-center py-3">
              <MDBRow>
                <MDBCol md="20">
                  <h5 className="title">About</h5>
                  <p >
                    Finding Lawyers and Legal Vendors is easy by searching our trusted network
                    of top-rated Lawyers and Legal Vendors.
                  </p>
                </MDBCol>
              </MDBRow>
            </div>
          </MDBContainer>
          <div className="footer-copyright text-center py-3">
            <MDBContainer >
              &copy; {new Date().getFullYear()} Ref: <a href="https://twitter.com/_esh10?s=21"> Twitter</a>
            </MDBContainer>
          </div>
        </MDBFooter>
      </div>
    </div>
  )
}

