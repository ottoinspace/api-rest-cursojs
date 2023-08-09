import Aluno from '../models/Alunos';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Otto',
      sobrenome: 'Pine',
      email: 'arifin@gmail.com',
      idade: 35,
      peso: 98.4,
      altura: 1.7,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
