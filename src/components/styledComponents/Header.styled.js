import styled from 'styled-components'

export const StyledHeader = styled.header`
    color: ${({ theme }) => theme.colors.header};
    background-color:  ${({ theme }) => theme.colors.headerBackground};
    padding 0 5px;
    margin: 0px;

    &:hover {
        background-color: ${({ theme }) => theme.colors.hover}
    }
`

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom 40px;
`

export const Logo = styled.img``