# Modulo4_ETH_Kipu_SimpleSwap
Una aplicación web simple para interactuar con un contrato de intercambio de tokens ERC-20 desplegado en la blockchain. Desarrollado con HTML, CSS y JavaScript puro usando Ethers.js y Metamask.. Incluye también el archivo test del contrato en hardat

# 🌀 SimpleSwap DApp

Una aplicación web simple (sin frameworks como React) para interactuar con un contrato de intercambio de tokens ERC-20 desplegado en la blockchain. Desarrollado con HTML, CSS y JavaScript puro usando Ethers.js y Metamask.

---

## 🌐 Descripción

Este proyecto permite a los usuarios:

- Conectarse con Metamask
- Visualizar sus balances de dos tokens personalizados (Token A y Token B)
- Realizar swaps de tokens usando un contrato `SimpleSwap`
- Ver precios actuales de intercambio
- Hacer `mint` de ambos tokens directamente desde la interfaz

Es ideal para probar un entorno de intercambio descentralizado simple con contratos personalizados.

---

## 📁 Estructura del Proyecto

/SimpleSwap-Frontend
│
├── index.html # Interfaz principal
├── styles.css # Estilos visuales del swap
├── scripts.js # Lógica principal con interacción Web3

---

## ⚙️ Tecnologías Usadas

- HTML5 / CSS3 / JavaScript
- [Ethers.js](https://docs.ethers.io/)
- Metamask
- Contrato `SimpleSwap` en Solidity (fuera de este repo)

---

## 🔧 Requisitos Previos

- Tener [Metamask](https://metamask.io/) instalado y conectado a la red correspondiente (donde estén desplegados los contratos).
- Servir los archivos con un servidor local para evitar restricciones del navegador al usar Ethers.js y Web3.

---

## 🚀 Instrucciones de Uso

1. Clonar o descargar este repositorio.
2. Abrir una terminal y navegar a la carpeta del proyecto.
3. Correr un servidor local. Ejemplos:

   Con **Python 3**:
   ```bash
   python -m http.server
Con Node.js (si tenés http-server):

bash
Copiar
Editar
npx http-server .
Abrir el navegador en http://localhost:8000 o la URL que indique el servidor.

Presionar el botón Conectar para vincular tu cuenta de Metamask.

Ya podés:

Hacer mint de tokens

Ingresar una cantidad de Token A

Obtener una estimación de cuántos Token B recibirás

Aprobar el uso de tokens

Ejecutar el swap

🧪 Contratos Usados
El frontend está configurado para interactuar con los siguientes contratos en la red:

SimpleSwap: 0xE252eBc212d6ebe1ed9b38acd806532707e2e7Ca

TokenA: 0x0197Ab9c2E0D54F2CA2DCf9D198c871d2F6231e8

TokenB: 0x04C5B3A9e244F9431bFF6D975E4c4c692843f987

Las ABIs están embebidas directamente dentro de scripts.js.

🧪 Test Manual
Podés testear localmente:

Cambiando los valores de mint para Token A y B

Realizando swaps pequeños (ej.: 1, 10, 100)

Verificando cambios en balances y precio luego de cada operación

Probando casos inválidos (saldo insuficiente, valores negativos, etc.)

🧪 Test Automatizados con Hardhat
Se desarrollaron tests automáticos en Hardhat usando SimpleSwapTest.js para validar la funcionalidad del contrato SimpleSwap. Los tests cubren:

Despliegue y mint de tokens: Se verifica que los tokens se despliegan correctamente y que se puede hacer mint a usuarios.

Consulta de reservas y liquidez: Validación inicial de las reservas y la liquidez total del contrato.

Agregar y remover liquidez: Tests que aseguran que la función addLiquidity actualiza correctamente reservas y liquidez, y que removeLiquidity devuelve los tokens y reduce las reservas adecuadamente.

Cálculo de precios y salida: Se valida que getPrice y getAmountOut funcionen según lo esperado y que se manejen errores en casos inválidos.

Swaps de tokens: Pruebas para asegurar que swapExactTokensForTokens intercambia tokens correctamente y que emite el evento TokensSwapped con valores válidos.

Reversiones y validaciones: Se testean casos donde la transacción debe revertir, por ejemplo, si la liquidez es insuficiente, si el deadline está expirado, o si los tokens de entrada o salida no son válidos.

Eventos: Validación de que los eventos LiquidityAdded, LiquidityRemoved y TokensSwapped se emitan con los valores correctos.

Cómo correr los tests
Clonar el repositorio del contrato y los tests.

Instalar dependencias con:

bash
Copiar
Editar
npm install
Ejecutar los tests con:

bash
Copiar
Editar
npx hardhat test
Revisar la salida para verificar que todos los tests pasen correctamente.

📸 Captura de Pantalla
Podés agregar una captura de tu interfaz funcionando aquí si deseás.

📜 Licencia
Este proyecto es de uso libre con fines educativos y de prueba. No se recomienda para uso en mainnet sin auditorías.

🙌 Créditos
Hecho por [Tu Nombre] como parte de un proyecto de aprendizaje Web3. ¡Gracias por visitar!
