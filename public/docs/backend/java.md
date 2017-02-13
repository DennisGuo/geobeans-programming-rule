# JAVA 编程规则

> 作者 : [guohengxi.dennis@gmail.com](mailto:guohengxi.dennis@gmail.com)

> 时间 : 2016/12/22


## 基础

### IDE

- 使用Intellij IDEA 作为IDE

<img src="http://rule.ciyuer.com/images/java_intellij.png" width="300"/>

### 构建工具

- 使用`gradle`进行项目构建

<img src="http://rule.ciyuer.com/images/java_gradle.jpg" width="120"/>

- `gradle` 配置结构

推荐使用的资源仓库：

```
jcenter()
//或者
maven { url "http://maven.aliyun.com/nexus/content/groups/public/" }
```

- `maven.aliyun.com` 的速度比较快

<img src="http://rule.ciyuer.com/images/java_gradle_config.png" width="600"/>

### 项目结构

- 以`.war`打包方式进行部署的项目开发结构

<img src="http://rule.ciyuer.com/images/java_folder_war.png"/>

- 以`.jar`打包方式进行部署的项目开发结构

<img src="http://rule.ciyuer.com/images/java_folder_jar.png"/>

### 分包结构

- 遵循`松耦合`，`高内聚`的原则
- 遵循`就近`最快找到相关资源原则
- 按`模块分包`，在包内进行`类分层`

<img src="http://rule.ciyuer.com/images/java_package.png"/>

### Junit调试

- 所有的`API`接口都应使用JUNIT进行测试
- 所有的`SERVICE`方法都应使用JUNIT进行测试

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

---


> 你的程序代码应该是可读的。  
> 你的程序代码应该体现你良好的品味，可以通过学习其他专家程序员的代码来提高代码质量和品味。


## 源文件

- 源文件以UTF-8编码。
- 版权信息必须在 java 文件的开头

### 内容的组成顺序

Java文件内容组成顺序应该依照以下顺序进行：

1. 版权信息注释（如果有）
1. `package`
1. `import`
1. `class` 类定义 + 注释
1. 常量 + 注释
1. `class fields` 类成员变量定义 + 注释
1. 构造函数，参数多的写在后面
1. `@Override` 重写方法（如果有）
1. 自定义方法
1. `get` 和 `set` 方法
1. 内部类（如果有）

**实例**

```java
/** 
* Copyright ® 2017 Geobeans. 
* All right reserved. 
*/ 
package cn.geobeans.app.sc.fwt.activity.topic;

import android.app.Activity;

/** 
* Demo page for testing activity.
* @author DennisGuo
*/ 
public class DemoActivity extends Activity {

    /**
    * 日志标签
    */
    private static final String TAG = "demo_activity"; 

    /**
    * 显示统计总数
    */
    private int count = 1;

    public DemoActivity(){}
    
    public DemoActivity(int count){
        this.count = count;
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
    }

    /**
    * 初始化视图
    */
    private void initView() {
        //TODO:init view .
    }

    public int getCount(){
        return this.count;
    }

    public void setCount(int count){
        this.count = count;
    }

    /************************/
    /********* 内部类 *******/
    /***********************/

    /**
    * The Demo Entity for DemoActivity.
    */
    class Demo{
        /**
        * 姓名
        */
        private String name;
    }    
}

```




## 命名规范

* 尽量使用完整的英文描述符 
* 采用适用于相关领域的术语 
* 采用大小写混合使名字可读 
* 尽量少用缩写，但如果用了，要明智地使用，且在整个工程中统一 
* 避免使用长的名字（小于 15 个字母是个好主意） 
* 避免使用类似的名字，或者仅仅是大小写不同的名字 
* 避免使用下划线（除静态常量等） 

### Package 的命名

- Package 的名字应该都是由一个小写单词组成。对于全局包，将你的 Internet 域名反转并接上包名。 如： 

```java
package cn.geobeans.app
```
### Class 的命名
 
- Class 的名字必须由大写字母开头而其他字母都小写的单词组成.如：

```java
public class Customer{}
public class SavingsAccount{}
```

### 变量的命名

- 类变量，普通变量 字段采用完整的英文描述，第一个字母小写，任何中间单词的首字大写，并且指出完整含义。如：

```java
// 类变量
private String firstName;
// 普通变量
private String lastName;
```

- Static Final 变量的名字应该都大写，单词之间用下划线分隔，并且指出完整含义。如：

```java
public static final String COLOR_RED = "#FF0000"; // 红色
public static final String COLOR_WHITE = "#FFFFFF"; // 白色
```

### 数组的命名

- 数组应该总是用下面的方式来命名：

```java
private byte[] buffer; // 不要使用 byte buffer[];
```

### 方法的参数命名

- 使用有意义的参数命名，如果可能的话，使用和要赋值的字段一样的名字。 如：

```java
private int size;

public SetCounter(int size){ 
    this.size = size; 
}
```

### 组件/部件命名

-  使用完整的英文描述来说明组件的用途，末端应接上组件类型。 如：

