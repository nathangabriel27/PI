import React, { Component } from "react";

import {
  Container,
  TypeTitle,
  TypeDescription,
  TypeImage,
  RequestButton,
  RequestButtonText
} from "./styles";

export default class Details extends Component {
  render() {
    return (
      <Container>
        <TypeTitle>PRODUTOS</TypeTitle>
        <TypeDescription>A ideia é apresentar os produtos cadastrados pelo usuário.</TypeDescription>

        <RequestButton onPress={() => {}}>
          <RequestButtonText>DATA E HORARIO ESTIMADO</RequestButtonText>
        </RequestButton>
      </Container>
    );
  }
}
