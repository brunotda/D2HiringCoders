import styled from 'styled-components';

export const ProdList = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`;
export const Shelf = styled.div`
    width: auto;
    margin: 10px 20px;
    
    img {
        max-height: 300px;
        margin: 0 auto;
        display: block;
        margin-bottom:30px;
    }
    
    h3{
        font-size: 30px;
        margin: 0;
    }

    button{
        background-color: #00cc6d;
        text-transform: uppercase;
        font-weight: bold;
        border-radius: 2px;
        border: 0px;
        color: #262626;
        padding: 10px 16px;
        white-space: nowrap;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        width: 100%;
        cursor: pointer;
        &:hover{
            box-shadow: 0px 0px 5px #61e4a7;
            background: #066b3c;
            color: #fff;
        }
    }

`;