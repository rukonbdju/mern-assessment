// src/Invoice.js
import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import jsPDF from 'jspdf';

const Invoice = () => {
    const componentRef = useRef();

    return (
        <div className='invoice-container'>
           <div>
            <div className="grid grid-cols-2" id="invoice" ref={componentRef}>
                <div className="header">
                    <div className="logo-section">
                        <img src="logo-url-here" alt="Logo" />
                        <div className="company-details">
                            <p>CH Car Place Inc</p>
                            <p>162 Bergen St</p>
                            <p>Brooklyn, NY 11213</p>
                            <p>PH#</p>
                        </div>
                    </div>
                    <div className="reservation-section">
                        <h2>Reservation</h2>
                        <p>RA #0121</p>
                        <p>REPAIR ORDER:</p>
                        <p>CLAIM:</p>
                        <p>Date/Time Out: 03/29/2024 12:33 AM</p>
                        <p>Date/Time In: 03/29/2024 01:33 AM</p>
                    </div>
                </div>
                <div className="content">
                    <div className="left-column">
                        <div className="renter-info">
                            <h3>RENTER INFO</h3>
                            <p>Name: Shinab Ahmed</p>
                            <p>Email: test@gmail.com</p>
                            <p>Phone: 051945469</p>
                        </div>
                        <div className="additional-driver">
                            <h3>ADDITIONAL AUTHORIZED DRIVER(S)</h3>
                        </div>
                        <div className="unit-details">
                            <h3>UNIT DETAILS</h3>
                            <p>Unit: NISSAN ROGUE BLACK</p>
                            <p>Make & Model: NISSAN ROGUE BLACK</p>
                        </div>
                    </div>
                    <div className="right-column">
                        <div className="billing-info">
                            <p>Bill To:</p>
                            <p>Payment Type: Unpaid</p>
                            <p>AUTH: $0.00</p>
                            <p>Referral:</p>
                            <p>NOTICE: Collision Insurance (CDW)- $7 per day</p>
                            <p>Limits liability of damages to one's own vehicle up to $1000 in event of an accident,</p>
                            <p>by waiving this coverage renter agrees to be hold liable for damages up to the entire value of the vehicle.</p>
                            <div className="accept-reject">
                                <p>Accept</p>
                                <p>Reject</p>
                            </div>
                        </div>
                        <div className="charge-summary">
                            <h3>CHARGE SUMMARY</h3>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Hourly</td>
                                        <td>1</td>
                                        <td>$0.50</td>
                                    </tr>
                                    <tr>
                                        <td>NYS State Tax</td>
                                        <td>11.5%</td>
                                        <td>$0.06</td>
                                    </tr>
                                    <tr>
                                        <td>EST TOTAL TIME & MILAGE</td>
                                        <td></td>
                                        <td>$0.56</td>
                                    </tr>
                                    <tr>
                                        <td>Discount</td>
                                        <td></td>
                                        <td>-$0.00</td>
                                    </tr>
                                    <tr>
                                        <td>Damages</td>
                                        <td></td>
                                        <td>$0.00</td>
                                    </tr>
                                    <tr>
                                        <td>Traffic tickets</td>
                                        <td></td>
                                        <td>$0.00</td>
                                    </tr>
                                    <tr>
                                        <td>TOTAL ESTIMATED CHARGES</td>
                                        <td></td>
                                        <td>$0.56</td>
                                    </tr>
                                    <tr>
                                        <td>Renter Payments</td>
                                        <td></td>
                                        <td>$0.56</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <p>Your rental agreement offers, for an additional charge, an optional waiver to cover all or a part of your responsibility for damage to or loss of the vehicle...</p>
                    <div className="signature">
                        <p>Renters Signature ____________________</p>
                        <p>Additional Driver 1 ____________________</p>
                    </div>
                    <p>Rental service may be refused anyway when done in the best interest of the renting company or customer...</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Invoice;
