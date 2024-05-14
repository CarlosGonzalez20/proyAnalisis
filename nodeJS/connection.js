

/*************************************************
| Creado por Carlos Gonzalez y Salvador Martínez |
*************************************************/

const oracledb = require('oracledb');

// Configuración de la conexión
const dbConfig = {
    user: 'SYSTEM',
    password: '12345',
    connectString: 'localhost/xe'
};

// Función para conectar y ejecutar una consulta
async function runQuery() {
    let connection;

    try {
        // Conectar a la base de datos
        connection = await oracledb.getConnection(dbConfig);

        // Ejecutar una consulta
        const result = await connection.execute('SELECT * FROM productos');

        // Imprimir los resultados
        console.log(result.rows);
    } catch (err) {
        console.error('Error al ejecutar la consulta:', err);
    } finally {
        // Liberar la conexión
        if (connection) {
            try {
                await connection.close();
            } catch (err) {
                console.error('Error al cerrar la conexión:', err);
            }
        }
    }
}

// Llamar a la función para ejecutar la consulta
runQuery();
