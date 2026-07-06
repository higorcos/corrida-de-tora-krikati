#!/bin/bash
# Converte todos os arquivos .png e .PNG da pasta atual para .webp
shopt -s nocaseglob
for foto in *.png; do
    # Verifica se existem arquivos correspondentes
    [ -e "$foto" ] || continue
    
    # Extrai o nome do arquivo sem a extensão
    nome="${foto%.*}"
    
    echo "Convertendo: $foto ..."
    convert "$foto" "$nome.webp"
done
echo "✅ Conversão concluída com sucesso!"
