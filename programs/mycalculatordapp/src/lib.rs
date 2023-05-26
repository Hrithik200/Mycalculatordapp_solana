use anchor_lang::prelude::*;

declare_id!("Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS");

#[program]
pub mod mycalculatordapp {
    use super::*;

    pub fn create(ctx: Context<Create>, init_message: String) -> Result<()> {
        let calculator = &mut ctx.accounts.calculator; //variable
        calculator.greeting = init_message;
        Ok(())
    }
    pub fn add(ctx: Context<Addition>, int1: i64, int2: i64) -> Result<()> {
        let calculator = &mut ctx.accounts.calculator;
        calculator.result = int1 + int2;
        Ok(())
    }
    pub fn subtract(ctx: Context<Subtraction>, int1: i64, int2: i64) -> Result<()> {
        let calculator = &mut ctx.accounts.calculator;
        calculator.result = int1 - int2;
        Ok(())
    }
    pub fn divide(ctx: Context<Division>, int1: i64, int2: i64) -> Result<()> {
        let calculator = &mut ctx.accounts.calculator;
        calculator.remainder = int1 % int2;
        Ok(())
    }
    pub fn multiply(ctx: Context<Multiplication>, int1: i64, int2: i64) -> Result<()> {
        let calculator = &mut ctx.accounts.calculator;
        calculator.result = int1 * int2;
        Ok(())
    }
    pub fn factorial(ctx: Context<Factorial>, n: i64) -> Result<()> {
        let calculator = &mut ctx.accounts.calculator;
    
        let mut result = 1;
    
        for i in 2..=n {
            result *= i;
        }
    
      calculator.result=result;
    
        Ok(())
    }
    


}

#[derive(Accounts)]
pub struct Create<'info> {
    #[account(init, payer=user,space=264)]
    pub calculator: Account<'info, Calculator>,

    #[account(mut)]
    pub user: Signer<'info>,

    pub system_program: Program<'info, System>,
}
#[derive(Accounts)]
pub struct Addition<'info> {
    #[account(mut)]
    pub calculator: Account<'info, Calculator>,
}

#[derive(Accounts)]
pub struct Subtraction<'info> {
    #[account(mut)]
    pub calculator: Account<'info, Calculator>,
}

#[derive(Accounts)]
pub struct Division<'info> {
    #[account(mut)]
    pub calculator: Account<'info, Calculator>,
}

#[derive(Accounts)]
pub struct Multiplication<'info> {
    #[account(mut)]
    pub calculator: Account<'info, Calculator>,
}
#[derive(Accounts)]
pub struct Factorial<'info> {
    #[account(mut)]
    pub calculator: Account<'info, Calculator>,
}


#[account]
pub struct Calculator {
    pub greeting: String,
    pub result: i64,
    pub remainder: i64,
}
