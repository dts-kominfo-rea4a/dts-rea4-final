import { useState, useEffect } from "react";

const useStatusFirebase = (error) => {
    const [statusError, setStatusError] = useState(error);

    const handleChange = (y) => {
        setStatusError(y);
    };

    useEffect(() => {
        handleChange(error);
    }, [error]);
    return {statusError, setStatusError};
}

export default useStatusFirebase;
