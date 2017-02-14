# Android 开发规范

参考链接：

- [Android技术积累：开发规范](http://android.jobbole.com/82099/)
- [Android开发最佳实践](http://blog.csdn.net/asce1885/article/details/43699715)

## 基础

### SDK

应使用独立安装的Andriod SDK ,不建议使用 IDE 自带SDK，避免造成版本不一致。

### IDE

使用Android Studio作为主要IDE进行项目开发，跟随Google的技术发展。

[Android Studio 用户手册](https://developer.android.com/studio/intro/index.html#project-structure)

<img src="http://rule.ciyuer.com/images/android-studio.jpg" width="200"/>

### 工程结构

```
geobeans-app 
├─ library-foobar  
├─ app  
│  ├─ libs  
│  ├─ src  
│  │  ├─ androidTest  
│  │  │  └─ java  
│  │  │     └─ cn/geobeans/app/project  
│  │  └─ main  
│  │     ├─ java  
│  │     │  └─ cn/geobeans/app/project  
│  │     ├─ res  
│  │     └─ AndroidManifest.xml  
│  ├─ build.gradle  
│  └─ proguard-rules.pro  
├─ build.gradle  
└─ settings.gradle 
```

### Gradle

始终使用Gradle 进行项目构建，使用Gradle可以很简单的实现：

1. 将你的app编译成不同的版本；
1. 实现简单的类似脚本的任务；
1. 管理和下载第三方依赖项；
1. 自定义密钥库；

Google也在积极的开发Android的Gradle插件，以此作为新的标准编译系统。

- 一般结构：参见[Google的安卓Gradle指南](http://tools.android.com/tech-docs/new-build-system/user-guide)。
- 小任务：在Gradle中，我们使用tasks而不是脚本（shell，Python，Perl等使用脚本），详细的内容可参见[Gradle文档](http://gradle.org/docs/current/userguide/userguide_single.html#N10CBF)。

### 框架

- 网络请求：[OkHttp](http://square.github.io/okhttp/)  
  > HTTP is the way modern applications network. It’s how we exchange data & media. Doing HTTP efficiently makes your stuff load faster and saves bandwidth.  
  > 支持文件上传下载，非常高效，支持SPDY、连接池、GZIP和 HTTP 缓存。默认情况下，OKHttp会自动处理常见的网络问题，像二次连接、SSL的握手问题。

- JSON封装与解析：[fastjson-android](https://github.com/alibaba/fastjson) 
  > Alibaba 优秀开源框架

- 图片框架：[Glide](https://github.com/bumptech/glide)
  > Glide is a fast and efficient open source media management and image loading framework for Android that wraps media decoding, memory and disk caching, and resource pooling into a simple and easy to use interface.  
  > 支持GIF  
  > 谷歌员工出品，Google推荐的图片加载库，专注于流畅的滚动  
  > 加载速度极快  
  > 框架体积小  四五百KB  

- 注入框架：[Butter Knife](http://jakewharton.github.io/butterknife/)  
  > Field and method binding for Android views  
  > 就是怎么简单

    ```java
    class ExampleActivity extends Activity {
        @BindView(R.id.title) TextView title;
        @BindView(R.id.subtitle) TextView subtitle;
        @BindView(R.id.footer) TextView footer;

        @Override public void onCreate(Bundle savedInstanceState) {
            super.onCreate(savedInstanceState);
            setContentView(R.layout.simple_activity);
            ButterKnife.bind(this);
            // TODO Use fields...
        }

        @OnClick(R.id.submit)
        public void submit(View view) {
            // TODO submit data to server...
        }
    }
    ```

## 命名规范

### 类和接口命名

使用大驼峰规则，用名词或名词词组命名，每个单词的首字母大写。  
以下为几种常用类的命名：

|   类   |   后缀  |   实例  |
|--------|--------|---------|
| activity类 | 命名以Activity为后缀 | 如：LoginActivity |
| fragment类 | 命名以Fragment为后缀 | 如：ShareDialogFragment |
| service类 | 命名以Service为后缀 | 如：DownloadService |
| adapter类 | 命名以Adapter为后缀 | 如：CouponListAdapter |
| 工具类 | 命名以Util为后缀 | 如：EncryptUtil |
| 模型类 | 命名以BO为后缀 | 如：CouponBO |
| 接口实现类 | 命名以Impl为后缀 | 如：ApiImpl |

### 方法命名

使用小驼峰规则，用动词命名，第一个单词的首字母小写，其他单词的首字母大写。  
以下为几种常用方法的命名：

|   类   |   前缀  |   实例  |
|--------|--------|---------|
| 初始化方法 | 命名以init开头 | 例：initView |
| 按钮点击方法 | 命名以to开头 | 例：toLogin |
| 设置方法 | 命名以set开头 | 例：setData |
| 具有返回值的获取方法 | 命名以get开头 | 例：getData |
| 通过异步加载数据的方法 | 命名以load开头 | 例：loadData |
| 布尔型的判断方法 | 命名以is或has | 或具有逻辑意义的单词如equals | 例：isEmpty |

### 控件缩写

|   控件  |	缩写  |	控件  |	缩写  |
|--------|---------|---------|---------|
| TextView	| txt| 	EditText	| edt |
| Button	| btn	| ImageButton	| ibtn |
| ImageView	| img	| ListView	| list |
| RadioGroup	| group	| RadioButton| 	rbtn |
| ProgressBar	| progress	| SeekBar	| seek |
| CheckBox	| chk	| Spinner	| spinner |
| TableLayout	| table	| TableRow	| row |
| LinearLayout	| llayout	| RelativeLayout	| rlayout |
| ScrollView	| scroll	| SearchView	| search |
| TabHost	| host	| TabWidget	| widget |


### 变量命名

{范围描述+}意义描述+类型描述的组合，用驼峰式，首字母小写。

```java
private TextView headerTitleTxt; // 标题栏的标题
private Button loginBtn; // 登录按钮
private CouponBO couponBO; // 券实例
```

### 控件id命名

控件缩写_{范围_}意义，范围可选，只在有明确定义的范围内才需要加上。

```xml
<!-- 这是标题栏的标题 -->
<TextView android:id="@+id/txt_header_title"/>
 
<!-- 这是登录按钮 -->
<Button android:id="@+id/btn_login"/>
```

### layout命名

组件类型_{范围_}功能，范围可选，只在有明确定义的范围内才需要加上。  
以下为几种常用的组件类型命名：

- activity_{范围_}功能，为Activity的命名格式
- fragment_{范围_}功能，为Fragment的命名格式
- dialog_{范围_}功能，为Dialog的命名格式
- item_list_{范围_}功能，为ListView的item命名格式
- item_grid_{范围_}功能，为GridView的item命名格式
- header_list_{范围_}功能，为ListView的HeaderView命名格式
- footer_list_{范围_}功能，为ListView的FooterView命名格式

### strings的命名

类型_{范围_}功能，范围可选。
以下为几种常用的命名：

- 页面标题，命名格式为：title_页面
- 按钮文字，命名格式为：btn_按钮事件
- 标签文字，命名格式为：label_标签文字
- 选项卡文字，命名格式为：tab_选项卡文字
- 消息框文字，命名格式为：toast_消息
- 编辑框的提示文字，命名格式为：hint_提示信息
- 图片的描述文字，命名格式为：desc_图片文字
- 对话框的文字，命名格式为：dialog_文字
- menu的item文字，命名格式为：action_文字

###  colors的命名

前缀{_控件}{_范围}{_后缀}，控件、范围、后缀可选，但控件和范围至少要有一个。

- 背景颜色，添加bg前缀
- 文本颜色，添加text前缀
- 分割线颜色，添加div前缀
- 区分状态时，默认状态的颜色，添加normal后缀
- 区分状态时，按下时的颜色，添加pressed后缀
- 区分状态时，选中时的颜色，添加selected后缀
- 区分状态时，不可用时的颜色，添加disable后缀

### drawable的命名

前缀{_控件}{_范围}{_后缀}，控件、范围、后缀可选，但控件和范围至少要有一个。

- 图标类，添加ic前缀
- 背景类，添加bg前缀
- 分隔类，添加div前缀
- 默认类，添加def前缀
- 区分状态时，默认状态，添加normal后缀
- 区分状态时，按下时的状态，添加pressed后缀
- 区分状态时，选中时的状态，添加selected后缀
- 区分状态时，不可用时的状态，添加disable后缀
- 多种状态的，添加selector后缀（一般为ListView的selector或按钮的selector）

### 动画文件命名

动画类型_动画方向。

- fade_in，淡入
- fade_out，淡出
- push_down_in，从下方推入
- push_down_out，从下方推出
- slide_in_from_top，从头部滑动进入
- zoom_enter，变形进入
- shrink_to_middle，中间缩小


## 编写规范

### JAVA 编写规范

java语言部分请直接参考 [Java 开发规范](http://rule.ciyuer.com/#/doc/backend/java.md)

### 枚举类

范围型的常量用枚举类定义，而不要直接用整型或字符，这样可以减少范围值的有效性检查。

推荐

```java

// 用枚举类定义，Good
public enum CouponType {
    // 现金券
    @SerializedName("1")
    CASH,
 
    // 抵用券
    @SerializedName("2")
    DEBIT,
 
    // 折扣券
    @SerializedName("3")
    DISCOUNT
}
```
不推荐

```java
// 用整型定义，Bad
public static final int TYPE_CASH = 1; // 现金券
public static final int TYPE_DEBIT = 2; // 抵扣券
public static final int TYPE_DISCOUNT = 3; // 折扣券
```

### 字符串

应用中的字符串统一在`strings.xml`中定义，然后在代码和布局文件中引用。

### 颜色

颜色值统一在`colors.xml`中定义，然后在代码和布局文件中引用。  
另外，不要在代码和布局文件中引用系统的颜色，除了透明。

`colors.xml`是调色板。在你的colors.xml文件中除了定义颜色名字到RGBA颜色值的映射外，不应该定义其他的东西。  
如：不要使用它来定义不同类型按钮的RGBA颜色值。

错误：
```xml
<resources>  
    <color name="button_foreground">#FFFFFF</color>  
    <color name="button_background">#2A91BD</color>  
    <color name="comment_background_inactive">#5F5F5F</color>  
    <color name="comment_background_active">#939393</color>  
    <color name="comment_foreground">#FFFFFF</color>  
    <color name="comment_foreground_important">#FF9D2F</color>  
    <color name="comment_shadow">#323232</color>
</resources>    
```
这样的使用很容易重复定义相同的RGBA值，这导致如果需要更改一个基本色值时会很麻烦。  
而且上面的这些定义是和上下文相关的，例如“button”，“comment”，这些应该放到button样式文件中，而不是`colors.xml`文件中。

正确做法：
```xml
<resources>  
  
    <!-- grayscale -->  
    <color name="white"     >#FFFFFF</color>  
    <color name="gray_light">#DBDBDB</color>  
    <color name="gray"      >#939393</color>  
    <color name="gray_dark" >#5F5F5F</color>  
    <color name="black"     >#323232</color>  
  
    <!-- basic colors -->  
    <color name="green">#27D34D</color>  
    <color name="blue">#2A91BD</color>  
    <color name="orange">#FF9D2F</color>  
    <color name="red">#FF432F</color>  
  
</resources>  
```

### 单位

文字大小的单位统一用`sp`，元素大小的单位统一用`dp`。  
单位值应该在`dimens.xml`中进行定义，然后在代码和布局文件中引用。

`dimens.xml`文件跟`colors.xml`文件具有相同的用法。  
你应该定义一个典型的间距和字体大小的模版，目的基本上和colors.xml文件一样，好的dimens.xml文件例子如下：
```xml
<resources>  
  
    <!-- font sizes -->  
    <dimen name="font_larger">22sp</dimen>  
    <dimen name="font_large">18sp</dimen>  
    <dimen name="font_normal">15sp</dimen>  
    <dimen name="font_small">12sp</dimen>  
  
    <!-- typical spacing between two views -->  
    <dimen name="spacing_huge">40dp</dimen>  
    <dimen name="spacing_large">24dp</dimen>  
    <dimen name="spacing_normal">14dp</dimen>  
    <dimen name="spacing_small">10dp</dimen>  
    <dimen name="spacing_tiny">4dp</dimen>  
  
    <!-- typical sizes of views -->  
    <dimen name="button_height_tall">60dp</dimen>  
    <dimen name="button_height_normal">40dp</dimen>  
    <dimen name="button_height_short">32dp</dimen>  
  
</resources>  
```

## Proguard配置

在Android工程中ProGuard被用于压缩和混淆打包代码。  
`ProGuard`的使用可以在工程配置文件中设置。  
一般情况下当构建一个`release`版本的apk时，需要配置Gradle使用`ProGuard`。

```gradle 
buildTypes {  
    debug {  
        minifyEnabled false  
    }  
    release {  
        signingConfig signingConfigs.release  
        minifyEnabled true  
        proguardFiles 'proguard-rules.pro'  
    }  
}  
```

为了决定哪些代码需要保留，哪些代码需要丢弃或者混淆，你需要在你的代码中指定一个或者多个入口点。

Android框架使用的默认配置文件是`SDK_HOME/tools/proguard/proguard-android.txt`。  
自定义的工程特有的proguard规则文件定义为`my-project/app/proguard-rules.pro`，将会拼接到默认配置中。

`Proguard`相关的一个常见问题是在应用启动时出现`crash`，错误类型是`ClassNotFoundException`或者`NoSuchFieldException`等，即使编译是成功的，原因不过如下两种：

1. ProGuard把需要用到的类，枚举，方法，变量或者注解等给移除了；
2. ProGuard把相应的类，枚举或者变量名给混淆（重命名）了，但调用者还是使用它原来的名字，例如Java反射的情况。

检查`app/build/outputs/proguard/release/usage.txt`文件看出问题的对象是否被移除了；  
检查`app/build/outputs/proguard/release/mapping.txt`文件看出问题的对象是否被混淆了。

为了防止`ProGuard`把需要的`类或者类成员`移除了，需要在ProGuard配置文件中增加`keep`选项：
```
-keep class cn.geobeans.app.project.MyClass { *; }  
```

为了防止`ProGuard`把需要的`类或者类变量`混淆了，要增加`keepnames`选项：
```perperties
-keepnames class cn.geobeans.app.project.MyClass { *; }  
```

更多例子参见[ProGuard官方例子](http://proguard.sourceforge.net/#manual/examples.html)。


## 最佳实践

### 避免过深的views层级

有时你可能会被诱导在LinearLayout中再增加一层LinearLayout，例如为了完成一组views的排列。这种情况类似如下：
```xml
<LinearLayout  
    android:layout_width="match_parent"  
    android:layout_height="match_parent"  
    android:orientation="vertical"  
    >  
  
    <RelativeLayout  
        ...  
        >  
  
        <LinearLayout  
            ...  
            >  
  
            <LinearLayout  
                ...  
                >  
  
                <LinearLayout  
                    ...  
                    >  
                </LinearLayout>  
  
            </LinearLayout>  
  
        </LinearLayout>  
  
    </RelativeLayout>  
  
</LinearLayout>  
```
即使你没有很明显的在Layout文件中看到这种情况，但可能最终发生在Java代码中将某个view inflate到另外的view中。
这可能会引起一些问题，你可能会遇到**性能问题**，因为处理器需要处理很复杂的UI树层级。另一个更严重的问题是可能会引起`StackOverflowError`。
因此，尽量使你的view具有扁平的层级：学习怎样使用`RelativeLayout`，怎样优化布局和使用`<merge>`标签。


### Gradle 发布

发布release版本时，你需要在app目录下面的build.gradle文件中定义signingConfigs字段，下面这个配置会出现在版本控制系统中。

这是你应该避免的：
```gradle
signingConfigs {  
    release {  
        storeFile file("myapp.keystore")  
        storePassword "password123"  
        keyAlias "thekey"  
        keyPassword "password789"  
    }  
}
```
应该创建一个gradle.properties文件，该文件`不要添加到版本控制系统`中，并设置如下：
```
KEYSTORE_PASSWORD=password123
KEY_PASSWORD=password789
```
gradle会自动导入这个文件，现在你可以在build.gradle中这样使用：
```gradle
signingConfigs {  
    release {  
        try {  
            storeFile file("myapp.keystore")  
            storePassword KEYSTORE_PASSWORD  
            keyAlias "thekey"  
            keyPassword KEY_PASSWORD  
        }  
        catch (ex) {  
            throw new InvalidUserDataException("You should define KEYSTORE_PASSWORD and KEY_PASSWORD in gradle.properties.")  
        }  
    }  
}  
```

### 依赖

优先选择使用在线的依赖仓库而不是导入jar文件

```gradle
dependencies {    
    compile 'com.squareup.okhttp:okhttp:2.0.+'  
    compile 'com.squareup.okhttp:okhttp-urlconnection:2.0.+'  
}  
```