# array for base filenames
base_names = []

# change into image directory
Dir.chdir("image_batch")

# collect all base filenames
Dir["*.png"].map{|file| base_names << file.split('.').first}

# using system call
# 'magick' here is a version 7+ option, previous versions would be just 'convert'
base_names.map {|file| system("magick convert #{file}.png #{file}.jpg")}

# option: using mini_magick
#base_names.each do |file|
  #image = MiniMagick::Image.open("#{file}")
  #image.format "jpg"
  #image.write("#{file.split('.').first}.jpg")
#end

# list all of the files in the image directory
Dir["*"].map{|file| puts file}
