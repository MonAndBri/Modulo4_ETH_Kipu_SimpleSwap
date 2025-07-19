🌀 SimpleSwap DApp – Modulo4_ETH_Kipu_SimpleSwap
A simple web application to interact with an ERC-20 token swap contract deployed on Sepolia blockchain (Ethereum testnet). Built using plain HTML, CSS, and JavaScript with Ethers.js and MetaMask.
Includes automated smart contract unit tests with Hardhat.

🌐 Overview
This project allows users to:

Connect to MetaMask

View balances of two custom tokens (Token A and Token B)

Swap tokens using the SimpleSwap contract

See current exchange rates

Mint both tokens directly from the interface

It’s ideal for testing a minimal decentralized exchange environment with custom contracts.

📁 Project Structure
/frontend
│
├── index.html     # Main interface
├── styles.css     # Swap UI styles
├── scripts.js     # Web3 logic and contract interaction

⚙️ Technologies Used
HTML5 / CSS3 / JavaScript

Ethers.js

MetaMask

SimpleSwap contract (Solidity, included in /contracts)

🔧 Prerequisites
MetaMask installed and connected to the correct network (sepolia ethereum testnet)

🚀 How to Use
In your broweser, paste: https://monandbri.github.io/Modulo4_ETH_Kipu_SimpleSwap/

<img width="1913" height="955" alt="image" src="https://github.com/user-attachments/assets/8b0b95db-8dfe-4f4b-b17d-17e6d08c1c49" />

Click the Connect button to link your MetaMask account

🔄 Features
Once connected, you can:

Mint test tokens (TokenA (TKA) & TokenB (TKB)) to your wallet

Enter an amount of Token A or Token B, then click Mint

Enter the amount of Token A (to be swapped for Token B)

Get a quote for how many Token B you’ll receive

Approve token usage

Execute the token swap

🧪 Contracts Used
The frontend is configured to interact with the following contracts (on the sepolia ethereum test network):

SimpleSwap: 0x57B8085092473392983D8f311903814ecd1ada62

TokenA: 0xA142c536A58dc69584C1e345BfAD8c753c2a54C4

TokenB: 0x5EBedce1861165D427BEa9D0fc27F99Aa8cD4284

Contract ABIs are embedded in scripts.js.

🧪 Manual Testing
You can test the DApp by:

Changing mint values for Token A and B

Performing small swaps (e.g., 1, 10, 100)

Verifying balance and price changes after each operation

Trying invalid inputs (e.g., insufficient balance, negative values, etc.)

✅ Automated Testing with Hardhat
Automated tests for the SimpleSwap contract are included using Hardhat (SimpleSwapTest.js). Tests cover:

🛠 Contract Deployment and Token Minting
Verifies successful deployment and token minting

📊 Liquidity and Reserve Checks
Ensures correct initial reserves and total liquidity

➕ Adding & Removing Liquidity
Tests addLiquidity updates reserves correctly

Tests removeLiquidity returns tokens and reduces reserves

💰 Price & OutputAmount Calculations
Confirms getPrice and getAmountOut return expected values

Tests failure scenarios like expired deadlines and invalid tokens

🔁 Token Swaps
Validates swapExactTokensForTokens performs correct swaps

Verifies the TokensSwapped event is emitted properly

❗ Reverts & Validations
Tests transaction reverts when:

Liquidity is insufficient

Deadlines are expired

Invalid input/output tokens are used

📣 Event Emissions
Checks that LiquidityAdded,TokensSwapped and LiquidityRemoved events emit correct values

▶️ Running the Tests
Clone the contract + test repo

Install dependencies:
npm install

Run the tests:
npx hardhat test

Verify coverage:
npx hardhat coverage

You’ll see the test output and confirm all behaviors are working.

📸 Test & Coverage Screenshots
Output of 'npx hardhat test':
<img width="997" height="896" alt="image" src="https://github.com/user-attachments/assets/0ff06856-a625-4988-9da3-5d9497fc5ad4" />

Output of 'npx hardhat coverage':
<img width="883" height="361" alt="image" src="https://github.com/user-attachments/assets/7996056f-c716-412d-9d78-4767f3c180f3" />

📜 License
SPDX-License-Identifier: MIT
This project is open-source and intended for educational and testing purposes.
Not recommended for production/mainnet usage without audits.

🙌 Credits
Created by Mónica Andrea Brito as part of ETH KIPU Developer Ethereum & Talento Tech learning project.
Thanks for visiting!


