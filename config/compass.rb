# Require any additional compass plugins here.
project_type = :rails
css_dir = '/public/css'
http_stylesheets_path = '/css'
sass_dir = '/app/assets/stylesheets'
images_dir = '/app/assets/images'
http_images_path = '/images'
generated_images_dir = '/app/assets/images'
http_generated_images_path = '/images'
if environment == :production 
  output_style = :compressed
else
  output_style = :nested
  #line_comments = true
  #sass_options = {debug_info: true}
end