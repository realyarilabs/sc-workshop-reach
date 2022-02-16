## Install Docker and Reach

### Windows
All steps bellow are listed [here](https://docs.reach.sh/guide/windows/#guide-windows)

Steps:
  * ``Windows logo key + R`` and type ``cmd``
  * Install wsl with ``wsl --install``
  * Check your version with ``wsl.exe -l -v`` (this should be the default one)
  * Upgrade to wsl v2. If previously you had the default run ``wsl --set-version Ubuntu-20.04 2``, otherwise run ``wsl --set-version <version> 2`` with your version instead.
  * (Optional) Make wsl v2 the default for future installations with ``wsl.exe --set-default-version 2``
  * Download Docker and connect to wsl through settings as explained [here](https://docs.docker.com/desktop/windows/wsl/#download)
  * Integrate VSCode with wsl as explained [here](https://docs.docker.com/desktop/windows/wsl/#develop-with-docker-and-wsl-2)
  * Conitnue by following the instructions for Linux

### Linux
Start by installing Docker (except if you already did), here are some guides for common versions:
  * [Debian/Ubuntu](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04)
  * [Manjaro/Arch](https://wiki.archlinux.org/title/docker#Installation)
  * [Fedora](https://fedoramagazine.org/docker-and-fedora-35/)

Proceed by installing reach:
  * Download the executable with ``curl https://docs.reach.sh/reach -o reach ; chmod +x reach``
  * (Optional) Move the reach executable to your executables with ``sudo mv reach /usr/bin``. This allows you to call ``reach`` instead of ``./reach`` in the following commands.
  * Check your version with ``./reach version`` to ensure everything went well. This will trigger some additional docker commands, it's ok.
  * Go to the directory were you will be following the tutorial, here's a suggestion: ``mkdir -p ~/reach/rps; mv reach ~/reach/rps; cd ~/reach/rps``
  * Ask reach to setup a config for you with ``./reach config``. This will decide what network you will be connecting to (between Algorand, Conflux or Ethereum).

## Wallets

### Algorand
[AlgoConnect](https://wallet.myalgo.com)

### Ethereum
[Metamask on Chrome/Brave](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn)
[Metamask on Firefox](https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/)
[Metamask on Edge](https://microsoftedge.microsoft.com/addons/detail/metamask/ejbalbakoplchlghecdalmeeeajnimhm?hl=en-US)

## Testnet faucets

### Algorand
https://bank.testnet.algorand.network/

### Ethereum
[Ropsten](https://faucet.ropsten.be/)
[Rinkeby](https://faucet.rinkeby.io/)
