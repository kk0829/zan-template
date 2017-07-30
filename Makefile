pre:
	npm install --registry=http://registry.npm.qima-inc.com --disturl=http://npm.taobao.org/mirrors/node
	zan deploy
client_pre:
	npm install --registry=http://registry.npm.qima-inc.com --disturl=http://npm.taobao.org/mirrors/node
	zan bower && superman build prd && superman hash && superman cdn
server_pre:
	npm install --registry=http://registry.npm.qima-inc.com --disturl=http://npm.taobao.org/mirrors/node
	zan bower && zan babel && zan htmlmin