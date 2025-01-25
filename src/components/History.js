import { CiUser, CiChat1, CiEdit, CiTrash } from "react-icons/ci";

const History = ({contacts}) => {
    return (
        <div className="collapse collapse-arrow bg-base-200">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">History</div>
            <div className="collapse-content">
                <ul className="divide-y divide-gray-200">
                    {contacts.map((person, idx) => (  // Changed from people to contacts
                        <li key={idx} className="py-4 flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                <CiUser className="h-10 w-10 text-gray-400" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-white truncate">
                                    {person.name}
                                </p>
                                <p className="text-sm text-gray-300 truncate">
                                    {person.phoneNumber}
                                </p>
                            </div>
                            <div className="text-xs text-gray-400">
                                {new Date(person.createdAt).toLocaleDateString()}
                            </div>
                            <div className="flex-shrink-0 flex space-x-2">
                                <CiChat1 className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-600" />
                                <CiEdit className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-600" />
                                <CiTrash className="h-6 w-6 text-gray-400 cursor-pointer hover:text-red-600" />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default History;