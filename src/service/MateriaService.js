
var materias = [
    {
        nome: "Português"
    },
    {
        nome: "Matemática"
    },
    {
        nome: "História"
    },
    {
        nome: "Geografia"
    }
]

exports.list = () => {
    return materias
}
exports.incluir = (materia) => {
    materias.push(materia)
}
exports.excluir = (nomeMateria) => {
    for (index in materias) {
        var materia = materias[index]

        if (materia.nome == nomeMateria) {
            materias.splice(index, 1)
        }
    }
}
exports.editarMateria = (editarMateria) => {
    for (index in materias) {
        var materia = materias[index]

        if (materia.nome == editarMateria) {
            materias.edit(index, 1)
        }
    }
}