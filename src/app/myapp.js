"use client"

import { useState, useEffect } from 'react';
import InputNumber from "@/components/InputNumber";
import History from "@/components/History";
import logo from "@/public/favicon-32x32.png";

function getItemFromLocalStorage(key) {
    let item = localStorage.getItem(key);
    if (item === null) {
        return [];
    }
    return JSON.parse(item);
}

export default function MyApp() {

    const [contacts, setContacts] = useState([]);
    const [editingContact, setEditingContact] = useState({name: "", countryCode: "+91", phoneNumber: ""});

    const addContact = (name, countryCode, phoneNumber) => {
        setContacts([{
            name: name,
            countryCode: countryCode,
            phoneNumber: phoneNumber,
            createdAt: new Date().toISOString()
        }, ...contacts]);
    }

    const deleteContact = (contact) => {
        setContacts(contacts.filter((e) => {
            return e !== contact;
        }));
    }

    useEffect(() => {
        let prevContacts = getItemFromLocalStorage("whatsany");
        prevContacts = prevContacts.map((contact) => {
            return {
                name: contact.name,
                countryCode: "+91",
                phoneNumber: contact.no,
                createdAt: new Date("2025-01-26T12:00:00").toISOString()
            }
        });
        setContacts(getItemFromLocalStorage("whatsany1").concat(prevContacts));
    }, []);

    useEffect(() => {
        localStorage.clear();
        localStorage.setItem("whatsany1", JSON.stringify(contacts));
    }, [contacts]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-300">
            <div className="card bg-base-100 w-1/1 shadow-xl">
                <div className="w-screen card-body space-y-4">
                    <h2 className="card-title">
                        <img src={logo.src}></img>
                        WhatsAny1</h2>
                    <InputNumber addContact={addContact} editingContact={editingContact}/>
                    <History contacts={contacts} deleteContact={deleteContact} setEditingContact={setEditingContact} />
                </div>
            </div>
        </div>
    )
}