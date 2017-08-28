pre:client_pre server_pre
client_pre:install_packages
	cd client/pc && superman prd && superman hash && superman cdn
	cd client/h5 && superman prd && superman hash && superman cdn
server_pre: install_packages
	zan babel && zan htmlmin
install_packages:
	yarn --prod=false --registry=http://registry.npm.qima-inc.com --disturl=http://npm.taobao.org/mirrors/node
	cd client/pc && yarn --prod=false --registry=http://registry.npm.qima-inc.com --disturl=http://npm.taobao.org/mirrors/node
	cd client/h5 && yarn --prod=false --registry=http://registry.npm.qima-inc.com --disturl=http://npm.taobao.org/mirrors/node
