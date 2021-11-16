import styled from "styled-components"

export const StyledDropdown = styled.div`
    .dropdown-menu {
        width: 200px:
        position: absolute;
        top: 80px;
        list-style: none;
        text-align: start;
    }

    .dropdown-menu li {
        background: #1888ff;
        cursor: pointer;
    }

    .dropdown-menu li:hover {
        background: #5cabff;
    }

    .dropdown-menu.clicked {
        display: none;
    }

    .dropdown-link {
        display: block;
        width: 100%;
        height: 100%;
        text-decoration: none;
        color: white;
        padding: 16px
    }
`