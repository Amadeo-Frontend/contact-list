import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  StyledContainer,
  StyledAddButton,
  StyledTable,
  StyledTableHeader,
  StyledTableData,
  StyledEditButton,
  StyledDeleteButton,
  StyledTabletr,
} from "./styles";

const Home = () => {
  const contacts = useSelector((state) => state);

  const dispatch = useDispatch();

  const deleteContact = (id) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
    toast.success("Contato excluído com sucesso!");
  };

  return (
    <StyledContainer className="container-fluid">
      <div className="row">
        <div className="col-md-7 my-5 text-end">
          <StyledAddButton to="/add">
            <img src="/icons8-add-94.png" alt="icone" width={40} height={40} />
            Adicionar contato
          </StyledAddButton>
        </div>
        <div className="col-md-10 mx-auto">
          <StyledTable className="table table-striped">
            <StyledTableHeader>
              <StyledTabletr className="table-dark">
                <th scope="col">#</th>
                <th scope="col">Nome</th>
                <th scope="col">Email</th>
                <th scope="col">Telefone</th>
                <th scope="col">Ações</th>
              </StyledTabletr>
            </StyledTableHeader>
            <tbody>
              {contacts.map((contact, id) => (
                <tr key={id}>
                  <StyledTableData>{id + 1}</StyledTableData>
                  <StyledTableData>{contact.name}</StyledTableData>
                  <StyledTableData>{contact.email}</StyledTableData>
                  <StyledTableData>{contact.number}</StyledTableData>
                  <StyledTableData>
                    <StyledEditButton to={`/edit/${contact.id}`}>
                      Editar
                    </StyledEditButton>
                    <StyledDeleteButton
                      type="button"
                      onClick={() => deleteContact(contact.id)}
                    >
                      Excluir
                    </StyledDeleteButton>
                  </StyledTableData>
                </tr>
              ))}
            </tbody>
          </StyledTable>
        </div>
      </div>
    </StyledContainer>
  );
};

export default Home;
