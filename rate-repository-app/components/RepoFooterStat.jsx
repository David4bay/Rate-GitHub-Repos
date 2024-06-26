import React from "react"
import StyledText from "./StyledText"

const RepoFooterStat = ({ item, textContent }) => {

    return (
        <React.Fragment>
            <StyledText grey>
                {textContent} 
            </StyledText>
            <StyledText styledText bigText>
                {new Intl.NumberFormat('en-US', {
                        notation: "compact"
                    }).format(item)}
            </StyledText>
        </React.Fragment>
    )
}

export default RepoFooterStat