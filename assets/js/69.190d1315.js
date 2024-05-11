(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{441:function(t,a,s){"use strict";s.r(a);var _=s(1),v=Object(_.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"操作系统概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#操作系统概述"}},[t._v("#")]),t._v(" 操作系统概述")]),t._v(" "),a("h2",{attrs:{id:"_2-操作系统概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-操作系统概述"}},[t._v("#")]),t._v(" 2. 操作系统概述")]),t._v(" "),a("iframe",{attrs:{src:t.$withBase("/markmap/1.html"),width:"100%",height:"400",frameborder:"0",scrolling:"No",leftmargin:"0",topmargin:"0"}}),t._v(" "),a("h3",{attrs:{id:"_2-1-程序设计语言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-程序设计语言"}},[t._v("#")]),t._v(" 2.1. 程序设计语言")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("机器语言")])]),t._v(" "),a("li",[a("p",[t._v("汇编语言")])]),t._v(" "),a("li",[a("p",[t._v("高级语言")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("编译语言")])]),t._v(" "),a("li",[a("p",[t._v("翻译语言")])])])]),t._v(" "),a("li",[a("p",[t._v("4GL语言")])])]),t._v(" "),a("h3",{attrs:{id:"_2-2-进程管理-进程的状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-进程管理-进程的状态"}},[t._v("#")]),t._v(" 2.2. 进程管理-进程的状态")]),t._v(" "),a("div",{staticClass:"center-container"},[a("p",[a("img",{attrs:{src:"https://static.xiaoliutalk.cn/img/202205071059480.svg",alt:""}})])]),a("h3",{attrs:{id:"_2-3-进程管理-死锁问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-进程管理-死锁问题"}},[t._v("#")]),t._v(" 2.3. 进程管理-死锁问题")]),t._v(" "),a("p",[t._v("进程管理是操作系统的核心，但如果设计不当，就会出现死锁的问题。如果一个进程在等待一个可能发生的事，那进程就死锁了。")]),t._v(" "),a("p",[t._v("而如果一个或多个进程产生死锁，就会造成系统死锁。")]),t._v(" "),a("h4",{attrs:{id:"_2-3-1-产生死锁的必要条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-1-产生死锁的必要条件"}},[t._v("#")]),t._v(" 2.3.1. 产生死锁的必要条件")]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("互斥条件")]),t._v("：进程要求对所分配的资源进行排它性控制，即在一段时间内某资源仅为一进程所占用。")]),t._v(" "),a("li",[a("strong",[t._v("请求和保持条件")]),t._v("：当进程因请求资源而阻塞时，对已获得的资源保持不放。")]),t._v(" "),a("li",[a("strong",[t._v("不剥夺条件")]),t._v("：进程已获得的资源在未使用完之前，不能剥夺，只能在使用完时由自己释放。")]),t._v(" "),a("li",[a("strong",[t._v("环路等待条件")]),t._v("：在发生死锁时，必然存在一个进程–资源的环形链。（你等我我等你）")])]),t._v(" "),a("h4",{attrs:{id:"_2-3-2-死锁预防"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-2-死锁预防"}},[t._v("#")]),t._v(" 2.3.2. 死锁预防")]),t._v(" "),a("ol",[a("li",[t._v("资源一次性分配：一次性分配所有资源，这样就不会再有请求了：（破坏请求条件）")]),t._v(" "),a("li",[t._v("只要有一个资源得不到分配，也不给这个进程分配其他的资源：（破坏请保持条件）")]),t._v(" "),a("li",[t._v("可剥夺资源：即当某进程获得了部分资源，但得不到其它资源，则释放已占有的资源（破坏不可剥夺条件）")]),t._v(" "),a("li",[t._v("资源有序分配法：系统给每类资源赋予一个编号，每一个进程按编号递增的顺序请求资源，释放则相反（破坏环路等待条件）")])]),t._v(" "),a("h3",{attrs:{id:"_2-4-进程管理-银行家算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-进程管理-银行家算法"}},[t._v("#")]),t._v(" 2.4. 进程管理-银行家算法")]),t._v(" "),a("p",[t._v("银行家算法：分配资源的原则")]),t._v(" "),a("ul",[a("li",[t._v("当一个进程对资源的最大需求量不超过系统中的资源数时可以接纳该进程。")]),t._v(" "),a("li",[t._v("进程可以分期请求资源，但请求的总数不能超过最大需求量。")]),t._v(" "),a("li",[t._v("当系统现有的资源不能满足进程尚需资源数时，对进程的请求可以推迟分配，但总能使进程在有限的时间里得到资源。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.xiaoliutalk.cn/img/202206291844029.jpg",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"_2-5-进程管理-进程的互斥与同步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-进程管理-进程的互斥与同步"}},[t._v("#")]),t._v(" 2.5. 进程管理-进程的互斥与同步")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.xiaoliutalk.cn/img/202206291840954.jpg",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"_2-6-进程管理-pv操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-进程管理-pv操作"}},[t._v("#")]),t._v(" 2.6. 进程管理-PV操作")]),t._v(" "),a("p",[a("strong",[t._v("临界区")]),t._v("：每个进程中访问临界资源的那段代码称为临界区。")]),t._v(" "),a("p",[a("strong",[t._v("信号量")]),t._v("：是一种特殊的变量。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("互斥信号量")])]),t._v(" "),a("li",[a("p",[t._v("同步信号量")])])]),t._v(" "),a("p",[a("strong",[t._v("PV操作")]),t._v("：解决互斥和同步的问题。")]),t._v(" "),a("p",[t._v("PV操作是分开来看的：")]),t._v(" "),a("p",[a("strong",[t._v("P操作")]),t._v("：使 "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:"MJX-TEX"},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"S"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"="}})],1),a("mjx-mi",{staticClass:"mjx-i",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"S"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"2212"}})],1),a("mjx-mn",{staticClass:"mjx-n",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"1"}})],1)],1)],1),t._v(" ，若 "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:"MJX-TEX"},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"S"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"2A7E"}})],1),a("mjx-mn",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"0"}})],1)],1)],1),t._v(" ，则该进程继续执行，否则该进程排入等待队列。")],1),t._v(" "),a("p",[a("strong",[t._v("V操作")]),t._v("：使 "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:"MJX-TEX"},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"S"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"="}})],1),a("mjx-mi",{staticClass:"mjx-i",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"S"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"+"}})],1),a("mjx-mn",{staticClass:"mjx-n",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"1"}})],1)],1)],1),t._v(" ，若 "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:"MJX-TEX"},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"S"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"2A7D"}})],1),a("mjx-mn",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"0"}})],1)],1)],1),t._v(" ，则唤醒等待队列的一个进程。")],1),t._v(" "),a("h3",{attrs:{id:"_2-7-存储管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-7-存储管理"}},[t._v("#")]),t._v(" 2.7. 存储管理")]),t._v(" "),a("h4",{attrs:{id:"_2-7-1-页式存储"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-7-1-页式存储"}},[t._v("#")]),t._v(" 2.7.1. 页式存储")]),t._v(" "),a("p",[a("strong",[t._v("基本原理")]),t._v("： 将各进程的虚拟空间划分为若干个长度相等的"),a("strong",[t._v("页")]),t._v("， 把内存空间与页相等的大小划分为大小相等的片或页面， 采用请求调页或预调页技术实现内外存的统—管理。\n"),a("strong",[t._v("优点")]),t._v("： 利用率高， 产生内存碎片小， 内存空间分配及管理简单。")]),t._v(" "),a("p",[a("strong",[t._v("缺点")]),t._v("：要有相应的硬件支持， 增加了系统开销； 若请求调页的算法选择不当， 则可能产生”抖动“ 现象。")]),t._v(" "),a("p",[a("strong",[t._v("页表")]),t._v("：分成了页号和页内地址两块。页面大小为："),a("strong",[t._v("4KB")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.xiaoliutalk.cn/img/202207132124590.png",alt:"img"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.xiaoliutalk.cn/img/202207132121329.png",alt:"img"}})]),t._v(" "),a("h4",{attrs:{id:"_2-7-2-页面置换算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-7-2-页面置换算法"}},[t._v("#")]),t._v(" 2.7.2. 页面置换算法")]),t._v(" "),a("p",[t._v("在进程运行的过程中，若其访问的页面不存在内存中，则会产生缺页中断。如果此时内存中没有空闲的页面，操作系统就需要在内存中选择一个页面将其移出，从而可以将需要访问的页面调入内存中。而用来选择淘汰哪一页的算法就叫做页面置换算法。")]),t._v(" "),a("h5",{attrs:{id:"opt-最佳置换算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#opt-最佳置换算法"}},[t._v("#")]),t._v(" OPT(最佳置换算法)")]),t._v(" "),a("p",[t._v("最佳置换算法：每次选择淘汰的页面将是以后"),a("strong",[t._v("永不使用")]),t._v("或者"),a("strong",[t._v("最长时间内不在被访问")]),t._v("的页面。这样可以保证最低的缺页率。")]),t._v(" "),a("p",[t._v("例如：假如操作系统给进程分配了3个内存块，并且该进程接下来会依次访问7，5，2，3，6，2，7，1，6，7，2，3，7，2，7。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.xiaoliutalk.cn/img/202207132137739.jpg",alt:"v2-e4b526193b9505cb4f1fd476181212db_1440w"}})]),t._v(" "),a("p",[t._v("如图所示，在第4步中，需要把3号页面调入内存，此时内存已经满了，所以需要从7，5，2中选择一个页面进行淘汰。按照"),a("strong",[t._v("最佳置换")]),t._v("算法规则，往后寻找，此时2和7会被先后访问，所以把5号页面淘汰，即"),a("strong",[t._v("最长时间内不在被访问")]),t._v("的页面。")]),t._v(" "),a("h5",{attrs:{id:"fifo-先进先出算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fifo-先进先出算法"}},[t._v("#")]),t._v(" FIFO(先进先出算法)")]),t._v(" "),a("p",[t._v("FIFO算法是最简单的页面置换算法。顾名思义，FIFO每次淘汰的页面是"),a("strong",[t._v("最早进入内存")]),t._v("的页面。FIFO的实现方法是把调入内存的页面按先后顺序放入队列中，当需要置换页面时，选择队头的页面即可。")]),t._v(" "),a("p",[t._v("例如：假如操作系统给进程分配了3个内存块，并且该进程接下来会依次访问7，5，2，3，6，2，7，1，6，7，2，3，7，2，7。页面在内存中的表现如下所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.xiaoliutalk.cn/img/202207141023845.jpg",alt:"v2-8e87fd3057c0d4a6b0d53be379880aec_1440w 拷贝"}})]),t._v(" "),a("h5",{attrs:{id:"lru-最近最久未使用算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lru-最近最久未使用算法"}},[t._v("#")]),t._v(" LRU(最近最久未使用算法)")]),t._v(" "),a("p",[t._v("LRU(Least Recently Used),每次淘汰的页面是"),a("strong",[t._v("最近最久未使用的页面")]),t._v("。所以需要去记录该页面上次被访问以来所经历的时间t。当需要淘汰页面时，选择内存中现有页面中t最大的，即最近最久未使用的页面。")]),t._v(" "),a("p",[t._v("如：假如操作系统给进程分配了3个内存块，并且该进程接下来会依次访问7，5，2，3，6，2，7，1，6，7，2，3，7，2，7。页面在内存中的表现如下所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.xiaoliutalk.cn/img/202207141043585.jpg",alt:"v2-8e87fd3057c0d4a6b0d53be379880aec_1440w 拷贝"}})]),t._v(" "),a("h5",{attrs:{id:"lfu-最近最少使用算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lfu-最近最少使用算法"}},[t._v("#")]),t._v(" LFU(最近最少使用算法)")]),t._v(" "),a("p",[t._v('LFU(最近最少使用算法)，它是基于"'),a("strong",[t._v("如果一个数据在最近一段时间内使用次数很少，那么在将来一段时间内被使用的可能性也很小")]),t._v("“的思路。注意LFU和LRU算法的不同之处，LRU的淘汰规则是基于访问时间，而LFU是基于访问次数的。")]),t._v(" "),a("p",[t._v("如：假如操作系统给进程分配了3个内存块，并且该进程接下来会依次访问5，4，5，3，3、2、5、1、4。页面在内存中的表现如下所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.xiaoliutalk.cn/img/202207141049984.jpg",alt:"v2-03bf28285a5d7071659dab8d3fbbf59f_1440w 拷贝"}})]),t._v(" "),a("p",[t._v("如图所示，在第八步中需要把1号页面调入内存，而此时内存已满，需要从5、2、3中选择一个页面进行淘汰。按照LFU规则，2号页面最近一段时间内使用次数为1，它是最小的。所以把2号页面淘汰出去。")]),t._v(" "),a("h4",{attrs:{id:"_2-7-3-文件管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-7-3-文件管理"}},[t._v("#")]),t._v(" 2.7.3. 文件管理")]),t._v(" "),a("h5",{attrs:{id:"树形目录结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#树形目录结构"}},[t._v("#")]),t._v(" 树形目录结构")]),t._v(" "),a("p",[t._v("树形目录结构可以很方便地对文件进行分类，层次结构清晰，也能够更有效地进行文件的管理和保护。")]),t._v(" "),a("p",[a("strong",[t._v("绝对路径")]),t._v("：完整的描述文件位置的路径就是绝对路径。")]),t._v(" "),a("p",[a("strong",[t._v("相对路径")]),t._v("： 所谓相对路径，顾名思义就是自己相对目标的位置，不论将这些文件放到哪里，只要他们的相对关系没变， 就不会出错。")]),t._v(" "),a("h4",{attrs:{id:"_2-7-4-设备管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-7-4-设备管理"}},[t._v("#")]),t._v(" 2.7.4. 设备管理")]),t._v(" "),a("h5",{attrs:{id:"数据传输控制方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据传输控制方式"}},[t._v("#")]),t._v(" 数据传输控制方式")]),t._v(" "),a("p",[t._v("按照 I/O 控制功能的强弱，以及和CPU之间联系方式的不同，可把I/O 设备的数据传输方式分为4种：")]),t._v(" "),a("ul",[a("li",[t._v("程序直接控制方式（ 查询控制方式）")]),t._v(" "),a("li",[t._v("中断控制方式")]),t._v(" "),a("li",[t._v("DMA方式")]),t._v(" "),a("li",[t._v("通道方式")])]),t._v(" "),a("p",[a("strong",[t._v("程序控制方式")]),t._v("：在程序的主动控制下，通过读取状态寄存器了解接口的清况，完成相应的程序操作。为了及时了解接口的状态，需要时间密集的查询操作。CPU 效率低。")]),t._v(" "),a("p",[a("strong",[t._v("中断控制方式")]),t._v("：当接口出现需要程序干预的事件，通过中断通知CPU , CPU 再读取状态寄存器，确定事件的种类，以便执行不同的代码处理。CPU 效率高而且及时。")]),t._v(" "),a("p",[a("strong",[t._v("DMA(Direct Memory Access)控制方式")]),t._v("：CPU与接口的数据传送采用DMA 传送，即传送的具体过程由硬件( DMA控制器）完成，传送速度比通过CPU 快，尤其是在批量传送时效率很高。")])])}),[],!1,null,null,null);a.default=v.exports}}]);