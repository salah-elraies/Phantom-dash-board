import React, { useState } from 'react'
import styled from 'styled-components';
import DataShow from './DataShow';
import Filters from './Filters';

function LeftSide() {
    const [transes, setTranses] = useState(220);
    return (
        <FACont>
           <Filters setTranses={setTranses} /> 
           <DataShow transes={transes} setTranses={setTranses} />
        </FACont>
    )
}

export default LeftSide

const FACont = styled.div`
    width: calc(65% - 25px);
    margin-right: 25px;
`