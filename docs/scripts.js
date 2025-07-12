const simpleSwapAddress = "0x57B8085092473392983D8f311903814ecd1ada62";
const tokenAAddress = "0xA142c536A58dc69584C1e345BfAD8c753c2a54C4";
const tokenBAddress = "0x5EBedce1861165D427BEa9D0fc27F99Aa8cD4284";

const tokenAAbi = [ { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [ { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "allowance", "type": "uint256" }, { "internalType": "uint256", "name": "needed", "type": "uint256" } ], "name": "ERC20InsufficientAllowance", "type": "error" }, { "inputs": [ { "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "uint256", "name": "balance", "type": "uint256" }, { "internalType": "uint256", "name": "needed", "type": "uint256" } ], "name": "ERC20InsufficientBalance", "type": "error" }, { "inputs": [ { "internalType": "address", "name": "approver", "type": "address" } ], "name": "ERC20InvalidApprover", "type": "error" }, { "inputs": [ { "internalType": "address", "name": "receiver", "type": "address" } ], "name": "ERC20InvalidReceiver", "type": "error" }, { "inputs": [ { "internalType": "address", "name": "sender", "type": "address" } ], "name": "ERC20InvalidSender", "type": "error" }, { "inputs": [ { "internalType": "address", "name": "spender", "type": "address" } ], "name": "ERC20InvalidSpender", "type": "error" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" } ], "name": "allowance", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "approve", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" } ], "name": "balanceOf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [ { "internalType": "uint8", "name": "", "type": "uint8" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "mint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "transfer", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "transferFrom", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" } ];
const tokenBAbi = [ { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [ { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "allowance", "type": "uint256" }, { "internalType": "uint256", "name": "needed", "type": "uint256" } ], "name": "ERC20InsufficientAllowance", "type": "error" }, { "inputs": [ { "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "uint256", "name": "balance", "type": "uint256" }, { "internalType": "uint256", "name": "needed", "type": "uint256" } ], "name": "ERC20InsufficientBalance", "type": "error" }, { "inputs": [ { "internalType": "address", "name": "approver", "type": "address" } ], "name": "ERC20InvalidApprover", "type": "error" }, { "inputs": [ { "internalType": "address", "name": "receiver", "type": "address" } ], "name": "ERC20InvalidReceiver", "type": "error" }, { "inputs": [ { "internalType": "address", "name": "sender", "type": "address" } ], "name": "ERC20InvalidSender", "type": "error" }, { "inputs": [ { "internalType": "address", "name": "spender", "type": "address" } ], "name": "ERC20InvalidSpender", "type": "error" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" } ], "name": "allowance", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "approve", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" } ], "name": "balanceOf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [ { "internalType": "uint8", "name": "", "type": "uint8" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "mint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "transfer", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "transferFrom", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" } ];

const abiSS = [ { "inputs": [ { "internalType": "address", "name": "_tokenA", "type": "address" }, { "internalType": "address", "name": "_tokenB", "type": "address" } ], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "provider", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amountA", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amountB", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "liquidityMinted", "type": "uint256" } ], "name": "LiquidityAdded", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "provider", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amountA", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amountB", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "liquidityBurned", "type": "uint256" } ], "name": "LiquidityRemoved", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "swapper", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amountIn", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amountOut", "type": "uint256" }, { "indexed": false, "internalType": "address", "name": "tokenIn", "type": "address" }, { "indexed": false, "internalType": "address", "name": "tokenOut", "type": "address" } ], "name": "TokensSwapped", "type": "event" }, { "inputs": [ { "internalType": "address", "name": "addTokenA", "type": "address" }, { "internalType": "address", "name": "addTokenB", "type": "address" }, { "internalType": "uint256", "name": "amountADesired", "type": "uint256" }, { "internalType": "uint256", "name": "amountBDesired", "type": "uint256" }, { "internalType": "uint256", "name": "amountAMin", "type": "uint256" }, { "internalType": "uint256", "name": "amountBMin", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" } ], "name": "addLiquidity", "outputs": [ { "internalType": "uint256", "name": "amountA", "type": "uint256" }, { "internalType": "uint256", "name": "amountB", "type": "uint256" }, { "internalType": "uint256", "name": "liquidity", "type": "uint256" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "amountIn", "type": "uint256" }, { "internalType": "uint256", "name": "amountA", "type": "uint256" }, { "internalType": "uint256", "name": "amountB", "type": "uint256" } ], "name": "getAmountOut", "outputs": [ { "internalType": "uint256", "name": "amountOut", "type": "uint256" } ], "stateMutability": "pure", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_tokenA", "type": "address" }, { "internalType": "address", "name": "_tokenB", "type": "address" } ], "name": "getPrice", "outputs": [ { "internalType": "uint256", "name": "price", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "liquidityBalance", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "addTokenA", "type": "address" }, { "internalType": "address", "name": "addTokenB", "type": "address" }, { "internalType": "uint256", "name": "liquidity", "type": "uint256" }, { "internalType": "uint256", "name": "amountAMin", "type": "uint256" }, { "internalType": "uint256", "name": "amountBMin", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" } ], "name": "removeLiquidity", "outputs": [ { "internalType": "uint256", "name": "amountA", "type": "uint256" }, { "internalType": "uint256", "name": "amountB", "type": "uint256" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "reserveA", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "reserveB", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "amountIn", "type": "uint256" }, { "internalType": "uint256", "name": "amountOutMin", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" } ], "name": "swapExactTokensForTokens", "outputs": [ { "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "tokenA", "outputs": [ { "internalType": "contract IERC20", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "tokenB", "outputs": [ { "internalType": "contract IERC20", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalLiquidity", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" } ];

let provider, signer, userAddress, simpleSwap, tokenA, tokenB;
let currentPrice = 0;

async function connect() {
    try {
        alert("Connecting...");
        if (typeof window.ethereum !== "undefined") {
            await window.ethereum.request({ method: "eth_requestAccounts" });

            provider = new ethers.providers.Web3Provider(window.ethereum);
            signer = provider.getSigner();
            userAddress = await signer.getAddress();
            document.getElementById("account").innerText = userAddress;

            tokenA = new ethers.Contract(tokenAAddress, tokenAAbi, signer);
            tokenB = new ethers.Contract(tokenBAddress, tokenBAbi, signer);
            simpleSwap = new ethers.Contract(simpleSwapAddress, abiSS, signer);


            const reserveA = await simpleSwap.reserveA();
            const reserveB = await simpleSwap.reserveB();
            console.log(" Reservas A: " + reserveA);
            console.log(" Reservas B: " + reserveB);




            await fetchBalances();
            await getPrice();

            // Activar inputs y botones de mint
            document.getElementById("mintAmountA").disabled = false;
            document.getElementById("mintAmountB").disabled = false;
            document.getElementById("mintButtonA").disabled = false;
            document.getElementById("mintButtonB").disabled = false;
        } else {
            alert("❌ No se detectó Metamask");
        }
    } catch (err) {
        alert("❌ Error conectando Metamask");

        // En caso de fallo, asegurarse que sigan deshabilitados
        document.getElementById("mintAmountA").disabled = true;
        document.getElementById("mintAmountB").disabled = true;
        document.getElementById("mintButtonA").disabled = true;
        document.getElementById("mintButtonB").disabled = true;

        console.error(err);
    }
}

async function fetchBalances() {
    const balanceA = await tokenA.balanceOf(userAddress);
    const balanceB = await tokenB.balanceOf(userAddress);

    document.getElementById("balanceA").innerText = balanceA.toString();
    document.getElementById("balanceB").innerText = balanceB.toString();
}

async function getPrice() {

    const precio = await simpleSwap.getPrice(tokenAAddress, tokenBAddress);

    currentPrice = ethers.utils.formatUnits(precio, 18);

    document.getElementById("precio").innerText = currentPrice;
}

async function setValueTokenToSpend() {
    try {
        const input = document.querySelector('.IHAVE').value;
        const outputInput = document.querySelector('.IWANT');

        if (!input || !/^\d*\.?\d*$/.test(input) || parseFloat(input) <= 0) {
            outputInput.value = "";
            return;
        }

        const parsedAmount = ethers.BigNumber.from(input);
        const reserveA = await simpleSwap.reserveA();
        const reserveB = await simpleSwap.reserveB();

        if (reserveA.isZero() || reserveB.isZero()) {
            outputInput.value = "Sin liquidez";
            return;
        }


        const outEstimate = await simpleSwap.getAmountOut(parsedAmount, reserveA, reserveB);
        outputInput.value = outEstimate.toString();

        await updateSwapButton();

    } catch (err) {
        console.error("Error al calcular el output:", err);
        document.querySelector('.IWANT').value = "Error";
    }
}

async function handleApproveOrSwap() {
    const input = document.querySelector('.IHAVE').value;
    const button = document.getElementById("swap-submit");

    if (!input || !/^\d*\.?\d*$/.test(input) || parseFloat(input) <= 0) {
        alert("❌ Ingresá una cantidad válida antes de continuar");
        return;
    }

    try {

        const parsedAmount = ethers.BigNumber.from(input);
        const allowance = await tokenA.allowance(userAddress, simpleSwapAddress);

        button.disabled = true;
        showSpinner();

        if (allowance.lt(parsedAmount)) {
            const tx = await tokenA.approve(simpleSwapAddress, parsedAmount);
            await tx.wait();
            alert(`✅ Token aprobado\n📄 Tx Hash: ${tx.hash}`);
        } else {
            const path = [tokenAAddress, tokenBAddress];
            const deadline = Math.floor(Date.now() / 1000) + 600;

            const tx = await simpleSwap.swapExactTokensForTokens(
                parsedAmount,
                0,
                path,
                userAddress,
                deadline
            );
            const receipt = await tx.wait();

            const event = receipt.events.find((e) => e.event === "TokensSwapped");

            if (event && event.args) {
                const { swapper, amountIn, amountOut, tokenIn, tokenOut } = event.args;

                const formattedIn = amountIn.toString();
                const formattedOut = amountOut.toString();

                alert(
                    `✅ Swap realizado con éxito\n📄 Tx Hash: ${tx.hash}\n\n` +
                    `👤 Swapper: ${swapper}\n` +
                    `💸 Cantidad enviada: ${formattedIn}\n` +
                    `💰 Cantidad recibida: ${formattedOut}\n` +
                    `🔁 From: ${tokenIn}\n` +
                    `➡️ To: ${tokenOut}`
                );
            } else {
                alert(`✅ Swap realizado con éxito\n📄 Tx Hash: ${tx.hash}\nℹ️ (No se encontró el evento en logs)`);
            }

            document.querySelector('.IHAVE').value = "";
            document.querySelector('.IWANT').value = "";

            await fetchBalances();
            await getPrice();
        }
    } catch (err) {
        console.error("❌ Error en approve o swap:", err);
        alert("❌ Error en la operación");
    } finally {
        hideSpinner();
        button.disabled = false;
        await updateSwapButton();
    }
}

async function updateSwapButton() {

    const inputAmount = document.querySelector('.IHAVE').value.trim();
    const button = document.getElementById("swap-submit");

    if (!inputAmount || !/^\d*\.?\d*$/.test(inputAmount) || parseFloat(inputAmount) <= 0) {
        button.innerText = "Swap";
        button.disabled = true;
        return;
    }

    const parsedAmount = ethers.BigNumber.from(inputAmount);
    const allowance = await tokenA.allowance(userAddress, simpleSwapAddress);
    const balance = await tokenA.balanceOf(userAddress);
    const reserveA = await simpleSwap.reserveA();

    if (parsedAmount.lte(0)) {
        button.innerText = "Swap";
        button.disabled = true;
    } else if (balance.lt(parsedAmount)) {
        button.innerText = "Saldo insuficiente";
        button.disabled = true;
    } else if (reserveA.lt(parsedAmount)) {
        button.innerText = "Liquidez insuficiente";
        button.disabled = true;
    } else if (allowance.gte(parsedAmount)) {
        button.innerText = "Swap";
        button.disabled = false;
    } else {
        button.innerText = "Approve";
        button.disabled = false;
    }
}

async function mintTokenA() {
    try {
        const input = document.getElementById("mintAmountA").value;
        const amount = parseInt(input);
        if (isNaN(amount) || amount <= 0) {
            alert("❌ Ingresá una cantidad válida para Token A");
            return;
        }

        const tx = await tokenA.mint(userAddress, amount);
        showSpinner();

        await tx.wait();
        alert(`✅ Minted ${amount} Token A\n📄 Tx Hash: ${tx.hash}`);

        hideSpinner();

        document.getElementById("mintAmountA").value = "0";
        await fetchBalances();
    } catch (err) {
        hideSpinner();
        console.error(err);
        alert("❌ Error minting Token A");
    }
}

async function mintTokenB() {
    try {
        const input = document.getElementById("mintAmountB").value;
        const amount = parseInt(input);
        if (isNaN(amount) || amount <= 0) {
            alert("❌ Ingresá una cantidad válida para Token B");
            return;
        }

        const tx = await tokenB.mint(userAddress, amount);
        showSpinner();

        await tx.wait();
        alert(`✅ Minted ${amount} Token B\n📄 Tx Hash: ${tx.hash}`);

        hideSpinner();

        document.getElementById("mintAmountB").value = "0";
        await fetchBalances();
    } catch (err) {
        hideSpinner();
        console.error(err);
        alert("❌ Error minting Token B");
    }
}

function showSpinner() {
    document.getElementById("spinner").style.display = "block";
}

function hideSpinner() {
    document.getElementById("spinner").style.display = "none";
}