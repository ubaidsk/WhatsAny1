"use client"

import { useState, useEffect } from 'react';
import InputNumber from "@/components/InputNumber";
import History from "@/components/History";

function getItemFromLocalStorage(key) {
    let item = localStorage.getItem(key);
    if (item === null) {
        return [];
    }
    return JSON.parse(item);
}

export default function MyApp() {
    let initialContacts = getItemFromLocalStorage("whatsany1");

    const [contacts, setContacts] = useState(initialContacts);
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
        localStorage.setItem("whatsany1", JSON.stringify(contacts));
    }, [contacts]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-300">
            <div className="card bg-base-100 w-1/1 shadow-xl">
                <div className="w-screen card-body space-y-4">
                    <h2 className="card-title">
                        <img src="/favicon-32x32.png"></img>
                        WhatsAny1</h2>
                    <InputNumber addContact={addContact} editingContact={editingContact}/>
                    <History contacts={contacts} deleteContact={deleteContact} setEditingContact={setEditingContact} />
                </div>
            </div>
        </div>
    )
}