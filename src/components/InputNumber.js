import React, { useState } from 'react'
import {
    CCard,
    CCardBody,
    CCardTitle,
    CButton,
    CFormInput,
    CInputGroup,
    CInputGroupText,
    CForm,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

function InputNumber({addContact}) {
    const [no, setNo] = useState("");
    const [name, setName] = useState("");

    return (
        <div className="pt-5 pb-5">
            <CCard color="dark" style={{ width: '80%', margin: "auto", color: "white" }}>
                <CCardBody>
                    <CCardTitle>Enter Number</CCardTitle>
                    <CForm className="mt-3">
                        <CInputGroup className="mb-3">
                            <CInputGroupText>Name</CInputGroupText>
                            <CFormInput id="name" type="text" placeholder="Some One" value={name} onChange={(e) => setName(e.target.value)} />
                        </CInputGroup>
                        <CInputGroup className="mb-3">
                            <CInputGroupText>&nbsp;+91&nbsp;&nbsp;&nbsp;</CInputGroupText>
                            <CFormInput id="no" type="number" placeholder="123456" value={no} onChange={(e) => setNo(e.target.value)} />
                        </CInputGroup>
                    </CForm>
                    <CButton className="w-100" href={"https://wa.me/91" + no} onClick={() => addContact(name, no)}>Send Message <CIcon name="cil-send"></CIcon></CButton>
                </CCardBody>
            </CCard>
        </div>
    )
}

export default InputNumber
