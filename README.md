# yimo-librarynpm上传自己得ui组件库

### 1.创建项目
    npm install -g @vue/cli
    # or
    yarn global add @vue/cli
    vue create yimo-library(名字自定义)

### 2.创建需要上传得组件存放文件（一般components）
### 3.并且在文件中创建index.js文件（引入所有上传得组件并全局注册和倒出）
### 4.修改package.json文件 
 #### 1).新增发布打包指令
    "vue-cli-service build --target lib --name yimo-library ./src/components/index.js"
    --name 是项目名字   后面跟打包前的所有组件注册文件（可以自定义）

#### 2).name为你npm账号名（username）
 #### 3).main为打包后得入口路径
#### 4).files暴露出所有需要得文件（不太重要）
### 5.登录npm 账号（如果没有 通过cmd/powershall指令 npm adduser   注意镜像源是否是npm的，如果是cnpm的需要先切换回去）
#### 1).npm login (登录)
#### 2).打包指令打包 （npm run build-bundle）
#### 3).npm publish --access public (进行上传，第一次需要邮箱验证)


### 使用：
#### 1.npm install @yimo/yimo-library -s
#### 2.main.js中引入
#### 3.组件中直接使用



