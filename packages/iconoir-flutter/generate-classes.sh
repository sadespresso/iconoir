[ ! -d fonts ] && mkdir -p fonts

cp ../../fonts/Iconoir\ Regular.ttf ./fonts/iconoir_regular.ttf
cp ../../fonts/Iconoir\ Solid.ttf ./fonts/iconoir_solid.ttf

# node class-generator.js <json-defs> <fontName> <packageName> <className> <outputFile>
node class-generator "../../fonts/Iconoir Regular.json" "Iconoir Regular" "iconoir_flutter" "Iconoir" "lib/iconoir_regular.dart"
node class-generator "../../fonts/Iconoir Solid.json" "Iconoir Solid" "iconoir_flutter" "IconoirSolid" "lib/iconoir_solid.dart"