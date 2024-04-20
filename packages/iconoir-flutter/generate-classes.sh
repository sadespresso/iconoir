# node class-generator.js <json-defs> <fontName> <className> <outputFile>

mkdir fonts

cp ../../fonts/Iconoir\ Regular.ttf ./fonts/iconoir_regular.ttf
cp ../../fonts/Iconoir\ Solid.ttf ./fonts/iconoir_solid.ttf

node class-generator "../../fonts/Iconoir Regular.json" "Iconoir Regular" "Iconoir" "lib/iconoir_regular.dart"
node class-generator "../../fonts/Iconoir Solid.json" "Iconoir Solid" "IconoirSolid" "lib/iconoir_solid.dart"