# plain_sight

plain_sight is a tool for the creation of simple ciphers and masks to conceal text data. Using customizable rule files a user can transform any text file (including html) into what appears to be some numerical data, a log file, or even a valid html file, or anything else they can come up with. plain_sight has a built-in encryption system called cipherClock, a stream cipher set to a default key size in excess of 256-bit and secure against all except trivial attacks where an intentionally weak key is used. 

Additionally, in the event that a storage device like a usbkey is being used to exchange data, the encrypted then plain_sight-ed files may be stored on the device along with some obviously encrypted files to provide a distraction in the event of interception of the device by parties other than the intended recipient.

Finally, this program is intended to be flexible for the user, allowing them to create their own rule sets for transforming their data.

Running the program:

For non-developers, the fastest and easiest way to use the plain_sight engine is to download plainSight.html, open it in a browser and use the simple dialog there to hide or unhide messages with or without encryption. 

Make sure to use the latest the version!

On a linux machine: install java

The actual install method varies by distro but this can typically be done (with an internet connection) with one of the following commands in a terminal:

sudo apt-get install java //Debian or Ubuntu
sudo yum install java //Fedora

Then clone the git repository with:

git clone https://github.com/jwhart175/plain_sight

Change directories and run the program:

cd plain_sight
java -jar plain_sight.jar

The terminal should then open up for you. Type "help" to get a list of commands, and the first one that I suggest is "set inputDir " because in order to get anything to work, you must first point the program towards the dirctory of the Radioactivity_Sim/input files which contain all of the rules by which the program will be calculating.
