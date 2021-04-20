
library(dplyr)
library(tidyverse)
library(plyr)
library(stringr)
library(lmSupport)
library(data.table)
library(ggplot2)
library(lme4)


  setwd("~/Desktop/ldm/covid_wellbeing/data") #or your own directory
  # download data files from https://github.com/LMD-nat/wellbeing into directory
  #merge them all together
  {  
    covariates <-
      list.files(pattern = "*.csv") %>% 
      map_df(~read_csv(., col_types = cols(.default = "c")))
  }
  
  #use the node-id (0.0-0.0) to select just one line for each person
  cov = subset(covariates, covariates$internal_node_id == "0.0-0.0") # should spit out 30 ppl
  # This will be my "clean" file to come back to if something goes awry
  # working file
  covariate_vars <- cov
  
  # I'll start with questionnaires because they're easy to set up
  #############NEED FOR COGNITION###########################
  covariate_vars$ngs_01 <- recode(covariate_vars$ngs_01, "0" = 1, "1" = 2, "2" = 3, "3" = 4, "4" = 5)
  covariate_vars$ngs_02 <- recode(covariate_vars$ngs_02, "0" = 1, "1" = 2, "2" = 3, "3" = 4, "4" = 5)
  covariate_vars$ngs_03 <- recode(covariate_vars$ngs_03, "0" = 5, "1" = 4, "2" = 3, "3" = 2, "4" = 1) # reverse
  covariate_vars$ngs_04 <- recode(covariate_vars$ngs_04, "0" = 1, "1" = 2, "2" = 3, "3" = 4, "4" = 5)
  covariate_vars$ngs_05 <- recode(covariate_vars$ngs_05, "0" = 1, "1" = 2, "2" = 3, "3" = 4, "4" = 5)
  covariate_vars$ngs_06 <- recode(covariate_vars$ngs_06, "0" = 1, "1" = 2, "2" = 3, "3" = 4, "4" = 5)
  covariate_vars$ngs_07 <- recode(covariate_vars$ngs_07, "0" = 5, "1" = 4, "2" = 3, "3" = 2, "4" = 1) # reverse
  covariate_vars$ngs_08 <- recode(covariate_vars$ngs_08, "0" = 1, "1" = 2, "2" = 3, "3" = 4, "4" = 5)
  covariate_vars$ngs_09 <- recode(covariate_vars$ngs_09, "0" = 1, "1" = 2, "2" = 3, "3" = 4, "4" = 5)
  covariate_vars$ngs_10 <- recode(covariate_vars$ngs_10, "0" = 1, "1" = 2, "2" = 3, "3" = 4, "4" = 5)
  covariate_vars$ngs_11 <- recode(covariate_vars$ngs_11, "0" = 1, "1" = 2, "2" = 3, "3" = 4, "4" = 5)
  covariate_vars$ngs_12 <- recode(covariate_vars$ngs_12, "0" = 1, "1" = 2, "2" = 3, "3" = 4, "4" = 5)
  covariate_vars$ngs_13 <- recode(covariate_vars$ngs_13, "0" = 1, "1" = 2, "2" = 3, "3" = 4, "4" = 5)
  covariate_vars$ngs_14 <- recode(covariate_vars$ngs_14, "0" = 1, "1" = 2, "2" = 3, "3" = 4, "4" = 5)
  covariate_vars$ngs_15 <- recode(covariate_vars$ngs_15, "0" = 1, "1" = 2, "2" = 3, "3" = 4, "4" = 5)
  covariate_vars$ngs_16 <- recode(covariate_vars$ngs_16, "0" = 1, "1" = 2, "2" = 3, "3" = 4, "4" = 5)
  covariate_vars$ngs_17 <- recode(covariate_vars$ngs_17, "0" = 1, "1" = 2, "2" = 3, "3" = 4, "4" = 5)
  covariate_vars$ngs_18 <- recode(covariate_vars$ngs_18, "0" = 1, "1" = 2, "2" = 3, "3" = 4, "4" = 5)
  covariate_vars$ngs_score <- covariate_vars$ngs_01+covariate_vars$ngs_02+covariate_vars$ngs_03+covariate_vars$ngs_04+covariate_vars$ngs_05+covariate_vars$ngs_06+covariate_vars$ngs_07+covariate_vars$ngs_08+covariate_vars$ngs_09+covariate_vars$ngs_10+covariate_vars$ngs_11+covariate_vars$ngs_12+covariate_vars$ngs_13+covariate_vars$ngs_14+covariate_vars$ngs_15+covariate_vars$ngs_16+covariate_vars$ngs_17+covariate_vars$ngs_18
  ############################################################
  #############CAARS ADHD QUESTIONS###########################
  # how do i score this thing? I think there are different factors to contend with
  # 66 questions, I guess I can just convert to numeric and sum the subscales together, Maxine can handle the specifics
  caars <- covariate_vars[, c(5, 151:216)]
  caars$ID <- as.factor(caars$ID)
  caars <- caars %>%
    mutate_all(type.convert) %>%
    mutate_if(is.character, as.numeric)
  
  # Ok so this stuff below didn't work'
#inattention  
caars$caars_innatention <- caars$caars_03+ caars$caars_07+ caars$caars_11+ caars$caars_16+ caars$caars_18+ caars$caars_32+ caars$caars_36+ caars$caars_44+ caars$caars_49+ caars$caars_51+ caars$caars_66+ caars$caars_40
#this is hyperactivity
caars$caars_hyperactivity <- caars$caars_01+ caars$caars_05+ caars$caars_13+ caars$caars_17+ caars$caars_20+ caars$caars_25+ caars$caars_31+ caars$caars_46+ caars$caars_54+ caars$caars_57+ caars$caars_59+ caars$caars_27
#impulsivity
caars$caars_impulsivity <- caars$caars_04+ caars$caars_08+ caars$caars_12+ caars$caars_30+ caars$caars_35+ caars$caars_39+ caars$caars_43+ caars$caars_47+ caars$caars_52+ caars$caars_61+ caars$caars_19+ caars$caars_23
#self-concept
caars$caars_selfconcept <- caars$caars_06+ caars$caars_15+ caars$caars_37+ caars$caars_56+ caars$caars_26+ caars$caars_63
#DSMV_inattentive
caars$DSMV_inattentive <- caars$caars_02+ caars$caars_24+ caars$caars_29+ caars$caars_33+ caars$caars_42+ caars$caars_48+ caars$caars_60+ caars$caars_64+ caars$caars_65
#DSMV_hyperactive
caars$DSMV_hyperactive <- caars$caars_09+ caars$caars_14+ caars$caars_21+ caars$caars_22+ caars$caars_38+ caars$caars_41+ caars$caars_50+ caars$caars_58+ caars$caars_62
#ADHD_index and total symptoms
caars$DSMV_totalsymptoms <- caars$DSMV_inattentive + caars$DSMV_hyperactive
caars$ADHD_index <- caars$caars_10+ caars$caars_28+ caars$caars_34+ caars$caars_45+ caars$caars_53+ caars$caars_55+ caars$caars_40+ caars$caars_27+ caars$caars_19+ caars$caars_23+ caars$caars_26+ caars$caars_63
# ok that's it for caars
write.csv(caars,"~/Desktop/ldm/covid_wellbeing/data/covid/caars.csv", row.names = FALSE)

