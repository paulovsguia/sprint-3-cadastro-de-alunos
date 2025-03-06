const FIRST_NAME_INPUT = document.getElementById("first-name"),
LAST_NAME_INPUT = document.getElementById("last-name"),
CLASS_INPUT = document.getElementById("class"),
GRADE1_INPUT = document.getElementById("grade1"),
GRADE2_INPUT = document.getElementById("grade2"),
REGISTER_BTN = document.getElementById("register"),
TABLE_BODY = document.getElementById("table-body"),
CADASTRADOS_SPAN = document.getElementById('cadastrados'),
APROVADOS_SPAN = document.getElementById('aprovados'),
 REPROVADOS_SPAN = document.getElementById('reprovados');

let alunos= [],
    aprovados = 0,
    reprovados = 0;

REGISTER_BTN.addEventListener('click', () =>{
    TABLE_BODY.innerHTML = '';

    let studentName = `${FIRST_NAME_INPUT.value} ${LAST_NAME_INPUT.value}`,
    studentClass = CLASS_INPUT.value,
    studentGrade1 = parseFloat(GRADE1_INPUT.value) ,
    studentGrade2 = parseFloat(GRADE2_INPUT.value) ,
    studentAvg = (studentGrade1 + studentGrade2) / 2,
    studentSituation = studentAvg >= 7 ? "Aprovado" : "Reprovado";

    if (isNaN(studentGrade1) || isNaN(studentGrade2) || studentGrade1 < 0 || studentGrade1 > 10 || studentGrade2 < 0 || studentGrade2 > 10) {
        alert("As notas devem ser entre 0 e 10.");
        return;
    }

    let aluno = {
        nome: studentName,
        classe: studentClass,
        nota1: studentGrade1,
        nota2: studentGrade2,
        media: studentAvg,
        situacao: studentSituation
    }

    alunos.push(aluno)

    if (studentSituation === 'Aprovado') {
        aprovados = aprovados + 1;
      } else {
        reprovados = reprovados + 1;
      }

    alunos.forEach((aluno) =>{
        TABLE_BODY.innerHTML = TABLE_BODY.innerHTML +`
        <div class="flex bg-gray-300">
            <div class="w-50 border text-center text-slate-500">${aluno.nome}</div>
            <div class="w-25 border text-center text-slate-500">${aluno.classe}</div>
            <div class="w-25 border text-center text-slate-500">${aluno.nota1}</div>
            <div class="w-25 border text-center text-slate-500">${aluno.nota2}</div>
            <div class="w-25 border text-center text-slate-500">${aluno.media}</div>
            <div class="w-25 border text-center text-slate-500">${aluno.situacao}</div>
        </div>
        `;
    })

    CADASTRADOS_SPAN.innerHTML = alunos.length;
    APROVADOS_SPAN.innerHTML = aprovados;
    REPROVADOS_SPAN.innerHTML = reprovados;
})