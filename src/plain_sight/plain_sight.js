//MIT License
//Copyright (c) 2018 Jonathan Hart

//Permission is hereby granted, free of charge, to any person obtaining a copy
//of this software and associated documentation files (the "Software"), to deal
//in the Software without restriction, including without limitation the rights
//to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
//copies of the Software, and to permit persons to whom the Software is
//furnished to do so, subject to the following conditions:
//The above copyright notice and this permission notice shall be included in all
//copies or substantial portions of the Software.

//THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
//AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
//OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
//SOFTWARE.

//unsecure global variable
var mask = newMask();

function plainSightEncryptHide(inString,ruleString,passString){
	/*
	 *  This function creates a new mask object then performs the
	 *  encrypt and hide
	 *  functions and then disposes of that mask object. It is
	 *  included in this library to provide access to plain_sight,js
	 *  functions to Java via Nashorn
	 *
	 *  Returns a string containing the encrypted then hidden input
	 *  or an error message
	 */
	var temp = newMask();
	temp.setInString(inString);
	temp.setRuleString(ruleString);
	temp.setPass(passString);
	temp.setInString(temp.encrypt);
	return temp.hide;
}

function plainSightHide(inString,ruleString){
	/*
	 *  This function creates a new mask object then performs the
	 *  hide
	 *  function and then disposes of that mask object. It is
	 *  included in this library to provide access to plain_sight,js
	 *  functions to Java via Nashorn
	 *
	 *  Returns a string containing the hidden input
	 *  or an error message
	 */
	var temp = newMask();
	temp.setInString(inString);
	temp.setRuleString(ruleString);
	return temp.hide;
}

function plainSightEncrypt(inString,passString){
	/*
	 *  This function creates a new mask object then performs the
	 *  encrypt
	 *  functions and then disposes of that mask object. It is
	 *  included in this library to provide access to plain_sight,js
	 *  functions to Java via Nashorn
	 *
	 *  Returns a string containing the encrypted input
	 *  or an error message
	 */
	var temp = newMask();
	temp.setInString(inString);
	temp.setPassString(passString);
	return temp.encrypt;
}

function plainSightDecryptUnhide(inString,ruleString,passString){
	/*
	 *  This function creates a new mask object then performs the
	 *  decrypt and unhide
	 *  functions and then disposes of that mask object. It is
	 *  included in this library to provide access to plain_sight,js
	 *  functions to Java via Nashorn
	 *
	 *  Returns a string containing the unhidden then decrypted input
	 *  or an error message
	 */
	var temp = newMask();
	temp.setInString(inString);
	temp.setRuleString(ruleString);
	temp.setPass(passString);
	temp.setInString(temp.unhide);
	return temp.decrypt;
}

function plainSightUnhide(inString,ruleString,passString){
	/*
	 *  This function creates a new mask object then performs the
	 *  unhide
	 *  functions and then disposes of that mask object. It is
	 *  included in this library to provide access to plain_sight,js
	 *  functions to Java via Nashorn
	 *
	 *  Returns a string containing the unhidden input
	 *  or an error message
	 */
	var temp = newMask();
	temp.setInString(inString);
	temp.setRuleString(ruleString);
	return temp.unhide;
}

function plainSightDecrypt(inString,passString){
	/*
	 *  This function creates a new mask object then performs the
	 *  decrypt
	 *  functions and then disposes of that mask object. It is
	 *  included in this library to provide access to plain_sight,js
	 *  functions to Java via Nashorn
	 *
	 *  Returns a string containing the decrypted input
	 *  or an error message
	 */
	var temp = newMask();
	temp.setInString(inString);
	temp.setPassString(passString);
	return temp.decrypt;
}

function plainSightDebug(ruleString){
	/*
	 *  This function creates a new mask object then performs the
	 *  debug
	 *  function and then disposes of that mask object. It is
	 *  included in this library to provide access to plain_sight,js
	 *  functions to Java via Nashorn
	 *
	 *  Returns a string containing parsing information about the input
	 *  or an error message
	 */
	var temp = newMask();
	temp.setRuleString(ruleString);
	return temp.debugRules;
}

