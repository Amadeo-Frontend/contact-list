import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  StyledContainer,
  StyledTitle,
  StyledForm,
  StyledFormGroup,
  StyledInput,
  StyledSubmitButton,
  StyledButtonWrap,
} from "./styles";

const AddContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkEmail = contacts.find(
      (contact) => contact.email === email && email,
    );
    const checkNumber = contacts.find(
      (contact) => contact.number === parseInt(number) && number,
    );

    if (!email || !number || !name) {
      return toast.warning("Por favor, preencha todos os campos!");
    }

    if (checkEmail) {
      return toast.error("Este email já existe!");
    }

    if (checkNumber) {
      return toast.error("Este número já existe!");
    }

    const data = {
      id: contacts[contacts.length - 1].id + 1,
      name,
      email,
      number,
    };

    dispatch({ type: "ADD_CONTACT", payload: data });
    toast.success("Contato adicionado com sucesso!");
    navigate("/");
  };

  return (
    <StyledContainer>
      <StyledTitle>Adicionar contato</StyledTitle>
      <div className="row">
        <div className="col-md-6 shadow mx-auto p-5">
          <StyledForm onSubmit={handleSubmit}>
            <StyledFormGroup>
              <StyledInput
                type="text"
                placeholder="Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </StyledFormGroup>
            <StyledFormGroup>
              <StyledInput
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </StyledFormGroup>
            <StyledFormGroup>
              <StyledInput
                type="number"
                placeholder="Número de Telefone"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </StyledFormGroup>
            <StyledFormGroup>
              <StyledButtonWrap>
                <StyledSubmitButton type="submit" value="Adicionar Contato" />
              </StyledButtonWrap>
            </StyledFormGroup>
          </StyledForm>
        </div>
      </div>
    </StyledContainer>
  );
};

export default AddContact;
