## deployment map  

deploy feather contract  
set listmanager to deployer?  

deploy mintcontrol  
constructor(  
  minting_token => fthr_contract,  
  rooster_dev => deployer,  (5%)  
  start_block  
  )  

set reward_manager => vote_controller  
set pool1  
set pool2  
set pool3  

deploy TAR contract  
deploy AVIAN contract  

deploy vote control  
constructor(  
  black_list_source => FTHR contract, (also vote_reward_token)  
  mark_token => TAR contract,  
  prop_reward_nft => AVIAN contract,   
  start_block  
  )  

set reward_token => FTHR contract
set pool1  [AFFIRM]  
set pool2  [NEGATE]  


set TAR owner to votecontrol  
set AVIAN owner to votecontrol  

set feather list manager to vote control  
set feather owner to mint control  

set votingWindowLength in vote control

open first prop window  
