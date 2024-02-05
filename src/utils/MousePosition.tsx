import { useEffect, useState } from "react";

interface MousePositionState {
    x : number | null;
    y : number | null;
}

const MousePosition = () => 
{
    const [Position , setPosition ] = useState<MousePositionState>({ x:null , y : null});

    const updatePosition = (e: MouseEvent) => {
        setPosition({ x: e.clientX , y: e.clientY });

    };

    useEffect(() => 
    {
        window.addEventListener("mousemove", updatePosition);
        return () => window.removeEventListener("mousemove", updatePosition);
    }, []);

    return Position;
};

export default MousePosition;