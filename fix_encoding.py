import json

with open('js/cracha.js', 'r', encoding='utf-8') as f:
    text = f.read()

replacements = {
    'Crach+?': 'Crachá',
    'Crach?': 'Crachá',
    'Crach': 'Crachá',
    'Matr+cula': 'Matrícula',
    'Matr+cula': 'Matrícula',
    'Matr?cula': 'Matrícula',
    'PR+-VISUALIZA+O': 'PRÉ-VISUALIZAÇÃO',
    'PR?-VISUALIZA?O': 'PRÉ-VISUALIZAÇÃO',
    'Pr+?-visualiza+?+?o': 'Pré-visualização',
    'impress+?o': 'impressão',
    'impress?o': 'impressão',
    'vers+?o': 'versão',
    'vers?o': 'versão',
    'A+?+?es': 'Ações',
    'A+?es': 'Ações',
    'A?es': 'Ações',
    '+?rea': 'Área',
    'Padr+?o': 'Padrão',
    'Padr?o': 'Padrão',
    'Ol&aacute;': 'Olá',
    'Ol?': 'Olá',
    'N+?o': 'Não',
    'N?o': 'Não',
    'N&atilde;o': 'Não',
    'configura+?o': 'configuração',
    'configura?o': 'configuração',
    'Pre+?o': 'Preço',
    'Pre?o': 'Preço',
    '&aacute;': 'á',
    '&ccedil;': 'ç',
    '&atilde;': 'ã',
    'Crach&aacute;': 'Crachá'
}

for k, v in replacements.items():
    text = text.replace(k, v)

with open('js/cracha.js', 'w', encoding='utf-8') as f:
    f.write(text)
