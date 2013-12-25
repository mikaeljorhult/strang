# Make sure UTF-8 is used.
Encoding.default_external = "utf-8"

# Load Compass extensions.
require 'breakpoint'

# Set this to the root of your project when deployed:
http_path	= "/"
css_dir		= "assets/css"
sass_dir	= "assets/scss"
images_dir	= "assets/img"
javascripts_dir = "assets/js"
cache_dir = "../../.sass-cache"

# You can select your preferred output style here (can be overridden via the command line):
# output_style = :expanded or :nested or :compact or :compressed
output_style = :compressed
environment = :development

# To enable relative paths to assets via compass helper functions. Uncomment:
relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
# line_comments = false