#later I'll have to join caars and covariate vars

############################## LSNS ####################################
lsns <- covariate_vars[, c(5, 97:102)]
lsns$ID <- as.factor(lsns$ID)
lsns <- lsns %>%
  mutate_all(type.convert) %>%
  mutate_if(is.character, as.numeric)
lsns$score <- lsns$lsns_fri_1 + lsns$lsns_fri_2 + lsns$lsns_fri_3 + lsns$lsns_fam_1 + lsns$lsns_fam_2 + lsns$lsns_fam_3
# note that a score of 12 or less indicates being at risk for social isolation
lsns$risk <- sapply(lsns$score, function(x) if(x >= 13) "OK" else if (x <= 12) "At risk")
########################################################################
############################## BAI #####################################
bai <- covariate_vars[, c(5, 228:235, 237:249)]
bai$ID <- as.factor(bai$ID)
bai <- bai %>%
  mutate_all(type.convert) %>%
  mutate_if(is.character, as.numeric)
bai$score <- (bai$bai_1 + bai$bai_2 + bai$bai_3 + bai$bai_4 + bai$bai_5 + bai$bai_6 + bai$bai_7 + bai$bai_8 + bai$bai_9 +
  bai$bai_10 + bai$bai_11 + bai$bai_12 + bai$bai_13 + bai$bai_14 + bai$bai_15 + bai$bai_16 + bai$bai_17 + bai$bai_18 + bai$bai_19 + 
  bai$bai_20 + bai$bai_21) 
bai$classifier <- ifelse(bai$score <= 21, "low anxiety",
                      ifelse(bai$score <= 35, "moderate anxiety", "concerning anxiety"))
########################################################################
############################## CESD ####################################
cesd <- covariate_vars[, c(5, 250:269)]
cesd$ID <- as.factor(cesd$ID)
cesd <- cesd %>%
  mutate_all(type.convert) %>%
  mutate_if(is.character, as.numeric)
#cesd$score <- (cesd$cesd_1 + cesd$cesd_2 + cesd$cesd_3 + cesd$cesd_4 + cesd$cesd_5 + cesd$cesd_6 + cesd$cesd_7 + cesd$cesd_8 + cesd$cesd_9 +
                #cesd$cesd_10 + cesd$cesd_11 + cesd$cesd_12 + cesd$cesd_13 + cesd$cesd_14 + cesd$cesd_15 + cesd$cesd_16 + cesd$cesd_17 + cesd$cesd_18 + cesd$cesd_19 + 
                #cesd$cesd_20)
# this won't work because 4, 8, 12, and 16 are reverse scored
cesd$CESD_TOT = varScore(cesd, Forward= c('cesd_1', 'cesd_2', 'cesd_3', 'cesd_5', 'cesd_6', 'cesd_7', 'cesd_9', 'cesd_10', 'cesd_11', 'cesd_13', 'cesd_14', 'cesd_15', 'cesd_17', 'cesd_18', 'cesd_19', 'cesd_20'), Reverse= c('cesd_4', 'cesd_8', 'cesd_12', 'cesd_16'), Range = c(0,3) )
cesd$classifier <- ifelse(cesd$CESD_TOT >= 16, "at risk for depression", "low risk")
########################################################################
############################## CAS #####################################
cas <- covariate_vars[, c(5, 217:221)]
cas$ID <- as.factor(cas$ID)
cas <- cas %>%
  mutate_all(type.convert) %>%
  mutate_if(is.character, as.numeric)
cas$coronavirusanxiety <- cas$cas_1 + cas$cas_2 + cas$cas_3 + cas$cas_4 + cas$cas_5
########################################################################
############################## WSAS ####################################
wsas <- covariate_vars[, c(5, 222, 223, 224, 225, 227)]
wsas$ID <- as.factor(wsas$ID)
wsas <- wsas %>%
  mutate_all(type.convert) %>%
  mutate_if(is.character, as.numeric)
wsas$work_social_adj <- wsas$wsas_1 + wsas$wsas_2 + wsas$wsas_3 + wsas$wsas_4 + wsas$wsas_5
wsas$classifier <- ifelse(wsas$work_social_adj <= 9, "subclinical",
                         ifelse(wsas$work_social_adj <= 20, "moderate impairment", "highest impairment"))
########################################################################
############################## CD-RISC #################################
# higher scores indicate more resilience
risc <- covariate_vars[, c(5, 270:279)]
risc$ID <- as.factor(risc$ID)
risc <- risc %>%
  mutate_all(type.convert) %>%
  mutate_if(is.character, as.numeric)
risc$resilience_score <- risc$risc_01 + risc$risc_02 + risc$risc_03 + risc$risc_04 + risc$risc_05 + risc$risc_06 + risc$risc_07 + risc$risc_08 + risc$risc_09 + risc$risc_10
########################################################################
############################## PSS #################################
# higher scores indicate more resilience
pss <- covariate_vars[, c(5, 280:289)]
pss$ID <- as.factor(pss$ID)
pss <- pss %>%
  mutate_all(type.convert) %>%
  mutate_if(is.character, as.numeric)
pss$percievedstress_score <- pss$pss10_01 + pss$pss10_02 + pss$pss10_03 + pss$pss10_04 + pss$pss10_05 + pss$pss10_06 + pss$pss10_07 + pss$pss10_08 + pss$pss10_09 + pss$pss10_10
########################################################################
############################## ASSIST ##################################
assist <- covariate_vars[, c(5, 30:96)]
# there are slightly different scores for each quetion

#1 In the past three months In the past three months, how often have you used , how often have you used the substances you mentioned
#2 During the past three months During the past three months, how often have you , how often have you had a strong desire or urge to use
#3 During the past three months During the past three months, how often has your , how often has your led to health, social, legal or financial problems? led to health, social, legal or financial problems?
#4 During the past three months During the past three months, how often have you failed , how often have you failed to do what was normally expected of you because of to do what was normally expected of you because of you because of your use of
#5 Has a friend or relative or anyone else ever Has a friend or relative or anyone else ever expressed concern about your use of 
#6 Have you ever Have you ever tried and failed to control, cut down or stop using 
# substance involvement score:  Q1c + Q2c + Q3c + Q4c + Q5c + Q6c 
#I'll start with questions 5 and 6

