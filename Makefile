pre:client_pre server_pre
client_pre:install_packages
	cd client/www && superman prd && superman hash && superman cdn
	cd client/wap && superman prd && superman hash && superman cdn
server_pre: install_packages
	zan babel && zan htmlmin
install_packages:
	yarn --prod=false --registry=http://registry.npm.qima-inc.com --disturl=http://npm.taobao.org/mirrors/node
	cd client/www && yarn --prod=false --registry=http://registry.npm.qima-inc.com --disturl=http://npm.taobao.org/mirrors/node
	cd client/wap && yarn --prod=false --registry=http://registry.npm.qima-inc.com --disturl=http://npm.taobao.org/mirrors/node
