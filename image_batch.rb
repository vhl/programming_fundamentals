require 'mini_magick'

FOLDER = "#{ARGV[0]}/".freeze || '*'.freeze
base_names = Dir[FOLDER + '*.png'].map{|f| File.basename(f, '.png') }
base_names.each do |name|
  puts 'File: ' + name
  image = MiniMagick::Image.open(FOLDER + name + '.png')
  puts 'Original format: ' + image.type
  image.format('jpg')
  puts 'New format: ' + image.type
  image.write(FOLDER + name + '.jpg')
end

# Print out the folder contents to make sure there are both png and jpg
puts Dir[FOLDER + '*'].sort

