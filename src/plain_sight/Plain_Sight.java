/* MIT License

Copyright (c) 2018 Jonathan Wayne Hart

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
import javax.swing.JFrame;
import javax.swing.JScrollPane;
import javax.swing.JTextField;
import javax.swing.JTextPane;
import javax.swing.JButton;
import javax.swing.SwingUtilities;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.Invocable;
import java.io.FileReader;
import java.io.File;
import java.io.IOException;

import jdk.nashorn.api.scripting.NashornScriptEngineFactory;

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

	private class prTerminalKeyListener implements KeyListener {
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
		public void keyTyped(KeyEvent e){
			if(e.getKeyChar() == KeyEvent.VK_ENTER) {
				//check for and execute commands
				pvEnterCommand();
			}
		}
	}
	private static final int prsfIntMinusOne = -1;
	private static final int prsfIntZero = 0;
	private static final int prsfIntOne = 1;
	private static final int prsfIntTwo = 2;
	private static final int prsfIntThree = 3;
	private static final int prsfIntFour = 4;
	private static final int prsfIntFive = 5;
	private static final int prsfIntSix = 6;
	private static final int prsfIntEight = 8;
	private static final int prsfIntNine = 9;
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
	private static final int prsfIntTwentyThree = 23;
	private static final int prsfIntTwentySeven = 27;
	private static final int prsfIntTwentyEight = 28;
	private static final int prsfIntThirty = 30;
	private static final int prsfIntThirtyOne = 31;
	private static final int prsfIntThirtyEight = 38;
	private static final int prsfIntForty = 40;
	private static final int prsfIntFiftyNine = 59;
	private static final int prsfIntSixty = 60;
	private static final int prsfIntNinetyNine = 99;
	private static final int prsfIntOneHundred = 100;
	private static final int prsfIntOneTwentySix = 126;
	private static final int prsfIntOneFifty = 150;
	private static final int prsfIntOneSixtySeven = 167;
	private static final int prsfIntOneSixtyNine = 169;
	private static final int prsfIntTwoFiftyFive = 255;
	private static final int prsfIntTwoFiftySix = 256;
	private static final int prsfIntThreeThirtyEight = 338;
	private static final int prsfIntThreeThirtySix = 336;
	private static final int prsfIntFourHundred = 400;
	private static final int prsfIntEightHundred = 800;
	private static final int prsfIntOneThousand = 1000;
	private static final int prsfIntThirteenFourtyFour = 1344;
	private static final int prsfIntFourteenHundred = 1400;
	private static final int prsfIntNineThousandNinetyNine = 9999;
	private static final double prsfDoubleZero = 0.0;
	private static final double prsfDoubleTwoFiftyFive = 255.0;
	private static final double prsfDoubleAlmostTwo = 1.99;
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
	private int[] pvNumDigits = new int[prsfIntOne];
	private int[] pvStartTime = new int[prsfIntOne];
	private int[] pvStartYear = new int[prsfIntOne];
	private int[] pvStartMonth = new int[prsfIntOne];
	private int[] pvStartDay = new int[prsfIntOne];
	private int[] pvStartHour = new int[prsfIntOne];
	private ScriptEngine pvEngine;
	private Invocable pvInvocable;

	public static void main(String[] args) {
		SwingUtilities.invokeLater(new Runnable() {
			public void run() {
				prsShowGUI();
			}
		});
	}

	private static void prsShowGUI() {
		//Create and set up the window.
		final Plain_Sight frame = new Plain_Sight();
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		frame.pack();
		frame.setVisible(true);
	}

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
		pvTextPane.setCaretPosition(prsfIntZero);
		pvTextField.addKeyListener(new prTerminalKeyListener());
		NashornScriptEngineFactory factory = new NashornScriptEngineFactory();
		pvEngine = factory.getScriptEngine(new String[] {});
		pvInvocable = (Invocable) pvEngine;
		try{
			pvEngine.eval(new FileReader("src/plain_sight/plain_sight_functions.js"));
		} catch(Exception err) {
			System.out.println("JavaScript Error "+err);
			try {
				System.out.println(new File("src/plain_sight/plain_sight.js").getCanonicalPath());
			} catch (Exception e) {

			}
		}
	}

	private String pvEncrypt(String input,String pass, String outputFile){
		String output = "";
		try{
			output = pvInvocable.invokeFunction("plainSightEncrypt",new Object[] {input,pass}).toString();
		} catch (Exception e){
			output =  e.toString();
		}
		try{
			pvScrivener = new OutputScribe(outputFile, output.toString());
		} catch (Exception ex) {
			System.out.println(ex);
			output+=ex + System.getProperty("line.separator");
			System.out.println("(pvEncrypt) failed because there was an error while trying to write to the output file!");
			output+="(pvEncrypt) failed because there was an error while trying to write to the output file!" + System.getProperty("line.separator");
		}
		return output;
	}

	private String pvDecrypt(String input,String pass, String outputFile){
		String output = "";
		try{
			output = pvInvocable.invokeFunction("plainSightDecrypt",new Object[] {input,pass}).toString();
		} catch (Exception e){
			output = e.toString();
		}
		try{
			pvScrivener = new OutputScribe(outputFile, output.toString());
		} catch (Exception ex) {
			System.out.println(ex);
			output+=ex + System.getProperty("line.separator");
			System.out.println("(pvDecrypt) failed because there was an error while trying to write to the output file!");
			output+="(pvDecrypt) failed because there was an error while trying to write to the output file!" + System.getProperty("line.separator");
		}
		return output;
	}

	private String pvHide(String input,String rules, String outputFile){
		String output = "";
		try{
			output = pvInvocable.invokeFunction("plainSightHide",new Object[] {input,rules}).toString();
		} catch (Exception e){
			output = e.toString();
		}
		try{
			pvScrivener = new OutputScribe(outputFile, output.toString());
		} catch (Exception ex) {
			System.out.println(ex);
			output+=ex + System.getProperty("line.separator");
			System.out.println("(pvHide) failed because there was an error while trying to write to the output file!");
			output+="(pvHide) failed because there was an error while trying to write to the output file!" + System.getProperty("line.separator");
		}
		return output;
	}

	private String pvUnhide(String input,String rules, String outputFile){
		String output = "";
		try{
			output = pvInvocable.invokeFunction("plainSightUnhide",new Object[] {input,rules}).toString();
		} catch (Exception e){
			output = e.toString();
		}
		try{
			pvScrivener = new OutputScribe(outputFile, output.toString());
		} catch (Exception ex) {
			System.out.println(ex);
			output+=ex + System.getProperty("line.separator");
			System.out.println("(pvUnhide) failed because there was an error while trying to write to the output file!");
			output+="(pvUnhide) failed because there was an error while trying to write to the output file!" + System.getProperty("line.separator");
		}
		return output;
	}

	private String pvEncryptHide(String input,String rules,String pass, String outputFile){
		String output = "";
		try{
			output = pvInvocable.invokeFunction("plainSightEncryptHide",new Object[] {input,rules,pass}).toString();
		} catch (Exception e){
			output = e.toString();
		}
		try{
			pvScrivener = new OutputScribe(outputFile, output.toString());
		} catch (Exception ex) {
			System.out.println(ex);
			output+=ex + System.getProperty("line.separator");
			System.out.println("(pvEncryptHide) failed because there was an error while trying to write to the output file!");
			output+="(pvEncryptHide) failed because there was an error while trying to write to the output file!" + System.getProperty("line.separator");
		}
		return output;
	}

	private String pvDecryptUnhide(String input,String rules,String pass, String outputFile){
		String output = "";
		try{
			output = pvInvocable.invokeFunction("plainSightDecryptUnhide",new Object[] {input,rules,pass}).toString();
		} catch (Exception e){
			output = e.toString();
		}
		try{
			pvScrivener = new OutputScribe(outputFile, output.toString());
		} catch (Exception ex) {
			System.out.println(ex);
			output+=ex + System.getProperty("line.separator");
			System.out.println("(pvDecryptUnhide) failed because there was an error while trying to write to the output file!");
			output+="(pvDecryptUnhide) failed because there was an error while trying to write to the output file!" + System.getProperty("line.separator");
		}
		return output;
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
					pvLog.append("Failed to unhide file!");
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
					pvLog.append("Failed to unhide file!");
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
					pvLog.append("Failed to unhide file!");
				}

				//testD
				inputFile = "/home/user/git/plain_sight/input/test_text";
				outputFile = "/home/user/git/plain_sight/output/testD_out";
				ruleFile = "/home/user/git/plain_sight/rules/testD";
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
				inputFile = "/home/user/git/plain_sight/output/testD_out";
				outputFile = "/home/user/git/plain_sight/recovered/testD_recovered";
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
					pvLog.append("Failed to unhide file!");
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
}
