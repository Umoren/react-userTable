import Avatar from 'react-string-avatar';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import CheckBox from './CheckBox';
import { fetchUsers, updateUser } from '../store/actions/userAction';

const TableContent = () => {
    const users = useSelector((state) => state.allUsers.users);
    const [activeItemsCount, setActiveItemsCount] = useState(0);

    const dispatch = useDispatch();

    const handleChange = (id, active) => {
        dispatch(updateUser(id, !active));
    }

    useEffect(() => {
        dispatch(fetchUsers());
    }, [users])

    const renderUsers = users.map((user) => {
        const { id, email, phone, name, active, type } = user;

        return (
            <>
                <tr key={id} className="border-y border-gray-light text-sm font-normal text-light-blue hover:bg-grey-100 hover:bg-opacity-30  cursor-pointer">
                    <td className="py-4 inline-flex space-x-3">
                        <CheckBox setItemsCount={setActiveItemsCount} />
                        <div className="text-dark-blue font-medium">

                            <Avatar
                                initials={type.slice(0, 2).toUpperCase()}
                                autoColor={true}
                                textColor="#39628D"
                                width={30}
                            />
                        </div>
                    </td>
                    <td className="py-4 hover:font-semibold">
                        {name}
                    </td>
                    <td className="py-4 hover:font-semibold">
                        {email}
                    </td>
                    <td className="py-4 hover:font-semibold w-1/2">
                        {phone}
                    </td>

                    <td className="py-4">
                        <label className="inline-flex relative items-center cursor-pointer focus:outline-none">
                            <input type="checkbox"
                                className="sr-only peer focus:outline-none"
                                checked={active}
                                onChange={() => handleChange(id, active)}
                            />
                            <div
                                className="w-[2.3rem] h-[1.3rem] bg-gray  focus:outline-0 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all border border-gray-light peer-checked:bg-sky-blue"
                            ></div>
                        </label>
                    </td>

                </tr>
            </>
        )
    })
    return (
        <>
            <div className="flex justify-between">
                <div className="inline-flex space-x-3">
                    <img src="./assets/user.svg" alt="user svg" className="w-8 h-8" />
                    <p className="text-lg font-normal"> Users </p>
                </div>

                <div className="inline-flex items-center space-x-5">

                    <p className="text-xs text-deep-gray"> {activeItemsCount} selected</p>
                    <img src="./assets/question.svg" alt="question make" />
                </div>
            </div>

            <div className="overflow-x-auto relative my-6">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-auto hover:border-gray">
                    <thead className="text-xs text-light-blue uppercase border-y border-gray-light">
                        <tr>
                            <th scope="col" className="py-3 inline-flex space-x-3">
                                <div className="flex items-center">
                                    <input
                                        id="default-checkbox"
                                        type="checkbox" value=""
                                        disabled
                                        className="w-4 h-4 text-dark-blue bg-gray-100 rounded-0 border-gray-300 focus:ring-dark-blue dark:focus:ring-dark-blue dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray"

                                    />
                                </div>
                                <div> Type </div>
                            </th>
                            <th scope="col" className="py-3">
                                Name
                            </th>
                            <th scope="col" className="py-3">
                                Email
                            </th>
                            <th scope="col-2" className="py-3 w-1/2">
                                Telephone
                            </th>
                            <th scope="col" className="py-3">
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        {renderUsers}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default TableContent