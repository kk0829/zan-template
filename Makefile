pre:client_pre server_pre
client_pre:install_packages
	cd client && superman prd && superman hash && superman cdn
server_pre: install_packages
	zan babel && zan htmlmin
install_packages:
	yarn --prod=false --registry=http://registry.npm.qima-inc.com --disturl=http://npm.taobao.org/mirrors/node
	cd client && yarn --prod=false --registry=http://registry.npm.qima-inc.com --disturl=http://npm.taobao.org/mirrors/node
