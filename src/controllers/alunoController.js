import aluno from "../models/Aluno.js";

class AlunoController {
    static async listarAlunos(req, res) {
        const listarAlunos = await aluno.find({});
        res.status(202).json(listarAlunos);
    }

    static async cadastrarAluno(req, res) {
        try {
            const novoAluno = await aluno.create(req.body);
            res.status(201).json({ message: "Criado com sucesso.", aluno: novoAluno });
        } catch (erro) {
            // 500 é erro interno do servidor:
            res.status(500).json({ message: `${erro.message} - Falha ao cadastrar aluno.` });
        }
    };

    static async listarAlunoPorId(req, res) {
        try {
            const id = req.params.id;
            const alunoEncontrado = await aluno.findById(id);
            res.status(200).json(alunoEncontrado);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha na requisição do aluno.` });
        }
    };

    static async excluirAluno(req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({ message: "Aluno excluído com sucesso!" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha na exclusão.` });
        };
    };

    static async atualizarAluno(req, res) {
        try {
            const id = req.params.id;
            await aluno.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Aluno atualizado!" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha na atualização.` });
        };
    };

    static async mediasIndividuais(req, res) {
        try {
            const alunos = await aluno.find({}, 'nome nota1 nota2');

            const alunosComMedia = alunos.map(aluno => {
                const media = ((aluno.nota1 || 0) + (aluno.nota2 || 0)) / 2;
                return {
                    nome: aluno.nome,
                    media: media.toFixed(2)
                };
            });

            res.status(200).json(alunosComMedia);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha ao listar médias.` });
        }
    }

    static async mediaPorId(req, res) {
        try {
            const id = req.params.id;
            const alunoEncontrado = await aluno.findById(id, 'nome nota1 nota2');

            if (!alunoEncontrado) {
                return res.status(404).json({ message: "Aluno não encontrado." });
            }

            const media = ((alunoEncontrado.nota1 || 0) + (alunoEncontrado.nota2 || 0)) / 2;

            res.status(200).json({
                nome: alunoEncontrado.nome,
                nota1: alunoEncontrado.nota1,
                nota2: alunoEncontrado.nota2,
                media: media.toFixed(2)
            });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha ao calcular média do aluno.` });
        }
    }

    static async aprovados(req, res) {
        try {
            const alunos = await aluno.find({}, 'nome nota1 nota2');

            const alunosComSituacao = alunos.map(aluno => {
                const media = ((aluno.nota1 || 0) + (aluno.nota2 || 0)) / 2;
                return {
                    nome: aluno.nome,
                    situacao: media > 6 ? "aprovado" : "reprovado"
                };
            });

            alunosComSituacao.sort((a, b) => {
                if (a.situacao === b.situacao) return 0;
                if (a.situacao === "aprovado") return -1;
                return 1;
            });

            res.status(200).json(alunosComSituacao);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha ao listar alunos.` });
        }
    }




}

export default AlunoController;