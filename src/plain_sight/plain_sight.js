class Mask {
	constructor(rules) {
		var count = 0;
		this.inString="";
		this.ruleString="";
		this.logString="";
		this.keyString="";
		if(rules){
			if(rules.rPrefix){
				this.rPrefix=rules.rPrefix;
			} else {
				this.rPrefix = "";
			}
			if(rules.rPostfix){
				this.rPostfix=rules.rPostfix;
			} else {
				this.rPostfix = "";
			}
			if(rules.rNumLineTypes){
				count++;
				this.rNumLineTypes=rules.rNumLineTypes;
			} else {
				this.rNumLineTypes = 0;
			}
			if(rules.rLineNum){
				count++;
				this.rLineNum=rules.rLineNum;
			} else {
				this.rLineNum = 0;
			}
			if(rules.rLinePrefixes){
				this.rLinePrefixes=rules.rLinePrefixes;
			} else {
				this.rLinePrefixes = [""];
			}
			if(rules.rNumCharsPerLine){
				count++;
				this.rNumCharsPerLine=rules.rNumCharsPerLine
			} else {
				this.rNumCharsPerLine = [0];
			}
			if(rules.rDataCharTypes){
				count++;
				this.rDataCharTypes=rules.rDataCharTypes;
			} else {
				this.rDataCharTypes = [""];
			}
			if(rules.rLineDelimiters){
				this.rLineDelimiters=rules.rDataCharTypes;
			} else {
				this.rLineDelimiters = [""];
			}
			if(rules.rLineOrder){
				count++;
				this.rLineOrder=rules.rLineOrder;
			} else {
				this.rLineOrder = "";
			}
			if(rules.rNumDigits){
				this.rNumDigits=rules.rNumDigits;
			} else {
				this.rNumDigits = [0];
			}
			if(rules.rStartTime){
				this.rStartTime=rules.rStartTime;
			} else {
				this.rStartTime = [0];
			}
			if(rules.rStartYear){
				this.rStartYear=rules.rStartYear;
			} else {
				this.rStartYear = [0];
			}
			if(rules.rStartMonth){
				this.rStartMonth=rules.rStartMonth;
			} else {
				this.rStartMonth = [0];
			}
			if(rules.rStartDay){
				this.rStartDay=rules.rStartDay;
			} else {
				this.rStartDay = [0];
			}
			if(rules.rStartHour){
				this.rStartHour=rules.rStartHour;
			} else {
				this.rStartHour = [0];
			}
			if(count==5){
				this.rulesValid = true;
			} else {
				this.rulesValid = false;
			}
		} else {
			this.rulesValid=false;
		}
	}

	setInString(input){
		if(input&&(typeof "string"==typeof input)){
			this.inString=input;
		} else {
			console.log("setInString Failed!  No input detected!");
		}
	}

	setRuleString(rules){
		if(rules){
			if(typeof rules == typeof "test"){
				this.ruleString=rules;
			} else {
				console.log("setRuleString Failed!  Input is not a string!");
			}
		} else {
			console.log("setRuleString Failed!  No input detected!");
		}
	}

	setKey(key){
		if(key){
			if(typeof key == typeof "test"){
				this.keyString=key;
			} else {
				console.log("setKey Failed! Input is not a string!");
			}
		} else {
			console.log("setKey Failed! No input detected!");
		}
	}

	get checkRules() {
		if(this.ruleString){
			if(this.parseRules(this.ruleString)){
				this.rulesValid = true;
				return true;
			} else {
				return false;
			}
		} else {
			return false;
		}
	}

	get encrypt(){
		var output = "";
		if(this.inString&&this.keyString){
			if(typeof this.inString == typeof "test" && typeof this.keyString == typeof "test"){
				var keyLength = this.keyString.length;
				var keyShift = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				var y = 0;
				for(var x = 0;x < keyLength; x++){
					keyShift[y] += this.keyString.codePointAt(x)+1;
					keyShift[19-y] += this.keyString.codePointAt(x)+y;
					keyShift[0] += Math.floor(this.keyString.codePointAt(x)*15/(13+y));
					keyShift[1] += Math.floor(this.keyString.codePointAt(x)*5/(11+y))+215;
					keyShift[2] += Math.floor(this.keyString.codePointAt(x)*11/(7+y));
					keyShift[3] += Math.floor(this.keyString.codePointAt(x)*2/(1+y))+184;
					keyShift[4] += Math.floor(this.keyString.codePointAt(x)*13/(2+y));
					keyShift[5] += Math.floor(this.keyString.codePointAt(x)*2/(5+y))+201;
					keyShift[6] += Math.floor(this.keyString.codePointAt(x)*15/(13+y));
					keyShift[7] += Math.floor(this.keyString.codePointAt(x)*5/(11+y))+243;
					keyShift[8] += Math.floor(this.keyString.codePointAt(x)*16/(7+y));
					keyShift[9] += Math.floor(this.keyString.codePointAt(x)*2/(1+y))+211;
					keyShift[10] += Math.floor(this.keyString.codePointAt(x)*14/(13+y));
					keyShift[11] += Math.floor(this.keyString.codePointAt(x)*4/(11+y))+191;
					keyShift[12] += Math.floor(this.keyString.codePointAt(x)*18/(7+y));
					keyShift[13] += Math.floor(this.keyString.codePointAt(x)*2/(1+y))+188;
					keyShift[14] += Math.floor(this.keyString.codePointAt(x)*13/(2+y));
					keyShift[15] += Math.floor(this.keyString.codePointAt(x)*2/(5+y))+209;
					keyShift[16] += Math.floor(this.keyString.codePointAt(x)*15/(13+y));
					keyShift[17] += Math.floor(this.keyString.codePointAt(x)*5/(11+y))+194;
					keyShift[18] += Math.floor(this.keyString.codePointAt(x)*24/(7+y));
					keyShift[19] += Math.floor(this.keyString.codePointAt(x)*2/(1+y))+280;
					switch(y) {
						case 0:
							keyShift[0] += keyShift[2]+Math.floor(this.keyString.codePointAt(x)*5/(13+y));
							keyShift[1] += Math.floor(this.keyString.codePointAt(x)*5/(11+y));
							keyShift[2] += Math.floor(this.keyString.codePointAt(x)*2/(7+y));
							keyShift[3] += keyShift[3]+Math.floor(this.keyString.codePointAt(x)*2/(1+y));
							keyShift[4] += Math.floor(this.keyString.codePointAt(x)*2/(2+y));
							keyShift[5] += Math.floor(this.keyString.codePointAt(x)*2/(5+y));
							keyShift[6] += keyShift[4]+Math.floor(this.keyString.codePointAt(x)*5/(13+y));
							keyShift[7] += Math.floor(this.keyString.codePointAt(x)*5/(11+y));
							keyShift[8] += Math.floor(this.keyString.codePointAt(x)*3/(7+y));
							keyShift[9] += keyShift[5]+Math.floor(this.keyString.codePointAt(x)*2/(1+y));
							keyShift[10] += Math.floor(this.keyString.codePointAt(x)*4/(13+y));
							keyShift[11] += Math.floor(this.keyString.codePointAt(x)*4/(11+y));
							keyShift[12] += keyShift[6]+Math.floor(this.keyString.codePointAt(x)*5/(7+y));
							keyShift[13] += Math.floor(this.keyString.codePointAt(x)*2/(1+y));
							keyShift[14] += Math.floor(this.keyString.codePointAt(x)*2/(2+y));
							keyShift[15] += keyShift[7]+Math.floor(this.keyString.codePointAt(x)*2/(5+y));
							keyShift[16] += Math.floor(this.keyString.codePointAt(x)*5/(13+y));
							keyShift[17] += Math.floor(this.keyString.codePointAt(x)*5/(11+y));
							keyShift[18] += keyShift[8]+Math.floor(this.keyString.codePointAt(x)*4/(7+y));
							keyShift[19] += Math.floor(this.keyString.codePointAt(x)*2/(1+y));
							y++;
							break;
						case 1:
							keyShift[0] += keyShift[1]+1 + Math.floor(this.keyString.codePointAt(keyLength-x-1)*5/(13+y));
							keyShift[1] += 19 + Math.floor(this.keyString.codePointAt(x)*8/(17+y));
							keyShift[2] += keyShift[3]+2 + Math.floor(this.keyString.codePointAt(keyLength-x-1)*2/(7+y));
							keyShift[3] += 18 + Math.floor(this.keyString.codePointAt(x)*2/(1+y));
							keyShift[4] += keyShift[5]+3 + Math.floor(this.keyString.codePointAt(keyLength-x-1)*2/(2+y));
							keyShift[5] += 17 + Math.floor(this.keyString.codePointAt(x)*2/(5+y));
							keyShift[6] += keyShift[7]+4 + Math.floor(this.keyString.codePointAt(keyLength-x-1)*5/(13+y));
							keyShift[7] += 16 + Math.floor(this.keyString.codePointAt(x)*5/(11+y));
							keyShift[8] += keyShift[9]+5 + Math.floor(this.keyString.codePointAt(keyLength-x-1)*3/(7+y));
							keyShift[9] += 15 + Math.floor(this.keyString.codePointAt(x)*2/(1+y));
							keyShift[10] += keyShift[11]+6 + Math.floor(this.keyString.codePointAt(keyLength-x-1)*4/(13+y));
							keyShift[11] += 14 + Math.floor(this.keyString.codePointAt(x)*4/(11+y));
							keyShift[12] += keyShift[13]+7 + Math.floor(this.keyString.codePointAt(keyLength-x-1)*5/(7+y));
							keyShift[13] += 13 + Math.floor(this.keyString.codePointAt(x)*2/(1+y));
							keyShift[14] += keyShift[15]+8 + Math.floor(this.keyString.codePointAt(keyLength-x-1)*2/(2+y));
							keyShift[15] += 12 + Math.floor(this.keyString.codePointAt(x)*2/(5+y));
							keyShift[16] += keyShift[17]+9 + Math.floor(this.keyString.codePointAt(keyLength-x-1)*5/(13+y));
							keyShift[17] += 11 + Math.floor(this.keyString.codePointAt(x)*5/(11+y));
							keyShift[18] += keyShift[19]+10 + Math.floor(this.keyString.codePointAt(keyLength-x-1)*4/(7+y));
							keyShift[19] += Math.floor(this.keyString.codePointAt(x)*2/(1+y));
							y++;
							break;
						case 2:
							keyShift[0] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*5/(9+y));
							keyShift[1] += keyShift[2]+Math.floor(this.keyString.codePointAt(keyLength-x-1)*5/(5+y));
							keyShift[2] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*2/(3+y));
							keyShift[3] += keyShift[4]+Math.floor(this.keyString.codePointAt(keyLength-x-1)*2/(5+y));
							keyShift[4] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*2/(6+y));
							keyShift[5] += keyShift[6]+Math.floor(this.keyString.codePointAt(keyLength-x-1)*2/(1+y));
							keyShift[6] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*5/(9+y));
							keyShift[7] += keyShift[10]+Math.floor(this.keyString.codePointAt(keyLength-x-1)*5/(6+y));
							keyShift[8] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*3/(3+y));
							keyShift[9] += keyShift[12]+Math.floor(this.keyString.codePointAt(keyLength-x-1)*2/(5+y));
							keyShift[10] += Math.floor(this.keyString.codePointAt(x)*4/(9+y));
							keyShift[11] += keyShift[14]+Math.floor(this.keyString.codePointAt(x)*4/(7+y));
							keyShift[12] += Math.floor(this.keyString.codePointAt(x)*5/(3+y));
							keyShift[13] += keyShift[16]+Math.floor(this.keyString.codePointAt(x)*2/(5+y));
							keyShift[14] += Math.floor(this.keyString.codePointAt(x)*2/(6+y));
							keyShift[15] += keyShift[18]+Math.floor(this.keyString.codePointAt(x)*2/(1+y));
							keyShift[16] += Math.floor(this.keyString.codePointAt(x)*5/(9+y));
							keyShift[17] += keyShift[1]+Math.floor(this.keyString.codePointAt(x)*5/(7+y));
							keyShift[18] += Math.floor(this.keyString.codePointAt(x)*4/(3+y));
							keyShift[19] += keyShift[3]+Math.floor(this.keyString.codePointAt(x)*2/(5+y));
							y++;
							break;
						case 3:
							keyShift[0] += 1+Math.floor(this.keyString.codePointAt(x)*10/(13+y));
							keyShift[1] += 1+Math.floor(this.keyString.codePointAt(x)*10/(11+y));
							keyShift[2] += 1+Math.floor(this.keyString.codePointAt(x)*7/(7+y));
							keyShift[3] += 1+Math.floor(this.keyString.codePointAt(x)*7/(1+y));
							keyShift[4] += 1+Math.floor(this.keyString.codePointAt(x)*7/(2+y));
							keyShift[5] += 1+Math.floor(this.keyString.codePointAt(x)*7/(5+y));
							keyShift[6] += 1+Math.floor(this.keyString.codePointAt(x)*10/(13+y));
							keyShift[7] += 1+Math.floor(this.keyString.codePointAt(x)*10/(11+y));
							keyShift[8] += 1+Math.floor(this.keyString.codePointAt(x)*8/(7+y));
							keyShift[9] += 1+Math.floor(this.keyString.codePointAt(x)*7/(1+y));
							keyShift[10] += 1+Math.floor(this.keyString.codePointAt(keyLength-x-1)*9/(13+y));
							keyShift[11] += 1+Math.floor(this.keyString.codePointAt(keyLength-x-1)*9/(11+y));
							keyShift[12] += 1+Math.floor(this.keyString.codePointAt(keyLength-x-1)*10/(7+y));
							keyShift[13] += 1+Math.floor(this.keyString.codePointAt(keyLength-x-1)*7/(1+y));
							keyShift[14] += 1+Math.floor(this.keyString.codePointAt(keyLength-x-1)*7/(2+y));
							keyShift[15] += 1+Math.floor(this.keyString.codePointAt(keyLength-x-1)*7/(5+y));
							keyShift[16] += 1+Math.floor(this.keyString.codePointAt(keyLength-x-1)*10/(13+y));
							keyShift[17] += 1+Math.floor(this.keyString.codePointAt(keyLength-x-1)*10/(11+y));
							keyShift[18] += 1+Math.floor(this.keyString.codePointAt(keyLength-x-1)*9/(7+y));
							keyShift[19] += 1+Math.floor(this.keyString.codePointAt(keyLength-x-1)*7/(1+y));
							y++;
							break;
						case 4:
							keyShift[0] += 5+Math.floor(this.keyString.codePointAt(keyLength-x-1)*5/(5+y));
							keyShift[1] += 5+Math.floor(this.keyString.codePointAt(keyLength-x-1)*5/(4+y));
							keyShift[2] += 5+Math.floor(this.keyString.codePointAt(x)*2/(y));
							keyShift[3] += 5+Math.floor(this.keyString.codePointAt(x)*2/(8+y));
							keyShift[4] += 5+Math.floor(this.keyString.codePointAt(keyLength-x-1)*2/(9+y));
							keyShift[5] += 5+Math.floor(this.keyString.codePointAt(keyLength-x-1)*2/(12+y));
							keyShift[6] += 5+Math.floor(this.keyString.codePointAt(x)*5/(6+y));
							keyShift[7] += 5+Math.floor(this.keyString.codePointAt(x)*5/(4+y));
							keyShift[8] += 5+Math.floor(this.keyString.codePointAt(keyLength-x-1)*3/(y));
							keyShift[9] += 5+Math.floor(this.keyString.codePointAt(keyLength-x-1)*2/(6+y));
							keyShift[10] += 5+Math.floor(this.keyString.codePointAt(x)*4/(6+y));
							keyShift[11] += 5+Math.floor(this.keyString.codePointAt(x)*4/(4+y));
							keyShift[12] += 5+Math.floor(this.keyString.codePointAt(keyLength-x-1)*5/(y));
							keyShift[13] += 5+Math.floor(this.keyString.codePointAt(keyLength-x-1)*2/(8+y));
							keyShift[14] += 5+Math.floor(this.keyString.codePointAt(x)*2/(9+y));
							keyShift[15] += 5+Math.floor(this.keyString.codePointAt(x)*2/(12+y));
							keyShift[16] += 5+Math.floor(this.keyString.codePointAt(keyLength-x-1)*5/(6+y));
							keyShift[17] += 5+Math.floor(this.keyString.codePointAt(keyLength-x-1)*5/(4+y));
							keyShift[18] += 5+Math.floor(this.keyString.codePointAt(x)*4/(y));
							keyShift[19] += 5+Math.floor(this.keyString.codePointAt(x)*2/(1+y));
							y++;
							break;
						case 5:
							keyShift[0] += Math.floor(this.keyString.codePointAt(x)*6/(13));
							keyShift[1] += Math.floor(this.keyString.codePointAt(x)*6/(11));
							keyShift[2] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*3/(7));
							keyShift[3] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*3/(1));
							keyShift[4] += Math.floor(this.keyString.codePointAt(x)*3/(2));
							keyShift[5] += Math.floor(this.keyString.codePointAt(x)*3/(5));
							keyShift[6] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*6/(13));
							keyShift[7] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*6/(11));
							keyShift[8] += Math.floor(this.keyString.codePointAt(x)*4/(7));
							keyShift[9] += Math.floor(this.keyString.codePointAt(x)*3/(1));
							keyShift[10] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*5/(13));
							keyShift[11] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*5/(11));
							keyShift[12] += Math.floor(this.keyString.codePointAt(x)*6/(7));
							keyShift[13] += Math.floor(this.keyString.codePointAt(x)*3/(1));
							keyShift[14] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*3/(2));
							keyShift[15] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*3/(5));
							keyShift[16] += Math.floor(this.keyString.codePointAt(x)*6/(13));
							keyShift[17] += Math.floor(this.keyString.codePointAt(x)*6/(11));
							keyShift[18] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*5/(7));
							keyShift[19] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*3/(1));
							y++;
							break;
						case 6:
							keyShift[0] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*2);
							keyShift[1] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*2);
							keyShift[2] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*2);
							keyShift[3] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*2);
							keyShift[4] += Math.floor(this.keyString.codePointAt(x)*2);
							keyShift[5] += Math.floor(this.keyString.codePointAt(x)*2);
							keyShift[6] += Math.floor(this.keyString.codePointAt(x)*2);
							keyShift[7] += Math.floor(this.keyString.codePointAt(x)*2);
							keyShift[8] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*2);
							keyShift[9] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*2);
							keyShift[10] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*2);
							keyShift[11] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*2);
							keyShift[12] += Math.floor(this.keyString.codePointAt(x)*2);
							keyShift[13] += Math.floor(this.keyString.codePointAt(x)*2);
							keyShift[14] += Math.floor(this.keyString.codePointAt(x)*2);
							keyShift[15] += Math.floor(this.keyString.codePointAt(x)*2);
							keyShift[16] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*2);
							keyShift[17] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*2);
							keyShift[18] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*2);
							keyShift[19] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*2);
							y++;
							break;
						case 7:
							keyShift[0] += Math.floor(this.keyString.codePointAt(x)+3);
							keyShift[1] += Math.floor(this.keyString.codePointAt(x)+3);
							keyShift[2] += Math.floor(this.keyString.codePointAt(x)+3);
							keyShift[3] += Math.floor(this.keyString.codePointAt(x)+3);
							keyShift[4] += Math.floor(this.keyString.codePointAt(keyLength-x-1)+3);
							keyShift[5] += Math.floor(this.keyString.codePointAt(keyLength-x-1)+3);
							keyShift[6] += Math.floor(this.keyString.codePointAt(keyLength-x-1)+3);
							keyShift[7] += Math.floor(this.keyString.codePointAt(keyLength-x-1)+3);
							keyShift[8] += Math.floor(this.keyString.codePointAt(x)+3);
							keyShift[9] += Math.floor(this.keyString.codePointAt(x)+3);
							keyShift[10] += Math.floor(this.keyString.codePointAt(x)+3);
							keyShift[11] += Math.floor(this.keyString.codePointAt(x)+3);
							keyShift[12] += Math.floor(this.keyString.codePointAt(keyLength-x-1)+3);
							keyShift[13] += Math.floor(this.keyString.codePointAt(keyLength-x-1)+3);
							keyShift[14] += Math.floor(this.keyString.codePointAt(keyLength-x-1)+3);
							keyShift[15] += Math.floor(this.keyString.codePointAt(keyLength-x-1)+3);
							keyShift[16] += Math.floor(this.keyString.codePointAt(x)+3);
							keyShift[17] += Math.floor(this.keyString.codePointAt(x)+3);
							keyShift[18] += Math.floor(this.keyString.codePointAt(x)+3);
							keyShift[19] += Math.floor(this.keyString.codePointAt(x)+3);
							y++;
							break;
						case 8:
							keyShift[0] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*13/(5+y));
							keyShift[1] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*11/(5+y));
							keyShift[2] += Math.floor(this.keyString.codePointAt(x)*7/(2+y));
							keyShift[3] += Math.floor(this.keyString.codePointAt(x)*3/(1+y));
							keyShift[4] += Math.floor(this.keyString.codePointAt(x)*3/(2+y));
							keyShift[5] += Math.floor(this.keyString.codePointAt(x)*5/(2+y));
							keyShift[6] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*13/(5+y));
							keyShift[7] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*11/(5+y));
							keyShift[8] += Math.floor(this.keyString.codePointAt(x)*7/(3+y));
							keyShift[9] += Math.floor(this.keyString.codePointAt(x)*3/(1+y));
							keyShift[10] += Math.floor(this.keyString.codePointAt(x)*13/(4+y));
							keyShift[11] += Math.floor(this.keyString.codePointAt(x)*11/(4+y));
							keyShift[12] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*7/(5+y));
							keyShift[13] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*3/(1+y));
							keyShift[14] += Math.floor(this.keyString.codePointAt(x)*5/(2+y));
							keyShift[15] += Math.floor(this.keyString.codePointAt(x)*5/(2+y));
							keyShift[16] += Math.floor(this.keyString.codePointAt(x)*13/(5+y));
							keyShift[17] += Math.floor(this.keyString.codePointAt(x)*11/(5+y));
							keyShift[18] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*7/(4+y));
							keyShift[19] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*3/(1+y));
							y++;
							break;
						case 9:
							keyShift[0] += 10+Math.floor(this.keyString.codePointAt(x)*5/(13+y));
							keyShift[1] += 11+Math.floor(this.keyString.codePointAt(x)*5/(11+y));
							keyShift[2] += 12+Math.floor(this.keyString.codePointAt(keyLength-x-1)*2/(7+y));
							keyShift[3] += 13+Math.floor(this.keyString.codePointAt(keyLength-x-1)*2/(1+y));
							keyShift[4] += 14+Math.floor(this.keyString.codePointAt(keyLength-x-1)*2/(2+y));
							keyShift[5] += 15+Math.floor(this.keyString.codePointAt(keyLength-x-1)*2/(5+y));
							keyShift[6] += 16+Math.floor(this.keyString.codePointAt(x)*5/(13+y));
							keyShift[7] += 17+Math.floor(this.keyString.codePointAt(x)*5/(11+y));
							keyShift[8] += 18+Math.floor(this.keyString.codePointAt(keyLength-x-1)*3/(7+y));
							keyShift[9] += 19+Math.floor(this.keyString.codePointAt(keyLength-x-1)*2/(1+y));
							keyShift[10] += 20+Math.floor(this.keyString.codePointAt(keyLength-x-1)*4/(13+y));
							keyShift[11] += 21+Math.floor(this.keyString.codePointAt(keyLength-x-1)*4/(11+y));
							keyShift[12] += 22+Math.floor(this.keyString.codePointAt(x)*5/(7+y));
							keyShift[13] += 23+Math.floor(this.keyString.codePointAt(x)*2/(1+y));
							keyShift[14] += 24+Math.floor(this.keyString.codePointAt(keyLength-x-1)*2/(2+y));
							keyShift[15] += 25+Math.floor(this.keyString.codePointAt(keyLength-x-1)*2/(5+y));
							keyShift[16] += 26+Math.floor(this.keyString.codePointAt(keyLength-x-1)*5/(13+y));
							keyShift[17] += 27+Math.floor(this.keyString.codePointAt(keyLength-x-1)*5/(11+y));
							keyShift[18] += 28+Math.floor(this.keyString.codePointAt(x)*4/(7+y));
							keyShift[19] += 29+Math.floor(this.keyString.codePointAt(x)*2/(1+y));
							y++;
							break;
						case 10:
							keyShift[0] += 3+Math.floor(this.keyString.codePointAt(keyLength-x-1));
							keyShift[1] += 5+Math.floor(this.keyString.codePointAt(keyLength-x-1));
							keyShift[2] += 2+Math.floor(this.keyString.codePointAt(keyLength-x-1));
							keyShift[3] += 3+Math.floor(this.keyString.codePointAt(x));
							keyShift[4] += 5+Math.floor(this.keyString.codePointAt(x));
							keyShift[5] += 2+Math.floor(this.keyString.codePointAt(x));
							keyShift[6] += 3+Math.floor(this.keyString.codePointAt(keyLength-x-1));
							keyShift[7] += 5+Math.floor(this.keyString.codePointAt(keyLength-x-1));
							keyShift[8] += 2+Math.floor(this.keyString.codePointAt(keyLength-x-1));
							keyShift[9] += 3+Math.floor(this.keyString.codePointAt(x));
							keyShift[10] += 5+Math.floor(this.keyString.codePointAt(x));
							keyShift[11] += 2+Math.floor(this.keyString.codePointAt(x));
							keyShift[12] += 3+Math.floor(this.keyString.codePointAt(keyLength-x-1));
							keyShift[13] += 5+Math.floor(this.keyString.codePointAt(keyLength-x-1));
							keyShift[14] += 2+Math.floor(this.keyString.codePointAt(keyLength-x-1));
							keyShift[15] += 3+Math.floor(this.keyString.codePointAt(x));
							keyShift[16] += 5+Math.floor(this.keyString.codePointAt(x));
							keyShift[17] += 2+Math.floor(this.keyString.codePointAt(x));
							keyShift[18] += 3+Math.floor(this.keyString.codePointAt(keyLength-x-1));
							keyShift[19] += 5+Math.floor(this.keyString.codePointAt(keyLength-x-1));
							y++;
							break;
						case 11:
							keyShift[0] += Math.floor(this.keyString.codePointAt(x));
							keyShift[1] += Math.floor(this.keyString.codePointAt(x)*5/(11));
							keyShift[2] += Math.floor(this.keyString.codePointAt(x));
							keyShift[3] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*2);
							keyShift[4] += Math.floor(this.keyString.codePointAt(keyLength-x-1));
							keyShift[5] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*2/(5));
							keyShift[6] += Math.floor(this.keyString.codePointAt(keyLength-x-1));
							keyShift[7] += Math.floor(this.keyString.codePointAt(x)*5/(11));
							keyShift[8] += Math.floor(this.keyString.codePointAt(x));
							keyShift[9] += Math.floor(this.keyString.codePointAt(x)*2);
							keyShift[10] += Math.floor(this.keyString.codePointAt(keyLength-x-1));
							keyShift[11] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*4/(11));
							keyShift[12] += Math.floor(this.keyString.codePointAt(keyLength-x-1));
							keyShift[13] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*2);
							keyShift[14] += Math.floor(this.keyString.codePointAt(x));
							keyShift[15] += Math.floor(this.keyString.codePointAt(x)*2/(5));
							keyShift[16] += Math.floor(this.keyString.codePointAt(x));
							keyShift[17] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*5/(11));
							keyShift[18] += Math.floor(this.keyString.codePointAt(keyLength-x-1));
							keyShift[19] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*2);
							y++;
							break;
						case 12:
							keyShift[0] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*3);
							keyShift[1] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*3);
							keyShift[2] += Math.floor(this.keyString.codePointAt(x)*3);
							keyShift[3] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*3);
							keyShift[4] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*3);
							keyShift[5] += Math.floor(this.keyString.codePointAt(x)*3);
							keyShift[6] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*3);
							keyShift[7] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*3);
							keyShift[8] += Math.floor(this.keyString.codePointAt(x)*3);
							keyShift[9] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*3);
							keyShift[10] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*3);
							keyShift[11] += Math.floor(this.keyString.codePointAt(x))*3;
							keyShift[12] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*3);
							keyShift[13] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*3);
							keyShift[14] += Math.floor(this.keyString.codePointAt(x)*3);
							keyShift[15] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*3);
							keyShift[16] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*3);
							keyShift[17] += Math.floor(this.keyString.codePointAt(x)*3);
							keyShift[18] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*3);
							keyShift[19] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*3);
							y++;
							break;
						case 13:
							keyShift[0] += Math.floor(this.keyString.codePointAt(x)*5+y);
							keyShift[1] += Math.floor(this.keyString.codePointAt(x)*5+y);
							keyShift[2] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*2+y);
							keyShift[3] += Math.floor(this.keyString.codePointAt(x)*2+y);
							keyShift[4] += Math.floor(this.keyString.codePointAt(x)*2+y);
							keyShift[5] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*2+y);
							keyShift[6] += Math.floor(this.keyString.codePointAt(x)*5+y);
							keyShift[7] += Math.floor(this.keyString.codePointAt(x)*5+y);
							keyShift[8] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*3+y);
							keyShift[9] += Math.floor(this.keyString.codePointAt(x)*2+y);
							keyShift[10] += Math.floor(this.keyString.codePointAt(x)*4+y);
							keyShift[11] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*4+y);
							keyShift[12] += Math.floor(this.keyString.codePointAt(x)*5+y);
							keyShift[13] += Math.floor(this.keyString.codePointAt(x)*2+y);
							keyShift[14] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*2+y);
							keyShift[15] += Math.floor(this.keyString.codePointAt(x)*2+y);
							keyShift[16] += Math.floor(this.keyString.codePointAt(x)*5+y);
							keyShift[17] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*5+y);
							keyShift[18] += Math.floor(this.keyString.codePointAt(x)*4+y);
							keyShift[19] += Math.floor(this.keyString.codePointAt(x)*2+y);
							y++;
							break;
						case 14:
							keyShift[0] += 1;
							keyShift[1] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*5/(11+y));
							keyShift[2] += 3;
							keyShift[3] += Math.floor(this.keyString.codePointAt(x)*2/(1+y));
							keyShift[4] += 1;
							keyShift[5] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*2/(5+y));
							keyShift[6] += 3;
							keyShift[7] += Math.floor(this.keyString.codePointAt(x)*5/(11+y));
							keyShift[8] += 1;
							keyShift[9] += Math.floor(this.keyString.codePointAt(x)*2/(1+y));
							keyShift[10] += 3;
							keyShift[11] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*4/(11+y));
							keyShift[12] += 1;
							keyShift[13] += Math.floor(this.keyString.codePointAt(x)*2/(1+y));
							keyShift[14] += 3;
							keyShift[15] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*2/(5+y));
							keyShift[16] += 1;
							keyShift[17] += Math.floor(this.keyString.codePointAt(x)*5/(11+y));
							keyShift[18] += 3;
							keyShift[19] += Math.floor(this.keyString.codePointAt(x)*2/(1+y));
							y++;
							break;
						case 15:
							keyShift[0] += Math.floor(this.keyString.codePointAt(keyLength-x-1)+5+(13+y));
							keyShift[1] += Math.floor(this.keyString.codePointAt(keyLength-x-1)+5+(11+y));
							keyShift[2] += Math.floor(this.keyString.codePointAt(keyLength-x-1)+2+(7+y));
							keyShift[3] += Math.floor(this.keyString.codePointAt(x)+2+(1+y));
							keyShift[4] += Math.floor(this.keyString.codePointAt(x)+2+(2+y));
							keyShift[5] += Math.floor(this.keyString.codePointAt(keyLength-x-1)+2+(5+y));
							keyShift[6] += Math.floor(this.keyString.codePointAt(keyLength-x-1)+5+(13+y));
							keyShift[7] += Math.floor(this.keyString.codePointAt(keyLength-x-1)+5+(11+y));
							keyShift[8] += Math.floor(this.keyString.codePointAt(x)+3+(7+y));
							keyShift[9] += Math.floor(this.keyString.codePointAt(x)+2+(1+y));
							keyShift[10] += Math.floor(this.keyString.codePointAt(keyLength-x-1)+4+(13+y));
							keyShift[11] += Math.floor(this.keyString.codePointAt(keyLength-x-1)+4+(11+y));
							keyShift[12] += Math.floor(this.keyString.codePointAt(keyLength-x-1)+5+(7+y));
							keyShift[13] += Math.floor(this.keyString.codePointAt(x)+2+(1+y));
							keyShift[14] += Math.floor(this.keyString.codePointAt(x)+2+(2+y));
							keyShift[15] += Math.floor(this.keyString.codePointAt(keyLength-x-1)+2+(5+y));
							keyShift[16] += Math.floor(this.keyString.codePointAt(keyLength-x-1)+5+(13+y));
							keyShift[17] += Math.floor(this.keyString.codePointAt(keyLength-x-1)+5+(11+y));
							keyShift[18] += Math.floor(this.keyString.codePointAt(x)+4+(7+y));
							keyShift[19] += Math.floor(this.keyString.codePointAt(x)+2+(1+y));
							y++;
							break;
						case 16:
							keyShift[0] += Math.floor(this.keyString.codePointAt(keyLength-x-1)+1);
							keyShift[1] += Math.floor(this.keyString.codePointAt(keyLength-x-1)+1);
							keyShift[2] += Math.floor(this.keyString.codePointAt(x)+1);
							keyShift[3] += Math.floor(this.keyString.codePointAt(x)+1);
							keyShift[4] += Math.floor(this.keyString.codePointAt(x)+1);
							keyShift[5] += Math.floor(this.keyString.codePointAt(x)+1);
							keyShift[6] += Math.floor(this.keyString.codePointAt(x)+1);
							keyShift[7] += Math.floor(this.keyString.codePointAt(keyLength-x-1)+1);
							keyShift[8] += Math.floor(this.keyString.codePointAt(keyLength-x-1)+1);
							keyShift[9] += Math.floor(this.keyString.codePointAt(x)+1);
							keyShift[10] += Math.floor(this.keyString.codePointAt(x)+1);
							keyShift[11] += Math.floor(this.keyString.codePointAt(x)+1);
							keyShift[12] += Math.floor(this.keyString.codePointAt(x)+1);
							keyShift[13] += Math.floor(this.keyString.codePointAt(x)+1);
							keyShift[14] += Math.floor(this.keyString.codePointAt(keyLength-x-1)+1);
							keyShift[15] += Math.floor(this.keyString.codePointAt(keyLength-x-1)+1);
							keyShift[16] += Math.floor(this.keyString.codePointAt(x)+1);
							keyShift[17] += Math.floor(this.keyString.codePointAt(x)+1);
							keyShift[18] += Math.floor(this.keyString.codePointAt(x)+1);
							keyShift[19] += Math.floor(this.keyString.codePointAt(x)+1);
							y++;
							break;
						case 17:
							keyShift[0] += Math.floor(this.keyString.codePointAt(x)+11);
							keyShift[1] += Math.floor(this.keyString.codePointAt(keyLength-x-1)+11);
							keyShift[2] += Math.floor(this.keyString.codePointAt(x)+11);
							keyShift[3] += Math.floor(this.keyString.codePointAt(keyLength-x-1)+11);
							keyShift[4] += Math.floor(this.keyString.codePointAt(x)+11);
							keyShift[5] += Math.floor(this.keyString.codePointAt(x)+11);
							keyShift[6] += Math.floor(this.keyString.codePointAt(keyLength-x-1)+11);
							keyShift[7] += Math.floor(this.keyString.codePointAt(x)+11);
							keyShift[8] += Math.floor(this.keyString.codePointAt(keyLength-x-1)+11);
							keyShift[9] += Math.floor(this.keyString.codePointAt(x)+11);
							keyShift[10] += Math.floor(this.keyString.codePointAt(x)+11);
							keyShift[11] += Math.floor(this.keyString.codePointAt(keyLength-x-1)+11);
							keyShift[12] += Math.floor(this.keyString.codePointAt(x)+11);
							keyShift[13] += Math.floor(this.keyString.codePointAt(keyLength-x-1)+11);
							keyShift[14] += Math.floor(this.keyString.codePointAt(x)+11);
							keyShift[15] += Math.floor(this.keyString.codePointAt(x)+11);
							keyShift[16] += Math.floor(this.keyString.codePointAt(keyLength-x-1)+11);
							keyShift[17] += Math.floor(this.keyString.codePointAt(x)+11);
							keyShift[18] += Math.floor(this.keyString.codePointAt(keyLength-x-1)+11);
							keyShift[19] += Math.floor(this.keyString.codePointAt(x)+11);
							y++;
							break;
						case 18:
							keyShift[0] += Math.floor(this.keyString.codePointAt(x)*115/(13+y));
							keyShift[1] += Math.floor(this.keyString.codePointAt(x)*115/(11+y));
							keyShift[2] += Math.floor(this.keyString.codePointAt(x)*112/(7+y));
							keyShift[3] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*112/(1+y));
							keyShift[4] += Math.floor(this.keyString.codePointAt(x)*112/(2+y));
							keyShift[5] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*112/(5+y));
							keyShift[6] += Math.floor(this.keyString.codePointAt(x)*115/(13+y));
							keyShift[7] += Math.floor(this.keyString.codePointAt(x)*115/(11+y));
							keyShift[8] += Math.floor(this.keyString.codePointAt(x)*113/(7+y));
							keyShift[9] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*112/(1+y));
							keyShift[10] += Math.floor(this.keyString.codePointAt(x)*114/(13+y));
							keyShift[11] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*114/(11+y));
							keyShift[12] += Math.floor(this.keyString.codePointAt(x)*115/(7+y));
							keyShift[13] += Math.floor(this.keyString.codePointAt(x)*112/(1+y));
							keyShift[14] += Math.floor(this.keyString.codePointAt(x)*112/(2+y));
							keyShift[15] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*112/(5+y));
							keyShift[16] += Math.floor(this.keyString.codePointAt(x)*115/(13+y));
							keyShift[17] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*115/(11+y));
							keyShift[18] += Math.floor(this.keyString.codePointAt(x)*114/(7+y));
							keyShift[19] += Math.floor(this.keyString.codePointAt(x)*112/(1+y));
							y++;
							break;
						case 19:
							keyShift[0] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*35/(13+y));
							keyShift[1] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*35/(11+y));
							keyShift[2] += Math.floor(this.keyString.codePointAt(x)*32/(7+y));
							keyShift[3] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*32/(1+y));
							keyShift[4] += Math.floor(this.keyString.codePointAt(x)*32/(2+y));
							keyShift[5] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*32/(5+y));
							keyShift[6] += Math.floor(this.keyString.codePointAt(x)*35/(13+y));
							keyShift[7] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*35/(11+y));
							keyShift[8] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*33/(7+y));
							keyShift[9] += Math.floor(this.keyString.codePointAt(x)*32/(1+y));
							keyShift[10] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*34/(13+y));
							keyShift[11] += Math.floor(this.keyString.codePointAt(x)*34/(11+y));
							keyShift[12] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*35/(7+y));
							keyShift[13] += Math.floor(this.keyString.codePointAt(x)*32/(1+y));
							keyShift[14] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*32/(2+y));
							keyShift[15] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*32/(5+y));
							keyShift[16] += Math.floor(this.keyString.codePointAt(x)*35/(13+y));
							keyShift[17] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*35/(11+y));
							keyShift[18] += Math.floor(this.keyString.codePointAt(x)*34/(7+y));
							keyShift[19] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*32/(1+y));
							y=0;
							break;
						default:
							y=0;
					}
				}
				var inputLength = this.inString.length;
				var input = this.inString[inputLength-1] + this.inString[inputLength-1] + this.inString + this.inString[0] + this.inString[0];
				var outShift = [];
				var z = 0;
				console.log(keyShift);
				for(var x = 0;x < inputLength;x++){
					outShift = [];
					outShift.push(Number.parseInt(keyShift[0]));
					outShift.push(Number.parseInt(keyShift[1]));
					outShift.push(Number.parseInt(keyShift[2]));
					outShift.push(Number.parseInt(keyShift[3]));
					outShift.push(Number.parseInt(keyShift[4]));
					outShift[0] += input.codePointAt(x+4)+input.codePointAt(x)+x;
					outShift[1] += input.codePointAt(x+1)+input.codePointAt(x+2)+x;
					if(input.codePointAt(x+2)==10){
						outShift[2] += 31;
					} else {
						outShift[2] += input.codePointAt(x+2);
					}
					outShift[3] += input.codePointAt(x)+input.codePointAt(x+1)+x;
					outShift[4] += input.codePointAt(x+3)+input.codePointAt(x+4)+x;
					switch(z) {
						case 0:
							outShift[2] += keyShift[5]+keyShift[6]+keyShift[7]+keyShift[11]+keyShift[8]+keyShift[9]+x;
							z++;
							break;
						case 1:
							outShift[2] += keyShift[4]+keyShift[2]+keyShift[7]+keyShift[3]+keyShift[13]+keyShift[0]+Math.floor(x/8);
							z++;
							break;
						case 2:
							outShift[2] += keyShift[10]+keyShift[11]+keyShift[1]+keyShift[12]+keyShift[13]+keyShift[14]+Math.floor(x/2);
							z++;
							break;
						case 3:
							outShift[2] += keyShift[15]+keyShift[16]+keyShift[4]+keyShift[17]+keyShift[18]+keyShift[19]+Math.floor(x/3);
							z++;
							break;
						case 4:
							outShift[2] += keyShift[6]+keyShift[7]+keyShift[8]+keyShift[12]+keyShift[9]+keyShift[10]+x;
							z++;
							break;
						case 5:
							outShift[2] += keyShift[5]+keyShift[3]+keyShift[8]+keyShift[4]+keyShift[14]+keyShift[1]+Math.floor(x/8);
							z++;
							break;
						case 6:
							outShift[2] += keyShift[11]+keyShift[12]+keyShift[2]+keyShift[13]+keyShift[14]+keyShift[15]+Math.floor(x/2);
							z++;
							break;
						case 7:
							outShift[2] += keyShift[16]+keyShift[17]+keyShift[5]+keyShift[18]+keyShift[19]+keyShift[0]+Math.floor(x/3);
							z++;
							break;
						case 8:
							outShift[2] += keyShift[5]+keyShift[10]+keyShift[19]+keyShift[4]+keyShift[7]+keyShift[3]+Math.floor(x/4);
							z++;
							break;
						case 9:
							outShift[2] += keyShift[7]+keyShift[8]+keyShift[9]+keyShift[13]+keyShift[10]+keyShift[11]+x;
							z++;
							break;
						case 10:
							outShift[2] += keyShift[6]+keyShift[4]+keyShift[9]+keyShift[5]+keyShift[15]+keyShift[2]+Math.floor(x/8);
							z++;
							break;
						case 11:
							outShift[2] += keyShift[12]+keyShift[13]+keyShift[3]+keyShift[14]+keyShift[15]+keyShift[16]+Math.floor(x/2);
							z++;
							break;
						case 12:
							outShift[2] += keyShift[17]+keyShift[18]+keyShift[6]+keyShift[19]+keyShift[0]+keyShift[1]+Math.floor(x/3);
							z++;
							break;
						case 13:
							outShift[2] += keyShift[5]+keyShift[6]+keyShift[7]+keyShift[12]+keyShift[8]+keyShift[9]+x;
							z++;
							break;
						case 14:
							outShift[2] += keyShift[4]+keyShift[2]+keyShift[7]+keyShift[3]+keyShift[14]+keyShift[0]+Math.floor(x/8);
							z++;
							break;
						case 15:
							outShift[2] += keyShift[5]+keyShift[11]+keyShift[1]+keyShift[12]+keyShift[13]+keyShift[14]+Math.floor(x/2);
							z++;
							break;
						case 16:
							outShift[2] += keyShift[15]+keyShift[16]+keyShift[4]+keyShift[17]+keyShift[18]+keyShift[7]+Math.floor(x/3);
							z++;
							break;
						case 17:
							outShift[2] += keyShift[6]+keyShift[0]+keyShift[8]+keyShift[12]+keyShift[9]+keyShift[10]+x;
							z++;
							break;
						case 18:
							outShift[2] += keyShift[5]+keyShift[3]+keyShift[8]+keyShift[4]+keyShift[14]+keyShift[2]+Math.floor(x/8);
							z++;
							break;
						case 19:
							outShift[2] += keyShift[11]+keyShift[12]+keyShift[2]+keyShift[13]+keyShift[14]+keyShift[16]+Math.floor(x/2);
							z++;
							break;
						case 20:
							outShift[2] += keyShift[16]+keyShift[17]+keyShift[5]+keyShift[18]+keyShift[9]+keyShift[0]+Math.floor(x/3);
							z++;
							break;
						case 21:
							outShift[2] += keyShift[5]+keyShift[10]+keyShift[18]+keyShift[4]+keyShift[7]+keyShift[3]+Math.floor(x/4);
							z++;
							break;
						case 22:
							outShift[2] += keyShift[7]+keyShift[8]+keyShift[9]+keyShift[3]+keyShift[10]+keyShift[11]+x;
							z++;
							break;
						case 23:
							outShift[2] += keyShift[6]+keyShift[4]+keyShift[9]+keyShift[5]+keyShift[16]+keyShift[2]+Math.floor(x/8);
							z++;
							break;
						case 24:
							outShift[2] += keyShift[12]+keyShift[13]+keyShift[3]+keyShift[8]+keyShift[15]+keyShift[16]+Math.floor(x/2);
							z++;
							break;
						case 25:
							outShift[2] += keyShift[10]+keyShift[18]+keyShift[6]+keyShift[19]+keyShift[0]+keyShift[1]+Math.floor(x/3);
							z++;
							break;
						case 26:
							outShift[2] += keyShift[5]+keyShift[10]+keyShift[11]+keyShift[4]+keyShift[7]+keyShift[3]+Math.floor(x/4);
							z = 0;
							break;
						default:
							z = 0;
					}
					for(var y = 0;y < 5;y++){
						if(outShift[y]>125){
							while(outShift[y]>125){
								outShift[y] = outShift[y] - 126 + 31;
								if(outShift[y]>1260){
									outShift[y] = outShift[y] - 1260 + 310;
								}
							}
						}
						if(outShift[y]==31){
							output += String.fromCharCode(10);
						} else {
							output += String.fromCharCode(outShift[y]);
						}
					}
				}
				return output;
			}
		}
		return false;
	}

	get decrypt(){
		var output = "";
		if(this.inString&&this.keyString){
			if(typeof this.inString == typeof "test" && typeof this.keyString == typeof "test"){
				var keyLength = this.keyString.length;
				var keyShift = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				var y = 0;
				for(var x = 0;x < keyLength; x++){
					keyShift[y] += this.keyString.codePointAt(x)+1;
					keyShift[19-y] += this.keyString.codePointAt(x)+y;
					keyShift[0] += Math.floor(this.keyString.codePointAt(x)*15/(13+y));
					keyShift[1] += Math.floor(this.keyString.codePointAt(x)*5/(11+y))+215;
					keyShift[2] += Math.floor(this.keyString.codePointAt(x)*11/(7+y));
					keyShift[3] += Math.floor(this.keyString.codePointAt(x)*2/(1+y))+184;
					keyShift[4] += Math.floor(this.keyString.codePointAt(x)*13/(2+y));
					keyShift[5] += Math.floor(this.keyString.codePointAt(x)*2/(5+y))+201;
					keyShift[6] += Math.floor(this.keyString.codePointAt(x)*15/(13+y));
					keyShift[7] += Math.floor(this.keyString.codePointAt(x)*5/(11+y))+243;
					keyShift[8] += Math.floor(this.keyString.codePointAt(x)*16/(7+y));
					keyShift[9] += Math.floor(this.keyString.codePointAt(x)*2/(1+y))+211;
					keyShift[10] += Math.floor(this.keyString.codePointAt(x)*14/(13+y));
					keyShift[11] += Math.floor(this.keyString.codePointAt(x)*4/(11+y))+191;
					keyShift[12] += Math.floor(this.keyString.codePointAt(x)*18/(7+y));
					keyShift[13] += Math.floor(this.keyString.codePointAt(x)*2/(1+y))+188;
					keyShift[14] += Math.floor(this.keyString.codePointAt(x)*13/(2+y));
					keyShift[15] += Math.floor(this.keyString.codePointAt(x)*2/(5+y))+209;
					keyShift[16] += Math.floor(this.keyString.codePointAt(x)*15/(13+y));
					keyShift[17] += Math.floor(this.keyString.codePointAt(x)*5/(11+y))+194;
					keyShift[18] += Math.floor(this.keyString.codePointAt(x)*24/(7+y));
					keyShift[19] += Math.floor(this.keyString.codePointAt(x)*2/(1+y))+280;
					switch(y) {
						case 0:
							keyShift[0] += keyShift[2]+Math.floor(this.keyString.codePointAt(x)*5/(13+y));
							keyShift[1] += Math.floor(this.keyString.codePointAt(x)*5/(11+y));
							keyShift[2] += Math.floor(this.keyString.codePointAt(x)*2/(7+y));
							keyShift[3] += keyShift[3]+Math.floor(this.keyString.codePointAt(x)*2/(1+y));
							keyShift[4] += Math.floor(this.keyString.codePointAt(x)*2/(2+y));
							keyShift[5] += Math.floor(this.keyString.codePointAt(x)*2/(5+y));
							keyShift[6] += keyShift[4]+Math.floor(this.keyString.codePointAt(x)*5/(13+y));
							keyShift[7] += Math.floor(this.keyString.codePointAt(x)*5/(11+y));
							keyShift[8] += Math.floor(this.keyString.codePointAt(x)*3/(7+y));
							keyShift[9] += keyShift[5]+Math.floor(this.keyString.codePointAt(x)*2/(1+y));
							keyShift[10] += Math.floor(this.keyString.codePointAt(x)*4/(13+y));
							keyShift[11] += Math.floor(this.keyString.codePointAt(x)*4/(11+y));
							keyShift[12] += keyShift[6]+Math.floor(this.keyString.codePointAt(x)*5/(7+y));
							keyShift[13] += Math.floor(this.keyString.codePointAt(x)*2/(1+y));
							keyShift[14] += Math.floor(this.keyString.codePointAt(x)*2/(2+y));
							keyShift[15] += keyShift[7]+Math.floor(this.keyString.codePointAt(x)*2/(5+y));
							keyShift[16] += Math.floor(this.keyString.codePointAt(x)*5/(13+y));
							keyShift[17] += Math.floor(this.keyString.codePointAt(x)*5/(11+y));
							keyShift[18] += keyShift[8]+Math.floor(this.keyString.codePointAt(x)*4/(7+y));
							keyShift[19] += Math.floor(this.keyString.codePointAt(x)*2/(1+y));
							y++;
							break;
						case 1:
							keyShift[0] += keyShift[1]+1 + Math.floor(this.keyString.codePointAt(keyLength-x-1)*5/(13+y));
							keyShift[1] += 19 + Math.floor(this.keyString.codePointAt(x)*8/(17+y));
							keyShift[2] += keyShift[3]+2 + Math.floor(this.keyString.codePointAt(keyLength-x-1)*2/(7+y));
							keyShift[3] += 18 + Math.floor(this.keyString.codePointAt(x)*2/(1+y));
							keyShift[4] += keyShift[5]+3 + Math.floor(this.keyString.codePointAt(keyLength-x-1)*2/(2+y));
							keyShift[5] += 17 + Math.floor(this.keyString.codePointAt(x)*2/(5+y));
							keyShift[6] += keyShift[7]+4 + Math.floor(this.keyString.codePointAt(keyLength-x-1)*5/(13+y));
							keyShift[7] += 16 + Math.floor(this.keyString.codePointAt(x)*5/(11+y));
							keyShift[8] += keyShift[9]+5 + Math.floor(this.keyString.codePointAt(keyLength-x-1)*3/(7+y));
							keyShift[9] += 15 + Math.floor(this.keyString.codePointAt(x)*2/(1+y));
							keyShift[10] += keyShift[11]+6 + Math.floor(this.keyString.codePointAt(keyLength-x-1)*4/(13+y));
							keyShift[11] += 14 + Math.floor(this.keyString.codePointAt(x)*4/(11+y));
							keyShift[12] += keyShift[13]+7 + Math.floor(this.keyString.codePointAt(keyLength-x-1)*5/(7+y));
							keyShift[13] += 13 + Math.floor(this.keyString.codePointAt(x)*2/(1+y));
							keyShift[14] += keyShift[15]+8 + Math.floor(this.keyString.codePointAt(keyLength-x-1)*2/(2+y));
							keyShift[15] += 12 + Math.floor(this.keyString.codePointAt(x)*2/(5+y));
							keyShift[16] += keyShift[17]+9 + Math.floor(this.keyString.codePointAt(keyLength-x-1)*5/(13+y));
							keyShift[17] += 11 + Math.floor(this.keyString.codePointAt(x)*5/(11+y));
							keyShift[18] += keyShift[19]+10 + Math.floor(this.keyString.codePointAt(keyLength-x-1)*4/(7+y));
							keyShift[19] += Math.floor(this.keyString.codePointAt(x)*2/(1+y));
							y++;
							break;
						case 2:
							keyShift[0] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*5/(9+y));
							keyShift[1] += keyShift[2]+Math.floor(this.keyString.codePointAt(keyLength-x-1)*5/(5+y));
							keyShift[2] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*2/(3+y));
							keyShift[3] += keyShift[4]+Math.floor(this.keyString.codePointAt(keyLength-x-1)*2/(5+y));
							keyShift[4] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*2/(6+y));
							keyShift[5] += keyShift[6]+Math.floor(this.keyString.codePointAt(keyLength-x-1)*2/(1+y));
							keyShift[6] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*5/(9+y));
							keyShift[7] += keyShift[10]+Math.floor(this.keyString.codePointAt(keyLength-x-1)*5/(6+y));
							keyShift[8] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*3/(3+y));
							keyShift[9] += keyShift[12]+Math.floor(this.keyString.codePointAt(keyLength-x-1)*2/(5+y));
							keyShift[10] += Math.floor(this.keyString.codePointAt(x)*4/(9+y));
							keyShift[11] += keyShift[14]+Math.floor(this.keyString.codePointAt(x)*4/(7+y));
							keyShift[12] += Math.floor(this.keyString.codePointAt(x)*5/(3+y));
							keyShift[13] += keyShift[16]+Math.floor(this.keyString.codePointAt(x)*2/(5+y));
							keyShift[14] += Math.floor(this.keyString.codePointAt(x)*2/(6+y));
							keyShift[15] += keyShift[18]+Math.floor(this.keyString.codePointAt(x)*2/(1+y));
							keyShift[16] += Math.floor(this.keyString.codePointAt(x)*5/(9+y));
							keyShift[17] += keyShift[1]+Math.floor(this.keyString.codePointAt(x)*5/(7+y));
							keyShift[18] += Math.floor(this.keyString.codePointAt(x)*4/(3+y));
							keyShift[19] += keyShift[3]+Math.floor(this.keyString.codePointAt(x)*2/(5+y));
							y++;
							break;
						case 3:
							keyShift[0] += 1+Math.floor(this.keyString.codePointAt(x)*10/(13+y));
							keyShift[1] += 1+Math.floor(this.keyString.codePointAt(x)*10/(11+y));
							keyShift[2] += 1+Math.floor(this.keyString.codePointAt(x)*7/(7+y));
							keyShift[3] += 1+Math.floor(this.keyString.codePointAt(x)*7/(1+y));
							keyShift[4] += 1+Math.floor(this.keyString.codePointAt(x)*7/(2+y));
							keyShift[5] += 1+Math.floor(this.keyString.codePointAt(x)*7/(5+y));
							keyShift[6] += 1+Math.floor(this.keyString.codePointAt(x)*10/(13+y));
							keyShift[7] += 1+Math.floor(this.keyString.codePointAt(x)*10/(11+y));
							keyShift[8] += 1+Math.floor(this.keyString.codePointAt(x)*8/(7+y));
							keyShift[9] += 1+Math.floor(this.keyString.codePointAt(x)*7/(1+y));
							keyShift[10] += 1+Math.floor(this.keyString.codePointAt(keyLength-x-1)*9/(13+y));
							keyShift[11] += 1+Math.floor(this.keyString.codePointAt(keyLength-x-1)*9/(11+y));
							keyShift[12] += 1+Math.floor(this.keyString.codePointAt(keyLength-x-1)*10/(7+y));
							keyShift[13] += 1+Math.floor(this.keyString.codePointAt(keyLength-x-1)*7/(1+y));
							keyShift[14] += 1+Math.floor(this.keyString.codePointAt(keyLength-x-1)*7/(2+y));
							keyShift[15] += 1+Math.floor(this.keyString.codePointAt(keyLength-x-1)*7/(5+y));
							keyShift[16] += 1+Math.floor(this.keyString.codePointAt(keyLength-x-1)*10/(13+y));
							keyShift[17] += 1+Math.floor(this.keyString.codePointAt(keyLength-x-1)*10/(11+y));
							keyShift[18] += 1+Math.floor(this.keyString.codePointAt(keyLength-x-1)*9/(7+y));
							keyShift[19] += 1+Math.floor(this.keyString.codePointAt(keyLength-x-1)*7/(1+y));
							y++;
							break;
						case 4:
							keyShift[0] += 5+Math.floor(this.keyString.codePointAt(keyLength-x-1)*5/(5+y));
							keyShift[1] += 5+Math.floor(this.keyString.codePointAt(keyLength-x-1)*5/(4+y));
							keyShift[2] += 5+Math.floor(this.keyString.codePointAt(x)*2/(y));
							keyShift[3] += 5+Math.floor(this.keyString.codePointAt(x)*2/(8+y));
							keyShift[4] += 5+Math.floor(this.keyString.codePointAt(keyLength-x-1)*2/(9+y));
							keyShift[5] += 5+Math.floor(this.keyString.codePointAt(keyLength-x-1)*2/(12+y));
							keyShift[6] += 5+Math.floor(this.keyString.codePointAt(x)*5/(6+y));
							keyShift[7] += 5+Math.floor(this.keyString.codePointAt(x)*5/(4+y));
							keyShift[8] += 5+Math.floor(this.keyString.codePointAt(keyLength-x-1)*3/(y));
							keyShift[9] += 5+Math.floor(this.keyString.codePointAt(keyLength-x-1)*2/(6+y));
							keyShift[10] += 5+Math.floor(this.keyString.codePointAt(x)*4/(6+y));
							keyShift[11] += 5+Math.floor(this.keyString.codePointAt(x)*4/(4+y));
							keyShift[12] += 5+Math.floor(this.keyString.codePointAt(keyLength-x-1)*5/(y));
							keyShift[13] += 5+Math.floor(this.keyString.codePointAt(keyLength-x-1)*2/(8+y));
							keyShift[14] += 5+Math.floor(this.keyString.codePointAt(x)*2/(9+y));
							keyShift[15] += 5+Math.floor(this.keyString.codePointAt(x)*2/(12+y));
							keyShift[16] += 5+Math.floor(this.keyString.codePointAt(keyLength-x-1)*5/(6+y));
							keyShift[17] += 5+Math.floor(this.keyString.codePointAt(keyLength-x-1)*5/(4+y));
							keyShift[18] += 5+Math.floor(this.keyString.codePointAt(x)*4/(y));
							keyShift[19] += 5+Math.floor(this.keyString.codePointAt(x)*2/(1+y));
							y++;
							break;
						case 5:
							keyShift[0] += Math.floor(this.keyString.codePointAt(x)*6/(13));
							keyShift[1] += Math.floor(this.keyString.codePointAt(x)*6/(11));
							keyShift[2] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*3/(7));
							keyShift[3] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*3/(1));
							keyShift[4] += Math.floor(this.keyString.codePointAt(x)*3/(2));
							keyShift[5] += Math.floor(this.keyString.codePointAt(x)*3/(5));
							keyShift[6] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*6/(13));
							keyShift[7] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*6/(11));
							keyShift[8] += Math.floor(this.keyString.codePointAt(x)*4/(7));
							keyShift[9] += Math.floor(this.keyString.codePointAt(x)*3/(1));
							keyShift[10] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*5/(13));
							keyShift[11] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*5/(11));
							keyShift[12] += Math.floor(this.keyString.codePointAt(x)*6/(7));
							keyShift[13] += Math.floor(this.keyString.codePointAt(x)*3/(1));
							keyShift[14] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*3/(2));
							keyShift[15] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*3/(5));
							keyShift[16] += Math.floor(this.keyString.codePointAt(x)*6/(13));
							keyShift[17] += Math.floor(this.keyString.codePointAt(x)*6/(11));
							keyShift[18] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*5/(7));
							keyShift[19] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*3/(1));
							y++;
							break;
						case 6:
							keyShift[0] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*2);
							keyShift[1] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*2);
							keyShift[2] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*2);
							keyShift[3] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*2);
							keyShift[4] += Math.floor(this.keyString.codePointAt(x)*2);
							keyShift[5] += Math.floor(this.keyString.codePointAt(x)*2);
							keyShift[6] += Math.floor(this.keyString.codePointAt(x)*2);
							keyShift[7] += Math.floor(this.keyString.codePointAt(x)*2);
							keyShift[8] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*2);
							keyShift[9] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*2);
							keyShift[10] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*2);
							keyShift[11] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*2);
							keyShift[12] += Math.floor(this.keyString.codePointAt(x)*2);
							keyShift[13] += Math.floor(this.keyString.codePointAt(x)*2);
							keyShift[14] += Math.floor(this.keyString.codePointAt(x)*2);
							keyShift[15] += Math.floor(this.keyString.codePointAt(x)*2);
							keyShift[16] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*2);
							keyShift[17] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*2);
							keyShift[18] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*2);
							keyShift[19] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*2);
							y++;
							break;
						case 7:
							keyShift[0] += Math.floor(this.keyString.codePointAt(x)+3);
							keyShift[1] += Math.floor(this.keyString.codePointAt(x)+3);
							keyShift[2] += Math.floor(this.keyString.codePointAt(x)+3);
							keyShift[3] += Math.floor(this.keyString.codePointAt(x)+3);
							keyShift[4] += Math.floor(this.keyString.codePointAt(keyLength-x-1)+3);
							keyShift[5] += Math.floor(this.keyString.codePointAt(keyLength-x-1)+3);
							keyShift[6] += Math.floor(this.keyString.codePointAt(keyLength-x-1)+3);
							keyShift[7] += Math.floor(this.keyString.codePointAt(keyLength-x-1)+3);
							keyShift[8] += Math.floor(this.keyString.codePointAt(x)+3);
							keyShift[9] += Math.floor(this.keyString.codePointAt(x)+3);
							keyShift[10] += Math.floor(this.keyString.codePointAt(x)+3);
							keyShift[11] += Math.floor(this.keyString.codePointAt(x)+3);
							keyShift[12] += Math.floor(this.keyString.codePointAt(keyLength-x-1)+3);
							keyShift[13] += Math.floor(this.keyString.codePointAt(keyLength-x-1)+3);
							keyShift[14] += Math.floor(this.keyString.codePointAt(keyLength-x-1)+3);
							keyShift[15] += Math.floor(this.keyString.codePointAt(keyLength-x-1)+3);
							keyShift[16] += Math.floor(this.keyString.codePointAt(x)+3);
							keyShift[17] += Math.floor(this.keyString.codePointAt(x)+3);
							keyShift[18] += Math.floor(this.keyString.codePointAt(x)+3);
							keyShift[19] += Math.floor(this.keyString.codePointAt(x)+3);
							y++;
							break;
						case 8:
							keyShift[0] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*13/(5+y));
							keyShift[1] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*11/(5+y));
							keyShift[2] += Math.floor(this.keyString.codePointAt(x)*7/(2+y));
							keyShift[3] += Math.floor(this.keyString.codePointAt(x)*3/(1+y));
							keyShift[4] += Math.floor(this.keyString.codePointAt(x)*3/(2+y));
							keyShift[5] += Math.floor(this.keyString.codePointAt(x)*5/(2+y));
							keyShift[6] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*13/(5+y));
							keyShift[7] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*11/(5+y));
							keyShift[8] += Math.floor(this.keyString.codePointAt(x)*7/(3+y));
							keyShift[9] += Math.floor(this.keyString.codePointAt(x)*3/(1+y));
							keyShift[10] += Math.floor(this.keyString.codePointAt(x)*13/(4+y));
							keyShift[11] += Math.floor(this.keyString.codePointAt(x)*11/(4+y));
							keyShift[12] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*7/(5+y));
							keyShift[13] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*3/(1+y));
							keyShift[14] += Math.floor(this.keyString.codePointAt(x)*5/(2+y));
							keyShift[15] += Math.floor(this.keyString.codePointAt(x)*5/(2+y));
							keyShift[16] += Math.floor(this.keyString.codePointAt(x)*13/(5+y));
							keyShift[17] += Math.floor(this.keyString.codePointAt(x)*11/(5+y));
							keyShift[18] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*7/(4+y));
							keyShift[19] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*3/(1+y));
							y++;
							break;
						case 9:
							keyShift[0] += 10+Math.floor(this.keyString.codePointAt(x)*5/(13+y));
							keyShift[1] += 11+Math.floor(this.keyString.codePointAt(x)*5/(11+y));
							keyShift[2] += 12+Math.floor(this.keyString.codePointAt(keyLength-x-1)*2/(7+y));
							keyShift[3] += 13+Math.floor(this.keyString.codePointAt(keyLength-x-1)*2/(1+y));
							keyShift[4] += 14+Math.floor(this.keyString.codePointAt(keyLength-x-1)*2/(2+y));
							keyShift[5] += 15+Math.floor(this.keyString.codePointAt(keyLength-x-1)*2/(5+y));
							keyShift[6] += 16+Math.floor(this.keyString.codePointAt(x)*5/(13+y));
							keyShift[7] += 17+Math.floor(this.keyString.codePointAt(x)*5/(11+y));
							keyShift[8] += 18+Math.floor(this.keyString.codePointAt(keyLength-x-1)*3/(7+y));
							keyShift[9] += 19+Math.floor(this.keyString.codePointAt(keyLength-x-1)*2/(1+y));
							keyShift[10] += 20+Math.floor(this.keyString.codePointAt(keyLength-x-1)*4/(13+y));
							keyShift[11] += 21+Math.floor(this.keyString.codePointAt(keyLength-x-1)*4/(11+y));
							keyShift[12] += 22+Math.floor(this.keyString.codePointAt(x)*5/(7+y));
							keyShift[13] += 23+Math.floor(this.keyString.codePointAt(x)*2/(1+y));
							keyShift[14] += 24+Math.floor(this.keyString.codePointAt(keyLength-x-1)*2/(2+y));
							keyShift[15] += 25+Math.floor(this.keyString.codePointAt(keyLength-x-1)*2/(5+y));
							keyShift[16] += 26+Math.floor(this.keyString.codePointAt(keyLength-x-1)*5/(13+y));
							keyShift[17] += 27+Math.floor(this.keyString.codePointAt(keyLength-x-1)*5/(11+y));
							keyShift[18] += 28+Math.floor(this.keyString.codePointAt(x)*4/(7+y));
							keyShift[19] += 29+Math.floor(this.keyString.codePointAt(x)*2/(1+y));
							y++;
							break;
						case 10:
							keyShift[0] += 3+Math.floor(this.keyString.codePointAt(keyLength-x-1));
							keyShift[1] += 5+Math.floor(this.keyString.codePointAt(keyLength-x-1));
							keyShift[2] += 2+Math.floor(this.keyString.codePointAt(keyLength-x-1));
							keyShift[3] += 3+Math.floor(this.keyString.codePointAt(x));
							keyShift[4] += 5+Math.floor(this.keyString.codePointAt(x));
							keyShift[5] += 2+Math.floor(this.keyString.codePointAt(x));
							keyShift[6] += 3+Math.floor(this.keyString.codePointAt(keyLength-x-1));
							keyShift[7] += 5+Math.floor(this.keyString.codePointAt(keyLength-x-1));
							keyShift[8] += 2+Math.floor(this.keyString.codePointAt(keyLength-x-1));
							keyShift[9] += 3+Math.floor(this.keyString.codePointAt(x));
							keyShift[10] += 5+Math.floor(this.keyString.codePointAt(x));
							keyShift[11] += 2+Math.floor(this.keyString.codePointAt(x));
							keyShift[12] += 3+Math.floor(this.keyString.codePointAt(keyLength-x-1));
							keyShift[13] += 5+Math.floor(this.keyString.codePointAt(keyLength-x-1));
							keyShift[14] += 2+Math.floor(this.keyString.codePointAt(keyLength-x-1));
							keyShift[15] += 3+Math.floor(this.keyString.codePointAt(x));
							keyShift[16] += 5+Math.floor(this.keyString.codePointAt(x));
							keyShift[17] += 2+Math.floor(this.keyString.codePointAt(x));
							keyShift[18] += 3+Math.floor(this.keyString.codePointAt(keyLength-x-1));
							keyShift[19] += 5+Math.floor(this.keyString.codePointAt(keyLength-x-1));
							y++;
							break;
						case 11:
							keyShift[0] += Math.floor(this.keyString.codePointAt(x));
							keyShift[1] += Math.floor(this.keyString.codePointAt(x)*5/(11));
							keyShift[2] += Math.floor(this.keyString.codePointAt(x));
							keyShift[3] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*2);
							keyShift[4] += Math.floor(this.keyString.codePointAt(keyLength-x-1));
							keyShift[5] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*2/(5));
							keyShift[6] += Math.floor(this.keyString.codePointAt(keyLength-x-1));
							keyShift[7] += Math.floor(this.keyString.codePointAt(x)*5/(11));
							keyShift[8] += Math.floor(this.keyString.codePointAt(x));
							keyShift[9] += Math.floor(this.keyString.codePointAt(x)*2);
							keyShift[10] += Math.floor(this.keyString.codePointAt(keyLength-x-1));
							keyShift[11] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*4/(11));
							keyShift[12] += Math.floor(this.keyString.codePointAt(keyLength-x-1));
							keyShift[13] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*2);
							keyShift[14] += Math.floor(this.keyString.codePointAt(x));
							keyShift[15] += Math.floor(this.keyString.codePointAt(x)*2/(5));
							keyShift[16] += Math.floor(this.keyString.codePointAt(x));
							keyShift[17] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*5/(11));
							keyShift[18] += Math.floor(this.keyString.codePointAt(keyLength-x-1));
							keyShift[19] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*2);
							y++;
							break;
						case 12:
							keyShift[0] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*3);
							keyShift[1] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*3);
							keyShift[2] += Math.floor(this.keyString.codePointAt(x)*3);
							keyShift[3] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*3);
							keyShift[4] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*3);
							keyShift[5] += Math.floor(this.keyString.codePointAt(x)*3);
							keyShift[6] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*3);
							keyShift[7] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*3);
							keyShift[8] += Math.floor(this.keyString.codePointAt(x)*3);
							keyShift[9] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*3);
							keyShift[10] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*3);
							keyShift[11] += Math.floor(this.keyString.codePointAt(x))*3;
							keyShift[12] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*3);
							keyShift[13] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*3);
							keyShift[14] += Math.floor(this.keyString.codePointAt(x)*3);
							keyShift[15] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*3);
							keyShift[16] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*3);
							keyShift[17] += Math.floor(this.keyString.codePointAt(x)*3);
							keyShift[18] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*3);
							keyShift[19] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*3);
							y++;
							break;
						case 13:
							keyShift[0] += Math.floor(this.keyString.codePointAt(x)*5+y);
							keyShift[1] += Math.floor(this.keyString.codePointAt(x)*5+y);
							keyShift[2] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*2+y);
							keyShift[3] += Math.floor(this.keyString.codePointAt(x)*2+y);
							keyShift[4] += Math.floor(this.keyString.codePointAt(x)*2+y);
							keyShift[5] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*2+y);
							keyShift[6] += Math.floor(this.keyString.codePointAt(x)*5+y);
							keyShift[7] += Math.floor(this.keyString.codePointAt(x)*5+y);
							keyShift[8] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*3+y);
							keyShift[9] += Math.floor(this.keyString.codePointAt(x)*2+y);
							keyShift[10] += Math.floor(this.keyString.codePointAt(x)*4+y);
							keyShift[11] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*4+y);
							keyShift[12] += Math.floor(this.keyString.codePointAt(x)*5+y);
							keyShift[13] += Math.floor(this.keyString.codePointAt(x)*2+y);
							keyShift[14] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*2+y);
							keyShift[15] += Math.floor(this.keyString.codePointAt(x)*2+y);
							keyShift[16] += Math.floor(this.keyString.codePointAt(x)*5+y);
							keyShift[17] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*5+y);
							keyShift[18] += Math.floor(this.keyString.codePointAt(x)*4+y);
							keyShift[19] += Math.floor(this.keyString.codePointAt(x)*2+y);
							y++;
							break;
						case 14:
							keyShift[0] += 1;
							keyShift[1] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*5/(11+y));
							keyShift[2] += 3;
							keyShift[3] += Math.floor(this.keyString.codePointAt(x)*2/(1+y));
							keyShift[4] += 1;
							keyShift[5] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*2/(5+y));
							keyShift[6] += 3;
							keyShift[7] += Math.floor(this.keyString.codePointAt(x)*5/(11+y));
							keyShift[8] += 1;
							keyShift[9] += Math.floor(this.keyString.codePointAt(x)*2/(1+y));
							keyShift[10] += 3;
							keyShift[11] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*4/(11+y));
							keyShift[12] += 1;
							keyShift[13] += Math.floor(this.keyString.codePointAt(x)*2/(1+y));
							keyShift[14] += 3;
							keyShift[15] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*2/(5+y));
							keyShift[16] += 1;
							keyShift[17] += Math.floor(this.keyString.codePointAt(x)*5/(11+y));
							keyShift[18] += 3;
							keyShift[19] += Math.floor(this.keyString.codePointAt(x)*2/(1+y));
							y++;
							break;
						case 15:
							keyShift[0] += Math.floor(this.keyString.codePointAt(keyLength-x-1)+5+(13+y));
							keyShift[1] += Math.floor(this.keyString.codePointAt(keyLength-x-1)+5+(11+y));
							keyShift[2] += Math.floor(this.keyString.codePointAt(keyLength-x-1)+2+(7+y));
							keyShift[3] += Math.floor(this.keyString.codePointAt(x)+2+(1+y));
							keyShift[4] += Math.floor(this.keyString.codePointAt(x)+2+(2+y));
							keyShift[5] += Math.floor(this.keyString.codePointAt(keyLength-x-1)+2+(5+y));
							keyShift[6] += Math.floor(this.keyString.codePointAt(keyLength-x-1)+5+(13+y));
							keyShift[7] += Math.floor(this.keyString.codePointAt(keyLength-x-1)+5+(11+y));
							keyShift[8] += Math.floor(this.keyString.codePointAt(x)+3+(7+y));
							keyShift[9] += Math.floor(this.keyString.codePointAt(x)+2+(1+y));
							keyShift[10] += Math.floor(this.keyString.codePointAt(keyLength-x-1)+4+(13+y));
							keyShift[11] += Math.floor(this.keyString.codePointAt(keyLength-x-1)+4+(11+y));
							keyShift[12] += Math.floor(this.keyString.codePointAt(keyLength-x-1)+5+(7+y));
							keyShift[13] += Math.floor(this.keyString.codePointAt(x)+2+(1+y));
							keyShift[14] += Math.floor(this.keyString.codePointAt(x)+2+(2+y));
							keyShift[15] += Math.floor(this.keyString.codePointAt(keyLength-x-1)+2+(5+y));
							keyShift[16] += Math.floor(this.keyString.codePointAt(keyLength-x-1)+5+(13+y));
							keyShift[17] += Math.floor(this.keyString.codePointAt(keyLength-x-1)+5+(11+y));
							keyShift[18] += Math.floor(this.keyString.codePointAt(x)+4+(7+y));
							keyShift[19] += Math.floor(this.keyString.codePointAt(x)+2+(1+y));
							y++;
							break;
						case 16:
							keyShift[0] += Math.floor(this.keyString.codePointAt(keyLength-x-1)+1);
							keyShift[1] += Math.floor(this.keyString.codePointAt(keyLength-x-1)+1);
							keyShift[2] += Math.floor(this.keyString.codePointAt(x)+1);
							keyShift[3] += Math.floor(this.keyString.codePointAt(x)+1);
							keyShift[4] += Math.floor(this.keyString.codePointAt(x)+1);
							keyShift[5] += Math.floor(this.keyString.codePointAt(x)+1);
							keyShift[6] += Math.floor(this.keyString.codePointAt(x)+1);
							keyShift[7] += Math.floor(this.keyString.codePointAt(keyLength-x-1)+1);
							keyShift[8] += Math.floor(this.keyString.codePointAt(keyLength-x-1)+1);
							keyShift[9] += Math.floor(this.keyString.codePointAt(x)+1);
							keyShift[10] += Math.floor(this.keyString.codePointAt(x)+1);
							keyShift[11] += Math.floor(this.keyString.codePointAt(x)+1);
							keyShift[12] += Math.floor(this.keyString.codePointAt(x)+1);
							keyShift[13] += Math.floor(this.keyString.codePointAt(x)+1);
							keyShift[14] += Math.floor(this.keyString.codePointAt(keyLength-x-1)+1);
							keyShift[15] += Math.floor(this.keyString.codePointAt(keyLength-x-1)+1);
							keyShift[16] += Math.floor(this.keyString.codePointAt(x)+1);
							keyShift[17] += Math.floor(this.keyString.codePointAt(x)+1);
							keyShift[18] += Math.floor(this.keyString.codePointAt(x)+1);
							keyShift[19] += Math.floor(this.keyString.codePointAt(x)+1);
							y++;
							break;
						case 17:
							keyShift[0] += Math.floor(this.keyString.codePointAt(x)+11);
							keyShift[1] += Math.floor(this.keyString.codePointAt(keyLength-x-1)+11);
							keyShift[2] += Math.floor(this.keyString.codePointAt(x)+11);
							keyShift[3] += Math.floor(this.keyString.codePointAt(keyLength-x-1)+11);
							keyShift[4] += Math.floor(this.keyString.codePointAt(x)+11);
							keyShift[5] += Math.floor(this.keyString.codePointAt(x)+11);
							keyShift[6] += Math.floor(this.keyString.codePointAt(keyLength-x-1)+11);
							keyShift[7] += Math.floor(this.keyString.codePointAt(x)+11);
							keyShift[8] += Math.floor(this.keyString.codePointAt(keyLength-x-1)+11);
							keyShift[9] += Math.floor(this.keyString.codePointAt(x)+11);
							keyShift[10] += Math.floor(this.keyString.codePointAt(x)+11);
							keyShift[11] += Math.floor(this.keyString.codePointAt(keyLength-x-1)+11);
							keyShift[12] += Math.floor(this.keyString.codePointAt(x)+11);
							keyShift[13] += Math.floor(this.keyString.codePointAt(keyLength-x-1)+11);
							keyShift[14] += Math.floor(this.keyString.codePointAt(x)+11);
							keyShift[15] += Math.floor(this.keyString.codePointAt(x)+11);
							keyShift[16] += Math.floor(this.keyString.codePointAt(keyLength-x-1)+11);
							keyShift[17] += Math.floor(this.keyString.codePointAt(x)+11);
							keyShift[18] += Math.floor(this.keyString.codePointAt(keyLength-x-1)+11);
							keyShift[19] += Math.floor(this.keyString.codePointAt(x)+11);
							y++;
							break;
						case 18:
							keyShift[0] += Math.floor(this.keyString.codePointAt(x)*115/(13+y));
							keyShift[1] += Math.floor(this.keyString.codePointAt(x)*115/(11+y));
							keyShift[2] += Math.floor(this.keyString.codePointAt(x)*112/(7+y));
							keyShift[3] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*112/(1+y));
							keyShift[4] += Math.floor(this.keyString.codePointAt(x)*112/(2+y));
							keyShift[5] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*112/(5+y));
							keyShift[6] += Math.floor(this.keyString.codePointAt(x)*115/(13+y));
							keyShift[7] += Math.floor(this.keyString.codePointAt(x)*115/(11+y));
							keyShift[8] += Math.floor(this.keyString.codePointAt(x)*113/(7+y));
							keyShift[9] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*112/(1+y));
							keyShift[10] += Math.floor(this.keyString.codePointAt(x)*114/(13+y));
							keyShift[11] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*114/(11+y));
							keyShift[12] += Math.floor(this.keyString.codePointAt(x)*115/(7+y));
							keyShift[13] += Math.floor(this.keyString.codePointAt(x)*112/(1+y));
							keyShift[14] += Math.floor(this.keyString.codePointAt(x)*112/(2+y));
							keyShift[15] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*112/(5+y));
							keyShift[16] += Math.floor(this.keyString.codePointAt(x)*115/(13+y));
							keyShift[17] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*115/(11+y));
							keyShift[18] += Math.floor(this.keyString.codePointAt(x)*114/(7+y));
							keyShift[19] += Math.floor(this.keyString.codePointAt(x)*112/(1+y));
							y++;
							break;
						case 19:
							keyShift[0] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*35/(13+y));
							keyShift[1] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*35/(11+y));
							keyShift[2] += Math.floor(this.keyString.codePointAt(x)*32/(7+y));
							keyShift[3] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*32/(1+y));
							keyShift[4] += Math.floor(this.keyString.codePointAt(x)*32/(2+y));
							keyShift[5] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*32/(5+y));
							keyShift[6] += Math.floor(this.keyString.codePointAt(x)*35/(13+y));
							keyShift[7] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*35/(11+y));
							keyShift[8] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*33/(7+y));
							keyShift[9] += Math.floor(this.keyString.codePointAt(x)*32/(1+y));
							keyShift[10] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*34/(13+y));
							keyShift[11] += Math.floor(this.keyString.codePointAt(x)*34/(11+y));
							keyShift[12] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*35/(7+y));
							keyShift[13] += Math.floor(this.keyString.codePointAt(x)*32/(1+y));
							keyShift[14] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*32/(2+y));
							keyShift[15] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*32/(5+y));
							keyShift[16] += Math.floor(this.keyString.codePointAt(x)*35/(13+y));
							keyShift[17] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*35/(11+y));
							keyShift[18] += Math.floor(this.keyString.codePointAt(x)*34/(7+y));
							keyShift[19] += Math.floor(this.keyString.codePointAt(keyLength-x-1)*32/(1+y));
							y=0;
							break;
						default:
							y=0;
					}
				}
				var inputLength = this.inString.length;
				var outShift = 0;
				var z = 0;
				for(var x = 0;x*5 < inputLength;x++){
					outShift = Number.parseInt(keyShift[2]);
					switch(z) {
					case 0:
						outShift += keyShift[5]+keyShift[6]+keyShift[7]+keyShift[11]+keyShift[8]+keyShift[9]+x;
						z++;
						break;
					case 1:
						outShift += keyShift[4]+keyShift[2]+keyShift[7]+keyShift[3]+keyShift[13]+keyShift[0]+Math.floor(x/8);
						z++;
						break;
					case 2:
						outShift += keyShift[10]+keyShift[11]+keyShift[1]+keyShift[12]+keyShift[13]+keyShift[14]+Math.floor(x/2);
						z++;
						break;
					case 3:
						outShift += keyShift[15]+keyShift[16]+keyShift[4]+keyShift[17]+keyShift[18]+keyShift[19]+Math.floor(x/3);
						z++;
						break;
					case 4:
						outShift += keyShift[6]+keyShift[7]+keyShift[8]+keyShift[12]+keyShift[9]+keyShift[10]+x;
						z++;
						break;
					case 5:
						outShift += keyShift[5]+keyShift[3]+keyShift[8]+keyShift[4]+keyShift[14]+keyShift[1]+Math.floor(x/8);
						z++;
						break;
					case 6:
						outShift += keyShift[11]+keyShift[12]+keyShift[2]+keyShift[13]+keyShift[14]+keyShift[15]+Math.floor(x/2);
						z++;
						break;
					case 7:
						outShift += keyShift[16]+keyShift[17]+keyShift[5]+keyShift[18]+keyShift[19]+keyShift[0]+Math.floor(x/3);
						z++;
						break;
					case 8:
						outShift += keyShift[5]+keyShift[10]+keyShift[19]+keyShift[4]+keyShift[7]+keyShift[3]+Math.floor(x/4);
						z++;
						break;
					case 9:
						outShift += keyShift[7]+keyShift[8]+keyShift[9]+keyShift[13]+keyShift[10]+keyShift[11]+x;
						z++;
						break;
					case 10:
						outShift += keyShift[6]+keyShift[4]+keyShift[9]+keyShift[5]+keyShift[15]+keyShift[2]+Math.floor(x/8);
						z++;
						break;
					case 11:
						outShift += keyShift[12]+keyShift[13]+keyShift[3]+keyShift[14]+keyShift[15]+keyShift[16]+Math.floor(x/2);
						z++;
						break;
					case 12:
						outShift += keyShift[17]+keyShift[18]+keyShift[6]+keyShift[19]+keyShift[0]+keyShift[1]+Math.floor(x/3);
						z++;
						break;
					case 13:
						outShift += keyShift[5]+keyShift[6]+keyShift[7]+keyShift[12]+keyShift[8]+keyShift[9]+x;
						z++;
						break;
					case 14:
						outShift += keyShift[4]+keyShift[2]+keyShift[7]+keyShift[3]+keyShift[14]+keyShift[0]+Math.floor(x/8);
						z++;
						break;
					case 15:
						outShift += keyShift[5]+keyShift[11]+keyShift[1]+keyShift[12]+keyShift[13]+keyShift[14]+Math.floor(x/2);
						z++;
						break;
					case 16:
						outShift += keyShift[15]+keyShift[16]+keyShift[4]+keyShift[17]+keyShift[18]+keyShift[7]+Math.floor(x/3);
						z++;
						break;
					case 17:
						outShift += keyShift[6]+keyShift[0]+keyShift[8]+keyShift[12]+keyShift[9]+keyShift[10]+x;
						z++;
						break;
					case 18:
						outShift += keyShift[5]+keyShift[3]+keyShift[8]+keyShift[4]+keyShift[14]+keyShift[2]+Math.floor(x/8);
						z++;
						break;
					case 19:
						outShift += keyShift[11]+keyShift[12]+keyShift[2]+keyShift[13]+keyShift[14]+keyShift[16]+Math.floor(x/2);
						z++;
						break;
					case 20:
						outShift += keyShift[16]+keyShift[17]+keyShift[5]+keyShift[18]+keyShift[9]+keyShift[0]+Math.floor(x/3);
						z++;
						break;
					case 21:
						outShift += keyShift[5]+keyShift[10]+keyShift[18]+keyShift[4]+keyShift[7]+keyShift[3]+Math.floor(x/4);
						z++;
						break;
					case 22:
						outShift += keyShift[7]+keyShift[8]+keyShift[9]+keyShift[3]+keyShift[10]+keyShift[11]+x;
						z++;
						break;
					case 23:
						outShift += keyShift[6]+keyShift[4]+keyShift[9]+keyShift[5]+keyShift[16]+keyShift[2]+Math.floor(x/8);
						z++;
						break;
					case 24:
						outShift += keyShift[12]+keyShift[13]+keyShift[3]+keyShift[8]+keyShift[15]+keyShift[16]+Math.floor(x/2);
						z++;
						break;
					case 25:
						outShift += keyShift[10]+keyShift[18]+keyShift[6]+keyShift[19]+keyShift[0]+keyShift[1]+Math.floor(x/3);
						z++;
						break;
					case 26:
						outShift += keyShift[5]+keyShift[10]+keyShift[11]+keyShift[4]+keyShift[7]+keyShift[3]+Math.floor(x/4);
						z = 0;
						break;
					default:
						z = 0;
				}
					var j = -outShift;
					if(this.inString.codePointAt(5*x+2)==10){
						j+=31;
					} else {
						j+=this.inString.codePointAt(5*x+2);
					}
					if(j<31){
						while(j<31){
							j = j + 126 - 31;
							if(j<(31-(1260-310))){
								j = j + 1260 - 310;
							}
						}
					}
					if(j==31){
						output += String.fromCharCode(10);
					} else {
						output += String.fromCharCode(j);
					}
				}
				return output;
			}
		}
		return false;
	}

	get debugRules() {
		this.logString="";
		this.rulesValid=false;
		this.rPrefix = "";
		this.rPostfix = "";
		this.rNumLineTypes = 0;
		this.rLineNum = 0;
		this.rLinePrefixes = [""];
		this.rNumCharsPerLine = [0];
		this.rDataCharTypes = [""];
		this.rLineDelimiters = [""];
		this.rLineOrder = "";
		this.rLog = "";
		this.rNumDigits = [0];
		this.rStartTime = [0];
		this.rStartYear = [0];
		this.rStartMonth = [0];
		this.rStartDay = [0];
		this.rStartHour = [0];
		this.rLineNum = 0;
		var ruleLine = "";
		var lines = this.ruleString.split("\n");
		var foundStartPrefix = false;
		var foundEndPrefix = false;
		var foundNumDataLineTypes = false;
		var foundNextDataLine = false;
		var foundNextStartLinePrefix = false;
		var foundNextEndLinePrefix = false;
		var foundNextNumDataCharsPerLine = false;
		var foundNextDataCharType = false;
		var foundNextStartLineDelimiter = false;
		var foundNextEndLineDelimiter = false;
		var foundStartDataLineOrder = false;
		var foundEndDataLineOrder = false;
		var foundStartPostFix = false;
		var foundEndPostFix = false;
		var switcher = false;
		var splits = "";
		for(var x = 0; x < lines.length; x++){
			ruleLine = lines[x];
			splits = ruleLine.split(" ");
			if (ruleLine.length>=1){
				if (ruleLine.substring(0,1)=="#"){
					this.logString += "Rule File Line " + x + " Is A Comment => Skipping\n";
					continue;
				} else if (ruleLine.substring(0,1)==" "){
					this.logString += "Rule File Line " + x + " Is A Comment => Skipping\n";
					continue;
				}
			}
			if (ruleLine.length>=2){
				if(ruleLine.substring(0,2)=="//"){
					this.logString += "Rule File Line " + x + " Is A Comment => Skipping\n";
					continue;
				}
			}
			if (ruleLine=="\n"){
				this.logString += "Rule File Line " + x + " Is A Carriage Return => Skipping\n";
				continue;
			}
			if (foundStartPrefix) {
				if (foundEndPrefix) {
					if (foundNumDataLineTypes) {
						if (foundNextDataLine) {
							if (foundNextStartLinePrefix) {
								if (foundNextEndLinePrefix) {
									if (foundNextNumDataCharsPerLine) {
										if (foundNextDataCharType) {
											if (foundNextStartLineDelimiter) {
												if (foundNextEndLineDelimiter) {
													if (foundStartDataLineOrder) {
														if (foundEndDataLineOrder) {
															if (foundStartPostFix) {
																if(switcher){
																	console.log("Rule File Parsing: Found <FilePostfix> on ruleLine " + (x+1) + "\n");
																	switcher = false;
																}
																if (foundEndPostFix) {
																	break;
																} else {
																	for(var y = 14; y <= ruleLine.length; y++) {
																		if(ruleLine.substring(y-14,y)=="</FilePostfix>"){
																			this.rPostfix = this.rPostfix.concat(ruleLine.substring(0,y-14));
																			foundEndPostFix = true;
																			switcher = true;
																			this.logString += "Found </FilePostfix> On Rule File Line " + x + "\n";
																		}
																	}
																	for(var y = 20; (y <= ruleLine.length)&&!switcher; y++) {
																		if(ruleLine.substring(y-20,y)=="&lt;/FilePostfix&gt;"){
																			this.rPostfix = this.rPostfix.concat(ruleLine.substring(0,y-20));
																			foundEndPostFix = true;
																			switcher = true;
																			this.logString += "Found </FilePostfix> On Rule File Line " + x + "\n";
																		}
																	}
																	if(!foundEndPostFix){
																		this.rPostfix = this.rPostfix.concat(ruleLine+"\n");
																	}
																}
															} else {
																if (ruleLine.length>=13){
																	if (ruleLine.substring(0,13)=="<FilePostfix>"){
																		switcher = true;
																		foundStartPostFix = true;
																		this.logString += "Found <FilePostfix> On Rule File Line " + x + "\n";
																		this.rPostfix = ruleLine.substring(13,ruleLine.length)+"\n";
																		if(this.rPostfix.length >= 14){
																			for(var y = 14; y <= ruleLine.length; y++) {
																				if(ruleLine.substring(y-14,y)=="</FilePostfix>"){
																					this.rPostfix = ruleLine.substring(13,y-14);
																					foundEndPostFix = true;
																					this.logString += "Found <FilePostfix> and </FilePostfix> On Rule File Line " + x + "\n";
																					break;
																				}
																			}

																		}
																	}
																	if (ruleLine.length>=19 && !switcher){
																		if (ruleLine.substring(0,19)=="&lt;FilePostfix&gt;"){
																			switcher = true;
																			foundStartPostFix = true;
																			this.logString += "Found <FilePostfix> On Rule File Line " + x + "\n";
																			this.rPostfix = ruleLine.substring(19,ruleLine.length)+"\n";
																			if(this.rPostfix.length >= 20){
																				for(var y = 20; y <= ruleLine.length; y++) {
																					if(ruleLine.substring(y-20,y)=="&lt;/FilePostfix&gt;"){
																						this.rPostfix = ruleLine.substring(19,y-20);
																						foundEndPostFix = true;
																						this.logString += "Found <FilePostfix> and </FilePostfix> On Rule File Line " + x + "\n";
																						break;
																					}
																				}

																			}
																		}
																	}
																}
															}
														} else {

															for(var y = 16; y <= ruleLine.length; y++) {
																if(ruleLine.substring(y-16,y)=="</DataLineOrder>"){
																	this.rLineOrder = this.rLineOrder.concat(ruleLine.substring(0,y-16));
																	foundEndDataLineOrder = true;
																	switcher = true;
																	this.logString += "Found </DataLineOrder> On Rule File Line " + x + "\n";
																	break;
																}
															}
															for(var y = 22; (y<=ruleLine.length && !switcher); y++) {
																if(ruleLine.substring(y-22,y)=="&lt;/DataLineOrder&gt;"){
																	this.rLineOrder = this.rLineOrder.concat(ruleLine.substring(0,y-22));
																	foundEndDataLineOrder = true;
																	switcher = true;
																	this.logString += "Found </DataLineOrder> On Rule File Line " + x + "\n";
																	break;
																}
															}
															if(!foundEndDataLineOrder){
																this.rLineOrder+=(ruleLine+"\n");
															}
														}
														if(switcher){
															console.log("Rule File Parsing: Found </DataLineOrder> on ruleLine " + (x+1) + "\n");
															switcher = false;
														}
													} else {
														if (ruleLine.length>=15){
															if (ruleLine.substring(0,15)=="<DataLineOrder>"){
																foundStartDataLineOrder = true;
																switcher = true;
																this.rLineOrder = ruleLine.substring(15,ruleLine.length)+"\n";
																this.logString += "Found <DataLineOrder> On Rule File Line " + x + "\n";
																if(this.rLineOrder.length >= 16){
																	for(var y = 16; y <= ruleLine.length; y++) {
																		if(ruleLine.substring(y-16,y)=="</DataLineOrder>"){
																			this.rLineOrder = ruleLine.substring(15,y-16);
																			foundEndDataLineOrder = true;
																			this.logString += "Found <DataLineOrder> and </DataLineOrder> On Rule File Line " + x + "\n";
																			break;
																		}
																	}

																}
															}
															if (ruleLine.length>=21&&!switcher){
																if (ruleLine.substring(0,21)=="&lt;DataLineOrder&gt;"){
																	foundStartDataLineOrder = true;
																	switcher = true;
																	this.rLineOrder = ruleLine.substring(21,ruleLine.length)+"\n";
																	this.logString += "Found <DataLineOrder> On Rule File Line " + x + "\n";
																	if(this.rLineOrder.length >= 22){
																		for(var y = 22; y <= ruleLine.length; y++) {
																			if(ruleLine.substring(y-22,y)=="&lt;/DataLineOrder&gt;"){
																				this.rLineOrder = ruleLine.substring(21,y-22);
																				foundEndDataLineOrder = true;
																				this.logString += "Found <DataLineOrder> and </DataLineOrder> On Rule File Line " + x + "\n";
																				break;
																			}
																		}

																	}
																}
															}
														}
													}
													if(switcher){
														console.log("Rule File Parsing: Found <DataLineOrder> on ruleLine " + (x+1) + "\n");
														switcher = false;
													}
												} else {
													var hit = false;
													for(var y = 16; y <= ruleLine.length; y++) {
														if(ruleLine.substring(y-16,y)=="</LineDelimiter>"){
															this.rLineDelimiters[this.rLineNum] = this.rLineDelimiters[this.rLineNum].concat(ruleLine.substring(0,y-16));
															hit=true;
															if((this.rLineNum+1)==this.rNumLineTypes) {
																switcher = true;
																foundNextEndLineDelimiter = true;
																this.logString += "Found </LineDelimiter> On Rule File Line " + x + "\n";
																break;
															} else {
																this.rLineNum++;
																foundNextEndLineDelimiter = false;
																foundNextStartLineDelimiter = false;
																foundNextDataLine = false;
																foundNextStartLinePrefix = false;
																foundNextEndLinePrefix = false;
																foundNextNumDataCharsPerLine = false;
																foundNextDataCharType = false;
																break;
															}
														}
													}
													for(var y = 22; (y <= ruleLine.length)&&!switcher; y++) {
														if(ruleLine.substring(y-22,y)=="&lt;/LineDelimiter&gt;"){
															this.rLineDelimiters[this.rLineNum] = this.rLineDelimiters[this.rLineNum].concat(ruleLine.substring(0,y-22));
															hit=true;
															if((this.rLineNum+1)==this.rNumLineTypes) {
																switcher = true;
																foundNextEndLineDelimiter = true;
																this.logString += "Found </LineDelimiter> On Rule File Line " + x + "\n";
																break;
															} else {
																this.rLineNum++;
																foundNextEndLineDelimiter = false;
																foundNextStartLineDelimiter = false;
																foundNextDataLine = false;
																foundNextStartLinePrefix = false;
																foundNextEndLinePrefix = false;
																foundNextNumDataCharsPerLine = false;
																foundNextDataCharType = false;
																break;
															}
														}
													}
													if(!hit){
														this.rLineDelimiters[this.rLineNum] = this.rLineDelimiters[this.rLineNum].concat(ruleLine+"\n");
													}
												}
												if(switcher){
													console.log("Rule File Parsing: Found </LineDelimiter> on ruleLine " + (x+1) + "\n");
													switcher = false;
												}
											} else {
												if (ruleLine.length>=15){
													if (ruleLine.substring(0,15)=="<LineDelimiter>"){
														switcher = true;
														foundNextStartLineDelimiter = true;
														this.rLineDelimiters[this.rLineNum] = ruleLine.substring(15,ruleLine.length)+"\n";
														this.logString += "Found <LineDelimiter> On Rule File Line " + x + "\n";
														if(this.rLineDelimiters[this.rLineNum].length >= 16){
															for(var y = 16; y <= ruleLine.length; y++) {
																if(ruleLine.substring(y-16,y)=="</LineDelimiter>"){
																	this.rLineDelimiters[this.rLineNum] = ruleLine.substring(15,y-16);
																	if((this.rLineNum+1)==this.rNumLineTypes) {
																		foundNextEndLineDelimiter = true;
																		this.logString += "Found <LineDelimiter> and </LineDelimiter> On Rule File Line " + x + "\n";
																		break;
																	} else {
																		this.rLineNum++;
																		foundNextEndLineDelimiter = false;
																		foundNextStartLineDelimiter = false;
																		foundNextDataLine = false;
																		foundNextStartLinePrefix = false;
																		foundNextEndLinePrefix = false;
																		foundNextNumDataCharsPerLine = false;
																		foundNextDataCharType = false;
																		break;
																	}
																}
															}

														}
													}

													if (ruleLine.length>=21&&!switcher){
														if (ruleLine.substring(0,21)=="&lt;LineDelimiter&gt;"){
															switcher = true;
															foundNextStartLineDelimiter = true;
															this.rLineDelimiters[this.rLineNum] = ruleLine.substring(21,ruleLine.length)+"\n";
															this.logString += "Found <LineDelimiter> On Rule File Line " + x + "\n";
															if(this.rLineDelimiters[this.rLineNum].length >= 22){
																for(var y = 22; y <= ruleLine.length; y++) {
																	if(ruleLine.substring(y-22,y)=="&lt;/LineDelimiter&gt;"){
																		this.rLineDelimiters[this.rLineNum] = ruleLine.substring(21,y-22);
																		if((this.rLineNum+1)==this.rNumLineTypes) {
																			foundNextEndLineDelimiter = true;
																			this.logString += "Found <LineDelimiter> and </LineDelimiter> On Rule File Line " + x + "\n";
																			break;
																		} else {
																			this.rLineNum++;
																			foundNextEndLineDelimiter = false;
																			foundNextStartLineDelimiter = false;
																			foundNextDataLine = false;
																			foundNextStartLinePrefix = false;
																			foundNextEndLinePrefix = false;
																			foundNextNumDataCharsPerLine = false;
																			foundNextDataCharType = false;
																			break;
																		}
																	}
																}

															}
														}
													}
												}
											}
											if(switcher){
												console.log("Rule File Parsing: Found <LineDelimiter> on ruleLine " + (x+1) + "\n");
												switcher = false;
											}
										} else {
											if (ruleLine.length>=12){
												if (splits[0]=="DataCharType"){
													if (splits.length>1){
														if(splits[1].length>=1){
															switcher = true;
															foundNextDataCharType = true;
															this.logString += "Found DataCharType On Rule File Line " + x + "\n";
															this.rDataCharTypes[this.rLineNum] = splits[1];
															if (splits.length>=3){
																if(splits[2].length>=1){

																		if(this.rDataCharTypes[this.rLineNum]=="number"){
																			this.rNumDigits[this.rLineNum] = 1*(splits[2]);
																			if(this.rNumDigits[this.rLineNum]<3){
																				this.rNumDigits[this.rLineNum]=3;
																			}
																		} else if(this.rDataCharTypes[this.rLineNum]=="time"){
																			this.rStartTime[this.rLineNum] = 1*(splits[2]);
																			if(this.rStartTime[this.rLineNum]<0){
																				this.rStartTime[this.rLineNum] = 0;
																			}
																		} else if(this.rDataCharTypes[this.rLineNum]=="24time"){
																			this.rStartTime[this.rLineNum] = 1*(splits[2]);
																			if(this.rStartTime[this.rLineNum]<0){
																				this.rStartTime[this.rLineNum] = 0;
																			}
																		} else if(this.rDataCharTypes[this.rLineNum]=="12time"){
																			this.rStartTime[this.rLineNum] = 1*(splits[2]);
																			if(this.rStartTime[this.rLineNum]<0){
																				this.rStartTime[this.rLineNum] = 0;
																			}
																		} else if(this.rDataCharTypes[this.rLineNum]=="datetime"){
																			this.rStartTime[this.rLineNum] = 0;
																			this.rNumDigits[this.rLineNum] = 3;
																			this.rStartYear[this.rLineNum] = 1*(splits[2]);
																			if (splits.length>=4){
																				this.rStartMonth[this.rLineNum] = 1*(splits[3]);
																				if(splits.length>=5){
																					this.rStartDay[this.rLineNum] = 1*(splits[4]);
																					if(splits.length>=6){
																						this.rStartHour[this.rLineNum] = 1*(splits[5]);
																					} else {
																						this.rStartHour[this.rLineNum] = 0;
																					}
																				} else {
																					this.rStartDay[this.rLineNum] = 0;
																					this.rStartHour[this.rLineNum] = 0;
																				}
																			} else {
																				this.rStartMonth[this.rLineNum] = 0;
																				this.rStartDay[this.rLineNum] = 0;
																				this.rStartHour[this.rLineNum] = 0;
																			}
																		} else {
																			this.rNumDigits[this.rLineNum] = 3;
																			this.rStartTime[this.rLineNum] = 0;
																			this.rStartYear[this.rLineNum] = 0;
																			this.rStartMonth[this.rLineNum] = 0;
																			this.rStartDay[this.rLineNum] = 0;
																			this.rStartHour[this.rLineNum] = 0;
																		}

																} else {
																	this.rStartTime[this.rLineNum] = 0;
																	this.rNumDigits[this.rLineNum] = 3;
																}
															} else {
																this.rStartTime[this.rLineNum] = 0;
																this.rNumDigits[this.rLineNum] = 3;
															}
														} else {
															console.log("Warning: No Data Character Type found in rule file after DataCharType declaration statement!");
															this.logString += "Warning: No Data Character Type found in rule file after DataCharType declaration!\n";
														}
													} else {
														console.log("Warning: No Data Character Type found in rule file after DataCharType declaration!");
														this.logString += "Warning: No Data Character Type found in rule file after DataCharType declaration!\n";
													}
												}
											}
										}
										if(switcher){
											console.log("Rule File Parsing: Found DataCharType on ruleLine " + (x+1) + "\n");
											switcher = false;
										}
									} else {
										if (ruleLine.length>=19){
											if (splits[0]=="NumDataCharsPerLine"){
												if (splits.length>1){
													if(splits[1].length>=1){
														switcher = true;
														this.logString += "Found NumDataCharsPerLine On Rule File Line " + x + "\n";
														foundNextNumDataCharsPerLine = true;
														this.rNumCharsPerLine[this.rLineNum] = 1*(splits[1]);
													} else {
														console.log("Warning: No Number of Characters Per Line found in rule file after NumDataCharsPerLine declaration statement!");
													}
												} else {
													console.log("Warning: No Number of Characters Per Line found in rule file after NumDataCharsPerLine declaration!");
												}

											}
										}
									}
									if(switcher){
										console.log("Rule File Parsing: Found NumDataCharsPerLine on ruleLine " + (x+1) + "\n");
										switcher = false;
									}
								} else {
									for(var y = 13; y <= ruleLine.length; y++) {
										if(ruleLine.substring(y-13,y)=="</LinePrefix>"){
											this.rLinePrefixes[this.rLineNum] = this.rLinePrefixes[this.rLineNum].concat(ruleLine.substring(0,y-13));
											switcher = true;
											foundNextEndLinePrefix = true;
											this.logString += "Found </LinePrefix> On Rule File Line " + x + "\n";
											break;
										}
									}
									for(var y = 19; (!switcher&&(y <= ruleLine.length)); y++) {
										if(ruleLine.substring(y-19,y)=="&lt;/LinePrefix&gt;"){
											this.rLinePrefixes[this.rLineNum] = this.rLinePrefixes[this.rLineNum].concat(ruleLine.substring(0,y-19));
											switcher = true;
											foundNextEndLinePrefix = true;
											this.logString += "Found </LinePrefix> On Rule File Line " + x + "\n";
											break;
										}
									}
									if(!foundNextEndLinePrefix){
										this.rLinePrefixes[this.rLineNum] = this.rLinePrefixes[this.rLineNum].concat(ruleLine+"\n");
									}
								}
								if(switcher){
									console.log("Rule File Parsing: Found </LinePrefix> on ruleLine " + (x+1) + "\n");
									switcher = false;
								}
							} else {
								if (ruleLine.length>=12){
									if (ruleLine.substring(0,12)=="<LinePrefix>"){
										switcher = true;
										foundNextStartLinePrefix = true;
										this.logString += "Found <LinePrefix> On Rule File Line " + x + "\n";
										this.rLinePrefixes[this.rLineNum] = ruleLine.substring(12,ruleLine.length)+"\n";
										if(this.rLinePrefixes[this.rLineNum].length >= 13){
											for(var y = 13; y <= ruleLine.length; y++) {
												if(ruleLine.substring(y-13,y)=="</LinePrefix>"){
													this.rLinePrefixes[this.rLineNum] = ruleLine.substring(12,y-13);
													foundNextEndLinePrefix = true;
													this.logString += "Found <LinePrefix> and </LinePrefix> On Rule File Line " + x + "\n";
													break;
												}
											}

										}
									}
									if (ruleLine.length>=18&&!switcher){
										if (ruleLine.substring(0,18)=="&lt;LinePrefix&gt;"){
											switcher = true;
											foundNextStartLinePrefix = true;
											this.logString += "Found <LinePrefix> On Rule File Line " + x + "\n";
											this.rLinePrefixes[this.rLineNum] = ruleLine.substring(18,ruleLine.length)+"\n";
											if(this.rLinePrefixes[this.rLineNum].length >= 19){
												for(var y = 19; y <= ruleLine.length; y++) {
													if(ruleLine.substring(y-19,y)=="&lt;/LinePrefix&gt;"){
														this.rLinePrefixes[this.rLineNum] = ruleLine.substring(18,y-19);
														foundNextEndLinePrefix = true;
														this.logString += "Found <LinePrefix> and </LinePrefix> On Rule File Line " + x + "\n";
														break;
													}
												}

											}
										}

									}
								}
							}
							if(switcher){
								console.log("Rule File Parsing: Found <LinePrefix> on ruleLine " + (x+1) + "\n");
								switcher = false;
							}
						} else {
							if (ruleLine.length>=8){
								if (splits[0]=="DataLine"){
									if (splits.length>1){
										if(splits[1].length>=1){
											if(1*(splits[1])==(this.rLineNum+1)){
												switcher = true;
												foundNextDataLine = true;
												this.logString += "Found DataLine On Rule File Line " + x + "\n";
											} else {
												console.log("Warning: The DataLine identification numbers found in the rule file are out of order!");
												this.logString += "Warning: The DataLine identification numbers found in the rule file are out of order!\n";
											}
										} else {
											console.log("Warning: No DataLine Identification number found in rule file after DataLine declaration statement!");
											this.logString += "Warning: No DataLine Identification number found in rule file after DataLine declaration statement!\n";
										}
									} else {
										console.log("Warning: No DataLine Identification number found in rule file after DataLine declaration!");
										this.logString += "Warning: No DataLine Identification number found in rule file after DataLine declaration statement!\n";
									}

								}
							}
						}
						if(switcher){
							console.log("Rule File Parsing: Found DataLine on ruleLine " + (x+1) + "\n");
							switcher = false;
						}
					} else {
						if (ruleLine.length>=16){
							if (splits[0]=="NumDataLineTypes"){
								if (splits.length>1){
									if(splits[1].length>=1){
										if(1*(splits[1])<10){
											switcher = true;
											this.logString += "Found NumDataLineTypes On Rule File Line " + x + "\n";
											foundNumDataLineTypes = true;
											this.rNumLineTypes = 1*(splits[1]);
											this.rLinePrefixes = [""];
											this.rNumCharsPerLine = [0];
											this.rDataCharTypes = [""];
											this.rLineDelimiters = [""];
											this.rNumDigits = [0];
											this.rLineNum = 0;
											this.rStartTime = [0];
											this.rStartYear = [0];
											this.rStartMonth = [0];
											this.rStartDay = [0];
											this.rStartHour = [0];
											for(var t = 1; t<this.rNumLineTypes; t++){
												this.rLinePrefixes.push("");
												this.rNumCharsPerLine.push(0);
												this.rDataCharTypes.push("");
												this.rLineDelimiters.push("");
												this.rNumDigits.push(0);
												this.rStartTime.push(0);
												this.rStartYear.push(0);
												this.rStartMonth.push(0);
												this.rStartDay.push(0);
												this.rStartHour.push(0);
											}
										} else {
											this.logString += "Warning: Number of Data Lines should not exceed nine!\n";
										}

									} else {
										this.logString += "Warning: No Number of Data Lines found in rule file after NumDataLineTypes declaration statement!\n";
									}
								} else {
									this.logString += "Warning: No Number of Data Lines found in rule file after NumDataLineTypes declaration!\n";
								}

							}
						}
					}
					if(switcher){
						console.log("Rule File Parsing: Found NumDataLineTypes on ruleLine " + (x+1) + "\n");
						switcher = false;
					}
				} else {
					for(var y = 13; y <= ruleLine.length; y++) {
						if(ruleLine.substring(y-13,y)=="</FilePrefix>"){
							this.rPrefix = this.rPrefix.concat(ruleLine.substring(0,y-13));
							switcher = true;
							foundEndPrefix = true;
							this.logString += "Found </FilePrefix> On Rule File Line " + x + "\n";
							break;
						}
					}
					for(var y = 19; (!switcher&&(y <= ruleLine.length)); y++) {
						if(ruleLine.substring(y-19,y)=="&lt;/FilePrefix&gt;"){
							this.rPrefix = this.rPrefix.concat(ruleLine.substring(0,y-19));
							switcher = true;
							foundEndPrefix = true;
							this.logString += "Found </FilePrefix> On Rule File Line " + x + "\n";
							break;
						}
					}
					if(!foundEndPrefix){
						this.rPrefix = this.rPrefix.concat(ruleLine+"\n");
					}
				}
				if(switcher){
					console.log("Rule File Parsing: Found </FilePrefix> on ruleLine " + (x+1) + "\n");
					switcher = false;
				}
			} else {
				if (ruleLine.length>=12&&!switcher){
					if (ruleLine.substring(0,12)=="<FilePrefix>"){
						switcher = true;
						foundStartPrefix = true;
						this.rPrefix = ruleLine.substring(12,ruleLine.length)+"\n";
						this.logString += "Found <FilePrefix> On Rule File Line " + x + "\n";
						if(this.rPrefix.length >= 13){
							for(var y = 13; y <= ruleLine.length; y++) {
								if((ruleLine.substring(y-13,y)=="</FilePrefix>")){
									this.rPrefix = ruleLine.substring(12,y-13);
									foundEndPrefix = true;
									this.logString += "Found <FilePrefix> and </FilePrefix> On Rule File Line " + x + "\n";
									break;
								}
							}
						}
					}
					if (ruleLine.length>=18&&!switcher){
						if (ruleLine.substring(0,18)=="&lt;FilePrefix&gt;"){
							switcher = true;
							foundStartPrefix = true;
							this.rPrefix = ruleLine.substring(18,ruleLine.length)+"\n";
							this.logString += "Found <FilePrefix> On Rule File Line " + x + "\n";
							if(this.rPrefix.length >= 19){
								for(var y = 19; y <= ruleLine.length; y++) {
									if((ruleLine.substring(y-19,y)=="&lt;/FilePrefix&gt;")){
										this.rPrefix = ruleLine.substring(18,y-19);
										foundEndPrefix = true;
										this.logString += "Found <FilePrefix> and </FilePrefix> On Rule File Line " + x + "\n";
										break;
									}
								}
							}
						}
					}
				}
			}
			if(switcher){
				console.log("Rule File Parsing: Found <FilePrefix> on ruleLine " + (x+1) + "\n");
				switcher = false;
			}
		}
		if(!foundStartPrefix) {
			this.logString += "Never Found <FilePrefix>!\n";
		}
		if(!foundEndPrefix) {
			this.logString += "Never Found </FilePrefix>!\n";
		}
		if(!foundNumDataLineTypes) {
			this.logString += "Never Found NumDataLineTypes!\n";
		}
		if(!foundNextDataLine) {
			this.logString += "Never Found Next DataLine!\n";
		}
		if(!foundNextStartLinePrefix) {
			this.logString += "Never Found Next <LinePrefix>!\n";
		}
		if(!foundNextEndLinePrefix) {
			this.logString += "Never Found Next </LinePrefix>!\n";
		}
		if(!foundNextNumDataCharsPerLine) {
			this.logString += "Never Found Next NumDataCharsPerLine!\n";
		}
		if(!foundNextDataCharType) {
			this.logString += "Never Found Next NextDataCharType!\n";
		}
		if(!foundNextStartLineDelimiter) {
			this.logString += "Never Found Next <LineDelimiter>!\n";
		}
		if(!foundNextEndLineDelimiter) {
			this.logString += "Never Found Next </LineDelimiter>!\n";
		}
		if(!foundStartDataLineOrder) {
			this.logString += "Never Found <DataLineOrder>!\n";
		}
		if(!foundEndDataLineOrder) {
			this.logString += "Never Found </DataLineOrder>!\n";
		}
		if(!foundStartPostFix) {
			this.logString += "Never Found <FilePostfix>!\n";
		}
		if(!foundEndPostFix) {
			this.logString += "Never Found </FilePostfix>!\n";
		}
		return this.logString;
	}

	get hide() {
		if(this.inString){
			if(this.ruleString){
				if(this.parseRules(this.ruleString)){
					this.rulesValid = true;
					return this.hider(this.inString);
				} else {
					return "Hide Failed!  Rule file contains errors!  Could not parse rules!";
				}
			} else {
				if(this.rulesValid){
					return this.hider(this.inString);
				} else {
					return "Hide Failed!  No rules were found!";
				}
			}
		} else {
			return "Hide Failed!  There is nothing to hide!";
		}
	}

	get unhide() {
		if(this.inString){
			if(this.ruleString){
				if(this.parseRules(this.ruleString)){
					this.rulesValid = true;
					return this.unhider(this.inString);
				} else {
					return "Unhide Failed!  Rule file contains errors!  Could not parse rules!"
				}
			} else {
				if(this.rulesValid){
					return this.unhider(this.inString);
				} else {
					return "Unhide Failed!  No rules were found!";
				}
			}
		} else {
			return "Unhide Failed!  There is nothing to unhide!";
		}
	}

	hider(inputText) {
		if(this.rulesValid){
			var output = "";
			output+=this.rPrefix;
			var inputLength = inputText.length;
			var inputCursor = 0;
			var lineOrderLength = this.rLineOrder.length;
			var lineOrderCursor = 0;
			var lastLineOrderCursor = 0;
			var typeNum = 0;
			var lastTime = -1;
			var last12Time = -1;
			var last24Time = -1;
			var lastDateTime = -1;
			var lastYear = -1;
			var lastMonth = -1;
			var lastDay = -1;
			while(inputCursor < inputLength){
				lineOrderCursor = 0;
				lastLineOrderCursor = 0;
				while(lineOrderCursor < lineOrderLength){
					if(this.testNumeric(lineOrderCursor,this.rLineOrder)){
						typeNum = 1*this.rLineOrder.substring(lineOrderCursor,lineOrderCursor+1);
						if (((typeNum)<=this.rNumLineTypes)&((typeNum)>0)){

							output += this.rLinePrefixes[typeNum-1];
							for(var x = 0; x < this.rNumCharsPerLine[typeNum-1]; x++){
								if (this.rDataCharTypes[typeNum-1]=="number"){
									if(inputCursor >= inputLength) {
										if(inputCursor == inputLength) {
											output+="NaN";
											inputCursor++;
										} else {
											var num = Math.round(Math.random()*255);
											var outNum = Math.round(((num*3)+(Math.random()*1.99))*Math.pow(10, this.rNumDigits[typeNum-1]-3)).toString();
											for(var z = this.rNumDigits[typeNum-1]; z > 1; z--){
												if(outNum.length<z){
													outNum = "0" + outNum;
												}
											}
											output+=outNum;
										}
										lineOrderCursor = lineOrderLength;
									} else {
										var datum = inputText.charAt(inputCursor);
										var num = datum.codePointAt(0);
										var outNum = Math.round(((num*3)+(Math.random()*1.99))*Math.pow(10, this.rNumDigits[typeNum-1]-3)).toString();
										for(var z = this.rNumDigits[typeNum-1]; z > 1; z--){
											if(outNum.length<z){
												outNum = "0" + outNum;
											}
										}
										output+=outNum;
										inputCursor++;
									}
									if (x < (this.rNumCharsPerLine[typeNum-1] - 1)){
										output+=this.rLineDelimiters[typeNum-1];
									}
								} else if (this.rDataCharTypes[typeNum-1]=="text"){
									if(inputCursor >= inputLength) {
										if(inputCursor == inputLength) {
											output+="q5-";
											inputCursor++;
										} else {
											output+=inputText.charAt(inputCursor-x);
										}
										lineOrderCursor = lineOrderLength;
									} else {
										output+=inputText.charAt(inputCursor);
										inputCursor++;
									}
									if (x < (this.rNumCharsPerLine[typeNum-1] - 1)){
										output+=this.rLineDelimiters[typeNum-1];
									}
								} else if (this.rDataCharTypes[typeNum-1]=="hex"){
									if(inputCursor >= inputLength) {
										if(inputCursor == inputLength) {
											output+="q5";
											inputCursor++;
										} else {
											var datum = inputText.charAt(inputCursor-(2*x));
											var num = datum.codePointAt(0);
											var hex = num.toString(16);
											if (hex.length==1){
												hex = "0" + hex;
											}
											output+=hex;
										}
										lineOrderCursor = lineOrderLength;
									} else {
										var datum = inputText.charAt(inputCursor);
										var num = datum.codePointAt(0);
										var hex = num.toString(16);
										if (hex.length==1){
											hex = "0" + hex;
										}
										output+=hex;
										inputCursor++;
									}
									if (x < (this.rNumCharsPerLine[typeNum-1] - 1)){
										output+=this.rLineDelimiters[typeNum-1];
									}

								} else if ((this.rDataCharTypes[typeNum-1]=="time")||(this.rDataCharTypes[typeNum-1]=="24time")||(this.rDataCharTypes[typeNum-1]=="12time")){
									var limit = 0;
									var thisLastTime = -1;
									if(this.rDataCharTypes[typeNum-1]=="time"){
										limit = 1400;
										thisLastTime = lastTime;
									} else if(this.rDataCharTypes[typeNum-1]=="24time"){
										limit = 336;
										thisLastTime = last24Time;
									} else if(this.rDataCharTypes[typeNum-1]=="12time"){
										limit = 167;
										thisLastTime = last12Time;
									}
									if(inputCursor >= inputLength) {
										if(inputCursor == inputLength) {
											output+="99:99:99";
											inputCursor++;
										} else {
											var hours = Math.round(Math.random()*11);
											var minutes = Math.round(Math.random()*59);
											var seconds = Math.round(Math.random()*59);
											var out = "";
											if (hours<10){
												out = "0" + hours.toString() + ":";
											} else {
												out = hours + ":";
											}
											if (minutes<10){
												out = out + "0" + minutes.toString() + ":";
											} else {
												out = out + minutes + ":";
											}
											if (seconds<10){
												out = out + "0" + seconds.toString();
											} else {
												out = out + seconds.toString();
											}
											output+=out;
										}
										lineOrderCursor = lineOrderLength;
									} else {
										var outTime = 0;
										var datum = inputText.charAt(inputCursor);
										var num = datum.codePointAt(0);
										if(thisLastTime==-1){
											for (var y = limit; y >= 0 ;y--){
												if(this.rStartTime[typeNum-1]>=(y*256)){
													this.rStartTime[typeNum-1] = y*256;
													break;
												}
											}
											outTime = this.rStartTime[typeNum-1] + num;
											thisLastTime = this.rStartTime[typeNum-1] + 256;
										} else if (thisLastTime<=(limit*256)){
											outTime = thisLastTime + num;
											thisLastTime += 256;
										} else {
											outTime = thisLastTime + num;
											thisLastTime = 0;
										}
										var hours = 0;
										var minutes = 0;
										var seconds = 0;
										while(((hours*60*60)+(minutes*60)+seconds)!=outTime){
											if((((hours+1)*60*60)+(minutes*60)+seconds)<=outTime){
												hours++;
											} else if(((hours*60*60)+((minutes+1)*60)+seconds)<=outTime){
												minutes++;
												if (minutes>=60){
													minutes = 0;
													hours++;
												}
											} else if(((hours*60*60)+(minutes*60)+seconds+1)<=outTime){
												seconds++;
												if (seconds>=60){
													seconds = 0;
													minutes++;
												}
												if (minutes>=60){
													minutes = 0;
													hours++;
												}
											} else if (((hours*60*60)+(minutes*60)+seconds)>outTime) {
												if(hours>0){
													hours--;
												} else if(minutes>0){
													minutes--;
												} else if(seconds>0){
													seconds--;
												}
											}
										}
										var out = "";
										if (hours<10){
											out = "0" + hours.toString() + ":";
										} else {
											out = hours.toString() + ":";
										}
										if (minutes<10){
											out = out + "0" + minutes.toString() + ":";
										} else {
											out = out + minutes.toString() + ":";
										}
										if (seconds<10){
											out = out + "0" + seconds.toString();
										} else {
											out = out + seconds.toString();
										}
										output+=out;
										inputCursor++;
									}
									if (x < (this.rNumCharsPerLine[typeNum-1] - 1)){
										output+=this.rLineDelimiters[typeNum-1];
									}
									if(this.rDataCharTypes[typeNum-1]=="time"){
										lastTime = thisLastTime;
									} else if(this.rDataCharTypes[typeNum-1]=="24time"){
										last24Time = thisLastTime;
									} else if(this.rDataCharTypes[typeNum-1]=="12time"){
										last12Time = thisLastTime;
									}
								} else if ((this.rDataCharTypes[typeNum-1]=="datetime")){
									var limit = 336;
									if(inputCursor >= inputLength) {
										if(inputCursor == inputLength) {
											output+="9999-12-31 99:99:99";
											inputCursor++;
										} else {
											var hours = Math.round(Math.random()*23);
											var minutes = Math.round(Math.random()*59);
											var seconds = Math.round(Math.random()*59);
											var out = "";
											if (hours<10){
												out = "0" + hours.toString() + ":";
											} else {
												out = hours.toString() + ":";
											}
											if (minutes<10){
												out = out + "0" + minutes.toString() + ":";
											} else {
												out = out + minutes.toString() + ":";
											}
											if (seconds<10){
												out = out + "0" + seconds.toString();
											} else {
												out = out + seconds.toString();
											}
											output+=this.rStartYear[typeNum-1]+"-"+this.rStartMonth[typeNum-1]+"-"+this.rStartDay[typeNum-1]+" "+out;
										}
										lineOrderCursor = lineOrderLength;
									} else {
										var outTime = 0;
										var outYear = 0;
										var outMonth = 0;
										var outDay = 0;
										var datum = inputText.charAt(inputCursor);
										var num = datum.codePointAt(0);
										if(lastYear==-1){
											lastYear = this.rStartYear[typeNum-1];
										}
										if(lastMonth==-1){
											lastMonth = this.rStartMonth[typeNum-1];
										}
										if(lastDay==-1){
											lastDay = this.rStartDay[typeNum-1];
										}
										if(lastDateTime<=-1){
											for (var y = limit; (y >= 0);y--){
												if((y*256)<=(this.rStartHour[typeNum-1]*60*60)){
													lastDateTime = y*256;
													break;
												}

											}
											outTime = lastDateTime + num;
											outYear = lastYear;
											outMonth = lastMonth;
											outDay = lastDay;
											lastDateTime += 256;
										} else if (lastDateTime<=(limit*256)){
											outTime = lastDateTime + num;
											outYear = lastYear;
											outMonth = lastMonth;
											outDay = lastDay;
											lastDateTime += 256;
										} else {
											outTime = lastDateTime + num;
											outYear = lastYear;
											outMonth = lastMonth;
											outDay = lastDay;
											lastDateTime = 0;
											if(lastDay<=27){
												lastDay++;
											} else if(lastDay==28){
												if(lastMonth==2){
													if(lastYear%4==0){
														if(lastYear%100==0){
															if(lastYear%400==0){
																lastDay++;
															} else {
																lastDay = 1;
																if(lastMonth<12){
																	lastMonth++;
																} else {
																	lastMonth = 1;
																	if(lastYear<9999){
																		lastYear++;
																	} else {
																		lastYear = 1;
																	}
																}
															}
														} else {
															lastDay++;
														}
													} else {
														lastDay = 1;
														if(lastMonth<12){
															lastMonth++;
														} else {
															lastMonth = 1;
															if(lastYear<9999){
																lastYear++;
															} else {
																lastYear = 1;
															}
														}
													}
											    } else {
													lastDay++;
												}
											} else {
												if ((lastMonth==4)||(lastMonth==6)||(lastMonth==9)||(lastMonth==11)){
											    	if(lastDay<30){
											    		lastDay++;
											    	} else {
											    		lastDay = 1;
											    		if(lastMonth<12){
															lastMonth++;
														} else {
															lastMonth = 1;
															if(lastYear<9999){
																lastYear++;
															} else {
																lastYear = 1;
															}
														}
													}
												} else {
													if(lastDay<31){
														lastDay++;
													} else {
														lastDay = 1;
														if(lastMonth<12){
															lastMonth++;
														} else {
															lastMonth = 1;
															if(lastYear<9999){
																lastYear++;
															} else {
																lastYear = 1;
															}
														}
													}
												}
											}
										}
										var hours = 0;
										var minutes = 0;
										var seconds = 0;
										while(((hours*60*60)+(minutes*60)+seconds)!=outTime){
											if((((hours+1)*60*60)+(minutes*60)+seconds)<=outTime){
												hours++;
											} else if(((hours*60*60)+((minutes+1)*60)+seconds)<=outTime){
												minutes++;
												if (minutes>=60){
													minutes = 0;
													hours++;
												}
											} else if(((hours*60*60)+(minutes*60)+seconds+1)<=outTime){
												seconds++;
												if (seconds>=60){
													seconds = 0;
													minutes++;
												}
												if (minutes>=60){
													minutes = 0;
													hours++;
												}
											} else if (((hours*60*60)+(minutes*60)+seconds)>outTime) {
												if(hours>0){
													hours--;
												} else if(minutes>0){
													minutes--;
												} else if(seconds>0){
													seconds--;
												}
											}
										}
										var out = "";
										if (outYear<10){
											out = "000" + outYear.toString() + "-";
										} else if (outYear<100){
											out = "00" + outYear.toString() + "-";
										} else if (outYear<1000){
											out = "0" + outYear.toString() + "-";
										} else {
											out = outYear.toString() + "-";
										}
										if (outMonth<10){
											out = out + "0" + outMonth.toString() + "-";
										} else {
											out = out + outMonth.toString() + "-";
										}
										if (outDay<10){
											out = out + "0" + outDay.toString() + " ";
										} else {
											out = out + outDay.toString() + " ";
										}
										if (hours<10){
											out = out + "0" + hours.toString() + ":";
										} else {
											out = out + hours.toString() + ":";
										}
										if (minutes<10){
											out = out + "0" + minutes.toString() + ":";
										} else {
											out = out + minutes.toString() + ":";
										}
										if (seconds<10){
											out = out + "0" + seconds.toString();
										} else {
											out = out + seconds.toString();
										}
										output+=out;
										inputCursor++;
									}
									if (x < (this.rNumCharsPerLine[typeNum-1] - 1)){
										output+=this.rLineDelimiters[typeNum-1];
									}
								} else {
									console.log("(hider) Warning: Data type " + this.rDataCharTypes[typeNum-1] + " unrecognized for Data Line " + typeNum);
								}
							}
							lastLineOrderCursor = lineOrderCursor + 1;
						} else {
							console.log("(hider) Warning! The Line Order contains a line identifier number that is greater than the number of data lines or less than one!");
						}
						lineOrderCursor++;
					} else {
						output += this.rLineOrder.substring(lineOrderCursor,lineOrderCursor+1);
						lineOrderCursor++;
					}
				}
			}
			output+=this.rPostfix;
			return output;
		} else {
			var out = "Hide Failed!  Valid Rule Set Not Found!";
			console.log(out)
			alert(out)
			return out;
		}
	}

	unhider(inputText) {
		if(this.rulesValid){
			var output = "";
			var inputLength = inputText.length;
			var inputCursor = 0;
			var lastInputCursor = 0;
			if (inputText.substring(0,this.rPrefix.length)==this.rPrefix){
				inputCursor = this.rPrefix.length;
			} else {
				console.log("Unhide Warning! File Prefix Not Found!");
			}
			var lineOrderLength = this.rLineOrder.length;
			var lineOrderCursor = 0;
			var typeNum = 0;
			var lastTime = -1;
			var last12Time = -1;
			var last24Time = -1;
			var lastDateTime = -1;
			while(inputCursor < inputLength){
				lineOrderCursor = 0;
				lastInputCursor = inputCursor;
				while(lineOrderCursor < lineOrderLength){
					if(this.testNumeric(lineOrderCursor,this.rLineOrder)){
						typeNum = 1*this.rLineOrder.substring(lineOrderCursor,lineOrderCursor+1);
						if (((typeNum)<=this.rNumLineTypes)&((typeNum)>0)){
							if((inputCursor + this.rLinePrefixes[typeNum-1].length) < inputLength){
								inputCursor = inputCursor + this.rLinePrefixes[typeNum-1].length;
								for(var x = 0; x < this.rNumCharsPerLine[typeNum-1]; x++){
									if (this.rDataCharTypes[typeNum-1]=="number"){
										if((inputCursor + this.rNumDigits[typeNum-1]) < inputLength){
											var num = inputText.substring(inputCursor,inputCursor+this.rNumDigits[typeNum-1]);
											while((inputCursor + this.rNumDigits[typeNum-1]) < inputLength){
												var isNumber = true;
												for(var z = 0; z < this.rNumDigits[typeNum-1];z++){
													if(!this.testNumeric(z,num)){
														isNumber = false;
													}
												}
												if(num.includes("NaN")){
													inputCursor = inputLength;
													lineOrderCursor = lineOrderLength;
													break;
												} else if(!isNumber) {
													inputCursor++;
													num = inputText.substring(inputCursor,inputCursor+this.rNumDigits[typeNum-1]);
												}
												if(isNumber){
													break;
												}
											}
											if(inputCursor!=inputLength){
												var inNum = 0;
												var found = false;
												for(var y = 255; y >= (1); y--){
													if((1*num)>=(Math.round((y*3)*Math.pow(10, this.rNumDigits[typeNum-1]-3)))){
														found = true;
														inNum = y;
														break;
													}

												}
												if(found){
													var datum = String.fromCharCode(inNum);
													output+=datum;
													inputCursor += this.rNumDigits[typeNum-1];
													if((x + 1) < this.rNumCharsPerLine[typeNum-1]) {
														if((inputCursor + this.rLineDelimiters[typeNum-1].length) < inputLength){
															inputCursor = inputCursor + this.rLineDelimiters[typeNum-1].length;
														}
													}
												} else {
													console.log("(Unhide) Warning! No valid number match was found for the input at input Cursor " + inputCursor + "\n");
												}
											} else {
												break;
											}
										}
									} else if (this.rDataCharTypes[typeNum-1]=="text"){
										if((inputCursor + 1) < inputLength){
											var datum = inputText.substring(inputCursor,inputCursor+1);
											if((inputCursor + 3) < inputLength){
												if(inputText.substring(inputCursor,inputCursor+3)=="q5-"){
													inputCursor = inputLength;
													lineOrderCursor = lineOrderLength;
													break;
												}
											}
											output+=datum;
											if((x + 1) < this.rNumCharsPerLine[typeNum-1]) {
												inputCursor = inputCursor + this.rLineDelimiters[typeNum-1].length;
											}
											inputCursor++;
										}
									} else if (this.rDataCharTypes[typeNum-1]=="hex"){
										if((inputCursor + 2) < inputLength){
											var num = inputText.substring(inputCursor,inputCursor+2);
											while(((inputCursor + 2) < inputLength)&(!this.testHex(0,num)|!this.testHex(1,num))){
												if(num=="q5"){
													inputCursor = inputLength;
													lineOrderCursor = lineOrderLength;
													break;
												} else {
													inputCursor++;
													num = inputText.substring(inputCursor,inputCursor+2);
												}
											}
											if((inputCursor!=inputLength)&&this.testHex(0,num)&&this.testHex(1,num)){
												var temp = this.getIntFromHexString(num);
												var datum = String.fromCharCode(temp);
												output+=datum;
												inputCursor += 2;
												if((x + 1) < this.rNumCharsPerLine[typeNum-1]) {
													inputCursor = inputCursor + this.rLineDelimiters[typeNum-1].length;
												}
											} else {
												break;
											}
										}
									} else if (this.rDataCharTypes[typeNum-1]=="time"){
										if((inputCursor + 8) < inputLength){
											var test = inputText.substring(inputCursor,inputCursor+8);
											var isTime=false;
											while(!isTime&&(inputCursor<(inputLength-9))){
												var notTime = false;
												for(var k = 0; k < 8; k++){
													if(k==2){
														if(test.substring(k,k+1)==":"){
															//do nothing
														} else {
															notTime = true;
														}
													} else if (k==5){
														if(test.substring(k,k+1)==":"){
															//do nothing
														} else {
															notTime = true;
														}
													} else {
														if(this.testNumeric(k,test)){
															//do nothing
														} else {
															notTime = true;
														}
													}
												}
												if(notTime){
													inputCursor++;
													test = inputText.substring(inputCursor,inputCursor+8);
												} else {
													isTime = true;
												}
											}
											if(isTime&&test.includes("99:99:99")){
												inputCursor = inputLength;
												lineOrderCursor = lineOrderLength;
												break;
											}
											if(isTime&&(inputCursor<inputLength)){
												var timeSplit = test.split(":");
												var hours = 1*timeSplit[0];
												var minutes = 1*timeSplit[1];
												var seconds = 1*timeSplit[2];
												var readTime = (hours*60*60)+(minutes*60)+seconds;
												for (var y = 1400; y >= 0 ;y--){
													if(readTime>(y*256)){
														lastTime = y*256;
														break;
													}
												}
												var readChar = readTime - lastTime;
												var data = "";
												if(readChar>=126){
													data = 'X';
												} else {
													data = String.fromCharCode(readChar);
												}
												output+=data;
												if((x + 1) < this.rNumCharsPerLine[typeNum-1]) {
													inputCursor = inputCursor + this.rLineDelimiters[typeNum-1].length;
												}
												inputCursor+=8;
											} else {
												break;
											}
										}
									} else if (this.rDataCharTypes[typeNum-1]=="24time"){
										if((inputCursor + 8) < inputLength){
											var test = inputText.substring(inputCursor,inputCursor+8);
											var isTime=false;
											while(!isTime&&(inputCursor<(inputLength-9))){
												var notTime = false;
												for(var k = 0; k < 8; k++){
													if(k==2){
														if(test.substring(k,k+1)==":"){
															//do nothing
														} else {
															notTime = true;
														}
													} else if (k==5){
														if(test.substring(k,k+1)==":"){
															//do nothing
														} else {
															notTime = true;
														}
													} else {
														if(this.testNumeric(k,test)){
															//do nothing
														} else {
															notTime = true;
														}
													}
												}
												if(notTime){
													inputCursor++;
													test = inputText.substring(inputCursor,inputCursor+8);
												} else {
													isTime = true;
												}
											}
											if(isTime&&test.includes("99:99:99")){
												inputCursor = inputLength;
												lineOrderCursor = lineOrderLength;
												break;
											}
											if(isTime&&(inputCursor<inputLength)){
												var timeSplit = test.split(":");
												var hours = 1*timeSplit[0];
												var minutes = 1*timeSplit[1];
												var seconds = 1*timeSplit[2];
												var readTime = (hours*60*60)+(minutes*60)+seconds;
												for (var y = 338; y >= 0 ;y--){
													if(readTime>(y*256)){
														last24Time = y*256;
														break;
													}
												}
												var readChar = readTime - last24Time;
												var data = "";
												if(readChar>=126){
													data = 'X';
												} else {
													data = String.fromCharCode(readChar);
												}
												output+=data;
												if((x + 1) < this.rNumCharsPerLine[typeNum-1]) {
													inputCursor = inputCursor + this.rLineDelimiters[typeNum-1].length;
												}
												inputCursor+=8;
											} else {
												break;
											}
										}
									} else if (this.rDataCharTypes[typeNum-1]=="12time"){
										if((inputCursor + 8) < inputLength){
											var test = inputText.substring(inputCursor,inputCursor+8);
											var isTime=false;
											while(!isTime&&(inputCursor<(inputLength-9))){
												var notTime = false;
												for(var k = 0; k < 8; k++){
													if(k==2){
														if(test.substring(k,k+1)==":"){
															//do nothing
														} else {
															notTime = true;
														}
													} else if (k==5){
														if(test.substring(k,k+1)==":"){
															//do nothing
														} else {
															notTime = true;
														}
													} else {
														if(this.testNumeric(k,test)){
															//do nothing
														} else {
															notTime = true;
														}
													}
												}
												if(notTime){
													inputCursor++;
													test = inputText.substring(inputCursor,inputCursor+8);
												} else {
													isTime = true;
												}
											}
											if(isTime&&test.includes("99:99:99")){
												inputCursor = inputLength;
												lineOrderCursor = lineOrderLength;
												break;
											}
											if(isTime&&(inputCursor<inputLength)){
												var timeSplit = test.split(":");
												var hours = 1*timeSplit[0];
												var minutes = 1*timeSplit[1];
												var seconds = 1*timeSplit[2];
												var readTime = (hours*60*60)+(minutes*60)+seconds;
												for (var y = 169; y >= 0 ;y--){
													if(readTime>(y*256)){
														last12Time = y*256;
														break;
													}
												}
												var readChar = readTime - last12Time;
												var data = "";
												if(readChar>=126){
													data = 'X';
												} else {
													data = String.fromCharCode(readChar);
												}
												output+=data;
												if((x + 1) < this.rNumCharsPerLine[typeNum-1]) {
													inputCursor = inputCursor + this.rLineDelimiters[typeNum-1].length;
												}
												inputCursor+=8;
											} else {
												break;
											}
										}
									} else if (this.rDataCharTypes[typeNum-1]=="datetime"){
										if((inputCursor + 19) < inputLength){
											var test = inputText.substring(inputCursor+11,inputCursor+19);
											inputCursor+=11;
											var isTime=false;
											while(!isTime&&(inputCursor<(inputLength-9))){
												var notTime = false;
												for(var k = 0; k < 8; k++){
													if(k==2){
														if(test.substring(k,k+1)==":"){
															//do nothing
														} else {
															notTime = true;
														}
													} else if (k==5){
														if(test.substring(k,k+1)==":"){
															//do nothing
														} else {
															notTime = true;
														}
													} else {
														if(this.testNumeric(k,test)){
															//do nothing
														} else {
															notTime = true;
														}
													}
												}
												if(notTime){
													inputCursor++;
													test = inputText.substring(inputCursor,inputCursor+8);
												} else {
													isTime = true;
												}
											}
											if(isTime&&test.includes("99:99:99")){
												inputCursor = inputLength;
												lineOrderCursor = lineOrderLength;
												break;
											}
											if(isTime&&(inputCursor<inputLength)){
												var timeSplit = test.split(":");
												var hours = 1*(timeSplit[0]);
												var minutes = 1*(timeSplit[1]);
												var seconds = 1*(timeSplit[2]);
												var readTime = (hours*60*60)+(minutes*60)+seconds;
												for (var y = 338; y >= 0 ;y--){
													if(readTime>(y*256)){
														lastDateTime = y*256;
														break;
													}
												}
												var readChar = readTime - lastDateTime;
												var data = "";
												if(readChar>=126){
													data = 'X';
												} else {
													data = String.fromCharCode(readChar);
												}
												output+=data;
												if((x + 1) < this.rNumCharsPerLine[typeNum-1]) {
													inputCursor = inputCursor + this.rLineDelimiters[typeNum-1].length;
												}
												inputCursor+=8;
											} else {
												break;
											}
										}
									} else {
										console.log("(Unhide) Warning: Data type " + this.rDataCharTypes[typeNum-1] + " unrecognized for Data Line " + typeNum);
									}
								}
							} else {
								inputCursor = inputLength;
								break;
							}
						} else {
							console.log("(Unhide) Warning! The Line Order contains a line identifier number that is greater than the number of data lines or less than one!");
						}
						lineOrderCursor++;
					} else {
						lineOrderCursor++;
						inputCursor++;
					}
				}
				if(inputCursor==lastInputCursor){
					inputCursor++;
				}
			}
			return output;
		} else {
			var out = "Unhide Failed!  Valid Rule Set Not Found!";
			console.log(out)
			alert(out)
			return out;
		}
	}

	testNumeric(index,test){
		var answer = false;
		if(index<test.length){
			if(index>=0){
				if(test.substring(index,index+1)=="0"){
					answer = true;
				} else if(test.substring(index,index+1)=="1"){
					answer = true;
				} else if(test.substring(index,index+1)=="2"){
					answer = true;
				} else if(test.substring(index,index+1)=="3"){
					answer = true;
				} else if(test.substring(index,index+1)=="4"){
					answer = true;
				} else if(test.substring(index,index+1)=="5"){
					answer = true;
				} else if(test.substring(index,index+1)=="6"){
					answer = true;
				} else if(test.substring(index,index+1)=="7"){
					answer = true;
				} else if(test.substring(index,index+1)=="8"){
					answer = true;
				} else if(test.substring(index,index+1)=="9"){
					answer = true;
				}
			}
		}
		return answer;
	}

	testHex(index,test){
			var answer = false;
			if(index<test.length){
				if(index>=0){
					if(test.substring(index,index+1)=="0"){
						answer = true;
					} else if(test.substring(index,index+1)=="1"){
						answer = true;
					} else if(test.substring(index,index+1)=="2"){
						answer = true;
					} else if(test.substring(index,index+1)=="3"){
						answer = true;
					} else if(test.substring(index,index+1)=="4"){
						answer = true;
					} else if(test.substring(index,index+1)=="5"){
						answer = true;
					} else if(test.substring(index,index+1)=="6"){
						answer = true;
					} else if(test.substring(index,index+1)=="7"){
						answer = true;
					} else if(test.substring(index,index+1)=="8"){
						answer = true;
					} else if(test.substring(index,index+1)=="9"){
						answer = true;
					} else if(test.substring(index,index+1)=="a"){
						answer = true;
					} else if(test.substring(index,index+1)=="b"){
						answer = true;
					} else if(test.substring(index,index+1)=="c"){
						answer = true;
					} else if(test.substring(index,index+1)=="d"){
						answer = true;
					} else if(test.substring(index,index+1)=="e"){
						answer = true;
					} else if(test.substring(index,index+1)=="f"){
						answer = true;
					}
				}
			}
			return answer;
		}

	getIntFromHexString(hex){
		var length = hex.length;
		var number = 0;
		var product = 1;
		for (var x = 0; x < length; x++) {
			if(this.testHex(x,hex)){
				if(hex.substring(length-x-1,length-x)=="a"){
					number += 10*product;
				} else if(hex.substring(length-x-1,length-x)=="b"){
					number += 11*product;
				} else if(hex.substring(length-x-1,length-x)=="c"){
					number += 12*product;
				} else if(hex.substring(length-x-1,length-x)=="d"){
					number += 13*product;
				} else if(hex.substring(length-x-1,length-x)=="e"){
					number += 14*product;
				} else if(hex.substring(length-x-1,length-x)=="f"){
					number += 15*product;
				} else if(this.testNumeric(length-x-1,hex)){
					number += hex.substring(length-x-1,length-x)*product;
				} else {
					return -1;
				}
			} else {
				return -1;
			}
			product = product*16;
		}
		return number;
	}

	parseRules(ruleText){
		this.rulesValid=false;
		this.rPrefix = "";
		this.rPostfix = "";
		this.rNumLineTypes = 0;
		this.rLineNum = 0;
		this.rLinePrefixes = [""];
		this.rNumCharsPerLine = [0];
		this.rDataCharTypes = [""];
		this.rLineDelimiters = [""];
		this.rLineOrder = "";
		this.rLog = "";
		this.rNumDigits = [0];
		this.rStartTime = [0];
		this.rStartYear = [0];
		this.rStartMonth = [0];
		this.rStartDay = [0];
		this.rStartHour = [0];
		var ruleLine = "";
		this.rLineNum = 0;
		var lines = ruleText.split("\n");
		var foundStartPrefix = false;
		var foundEndPrefix = false;
		var foundNumDataLineTypes = false;
		var foundNextDataLine = false;
		var foundNextStartLinePrefix = false;
		var foundNextEndLinePrefix = false;
		var foundNextNumDataCharsPerLine = false;
		var foundNextDataCharType = false;
		var foundNextStartLineDelimiter = false;
		var foundNextEndLineDelimiter = false;
		var foundStartDataLineOrder = false;
		var foundEndDataLineOrder = false;
		var foundStartPostFix = false;
		var foundEndPostFix = false;
		var switcher = false;
		var splits = "";
		for(var x = 0; x < lines.length; x++){
			ruleLine = lines[x];
			console.log("ruleLine: " + ruleLine);
			splits = ruleLine.split(" ");
			if (ruleLine.length>=1){
				if (ruleLine.substring(0,1)=="#"){
					continue;
				} else if (ruleLine.substring(0,1)==" "){
					continue;
				}
			}
			if (ruleLine.length>=2){
				if(ruleLine.substring(0,2)=="//"){
					continue;
				}
			}
			if (ruleLine=="\n"){
				continue;
			}
			if (foundStartPrefix) {
				if (foundEndPrefix) {
					if (foundNumDataLineTypes) {
						if (foundNextDataLine) {
							if (foundNextStartLinePrefix) {
								if (foundNextEndLinePrefix) {
									if (foundNextNumDataCharsPerLine) {
										if (foundNextDataCharType) {
											if (foundNextStartLineDelimiter) {
												if (foundNextEndLineDelimiter) {
													if (foundStartDataLineOrder) {
														if (foundEndDataLineOrder) {
															if (foundStartPostFix) {
																if(switcher){
//																	console.log("Rule File Parsing: Found <FilePostfix> on ruleLine " + (x+1) + "\n");
																	switcher = false;
																}
																if (foundEndPostFix) {
																	break;
																} else {
																	for(var y = 14; y <= ruleLine.length; y++) {
																		if(ruleLine.substring(y-14,y)=="</FilePostfix>"){
																			this.rPostfix = this.rPostfix.concat(ruleLine.substring(0,y-14));
																			foundEndPostFix = true;
																			switcher = true;
																			return true;
																		}
																	}
																	for(var y = 20; (y <= ruleLine.length)&&!switcher; y++) {
																		if(ruleLine.substring(y-20,y)=="&lt;/FilePostfix&gt;"){
																			this.rPostfix = this.rPostfix.concat(ruleLine.substring(0,y-20));
																			foundEndPostFix = true;
																			switcher = true;
																			return true;
																		}
																	}
																	if(!foundEndPostFix){
																		this.rPostfix = this.rPostfix.concat(ruleLine+"\n");
																	}
																}
															} else {
																if (ruleLine.length>=13){
																	if (ruleLine.substring(0,13)=="<FilePostfix>"){
																		switcher = true;
																		foundStartPostFix = true;
																		this.rPostfix = ruleLine.substring(13,ruleLine.length)+"\n";
																		if(this.rPostfix.length >= 14){
																			for(var y = 14; y <= ruleLine.length; y++) {
																				if(ruleLine.substring(y-14,y)=="</FilePostfix>"){
																					this.rPostfix = ruleLine.substring(13,y-14);
																					foundEndPostFix = true;
//																					if(switcher){
//																						console.log("Rule File Parsing: Found <FilePostfix> on ruleLine " + (x+1) + "\n");
//																					}
																					return true;
																				}
																			}

																		}
																	}
																	if (ruleLine.length>=19 && !switcher){
																		if (ruleLine.substring(0,19)=="&lt;FilePostfix&gt;"){
																			switcher = true;
																			foundStartPostFix = true;
																			this.rPostfix = ruleLine.substring(19,ruleLine.length)+"\n";
																			if(this.rPostfix.length >= 20){
																				for(var y = 20; y <= ruleLine.length; y++) {
																					if(ruleLine.substring(y-20,y)=="&lt;/FilePostfix&gt;"){
																						this.rPostfix = ruleLine.substring(19,y-20);
																						foundEndPostFix = true;
//																						if(switcher){
//																							console.log("Rule File Parsing: Found <FilePostfix> on ruleLine " + (x+1) + "\n");
//																						}
																						return true;
																					}
																				}

																			}
																		}
																	}
																}
															}
														} else {

															for(var y = 16; y <= ruleLine.length; y++) {
																if(ruleLine.substring(y-16,y)=="</DataLineOrder>"){
																	this.rLineOrder = this.rLineOrder.concat(ruleLine.substring(0,y-16));
																	foundEndDataLineOrder = true;
																	switcher = true;
																	break;
																}
															}
															for(var y = 22; (y<=ruleLine.length && !switcher); y++) {
																if(ruleLine.substring(y-22,y)=="&lt;/DataLineOrder&gt;"){
																	this.rLineOrder = this.rLineOrder.concat(ruleLine.substring(0,y-22));
																	foundEndDataLineOrder = true;
																	switcher = true;
																	break;
																}
															}
															if(!foundEndDataLineOrder){
																this.rLineOrder+=(ruleLine+"\n");
															}
														}
														if(switcher){
//															console.log("Rule File Parsing: Found </DataLineOrder> on ruleLine " + (x+1) + "\n");
															switcher = false;
														}
													} else {
														if (ruleLine.length>=15){
															if (ruleLine.substring(0,15)=="<DataLineOrder>"){
																foundStartDataLineOrder = true;
																switcher = true;
																this.rLineOrder = ruleLine.substring(15,ruleLine.length)+"\n";
																if(this.rLineOrder.length >= 16){
																	for(var y = 16; y <= ruleLine.length; y++) {
																		if(ruleLine.substring(y-16,y)=="</DataLineOrder>"){
																			this.rLineOrder = ruleLine.substring(15,y-16);
																			foundEndDataLineOrder = true;
//																			if(switcher){
//																				console.log("Rule File Parsing: Found <DataLineOrder> on ruleLine " + (x+1) + "\n");
//																			}
																			break;
																		}
																	}

																}
															}
															if (ruleLine.length>=21&&!switcher){
																if (ruleLine.substring(0,21)=="&lt;DataLineOrder&gt;"){
																	foundStartDataLineOrder = true;
																	switcher = true;
																	this.rLineOrder = ruleLine.substring(21,ruleLine.length)+"\n";
																	if(this.rLineOrder.length >= 22){
																		for(var y = 22; y <= ruleLine.length; y++) {
																			if(ruleLine.substring(y-22,y)=="&lt;/DataLineOrder&gt;"){
																				this.rLineOrder = ruleLine.substring(21,y-22);
																				foundEndDataLineOrder = true;
//																				if(switcher){
//																					console.log("Rule File Parsing: Found <DataLineOrder> on ruleLine " + (x+1) + "\n");
//																				}
																				break;
																			}
																		}

																	}
																}
															}
														}
													}
													if(switcher){
//														console.log("Rule File Parsing: Found <DataLineOrder> on ruleLine " + (x+1) + "\n");
														switcher = false;
													}
												} else {
													var hit = false;
													for(var y = 16; y <= ruleLine.length; y++) {
														if(ruleLine.substring(y-16,y)=="</LineDelimiter>"){
															this.rLineDelimiters[this.rLineNum] = this.rLineDelimiters[this.rLineNum].concat(ruleLine.substring(0,y-16));
															hit=true;
															if((this.rLineNum+1)==this.rNumLineTypes) {
																switcher = true;
																foundNextEndLineDelimiter = true;
																break;
															} else {
																this.rLineNum++;
																foundNextEndLineDelimiter = false;
																foundNextStartLineDelimiter = false;
																foundNextDataLine = false;
																foundNextStartLinePrefix = false;
																foundNextEndLinePrefix = false;
																foundNextNumDataCharsPerLine = false;
																foundNextDataCharType = false;
																break;
															}
														}
													}
													for(var y = 22; (y <= ruleLine.length)&&!switcher; y++) {
														if(ruleLine.substring(y-22,y)=="&lt;/LineDelimiter&gt;"){
															this.rLineDelimiters[this.rLineNum] = this.rLineDelimiters[this.rLineNum].concat(ruleLine.substring(0,y-22));
															hit=true;
															if((this.rLineNum+1)==this.rNumLineTypes) {
																switcher = true;
																foundNextEndLineDelimiter = true;
																break;
															} else {
																this.rLineNum++;
																foundNextEndLineDelimiter = false;
																foundNextStartLineDelimiter = false;
																foundNextDataLine = false;
																foundNextStartLinePrefix = false;
																foundNextEndLinePrefix = false;
																foundNextNumDataCharsPerLine = false;
																foundNextDataCharType = false;
																break;
															}
														}
													}
													if(!hit){
														this.rLineDelimiters[this.rLineNum] = this.rLineDelimiters[this.rLineNum].concat(ruleLine+"\n");
													}
												}
												if(switcher){
//													console.log("Rule File Parsing: Found </LineDelimiter> on ruleLine " + (x+1) + "\n");
													switcher = false;
												}
											} else {
												if (ruleLine.length>=15){
													if (ruleLine.substring(0,15)=="<LineDelimiter>"){
														switcher = true;
														foundNextStartLineDelimiter = true;
														this.rLineDelimiters[this.rLineNum] = ruleLine.substring(15,ruleLine.length)+"\n";
														if(this.rLineDelimiters[this.rLineNum].length >= 16){
															for(var y = 16; y <= ruleLine.length; y++) {
																if(ruleLine.substring(y-16,y)=="</LineDelimiter>"){
																	this.rLineDelimiters[this.rLineNum] = ruleLine.substring(15,y-16);
																	if((this.rLineNum+1)==this.rNumLineTypes) {
																		foundNextEndLineDelimiter = true;
//																		if(switcher){
//																			console.log("Rule File Parsing: Found <LineDelimiter> on ruleLine " + (x+1) + "\n");
//																		}
																		break;
																	} else {
																		this.rLineNum++;
																		foundNextEndLineDelimiter = false;
																		foundNextStartLineDelimiter = false;
																		foundNextDataLine = false;
																		foundNextStartLinePrefix = false;
																		foundNextEndLinePrefix = false;
																		foundNextNumDataCharsPerLine = false;
																		foundNextDataCharType = false;
																		break;
																	}
																}
															}

														}
													}

													if (ruleLine.length>=21&&!switcher){
														if (ruleLine.substring(0,21)=="&lt;LineDelimiter&gt;"){
															switcher = true;
															foundNextStartLineDelimiter = true;
															this.rLineDelimiters[this.rLineNum] = ruleLine.substring(21,ruleLine.length)+"\n";
															if(this.rLineDelimiters[this.rLineNum].length >= 22){
																for(var y = 22; y <= ruleLine.length; y++) {
																	if(ruleLine.substring(y-22,y)=="&lt;/LineDelimiter&gt;"){
																		this.rLineDelimiters[this.rLineNum] = ruleLine.substring(21,y-22);
																		if((this.rLineNum+1)==this.rNumLineTypes) {
																			foundNextEndLineDelimiter = true;
//																			if(switcher){
//																				console.log("Rule File Parsing: Found <LineDelimiter> on ruleLine " + (x+1) + "\n");
//																			}
																			break;
																		} else {
																			this.rLineNum++;
																			foundNextEndLineDelimiter = false;
																			foundNextStartLineDelimiter = false;
																			foundNextDataLine = false;
																			foundNextStartLinePrefix = false;
																			foundNextEndLinePrefix = false;
																			foundNextNumDataCharsPerLine = false;
																			foundNextDataCharType = false;
																			break;
																		}
																	}
																}

															}
														}
													}
												}
											}
											if(switcher){
//												console.log("Rule File Parsing: Found <LineDelimiter> on ruleLine " + (x+1) + "\n");
												switcher = false;
											}
										} else {
											if (ruleLine.length>=12){
												if (splits[0]=="DataCharType"){
													if (splits.length>1){
														if(splits[1].length>=1){
															switcher = true;
															foundNextDataCharType = true;
															this.rDataCharTypes[this.rLineNum] = splits[1];
															if (splits.length>=3){
																if(splits[2].length>=1){

																		if(this.rDataCharTypes[this.rLineNum]=="number"){
																			this.rNumDigits[this.rLineNum] = 1*(splits[2]);
																			if(this.rNumDigits[this.rLineNum]<3){
																				this.rNumDigits[this.rLineNum]=3;
																			}
																		} else if(this.rDataCharTypes[this.rLineNum]=="time"){
																			this.rStartTime[this.rLineNum] = 1*(splits[2]);
																			if(this.rStartTime[this.rLineNum]<0){
																				this.rStartTime[this.rLineNum] = 0;
																			}
																		} else if(this.rDataCharTypes[this.rLineNum]=="24time"){
																			this.rStartTime[this.rLineNum] = 1*(splits[2]);
																			if(this.rStartTime[this.rLineNum]<0){
																				this.rStartTime[this.rLineNum] = 0;
																			}
																		} else if(this.rDataCharTypes[this.rLineNum]=="12time"){
																			this.rStartTime[this.rLineNum] = 1*(splits[2]);
																			if(this.rStartTime[this.rLineNum]<0){
																				this.rStartTime[this.rLineNum] = 0;
																			}
																		} else if(this.rDataCharTypes[this.rLineNum]=="datetime"){
																			this.rStartTime[this.rLineNum] = 0;
																			this.rNumDigits[this.rLineNum] = 3;
																			this.rStartYear[this.rLineNum] = 1*(splits[2]);
																			if (splits.length>=4){
																				this.rStartMonth[this.rLineNum] = 1*(splits[3]);
																				if(splits.length>=5){
																					this.rStartDay[this.rLineNum] = 1*(splits[4]);
																					if(splits.length>=6){
																						this.rStartHour[this.rLineNum] = 1*(splits[5]);
																					} else {
																						this.rStartHour[this.rLineNum] = 0;
																					}
																				} else {
																					this.rStartDay[this.rLineNum] = 0;
																					this.rStartHour[this.rLineNum] = 0;
																				}
																			} else {
																				this.rStartMonth[this.rLineNum] = 0;
																				this.rStartDay[this.rLineNum] = 0;
																				this.rStartHour[this.rLineNum] = 0;
																			}
																		} else {
																			this.rNumDigits[this.rLineNum] = 3;
																			this.rStartTime[this.rLineNum] = 0;
																			this.rStartYear[this.rLineNum] = 0;
																			this.rStartMonth[this.rLineNum] = 0;
																			this.rStartDay[this.rLineNum] = 0;
																			this.rStartHour[this.rLineNum] = 0;
																		}

																} else {
																	this.rStartTime[this.rLineNum] = 0;
																	this.rNumDigits[this.rLineNum] = 3;
																}
															} else {
																this.rStartTime[this.rLineNum] = 0;
																this.rNumDigits[this.rLineNum] = 3;
															}
														} else {
//															console.log("Warning: No Data Character Type found in rule file after DataCharType declaration statement!");
														}
													} else {
//														console.log("Warning: No Data Character Type found in rule file after DataCharType declaration!");
													}
												}
											}
										}
										if(switcher){
//											console.log("Rule File Parsing: Found DataCharType on ruleLine " + (x+1) + "\n");
											switcher = false;
										}
									} else {
										if (ruleLine.length>=19){
											if (splits[0]=="NumDataCharsPerLine"){
												if (splits.length>1){
													if(splits[1].length>=1){
														switcher = true;
														foundNextNumDataCharsPerLine = true;
														this.rNumCharsPerLine[this.rLineNum] = 1*(splits[1]);
													} else {
//														console.log("Warning: No Number of Characters Per Line found in rule file after NumDataCharsPerLine declaration statement!");
													}
												} else {
//													console.log("Warning: No Number of Characters Per Line found in rule file after NumDataCharsPerLine declaration!");
												}

											}
										}
									}
									if(switcher){
//										console.log("Rule File Parsing: Found NumDataCharsPerLine on ruleLine " + (x+1) + "\n");
										switcher = false;
									}
								} else {
									for(var y = 13; y <= ruleLine.length; y++) {
										if(ruleLine.substring(y-13,y)=="</LinePrefix>"){
											this.rLinePrefixes[this.rLineNum] = this.rLinePrefixes[this.rLineNum].concat(ruleLine.substring(0,y-13));
											switcher = true;
											foundNextEndLinePrefix = true;
											break;
										}
									}
									for(var y = 19; (!switcher&&(y <= ruleLine.length)); y++) {
										if(ruleLine.substring(y-19,y)=="&lt;/LinePrefix&gt;"){
											this.rLinePrefixes[this.rLineNum] = this.rLinePrefixes[this.rLineNum].concat(ruleLine.substring(0,y-19));
											switcher = true;
											foundNextEndLinePrefix = true;
											break;
										}
									}
									if(!foundNextEndLinePrefix){
										this.rLinePrefixes[this.rLineNum] = this.rLinePrefixes[this.rLineNum].concat(ruleLine+"\n");
									}
								}
								if(switcher){
//									console.log("Rule File Parsing: Found </LinePrefix> on ruleLine " + (x+1) + "\n");
									switcher = false;
								}
							} else {
								if (ruleLine.length>=12){
									if (ruleLine.substring(0,12)=="<LinePrefix>"){
										switcher = true;
										foundNextStartLinePrefix = true;
										this.rLinePrefixes[this.rLineNum] = ruleLine.substring(12,ruleLine.length)+"\n";
										if(this.rLinePrefixes[this.rLineNum].length >= 13){
											for(var y = 13; y <= ruleLine.length; y++) {
												if(ruleLine.substring(y-13,y)=="</LinePrefix>"){
													this.rLinePrefixes[this.rLineNum] = ruleLine.substring(12,y-13);
													foundNextEndLinePrefix = true;
//													if(switcher){
//														console.log("Rule File Parsing: Found <LinePrefix> on ruleLine " + (x+1) + "\n");
//													}
													break;
												}
											}

										}
									}
									if (ruleLine.length>=18&&!switcher){
										if (ruleLine.substring(0,18)=="&lt;LinePrefix&gt;"){
											switcher = true;
											foundNextStartLinePrefix = true;
											this.rLinePrefixes[this.rLineNum] = ruleLine.substring(18,ruleLine.length)+"\n";
											if(this.rLinePrefixes[this.rLineNum].length >= 19){
												for(var y = 19; y <= ruleLine.length; y++) {
													if(ruleLine.substring(y-19,y)=="&lt;/LinePrefix&gt;"){
														this.rLinePrefixes[this.rLineNum] = ruleLine.substring(18,y-19);
														foundNextEndLinePrefix = true;
//														if(switcher){
//															console.log("Rule File Parsing: Found <LinePrefix> on ruleLine " + (x+1) + "\n");
//														}
														break;
													}
												}

											}
										}

									}
								}
							}
							if(switcher){
//								console.log("Rule File Parsing: Found <LinePrefix> on ruleLine " + (x+1) + "\n");
								switcher = false;
							}
						} else {
							if (ruleLine.length>=8){
								if (splits[0]=="DataLine"){
									if (splits.length>1){
										if(splits[1].length>=1){
											if(1*(splits[1])==(this.rLineNum+1)){
												switcher = true;
												foundNextDataLine = true;
											} else {
//												console.log("Warning: The DataLine identification numbers found in the rule file are out of order!");
											}
										} else {
//											console.log("Warning: No DataLine Identification number found in rule file after DataLine declaration statement!");
										}
									} else {
//										console.log("Warning: No DataLine Identification number found in rule file after DataLine declaration!");
									}

								}
							}
						}
						if(switcher){
//							console.log("Rule File Parsing: Found DataLine on ruleLine " + (x+1) + "\n");
							switcher = false;
						}
					} else {
						if (ruleLine.length>=16){
							if (splits[0]=="NumDataLineTypes"){
								if (splits.length>1){
									if(splits[1].length>=1){
										if(1*(splits[1])<10){
											switcher = true;
											foundNumDataLineTypes = true;
											this.rNumLineTypes = 1*(splits[1]);
											this.rLinePrefixes = [""];
											this.rNumCharsPerLine = [0];
											this.rDataCharTypes = [""];
											this.rLineDelimiters = [""];
											this.rNumDigits = [0];
											this.rLineNum = 0;
											this.rStartTime = [0];
											this.rStartYear = [0];
											this.rStartMonth = [0];
											this.rStartDay = [0];
											this.rStartHour = [0];
											for(var t = 1; t<this.rNumLineTypes; t++){
												this.rLinePrefixes.push("");
												this.rNumCharsPerLine.push(0);
												this.rDataCharTypes.push("");
												this.rLineDelimiters.push("");
												this.rNumDigits.push(0);
												this.rStartTime.push(0);
												this.rStartYear.push(0);
												this.rStartMonth.push(0);
												this.rStartDay.push(0);
												this.rStartHour.push(0);
											}
										} else {
//											console.log("Warning: Number of Data Lines should not exceed nine!");
										}

									} else {
//										console.log("Warning: No Number of Data Lines found in rule file after NumDataLineTypes declaration statement!");
									}
								} else {
//									console.log("Warning: No Number of Data Lines found in rule file after NumDataLineTypes declaration!");
								}

							}
						}
					}
					if(switcher){
//						console.log("Rule File Parsing: Found NumDataLineTypes on ruleLine " + (x+1) + "\n");
						switcher = false;
					}
				} else {
					for(var y = 13; y <= ruleLine.length; y++) {
						if(ruleLine.substring(y-13,y)=="</FilePrefix>"){
							this.rPrefix = this.rPrefix.concat(ruleLine.substring(0,y-13));
							switcher = true;
							foundEndPrefix = true;
							break;
						}
					}
					for(var y = 19; (!switcher&&(y <= ruleLine.length)); y++) {
						if(ruleLine.substring(y-19,y)=="&lt;/FilePrefix&gt;"){
							this.rPrefix = this.rPrefix.concat(ruleLine.substring(0,y-19));
							switcher = true;
							foundEndPrefix = true;
							break;
						}
					}
					if(!foundEndPrefix){
						this.rPrefix = this.rPrefix.concat(ruleLine+"\n");
					}
				}
				if(switcher){
//					console.log("Rule File Parsing: Found </FilePrefix> on ruleLine " + (x+1) + "\n");
					switcher = false;
				}
			} else {
				if (ruleLine.length>=12&&!switcher){
					if (ruleLine.substring(0,12)=="<FilePrefix>"){
						switcher = true;
						foundStartPrefix = true;
						this.rPrefix = ruleLine.substring(12,ruleLine.length)+"\n";
						if(this.rPrefix.length >= 13){
							for(var y = 13; y <= ruleLine.length; y++) {
								if((ruleLine.substring(y-13,y)=="</FilePrefix>")){
									this.rPrefix = ruleLine.substring(12,y-13);
									foundEndPrefix = true;
//									if(switcher){
//										console.log("Rule File Parsing: Found </FilePrefix> on ruleLine " + (x+1) + "\n");
//									}
									break;
								}
							}
						}
					}
					if (ruleLine.length>=18&&!switcher){
						if (ruleLine.substring(0,18)=="&lt;FilePrefix&gt;"){
							switcher = true;
							foundStartPrefix = true;
							this.rPrefix = ruleLine.substring(18,ruleLine.length)+"\n";
							if(this.rPrefix.length >= 19){
								for(var y = 19; y <= ruleLine.length; y++) {
									if((ruleLine.substring(y-19,y)=="&lt;/FilePrefix&gt;")){
										this.rPrefix = ruleLine.substring(18,y-19);
										foundEndPrefix = true;
//										if(switcher){
//											console.log("Rule File Parsing: Found </FilePrefix> on ruleLine " + (x+1) + "\n");
//										}
										break;
									}
								}
							}
						}
					}
				}
			}
			if(switcher){
//				console.log("Rule File Parsing: Found <FilePrefix> on ruleLine " + (x+1) + "\n");
				switcher = false;
			}
		}
		return false;
	}





}