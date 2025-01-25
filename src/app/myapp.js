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

const people = [
    {
        name: "John Doe",
        phoneNumber: "123-456-7890",
        createdAt: "2021-09-01T00:00:00.000Z",
    },
    {
        name: "Jane Doe",
        phoneNumber: "098-765-4321",
        createdAt: "2021-09-02T00:00:00.000Z",
    },
    {
        name: "John Smith",
        phoneNumber: "123-456-7890",
        createdAt: "2021-09-03T00:00:00.000Z",
    },
    {
        name: "Jane Smith",
        phoneNumber: "098-765-4321",
        createdAt: "2021-09-04T00:00:00.000Z",
    },
];


localStorage.setItem("whatsany1", JSON.stringify(people));

let prevContacts = getItemFromLocalStorage("whatsany");
prevContacts = prevContacts.map((contact) => {
    contact.createdAt = new Date(contact.createdAt).toISOString();
    contact.countryCode = "+91";
    return contact;
});

export default function MyApp() {
    let initialContacts = getItemFromLocalStorage("whatsany1");
    initialContacts = initialContacts.concat(prevContacts);

    const [contacts, setContacts] = useState(initialContacts);

    const addContact = (name, code, number) => {
        setContacts([...contacts, {
            name: name,
            countryCode: code,
            phoneNumber: number,
            createdAt: new Date().toISOString()
        }]);
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
        <div className="h-screen flex items-center justify-center">
            <div className="card bg-base-100 w-4/5 shadow-xl">
                <div className="card-body space-y-4">
                    <h2 className="card-title">
                        <img src="/favicon-32x32.png"></img>
                        WhatsAny1</h2>
                    <InputNumber addContact={addContact} />
                    <History contacts={contacts} deleteContact={deleteContact} />
                </div>
            </div>
        </div>
    )
}