import { useState, useEffect } from "react"

const CheckBox = ({ setItemsCount }) => {
    const [isActive, setIsActive] = useState(false);
    const changeHandler = () => {
        setIsActive(!isActive);
    };

    useEffect(() => {
        if (!isActive) {
            setItemsCount((prevCount) => {
                if (prevCount !== 0) {
                    return prevCount - 1;
                }

                return prevCount;
            });
        }

        if (isActive) {
            setItemsCount((prevCount) => prevCount + 1);
        }
    }, [isActive, setItemsCount])
    return (
        <div className="flex items-center">
            <input
                id="default-checkbox"
                type="checkbox" value=""
                checked={isActive}
                onChange={changeHandler}
                className="w-4 h-4 text-dark-blue bg-gray-100 rounded-0 border-gray-300 focus:ring-dark-blue dark:focus:ring-dark-blue dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray" />
        </div>
    )
}

export default CheckBox