assist_values_5_6 <- data.frame(from = c("No, Never", "Yes, in the past 3 months", "Never"), to = c(0, 6, 3))
assist <- assist %>% # the no values
  mutate(assistfive01=replace(assistfive01, assistfive01=="No, Never", 0)) %>%
  mutate(assistfive02=replace(assistfive02, assistfive02=="No, Never", 0)) %>%
  mutate(assistfive03=replace(assistfive03, assistfive03=="No, Never", 0)) %>%
  mutate(assistfive04=replace(assistfive04, assistfive04=="No, Never", 0)) %>%
  mutate(assistfive05=replace(assistfive05, assistfive05=="No, Never", 0)) %>%
  mutate(assistfive06=replace(assistfive06, assistfive06=="No, Never", 0)) %>%
  mutate(assistfive07=replace(assistfive07, assistfive07=="No, Never", 0)) %>%
  mutate(assistfive08=replace(assistfive08, assistfive08=="No, Never", 0)) %>%
  mutate(assistfive09=replace(assistfive09, assistfive09=="No, Never", 0)) %>%
  mutate(assistfive10=replace(assistfive10, assistfive10=="No, Never", 0)) %>%
  mutate(assistsix01=replace(assistsix01, assistsix01=="No, Never", 0)) %>%
  mutate(assistsix02=replace(assistsix02, assistsix02=="No, Never", 0)) %>%
  mutate(assistsix03=replace(assistsix03, assistsix03=="No, Never", 0)) %>%
  mutate(assistsix04=replace(assistsix04, assistsix04=="No, Never", 0)) %>%
  mutate(assistsix05=replace(assistsix05, assistsix05=="No, Never", 0)) %>%
  mutate(assistsix06=replace(assistsix06, assistsix06=="No, Never", 0)) %>%
  mutate(assistsix07=replace(assistsix07, assistsix07=="No, Never", 0)) %>%
  mutate(assistsix08=replace(assistsix08, assistsix08=="No, Never", 0)) %>%
  mutate(assistsix09=replace(assistsix09, assistsix09=="No, Never", 0)) %>%
  mutate(assistsix10=replace(assistsix10, assistsix10=="No, Never", 0))

assist <- assist %>% # the yes in 3 month values
  mutate(assistfive01=replace(assistfive01, assistfive01=="Yes, in the past 3 months", 6)) %>%
  mutate(assistfive02=replace(assistfive02, assistfive02=="Yes, in the past 3 months", 6)) %>%
  mutate(assistfive03=replace(assistfive03, assistfive03=="Yes, in the past 3 months", 6)) %>%
  mutate(assistfive04=replace(assistfive04, assistfive04=="Yes, in the past 3 months", 6)) %>%
  mutate(assistfive05=replace(assistfive05, assistfive05=="Yes, in the past 3 months", 6)) %>%
  mutate(assistfive06=replace(assistfive06, assistfive06=="Yes, in the past 3 months", 6)) %>%
  mutate(assistfive07=replace(assistfive07, assistfive07=="Yes, in the past 3 months", 6)) %>%
  mutate(assistfive08=replace(assistfive08, assistfive08=="Yes, in the past 3 months", 6)) %>%
  mutate(assistfive09=replace(assistfive09, assistfive09=="Yes, in the past 3 months", 6)) %>%
  mutate(assistfive10=replace(assistfive10, assistfive10=="Yes, in the past 3 months", 6)) %>%
  mutate(assistsix01=replace(assistsix01, assistsix01=="Yes, in the past 3 months", 6)) %>%
  mutate(assistsix02=replace(assistsix02, assistsix02=="Yes, in the past 3 months", 6)) %>%
  mutate(assistsix03=replace(assistsix03, assistsix03=="Yes, in the past 3 months", 6)) %>%
  mutate(assistsix04=replace(assistsix04, assistsix04=="Yes, in the past 3 months", 6)) %>%
  mutate(assistsix05=replace(assistsix05, assistsix05=="Yes, in the past 3 months", 6)) %>%
  mutate(assistsix06=replace(assistsix06, assistsix06=="Yes, in the past 3 months", 6)) %>%
  mutate(assistsix07=replace(assistsix07, assistsix07=="Yes, in the past 3 months", 6)) %>%
  mutate(assistsix08=replace(assistsix08, assistsix08=="Yes, in the past 3 months", 6)) %>%
  mutate(assistsix09=replace(assistsix09, assistsix09=="Yes, in the past 3 months", 6)) %>%
  mutate(assistsix10=replace(assistsix10, assistsix10=="Yes, in the past 3 months", 6))

assist <- assist %>% # the yes in 3 month values
  mutate(assistfive01=replace(assistfive01, assistfive01=="Yes, but not in the past 3 months", 3)) %>%
  mutate(assistfive02=replace(assistfive02, assistfive02=="Yes, but not in the past 3 months", 3)) %>%
  mutate(assistfive03=replace(assistfive03, assistfive03=="Yes, but not in the past 3 months", 3)) %>%
  mutate(assistfive04=replace(assistfive04, assistfive04=="Yes, but not in the past 3 months", 3)) %>%
  mutate(assistfive05=replace(assistfive05, assistfive05=="Yes, but not in the past 3 months", 3)) %>%
  mutate(assistfive06=replace(assistfive06, assistfive06=="Yes, but not in the past 3 months", 3)) %>%
  mutate(assistfive07=replace(assistfive07, assistfive07=="Yes, but not in the past 3 months", 3)) %>%
  mutate(assistfive08=replace(assistfive08, assistfive08=="Yes, but not in the past 3 months", 3)) %>%
  mutate(assistfive09=replace(assistfive09, assistfive09=="Yes, but not in the past 3 months", 3)) %>%
  mutate(assistfive10=replace(assistfive10, assistfive10=="Yes, but not in the past 3 months", 3)) %>%
  mutate(assistsix01=replace(assistsix01, assistsix01=="Yes, but not in the past 3 months", 3)) %>%
  mutate(assistsix02=replace(assistsix02, assistsix02=="Yes, but not in the past 3 months", 3)) %>%
  mutate(assistsix03=replace(assistsix03, assistsix03=="Yes, but not in the past 3 months", 3)) %>%
  mutate(assistsix04=replace(assistsix04, assistsix04=="Yes, but not in the past 3 months", 3)) %>%
  mutate(assistsix05=replace(assistsix05, assistsix05=="Yes, but not in the past 3 months", 3)) %>%
  mutate(assistsix06=replace(assistsix06, assistsix06=="Yes, but not in the past 3 months", 3)) %>%
  mutate(assistsix07=replace(assistsix07, assistsix07=="Yes, but not in the past 3 months", 3)) %>%
  mutate(assistsix08=replace(assistsix08, assistsix08=="Yes, but not in the past 3 months", 3)) %>%
  mutate(assistsix09=replace(assistsix09, assistsix09=="Yes, but not in the past 3 months", 3)) %>%
  mutate(assistsix10=replace(assistsix10, assistsix10=="Yes, but not in the past 3 months", 3))

