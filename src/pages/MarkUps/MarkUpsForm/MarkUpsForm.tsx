import React, { Dispatch, SetStateAction, useEffect } from 'react';
import * as S from './style';
import { Input } from '../../../components/form/Input';
import { MarkUpTypes } from '../types/MarkUpTypes';
import { useMarkUps } from '../context/MarkUpContext';

interface FormMarkUpsProps {
  markUp: MarkUpTypes;
  setMarkUp: Dispatch<SetStateAction<MarkUpTypes>>;
  handleSubmit(markUp: MarkUpTypes): void;
}

export const MarkUpsForm = ({ markUp, setMarkUp, handleSubmit }: FormMarkUpsProps) => {
  const { selectedMarkUp, setSelectedMarkUp, setModalNewMarkUp } = useMarkUps();

  useEffect(() => {
    if (!selectedMarkUp) {
      return;
    }

    setMarkUp(selectedMarkUp);
  }, [setMarkUp, selectedMarkUp]);

  function _handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    handleSubmit({ ...markUp });
    handleClose();
  }

  function handleClose() {
    if (selectedMarkUp) {
      setSelectedMarkUp(null);
    }

    setModalNewMarkUp(false);
  }

  return (
    <S.Container>
      <S.Form onSubmit={_handleSubmit}>
        <h1 className="title">Cadastro de Mark Up</h1>
        <div className="form">
          <Input
            type="text"
            label="Descrição do Mark Up"
            name="name"
            placeholder="Descreva o Mark Up"
            value={markUp.name}
            onChange={event =>
              setMarkUp({
                ...markUp,
                name: event.currentTarget.value.toUpperCase(),
              })
            }
          />
          <Input
            type="number"
            label="Impostos"
            name="impostos"
            placeholder="Informe o % de impostos"
            value={markUp.impostos}
            onChange={event =>
              setMarkUp({
                ...markUp,
                impostos: event.currentTarget.value,
              })
            }
          />
          <Input
            type="number"
            label="Comissão"
            name="comissao"
            placeholder="Informe o % de comissão"
            value={markUp.comissao}
            onChange={event =>
              setMarkUp({
                ...markUp,
                comissao: event.currentTarget.value,
              })
            }
          />
          <Input
            type="number"
            label="Administração"
            name="adm"
            placeholder="Informe o % de administração"
            value={markUp.adm}
            onChange={event =>
              setMarkUp({
                ...markUp,
                adm: event.currentTarget.value,
              })
            }
          />
          <Input
            type="number"
            label="Frete"
            name="frete"
            placeholder="Informe o % de frete"
            value={markUp.frete}
            onChange={event =>
              setMarkUp({
                ...markUp,
                frete: event.currentTarget.value,
              })
            }
          />
          <Input
            type="number"
            label="Financeiro"
            name="financeiro"
            placeholder="Informe o % de financeiro"
            value={markUp.financeiro}
            onChange={event =>
              setMarkUp({
                ...markUp,
                financeiro: event.currentTarget.value,
              })
            }
          />
          <Input
            type="number"
            label="Promotores"
            name="promotores"
            placeholder="Informe o % de promotores"
            value={markUp.promotores}
            onChange={event =>
              setMarkUp({
                ...markUp,
                promotores: event.currentTarget.value,
              })
            }
          />
          <Input
            type="number"
            label="Marketing"
            name="marketing"
            placeholder="Informe o % de marketing"
            value={markUp.marketing}
            onChange={event =>
              setMarkUp({
                ...markUp,
                marketing: event.currentTarget.value,
              })
            }
          />
          <Input
            type="number"
            label="Bonificações"
            name="bonificacoes"
            placeholder="Informe o % de bonificações"
            value={markUp.bonificacoes}
            onChange={event =>
              setMarkUp({
                ...markUp,
                bonificacoes: event.currentTarget.value,
              })
            }
          />
          <Input
            type="number"
            label="Lucro"
            name="lucro"
            placeholder="Informe o % de lucro"
            value={markUp.lucro}
            onChange={event =>
              setMarkUp({
                ...markUp,
                lucro: event.currentTarget.value,
              })
            }
          />

          <div className="containerButtons">
            <button className="btn" type="submit">
              Cadastrar Mark Up
            </button>
            <button className="btn" type="button" onClick={handleClose}>
              Cancelar
            </button>
          </div>
        </div>
      </S.Form>
    </S.Container>
  );
};
