const oracledb = require('oracledb');

// Configuración de la conexión
const dbConfig = {
    user: 'nombre_de_usuario',
    password: 'contraseña',
    connectString: 'direccion_ip/servicio'
};

// Función para conectar y ejecutar una consulta
async function runQuery() {
    let connection;

    try {
        // Conectar a la base de datos
        connection = await oracledb.getConnection(dbConfig);

        // Ejecutar una consulta
        const result = await connection.execute('SELECT * FROM tabla');

        console.log(result.rows); // Imprimir los resultados
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