function newMask(){
	return {
		inString:"",
		ruleString:"",
		logString:"",
		passString:"",
		keyLength:40,
		numGears:10,
		keyArray:[],
		fileExtensions:[".txt",".jpg",".gpg",".png",".gif",".mp3",".doc",".zip",".mov",".mp4",".xcf",".tar",".bak",
		                ".css",".wav",".dwg",".dxf",".dgn",".rtf",".ngp",".xls",".fli",".htm",".ico",".pdf",".tif",
		                ".pcx",".bmp",".tmp",".shf",".exe",".bat",".gfx",".3gp",".aac",".asv",".avi",".bin",".bpc",
		                ".cdt",".cfg",".dat",".dbf",".dir",".dll",".dos",".dxn",".edt",".env",".ext",".gc1",".geo",
		                ".gre",".gsd",".hdd",".hex",".htx",".hxx",".idb",".img",".inf",".ins",".jar",".jav",".jre",
		                ".kbd",".key",".kpl",".lib",".lic",".lnk",".log",".map",".mdl",".mid",".mob",".msg",".net",
		                ".obj",".ocf",".ocr",".odf",".ods",".odt",".ogg",".org",".pal",".pch",".pgp",".php",".pub",
		                ".raw",".rsc",".sav",".sql",".jbx",".klm"],

		                setInString:function(input){
		                	/*
		                	 *  This function validates the input and then sets the inString of this mask
		                	 *  which is a required input to the hide, unhide, encrypt, and decrypt functions
		                	 *
		                	 *  Returns true if input is valid, or false if it is not.
		                	 */
		                	if(input&&(typeof "string"==typeof input)){
		                		this.inString=input;
		                		return true;
		                	} else {
		                		//console.log("setInString Failed!  No input detected!");
		                		return false;
		                	}
		                },

		                setRuleString:function(rules){
		                	/*
		                	 *  This function validates the input and then sets the ruleString of this mask
		                	 *  which is a required input to the hide, unhide, and debug functions
		                	 *
		                	 *  Returns true if input is valid, or false if it is not.
		                	 */
		                	if(rules){
		                		if(typeof rules == typeof "test"){
		                			this.ruleString=rules;
		                			return true;
		                		} else {
		                			return false;
		                		}
		                	} else {
		                		return false;
		                	}
		                },

		                setPass:function(pass){
		                	/*
		                	 *  This function validates the input and then sets the passString of this mask
		                	 *  which is a required input to the encrypt and decrypt functions
		                	 *
		                	 *  Returns true if input is valid, or false if it is not.
		                	 */
		                	if(pass){
		                		if(typeof pass == typeof "test"){
		                			this.passString=pass;
		                			this.key;
		                			return true;
		                		} else {
		                			return false;
		                		}
		                	} else {
		                		return false;
		                	}
		                },

		                get checkRules() {
		                	/*
		                	 *  This function attempts to parse this.ruleString and
		                	 *  Returns true if parsing was successful, or false if it is not.
		                	 */
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
		                },

		                get key() {
		        			/*
		        			 *  This function attempts to calculate an encryption key
		        			 *  from this.passString and returns that key
		        			 *  or it returns false if this.passString is not valid.
		        			 */
		        			if(this.passString){
		        				if(typeof this.passString == typeof "string"){
		        					var passLength = this.passString.length;
		        					var keyShift = [];
		        					for(var x = 0;x < this.keyLength; x++){
		        						keyShift.push(0);
		        					}
		        					var paramA = this.newGear(13201,30000,19773);
		        					var paramB = this.newGear(219,500,87);
		        					var paramC = this.newGear(687,25000,109);
		        					var paramD = this.newGear(29,450,13);
		        					var paramE;
		        					var paramF;
		        					var paramG;
		        					if (this.keyLength>13){
		        						paramE = this.newGear(11,this.keyLength-1,2);
		        						paramF = this.newGear(7,this.keyLength-1,4);
		        						paramG = this.newGear(5,this.keyLength-1,6);
		        					} else if (this.keyLength>7){
		        						paramE = this.newGear(5,this.keyLength-1,2);
		        						paramF = this.newGear(3,this.keyLength-1,4);
		        						paramG = this.newGear(2,this.keyLength-1,6);
		        					} else if (this.keyLength>3){
		        						paramE = this.newGear(1,this.keyLength-1,0);
		        						paramF = this.newGear(2,this.keyLength-1,1);
		        						paramG = this.newGear(1,this.keyLength-1,1);
		        					} else {
		        						return false;
		        					}
		        					for(var x = 0;x < passLength; x++){
		        						for(var z = 0;z < this.keyLength; z++){
		        							keyShift[z] += Math.floor((paramA.next+paramC.next+(paramB.next+paramD.next)*x)/(this.passString.codePointAt(passLength-x-1)));
		        						}
		        						var a1 = paramE.next;var a2 = paramF.next;var a3 = paramG.next;
		        						keyShift[a1] += keyShift[a2]+this.passString.codePointAt(x)*1000;
		        						a1 = paramE.next;a2 = paramF.next;a3 = paramG.next;
		        						keyShift[a2] += keyShift[a3]+this.passString.codePointAt(x)*1000;
		        						a1 = paramE.next;a2 = paramF.next;a3 = paramG.next;
		        						keyShift[a3] += keyShift[a1]+this.passString.codePointAt(x)*1000;
		        						a1 = paramE.next;a2 = paramF.next;a3 = paramG.next;
		        						keyShift[a1] += keyShift[a2]+this.passString.codePointAt(x)*1000;
		        						a1 = paramE.next;a2 = paramF.next;a3 = paramG.next;
		        						keyShift[a2] += keyShift[a3]+this.passString.codePointAt(x)*1000;
		        						a1 = paramE.next;a2 = paramF.next;a3 = paramG.next;
		        						keyShift[a3] += keyShift[a1]+this.passString.codePointAt(x)*1000;
		        						for(var id = 0; id<this.keyLength; id++){
		        							while(keyShift[id]>1280000){
		        								keyShift[id] = keyShift[id] - 1270000;
		        							}
		        						}
		        					}
		        					for(var id = 0; id<this.keyLength; id++){
		        						while(keyShift[id]>127){
		        							if(keyShift[id]>1270000){
		        								keyShift[id] = keyShift[id] - 1260000 + 310000;
		        							} else if(keyShift[id]>127000){
		        								keyShift[id] = keyShift[id] - 126000 + 31000;
		        							} else if(keyShift[id]>12700){
		        								keyShift[id] = keyShift[id] - 12600 + 3100;
		        							} else if(keyShift[id]>1270){
		        								keyShift[id] = keyShift[id] - 1260 + 310;
		        							} else {
		        								keyShift[id] = keyShift[id] - 126 + 31;
		        							}
		        						}
		        					}
		        					this.keyArray = keyShift;
		        					return keyShift;
		        				} else {
		        					return false;
		        				}
		        			} else {
		        				return false;
		        			}
		        		},

		                get encrypt(){
		        			/*
		        			 *  This function attempts to encrypt this.inString with a key generated from
		        			 *  this.passString.  It returns the encrypted string or false if either
		        			 *  this.inString or this.passString is valid.
		        			 */
		        			var output = "";
		        			if(this.inString&&this.passString){
		        				if(typeof this.inString == typeof "test" && typeof this.passString == typeof "test"){
		        					var keyShift = this.keyArray;
		        					var inputLength = this.inString.length;
		        					var input = this.inString;
		        					var outShift = 0;
		        					var keyGears = [];
		        					for (var x = 0; x < Math.floor(this.keyLength/2); x++){
		        						keyGears.push(this.newGear(x+1, this.keyLength-1, Math.floor(x+0.5*x)));
		        					}
		        					var gears = [];
		        					for (var x = 0; x < this.numGears; x++){
		        						var shift = Math.ceil(this.numGears*2.5);
		        						for(var y = 0; y < keyGears.length; y+=4){
		        							shift += keyShift[keyGears[y].next];
		        						}
		        						gears.push(this.newGear(x+1, shift, Math.floor(x+0.5*x)));
		        					}
		        					for(var x = 0;x < inputLength;x++){
		        						outShift = 0;
		        						for(var y = 0; y < keyGears.length; y++){
		        							outShift += keyShift[keyGears[y].next];
		        						}
		        						for(var y = 0; y < gears.length; y++){
		        							outShift += gears[y].next;
		        						}

		        						if(input.codePointAt(x)==10){
		        							outShift += 31;
		        						} else {
		        							outShift += input.codePointAt(x);
		        						}

		        						while(outShift>125){
		        							outShift = outShift - 126 + 31;
		        						}

		        						if(outShift==31){
		        							output += String.fromCharCode(10);
		        						} else {
		        							output += String.fromCharCode(outShift);
		        						}
		        					}
		        				}
		        				//console.log(output);
		        				return output;
		        			}
		        			return false;
		        		},

		        		get decrypt(){
		        			/*
		        			 *  This function attempts to decrypt this.inString with a key generated from
		        			 *  this.passString.  It returns the decrypted string or false if either
		        			 *  this.inString or this.passString is valid.
		        			 */
		        			var output = "";
		        			if(this.inString&&this.passString){
		        				if(typeof this.inString == typeof "test" && typeof this.passString == typeof "test"){
		        					var keyShift = this.keyArray;
		        					var inputLength = this.inString.length;
		        					var input = this.inString;
		        					var outShift = 0;
		        					var keyGears = [];
		        					for (var x = 0; x < Math.floor(this.keyLength/2); x++){
		        						keyGears.push(this.newGear(x+1, this.keyLength-1, Math.floor(x+0.5*x)));
		        					}
		        					var gears = [];
		        					for (var x = 0; x < this.numGears; x++){
		        						var shift = Math.ceil(this.numGears*2.5);
		        						for(var y = 0; y < keyGears.length; y+=4){
		        							shift += keyShift[keyGears[y].next];
		        						}
		        						gears.push(this.newGear(x+1, shift, Math.floor(x+0.5*x)));
		        					}
		        					for(var x = 0;x < inputLength;x++){
		        						outShift = 0;
		        						for(var y = 0; y < keyGears.length; y++){
		        							outShift += keyShift[keyGears[y].next];
		        						}
		        						for(var y = 0; y < gears.length; y++){
		        							outShift += gears[y].next;
		        						}

		        						outShift = 0 - outShift;

		        						if(input.codePointAt(x)==10){
		        							outShift += 31;
		        						} else {
		        							outShift += input.codePointAt(x);
		        						}

		        						while(outShift<31){
		        							outShift = outShift + 126 - 31;
		        						}

		        						if(outShift==31){
		        							output += String.fromCharCode(10);
		        						} else {
		        							output += String.fromCharCode(outShift);
		        						}
		        					}
		        					return output;
		        				}
		        			}
		        			return false;
		        		},

		        		newGear:function newGear(length,range,startValue){
		        			var gear = {
		        				length:0,
		        				range:0,
		        				value:0,
		        				setProperties:function(length,range,startValue){
		        					if(range){
		        						if(length){
		        								if(range>0){
		        									if(length>0){
		        										if(startValue>=0){
		        											if(range>length){
		        												if(startValue<range){
		        													this.range = range;
		        													this.value = startValue;
		        													this.length = length;
		        													return true;
		        												} else {
		        													return false;
		        												}
		        											} else {
		        												return false;
		        											}
		        										} else {
		        											return false;
		        										}
		        									} else {
		        										return false;
		        									}
		        								} else {
		        									return false;
		        								}
		        						} else {
		        							return false;
		        						}
		        					} else {
		        						return false;
		        					}
		        				},
		        				get next() {
		        					if(this.range){
		        						if(this.length){
		        								if(this.range>0){
		        									if(this.length>0){
		        										if(this.value>=0){
		        											if(this.range>this.length){
		        													if((this.value+this.length)>=this.range){
		        														this.value = this.value + this.length - this.range;
		        														return (this.value);
		        													} else {
		        														this.value = this.value + this.length;
		        														return (this.value);
		        													}
		        											} else {
		        												return false;
		        											}
		        										} else {
		        											return false;
		        										}
		        									} else {
		        										return false;
		        									}
		        								} else {
		        									return false;
		        								}
		        						} else {
		        							return false;
		        						}
		        					} else {
		        						return false;
		        					}
		        				}
		        			};
		        			gear.setProperties(length,range,startValue);
		        			return gear;
		        		},

		                get debugRules() {
		                	/*
		                	 *  This function returns debugging information obtained from an attempt to parse
		                	 *  this.ruleString.  It returns an error message if this.ruleString is invalid.
		                	 */
		                	if(!this.ruleString){
		                		return "ruleString has not been set!";
		                	}
		                	if(typeof this.ruleString!= typeof "test"){
		                		return "ruleString is not of the correct type!  It is a " + (typeof this.ruleString) + " instead of a string!";
		                	}
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
		                																//console.log("Rule File Parsing: Found <FilePostfix> on ruleLine " + (x+1) + "\n");
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
		                														//console.log("Rule File Parsing: Found </DataLineOrder> on ruleLine " + (x+1) + "\n");
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
		                													//console.log("Rule File Parsing: Found <DataLineOrder> on ruleLine " + (x+1) + "\n");
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
		                												//console.log("Rule File Parsing: Found </LineDelimiter> on ruleLine " + (x+1) + "\n");
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
		                											//console.log("Rule File Parsing: Found <LineDelimiter> on ruleLine " + (x+1) + "\n");
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
		                														//console.log("Warning: No Data Character Type found in rule file after DataCharType declaration statement!");
		                														this.logString += "Warning: No Data Character Type found in rule file after DataCharType declaration!\n";
		                													}
		                												} else {
		                													//console.log("Warning: No Data Character Type found in rule file after DataCharType declaration!");
		                													this.logString += "Warning: No Data Character Type found in rule file after DataCharType declaration!\n";
		                												}
		                											}
		                										}
		                									}
		                									if(switcher){
		                										//console.log("Rule File Parsing: Found DataCharType on ruleLine " + (x+1) + "\n");
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
		                													//console.log("Warning: No Number of Characters Per Line found in rule file after NumDataCharsPerLine declaration statement!");
		                												}
		                											} else {
		                												//console.log("Warning: No Number of Characters Per Line found in rule file after NumDataCharsPerLine declaration!");
		                											}

		                										}
		                									}
		                								}
		                								if(switcher){
		                									//console.log("Rule File Parsing: Found NumDataCharsPerLine on ruleLine " + (x+1) + "\n");
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
		                								//console.log("Rule File Parsing: Found </LinePrefix> on ruleLine " + (x+1) + "\n");
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
		                							//console.log("Rule File Parsing: Found <LinePrefix> on ruleLine " + (x+1) + "\n");
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
		                											//console.log("Warning: The DataLine identification numbers found in the rule file are out of order!");
		                											this.logString += "Warning: The DataLine identification numbers found in the rule file are out of order!\n";
		                										}
		                									} else {
		                										//console.log("Warning: No DataLine Identification number found in rule file after DataLine declaration statement!");
		                										this.logString += "Warning: No DataLine Identification number found in rule file after DataLine declaration statement!\n";
		                									}
		                								} else {
		                									//console.log("Warning: No DataLine Identification number found in rule file after DataLine declaration!");
		                									this.logString += "Warning: No DataLine Identification number found in rule file after DataLine declaration statement!\n";
		                								}

		                							}
		                						}
		                					}
		                					if(switcher){
		                						//console.log("Rule File Parsing: Found DataLine on ruleLine " + (x+1) + "\n");
		                						switcher = false;
		                					}
		                				} else {
		                					if (ruleLine.length>=16){
		                						if (splits[0]=="NumDataLineTypes"){
		                							if (splits.length>1){
		                								if(splits[1].length>=1){

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
		                									this.logString += "Warning: No Number of Data Lines found in rule file after NumDataLineTypes declaration statement!\n";
		                								}
		                							} else {
		                								this.logString += "Warning: No Number of Data Lines found in rule file after NumDataLineTypes declaration!\n";
		                							}

		                						}
		                					}
		                				}
		                				if(switcher){
		                					//console.log("Rule File Parsing: Found NumDataLineTypes on ruleLine " + (x+1) + "\n");
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
		                				//console.log("Rule File Parsing: Found </FilePrefix> on ruleLine " + (x+1) + "\n");
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
		                			//console.log("Rule File Parsing: Found <FilePrefix> on ruleLine " + (x+1) + "\n");
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
		                },

		                get hide() {
		                	/*
		                	 *  This function validates this.inString and this.ruleString and then
		                	 *  returns a string containing the hidden message or an error message
		                	 *  if the inputs are invalid.
		                	 */
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
		                },

		                get unhide() {
		                	/*
		                	 *  This function validates this.inString and this.ruleString and then
		                	 *  returns a string containing the unhidden message or an error message
		                	 *  if the inputs are invalid.
		                	 */
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
		                },

		                hider:function(inputText) {
		                	/*
		                	 *  This function validates the inputText and then
		                	 *  returns a string containing the hidden message or an error message
		                	 *  if the inputs are invalid.
		                	 */
		                	if(!inputText){
		                		var out = "Hide Failed!  Nothing to Hide!";
		                		return out;
		                	}
		                	if(typeof inputText != typeof "test"){
		                		var out = "Hide Failed!  Input is not a string!";
		                		return out;
		                	}
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
		                				if(this.rLineOrder.substring(lineOrderCursor,lineOrderCursor+2)=="^<"){
		                					lineOrderCursor+=2;
		                					typeNum="";
		                					while(this.rLineOrder.substring(lineOrderCursor,lineOrderCursor+2)!=">^"){
		                						typeNum += this.rLineOrder.substring(lineOrderCursor,lineOrderCursor+1);
		                						lineOrderCursor++;
		                						if(lineOrderCursor >= lineOrderLength){
		                							break;
		                						}
		                					}
		                					lineOrderCursor+=1;
		                					typeNum = 1*typeNum;
		                					if (((typeNum)<=this.rNumLineTypes)&((typeNum)>0)){
		                						output += this.rLinePrefixes[typeNum-1];
		                						for(var x = 0; x < this.rNumCharsPerLine[typeNum-1]; x++){
		                							if (this.rDataCharTypes[typeNum-1]=="extension"){
		                								if(inputCursor >= inputLength) {
		                									output+=".313";
		                									inputCursor++;
		                									lineOrderCursor = lineOrderLength;
		                								} else {
		                									var datum = inputText.charAt(inputCursor);
		                									var num = datum.codePointAt(0);
		                									if(num==10){
		                										num = 0;
		                									} else {
		                										num = num - 31;
		                									}
		                									output+=this.fileExtensions[num];
		                									inputCursor++;
		                								}
		                								if (x < (this.rNumCharsPerLine[typeNum-1] - 1)){
		                									output+=this.rLineDelimiters[typeNum-1];
		                								}
		                							} else if (this.rDataCharTypes[typeNum-1]=="number"){
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
		                								//console.log("(hider) Warning: Data type " + this.rDataCharTypes[typeNum-1] + " unrecognized for Data Line " + typeNum);
		                							}
		                						}
		                						lastLineOrderCursor = lineOrderCursor + 1;
		                					} else {
		                						//console.log("(hider) Warning! The Line Order contains a line identifier number that is greater than the number of data lines or less than one!");
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
		                		return out;
		                	}
		                },

		                unhider:function(inputText) {
		                	/*
		                	 *  This function validates the inputText and then
		                	 *  returns a string containing the unhidden message or an error message
		                	 *  if the inputs are invalid.
		                	 */
		                	if(!inputText){
		                		var out = "Unhide Failed!  Nothing to Hide!";
		                		return out;
		                	}
		                	if(typeof inputText != typeof "test"){
		                		var out = "Unhide Failed!  Input is not a string!";
		                		return out;
		                	}
		                	if (!String.prototype.includes) {
		                		String.prototype.includes = function(search, start) {
		                			'use strict';
		                			if (typeof start !== 'number') {
		                				start = 0;
		                			}

		                			if (start + search.length > this.length) {
		                				return false;
		                			} else {
		                				return this.indexOf(search, start) !== -1;
		                			}
		                		};
		                	}
		                	if(this.rulesValid){
		                		var output = "";
		                		var inputLength = inputText.length;
		                		var inputCursor = 0;
		                		var lastInputCursor = 0;
		                		if (inputText.substring(0,this.rPrefix.length)==this.rPrefix){
		                			inputCursor = this.rPrefix.length;
		                		} else {
		                			//console.log("Unhide Warning! File Prefix Not Found!");
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
		                				if(this.rLineOrder.substring(lineOrderCursor,lineOrderCursor+2)=="^<"){
		                					lineOrderCursor+=2;
		                					typeNum="";
		                					while(this.rLineOrder.substring(lineOrderCursor,lineOrderCursor+2)!=">^"){
		                						typeNum += this.rLineOrder.substring(lineOrderCursor,lineOrderCursor+1);
		                						lineOrderCursor++;
		                						if(lineOrderCursor >= lineOrderLength){
		                							break;
		                						}
		                					}
		                					lineOrderCursor+=1;
		                					typeNum = 1*typeNum;
		                					if (((typeNum)<=this.rNumLineTypes)&((typeNum)>0)){
		                						if((inputCursor + this.rLinePrefixes[typeNum-1].length) < inputLength){
		                							inputCursor = inputCursor + this.rLinePrefixes[typeNum-1].length;
		                							for(var x = 0; x < this.rNumCharsPerLine[typeNum-1]; x++){
		                								if (this.rDataCharTypes[typeNum-1]=="extension"){
		                									if(inputCursor + 4 < inputLength){
		                										var num = -1;
		                										var test = inputText.substring(inputCursor,inputCursor+4);
		                										for(var k = 0;k<this.fileExtensions.length;k++){
		                											if(test===this.fileExtensions[k]){
		                												num = k;
		                												break;
		                											}
		                										}
		                										var notFound = true;
		                										while(notFound){
		                											if(inputCursor==inputLength){
		                												break;
		                											}
		                											if(num<0){
		                												notFound = true;
		                												inputCursor++;
		                												test = inputText.substring(inputCursor,inputCursor+4);
		                												for(var k = 0;k<this.fileExtensions.length;k++){
		                													if(test===this.fileExtensions[k]){
		                														num = k;
		                														break;
		                													}
		                												}
		                											} else {
		                												notFound = false;
		                											}
		                										}
		                										if(inputCursor==inputLength){
		                											break;
		                										}
		                										if(num==0){
		                											num+= 10;
		                										} else if (num>0) {
		                											num+=31;
		                										}
		                										var datum = String.fromCharCode(num);
		                										output+=datum;
		                										inputCursor+=4;
		                									}
		                									if((x + 1) < this.rNumCharsPerLine[typeNum-1]) {
		                										if((inputCursor + this.rLineDelimiters[typeNum-1].length) < inputLength){
		                											inputCursor = inputCursor + this.rLineDelimiters[typeNum-1].length;
		                										}
		                									}
		                								} else if (this.rDataCharTypes[typeNum-1]=="number"){
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
		                												//console.log("(Unhide) Warning! No valid number match was found for the input at input Cursor " + inputCursor + "\n");
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
		                									//console.log("(Unhide) Warning: Data type " + this.rDataCharTypes[typeNum-1] + " unrecognized for Data Line " + typeNum);
		                								}
		                							}
		                						} else {
		                							inputCursor = inputLength;
		                							break;
		                						}
		                					} else {
		                						//console.log("(Unhide) Warning! The Line Order contains a line identifier number that is greater than the number of data lines or less than one!");
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
		                		return out;
		                	}
		                },

		                testNumeric:function(index,test){
		                	/*
		                	 * This function returns true if the character of test
		                	 * at the index is a number.  It returns false if the character is not a number.
		                	 *
		                	 */
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
		                },

		                testHex:function(index,test){
		                	/*
		                	 * This function returns true if the character of test
		                	 * at the index is a base 16 number.  It returns false if the character is not a number.
		                	 *
		                	 */
		                	var answer = false;
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
		                },

		                getIntFromHexString:function(hex){
		                	/*
		                	 * This function validates the input then returns the integer value of a string containing
		                	 * a hex value.  Returns -1 if input is invalid.
		                	 */
		                	var answer = false;
		                	if(!hex){
		                		return -1;
		                	}
		                	if(typeof hex != typeof "test"){
		                		return -1;
		                	}
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
		                },

		                parseRules:function(ruleText){
		                	/*
		                	 * This function validates the input and then attempts to parse it into a set of rules
		                	 * for hiding a message.  It ruturns true if parsing is successful or false if it is
		                	 * unsuccessful or if the input is invalid.
		                	 */
		                	if(!ruleText){
		                		return false;
		                	}
		                	if(typeof ruleText != typeof "test"){
		                		return false;
		                	}
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
		                		//console.log("ruleLine: " + ruleLine);
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
//		                																console.log("Rule File Parsing: Found <FilePostfix> on ruleLine " + (x+1) + "\n");
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
//		                																				if(switcher){
//		                																				console.log("Rule File Parsing: Found <FilePostfix> on ruleLine " + (x+1) + "\n");
//		                																				}
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
//		                																					if(switcher){
//		                																					console.log("Rule File Parsing: Found <FilePostfix> on ruleLine " + (x+1) + "\n");
//		                																					}
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
//		                														console.log("Rule File Parsing: Found </DataLineOrder> on ruleLine " + (x+1) + "\n");
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
//		                																		if(switcher){
//		                																		console.log("Rule File Parsing: Found <DataLineOrder> on ruleLine " + (x+1) + "\n");
//		                																		}
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
//		                																			if(switcher){
//		                																			console.log("Rule File Parsing: Found <DataLineOrder> on ruleLine " + (x+1) + "\n");
//		                																			}
		                																			break;
		                																		}
		                																	}

		                																}
		                															}
		                														}
		                													}
		                												}
		                												if(switcher){
//		                													console.log("Rule File Parsing: Found <DataLineOrder> on ruleLine " + (x+1) + "\n");
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
//		                												console.log("Rule File Parsing: Found </LineDelimiter> on ruleLine " + (x+1) + "\n");
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
//		                																	if(switcher){
//		                																	console.log("Rule File Parsing: Found <LineDelimiter> on ruleLine " + (x+1) + "\n");
//		                																	}
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
//		                																		if(switcher){
//		                																		console.log("Rule File Parsing: Found <LineDelimiter> on ruleLine " + (x+1) + "\n");
//		                																		}
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
//		                											console.log("Rule File Parsing: Found <LineDelimiter> on ruleLine " + (x+1) + "\n");
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
//		                														console.log("Warning: No Data Character Type found in rule file after DataCharType declaration statement!");
		                													}
		                												} else {
//		                													console.log("Warning: No Data Character Type found in rule file after DataCharType declaration!");
		                												}
		                											}
		                										}
		                									}
		                									if(switcher){
//		                										console.log("Rule File Parsing: Found DataCharType on ruleLine " + (x+1) + "\n");
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
//		                													console.log("Warning: No Number of Characters Per Line found in rule file after NumDataCharsPerLine declaration statement!");
		                												}
		                											} else {
//		                												console.log("Warning: No Number of Characters Per Line found in rule file after NumDataCharsPerLine declaration!");
		                											}

		                										}
		                									}
		                								}
		                								if(switcher){
//		                									console.log("Rule File Parsing: Found NumDataCharsPerLine on ruleLine " + (x+1) + "\n");
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
//		                								console.log("Rule File Parsing: Found </LinePrefix> on ruleLine " + (x+1) + "\n");
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
//		                												if(switcher){
//		                												console.log("Rule File Parsing: Found <LinePrefix> on ruleLine " + (x+1) + "\n");
//		                												}
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
//		                													if(switcher){
//		                													console.log("Rule File Parsing: Found <LinePrefix> on ruleLine " + (x+1) + "\n");
//		                													}
		                													break;
		                												}
		                											}

		                										}
		                									}

		                								}
		                							}
		                						}
		                						if(switcher){
//		                							console.log("Rule File Parsing: Found <LinePrefix> on ruleLine " + (x+1) + "\n");
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
//		                											console.log("Warning: The DataLine identification numbers found in the rule file are out of order!");
		                										}
		                									} else {
//		                										console.log("Warning: No DataLine Identification number found in rule file after DataLine declaration statement!");
		                									}
		                								} else {
//		                									console.log("Warning: No DataLine Identification number found in rule file after DataLine declaration!");
		                								}

		                							}
		                						}
		                					}
		                					if(switcher){
//		                						console.log("Rule File Parsing: Found DataLine on ruleLine " + (x+1) + "\n");
		                						switcher = false;
		                					}
		                				} else {
		                					if (ruleLine.length>=16){
		                						if (splits[0]=="NumDataLineTypes"){
		                							if (splits.length>1){
		                								if(splits[1].length>=1){

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
//		                									console.log("Warning: No Number of Data Lines found in rule file after NumDataLineTypes declaration statement!");
		                								}
		                							} else {
//		                								console.log("Warning: No Number of Data Lines found in rule file after NumDataLineTypes declaration!");
		                							}

		                						}
		                					}
		                				}
		                				if(switcher){
//		                					console.log("Rule File Parsing: Found NumDataLineTypes on ruleLine " + (x+1) + "\n");
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
//		                				console.log("Rule File Parsing: Found </FilePrefix> on ruleLine " + (x+1) + "\n");
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
//		                								if(switcher){
//		                								console.log("Rule File Parsing: Found </FilePrefix> on ruleLine " + (x+1) + "\n");
//		                								}
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
//		                									if(switcher){
//		                									console.log("Rule File Parsing: Found </FilePrefix> on ruleLine " + (x+1) + "\n");
//		                									}
		                									break;
		                								}
		                							}
		                						}
		                					}
		                				}
		                			}
		                		}
		                		if(switcher){
//		                			console.log("Rule File Parsing: Found <FilePrefix> on ruleLine " + (x+1) + "\n");
		                			switcher = false;
		                		}
		                	}
		                	return false;
		                }
	}
}
