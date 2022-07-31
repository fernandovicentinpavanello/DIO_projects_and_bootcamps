#!/bin/bash


echo 'Criando usuários do sistema...'


useradd guest10 -c 'Usuário convidado' -s /bin/bash -m -p $(openssl passwd -crypt Senha123)
passwd guest10 -e


useradd guest11 -c 'Usuário convidado' -s /bin/bash -m -p $(openss>
passwd guest11 -e

useradd guest12 -c 'Usuário convidado' -s /bin/bash -m -p $(openss>
passwd guest12 -e

seradd guest14 -c 'Usuário convidado' -s /bin/bash -m -p $(openss>
passwd guest14 -e


echo '0#########100% → Finalizado!'
