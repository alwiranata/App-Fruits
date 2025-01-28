import { useNavigate } from "react-router";

type useCard = {
    view? : string
}

export const useCard = (props : useCard) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/product/detail?name=${props.view}`);
    };

    return {
        handleClick
    };
};
