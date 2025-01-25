import { CiUser, CiPhone, CiLocationArrow1, CiFlag1, CiSaveDown2 } from "react-icons/ci";
import { useState } from 'react';

const InputNumber = ({ addContact }) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [countryCode, setCountryCode] = useState('+91');

    function removeCountryCode(number) {
        // remove the currently set country code from the number
        return number.replace(countryCode, '');
    }

    const handleSubmit = () => {
        if (!name) {
            alert("Please enter a name.");
            return;
        }
        if (!phoneNumber) {
            alert("Please enter a phone number.");
            return;
        }
        if (!countryCode) {
            alert("Please select a country code.");
            return;
        }
        addContact(name, `${countryCode}${phoneNumber}`);
        setName('');
        setPhoneNumber('');
        setCountryCode('');
    };

    const countryCodes = [
        { code: "+1", name: "USA/Canada" },
        { code: "+44", name: "UK" },
        { code: "+91", name: "India" },
        { code: "+92", name: "Pakistan" },
        { code: "+971", name: "UAE" },
        { code: "+966", name: "Saudi Arabia" },
        { code: "+49", name: "Germany" },
        { code: "+86", name: "China" },
        // Add more country codes as needed
    ];

    return (
        <div>
            <div className="space-y-4">
                <label className="input input-bordered flex items-center gap-2">
                    <CiUser />
                    <input
                        type="text"
                        className="grow"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    <CiFlag1 />
                    <select
                        className="grow bg-transparent outline-none text-base-content"
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                    >
                        <option value="" className="bg-base-200 text-base-content">Select Country Code</option>
                        {countryCodes.map((country) => (
                            <option key={country.code} value={country.code} className="bg-base-200 text-base-content">
                                {country.name} ({country.code})
                            </option>
                        ))}
                    </select>
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    <CiPhone />
                    <input
                        type="text"
                        className="grow"
                        placeholder="Number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(removeCountryCode(e.target.value))}
                    />
                </label>
                <div className="card-actions justify-center space-x-4">
                    <button
                        className="btn btn-primary"
                        onClick={handleSubmit}
                        href={"https://wa.me/" + countryCode + phoneNumber}
                    >
                        Save <CiSaveDown2 />
                    </button>
                    <a
                        className="btn btn-primary"
                        onClick={handleSubmit}
                        href={"https://wa.me/" + countryCode + phoneNumber}
                    >
                        Message <CiLocationArrow1 />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default InputNumber;