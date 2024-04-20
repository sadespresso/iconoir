mkdir ../fonts
rm ../fonts/*

fantasticon ../icons/regular -o ../fonts -t ttf woff woff2 eot svg -g json -n "Iconoir Regular"

fantasticon ../icons/solid -o ../fonts -t ttf woff woff2 eot svg -g json -n "Iconoir Solid"