#### All the nevers can be zeroes ####
assist <- assist %>% # the yes in 3 month values
  mutate(assist01=replace(assist01, assist01=="Never", 0)) %>%
  mutate(assist02=replace(assist02, assist02=="Never", 0)) %>%
  mutate(assist03=replace(assist03, assist03=="Never", 0)) %>%
  mutate(assist04=replace(assist04, assist04=="Never", 0)) %>%
  mutate(assist05=replace(assist05, assist05=="Never", 0)) %>%
  mutate(assist06=replace(assist06, assist06=="Never", 0)) %>%
  mutate(assist07=replace(assist07, assist07=="Never", 0)) %>%
  mutate(assist08=replace(assist08, assist08=="Never", 0)) %>%
  mutate(assist09=replace(assist09, assist09=="Never", 0)) %>%
  mutate(assist10=replace(assist10, assist10=="Never", 0)) %>%
  mutate(assisttwo01=replace(assisttwo01, assisttwo01=="Never", 0)) %>%
  mutate(assisttwo02=replace(assisttwo02, assisttwo02=="Never", 0)) %>%
  mutate(assisttwo03=replace(assisttwo03, assisttwo03=="Never", 0)) %>%
  mutate(assisttwo04=replace(assisttwo04, assisttwo04=="Never", 0)) %>%
  mutate(assisttwo05=replace(assisttwo05, assisttwo05=="Never", 0)) %>%
  mutate(assisttwo06=replace(assisttwo06, assisttwo06=="Never", 0)) %>%
  mutate(assisttwo07=replace(assisttwo07, assisttwo07=="Never", 0)) %>%
  mutate(assisttwo08=replace(assisttwo08, assisttwo08=="Never", 0)) %>%
  mutate(assisttwo09=replace(assisttwo09, assisttwo09=="Never", 0)) %>%
  mutate(assisttwo10=replace(assisttwo10, assisttwo10=="Never", 0)) %>%
  mutate(assistthree01=replace(assistthree01, assistthree01=="Never", 0)) %>%
  mutate(assistthree02=replace(assistthree02, assistthree02=="Never", 0)) %>%
  mutate(assistthree03=replace(assistthree03, assistthree03=="Never", 0)) %>%
  mutate(assistthree04=replace(assistthree04, assistthree04=="Never", 0)) %>%
  mutate(assistthree05=replace(assistthree05, assistthree05=="Never", 0)) %>%
  mutate(assistthree06=replace(assistthree06, assistthree06=="Never", 0)) %>%
  mutate(assistthree07=replace(assistthree07, assistthree07=="Never", 0)) %>%
  mutate(assistthree08=replace(assistthree08, assistthree08=="Never", 0)) %>%
  mutate(assistthree09=replace(assistthree09, assistthree09=="Never", 0)) %>%
  mutate(assistthree10=replace(assistthree10, assistthree10=="Never", 0)) %>%
  mutate(assistfour01=replace(assistfour01, assistfour01=="Never", 0)) %>%
  mutate(assistfour02=replace(assistfour02, assistfour02=="Never", 0)) %>%
  mutate(assistfour03=replace(assistfour03, assistfour03=="Never", 0)) %>%
  mutate(assistfour04=replace(assistfour04, assistfour04=="Never", 0)) %>%
  mutate(assistfour05=replace(assistfour05, assistfour05=="Never", 0)) %>%
  mutate(assistfour06=replace(assistfour06, assistfour06=="Never", 0)) %>%
  mutate(assistfour07=replace(assistfour07, assistfour07=="Never", 0)) %>%
  mutate(assistfour08=replace(assistfour08, assistfour08=="Never", 0)) %>%
  mutate(assistfour09=replace(assistfour09, assistfour09=="Never", 0)) %>%
  mutate(assistfour10=replace(assistfour10, assistfour10=="Never", 0))


#### All the onces or twices ####
assist <- assist %>% # the yes in 3 month values
  mutate(assist01=replace(assist01, assist01=="Once or twice", 2)) %>%
  mutate(assist02=replace(assist02, assist02=="Once or twice", 2)) %>%
  mutate(assist03=replace(assist03, assist03=="Once or twice", 2)) %>%
  mutate(assist04=replace(assist04, assist04=="Once or twice", 2)) %>%
  mutate(assist05=replace(assist05, assist05=="Once or twice", 2)) %>%
  mutate(assist06=replace(assist06, assist06=="Once or twice", 2)) %>%
  mutate(assist07=replace(assist07, assist07=="Once or twice", 2)) %>%
  mutate(assist08=replace(assist08, assist08=="Once or twice", 2)) %>%
  mutate(assist09=replace(assist09, assist09=="Once or twice", 2)) %>%
  mutate(assist10=replace(assist10, assist10=="Once or twice", 2)) %>%
  mutate(assisttwo01=replace(assisttwo01, assisttwo01=="Once or twice", 3)) %>%
  mutate(assisttwo02=replace(assisttwo02, assisttwo02=="Once or twice", 3)) %>%
  mutate(assisttwo03=replace(assisttwo03, assisttwo03=="Once or twice", 3)) %>%
  mutate(assisttwo04=replace(assisttwo04, assisttwo04=="Once or twice", 3)) %>%
  mutate(assisttwo05=replace(assisttwo05, assisttwo05=="Once or twice", 3)) %>%
  mutate(assisttwo06=replace(assisttwo06, assisttwo06=="Once or twice", 3)) %>%
  mutate(assisttwo07=replace(assisttwo07, assisttwo07=="Once or twice", 3)) %>%
  mutate(assisttwo08=replace(assisttwo08, assisttwo08=="Once or twice", 3)) %>%
  mutate(assisttwo09=replace(assisttwo09, assisttwo09=="Once or twice", 3)) %>%
  mutate(assisttwo10=replace(assisttwo10, assisttwo10=="Once or twice", 3)) %>%
  mutate(assistthree01=replace(assistthree01, assistthree01=="Once or twice", 4)) %>%
  mutate(assistthree02=replace(assistthree02, assistthree02=="Once or twice", 4)) %>%
  mutate(assistthree03=replace(assistthree03, assistthree03=="Once or twice", 4)) %>%
  mutate(assistthree04=replace(assistthree04, assistthree04=="Once or twice", 4)) %>%
  mutate(assistthree05=replace(assistthree05, assistthree05=="Once or twice", 4)) %>%
  mutate(assistthree06=replace(assistthree06, assistthree06=="Once or twice", 4)) %>%
  mutate(assistthree07=replace(assistthree07, assistthree07=="Once or twice", 4)) %>%
  mutate(assistthree08=replace(assistthree08, assistthree08=="Once or twice", 4)) %>%
  mutate(assistthree09=replace(assistthree09, assistthree09=="Once or twice", 4)) %>%
  mutate(assistthree10=replace(assistthree10, assistthree10=="Once or twice", 4)) %>%
  mutate(assistfour01=replace(assistfour01, assistfour01=="Once or twice", 5)) %>%
  mutate(assistfour02=replace(assistfour02, assistfour02=="Once or twice", 5)) %>%
  mutate(assistfour03=replace(assistfour03, assistfour03=="Once or twice", 5)) %>%
  mutate(assistfour04=replace(assistfour04, assistfour04=="Once or twice", 5)) %>%
  mutate(assistfour05=replace(assistfour05, assistfour05=="Once or twice", 5)) %>%
  mutate(assistfour06=replace(assistfour06, assistfour06=="Once or twice", 5)) %>%
  mutate(assistfour07=replace(assistfour07, assistfour07=="Once or twice", 5)) %>%
  mutate(assistfour08=replace(assistfour08, assistfour08=="Once or twice", 5)) %>%
  mutate(assistfour09=replace(assistfour09, assistfour09=="Once or twice", 5)) %>%
  mutate(assistfour10=replace(assistfour10, assistfour10=="Once or twice", 5))

