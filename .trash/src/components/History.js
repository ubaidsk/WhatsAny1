import React from 'react'
import {
    CCard,
    CCardBody,
    CCardTitle,
    CCardText,
    CButton,
    CContainer,
    CRow,
    CCol,
    CBadge
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

function History({ contacts, deleteContact }) {
    
    return (
        <CContainer className="mt-3">
            {
                (!contacts || contacts.length === 0)? "No Previous Contacts to Display":
                contacts.map((ele, idx) =>
                    <CCard key={ele.sno} className="mb-3" color="dark" style={{ color: "white", borderRadius: 25 }}>
                        <CCardBody>
                            <CCardTitle>{ele.name}</CCardTitle>
                            <CCardText>{ele.no}</CCardText>
                            <CRow>
                                <CCol>
                                    <CButton href={"https://wa.me/91" + ele.no} className="w-100" color="light">
                                        Text  <CBadge color="success" style={{ top: 1.5 }}><CIcon name="cil-send"></CIcon></CBadge>
                                    </CButton>
                                </CCol>
                                <CCol>
                                    <CButton href="#" className="w-100" color="light" onClick={() => deleteContact(ele)}>
                                        Delete <CBadge color="danger" style={{ top: 1.5 }}><CIcon name="cil-trash"></CIcon></CBadge>
                                    </CButton>
                                </CCol>
                            </CRow>
                        </CCardBody>
                    </CCard>
                )
            }


        </CContainer>
    )
}

export default History
