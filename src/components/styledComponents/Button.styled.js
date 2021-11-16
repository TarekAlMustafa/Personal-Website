import styled from "styled-components";

export const StyledButton = styled.button`
    :root {
        --primary: red;
    }

    .btn {
        padding: 8px 20px;
        border-radius: 4px;
        outline: none;
        border: none;
        font-size: 18px;
        color: red;
        cursor: pointer;
        background-color: var(--primary);
    }

    .btn:hover {
        padding: 6px 18px;
        transition: all 0.3s ease-out;
        background-color: transparent;
        color: #fff
        border-radius: 4px;
        border: 2px solid var(--primary);
    }
`