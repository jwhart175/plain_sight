/* MIT License

Copyright (c) 2017 Jonathan Wayne Hart

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 */
package plain_sight;

import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.Dimension;
import java.awt.Insets;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;
import java.io.File;
import java.io.IOException;

import javax.swing.JFrame;
import javax.swing.JScrollPane;
import javax.swing.JTextField;
import javax.swing.JTextPane;
import javax.swing.SwingUtilities;

public class Plain_Sight extends JFrame{
	/* Variable and Function Nomenclature prescripts:
     * pv = private
     * pr = protected
     * pu = public
     * pvs = private static
     * prs = protected static
     * pus = public static
     * pvsf = private static final
     * prsf = protected static final
     * pusf = public static final
     */
	//unhide /home/user/git/plain_sight/output/out_log /home/user/git/plain_sight/recovered/log_recovered /home/user/git/plain_sight/rules/dnfLog
	//hide /home/user/git/plain_sight/input/test_text /home/user/git/plain_sight/output/out_log /home/user/git/plain_sight/rules/dnfLog
	//unhide /home/user/git/plain_sight/output/out_accel /home/user/git/plain_sight/recovered/accel_recovered /home/user/git/plain_sight/rules/AccelDataLog
	//hide /home/user/git/plain_sight/input/test_text /home/user/git/plain_sight/output/out_accel /home/user/git/plain_sight/rules/AccelDataLog
	//unhide /home/user/git/plain_sight/output/out_crypt /home/user/git/plain_sight/recovered/crypt_recovered /home/user/git/plain_sight/rules/testC
	//hide /home/user/git/plain_sight/input/crypt_file.gpg /home/user/git/plain_sight/output/out_crypt /home/user/git/plain_sight/rules/testC
	
	private static final int prsfIntMinusOne = -1;
	private static final int prsfIntZero = 0;
	private static final int prsfIntOne = 1;
	private static final int prsfIntTwo = 2;
	private static final int prsfIntThree = 3;
	private static final int prsfIntFour = 4;
	private static final int prsfIntFive = 5;
	private static final int prsfIntSix = 6;
	private static final int prsfIntEight = 8;
	private static final int prsfIntTen = 10;
	private static final int prsfIntEleven = 11;
	private static final int prsfIntTwelve = 12;
	private static final int prsfIntThirteen = 13;
	private static final int prsfIntFourteen = 14;
	private static final int prsfIntFifteen = 15;
	private static final int prsfIntSixteen = 16;
	private static final int prsfIntSeventeen = 17;
	private static final int prsfIntEighteen = 18;
	private static final int prsfIntNineteen = 19;
	private static final int prsfIntThirtyEight = 38;
	private static final int prsfIntForty = 40;
	private static final int prsfIntOneHundred = 100;
	private static final int prsfIntOneFifty = 150;
	private static final int prsfIntTwoFiftyFive = 255;
	private static final int prsfIntOneThousand = 1000;
	private static final int prsfIntEightHundred = 800;
	private static final int prsfIntFourHundred = 400;

    private JTextPane pvTextPane;
    private JTextField pvTextField;
    private OutputScribe pvScrivener = new OutputScribe();
    private String[] pvCommandLog;
    private int pvCommandIndex = prsfIntZero;
    private String pvPrefix = "";
	private String pvPostfix = "";
	private int pvNumLineTypes = prsfIntZero;
	private int pvLineNum = prsfIntZero;
	private String[] pvLinePrefixes = new String[prsfIntOne];
	private int[] pvNumCharsPerLine = new int[prsfIntOne];
	private String[] pvDataCharTypes = new String[prsfIntOne];
	private String[] pvLineDelimiters = new String[prsfIntOne];
	private String pvLineOrder = "";
	private StringBuilder pvLog = new StringBuilder();
	

    public Plain_Sight() {
        super("Plain_Sight Terminal");
        //creates a simple console
        pvTextPane = new JTextPane();
        pvTextPane.setCaretPosition(prsfIntZero);
        pvTextPane.setMargin(new Insets(prsfIntEight,prsfIntEight,prsfIntEight,prsfIntEight));
        pvTextPane.setForeground(Color.WHITE);
        pvTextPane.setBackground(new Color(prsfIntOneFifty,prsfIntZero,prsfIntZero));
        JScrollPane scrollPane = new JScrollPane(pvTextPane);
        scrollPane.setPreferredSize(new Dimension(prsfIntEightHundred, prsfIntFourHundred));
        pvTextPane.setEditable(false);
        pvTextField = new JTextField();
        pvTextField.setMargin(new Insets(prsfIntEight,prsfIntEight,prsfIntEight,prsfIntEight));
        pvTextField.setForeground(Color.WHITE);
        pvTextField.setBackground(new Color(prsfIntOneFifty,prsfIntZero,prsfIntZero));
        pvTextField.setCaretColor(Color.WHITE);
        pvTextField.setEditable(true);
        getContentPane().add(scrollPane, BorderLayout.CENTER);
        getContentPane().add(pvTextField, BorderLayout.PAGE_START);
        String initString = "Welcome to Plain_Sight Terminal" + System.getProperty("line.separator") + "Enter 'help' for command list, or 'example' for examples" +System.getProperty("line.separator");
        //pvTextPane.setText(initString + "Or get started by checking the current input directory with 'get inputDir'" + System.getProperty("line.separator"));
        pvTextPane.setCaretPosition(prsfIntZero);
        pvTextField.addKeyListener(new prTerminalKeyListener());
    }
	public static void main(String[] args) {
		SwingUtilities.invokeLater(new Runnable() {
            public void run() {
            	prsShowGUI();
            }
        });
    }
	
    private class prTerminalKeyListener implements KeyListener {
    	public void keyTyped(KeyEvent e){
    		if(e.getKeyChar() == KeyEvent.VK_ENTER) {
    			//check for and execute commands
    			pvEnterCommand();
    		}
    	}
    	public void keyPressed(KeyEvent e){
    		//scroll back through old commands when up or down keys are pressed
    		try {
    			if(e.getKeyCode()==prsfIntThirtyEight){
    				if(pvCommandIndex>prsfIntZero){
    					pvCommandIndex--;
    				}
    				pvTextField.setText(pvCommandLog[pvCommandIndex]);
    			} else if(e.getKeyCode()==prsfIntForty){
    				if(pvCommandIndex<(pvCommandLog.length-prsfIntOne)){
    					pvCommandIndex++;
    				}
    				pvTextField.setText(pvCommandLog[pvCommandIndex]);
    			}
    		} catch (Exception err) {
    			//nothing
    		}
    	}
    	public void keyReleased(KeyEvent e){
    		//no action
    	}
    }
	
	private static void prsShowGUI() {
        //Create and set up the window.
        final Plain_Sight frame = new Plain_Sight();
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.pack();
        frame.setVisible(true);
    }
	
