import * as S from './style';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

export const Footer = () => {
  return (
    <S.Footer>
      <S.Ul>
        <S.Li>
          <S.Link href="https://www.facebook.com/sigasaofrancisco" target="blank">
            <FaFacebook />
          </S.Link>
        </S.Li>

        <S.Li>
          <S.Link href="https://www.instagram.com/sigasaofrancisco/" target="blank">
            <FaInstagram />
          </S.Link>
        </S.Li>
      </S.Ul>
      <S.P>
        <S.Span>Custos São Francisco</S.Span> &copy; 2023
      </S.P>
    </S.Footer>
  );
};
