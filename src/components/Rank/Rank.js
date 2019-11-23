import React from 'react';

const Rank = ({name,entries}) => {
    return(
        <div>
            <div className="white f5">
                {`${name}, you're current entry count is ...`}
            </div>
            <div className="white f1">
                {entries}
            </div>
        </div>
    );
};
export default Rank;