assist <- assist %>% # the yes in 3 month values
  mutate(assist01=replace(assist01, assist01=="Once or Twice", 2)) %>%
  mutate(assist02=replace(assist02, assist02=="Once or Twice", 2)) %>%
  mutate(assist03=replace(assist03, assist03=="Once or Twice", 2)) %>%
  mutate(assist04=replace(assist04, assist04=="Once or Twice", 2)) %>%
  mutate(assist05=replace(assist05, assist05=="Once or Twice", 2)) %>%
  mutate(assist06=replace(assist06, assist06=="Once or Twice", 2)) %>%
  mutate(assist07=replace(assist07, assist07=="Once or Twice", 2)) %>%
  mutate(assist08=replace(assist08, assist08=="Once or Twice", 2)) %>%
  mutate(assist09=replace(assist09, assist09=="Once or Twice", 2)) %>%
  mutate(assist10=replace(assist10, assist10=="Once or Twice", 2)) %>%
  mutate(assisttwo01=replace(assisttwo01, assisttwo01=="Once or Twice", 3)) %>%
  mutate(assisttwo02=replace(assisttwo02, assisttwo02=="Once or Twice", 3)) %>%
  mutate(assisttwo03=replace(assisttwo03, assisttwo03=="Once or Twice", 3)) %>%
  mutate(assisttwo04=replace(assisttwo04, assisttwo04=="Once or Twice", 3)) %>%
  mutate(assisttwo05=replace(assisttwo05, assisttwo05=="Once or Twice", 3)) %>%
  mutate(assisttwo06=replace(assisttwo06, assisttwo06=="Once or Twice", 3)) %>%
  mutate(assisttwo07=replace(assisttwo07, assisttwo07=="Once or Twice", 3)) %>%
  mutate(assisttwo08=replace(assisttwo08, assisttwo08=="Once or Twice", 3)) %>%
  mutate(assisttwo09=replace(assisttwo09, assisttwo09=="Once or Twice", 3)) %>%
  mutate(assisttwo10=replace(assisttwo10, assisttwo10=="Once or Twice", 3)) %>%
  mutate(assistthree01=replace(assistthree01, assistthree01=="Once or Twice", 4)) %>%
  mutate(assistthree02=replace(assistthree02, assistthree02=="Once or Twice", 4)) %>%
  mutate(assistthree03=replace(assistthree03, assistthree03=="Once or Twice", 4)) %>%
  mutate(assistthree04=replace(assistthree04, assistthree04=="Once or Twice", 4)) %>%
  mutate(assistthree05=replace(assistthree05, assistthree05=="Once or Twice", 4)) %>%
  mutate(assistthree06=replace(assistthree06, assistthree06=="Once or Twice", 4)) %>%
  mutate(assistthree07=replace(assistthree07, assistthree07=="Once or Twice", 4)) %>%
  mutate(assistthree08=replace(assistthree08, assistthree08=="Once or Twice", 4)) %>%
  mutate(assistthree09=replace(assistthree09, assistthree09=="Once or Twice", 4)) %>%
  mutate(assistthree10=replace(assistthree10, assistthree10=="Once or Twice", 4)) %>%
  mutate(assistfour01=replace(assistfour01, assistfour01=="Once or Twice", 5)) %>%
  mutate(assistfour02=replace(assistfour02, assistfour02=="Once or Twice", 5)) %>%
  mutate(assistfour03=replace(assistfour03, assistfour03=="Once or Twice", 5)) %>%
  mutate(assistfour04=replace(assistfour04, assistfour04=="Once or Twice", 5)) %>%
  mutate(assistfour05=replace(assistfour05, assistfour05=="Once or Twice", 5)) %>%
  mutate(assistfour06=replace(assistfour06, assistfour06=="Once or Twice", 5)) %>%
  mutate(assistfour07=replace(assistfour07, assistfour07=="Once or Twice", 5)) %>%
  mutate(assistfour08=replace(assistfour08, assistfour08=="Once or Twice", 5)) %>%
  mutate(assistfour09=replace(assistfour09, assistfour09=="Once or Twice", 5)) %>%
  mutate(assistfour10=replace(assistfour10, assistfour10=="Once or Twice", 5))

#### All the monthlys ####
assist <- assist %>% # the yes in 3 month values
  mutate(assist01=replace(assist01, assist01=="Monthly", 3)) %>%
  mutate(assist02=replace(assist02, assist02=="Monthly", 3)) %>%
  mutate(assist03=replace(assist03, assist03=="Monthly", 3)) %>%
  mutate(assist04=replace(assist04, assist04=="Monthly", 3)) %>%
  mutate(assist05=replace(assist05, assist05=="Monthly", 3)) %>%
  mutate(assist06=replace(assist06, assist06=="Monthly", 3)) %>%
  mutate(assist07=replace(assist07, assist07=="Monthly", 3)) %>%
  mutate(assist08=replace(assist08, assist08=="Monthly", 3)) %>%
  mutate(assist09=replace(assist09, assist09=="Monthly", 3)) %>%
  mutate(assist10=replace(assist10, assist10=="Monthly", 3)) %>%
  mutate(assisttwo01=replace(assisttwo01, assisttwo01=="Monthly", 4)) %>%
  mutate(assisttwo02=replace(assisttwo02, assisttwo02=="Monthly", 4)) %>%
  mutate(assisttwo03=replace(assisttwo03, assisttwo03=="Monthly", 4)) %>%
  mutate(assisttwo04=replace(assisttwo04, assisttwo04=="Monthly", 4)) %>%
  mutate(assisttwo05=replace(assisttwo05, assisttwo05=="Monthly", 4)) %>%
  mutate(assisttwo06=replace(assisttwo06, assisttwo06=="Monthly", 4)) %>%
  mutate(assisttwo07=replace(assisttwo07, assisttwo07=="Monthly", 4)) %>%
  mutate(assisttwo08=replace(assisttwo08, assisttwo08=="Monthly", 4)) %>%
  mutate(assisttwo09=replace(assisttwo09, assisttwo09=="Monthly", 4)) %>%
  mutate(assisttwo10=replace(assisttwo10, assisttwo10=="Monthly", 4)) %>%
  mutate(assistthree01=replace(assistthree01, assistthree01=="Monthly", 5)) %>%
  mutate(assistthree02=replace(assistthree02, assistthree02=="Monthly", 5)) %>%
  mutate(assistthree03=replace(assistthree03, assistthree03=="Monthly", 5)) %>%
  mutate(assistthree04=replace(assistthree04, assistthree04=="Monthly", 5)) %>%
  mutate(assistthree05=replace(assistthree05, assistthree05=="Monthly", 5)) %>%
  mutate(assistthree06=replace(assistthree06, assistthree06=="Monthly", 5)) %>%
  mutate(assistthree07=replace(assistthree07, assistthree07=="Monthly", 5)) %>%
  mutate(assistthree08=replace(assistthree08, assistthree08=="Monthly", 5)) %>%
  mutate(assistthree09=replace(assistthree09, assistthree09=="Monthly", 5)) %>%
  mutate(assistthree10=replace(assistthree10, assistthree10=="Monthly", 5)) %>%
  mutate(assistfour01=replace(assistfour01, assistfour01=="Monthly", 6)) %>%
  mutate(assistfour02=replace(assistfour02, assistfour02=="Monthly", 6)) %>%
  mutate(assistfour03=replace(assistfour03, assistfour03=="Monthly", 6)) %>%
  mutate(assistfour04=replace(assistfour04, assistfour04=="Monthly", 6)) %>%
  mutate(assistfour05=replace(assistfour05, assistfour05=="Monthly", 6)) %>%
  mutate(assistfour06=replace(assistfour06, assistfour06=="Monthly", 6)) %>%
  mutate(assistfour07=replace(assistfour07, assistfour07=="Monthly", 6)) %>%
  mutate(assistfour08=replace(assistfour08, assistfour08=="Monthly", 6)) %>%
  mutate(assistfour09=replace(assistfour09, assistfour09=="Monthly", 6)) %>%
  mutate(assistfour10=replace(assistfour10, assistfour10=="Monthly", 6))

