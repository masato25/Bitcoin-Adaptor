FROM ubuntu 

RUN apt-get -y update
RUN apt-get -y install software-properties-common
RUN add-apt-repository ppa:bitcoin/bitcoin
RUN apt-get update
RUN apt-get -y install git zsh curl apt-utils gcc make unzip wget
RUN apt-get -y install bitcoind
WORKDIR /root
RUN mkdir .bitcoin
RUN mkdir /data
ADD ./data_backup/. /data
COPY ./startbtc.sh /data
RUN ln -s /data/node-pool/bitcoin.conf .bitcoin
RUN ln -s /data/node-pool/regtest .bitcoin
WORKDIR /data
