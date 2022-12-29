import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
}

body{
    display: grid;
    gap: 20px;
    position: relative;
    bottom: 5vh;
    top: 5vh;
}`;
