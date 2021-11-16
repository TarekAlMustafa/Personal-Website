import { StyledHeader, Nav, Logo } from "./styledComponents/Header.styled"
import { Flex } from './styledComponents/Flex.styled'

export default function Header() {
    return ( 
        <StyledHeader>
            <Nav>
                <Flex>
                    <Logo src='./menu.svg' alt='' />
                    <header>Tarek Al Mustafa</header>
                </Flex>
            </Nav>
        </StyledHeader>
    )
}
