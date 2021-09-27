import React, { useState, useEffect } from 'react';

import {
  CNavbar,
  CContainer,
  CNavbarBrand,
  CNavItem,
  CNavLink,
  CNavbarNav,
  CRow,
  CCol
} from '@coreui/react'
import InputNumber from './components/InputNumber';
import History from './components/History';
import './App.css'
import {
  HashRouter,
  Switch,
  Route,
  Redirect,
  // Link,
} from "react-router-dom";

function App() {
  let initContacts;
  if (localStorage.getItem("whatsany") === null) {
    initContacts = [];
  }
  else {
    initContacts = JSON.parse(localStorage.getItem("whatsany"));
  }

  const [contacts, setContacts] = useState(initContacts);

  const deleteContact = (contact) => {
    setContacts(contacts.filter((e) => {
      return e !== contact;
    }));
    localStorage.setItem("whatsany", JSON.stringify(contacts));
  }

  const addContact = (name, no) => {
    let sno;
    if (contacts.length === 0) {
      sno = 0;
    }
    else {
      sno = contacts[contacts.length - 1].sno + 1;
    }
    const myContact = {
      sno: sno,
      name: name,
      no: no,
    }
    setContacts([...contacts, myContact]);
  }

  useEffect(() => {
    localStorage.setItem("whatsany", JSON.stringify(contacts));
  }, [contacts])

  return (
    <>
      <CNavbar colorScheme="dark" className="bg-dark">
        <CContainer fluid style={{ justifyContent: "center" }}>
          <CNavbarBrand href="#">
            <img
              src="./WhatsAny-1/logo.png"
              alt=""
              width="22"
              height="24"
              className="d-inline-block align-top"
            />{' '}
            WhatsAny-1
          </CNavbarBrand>
        </CContainer>
      </CNavbar>

      <CNavbar className="nav nav-tabs" placement="fixed-bottom">
        <CContainer fluid role="navigation" >
          <CNavbarNav className="w-100" style={{ justifyContent: "center", textAlign: "center" }}>
            <CRow>
              <CCol sm="6" xs="6">
                <CNavItem>
                  <CNavLink href="#/input-number">
                    Input Number
                  </CNavLink>
                </CNavItem>
              </CCol>
              <CCol sm="6" xs="6">
                <CNavItem>
                  <CNavLink href="#/history">
                    History
                  </CNavLink>
                </CNavItem>
              </CCol>
            </CRow>
          </CNavbarNav>
        </CContainer>
      </CNavbar>

      <HashRouter>
        <Switch>
          <Route path="/input-number">
            <InputNumber addContact={addContact} />
          </Route>
          <Route path="/history">
            <History contacts={contacts} deleteContact={deleteContact} />
          </Route>
          <Redirect to="/input-number" />
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
