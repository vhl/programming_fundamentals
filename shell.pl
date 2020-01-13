use strict;
use warnings;
use File::Basename;

# find the imagemagick executable
my $IMG_CMD=`which magick`;

# remove newlines
chomp $IMG_CMD;

# build array of files with .png extension
my @files=`ls image_batch/*.png`;
my $file;

foreach my $file (@files) {
    # remove newlines
    chomp $file;
    # remove the extension
    my $basename=basename($file, ".png");
    #remove newlines
    chomp $basename;
    system("$IMG_CMD $file image_batch/" . $basename . ".jpg\n");
    printf("Successfully converted %s.png to jpg\n", $basename);
  }
