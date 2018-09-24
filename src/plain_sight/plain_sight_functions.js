load("src/plain_sight/plain_sight.js");

function plainSightEncryptHide(inString,ruleString,passString){
	mask = new Mask();
	mask.setInString(inString);
	mask.setRuleString(ruleString);
	mask.setPass(passString);
	mask.setInString(mask.encrypt);
	return mask.hide;
}

function plainSightHide(inString,ruleString){
	mask = new Mask();
	mask.setInString(inString);
	mask.setRuleString(ruleString);
	return mask.hide;
}

function plainSightEncrypt(inString,passString){
	mask = new Mask();
	mask.setInString(inString);
	mask.setPassString(passString);
	return mask.encrypt;
}

function plainSightDecryptUnhide(inString,ruleString,passString){
	mask = new Mask();
	mask.setInString(inString);
	mask.setRuleString(ruleString);
	mask.setInString(mask.unhide);
	mask.setPass(passString);
	return mask.decrypt;
}

function plainSightUnhide(inString,ruleString,passString){
	mask = new Mask();
	mask.setInString(inString);
	mask.setRuleString(ruleString);
	return mask.unhide;
}

function plainSightDecrypt(inString,passString){
	mask = new Mask();
	mask.setInString(inString);
	mask.setPassString(passString);
	return mask.decrypt;
}