	private void pvEnterCommand(){
    	//read text in from pvTextField and process the commands therein
    	String commandString = pvTextField.getText();
    	pvLogCommand(commandString);
    	boolean writeToFile = false;
    	int fileNum = prsfIntZero;
    	pvTextField.setText("");
    	pvLog = new StringBuilder();
    	StringBuilder pastText = new StringBuilder();
    	pastText.append(pvTextPane.getText() + System.getProperty("line.separator") + ">: " + commandString + System.getProperty("line.separator"));
    	pvTextPane.setText(pastText.toString());
    	pvLog.append("Executing...: " + commandString + System.getProperty("line.separator"));
    	//interpret command and print response or error
    	if(commandString.contains("help")){
    		pvLog.append(System.getProperty("line.separator"));
    		pvLog.append("The program commands are: " + System.getProperty("line.separator"));
    		pvLog.append(System.getProperty("line.separator"));
    		pvLog.append(">: clear" + System.getProperty("line.separator"));
    		pvLog.append("This command clears the console." + System.getProperty("line.separator"));
    		pvLog.append(System.getProperty("line.separator"));
    		pvLog.append(">: <exit or quit>" + System.getProperty("line.separator"));
    		pvLog.append("This command closes the console, no work will be saved." + System.getProperty("line.separator"));
    		pvLog.append(System.getProperty("line.separator"));
    		pvLog.append(">: read batch <File>" + System.getProperty("line.separator"));
    		pvLog.append("This command opens the specified file and attempts to execute the commands stored therein." + System.getProperty("line.separator"));
    		pvLog.append(System.getProperty("line.separator"));
    		pvLog.append(">: hide <input text file path> <output text file path> <rule file path>" + System.getProperty("line.separator"));
    		pvLog.append("This command reads the input file and outputs a file which seems like something else but contains the input text file data.  The transformation is governed by the rule file." + System.getProperty("line.separator"));
    		pvLog.append(">: unhide <input text file path> <output text file path> <rule file path>" + System.getProperty("line.separator"));
    		pvLog.append("This command attempts to extract the output file from the input file based upon the rules in the specified rule file." + System.getProperty("line.separator"));
    		pvLog.append(System.getProperty("line.separator"));
    		pvLog.append(">: <AnyOtherCommand> > <File> "+ System.getProperty("line.separator"));
    		pvLog.append("This command appends the output of whatever <command> precedes it into the specified <file>. "+ System.getProperty("line.separator"));
    	}
    	if(commandString.contains("example")){
    		pvLog.append(System.getProperty("line.separator"));
    		pvLog.append("To get started, type: " + System.getProperty("line.separator"));
    		pvLog.append(">: example > <test text file path>" + System.getProperty("line.separator"));
    		pvLog.append("This command will write this example text into a file, which can then be hidden using the following command:" + System.getProperty("line.separator"));
    		pvLog.append(">: hide <test text file path> <output file path> <rule file path>" + System.getProperty("line.separator"));
    		pvLog.append("This command will use the rules in the rule file to convert the test file text into another text file which preserves the data, but makes it unreadable." + System.getProperty("line.separator"));
    		pvLog.append("Next, the conversion process can be reversed using:" + System.getProperty("line.separator"));
    		pvLog.append(">: unhide <past output file path> <path for revealed file> <rule file path>" + System.getProperty("line.separator"));
    		pvLog.append("This command will faithfully recreate the original data as long as the correct rule file is used." + System.getProperty("line.separator"));
    	}
    	String splits[];
    	if(commandString.contains(" > ")){
    		String[] parse = commandString.split(" > ");
    		try {
    			pvScrivener.puOpenNewFile(parse[prsfIntOne]);
    	    	fileNum = pvScrivener.puGetNumFiles();
    	    	writeToFile = true;
    		} catch (Exception e) {
    			pvLog.append("Failed to open file = " + parse[prsfIntOne] + " cannot write to that file!" + System.getProperty("line.separator"));
    			writeToFile = false;
    		} finally {
    			splits = parse[prsfIntZero].split(" ");
    		}
		} else {
			splits = commandString.split(" ");
		}
    	if(splits[prsfIntZero].length()==prsfIntFour){
	    	if(splits[prsfIntZero].compareTo("quit")==prsfIntZero){
	    		this.dispose();
	    	}
	    	if(splits[prsfIntZero].compareTo("exit")==prsfIntZero){
	    		this.dispose();
	    	}
	    	if(splits[prsfIntZero].compareTo("read")==prsfIntZero){
	    		if(splits[prsfIntOne].compareTo("batch")==prsfIntZero){
		    		try {
		    			FileRead bookish = new FileRead(splits[prsfIntTwo]);
		    			String input = bookish.puReadText();
		    	    	String[] commandParse = input.split(System.getProperty("line.separator"));
		    	    	for(int x = prsfIntZero; x < commandParse.length; x++) {
		    	    		pvBatchCommand(commandParse[x]);
		    	    	}
		    		} catch (Exception e) {
		    			pvLog.append("Failed to open file = " + splits[prsfIntTwo] + " cannot read that file!" + System.getProperty("line.separator"));
		    		}
	    		}
	    	}
	    	if(splits[prsfIntZero].compareTo("test")==prsfIntZero){
	    		//test A
	    		String inputFile = "/home/user/git/plain_sight/input/test_text";
    			String outputFile = "/home/user/git/plain_sight/output/testA_out";
    			String ruleFile = "/home/user/git/plain_sight/rules/testA";
    			String inputText = "";
    			String ruleText = "";
	    		try {
	    			FileRead scholar = new FileRead(inputFile);
		        	inputText = scholar.puReadText();
		        	ruleText = scholar.puReadText(ruleFile);
		    	} catch (Exception e) {
		    		pvLog.append(e + System.getProperty("line.separator"));
		    		pvLog.append("Failed to open file = " + inputFile + ", or " + ruleFile + " cannot read that file!" + System.getProperty("line.separator"));
		    	}
	    		try {
	    			pvLog.append(pvHide(inputText, ruleText, outputFile));
	    		} catch (Exception e) {
	    			pvLog.append(e + System.getProperty("line.separator"));
	    			pvLog.append("Failed to hide file!");
	    		}
	    		inputFile = "/home/user/git/plain_sight/output/testA_out";
    			outputFile = "/home/user/git/plain_sight/recovered/testA_recovered";
    			inputText = "";
	    		ruleText = "";
		    	try {
		    		FileRead scholar = new FileRead(inputFile);
			       	inputText = scholar.puReadText();
			       	ruleText = scholar.puReadText(ruleFile);
			    } catch (Exception e) {
			    	pvLog.append(e + System.getProperty("line.separator"));
			    	pvLog.append("Failed to open file = " + inputFile + ", or " + ruleFile + " cannot read that file!" + System.getProperty("line.separator"));
			    }
		    	try {
		    		pvLog.append(pvUnhide(inputText, ruleText, outputFile));
		    	} catch (Exception e) {
		    		pvLog.append(e + System.getProperty("line.separator"));
		    		pvLog.append("Failed to hide file!");
		    	}
		    	
		    	//test B
		    	inputFile = "/home/user/git/plain_sight/input/test_text";
    			outputFile = "/home/user/git/plain_sight/output/testB_out";
    			ruleFile = "/home/user/git/plain_sight/rules/testB";
    			inputText = "";
    			ruleText = "";
	    		try {
	    			FileRead scholar = new FileRead(inputFile);
		        	inputText = scholar.puReadText();
		        	ruleText = scholar.puReadText(ruleFile);
		    	} catch (Exception e) {
		    		pvLog.append(e + System.getProperty("line.separator"));
		    		pvLog.append("Failed to open file = " + inputFile + ", or " + ruleFile + " cannot read that file!" + System.getProperty("line.separator"));
		    	}
	    		try {
	    			pvLog.append(pvHide(inputText, ruleText, outputFile));
	    		} catch (Exception e) {
	    			pvLog.append(e + System.getProperty("line.separator"));
	    			pvLog.append("Failed to hide file!");
	    		}
	    		inputFile = "/home/user/git/plain_sight/output/testB_out";
    			outputFile = "/home/user/git/plain_sight/recovered/testB_recovered";
    			inputText = "";
	    		ruleText = "";
		    	try {
		    		FileRead scholar = new FileRead(inputFile);
			       	inputText = scholar.puReadText();
			       	ruleText = scholar.puReadText(ruleFile);
			    } catch (Exception e) {
			    	pvLog.append(e + System.getProperty("line.separator"));
			    	pvLog.append("Failed to open file = " + inputFile + ", or " + ruleFile + " cannot read that file!" + System.getProperty("line.separator"));
			    }
		    	try {
		    		pvLog.append(pvUnhide(inputText, ruleText, outputFile));
		    	} catch (Exception e) {
		    		pvLog.append(e + System.getProperty("line.separator"));
		    		pvLog.append("Failed to hide file!");
		    	}
		    		
	    		//testC
	    		inputFile = "/home/user/git/plain_sight/input/test_text";
    			outputFile = "/home/user/git/plain_sight/output/testC_out";
    			ruleFile = "/home/user/git/plain_sight/rules/testC";
    			inputText = "";
    			ruleText = "";
	    		try {
	    			FileRead scholar = new FileRead(inputFile);
		        	inputText = scholar.puReadText();
		        	ruleText = scholar.puReadText(ruleFile);
		    	} catch (Exception e) {
		    		pvLog.append(e + System.getProperty("line.separator"));
		    		pvLog.append("Failed to open file = " + inputFile + ", or " + ruleFile + " cannot read that file!" + System.getProperty("line.separator"));
		    	}
	    		try {
	    			pvLog.append(pvHide(inputText, ruleText, outputFile));
		    	} catch (Exception e) {
		    		pvLog.append(e + System.getProperty("line.separator"));
		    		pvLog.append("Failed to hide file!");
		    	}
	    		inputFile = "/home/user/git/plain_sight/output/testC_out";
    			outputFile = "/home/user/git/plain_sight/recovered/testC_recovered";
    			inputText = "";
	    		ruleText = "";
		    	try {
		    		FileRead scholar = new FileRead(inputFile);
			       	inputText = scholar.puReadText();
			       	ruleText = scholar.puReadText(ruleFile);
			    } catch (Exception e) {
			    	pvLog.append(e + System.getProperty("line.separator"));
			    	pvLog.append("Failed to open file = " + inputFile + ", or " + ruleFile + " cannot read that file!" + System.getProperty("line.separator"));
			    }
		    	try {
		    		pvLog.append(pvUnhide(inputText, ruleText, outputFile));
			    } catch (Exception e) {
			    	pvLog.append(e + System.getProperty("line.separator"));
			    	pvLog.append("Failed to hide file!");
			    }
	    	}
	    	if(splits[prsfIntZero].compareTo("hide")==prsfIntZero){
	    		String inputFile = splits[prsfIntOne];
    			String outputFile = splits[prsfIntTwo];
    			String ruleFile = splits[prsfIntThree];
    			String inputText = "";
    			String ruleText = "";
	    		try {
	    			FileRead scholar = new FileRead(inputFile);
		        	inputText = scholar.puReadText();
		        	ruleText = scholar.puReadText(ruleFile);
		    	} catch (Exception e) {
		    		pvLog.append(e + System.getProperty("line.separator"));
		    		pvLog.append("Failed to open file = " + splits[prsfIntOne] + ", or " + splits[prsfIntThree] + " cannot read that file!" + System.getProperty("line.separator"));
		    	}
	    		try {
	    			pvLog.append(pvHide(inputText, ruleText, outputFile));
	    		} catch (Exception e) {
	    			pvLog.append(e + System.getProperty("line.separator"));
	    			pvLog.append("Failed to hide file!");
	    		}
	    	}
    	}
	    if(splits[prsfIntZero].length()==prsfIntFive){
	    	if(splits[prsfIntZero].compareTo("clear")==prsfIntZero){
	    		pvLog = new StringBuilder();
	    		pastText = new StringBuilder();
	    		pvTextPane.setText("");
	    		pvLog.append(">:" + System.getProperty("line.separator"));
	    	}
    	}
	    if(splits[prsfIntZero].length()==prsfIntSix){
	    	if(splits[prsfIntZero].compareTo("unhide")==prsfIntZero){
	    		String inputFile = splits[prsfIntOne];
    			String outputFile = splits[prsfIntTwo];
    			String ruleFile = splits[prsfIntThree];
    			String inputText = "";
    			String ruleText = "";
	    		try {
	    			FileRead scholar = new FileRead(inputFile);
		        	inputText = scholar.puReadText();
		        	ruleText = scholar.puReadText(ruleFile);
		    	} catch (Exception e) {
		    		pvLog.append(e + System.getProperty("line.separator"));
		    		pvLog.append("Failed to open file = " + splits[prsfIntOne] + ", or " + splits[prsfIntThree] + " cannot read that file!" + System.getProperty("line.separator"));
		    	}
	    		try {
	    			pvLog.append(pvUnhide(inputText, ruleText, outputFile));
	    		} catch (Exception e) {
	    			pvLog.append(e + System.getProperty("line.separator"));
	    			pvLog.append("Failed to unhide file!");
	    		}
	    	}
	    }
    	//write the final output to the terminal
    	pastText.append(pvLog);
		pvTextPane.setText(pastText.toString());
		//write the final output to a file if pipe requested
    	if(writeToFile){
    		try{
    			pvScrivener.puAppendStringToFile(fileNum-prsfIntOne, pvLog.toString());
    			pvScrivener.puCloseFile(fileNum-prsfIntOne);
    			pastText = new StringBuilder();
    			pastText.append(pvTextPane.getText());
    			pastText.append("File written successfully!" + System.getProperty("line.separator"));
    		} catch (Exception e) {
    			pastText = new StringBuilder();
    			pastText.append(pvTextPane.getText());
    			pastText.append("File failed to write!" + System.getProperty("line.separator"));
    		} finally {
    			pvTextPane.setText(pastText.toString());
    		}
    	}
    	//clear the log
    	pvLog = new StringBuilder();
    }
	