#### All the weeklys ####
assist <- assist %>% # the yes in 3 month values
  mutate(assist01=replace(assist01, assist01=="Weekly", 4)) %>%
  mutate(assist02=replace(assist02, assist02=="Weekly", 4)) %>%
  mutate(assist03=replace(assist03, assist03=="Weekly", 4)) %>%
  mutate(assist04=replace(assist04, assist04=="Weekly", 4)) %>%
  mutate(assist05=replace(assist05, assist05=="Weekly", 4)) %>%
  mutate(assist06=replace(assist06, assist06=="Weekly", 4)) %>%
  mutate(assist07=replace(assist07, assist07=="Weekly", 4)) %>%
  mutate(assist08=replace(assist08, assist08=="Weekly", 4)) %>%
  mutate(assist09=replace(assist09, assist09=="Weekly", 4)) %>%
  mutate(assist10=replace(assist10, assist10=="Weekly", 4)) %>%
  mutate(assisttwo01=replace(assisttwo01, assisttwo01=="Weekly", 5)) %>%
  mutate(assisttwo02=replace(assisttwo02, assisttwo02=="Weekly", 5)) %>%
  mutate(assisttwo03=replace(assisttwo03, assisttwo03=="Weekly", 5)) %>%
  mutate(assisttwo04=replace(assisttwo04, assisttwo04=="Weekly", 5)) %>%
  mutate(assisttwo05=replace(assisttwo05, assisttwo05=="Weekly", 5)) %>%
  mutate(assisttwo06=replace(assisttwo06, assisttwo06=="Weekly", 5)) %>%
  mutate(assisttwo07=replace(assisttwo07, assisttwo07=="Weekly", 5)) %>%
  mutate(assisttwo08=replace(assisttwo08, assisttwo08=="Weekly", 5)) %>%
  mutate(assisttwo09=replace(assisttwo09, assisttwo09=="Weekly", 5)) %>%
  mutate(assisttwo10=replace(assisttwo10, assisttwo10=="Weekly", 5)) %>%
  mutate(assistthree01=replace(assistthree01, assistthree01=="Weekly", 6)) %>%
  mutate(assistthree02=replace(assistthree02, assistthree02=="Weekly", 6)) %>%
  mutate(assistthree03=replace(assistthree03, assistthree03=="Weekly", 6)) %>%
  mutate(assistthree04=replace(assistthree04, assistthree04=="Weekly", 6)) %>%
  mutate(assistthree05=replace(assistthree05, assistthree05=="Weekly", 6)) %>%
  mutate(assistthree06=replace(assistthree06, assistthree06=="Weekly", 6)) %>%
  mutate(assistthree07=replace(assistthree07, assistthree07=="Weekly", 6)) %>%
  mutate(assistthree08=replace(assistthree08, assistthree08=="Weekly", 6)) %>%
  mutate(assistthree09=replace(assistthree09, assistthree09=="Weekly", 6)) %>%
  mutate(assistthree10=replace(assistthree10, assistthree10=="Weekly", 6)) %>%
  mutate(assistfour01=replace(assistfour01, assistfour01=="Weekly", 7)) %>%
  mutate(assistfour02=replace(assistfour02, assistfour02=="Weekly", 7)) %>%
  mutate(assistfour03=replace(assistfour03, assistfour03=="Weekly", 7)) %>%
  mutate(assistfour04=replace(assistfour04, assistfour04=="Weekly", 7)) %>%
  mutate(assistfour05=replace(assistfour05, assistfour05=="Weekly", 7)) %>%
  mutate(assistfour06=replace(assistfour06, assistfour06=="Weekly", 7)) %>%
  mutate(assistfour07=replace(assistfour07, assistfour07=="Weekly", 7)) %>%
  mutate(assistfour08=replace(assistfour08, assistfour08=="Weekly", 7)) %>%
  mutate(assistfour09=replace(assistfour09, assistfour09=="Weekly", 7)) %>%
  mutate(assistfour10=replace(assistfour10, assistfour10=="Weekly", 7))

