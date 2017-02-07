# JAVA WEB 编程规则

>
作者 : [guohengxi.dennis@gmail.com](mailto:guohengxi.dennis@gmail.com)

>
时间 : 2016/12/22


## 基础

### IDE

- 使用Intellij IDEA 作为IDE

![Intellij IDEA](http://rule.ciyuer.com/images/java_intellij.png)

### 构建工具

- 使用`gradle`进行项目构建

![gradle](http://rule.ciyuer.com/images/java_gradle.jpg){: width="120"}

- `gradle` 配置结构

推荐使用的资源仓库：



```
jcenter()
//或者
maven { url "http://maven.aliyun.com/nexus/content/groups/public/" }
```

- `maven.aliyun.com` 的速度比较快

![gradle config](http://rule.ciyuer.com/images/java_gradle_config.png){: width="600"}

### 项目结构

- 以`.war`打包方式进行部署的项目开发结构

![war](http://rule.ciyuer.com/images/java_folder_war.png)

- 以`.jar`打包方式进行部署的项目开发结构

![jar](http://rule.ciyuer.com/images/java_folder_jar.png)

## 分包结构

- 遵循`松耦合`，`高内聚`的原则
- 遵循`就近`最快找到相关资源原则
- 按`模块分包`，在包内进行`类分层`

![package](http://rule.ciyuer.com/images/java_package.png)

## 常用框架选型


1. **基础框架：Spring + Hibernate**

    适合简单的数据关系、快速提供接口

1. **基础框架：Spring + Mybatis**

    适合数据库操作性能要求较高，数据关系复杂

1. **数据库连接：alibaba/druid**

    高效、大规模使用、并具有监控功能

1. **网络请求 ：jodd-http**

    简单、直接、高效
    > Jodd HTTP is tiny, raw HTTP client - and yet simple and convenient. It offers a simple way to send requests and read responses. The goal is to make things simple for everyday use; this can make developers happy :)

1. **JSON工具 ：fastjson**

    > Fastjson is a Java library that can be used to convert Java Objects into their JSON representation. It can also be used to convert a JSON string to an equivalent Java object. Fastjson can work with arbitrary Java objects including pre-existing objects that you do not have source-code of.

1. **分布式框架 ：dubbo**

    
    > DUBBO是一个分布式服务框架，致力于提供高性能和透明化的RPC远程服务调用方案，是阿里巴巴SOA服务化治理方案的核心框架，每天为2,000+个服务提供3,000,000,000+次访问量支持，并被广泛应用于阿里巴巴集团的各成员站点。


### 框架链接

- [Spring](https://spring.io)
- [Hibernate](http://hibernate.org/)
- [Alibaba/Druid](https://github.com/alibaba/druid)
- [Alibaba/fastjson](https://github.com/alibaba/fastjson)
- [Alibaba/dubbo](http://dubbo.io/)
- [Jodd-http](http://jodd.org/doc/http.html)

## 语法

## 命名规则

## 类结构