	private void pvBatchCommand(String commandString){
    	//accept a String from another function and process the command therein
    	//help, example, quit, exit, and read are disabled
    	boolean writeToFile = false;
    	int batchFileNum = 0;
    	pvLog = new StringBuilder();
    	StringBuilder pastText = new StringBuilder();
    	pastText.append(pvTextPane.getText() + System.getProperty("line.separator") + ">: " + commandString + System.getProperty("line.separator"));
    	pvTextPane.setText(pastText.toString());
    	pvLog.append("Executing...: " + commandString + System.getProperty("line.separator"));
    	//interpret command and print response or error
    	String splits[];
    	if(commandString.contains(" > ")){
    		String[] parse = commandString.split(" > ");
    		try {
    			pvScrivener.puOpenNewFile(parse[prsfIntOne]);
    	    	batchFileNum = pvScrivener.puGetNumFiles();
    	    	writeToFile = true;
    		} catch (Exception e) {
    			pvLog.append("Failed to open file = " + parse[prsfIntOne] + " cannot write to that file!" + System.getProperty("line.separator"));
    			writeToFile = false;
    		} finally {
    			splits = parse[prsfIntZero].split(" ");
    		}
		} else {
			splits = commandString.split(" ");
		}
    	if(splits[prsfIntZero].length()==prsfIntFour){
	    	if(splits[prsfIntZero].compareTo("quit")==prsfIntZero){
	    		this.dispose();
	    	}
	    	if(splits[prsfIntZero].compareTo("exit")==prsfIntZero){
	    		this.dispose();
	    	}
	    	if(splits[prsfIntZero].compareTo("test")==prsfIntZero){
	    		//test A
	    		String inputFile = "/home/user/git/plain_sight/input/test_text";
    			String outputFile = "/home/user/git/plain_sight/output/testA_out";
    			String ruleFile = "/home/user/git/plain_sight/rules/testA";
    			String inputText = "";
    			String ruleText = "";
	    		try {
	    			FileRead scholar = new FileRead(inputFile);
		        	inputText = scholar.puReadText();
		        	ruleText = scholar.puReadText(ruleFile);
		    	} catch (Exception e) {
		    		pvLog.append(e + System.getProperty("line.separator"));
		    		pvLog.append("Failed to open file = " + inputFile + ", or " + ruleFile + " cannot read that file!" + System.getProperty("line.separator"));
		    	}
	    		try {
	    			pvLog.append(pvHide(inputText, ruleText, outputFile));
	    		} catch (Exception e) {
	    			pvLog.append(e + System.getProperty("line.separator"));
	    			pvLog.append("Failed to hide file!");
	    		}
	    		inputFile = "/home/user/git/plain_sight/output/testA_out";
    			outputFile = "/home/user/git/plain_sight/recovered/testA_recovered";
    			inputText = "";
	    		ruleText = "";
		    	try {
		    		FileRead scholar = new FileRead(inputFile);
			       	inputText = scholar.puReadText();
			       	ruleText = scholar.puReadText(ruleFile);
			    } catch (Exception e) {
			    	pvLog.append(e + System.getProperty("line.separator"));
			    	pvLog.append("Failed to open file = " + inputFile + ", or " + ruleFile + " cannot read that file!" + System.getProperty("line.separator"));
			    }
		    	try {
		    		pvLog.append(pvUnhide(inputText, ruleText, outputFile));
		    	} catch (Exception e) {
		    		pvLog.append(e + System.getProperty("line.separator"));
		    		pvLog.append("Failed to hide file!");
		    	}
		    	
		    	//test B
		    	inputFile = "/home/user/git/plain_sight/input/test_text";
    			outputFile = "/home/user/git/plain_sight/output/testB_out";
    			ruleFile = "/home/user/git/plain_sight/rules/testB";
    			inputText = "";
    			ruleText = "";
	    		try {
	    			FileRead scholar = new FileRead(inputFile);
		        	inputText = scholar.puReadText();
		        	ruleText = scholar.puReadText(ruleFile);
		    	} catch (Exception e) {
		    		pvLog.append(e + System.getProperty("line.separator"));
		    		pvLog.append("Failed to open file = " + inputFile + ", or " + ruleFile + " cannot read that file!" + System.getProperty("line.separator"));
		    	}
	    		try {
	    			pvLog.append(pvHide(inputText, ruleText, outputFile));
	    		} catch (Exception e) {
	    			pvLog.append(e + System.getProperty("line.separator"));
	    			pvLog.append("Failed to hide file!");
	    		}
	    		inputFile = "/home/user/git/plain_sight/output/testB_out";
    			outputFile = "/home/user/git/plain_sight/recovered/testB_recovered";
    			inputText = "";
	    		ruleText = "";
		    	try {
		    		FileRead scholar = new FileRead(inputFile);
			       	inputText = scholar.puReadText();
			       	ruleText = scholar.puReadText(ruleFile);
			    } catch (Exception e) {
			    	pvLog.append(e + System.getProperty("line.separator"));
			    	pvLog.append("Failed to open file = " + inputFile + ", or " + ruleFile + " cannot read that file!" + System.getProperty("line.separator"));
			    }
		    	try {
		    		pvLog.append(pvUnhide(inputText, ruleText, outputFile));
		    	} catch (Exception e) {
		    		pvLog.append(e + System.getProperty("line.separator"));
		    		pvLog.append("Failed to hide file!");
		    	}
		    		
	    		//testC
	    		inputFile = "/home/user/git/plain_sight/input/test_text";
    			outputFile = "/home/user/git/plain_sight/output/testC_out";
    			ruleFile = "/home/user/git/plain_sight/rules/testC";
    			inputText = "";
    			ruleText = "";
	    		try {
	    			FileRead scholar = new FileRead(inputFile);
		        	inputText = scholar.puReadText();
		        	ruleText = scholar.puReadText(ruleFile);
		    	} catch (Exception e) {
		    		pvLog.append(e + System.getProperty("line.separator"));
		    		pvLog.append("Failed to open file = " + inputFile + ", or " + ruleFile + " cannot read that file!" + System.getProperty("line.separator"));
		    	}
	    		try {
	    			pvLog.append(pvHide(inputText, ruleText, outputFile));
		    	} catch (Exception e) {
		    		pvLog.append(e + System.getProperty("line.separator"));
		    		pvLog.append("Failed to hide file!");
		    	}
	    		inputFile = "/home/user/git/plain_sight/output/testC_out";
    			outputFile = "/home/user/git/plain_sight/recovered/testC_recovered";
    			inputText = "";
	    		ruleText = "";
		    	try {
		    		FileRead scholar = new FileRead(inputFile);
			       	inputText = scholar.puReadText();
			       	ruleText = scholar.puReadText(ruleFile);
			    } catch (Exception e) {
			    	pvLog.append(e + System.getProperty("line.separator"));
			    	pvLog.append("Failed to open file = " + inputFile + ", or " + ruleFile + " cannot read that file!" + System.getProperty("line.separator"));
			    }
		    	try {
		    		pvLog.append(pvUnhide(inputText, ruleText, outputFile));
			    } catch (Exception e) {
			    	pvLog.append(e + System.getProperty("line.separator"));
			    	pvLog.append("Failed to hide file!");
			    }
	    	}
	    	if(splits[prsfIntZero].compareTo("hide")==prsfIntZero){
	    		String inputFile = splits[prsfIntOne];
    			String outputFile = splits[prsfIntTwo];
    			String ruleFile = splits[prsfIntThree];
    			String inputText = "";
    			String ruleText = "";
	    		try {
	    			FileRead scholar = new FileRead(inputFile);
		        	inputText = scholar.puReadText();
		        	ruleText = scholar.puReadText(ruleFile);
		    	} catch (Exception e) {
		    		pvLog.append(e + System.getProperty("line.separator"));
		    		pvLog.append("Failed to open file = " + splits[prsfIntOne] + ", or " + splits[prsfIntThree] + " cannot read that file!" + System.getProperty("line.separator"));
		    	}
	    		try {
	    			pvLog.append(pvHide(inputText, ruleText, outputFile));
	    		} catch (Exception e) {
	    			pvLog.append(e + System.getProperty("line.separator"));
	    			pvLog.append("Failed to hide file!");
	    		}
	    	}
    	}
	    if(splits[prsfIntZero].length()==prsfIntFive){
	    	if(splits[prsfIntZero].compareTo("clear")==prsfIntZero){
	    		pvLog = new StringBuilder();
	    		pastText = new StringBuilder();
	    		pvTextPane.setText("");
	    		pvLog.append(">:" + System.getProperty("line.separator"));
	    	}
    	}
	    if(splits[prsfIntZero].length()==prsfIntSix){
	    	if(splits[prsfIntZero].compareTo("unhide")==prsfIntZero){
	    		String inputFile = splits[prsfIntOne];
    			String outputFile = splits[prsfIntTwo];
    			String ruleFile = splits[prsfIntThree];
    			String inputText = "";
    			String ruleText = "";
	    		try {
	    			FileRead scholar = new FileRead(inputFile);
		        	inputText = scholar.puReadText();
		        	ruleText = scholar.puReadText(ruleFile);
		    	} catch (Exception e) {
		    		pvLog.append(e + System.getProperty("line.separator"));
		    		pvLog.append("Failed to open file = " + splits[prsfIntOne] + ", or " + splits[prsfIntThree] + " cannot read that file!" + System.getProperty("line.separator"));
		    	}
	    		try {
	    			pvLog.append(pvUnhide(inputText, ruleText, outputFile));
	    		} catch (Exception e) {
	    			pvLog.append(e + System.getProperty("line.separator"));
	    			pvLog.append("Failed to unhide file!");
	    		}
	    	}
	    }
    	//write the final output to the terminal
    	pastText.append(pvLog);
		pvTextPane.setText(pastText.toString());
		//write the final output to a file if pipe requested
    	if(writeToFile){
    		try{
    			pvScrivener.puAppendStringToFile(batchFileNum-prsfIntOne, pvLog.toString());
    			pvScrivener.puCloseFile(batchFileNum-prsfIntOne);
    			pastText = new StringBuilder();
    			pastText.append(pvTextPane.getText());
    			pastText.append("File written successfully!" + System.getProperty("line.separator"));
    		} catch (Exception e) {
    			pastText = new StringBuilder();
    			pastText.append(pvTextPane.getText());
    			pastText.append("File failed to write!" + System.getProperty("line.separator"));
    		} finally {
    			pvTextPane.setText(pastText.toString());
    		}
    	}
    	pvLog = new StringBuilder();
    }

	
    private void pvLogCommand(String command){
    	//adds a (command) to the (pvCommandLog)
    	try {
	    	String[] log = new String[pvCommandLog.length+prsfIntOne];
	    	for (int x = prsfIntZero; x < pvCommandLog.length; x++) {
	    		log[x] = pvCommandLog[x];
	    	}
	    	log[pvCommandLog.length] = command;
	    	pvCommandLog = log;
	    	pvCommandIndex = pvCommandLog.length;
    	} catch (NullPointerException e) {
    		String[] log = new String[1];
    		log[prsfIntZero] = command;
    		pvCommandLog = log;
    		pvCommandIndex = prsfIntZero;
    	}
    }
    
