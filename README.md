# plain_sight

project process: rule file parsing is working, but occasionally buggy and the "hide" function is working, but the code for "unhide" is non-operational.

plain_sight is an answer to the question, "How can I make this text file look like something else, but then get it back to the it is supposed to be later?"  When one is working as a spy and must exchange and store sensitive data with/from an asset, which I know precisely nothing about, then one must be very careful to secure sensitive data.  This is a security tool intended to allow for public exchange of encrypted messages without attracting attention or suspicion.  It should be noted that this is not an encryption tool, and is not intended to be used alone for a secure message exchange.  One should encrypt the message first using a tool like gpg to produce ASCII output, and then may use this program one or more times to turn the obviously encrypted message into an innocuous seeming log file or some raw scientific measurements.

Additionally, in the event that a storage device like a usbkey is being used to exchange data, the encrypted then plain_sight-ed files may be stored on the device along with some obviously encrypted files to provide a distraction in the event of interception of the device by parties other than the intended recipient.

Finally, this program is intended to be flexible for the user, allowing them to create there own rule sets for transforming their data.  
