import { Link } from '@chakra-ui/react'
import { AiFillLinkedin } from 'react-icons/ai'
import { BsGithub } from 'react-icons/bs'

import * as S from './styles'

export const Footer = () => {
  return (
    <S.Container>
      2023 JSM Headphones All rights reserverd
      <S.IconsBox>
        <Link href="https://github.com/JeanVictorMachado" isExternal>
          <BsGithub size={24} />
        </Link>

        <Link href="https://www.linkedin.com/in/jean-machado-full-stack/" isExternal>
          <AiFillLinkedin size={28} />
        </Link>
      </S.IconsBox>
    </S.Container>
  )
}
