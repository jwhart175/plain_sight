# plain_sight

project process: rule file parsing is working, but occasionally buggy and the "hide" and "unhide" functions have worked on a simple input text with a simple set of rules.  Next steps will be the creation of a series of more complex rule sets to run through the program to locate and eliminate bugs.

plain_sight is an answer to the question, "How can I make this text file look like something else, but then get it back to the it is supposed to be later?"  When one is working as a spy and must exchange and store sensitive data with/from an asset, which I know precisely nothing about, then one must be very careful to secure sensitive data.  This is a security tool intended to allow for public exchange of encrypted messages without attracting attention or suspicion.  It should be noted that this is not an encryption tool, and is not intended to be used alone for a secure message exchange.  One should encrypt the message first using a tool like gpg to produce ASCII output, and then may use this program one or more times to turn the obviously encrypted message into an innocuous seeming log file or some raw scientific measurements.

Additionally, in the event that a storage device like a usbkey is being used to exchange data, the encrypted then plain_sight-ed files may be stored on the device along with some obviously encrypted files to provide a distraction in the event of interception of the device by parties other than the intended recipient.

Finally, this program is intended to be flexible for the user, allowing them to create there own rule sets for transforming their data.  

Running the program:

Make sure to use the latest the version!

On a linux machine: install java

The actual install method varies by distro but this can typically be done (with an internet connection) with one of the following commands in a terminal:

sudo apt-get install java //Debian or Ubuntu
sudo yum install java //Fedora

Then clone the git repository with:

git clone https://github.com/jwhart175/Radioactivity_Sim

Change directories and run the program:

cd plain_sight
java -jar plain_sight.jar

The terminal should then open up for you. Type "help" to get a list of commands, and the first one that I suggest is "set inputDir " because in order to get anything to work, you must first point the program towards the dirctory of the Radioactivity_Sim/input files which contain all of the rules by which the program will be calculating.