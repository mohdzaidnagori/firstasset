import React, { useState } from 'react'

const WordLimit = ({ text }) => {
    const words = text.split(' ');
    const initialWordCount = 10;
    const [visibleWords, setVisibleWords] = useState(words.slice(0, initialWordCount));
    const [showMore, setShowMore] = useState(true);

    const handleToggleShowMore = () => {
        if (showMore) {
            setVisibleWords(words);
        } else {
            setVisibleWords(words.slice(0, initialWordCount));
        }
        setShowMore(!showMore);
    };

    return (
        <p className={`${!showMore ? 'absolute bg-white -top-32 block z-[999]' : ''} text-sm xl:text-base`}>
            {visibleWords.join(' ')}
            {words.length > initialWordCount && (
                <button
                    className="text-blue-500 ml-2 cursor-pointer"
                    onClick={handleToggleShowMore}
                >
                    {showMore ? 'Show More' : 'Show Less'}
                </button>
            )}
        </p>
    );
}
export default WordLimit