## avian_contracts

TAR and FTHR is a system that uses the 'wisdom of the crowd' to identify potentially malicious contracts.  

4 contracts, TAR, FTHR, MintController, VoteController  

Mint FTHR by staking uniswap LP tokens for dx/x, dx/eth, fthr/eth  
30% of mined FTHR rewards is sent to voteController for vote rewards.  

Every X number of blocks a proposal window is opened.  Any user can propose a contract address, and once a successful proposal has been made, the proposal window is closed, a TAR NFT is minted to the VoteController contract and voting begins.  Proposals are sequential, voting is exclusive to a single proposal, only one proposal can be open at a time and only one proposal can be voted on at a time.  

The TAR nft metadata includes the proposed contract's address, a user supplied label and an auto generated discussion thread URL for the voting round.    

Voting  
Users vote on proposals by depositing FTHR in either an 'affirmative' or 'negative' voting pool.  At the end of the voting period, the pool with the most FTHR decides the vote.  100% of FTHR in the losing pool is returned to users who deposited.  Users that have FTHR in the winning pool receive their FTHR balance + their share of the FTHR voting reward distributed proportionally to their balance in the voting pool.  

If a contract address is voted affirmative as a malicious contract, the address is added to an array of addresses that cannot send FTHR (blacklisted).  The single minted tar is sent to the 'malicious' contract, along with the FTHR in the winning pool. Due to being blacklisted the user is unable to transfer the received TAR or FTHR  (To prevent exchanges and otherwise known or trusted contracts from being proposed, there is a contract 'white list' of contracts that can not be tarred.)   

Valid proposal addresses: must be an address, must be a contract, cannot have been previously proposed and voted on.  