```java
Button okButton;
List customerList;
Menu fileMenu 
```

### 其他

* 获取成员函数 被访问字段名的前面加上前缀 `get`。如： `getFirstName()`, `getLastName()`
* 布尔型的获取成员函数 所有的布尔型获取函数必须用单词 is 做前缀。 如：`isPersistent()`, `isString()`
* 设置成员函数 被访问字段名的前面加上前缀 `set`。如： `setFirstName()`, `setLastName()`
* 普通成员函数 采用完整的英文描述说明成员函数功能，第一个单词尽可能采用一个生动的动词，第一个字母小写。如： `openFile()`, `addAccount()` 
* 循环计数器 通常采用字母 `i`，`j`，`k` 或者 `counter` 都可以接受。

## 代码编写格式

### 代码样式  
代码应该用 unix 的格式，而不是 windows 的（比如：回车变成回车+换行） 
<img src="http://i1.piimg.com/567571/05ffc579888e43d0.png"/>

### 文档化 
必须用 javadoc 来为类生成文档。不仅因为它是标准，这也是被各种 java 编译器都认可的方法。

### 缩进 
缩进应该是每行4个空格. 不要在源文件中保存Tab字符. 在使用不同的源代码管理工具时Tab字符将因为用户设置的不同而扩展为不同的宽度. 
<img src="http://p1.bqimg.com/567571/0f86b46fc1aa33fd.png"/>

### `{}` 花括号
`{}` 中的语句应该单独作为一行. 例如, 下面的第1种写法是错误的, 第2种写法是正确的: 
```java
// 错误, { 和 } 在同一行 
if (i>0) { i ++; }
// 正确, { 单独作为一行 
if (i>0) { 
    i ++ ;
}
```
- `}` 语句永远单独作为一行
- `}` 语句应该缩进到与其相对应的 `{` 那一行相对齐的位置

### `()` 括号

不要在语句中使用无意义的括号. 括号只应该为达到某种目的而出现在源代码中。
下面的例子说明错误和正确的用法: 
```java
if ((I) = 42)  // 错误 - 括号毫无意义 
if ((I == 42) or (J == 42)) // 正确 - 的确需要括号 
```

## Javadoc 文档注释

> 一个很好的可遵循的有关注释的经验法则是：问问你自己，你如果从未见过这段代码，要在合理的时间内有效地明白这段代码，你需要哪些信息。

* 注释应该增加代码的清晰度 
* 保持注释的简洁 
* 在写代码之前写注释 
* 注释出为什么做了一些事，而不仅仅是做了什么 

### 注释那些部分

- 类 ：类的目的、即类所完成的功能，注释出采用的变量。 
- 接口 ：设置接口的目的、它应如何被使用以及如何不被使用。 
- 成员函数注释： 对于设置与获取成员函数，在成员变量已有说明的情况下，可以不加注释；普通成员函数要求说明完成什么功能，参数含义是什么返回什么； 
- 普通成员函数内部注释： 控制结构，代码做了些什么以及为什么这样做，处理顺序等。 
- 实参/参数： 参数含义、及其它任何约束或前提条件 
- 字段/属性： 字段描述 
- 局部变量： 无特别意义的情况下不加注释 

## 编程实践

- 构造长String时，应当使用StringBuilder  
    String 对象代替 StringBuilder 对象的话，会花费许多不必要的创建和释放对象的 CPU 时间

- 避免太多的使用 synchronized 关键字   
    避免不必要的使用关键字 synchronized，应该在必要的时候再使用它，这是一个避免死锁的好方法。 必须使用时，也尽量控制范围，最好在块级控制。 

- 避免使用 java.util.Vector 类  
    因为"Unlike the new collection implementations, Vector is synchronized."(其具有同步性)，所以使用java.util.Vector类在性能上会有所减低。 

- 尽量使用接口而不是一个具体的类  
    比方如下需求，给定一个SQL语句，返回一个对象的列表，实现中用java.util.ArrayList实现，于是定义方法为： 
    ```java
    public ArrayList getObjectItems(String sql) 
    ```
    上面的方法存在一个问题，当getObjectItems内改用LinkedList实现，外部类必须做相应更改。一个更好的方法是定义返回值为java.util.AbstractList更合适： 
    ```java
    public List getObjectItems(String sql) 
    ```
    这样即使更改实现，外部类也不必做相应更改。 

- 避免使用序号来调用数据库中间层组件返回的结果集  
    如： 
    ```java
    for(int i=1; i<=dt.getRowCount(); i++){ 
        String field1 = dt.getField(i, 0).toString(); 
        String field2 = dt.getField(i, 1).toString(); 
    } 
    ```
    而应用字段名来存取结果集： 
    ```java
    for(int i=1; i<=dt.getRowCount(); i++){ 
        String field1 = dt.getField(i, "field1").toString();
        String field2 = dt.getField(i, "field2").toString();
    } 
    ```
    这样在数据库设计更改或查询的SQL语句发生变化时，不会影响到程序的执行。 