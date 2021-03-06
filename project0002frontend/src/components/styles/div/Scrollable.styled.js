import styled from "styled-components"


export const StyledScrollable = styled.div`
    padding:10px;
    display: flex;
    flex-direction:row;
`
export const StyledScrollableCard = styled.div`
    margin-left:20px;
    border-radius: 10px;
    min-width:200px;
    max-width: 500px;
    max-height: 50px;
    box-shadow: -1rem 0 3rem #000;
    background-color: #17141d;
    color: white;
    cursor: pointer;
    overflow: hidden;
    word-wrap: break-word;
`

export const StyledScrollableBG = styled.div`
    max-width:100%;
    overflow: scroll;
    &::-webkit-scrollbar{
        display: none;
    }
    margin:10px 20px 0 20px;
    background-color:#100e17;
    border-top: 2px solid white;
    border-bottom: 2px solid white;
`