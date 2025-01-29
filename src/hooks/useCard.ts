import { useNavigate } from "react-router";

type useCard = {
    view? : string
}

export const useCard = ({view} : useCard) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if(view){
            navigate(`/product/detail?name=${view}`);
        }
    };

    return {
        handleClick
    };
};
