import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { runFireworks } from 'utils/confettiFireworks';

const Success = () => {
    const [timeOut, setTimeOut] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        runFireworks();

        const timer = setInterval(() => {
            setTimeOut((prev) => prev + 1);
        }, 1000);

        if (timeOut === 6) return navigate('/');
        return () => {
            clearInterval(timer);
        };
    }, [navigate, timeOut]);

    return <div>Success {timeOut}</div>;
};

export default Success;