#### All thedailys ####
assist <- assist %>% # the yes in 3 month values
  mutate(assist01=replace(assist01, assist01=="Daily or almost daily", 5)) %>%
  mutate(assist02=replace(assist02, assist02=="Daily or almost daily", 5)) %>%
  mutate(assist03=replace(assist03, assist03=="Daily or almost daily", 5)) %>%
  mutate(assist04=replace(assist04, assist04=="Daily or almost daily", 5)) %>%
  mutate(assist05=replace(assist05, assist05=="Daily or almost daily", 5)) %>%
  mutate(assist06=replace(assist06, assist06=="Daily or almost daily", 5)) %>%
  mutate(assist07=replace(assist07, assist07=="Daily or almost daily", 5)) %>%
  mutate(assist08=replace(assist08, assist08=="Daily or almost daily", 5)) %>%
  mutate(assist09=replace(assist09, assist09=="Daily or almost daily", 5)) %>%
  mutate(assist10=replace(assist10, assist10=="Daily or almost daily", 5)) %>%
  mutate(assisttwo01=replace(assisttwo01, assisttwo01=="Daily or almost daily", 6)) %>%
  mutate(assisttwo02=replace(assisttwo02, assisttwo02=="Daily or almost daily", 6)) %>%
  mutate(assisttwo03=replace(assisttwo03, assisttwo03=="Daily or almost daily", 6)) %>%
  mutate(assisttwo04=replace(assisttwo04, assisttwo04=="Daily or almost daily", 6)) %>%
  mutate(assisttwo05=replace(assisttwo05, assisttwo05=="Daily or almost daily", 6)) %>%
  mutate(assisttwo06=replace(assisttwo06, assisttwo06=="Daily or almost daily", 6)) %>%
  mutate(assisttwo07=replace(assisttwo07, assisttwo07=="Daily or almost daily", 6)) %>%
  mutate(assisttwo08=replace(assisttwo08, assisttwo08=="Daily or almost daily", 6)) %>%
  mutate(assisttwo09=replace(assisttwo09, assisttwo09=="Daily or almost daily", 6)) %>%
  mutate(assisttwo10=replace(assisttwo10, assisttwo10=="Daily or almost daily", 6)) %>%
  mutate(assistthree01=replace(assistthree01, assistthree01=="Daily or almost daily", 7)) %>%
  mutate(assistthree02=replace(assistthree02, assistthree02=="Daily or almost daily", 7)) %>%
  mutate(assistthree03=replace(assistthree03, assistthree03=="Daily or almost daily", 7)) %>%
  mutate(assistthree04=replace(assistthree04, assistthree04=="Daily or almost daily", 7)) %>%
  mutate(assistthree05=replace(assistthree05, assistthree05=="Daily or almost daily", 7)) %>%
  mutate(assistthree06=replace(assistthree06, assistthree06=="Daily or almost daily", 7)) %>%
  mutate(assistthree07=replace(assistthree07, assistthree07=="Daily or almost daily", 7)) %>%
  mutate(assistthree08=replace(assistthree08, assistthree08=="Daily or almost daily", 7)) %>%
  mutate(assistthree09=replace(assistthree09, assistthree09=="Daily or almost daily", 7)) %>%
  mutate(assistthree10=replace(assistthree10, assistthree10=="Daily or almost daily", 7)) %>%
  mutate(assistfour01=replace(assistfour01, assistfour01=="Daily or almost daily", 8)) %>%
  mutate(assistfour02=replace(assistfour02, assistfour02=="Daily or almost daily", 8)) %>%
  mutate(assistfour03=replace(assistfour03, assistfour03=="Daily or almost daily", 8)) %>%
  mutate(assistfour04=replace(assistfour04, assistfour04=="Daily or almost daily", 8)) %>%
  mutate(assistfour05=replace(assistfour05, assistfour05=="Daily or almost daily", 8)) %>%
  mutate(assistfour06=replace(assistfour06, assistfour06=="Daily or almost daily", 8)) %>%
  mutate(assistfour07=replace(assistfour07, assistfour07=="Daily or almost daily", 8)) %>%
  mutate(assistfour08=replace(assistfour08, assistfour08=="Daily or almost daily", 8)) %>%
  mutate(assistfour09=replace(assistfour09, assistfour09=="Daily or almost daily", 8)) %>%
  mutate(assistfour10=replace(assistfour10, assistfour10=="Daily or almost daily", 8))

# alright_all cleaned up, time to calculate specific substance involvement score
assist$ID <- as.factor(pss$ID)
assist$substance01 <- as.factor(assist$substance01)
assist <- assist[, c(1, 2, 3:12, 14:23, 25:34, 36:45, 47:56, 58:67)]

assist <- assist %>%
  mutate_all(type.convert) %>%
  mutate_if(is.character, as.numeric)

#This is being such a pain
write.csv(assist,"~/Desktop/ldm/covid_wellbeing/data/covid/assist.csv", row.names = FALSE)
assist <- read_csv("~/Desktop/ldm/covid_wellbeing/data/covid/assist_clean.csv")

#alright, back on track

assist$tobacco <- assist$assist01 + assist$assisttwo01 + assist$assistthree01 + assist$assistfive01 + assist$assistsix01
assist$alcohol <- assist$assist02 + assist$assisttwo02 + assist$assistthree02 + assist$assistfour02 + assist$assistfive02 + assist$assistsix02
assist$cannabis <- assist$assist03 + assist$assisttwo03 + assist$assistthree03 + assist$assistfour03 + assist$assistfive03 + assist$assistsix03
assist$cocaine <- assist$assist04 + assist$assisttwo04 + assist$assistthree04 + assist$assistfour04 + assist$assistfive04 + assist$assistsix04
assist$amphetamines <- assist$assist05 + assist$assisttwo05 + assist$assistthree05 + assist$assistfour05 + assist$assistfive05 + assist$assistsix05
assist$inhalants <- assist$assist06 + assist$assisttwo06 + assist$assistthree06 + assist$assistfour06 + assist$assistfive06 + assist$assistsix06
assist$sedatives <- assist$assist07 + assist$assisttwo07 + assist$assistthree07 + assist$assistfour07 + assist$assistfive07 + assist$assistsix07
assist$hallucinogens <- assist$assist08 + assist$assisttwo08 + assist$assistthree08 + assist$assistfour08 + assist$assistfive08 + assist$assistsix08
assist$opiods <- assist$assist09 + assist$assisttwo09 + assist$assistthree09 + assist$assistfour09 + assist$assistfive09 + assist$assistsix09
assist$others <- assist$assist10 + assist$assisttwo10 + assist$assistthree10 + assist$assistfour10 + assist$assistfive10 + assist$assistsix10
# what are the others
assist$other_specify <- "NA"
assist$other_specify <- ifelse(assist$ID == "794LJ", "Flu medication to sleep",
                          ifelse(assist$ID == "GNK4X", "CBD", "NA"))

df_list <- list(assist, bai, caars, cas, cesd, lsns, pss, risc, wsas)
covariates_questionnaires <- Reduce(function(d1, d2) merge(d1, d2, by = "ID", all.x = TRUE, all.y = FALSE), 
       df_list)
# copied AKJN6 about 500 times, wonder why, oh! it's because that person appears twice, so n = 29, note that for next round
covariates_questionnaires <- covariates_questionnaires[-c(12:522), ]
write.csv(covariates_questionnaires,"~/Desktop/ldm/covid_wellbeing/data/covid/questionnaires.csv", row.names = FALSE)

########################## Sliders ################################
# this is gonna be so fun
slide = subset(covariates, covariates$trial_type == "html-slider-response") # should spit out 30 ppl
slide <- slide[, c("ID", "stimulus", "response")]
# there are 17 sliders
slide$slider_label <-rep(c("Wellbeing Pre-Pandemic", "Likelihood of catching Covid19", "Wellbeing During-Pandemic",
                     "Cost of tuition rating", "Professor flexibility", "Change in workload", 
                     "Academics currently happening online", "Academics online pre-pandemic", "Change in feeling over pandemic: can't shake off blues",
                     "Change in feeling over pandemic: feeling depressed", "Change in feeling over pandemic: feeling happy", 
                     "Change in feeling over pandemic: feeling lonely", "Change in feeling over pandemic: feeling sad",
                     "Change in feeling over pandemic: couldn't get going", "Satisfaction with Concordia health services",
                     "Satisfaction with Concordia academic services", "Satisfaction with Concordia classes"),times=30)
