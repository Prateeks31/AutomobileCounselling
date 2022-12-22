import { CDBFooter } from 'cdbreact';
import React, { Fragment } from 'react';
import { CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';
import "./App.css";

export const Footer = () => {
  return (
    <>
    <br/>
    <CDBFooter className="shadow box5">
      <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <a href="/" className="d-flex align-items-center p-0 text-dark">
              <img alt="logo" src="logo.png" width="70px" />
              <span className="ml-3 h5 font-weight-bold box5">TheAutomobilezone</span>
            </a>
            <p className="my-3" style={{ width: '250px' }}>
            One-stop Automobile Journalism platform to know about New Launches,Long Term Reviews, Video Reviews,Article Reviews, Automobile Counseling
            </p>
            <CDBBox display="flex" className="mt-4">
              <CDBBtn flat color="dark">
                <CDBIcon fab icon="facebook-f" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="mx-3">
                <CDBIcon fab icon="twitter" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="p-2">
                <CDBIcon fab icon="instagram" />
              </CDBBtn>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Automobile Counselling
            </p>
            
            <CDBBox className={"box6"} flex="column" style={{ cursor: 'pointer', padding: '0',color: 'white' }}>
              <CDBFooterLink className={"box6"} >Resources</CDBFooterLink>
              <CDBFooterLink className={"box6"} >About Us</CDBFooterLink>
              <CDBFooterLink className={"box6"} >Contact</CDBFooterLink>
              <CDBFooterLink  className={"box6"} >Blog</CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Help
            </p>
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink >Support</CDBFooterLink>
              <CDBFooterLink >Sign Up</CDBFooterLink>
              <CDBFooterLink >Sign In</CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Products
            </p>
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink >Windframe</CDBFooterLink>
              <CDBFooterLink >Loop</CDBFooterLink>
              <CDBFooterLink >Contrast</CDBFooterLink>
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <small className="text-center mt-5">&copy; TheAutomobilezone, 2022. All rights reserved.</small>
      </CDBBox>
    </CDBFooter>
    </>
  );
};
export default Footer;