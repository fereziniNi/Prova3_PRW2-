import mongoose from "mongoose";
const alunoSchema = new mongoose.Schema({
    nome: { type: String,  required: true },
    ra: { type: String },
    nota1: { type: Number },
    nota2: { type: Number }
}, { versionKey: false });


const aluno = mongoose.model("aluno", alunoSchema);
export default aluno;

