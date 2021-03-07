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
        &.fire {
            --bg-color: var(--color-fire);
            --text-color: var(--color-white);
            --logo-color: var(--color-fire-secondary);
        }
        &.water {
            --bg-color: var(--color-water);
            --text-color: var(--color-white);
            --logo-color: var(--color-water-secondary);
        }
        &.shadow {
            --bg-color: var(--color-shadow);
            --text-color: var(--color-white);
            --logo-color: var(--color-shadow-secondary);
        }
    }
    .modal-wrapper {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background-color: rgba(0,0,0,0.3);
  }
  
  .modal-box {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-height: 30%;
    width: 60%;
    overflow-y: auto;
    background-color: white;
    box-shadow: 0 0 10px rgba(0,0,0,0.25);
    z-index: 101;
    padding: 40px;
  }
`
