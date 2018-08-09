rm fotos.yml

cat <<EOT >> fotos.yml
enable: true
title: Foto's
subtitle:

all:
EOT

ls *.jpg | cat | while read f
do
echo "  - url: \"#\"" >> fotos.yml
echo "    image: \"img/fotos/$f\"" >> fotos.yml
done
