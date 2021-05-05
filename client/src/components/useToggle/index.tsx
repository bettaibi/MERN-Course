import { useState } from "react";

const useToggle = () => {
    const [show, setShow] = useState<boolean>(false);

    function toggleHandler(){
        setShow((prevState) => !prevState);
    };

    function closeHandler(){
        setShow(false);
    };

    function openHandler(){
        setShow(true);
    };

    return {
        show,
        toggleHandler,
        closeHandler,
        openHandler
    }

};

export default useToggle;