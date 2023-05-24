const assert=require("assert");
const anchor= require("@project-serum/anchor");
const {SystemProgram}=anchor.web3 

const hell=("mycalculatordapp",async ()=>{
    const provider=anchor.AnchorProvider.env();
     anchor.setProvider(provider); 
     const calculator =anchor.web3.Keypair.generate();//escrow
     const program= anchor.workspace.Mycalculatordapp;//idl

const tx= await program.rpc.create("Welcome to Solana",
        {
            accounts:{
                calculator:calculator.publicKey,//new keypair //verification 11 //12
                user:provider.wallet.publicKey,//phantom //cli mukesh 
                systemProgram:SystemProgram.programId //verifcation
            },
            signers:[calculator]  //12
        })

        const account= await program.account.calculator.fetch(calculator.publicKey)  //12
        console.log("account",account)
        assert.ok(account.greeting=="Welcome to Solana")
     
        console.log("Transaction",tx)
    })
    hell()