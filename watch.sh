yarn --cwd stone start &
yarn --cwd chico-buarque start &

# Container
cd container
yarn link stone
yarn link chico-buarque
yarn dev