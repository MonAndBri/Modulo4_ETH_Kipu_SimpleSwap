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

🌀 SimpleSwap contract
💡 Overview
A minimal Uniswap-like Automated Market Maker (AMM) smart contract for a single pair of ERC-20 tokens. This contract allows users to:

Add and remove liquidity
Swap between two tokens
Query pool prices and output estimates
⚠️ No fees are collected in this AMM, and it supports only one token pair per deployment.

📍 Deployed Contract
Network: Ethereum / Sepolia

Contract Address: [0xF61e6cC61C7Ca23ee17F2e1f00d3BDD5C519cf39] https://sepolia.etherscan.io/address/0xF61e6cC61C7Ca23ee17F2e1f00d3BDD5C519cf39

📦 Features
Constant Product AMM (x * y = k) mechanism
ERC-20 compliant interface for token interactions
Slippage protection and transaction deadlines
Fully gas-optimized internal math and reserve management
🚀 Getting Started
Deployment
Deploy the SimpleSwap contract with two ERC-20 token addresses: TokenA: 0xFA1e34EdDcd8cbF6983b08A5EF3Fd251251d92d3 TokenB: 0x6749ff788dC350AbBc09B54651a457535F04715c

constructor(address _tokenA, address _tokenB)
Parameter	Description
_tokenA	Address of first ERC-20 token
_tokenB	Address of second ERC-20 token (must differ from _tokenA)

⚙️ Public Functions & Parameters
1. 🔁 Swap Tokens

function swapExactTokensForTokens(
    uint256 amountIn,
    uint256 amountOutMin,
    address[] calldata path,
    address to,
    uint256 deadline
) external returns (uint256[] memory amounts)
Inputs
Parameter	Description
amountIn	Exact amount of input token to swap
amountOutMin	Minimum acceptable output amount (slippage protection)
path	Array: [inputToken, outputToken] (length must be 2)
to	Address to receive output tokens
deadline	Unix timestamp after which the transaction is invalid

Returns
Variable	Description
amounts[0]	Actual amount of input token spent
amounts[1]	Actual amount of output token received

2. 💧 Add Liquidity

function addLiquidity(
    address addTokenA,
    address addTokenB,
    uint256 amountADesired,
    uint256 amountBDesired,
    uint256 amountAMin,
    uint256 amountBMin,
    address to,
    uint256 deadline
) external returns (uint256 amountA, uint256 amountB, uint256 liquidity)
Inputs
Parameter	Description
addTokenA	Must match deployed tokenA address
addTokenB	Must match deployed tokenB address
amountADesired	Desired amount of tokenA to deposit
amountBDesired	Desired amount of tokenB to deposit
amountAMin	Minimum amount of tokenA to accept (slippage protection)
amountBMin	Minimum amount of tokenB to accept (slippage protection)
to	Recipient of LP (liquidity provider) tokens
deadline	Expiry timestamp for the transaction

Returns
Variable	Description
amountA	Actual amount of tokenA added to the pool
amountB	Actual amount of tokenB added to the pool
liquidity	Amount of liquidity (LP) tokens minted for the provider

3. 🔓 Remove Liquidity

function removeLiquidity(
    address addTokenA,
    address addTokenB,
    uint256 liquidity,
    uint256 amountAMin,
    uint256 amountBMin,
    address to,
    uint256 deadline
) external returns (uint256 amountA, uint256 amountB)
Inputs
Parameter	Description
addTokenA	Must match deployed tokenA address
addTokenB	Must match deployed tokenB address
liquidity	Amount of LP tokens to burn
amountAMin	Minimum amount of tokenA to receive (slippage protection)
amountBMin	Minimum amount of tokenB to receive (slippage protection)
to	Address receiving the withdrawn tokens
deadline	Expiry timestamp for this transaction

Returns
Variable	Description
amountA	Amount of tokenA returned to the user
amountB	Amount of tokenB returned to the user

4. 📊 Get Price

function getPrice(address _tokenA, address _tokenB) external view returns (uint256 price)
Inputs
Parameter	Description
_tokenA	Must match deployed tokenA address
_tokenB	Must match deployed tokenB address

Returns
Variable	Description
price	The price of 1 tokenA in terms of tokenB, scaled by 1e18

5. 📈 Calculate Swap Output

function getAmountOut(
    uint256 amountIn,
    uint256 amountA,
    uint256 amountB
) public pure returns (uint256 amountOut)
Inputs
Parameter	Description
amountIn	Amount of input token
amountA	Reserve of input token
amountB	Reserve of output token

Returns
Variable	Description
amountOut	Estimated amount of output tokens given input amount and reserves

🧯 Modifiers & Safety Checks
validTokenPair — ensures input tokens match the pair

notExpired — enforces deadlines for time-sensitive txs

validRecipient — ensures to address is not zero

📜 Events
LiquidityAdded

LiquidityRemoved

TokensSwapped

These allow for off-chain monitoring and analytics.

⚠️ Notes
Only supports one token pair per deployment

No fee or incentive mechanism for liquidity providers

LP tokens are tracked via internal mappings (not ERC-20 tokens)

📊 Pricing and Estimates
Get Current Price (scaled by 1e18)
uint256 price = swap.getPrice(tokenA, tokenB);

Estimate Output Amount
uint256 out = swap.getAmountOut(amountIn, reserveIn, reserveOut);

🛠️ Requirements
Solidity ^0.8.0

Two valid ERC-20 tokens

Approval must be granted to the contract before token transfers

🔐 Access Control
There are no owner-only functions. Anyone can:

Add/remove liquidity

Swap tokens

Query pricing

📄 License
This project is licensed under the MIT License.
See the LICENSE file for details.

👨‍💻 Author
Mónica Andrea Brito

🧪 Testing Tips
Use ERC-20 mocks for local tests (e.g., via Hardhat).

Simulate slippage by manipulating reserve ratios.

Verify all deadline-based calls with block.timestamp.

🧠 Further Improvements (Suggestions)
Support trading fees (e.g., 0.3%)

Add LP token minting as a proper ERC-20

Enable multi-hop swaps and router integration

Front-end DApp interface for UX

✅ Example Workflow
Deploy SimpleSwap with two token addresses

Approve the contract to transfer tokens on your behalf

Call addLiquidity(...)

Perform swaps with swapExactTokensForTokens(...)

Remove your share via removeLiquidity(...)

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


