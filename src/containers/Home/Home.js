import React, { Component } from 'react';
import STRINGS from 'configs/Strings';
import { ContinueButton } from "components/ContinueButton";
import { HomeBanner } from "components/HomeBanner";
import { SubBanner } from "components/SubBanner";
import { Logo } from "components/Logo";
import { Footer } from "components/Footer";

export class Home extends React.Component {
  render() {
    return (
      <div>
        <HomeBanner paragraphs={STRINGS.greeting.paragraphs} />
        <SubBanner
          title="Ops!"
          paragraphs={["Recebemos um grande número de acessos e estamos enfrentando dificuldades técnicas. Esta ferramenta está em fase de testes e vai ser aprimorada. Aguarde um pouquinho que voltamos já!"]}
        />
        <Footer />
      </div>
    );
  }
}
