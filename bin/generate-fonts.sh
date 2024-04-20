[ ! -d ../fonts ] && rm -r ../fonts && mkdir -p ../fonts

cp -R ../icons/ .

reorient ./icons/regular/*.svg
reorient ./icons/solid/*.svg

fantasticon ./icons/regular -o ../fonts -t ttf woff woff2 eot svg -g json -n "Iconoir Regular"
fantasticon ./icons/solid -o ../fonts -t ttf woff woff2 eot svg -g json -n "Iconoir Solid"

rm -rf ./icons
