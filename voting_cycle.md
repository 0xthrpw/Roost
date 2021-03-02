# VOTING CYCLE

PROPOSAL WINDOW OPEN   
  setProposal() >  
  _addVotingPool() or _closeProposalWindow()  

PROPOSAL WINDOW CLOSED  

VOTING WINDOW OPEN  
  vote(_proposalId, _amount)
  update user voting record  
  update voting pool tally  

VOTING WINDOW CLOSED  
  _tallyVotes();
  count up all voting pool tally, set "RoundResult"
  determine winner  
  commit to list of addresses, set "tarlisted"
  mint tar and send to target  
  mint avian and send to proposer


  record block ending
  reset propcounter
  increment round counter
  re-open proposal window

mapping(address => Ballot) public votingRecord;

mapping(address => mapping(uint256 => uint256)) public uncompensatedRewards;

struct Ballot {
  uint256 proposalId;
  uint256 proposedContract;
  uint256 amountVoted;
  uint256 ballotBlock;

}

CLAIM  
  get user voting record  
  loop round  
    get all "ballots"
    tally total
    unset uncompensatedRewards



# EXAMPLE STORY   
window open: 1000;
window close: 11,000;

pool 1
user1: [block: 1010, amount: 100]
user2: [block: 1100, amount: 200]
user3: [block: 2000, amount: 200]
user4: [block: 3500, amount: 100]

pool 2
user5: [block: 4900, amount: 500]
user6: [block: 6000, amount: 100]
user7: [block: 8200, amount: 200]
user8: [block: 9000, amount: 100]

pool 3
user9: [block: 3000, amount: 200]
user10: [block: 4000, amount: 400]
user11: [block: 6000, amount: 100]

total rewards: 3000 FTHR;
total votes 2000 FTHR;
total FTHR 5000;

baseReward (70 * 3000) / 100 =  2100 (distributed to ALL voters)
bonusReward (30 * 3000) / 100 =  900 (distributed to winning voters)

total blocks transpired: 10,000;
user1: 10000 - 1010 = 8990, 8990/10000 = .899 * 100 votes = 89.9
user2: 10000 - 1100 = 8900, 8900/10000 = .89 * 200 votes = 178
user3: 10000 - 2000 = 8000, 8000/10000 = .8 * 200 votes = 160
user4: 10000 - 3500 = 6500, 6500/10000 = .65 * 100 votes = 65

user5: 10000 - 4900 = 5100, 5100/10000 = .51 * 500 votes = 255
user6: 10000 - 6000 = 4000, 4000/10000 = .4 * 100 votes = 40
user7: 10000 - 8200 = 1800, 1800/10000 = .18 * 200 votes = 36
user8: 10000 - 9000 = 1000, 1000/10000 = .1 * 100 votes = 10

user9: 10000 - 3000 = 7000, 7000/10000 = .7 * 200 votes = 140
user10: 10000 - 4000 = 6000, 6000/10000 = .6 * 200 votes = 120
user11: 10000 - 6000 = 4000, 4000/10000 = .4 * 100 votes = 40

=================================================

# CALCULATE BASE REWARD  
uint256 blockPassed = block.number.sub(pool.lastRewardBlock);


uint256 featherPerBlock = rewardBalance / blockPassed;
3000 / 10000 = .3

uint256 featherReward = blockPassed
                        .mul(featherPerBlock)
                        .mul(userVotes)
                        .div(totalVotes);
        accFeatherPerShare = accFeatherPerShare.add(
            featherReward.div(totalVotes)
          )

    user = voteTally.mul(accFeatherPerShare)   

user1 = 8990 * .3 * 100 / 2000 = 134.85
accFeather1 = 134.85 / 100 = .067425 * 100 = 6.7
user2 = 8900 * .3 * 200 / 2000 = 267                      
user3 = 8000 * .3 * 200 / 2000 = 240
user4 = 6500 * .3 * 100 / 2000 = 97.5
user5 = 5100 * .3 * 500 / 2000 = 382.5
user6 = 4000 * .3 * 100 / 2000 = 60
user7 = 1800 * .3 * 200 / 2000 = 54
user8 = 1000 * .3 * 100 / 2000 = 15
user9 = 7000 * .3 * 200 / 2000 = 210
user10 = 6000 * .3 * 200 / 2000 = 180
user11 = 4000 * .3 * 100 / 2000 = 60

"voteBlocks" are calculated as the number of blocks a set of votes have been committed for.  think of it like man-hours

# CALCULATE BONUS REWARD  
