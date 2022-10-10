import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Sister = () => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h4>Sister</h4>
            <p><small>House : {money}</small></p>
            <p><small>Money : {money}</small></p>
            <button onClick={() => setMoney(money + 10000)}>increase 1000</button>
        </div>
    );
};

export default Sister;