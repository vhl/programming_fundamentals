import glob, os

# change into the image directory
os.chdir("image_batch")

# process each png file
for file in glob.glob("*.png"):
    os.system('magick convert %s %s.jpg'%(file,os.path.splitext(file)[0]))
    print(f'Successfully converted {file} to jpg')
