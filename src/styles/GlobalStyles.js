import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    *, button, input {
        font-family: 'DotGothic16', sans-serif;
    }
    :root {
        --color-fire: #f69005;
        --color-fire-secondary: #fdf1a1;

        --color-water: #36616f;
        --color-water-secondary: #cbfefe;

        --color-shadow: #1e1e1e;
        --color-shadow-secondary: #9a9a9a;

        --color-white: #fff;
        --color-black: #000;
    }
    .container {
        padding: 0 40px;
    }
`
