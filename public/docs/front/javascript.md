# Javascript 开发规范

参考链接：

[JavaScript 开发规范](http://www.cnblogs.com/polk6/p/4660195.html)

## 命名规范

介绍变量、函数、常量、构造函数、类的成员等等的命名规范

### 驼峰式命名

驼峰式命名法由小(大)写字母开始，后续每个单词首字母都大写。   
按照第一个字母是否大写，分为：

- `Pascal Case` 大驼峰式命名法：首字母大写。如：StudentInfo、UserInfo、ProductInfo
- `Camel Case` 小驼峰式命名法：首字母小写。如：studentInfo、userInfo、productInfo

### 变量命名

**命名方法**： 小驼峰式命名法。   
**命名规范**： 前缀应当是名词。(函数的名字前缀为动词，以此区分变量和函数)   
**命名建议**： 尽量在变量名字中体现所属类型，如:length、count等表示数字类型；而包含name、title表示为字符串类型。

示例：

```javascript
// 好的命名方式
var maxCount = 10;
var tableTitle = 'LoginTable';
 
// 不好的命名方式
var setCount = 10;
var getTitle = 'LoginTable';
```

### 函数命名

**命名方法**：小驼峰式命名法。   
**命名规范**：前缀应当为动词。   
**命名建议**：可使用常见动词约定


|  动词 | 含义 | 返回值 |
|-------|------|-------|
|  can  |  判断是否可执行某个动作(权限)  |  函数返回一个布尔值。true：可执行；false：不可执行  |
|  has  |  判断是否含有某个值  |  函数返回一个布尔值。true：含有此值；false：不含有此值  |
|  is  |  判断是否为某个值  |  函数返回一个布尔值。true：为某个值；false：不为某个值  |
|  get  |  获取某个值  |  函数返回一个非布尔值  |
|  set  |  设置某个值  |  无返回值、返回是否设置成功或者返回链式对象  |
|  load  |  加载某些数据  |  无返回值或者返回是否加载完成的结果  |

示例：

```javascript
// 是否可阅读
function canRead() {
    return true;
}
 
// 获取名称
function getName() {
    return this.name;
}
```

### 常量

**命名方法**：名称全部大写。  
**命名规范**：使用大写字母和下划线来组合命名，下划线`_`用以分割单词。  

示例：

```javascript
var MAX_COUNT = 10;
var URL = 'http://www.baidu.com';
```

### 构造函数

**介绍**：在JS中，构造函数也属于函数的一种，只不过采用`new` 运算符创建对象。  
**命名方法**：大驼峰式命名法，首字母大写。  
**命名规范**：前缀为名称。  

示例：

```javascript
function Student(name) {
    this.name = name;
}
 
var st = new Student('tom');
```

### 类的成员

类的成员包含：

**公共属性和方法**：跟变量和函数的命名一样。  
**私有属性和方法**：前缀为`_`(下划线)，后面跟公共属性和方法一样的命名方式。

示例：

```javascript
function Student(name) {
    var _name = name; // 私有成员
 
    // 公共方法
    this.getName = function () {
        return _name;
    }
 
    // 公共方式
    this.setName = function (value) {
        _name = value;
    }
}
var st = new Student('tom');
st.setName('jerry');
console.log(st.getName()); // => jerry：输出_name私有变量的值
```

## 注释规范

介绍单行注释、多行注释以及函数注释。  
JS支持两种不同类型的注释：单行注释和多行注释。

### 单行注释

**说明**：单行注释以两个斜线开始，以行尾结束。  
**语法**：`//` 这是单行注释

使用方式：

- 单独一行：`//`(双斜线)与注释文字之间保留一个空格。  
- 在代码后面添加注释：`//`(双斜线)与代码之间保留一个空格，并且`//`(双斜线)与注释文字之间保留一个空格。  
- 注释代码：`//`(双斜线)与代码之间保留一个空格。

示例：

```javascript
// 调用了一个函数；1)单独在一行
setTitle();
 
var maxCount = 10; // 设置最大量；2)在代码后面注释
 
// setName(); // 3)注释代码
```

### 多行注释

**说明**：以`/*`开头，`*/`结尾  
**语法**：/* 注释说明 */

使用方法：

- 若开始(/*)和结束(*/)都在一行，推荐采用单行注释。
- 若至少三行注释时，第一行为/*，最后行为*/，其他行以*开始，并且注释文字与*保留一个空格。

示例：

```javascript
/*
* 代码执行到这里后会调用setTitle()函数
* setTitle()：设置title的值
*/
setTitle();
```

### 函数(方法)注释

**说明**：函数(方法)注释也是多行注释的一种，但是包含了特殊的注释要求，参照 javadoc(百度百科)。  
**语法**：
```javascript
/** 
* 函数说明 
* @关键字 
*/
```
**常用注释关键字**：(只列出一部分，并不是全部)

|   注释名 |	语法  |	含义  |	示例  |
|----------|--------|---------|---------|
| @param	|@param 参数名 {参数类型}  描述信息	| 描述参数的信息	| @param name {String} 传入名称|
| @return	|@return {返回类型} 描述信息	| 描述返回值的信息	| @return {Boolean} true:可执行;false:不可执行|
| @author	|@author 作者信息 [附属信息：如邮箱、日期]	| 描述此函数作者的信息	| @author 张三 2015/07/21 |
| @version	|@version XX.XX.XX	| 描述此函数的版本号	| @version 1.0.3 |
| @example	|@example 示例代码	| 演示函数的使用	| @example setTitle('测试') |

示例：

```javascript
/**
* 合并Grid的行
* @param grid {Ext.Grid.Panel} 需要合并的Grid
* @param cols {Array} 需要合并列的Index(序号)数组；从0开始计数，序号也包含。
* @param isAllSome {Boolean} ：是否2个tr的cols必须完成一样才能进行合并。true：完成一样；false(默认)：不完全一样
* @return void
* @author polk6 2015/07/21 
* @example
* _________________                             _________________
* |  年龄 |  姓名 |                             |  年龄 |  姓名 |
* -----------------      mergeCells(grid,[0])   -----------------
* |  18   |  张三 |              =>             |       |  张三 |
* -----------------                             -  18   ---------
* |  18   |  王五 |                             |       |  王五 |
* -----------------                             -----------------
*/
function mergeCells(grid, cols, isAllSome) {
    // Do Something
}
```

## 框架开发

介绍全局变量冲突、单全局变量以及命名空间

### 全局变量冲突

在团队开发或者引入第三方JS文件时，有时会造成全局对象的名称冲突，比如a.js有个全局函数sendMsg()，b.js也又有个全局函数sendMsg()，引入a.js和b.js文件时，会造成sendMsg()函数冲突。

示例：

<img src="http://images0.cnblogs.com/blog2015/153475/201507/251059041563363.jpg" />

### 单全局变量

所创建的全局对象名称是独一无二的，并将所有的功能代码添加到这个全局对象上。调用自己所写的代码时，以这个全局对象为入口点。

如：

* JQuery的全局对象：$和JQuery
* ExtJS的全局对象： Ext

示例：

<img src="http://images0.cnblogs.com/blog2015/153475/201507/251111158128903.jpg" />

### 命名空间

在项目规模日益壮大时，可采用命名空间方式对JS代码进行规范：即将代码按照功能进行分组，以组的形式附加到单全局对象上。  
以Ext的chart模块为例：

<img src="http://images0.cnblogs.com/blog2015/153475/201507/262129019824868.jpg" />
