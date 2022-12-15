dev:
  ./nvm_exec.sh npm run dev
build:
  ./nvm_exec.sh npm run build
start:
  ./nvm_exec.sh npm run start

install *deps:
  ./nvm_exec.sh npm i {{deps}}

alias i := install