slide <- slide[, c("ID", "response", "slider_label")]
# get rid of that duplicate, sme shenanigans here >:(
sliders <- slide %>%
pivot_wider(names_from = slider_label, values_from = response)
test <- rbind(sliders, c("AKJN6", 82, 51, 91, 92, 86, 50, 90, 2, 54, 52, 85, 12, 51, 47, 51, 75, 75))
test <- test[-c(11), ]
sliders <- test
sliders$ID <- as.factor(sliders$ID)
sliders <- sliders %>%
  mutate_all(type.convert) %>%
  mutate_if(is.character, as.numeric)
# alright that's it for sliders
fwrite(sliders, file ="~/Desktop/ldm/covid_wellbeing/data/covid/sliders.csv")


########################## Demographics ################################
#mental health measures 0.0-1.0-7.0, use responses to figure out mental health background
demog = subset(covariates, covariates$trial_type == "survey-multi-select") # should spit out 30 ppl
demog = subset(demog, demog$internal_node_id != "0.0-1.0-18.0-0.0")
demog = subset(demog, demog$internal_node_id != "0.0-2.0-18.0-0.0") # 0.0-2.0-18.0-0.0
demog <- demog[, c(5:8, 10, 12:15, 106:113, 116, 117, 118, 120)]
fwrite(demog, file ="~/Desktop/ldm/covid_wellbeing/data/covid/demog.csv")

#0.0-1.0-18.0-0.0
########################################################################

#ok let's look at changes!
analysis$ucGPA <- as.numeric(analysis$ucGPA)
analysis$gpa_change <- analysis$cgpa - analysis$ucGPA
analysis$bmi_change <- analysis$bmi - analysis$BMI
analysis$lsns_change <- analysis$lsns_time2 - analysis$Total_social_engagement_Score
fwrite(analysis, file ="~/Desktop/ldm/covid_wellbeing/data/covid/analysis.csv")
analysis_q <- read_csv("covid/analysis.csv")
names(sliders)[names(sliders) == "ID"] <- "studyid"
analysis_sliders <- sliders %>% right_join(analysis_q, by=c("studyid"))
fwrite(analysis_sliders, file ="~/Desktop/ldm/covid_wellbeing/data/covid/analysis_sliders.csv")

analysis_t1t2 <- read_csv("analysis_t1t2.csv", 
                          col_types = cols(cgpa = col_number(), 
                                           BMI = col_number(), Total_social_engagement_Score = col_number(), 
                                           time = col_factor(levels = c("pre-pandemic", 
                                                                        "during-pandemic")), bai = col_number(), 
                                           coronavirusanxiety = col_number(), 
                                           CESD_TOT = col_number(), lsns_time2 = col_number(), 
                                           percievedstress_score = col_number(), 
                                           resilience_score = col_number(), 
                                           work_social_adj = col_number(), wellbeing_rating = col_number()))

analysis_t1t2_graph <- read_csv("analysis_t1t2_graph.csv", 
                                col_types = cols(time = col_factor(levels = c("pre-pandemic", 
                                                                              "during-pandemic"))))

# plot
# ggplot() + facet_wrap(~age_group, strip.position = "bottom") + 
 ggplot()+ 
  geom_point(data=analysis_t1t2, aes(x=time, y=cgpa, color=studyid), size=4, stat="identity", position=position_dodge(0.10), alpha=.2, show.legend=F) + 
  scale_color_manual(values=c("#595d91", "#859cd6", "#2c4da0", "#2c62a0", "#2c96a0", "#2c87a0", "#c8cdde", "#afbae0", "#2ca09a","#2c91a0", "#2c77a0", "#2c5ea0", "#2c53a0", "#2c3da0", "#2c30a0", "#3a2ca0", "#412ca0", "#4b2ca0",
                              "#2ca092", "#2c75a0", "#2c5aa0", "#7a94d6", "#5b85f0", 
                              "#1c28d6", "#3a43bd", "#7279d4")) +
  geom_line(data=analysis_t1t2, aes(y=cgpa, x=time, group=studyid), alpha=.2, show.legend=F) + 
  geom_point(data=analysis_t1t2_graph, aes(x=time, y=cgpa_m, color=time), size=6, alpha=1, stat="identity", show.legend=F) + 
  geom_errorbar(data=analysis_t1t2_graph, aes(x=time, ymin=cgpa_l, ymax=cgpa_h, color=time), alpha=1, width=0.1, size=2, position="dodge", show.legend=F) +
  theme_classic() + theme(panel.spacing = unit(0, "lines"), strip.background = element_blank(), strip.placement = "outside", axis.title.x=element_blank(), plot.title = element_text(hjust = 0.5)) +
  ylab("Cumulative GPA") +
  scale_x_discrete(labels = function(x) str_wrap(x, width = 15))
 
 
 analysis_t1t2_well_graph <- read_csv("analysis_t1t2_well_graph.csv", 
                                      col_types = cols(time = col_factor(levels = c("pre-pandemic", 
                                                                                    "during-pandemic"))))
 
 ggplot()+ 
   geom_point(data=analysis_t1t2, aes(x=time, y=wellbeing_rating, color=studyid), size=4, stat="identity", position=position_dodge(0.10), alpha=.2, show.legend=F) + 
   scale_color_manual(values=c("#595d91", "#859cd6", "#2c4da0", "#2c62a0", "#2c96a0", "#2c87a0", "#c8cdde", "#afbae0", "#2ca09a","#2c91a0", "#2c77a0", "#2c5ea0", "#2c53a0", "#2c3da0", "#2c30a0", "#3a2ca0", "#412ca0", "#4b2ca0",
                               "#2ca092", "#2c75a0", "#2c5aa0", "#7a94d6", "#5b85f0", 
                               "#1c28d6", "#3a43bd", "#7279d4")) +
   geom_line(data=analysis_t1t2, aes(y=wellbeing_rating, x=time, group=studyid), alpha=.2, show.legend=F) + 
   geom_point(data=analysis_t1t2_well_graph, aes(x=time, y=m, color=time), size=6, alpha=1, stat="identity", show.legend=F) + 
   geom_errorbar(data=analysis_t1t2_well_graph, aes(x=time, ymin=min, ymax=max, color=time), alpha=1, width=0.1, size=2, position="dodge", show.legend=F) +
   theme_classic() + theme(panel.spacing = unit(0, "lines"), strip.background = element_blank(), strip.placement = "outside", axis.title.x=element_blank(), plot.title = element_text(hjust = 0.5)) +
   ylab("Wellbeing Ratings") +
   scale_x_discrete(labels = function(x) str_wrap(x, width = 15))
 
 

