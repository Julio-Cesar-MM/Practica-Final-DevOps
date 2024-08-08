const fs = require('fs');

test('Verificar contenido de Hola Mundo', () => {
    const data = fs.readFileSync('index.html', 'utf8');
    expect(data).toContain('<h1>Hola Mundo</h1>');
});
