import React, { useState } from "react";

const Aps = () => {
    const [checkedOne, setChekedOne] = useState(false);

    const handleChangeOne = () => {
        setChekedOne(!checkedOne);
    }
    return (
        <div>
            <label>
                <input type="checkbox"
                    checked={checkedOne}
                    onChange={handleChangeOne}
                />
                <p>Value? {checkedOne.toString()}</p>
            </label>
        </div>
    );
}

export default Aps;