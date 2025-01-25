import { CiUser, CiChat1, CiEdit, CiTrash } from "react-icons/ci";

const History = ({ contacts, deleteContact, setEditingContact }) => {
    return (
        <div className="collapse collapse-arrow bg-base-200">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">History</div>
            <div className="collapse-content">
                <ul className="divide-y divide-gray-200">
                    {contacts.map((person, idx) => (
                        <li key={idx} className="py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                            <div className="flex items-center gap-4 w-full">
                                <div className="flex-shrink-0">
                                    <CiUser className="h-8 w-8 text-gray-400" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-white truncate">
                                        {person.name}
                                    </p>
                                    <p className="text-sm text-gray-300 truncate">
                                        {person.countryCode} {person.phoneNumber}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                                <div className="text-xs text-gray-400">
                                    {new Date(person.createdAt).toLocaleDateString()}
                                </div>
                                <div className="flex gap-3">
                                    <a
                                        href={"https://wa.me/" + person.countryCode + person.phoneNumber}
                                    >
                                        <CiChat1 className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-600" />
                                    </a>
                                    <CiEdit
                                        className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-600"
                                        onClick={() => {
                                            setEditingContact(person);
                                            deleteContact(person);
                                        }}
                                    />
                                    <CiTrash
                                        className="h-6 w-6 text-gray-400 cursor-pointer hover:text-red-600"
                                        onClick={() => deleteContact(person)}
                                    />
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default History;