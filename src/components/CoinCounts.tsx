import React from 'react';
interface CoinCountsProps {
        countHeads: number;
        countTails: number;
    }

function CoinCounts(props: CoinCountsProps) {
    const { countHeads, countTails } = props;
    
    return (
        <div>
            <p className='coin-counts'>Heads: {countHeads}</p>
            <p className='coin-counts'>Tails: {countTails}</p>
        </div>
    );
    
}

export default CoinCounts;