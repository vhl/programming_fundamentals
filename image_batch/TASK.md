Given a set of png images, convert them to jpg using imagemagick.

## Dry Run:
* List all files in the directory to get their filenames. Save in a list or array.
* Parse the filenames as strings, removing “.jpg”, to get the base filenames.
* Loop through all filenames and print the new filenames to stdout (i.e. “basename.png”)

## Loop of 1:
* List only one file, by name, and save it to a list or array.
* Loop through the one file and run the system command to convert it using imagemagick (using the old and new filenames as args).
* Open the converted image and make sure it looks how you expected.

## Final script:
* List all files in the directory to get their filenames. Save in a list or array.
* Parse the filenames as strings, removing “.jpg”, to get the base filenames.
* Loop through all of the files and run the system command to convert it using imagemagick (using the old and new filenames as args).
* List the directory to confirm the filenames and spot confirm images by opening.

