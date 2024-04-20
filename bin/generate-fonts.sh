[ -d ../fonts ] && rm -r ../fonts
mkdir -p ../fonts

cp -R ../icons/ .

oslllo-svg-fixer -s ./icons/regular -d ./icons/regular
oslllo-svg-fixer -s ./icons/solid -d ./icons/solid

fantasticon ./icons/regular -o ../fonts -t ttf svg woff woff2 eot -g json -n "Iconoir Regular"
fantasticon ./icons/solid -o ../fonts -t ttf svg woff woff2 eot -g json -n "Iconoir Solid"

rm -rf ./icons
