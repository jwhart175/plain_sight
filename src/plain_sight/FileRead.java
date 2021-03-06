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

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Scanner;

public class FileRead extends PRSFNUM {
	// A class to open and write multiple output files
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

		/*
		 * Inherited Variables and Functions:
		 * protected static final double prsfDoubleZero = 0.0;
		 * protected static final double prsfDoubleOne = 1.0;
		 * protected static final double prsfDoubleTwo = 2.0;
		 * protected static final double prsfDoubleLN2 = 0.69314718;
		 * protected static final double prsfDoubleSQRT2 = 1.414213562;
		 * protected static final double prsfDoubleMinusOne = -1.0;
		 * protected static final double prsfDoubleThousand = 1000.0;
		 * protected static final double prsfDoubleHundred = 100.0;
		 * protected static final double prsfDoubleFiveHundredThousand = 500000;
		 * protected static final double prsfDouble3600 = 3600.0;
		 * protected static final double prsfDoubleThreeHalves = 1.5;
		 * protected static final double prsfDoubleNineTenths = 0.9;
		 * protected static final double prsfDoubleElevenTenths = 1.1;
		 * protected static final int prsfInt8760 = 8760;
		 * protected static final int prsfIntEighty = 80;
		 * protected static final int prsfInt365 = 365;
		 * protected static final int prsfInt24 = 24;
		 * protected static final int prsfInt3600 = 3600;
		 * protected static final int prsfIntZero = 0;
		 * protected static final int prsfIntOne = 1;
		 * protected static final int prsfIntTwo = 2;
		 * protected static final int prsfIntThree = 3
		 * protected static final int prsfIntFour = 4;
		 * protected static final int prsfIntFive = 5;
		 * protected static final int prsfIntSix = 6;
		 */
	private String pvFile="";

	public FileRead() {
		//(FileRead) basic constructor
	}

	public FileRead(String file) {
		//(FileRead) constructor that sets the file
		pvFile = file;
	}
	
	public void puSetFile(String file){
		//(puSetFile) sets the file to be read
		pvFile = file;
	}
	
	public String puReadText(String file) throws IOException {
		//(puReadText) reads the data from a text file into a string.
		pvFile = file;
		StringBuilder text = new StringBuilder();
	    Scanner scanner = new Scanner(new FileInputStream(pvFile), "UTF-8");
	    try {
	    	while (scanner.hasNextLine()){
	        	text.append(scanner.nextLine() + System.getProperty("line.separator"));
	        }
	    } catch (Exception e) {
	    	System.out.println(e);
	    	System.out.println("Input file: " + pvFile + " failed to open for reading");
	    	text.append("Input file: " + pvFile + " failed to open for reading");
	    }
	    finally{
	      scanner.close();
	    }
	    return text.toString();
	}
	
	public String puReadText() throws IOException {
		//(puReadText) reads the data from a text file into a string.
		StringBuilder text = new StringBuilder();
	    Scanner scanner = new Scanner(new FileInputStream(pvFile), "UTF-8");
	    try {
	    	while (scanner.hasNextLine()){
	        	text.append(scanner.nextLine() + System.getProperty("line.separator"));
	        }
	    } catch (Exception e) {
	    	System.out.println(e);
	    	System.out.println("Input file: " + pvFile + " failed to open for reading");
	    	text.append("Input file: " + pvFile + " failed to open for reading");
	    }
	    finally{
	      scanner.close();
	    }
	    return text.toString();
	}
	
	
}
