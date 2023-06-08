import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {
  StyledContainer,
  StyledHeading,
  StyledForm,
  StyledFormGroup,
  StyledInput,
  StyledSubmitButton,
  StyledCancelButton,
} from "./styles";

const EditContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const { id } = useParams();

  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentContact = contacts.find(
    (contact) => contact.id === parseInt(id),
  );

  useEffect(() => {
    if (currentContact) {
      setName(currentContact.name);
      setEmail(currentContact.email);
      setNumber(currentContact.number);
    }
  }, [currentContact]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkEmail = contacts.find(
      (contact) => contact.id !== parseInt(id) && contact.email === email,
    );
    const checkNumber = contacts.find(
      (contact) =>
        contact.id !== parseInt(id) && contact.number === parseInt(number),
    );

    if (!email || !number || !name) {
      return toast.warning("Por favor, preencha todos os campos!");
    }

    if (checkEmail) {
      return toast.error("Este email já existe!");
    }

    if (checkNumber) {
      return toast.error("Este número de telefone já existe!");
    }

    const data = {
      id: parseInt(id),
      name,
      email,
      number,
    };

    dispatch({ type: "UPDATE_CONTACT", payload: data });
    toast.success("Contato atualizado com sucesso!");
    navigate("/");
  };

  return (
    <StyledContainer>
      {currentContact ? (
        <>
          <StyledHeading className="display-3 text-center fw-bold">
            Editar Contato {id}
          </StyledHeading>
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
                  <StyledSubmitButton type="submit" value="Atualizar Contato" />
                  <StyledCancelButton to="/" className="btn btn-danger ms-3">
                    Cancelar
                  </StyledCancelButton>
                </StyledFormGroup>
              </StyledForm>
            </div>
          </div>
        </>
      ) : (
        <StyledHeading className="display-3 my-5 text-center fw-bold">
          O contato com o ID {id} não existe!
        </StyledHeading>
      )}
    </StyledContainer>
  );
};

export default EditContact;
