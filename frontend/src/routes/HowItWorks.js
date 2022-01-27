import React from 'react';
import { MDBCol, MDBRow } from "mdbreact";
import "./How.css"

export default function HowItWorks() {

    return (
        <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <MDBRow md="30">
                <MDBCol md="30">
                    <h1 className="title">How It Works</h1>
                    <br />
                    <div class="col-sm-30 vmargin ">
                        <h2>Search Attorneys and Legal Vendors</h2>
                        <p>Use our website to search Legal Services and Attorneys by specialty or location. It's easy to search and find top-rated services.</p>
                    </div>
                    <br />
                    <div class="col-sm-30 vmargin">
                        <h2>Compare Attorneys and Legal Vendors</h2>
                        <p>After searching for Legal Services and Attorneys, learn more by comparing quotes, reviews, and full profiles of each business or attorney.</p>
                    </div>
                    <br />
                    <div class="col-sm-30 vmargin">
                        <h2>Contact Attorneys and Legal Vendors</h2>
                        <p>Once you find Legal Services and Attorneys that you like, contact them to get more information. Our members are happy to hear from you!</p>
                    </div>
                </MDBCol>
            </MDBRow>
        </div>
    )
}

