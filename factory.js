// Definindo a interface do Factory Method
class Pessoa {
    constructor(nome) {
      this.nome = nome;
    }
    getRelacao() {}
  }
  
  // Implementando as classes para cada tipo de pessoa
  class Aluno extends Pessoa {
    getRelacao() {
      return `${this.nome} tem relação com a instituição como aluno`;
    }
  }
  
  class Professor extends Pessoa {
    getRelacao() {
      return `${this.nome} tem relação com a instituição como professor`;
    }
  }
  
  class Coordenador extends Pessoa {
    getRelacao() {
      return `${this.nome} tem relação com a instituição como coordenador`;
    }
  }
  
  class Diretor extends Pessoa {
    getRelacao() {
      return `${this.nome} tem relação com a instituição como diretor`;
    }
  }
  
  class Administrativo extends Pessoa {
    getRelacao() {
      return `${this.nome} tem relação com a instituição como administrativo`;
    }
  }
  
  class Vestibulando extends Pessoa {
    getRelacao() {
      return `${this.nome} tem relação com a instituição como vestibulando`;
    }
  }
  
  // Factory Method que retorna a instância da classe correta de acordo com a relação informada
  function getPessoa(nome, relacao) {
    switch (relacao.toLowerCase()) {
      case "aluno":
        return new Aluno(nome);
      case "professor":
        return new Professor(nome);
      case "coordenador":
        return new Coordenador(nome);
      case "diretor":
        return new Diretor(nome);
      case "administrativo":
        return new Administrativo(nome);
      case "vestibulando":
        return new Vestibulando(nome);
      default:
        return null;
    }
  }
  
  // Loop para reiniciar o programa até o usuário digitar "Q" para sair
  let continuar = true;
  while (continuar) {
    const nome = prompt("Entre com o seu nome ou digite 'Q' para sair:");
    if (nome === null) {
      continuar = false;
      break;
    }
    if (nome === "q") {
        continuar = true;
        break;
    }
    const relacao = prompt("Qual a sua relação com a FATEC:");
    if (relacao === null) {
      continuar = false;
      break;
    }
    const pessoa = getPessoa(nome, relacao);
    if (pessoa === null) {
      alert(`${nome} não tem nenhuma relação com a instituição, acompanhar até a secretaria`);
    } else {
      alert(pessoa.getRelacao());
    }
  }