    private String pvHide(String inputText, String ruleText, String outputFile){
    	//(pvHide) generates the obfuscated text and writes it to the outputFile
    	StringBuilder output = new StringBuilder();
    	StringBuilder feedback = new StringBuilder();
    	
    	//parse the rules from the rulefile:
    	try{
    		if(!pvParseRules(ruleText)){
    			System.out.println("(pvHide) failed because rule file parsing failed!");
    			feedback.append("(pvHide) failed because rule file parsing failed!"+System.getProperty("line.separator"));
    		}
    	} catch (Exception ex) {
    		System.out.println(ex);
    		feedback.append(ex+System.getProperty("line.separator"));
            System.out.println("(pvHide) failed because rule file parsing failed!");
            feedback.append("(pvHide) failed because rule file parsing failed!"+System.getProperty("line.separator"));
    	}
    	
    	//create the output file 
    	output.append(pvPrefix);
    	int inputLength = inputText.length();
    	int inputCursor = prsfIntZero;
    	int lineOrderLength = pvLineOrder.length();
		int lineOrderCursor = prsfIntZero;
		int lastLineOrderCursor = prsfIntZero;
		int typeNum = prsfIntZero;
    	while(inputCursor < inputLength){
    		lineOrderCursor = prsfIntZero;
    		lastLineOrderCursor = prsfIntZero;
    		while(lineOrderCursor < lineOrderLength){
    			if(pvTestNumeric(lineOrderCursor,pvLineOrder)){
    				typeNum = Integer.valueOf(pvLineOrder.substring(lineOrderCursor,lineOrderCursor+prsfIntOne));	
    				if (((typeNum)<=pvNumLineTypes)&((typeNum)>prsfIntZero)){
    					output.append(pvLineOrder.substring(lastLineOrderCursor,lineOrderCursor));
    					output.append(pvLinePrefixes[typeNum-prsfIntOne]);
    					for(int x = prsfIntZero; x < pvNumCharsPerLine[typeNum-prsfIntOne]; x++){
    						if (pvDataCharTypes[typeNum-prsfIntOne].compareTo("number")==prsfIntZero){
    							if(inputCursor >= inputLength) {
    								if(inputCursor == inputLength) {
    									output.append("NaN");
    									inputCursor++;
    								} else {
    									int num = Integer.valueOf(Long.toString(Math.round(Math.random()*prsfIntOneHundred)));
        								if (num<prsfIntTen){
        									output.append("00" + num);
        								} else if (num<prsfIntOneHundred) {
        									output.append("0" + num);
        								} else {
        									output.append(num);
        								}
    								}
    								lineOrderCursor = lineOrderLength;
    							} else {
    								char[] datum = new char[prsfIntOne];
    								datum[prsfIntZero] = inputText.charAt(inputCursor);
    								int num = Character.codePointAt(datum, prsfIntZero);
    								if (num<prsfIntTen){
    									output.append("00" + num);
    								} else if (num<prsfIntOneHundred) {
    									output.append("0" + num);
    								} else {
    									output.append(num);
    								}
    								inputCursor++;
    							}
    							if (x < (pvNumCharsPerLine[typeNum-prsfIntOne] - prsfIntOne)){
									output.append(pvLineDelimiters[typeNum-prsfIntOne]);
								}
    						} else if (pvDataCharTypes[typeNum-prsfIntOne].compareTo("text")==prsfIntZero){
    							if(inputCursor >= inputLength) {
    								if(inputCursor == inputLength) {
    									output.append("q5-");
    									inputCursor++;
    								} else {
    									output.append(inputText.charAt(inputCursor-x));
    								}
    								lineOrderCursor = lineOrderLength;
    							} else {
    								output.append(inputText.charAt(inputCursor));
    								inputCursor++;
    							}
    							if (x < (pvNumCharsPerLine[typeNum-prsfIntOne] - prsfIntOne)){
    								output.append(pvLineDelimiters[typeNum-prsfIntOne]);
    							}
    						} else if (pvDataCharTypes[typeNum-prsfIntOne].compareTo("hex")==prsfIntZero){
    							if(inputCursor >= inputLength) {
    								if(inputCursor == inputLength) {
    									output.append("q5");
    									inputCursor++;
    								} else {
    									char[] datum = new char[prsfIntOne];
    	    							datum[prsfIntZero] = inputText.charAt(inputCursor-prsfIntTwo*x);
    	    							int num = Character.codePointAt(datum, prsfIntZero);
    	    							String hex = Integer.toHexString(num);
    	    							if (hex.length()==prsfIntOne){
    	    								hex = "0" + hex;
    	    							}
    	    							output.append(hex);
    								}
    								lineOrderCursor = lineOrderLength;
    							} else {
    								char[] datum = new char[prsfIntOne];
        							datum[prsfIntZero] = inputText.charAt(inputCursor);
        							int num = Character.codePointAt(datum, prsfIntZero);
        							String hex = Integer.toHexString(num);
        							if (hex.length()==prsfIntOne){
        								hex = "0" + hex;
        							}
        							output.append(hex);
        							inputCursor++;
    							}
    							if (x < (pvNumCharsPerLine[typeNum-prsfIntOne] - prsfIntOne)){
    								output.append(pvLineDelimiters[typeNum-prsfIntOne]);
    							}	
    							
    						}  else {
    							System.out.println("(pvHide) Warning: Data type unrecognized for Data Line " + typeNum);
    							feedback.append("(pvHide) Warning: Data type unrecognized for Data Line " + typeNum + System.getProperty("line.separator"));
    						}
    					}
    					lastLineOrderCursor = lineOrderCursor + prsfIntOne;
    				} else {
    					System.out.println("(pvHide) Warning! The Line Order contains a line identifier number that is greater than the number of data lines or less than one!");
						feedback.append("(pvHide) Warning! The Line Order contains a line identifier number that is greater than the number of data lines or less than one!" + System.getProperty("line.separator"));
    				}
    				lineOrderCursor++;
    			} else {
    				lineOrderCursor++;
    			}
    		}
    	}
    	output.append(pvPostfix);
    	
    	//print the output to the new file:
    	try{
    		pvScrivener = new OutputScribe(outputFile, output.toString());
    	} catch (Exception ex) {
            System.out.println(ex);
            feedback.append(ex + System.getProperty("line.separator"));
            System.out.println("(pvHide) failed because there was an error while trying to write to the output file!");
            feedback.append("(pvHide) failed because there was an error while trying to write to the output file!" + System.getProperty("line.separator"));
        }
    	return feedback.toString();
    }
    
