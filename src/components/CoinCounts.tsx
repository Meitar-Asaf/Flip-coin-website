import exp from 'constants';
import React from 'react';
interface CoinCountsProps {
        countHeads: number;
        countTails: number;
    }

function CoinCounts(props: CoinCountsProps) {
    const { countHeads, countTails } = props;
    
    return (
        <div>
            <p>Heads: {countHeads}</p>
            <p>Tails: {countTails}</p>
        </div>
    );
    
}

export default CoinCounts;