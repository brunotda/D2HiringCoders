import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400;1,700&display=swap');

    html,
    body {
        font-family: 'Roboto', sans-serif;
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        vertical-align: baseline;
    }
    .container{
        margin:  0 10px;
    }
    nav{
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -webkit-flex-direction: row;
        flex-direction: row;
        -webkit-box-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
        border-bottom: 1px solid #dadce0;
        -webkit-transition: box-shadow .2s ease-in-out;
        transition: box-shadow .2s ease-in-out;
        background: #fff;
        left: 0;
        right: 0;
        top: 0;
        height: 64px;
        z-index: 1;
        box-shadow: 1px 1px transparent;
    }
    nav .innerNav{
            -webkit-box-align: center;
            -webkit-align-items: center;
            align-items: center;
            display: -webkit-inline-box;
            display: -webkit-inline-flex;
            display: inline-flex;
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            -webkit-flex-direction: row;
            flex-direction: row;
            list-style-type: none;
            -webkit-transition: margin .3s cubic-bezier(.4,0,.2,1);
            transition: margin .3s cubic-bezier(.4,0,.2,1);
        a{
            color: #5f6368;
            text-decoration: none;
            -webkit-box-align: center;
            -webkit-align-items: center;
            align-items: center;
            display: -webkit-box;
            display: -webkit-flex;
            display: flex;
            height: 63px;
            -webkit-box-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            padding: 0 24px;
            &:hover{
                color: #202124;
                background-color: rgba(32,33,36,.04);
            }
        }
    }
    footer{
        border-top: 1px solid #dadce0;
        background: #f8f9fa;
        bottom: 0;
        color: #5f6368;
        display: -webkit-box;
        display: -webkit-flex;
        display: -moz-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        -moz-box-orient: vertical;
        -moz-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -moz-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        left: 0;
        margin-top: 72px;
        position: absolute;
        right: 0;
        padding: 24px 64px;
    }
`;

export default GlobalStyle;