const fs = require('fs');

let text = fs.readFileSync('js/cracha.js', 'utf-8');

// The replacement mapping
// It covers +, ?, , and other mangled patterns found
const reps = {
    'Crach+?': 'Crachá',
    'Crach': 'Crachá',
    'Crachs': 'Crachás',
    'crach+?s': 'crachás',
    'CRACH+?(S)?': 'CRACHÁ(S)',
    'Matr+cula': 'Matrícula',
    'Matrcula': 'Matrícula',
    'Pr+?-visualiza+?+?o': 'Pré-visualização',
    'PR+-VISUALIZA++O': 'PRÉ-VISUALIZAÇÃO',
    'impress+?o': 'impressão',
    'impresso': 'impressão',
    'vers+?o': 'versão',
    'verso': 'versão',
    'A+?+?es': 'Ações',
    'A++es': 'Ações',
    '+?rea': 'Área',
    '+rea': 'Área',
    'Padr+?o': 'Padrão',
    'Padro': 'Padrão',
    'Ol': 'Olá',
    'N+?o': 'Não',
    'N+o': 'Não',
    'configura+?o': 'configuração',
    'configurao': 'configuração',
    'Pre+?o': 'Preço',
    'Pre+o': 'Preço',
    'cont+?m': 'contém',
    'cont+m': 'contém',
    'voc+?': 'você',
    'voc+': 'você',
    'Ser+?o': 'Serão',
    'Ser+o': 'Serão',
    '+?': 'é',
    '+': 'é',
    'Cracha': 'Crachá'
};

for (const [k, v] of Object.entries(reps)) {
    text = text.split(k).join(v);
}

// Special fixes for things that might have been hit by +? replacement incorrectly
text = text.split('érea').join('Área');
text = text.split('Padréo').join('Padrão');

// Fix openEditor if it's missing window.layoutEditorModule
text = text.split('onclick=\"selfserviceModule.openEditor').join('onclick=\"window.layoutEditorModule.openEditor');

fs.writeFileSync('js/cracha.js', text, 'utf-8');
