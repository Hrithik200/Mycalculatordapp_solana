const assert = require("assert");
const anchor = require("@project-serum/anchor");
const { SystemProgram } = anchor.web3;

const hell =
  ("mycalculatordapp",
  async () => {
    const provider = anchor.AnchorProvider.env();
    anchor.setProvider(provider);
    const calculator = anchor.web3.Keypair.generate(); //escrow
    const program = anchor.workspace.Mycalculatordapp; //idl

    const tx = await program.rpc.create("Welcome to Solana", {
      accounts: {
        calculator: calculator.publicKey,
        user: provider.wallet.publicKey,
        systemProgram: SystemProgram.programId,
      },
      signers: [calculator],
    });

    const account = await program.account.calculator.fetch(
      calculator.publicKey
    );
    console.log("account", account);
    assert.ok(account.greeting == "Welcome to Solana");

    console.log("Transaction", tx);
  });
hell();
