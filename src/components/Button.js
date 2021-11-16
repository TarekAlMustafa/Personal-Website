import React from 'react'
import { Link } from 'react-router-dom'
import { StyledButton } from './styledComponents/Button.styled'

export function Button() {
    return(
        <StyledButton>
            <Link to='sign-up'>
                <button className='btn'>Sign Up</button>
            </Link>
        </StyledButton>
    )
}