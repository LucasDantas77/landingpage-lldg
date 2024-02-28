import React from "react";
import {OverLayContainer,SpinnerContainer} from './styled'
export const LoadingSpinner = ()=>{
    return(
        <OverLayContainer>
            <SpinnerContainer></SpinnerContainer>
        </OverLayContainer>
    )
}