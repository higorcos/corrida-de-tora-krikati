#!/bin/bash
# Converte todos os arquivos .heic e .HEIC da pasta atual para .png

shopt -s nocaseglob
for foto in *.heic; do
    # Verifica se existem arquivos correspondentes
    [ -e "$foto" ] || continue
    
    # Extrai o nome do arquivo sem a extensão
    nome="${foto%.*}"
    
    echo "Convertendo: $foto ..."
    convert "$foto" "$nome.png"
done

echo "✅ Conversão concluída com sucesso!"
