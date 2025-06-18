import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const admins = [];

class AdminController {
  static async register(req, res) {
    try {
      const { nome, senha } = req.body;
      const hashedPassword = await bcrypt.hash(senha, 10);

      admins.push({ nome, password: hashedPassword });

      console.log(admins);
      res.status(201).send('Usuário registrado com sucesso!');
    } catch (error) {
      res.status(500).json({ message: `Erro ao cadastrar: ${error.message}` });
    }
  }

  static async login(req, res) {
    try {
      const { nome, senha } = req.body;

      // Procurar admin pelo nome:
      const admin = admins.find(user => user.nome === nome);

      // Se não encontrou ou senha inválida:
      if (!admin || !(await bcrypt.compare(senha, admin.password))) { // Use admin.password
        return res.status(401).send('Nome de usuário ou senha inválidos.');
      }

      // Gerar token JWT
      const token = jwt.sign({ id: admin.nome }, process.env.JWT_SECRET, { expiresIn: '1h' }); // ID único para o token

      res.status(200).json({ message: 'Login bem-sucedido!', token });
    } catch (error) {
      res.status(500).json({ message: `Erro ao fazer login: ${error.message}` });
    }
  }
}

export default AdminController;