    private String pvUnhide(String inputText, String ruleText, String outputFile){
    	//(pvUnhide) generates the restored text and writes it to the outputFile
    	StringBuilder output = new StringBuilder();
    	StringBuilder feedback = new StringBuilder();
    	
    	//parse the rules from the rulefile:
    	try{
    		if(!pvParseRules(ruleText)){
    			System.out.println("(pvUnhide) failed because rule file parsing failed!");
    			feedback.append("(pvUnhide) failed because rule file parsing failed!" + System.getProperty("line.separator"));
    		}
    	} catch (Exception ex) {
    		System.out.println(ex);
    		feedback.append(ex);
            System.out.println("(pvUnhide) failed because rule file parsing failed!");
            feedback.append("(pvUnhide) failed because rule file parsing failed!" + System.getProperty("line.separator"));
    	}
    
    	//create the output file 
    	int inputLength = inputText.length();
    	int inputCursor = prsfIntZero;
    	int lastInputCursor = prsfIntZero;
    	if (inputText.substring(prsfIntZero,pvPrefix.length()).compareTo(pvPrefix)==prsfIntZero){
    		inputCursor = pvPrefix.length();
    	} else {
    		System.out.println("(pvUnhide) Warning! File Prefix Not Found!");
    		feedback.append("(pvUnhide) Warning! File Prefix Not Found!" + System.getProperty("line.separator"));
    	}
    	int lineOrderLength = pvLineOrder.length();
		int lineOrderCursor = prsfIntZero;
		int typeNum = prsfIntZero;
		String dataLine = "";
		while(inputCursor < inputLength){
    		lineOrderCursor = prsfIntZero;
    		lastInputCursor = inputCursor;
    		while(lineOrderCursor < lineOrderLength){
    			if(pvTestNumeric(lineOrderCursor,pvLineOrder)){
    				typeNum = Integer.valueOf(pvLineOrder.substring(lineOrderCursor,lineOrderCursor+prsfIntOne));
    				if (((typeNum)<=pvNumLineTypes)&((typeNum)>prsfIntZero)){
    					if(inputCursor + pvLinePrefixes[typeNum-prsfIntOne].length() < inputLength){
    						inputCursor = inputCursor + pvLinePrefixes[typeNum-prsfIntOne].length();
    						for(int x = prsfIntZero; x < pvNumCharsPerLine[typeNum-prsfIntOne]; x++){
								if (pvDataCharTypes[typeNum-prsfIntOne].compareTo("number")==prsfIntZero){
									if(inputCursor + prsfIntThree < inputLength){
										String num = inputText.substring(inputCursor,inputCursor+prsfIntThree);
										while((inputCursor + prsfIntThree < inputLength)&(!pvTestNumeric(prsfIntZero,num)|!pvTestNumeric(prsfIntOne,num)|!pvTestNumeric(prsfIntTwo,num))){
											if(num.compareTo("NaN")==prsfIntZero){
    											inputCursor = inputLength;
    											lineOrderCursor = lineOrderLength;
    											break;
    										} else {
    											inputCursor++;
    											num = inputText.substring(inputCursor,inputCursor+prsfIntThree);
    										}
										}
										if(inputCursor!=inputLength){
    										char[] data = Character.toChars(Integer.valueOf(num));
    										String datum = Character.toString(data[prsfIntZero]);
        									output.append(datum);
        									inputCursor += prsfIntThree;
        									if(x + prsfIntOne < pvNumCharsPerLine[typeNum-prsfIntOne]) {
        										if(inputCursor + pvLineDelimiters[typeNum-prsfIntOne].length() < inputLength){
        											inputCursor = inputCursor + pvLineDelimiters[typeNum-prsfIntOne].length();
        										}
        									}
										} else {
											break;
										}
									}
								} else if (pvDataCharTypes[typeNum-prsfIntOne].compareTo("text")==prsfIntZero){
									if(inputCursor + prsfIntOne < inputLength){
    									String datum = inputText.substring(inputCursor,inputCursor+prsfIntOne);
    									if(inputCursor + prsfIntThree < inputLength){
        									if(inputText.substring(inputCursor,inputCursor+prsfIntThree).compareTo("q5-")==prsfIntZero){
    											inputCursor = inputLength;
    											lineOrderCursor = lineOrderLength;
    											break;
    										}
    									}
    									output.append(datum);
    									if(x + prsfIntOne < pvNumCharsPerLine[typeNum-prsfIntOne]) {
    										inputCursor = inputCursor + pvLineDelimiters[typeNum-prsfIntOne].length();
    									}
    									inputCursor++;
    								}
								} else if (pvDataCharTypes[typeNum-prsfIntOne].compareTo("hex")==prsfIntZero){
									if(inputCursor + prsfIntTwo < inputLength){
										String num = inputText.substring(inputCursor,inputCursor+prsfIntTwo);
    									while((inputCursor + prsfIntTwo < inputLength)&(!pvTestHex(prsfIntZero,num)|!pvTestHex(prsfIntOne,num))){
    										if(num.compareTo("q5")==prsfIntZero){
    											inputCursor = inputLength;
    											lineOrderCursor = lineOrderLength;
    											break;
    										} else {
    											inputCursor++;
    											num = inputText.substring(inputCursor,inputCursor+prsfIntTwo);
    										}
    									}
    									if(inputCursor!=inputLength&&pvTestHex(prsfIntZero,num)&&pvTestHex(prsfIntOne,num)){
    										int temp = pvGetIntFromHexString(num);
        									char[] data = Character.toChars(temp);
    										String datum = Character.toString(data[prsfIntZero]);
    										output.append(datum);
    										inputCursor += prsfIntTwo;
    										if(x + prsfIntOne < pvNumCharsPerLine[typeNum-prsfIntOne]) {
    											inputCursor = inputCursor + pvLineDelimiters[typeNum-prsfIntOne].length();
    										}
    									} else {
    										break;
    									}
									}
								}  else {
									System.out.println("(pvHide) Warning: Data type unrecognized for Data Line " + typeNum);
									feedback.append("(pvHide) Warning: Data type unrecognized for Data Line " + typeNum + System.getProperty("line.separator"));
								}
							}
    					} else { 
    						inputCursor = inputLength;
    						break;
    					}
    				} else {
    					System.out.println("(pvHide) Warning! The Line Order contains a line identifier number that is greater than the number of data lines or less than one!");
						feedback.append("(pvHide) Warning! The Line Order contains a line identifier number that is greater than the number of data lines or less than one!" + System.getProperty("line.separator"));
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
    	
    	//print the output to the new file:
    	try{
    		pvScrivener = new OutputScribe(outputFile, output.toString());
    	} catch (Exception ex) {
            System.out.println(ex);
            feedback.append(ex + System.getProperty("line.separator"));
            System.out.println("(pvHide) failed because there was an error while trying to write to the output file!");
            feedback.append("(pvHide) failed because there was an error while trying to write to the output file!" + System.getProperty("line.separator"));
        }
    	return feedback.toString();
    }
    
    private boolean pvTestNumeric(int index,String test){
    	//tests whether the character at the supplied index is a number
    	boolean answer = false;
    	if(index<test.length()){
    		if(index>=prsfIntZero){
    			if(test.substring(index,index+prsfIntOne).compareTo("0")==prsfIntZero){
    				answer = true;
    			} else if(test.substring(index,index+prsfIntOne).compareTo("1")==prsfIntZero){
    				answer = true;
    			} else if(test.substring(index,index+prsfIntOne).compareTo("2")==prsfIntZero){
    				answer = true;
    			} else if(test.substring(index,index+prsfIntOne).compareTo("3")==prsfIntZero){
    				answer = true;
    			} else if(test.substring(index,index+prsfIntOne).compareTo("4")==prsfIntZero){
    				answer = true;
    			} else if(test.substring(index,index+prsfIntOne).compareTo("5")==prsfIntZero){
    				answer = true;
    			} else if(test.substring(index,index+prsfIntOne).compareTo("6")==prsfIntZero){
    				answer = true;
    			} else if(test.substring(index,index+prsfIntOne).compareTo("7")==prsfIntZero){
    				answer = true;
    			} else if(test.substring(index,index+prsfIntOne).compareTo("8")==prsfIntZero){
    				answer = true;
    			} else if(test.substring(index,index+prsfIntOne).compareTo("9")==prsfIntZero){
    				answer = true;
    			}
    		}
    	}
    	return answer;
    }
    
    private boolean pvTestHex(int index,String test){
    	//tests whether the character at the supplied index is a hex number
    	boolean answer = false;
    	if(index<test.length()){
    		if(index>=prsfIntZero){
    			if(test.substring(index,index+prsfIntOne).compareTo("0")==prsfIntZero){
    				answer = true;
    			} else if(test.substring(index,index+prsfIntOne).compareTo("1")==prsfIntZero){
    				answer = true;
    			} else if(test.substring(index,index+prsfIntOne).compareTo("2")==prsfIntZero){
    				answer = true;
    			} else if(test.substring(index,index+prsfIntOne).compareTo("3")==prsfIntZero){
    				answer = true;
    			} else if(test.substring(index,index+prsfIntOne).compareTo("4")==prsfIntZero){
    				answer = true;
    			} else if(test.substring(index,index+prsfIntOne).compareTo("5")==prsfIntZero){
    				answer = true;
    			} else if(test.substring(index,index+prsfIntOne).compareTo("6")==prsfIntZero){
    				answer = true;
    			} else if(test.substring(index,index+prsfIntOne).compareTo("7")==prsfIntZero){
    				answer = true;
    			} else if(test.substring(index,index+prsfIntOne).compareTo("8")==prsfIntZero){
    				answer = true;
    			} else if(test.substring(index,index+prsfIntOne).compareTo("9")==prsfIntZero){
    				answer = true;
    			} else if(test.substring(index,index+prsfIntOne).compareTo("a")==prsfIntZero){
    				answer = true;
    			} else if(test.substring(index,index+prsfIntOne).compareTo("b")==prsfIntZero){
    				answer = true;
    			} else if(test.substring(index,index+prsfIntOne).compareTo("c")==prsfIntZero){
    				answer = true;
    			} else if(test.substring(index,index+prsfIntOne).compareTo("d")==prsfIntZero){
    				answer = true;
    			} else if(test.substring(index,index+prsfIntOne).compareTo("e")==prsfIntZero){
    				answer = true;
    			} else if(test.substring(index,index+prsfIntOne).compareTo("f")==prsfIntZero){
    				answer = true;
    			}
    		}
    	}
    	return answer;
    }

    private boolean pvParseRules(String ruleText){
    	//(pvParseRules) parses the rule file into usable data
    	String ruleLine = "";
    	pvLineNum = prsfIntZero;
    	String[] lines = ruleText.split(System.getProperty("line.separator"));
    	boolean foundStartPrefix = false;
    	boolean foundEndPrefix = false;
    	boolean foundNumDataLineTypes = false;
    	boolean foundNextDataLine = false;
    	boolean foundNextStartLinePrefix = false;
    	boolean foundNextEndLinePrefix = false;
    	boolean foundNextNumDataCharsPerLine = false;
    	boolean foundNextDataCharType = false;
    	boolean foundNextStartLineDelimiter = false;
    	boolean foundNextEndLineDelimiter = false;
    	boolean foundStartDataLineOrder = false;
    	boolean foundEndDataLineOrder = false;
    	boolean foundStartPostFix = false;
    	boolean foundEndPostFix = false;
    	String[] splits = new String[prsfIntOne];
    	for(int x = prsfIntZero; x < lines.length; x++){
    		ruleLine = lines[x];
    		splits = ruleLine.split(" ");
    		if (ruleLine.length()>=prsfIntOne){
    			if (ruleLine.substring(prsfIntZero,prsfIntOne).compareTo("#")==prsfIntZero){
    				continue;
    			} else if (ruleLine.substring(prsfIntZero,prsfIntOne).compareTo(" ")==prsfIntZero){
    				continue;
    			}
    		}
    		if (ruleLine.length()>=prsfIntTwo){
    			if(ruleLine.substring(prsfIntZero,prsfIntTwo).compareTo("//")==prsfIntZero){
    				continue;
    			} 
    		}
    		if (ruleLine.compareTo(System.getProperty("line.separator"))==prsfIntZero){
				continue;
			}
    		if (foundStartPrefix) {
    			pvLog.append("Rule File Parsing: Found <FilePrefix> on ruleLine " + (x+prsfIntOne) + System.getProperty("line.separator"));
    			if (foundEndPrefix) {
    				pvLog.append("Rule File Parsing: Found </FilePrefix> on ruleLine " + (x+prsfIntOne) + System.getProperty("line.separator"));
        			if (foundNumDataLineTypes) {
        				pvLog.append("Rule File Parsing: Found NumDataLineTypes on ruleLine " + (x+prsfIntOne) + System.getProperty("line.separator"));
            			if (foundNextDataLine) {
            				pvLog.append("Rule File Parsing: Found DataLine on ruleLine " + (x+prsfIntOne) + System.getProperty("line.separator"));
                			if (foundNextStartLinePrefix) {
                				pvLog.append("Rule File Parsing: Found <LinePrefix> on ruleLine " + (x+prsfIntOne) + System.getProperty("line.separator"));
                    			if (foundNextEndLinePrefix) {
                    				pvLog.append("Rule File Parsing: Found </LinePrefix> on ruleLine " + (x+prsfIntOne) + System.getProperty("line.separator"));
                        			if (foundNextNumDataCharsPerLine) {
                        				pvLog.append("Rule File Parsing: Found NumDataCharsPerLine on ruleLine " + (x+prsfIntOne) + System.getProperty("line.separator"));
                            			if (foundNextDataCharType) {
                            				pvLog.append("Rule File Parsing: Found DataCharType on ruleLine " + (x+prsfIntOne) + System.getProperty("line.separator"));
                                			if (foundNextStartLineDelimiter) {
                                				pvLog.append("Rule File Parsing: Found <LineDelimiter> on ruleLine " + (x+prsfIntOne) + System.getProperty("line.separator"));
                                    			if (foundNextEndLineDelimiter) {
                                    				pvLog.append("Rule File Parsing: Found </LineDelimiter> on ruleLine " + (x+prsfIntOne) + System.getProperty("line.separator"));
                                        			if (foundStartDataLineOrder) {
                                        				pvLog.append("Rule File Parsing: Found <DataLineOrder> on ruleLine " + (x+prsfIntOne) + System.getProperty("line.separator"));
                                            			if (foundEndDataLineOrder) {
                                            				pvLog.append("Rule File Parsing: Found </DataLineOrder> on ruleLine " + (x+prsfIntOne) + System.getProperty("line.separator"));
                                                			if (foundStartPostFix) {
                                                				pvLog.append("Rule File Parsing: Found <FilePostfix> on ruleLine " + (x+prsfIntOne) + System.getProperty("line.separator"));
                                                    			if (foundEndPostFix) {
    																break; //all done, skip remaining lines
    															} else {
    																//haven't found the end of the postfix (</FilePostfix>)
    																for(int y = prsfIntFourteen; y <= ruleLine.length(); y++) {
    																	if(ruleLine.substring(y-prsfIntFourteen,y).compareTo("</FilePostfix>")==prsfIntZero){
    																		pvPostfix = pvPostfix.concat(ruleLine.substring(prsfIntZero,y-prsfIntFourteen));
    																		foundEndPostFix = true;
    																		return true;
    																	}
    																}
    																if(!foundEndPostFix){
    																	pvPostfix = pvPostfix.concat(ruleLine+System.getProperty("line.separator"));
    																}
    															}
    														} else {
    															//haven't found the start of the postfix <FilePostfix>
    															if (ruleLine.length()>=prsfIntThirteen){ 
    																if (ruleLine.substring(prsfIntZero,prsfIntThirteen).compareTo("<FilePostfix>")==prsfIntZero){
    																	foundStartPostFix = true;
    																	pvPostfix = ruleLine.substring(prsfIntThirteen,ruleLine.length())+System.getProperty("line.separator");
    																	if(pvPostfix.length() >= prsfIntFourteen){
    																		for(int y = prsfIntFourteen; y <= ruleLine.length(); y++) {
    																			if(ruleLine.substring(y-prsfIntFourteen,y).compareTo("</FilePostfix>")==prsfIntZero){
    																				pvPostfix = ruleLine.substring(prsfIntThirteen,y-prsfIntFourteen);
    																				foundEndPostFix = true;
    																				return true;
    																			}
    																		}
    																		
    																	}
    																}
    															}
    														}
    													} else {
    														//haven't found the end of the data line order </DataLineOrder>
    														for(int y = prsfIntSixteen; y <= ruleLine.length(); y++) {
																if(ruleLine.substring(y-prsfIntSixteen,y).compareTo("</DataLineOrder>")==prsfIntZero){
																	pvLineOrder = pvLineOrder.concat(ruleLine.substring(prsfIntZero,y-prsfIntSixteen));
																	foundEndDataLineOrder = true;
																	break;
																}
															}
															if(!foundEndDataLineOrder){
																pvLineOrder = pvLineOrder.concat(ruleLine+System.getProperty("line.separator"));
															}
    													}
    												} else {
    													//haven't found the start of the data line order <DataLineOrder>
    													if (ruleLine.length()>=prsfIntFifteen){ 
															if (ruleLine.substring(prsfIntZero,prsfIntFifteen).compareTo("<DataLineOrder>")==prsfIntZero){
																foundStartDataLineOrder = true;
																pvLineOrder = ruleLine.substring(prsfIntFifteen,ruleLine.length())+System.getProperty("line.separator");
																if(pvLineOrder.length() >= prsfIntSixteen){
																	for(int y = prsfIntSixteen; y <= ruleLine.length(); y++) {
																		if(ruleLine.substring(y-prsfIntSixteen,y).compareTo("</DataLineOrder>")==prsfIntZero){
																			pvLineOrder = ruleLine.substring(prsfIntFifteen,y-prsfIntSixteen);
																			foundEndDataLineOrder = true;
																			break;
																		}								
																	}
																	
																}
															}
														}
    												}
    											} else {
    												//haven't found the end of the next line delimiter "</LineDelimiter>"
    												boolean hit = false;
    												for(int y = prsfIntSixteen; y <= ruleLine.length(); y++) {
														if(ruleLine.substring(y-prsfIntSixteen,y).compareTo("</LineDelimiter>")==prsfIntZero){
															pvLineDelimiters[pvLineNum] = pvLineDelimiters[pvLineNum].concat(ruleLine.substring(prsfIntZero,y-prsfIntSixteen));
															hit=true;
															if(pvLineNum+prsfIntOne==pvNumLineTypes) {
																foundNextEndLineDelimiter = true;
																break;
															} else {
																pvLineNum++;
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
														pvLineDelimiters[pvLineNum] = pvLineDelimiters[pvLineNum].concat(ruleLine+System.getProperty("line.separator"));
													}
    											}
    										} else {
    											//haven't found the start of the next line delimiter "<LineDelimiter>"
    											if (ruleLine.length()>=prsfIntFifteen){ 
													if (ruleLine.substring(prsfIntZero,prsfIntFifteen).compareTo("<LineDelimiter>")==prsfIntZero){
														foundNextStartLineDelimiter = true;
														pvLineDelimiters[pvLineNum] = ruleLine.substring(prsfIntFifteen,ruleLine.length())+System.getProperty("line.separator");
														if(pvLineDelimiters[pvLineNum].length() >= prsfIntSixteen){
															for(int y = prsfIntSixteen; y <= ruleLine.length(); y++) {
																if(ruleLine.substring(y-prsfIntSixteen,y).compareTo("</LineDelimiter>")==prsfIntZero){
																	pvLineDelimiters[pvLineNum] = ruleLine.substring(prsfIntFifteen,y-prsfIntSixteen);
																	if(pvLineNum+prsfIntOne==pvNumLineTypes) {
																		foundNextEndLineDelimiter = true;
																		break;
																	} else {
																		pvLineNum++;
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
    									} else {
    										//haven't found the next data char type "DataCharType"
    										if (ruleLine.length()>=prsfIntTwelve){ 
												if (splits[0].compareTo("DataCharType")==prsfIntZero){
													if (splits.length>prsfIntOne){
														if(splits[prsfIntOne].length()>=prsfIntOne){
															foundNextDataCharType = true;
															pvDataCharTypes[pvLineNum] = splits[prsfIntOne];
														} else {
															System.out.println("Warning: No Data Character Type found in rule file after DataCharType declaration statement!");
														}
													} else {
														System.out.println("Warning: No Data Character Type found in rule file after DataCharType declaration!");
													}
												}
											}
    									}
    								} else {
    									//haven't found next number of data chars per line "NumDataCharsPerLine"
    									if (ruleLine.length()>=prsfIntNineteen){ 
											if (splits[prsfIntZero].compareTo("NumDataCharsPerLine")==prsfIntZero){
												if (splits.length>prsfIntOne){
													if(splits[prsfIntOne].length()>=prsfIntOne){
														foundNextNumDataCharsPerLine = true;
														pvNumCharsPerLine[pvLineNum] = Integer.valueOf(splits[prsfIntOne]);
													} else {
														System.out.println("Warning: No Number of Characters Per Line found in rule file after NumDataCharsPerLine declaration statement!");
													}
												} else {
													System.out.println("Warning: No Number of Characters Per Line found in rule file after NumDataCharsPerLine declaration!");
												}
				
											}
										}
    								}
    							} else {
    								//haven't found the end of the next line prefix "</LinePrefix>"
									for(int y = prsfIntThirteen; y <= ruleLine.length(); y++) {
										if(ruleLine.substring(y-prsfIntThirteen,y).compareTo("</LinePrefix>")==prsfIntZero){
											pvLinePrefixes[pvLineNum] = pvLinePrefixes[pvLineNum].concat(ruleLine.substring(prsfIntZero,y-prsfIntThirteen));
											foundNextEndLinePrefix = true;
											break;
										}
									}
									if(!foundNextEndLinePrefix){
										pvLinePrefixes[pvLineNum] = pvLinePrefixes[pvLineNum].concat(ruleLine+System.getProperty("line.separator"));
									}
    							}
    						} else {
    							//haven't found the start of the next line prefix "<LinePrefix>"
    							if (ruleLine.length()>=prsfIntTwelve){ 
									if (ruleLine.substring(prsfIntZero,prsfIntTwelve).compareTo("<LinePrefix>")==prsfIntZero){
										foundNextStartLinePrefix = true;
										pvLinePrefixes[pvLineNum] = ruleLine.substring(prsfIntTwelve,ruleLine.length())+System.getProperty("line.separator");
										if(pvLinePrefixes[pvLineNum].length() >= prsfIntThirteen){
											for(int y = prsfIntThirteen; y <= ruleLine.length(); y++) {
												if(ruleLine.substring(y-prsfIntThirteen,y).compareTo("</LinePrefix>")==prsfIntZero){
													pvLinePrefixes[pvLineNum] = ruleLine.substring(prsfIntTwelve,y-prsfIntThirteen);
													foundNextEndLinePrefix = true;
													break;
												}
											}
											
										}
									}
								}
    						}
    					} else {
    						//haven't found the next data line "DataLine"
    						if (ruleLine.length()>=prsfIntEight){ 
								//System.out.println(ruleLine);
								//System.out.println(splits[prsfIntZero]);
								//System.out.println(splits[prsfIntOne]);
								if (splits[prsfIntZero].compareTo("DataLine")==prsfIntZero){
									if (splits.length>prsfIntOne){
										if(splits[prsfIntOne].length()>=prsfIntOne){
											if(Integer.valueOf(splits[prsfIntOne])==pvLineNum+prsfIntOne){
												foundNextDataLine = true;
											} else {
												System.out.println("Warning: The DataLine identification numbers found in the rule file are out of order!");
											}
										} else {
											System.out.println("Warning: No DataLine Identification number found in rule file after DataLine declaration statement!");
										}
									} else {
										System.out.println("Warning: No DataLine Identification number found in rule file after DataLine declaration!");
									}
	
								}
							}
    					}
    				} else {
    					//haven't found the number of data lines "NumDataLineTypes"
    					if (ruleLine.length()>=prsfIntSixteen){ 
							//System.out.println(ruleLine);
							//System.out.println(splits[prsfIntZero]);
							if (splits[prsfIntZero].compareTo("NumDataLineTypes")==prsfIntZero){
								if (splits.length>prsfIntOne){
									if(splits[prsfIntOne].length()>=prsfIntOne){
										if(Integer.valueOf(splits[prsfIntOne])<prsfIntTen){
											foundNumDataLineTypes = true;
											pvNumLineTypes = Integer.valueOf(splits[prsfIntOne]);
											pvLinePrefixes = new String[pvNumLineTypes];
											pvNumCharsPerLine = new int[pvNumLineTypes];
											pvDataCharTypes = new String[pvNumLineTypes];
											pvLineDelimiters = new String[pvNumLineTypes];
											pvLineNum = prsfIntZero;
										} else {
											System.out.println("Warning: Number of Data Lines should not exceed nine!");
										}
										
									} else {
										System.out.println("Warning: No Number of Data Lines found in rule file after NumDataLineTypes declaration statement!");
									}
								} else {
									System.out.println("Warning: No Number of Data Lines found in rule file after NumDataLineTypes declaration!");
								}

							}
						}
    				}
    			} else {
    				//haven't found the end of the file prefix "</FilePrefix>"    				
    				for(int y = prsfIntThirteen; y <= ruleLine.length(); y++) {
						if(ruleLine.substring(y-prsfIntThirteen,y).compareTo("</FilePrefix>")==prsfIntZero){
							pvPrefix = pvPrefix.concat(ruleLine.substring(prsfIntZero,y-prsfIntThirteen));
							foundEndPrefix = true;
							break;
						}
					}
					if(!foundEndPrefix){
						pvPrefix = pvPrefix.concat(ruleLine+System.getProperty("line.separator"));
					}
    			}
    		} else {
    			//haven't found the start of the file prefix "<FilePrefix>"
    			if (ruleLine.length()>=prsfIntTwelve){ 
					if (ruleLine.substring(prsfIntZero,prsfIntTwelve).compareTo("<FilePrefix>")==prsfIntZero){
						foundStartPrefix = true;
						pvPrefix = ruleLine.substring(prsfIntTwelve,ruleLine.length())+System.getProperty("line.separator");
						if(pvPrefix.length() >= prsfIntThirteen){
							for(int y = prsfIntThirteen; y <= ruleLine.length(); y++) {
								if(ruleLine.substring(y-prsfIntThirteen,y).compareTo("</FilePrefix>")==prsfIntZero){
									pvPrefix = ruleLine.substring(prsfIntTwelve,y-prsfIntThirteen);
									foundEndPrefix = true;
									break;
								}
							}
							
						}
					}
				}
    		}
    	}
    	return false;
    }
    
    private int pvGetIntFromHexString(String hex){
    	//(pvGetIntFromHexString) returns the integer value of a hex string
    	int length = hex.length();
    	int number = prsfIntZero;
    	int product = prsfIntOne;
    	
    	for (int x = prsfIntZero; x < length; x++) {
    		if(pvTestHex(x,hex)){
	    		if(hex.substring(length-x-prsfIntOne,length-x).compareTo("a")==prsfIntZero){
	    			number += prsfIntTen*product;
	    		} else if(hex.substring(length-x-prsfIntOne,length-x).compareTo("b")==prsfIntZero){
	    			number += prsfIntEleven*product;
	    		} else if(hex.substring(length-x-prsfIntOne,length-x).compareTo("c")==prsfIntZero){
	    			number += prsfIntTwelve*product;
	    		} else if(hex.substring(length-x-prsfIntOne,length-x).compareTo("d")==prsfIntZero){
	    			number += prsfIntThirteen*product;
	    		} else if(hex.substring(length-x-prsfIntOne,length-x).compareTo("e")==prsfIntZero){
	    			number += prsfIntFourteen*product;
	    		} else if(hex.substring(length-x-prsfIntOne,length-x).compareTo("f")==prsfIntZero){
	    			number += prsfIntFifteen*product;
	    		} else if(pvTestNumeric(length-x-prsfIntOne,hex)){
	    			number += Integer.valueOf(hex.substring(length-x-prsfIntOne,length-x))*product;
	    		} else {
	    			return prsfIntMinusOne;
	    		}
    		} else {
    			return prsfIntMinusOne;
    		}
    		product = product*prsfIntSixteen;
    	}
    	return number;
    }
}


