# node-server
写h5页面时  会想要在移动端看测试效果  所以简单的搭建服务环境 可以方便自己测试
# 环境需求
安装node express
yarn add express
npm install --save express
# 创建服务端文件 server.js
# 启动服务
node server.js
# 查看页面
浏览器输入localhost:server.js中设置的端口号 比如我的8090
# 热加载
npm install -g nodemon 
启动 nodemon server.js
如果只是h5页面 没必要做热部署 因为页面还是要刷新