var e=Object.defineProperty,t=(t,a,i)=>(((t,a,i)=>{a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[a]=i})(t,"symbol"!=typeof a?a+"":a,i),i);export function __vite_legacy_guard(){import("data:text/javascript,")}import{j as a,r as i,R as l,a as d}from"./vendor.fa916dff.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const a of e)if("childList"===a.type)for(const e of a.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const r=new class{constructor(){t(this,"list"),this.list={}}emit(e,t){if(this.list[e].length>=0){let a=this.list[e];for(let e in a)a[e](t)}}on(e,t){this.list[e]?this.list[e].push(t):this.list[e]=[t]}off(e){this.list[e]&&delete this.list[e]}};var n=[{type:"group",detail:"你的种族",groupId:1,list:[{type:"attr",id:8,name:"魔物",detail:"你可能是史莱姆、骷髅、恶魔，并非常规意义上的类人生物，在文明地区会遭受相当程度的歧视，而在魔物的地盘上，喜欢自相残杀的魔物也不会对你表现出善意",value:-25},{type:"attr",id:9,name:"亚人",detail:"你长着犄角、蹄子等非人类特征，在文明地区受到偏见和抵制，你的寿命和健康状况也会因为血脉的冲突而受到损伤",value:-10},{type:"attr",id:10,name:"人类",detail:"你是人类社会的普通一员，年轻，稚嫩，除了青春一无所有，但青春本身就代表着无限可能，不是吗？",value:0},{type:"attr",id:11,name:"长生种",detail:"精灵，至高矮人，半龙，你生来就优于其他种族，强韧的血脉让你在魔法、工匠、剑术之中的一个或多个领域拥有极高的天赋，而且你的寿命被极大的延长",value:10},{type:"attr",id:12,name:"幻想种",detail:"你作为龙、巫妖、半神降生。天气会因为你的心情而变化，当你在大地上漫步时，周天的星相也会随之转动，短生种为了谱写史诗而踏上冒险，大多功败垂成，而你的存在本身就是一场传奇。",value:25}]},{type:"group",detail:"你的性别",groupId:1,list:[{type:"attr",id:1,name:"无性",detail:"没有那种世俗的欲望，你觉得来一趟异世界，应该放弃被激素和肉体支配的低级冲动，投身到拯救世界的伟大事业之中",value:-10},{type:"attr",id:2,name:"保持不变",detail:"之前的性别就挺好的，没有必要更换",value:0},{type:"attr",id:3,name:"性转换",detail:"这辈子当然要尝试下不同的选择！（选择此项会得到容貌值up）",value:5},{type:"attr",id:4,name:"扶他",detail:"小孩子才做选择，大人我全都要（选择此项会得到容貌值up）",value:10},{type:"attr",id:5,name:"随意转换",detail:"你竟敢假定我的性别？（选择此项会得到容貌值大幅up）",value:15}]},{type:"group",detail:"世界局势",groupId:1,list:[{type:"attr",id:1,name:"危在旦夕",detail:"如果没有英雄站出来力挽狂澜，你的阵营即将被摧毁",value:-20},{type:"attr",id:2,name:"颓势",detail:"大部分资源、领土都已经被敌方占领，胜利的天秤正在向对方倾斜，从一个城镇前往附近城镇的路上都会遭遇数支敌方的渗透部队",value:-10},{type:"attr",id:3,name:"普通",detail:"两大阵营在数个相持不下的战场反复拉锯，双方势力相近，谁也奈何不了谁",value:0},{type:"attr",id:4,name:"治世",detail:"“决战兵力是八十万对六十万，无论如何，优势在我”——某辎重兵总监。",value:10},{type:"attr",id:5,name:"繁盛",detail:"和平而宁静的世界，几乎没有成规模的战争——即使是在同族的诸国之间",value:20}]},{type:"group",detail:"开局设置",groupId:1,list:[{type:"attr",id:1,name:"开局被砍头",detail:"你因为犯下重罪/被敌方俘获，正在被押付刑场斩首",value:-10},{type:"attr",id:2,name:"荒野求生",detail:"你被传送到了荒无人烟的野外，四周看不到任何文明的遗迹，只有野兽的嚎叫声",value:-5},{type:"attr",id:3,name:"正常开局",detail:"你转生到一座村落附近，身上带着三天份的干粮和一些铜币",value:0},{type:"attr",id:4,name:"勇者召唤",detail:"你作为救世主，被神官和国王在王都召唤而来，教会和王庭自然会为勇者打点好一切杂务",value:10},{type:"attr",id:5,name:"三年异界五年模拟",detail:"天界专职培训班的多名教官会对你进行长达数月的针对性训练，包括射击、刺杀、神学、魔法导论，当你踏上征途时，身心都已经准备好迎接一场富有挑战的冒险",value:20}]},{type:"group",groupId:1,detail:"世界画风",list:[{type:"attr",id:1,name:"群星归位",detail:"所有的居民都呈现出超出人类理智的疯狂姿态，凡人只是注视就会陷入疯狂，除了悲风大帝之外，应该没人选择这个选项",value:-30},{type:"attr",id:2,name:"当代欧美游戏",detail:"被西方政治正确祸害过的悲惨世界，作为赛里斯人的你应该是接受不了的",value:-10},{type:"attr",id:3,name:"普通",detail:"当地人与地球人差不多，当然，是没有滤镜和化妆的那种，或许长生种们会更注重保养？",value:10},{type:"attr",id:4,name:"萌化补丁",detail:"当地土著的相貌在你眼中相当俊美，建筑和风景也相当漂亮，即使不外出去冒险，各个地区也能当成不错的旅游和定居低",value:10},{type:"attr",id:5,name:"少女异界",detail:"欢愉王子本人对你进行赐福，整个世界几乎是色孽的寝宫，充满了鲜花，美食和俊男美女，以及世间一切美好的东西，你几乎相信自己在天堂",value:25}]},{type:"group",groupId:1,detail:"基础力量",list:[{type:"attr",id:1,name:"绵软无力",detail:"向所有的护甲和防具告别吧，你的身体无法承担任何重体力活，或许只能摆弄卷轴和羽毛笔",value:-5},{type:"attr",id:2,name:"普通",detail:"你的力量相当普通，如果勤加锻炼，有一天或许能负担起大型武器和超重甲",value:0},{type:"attr",id:3,name:"怪力",detail:"你可以同时挥舞两把双手武器，沉重的板甲无法拖累你的脚步，所有的行礼都可以抗在自己背上",value:10},{type:"attr",id:5,name:"神之力",detail:"神界向你允诺，你在死后将成为力量之神的候选人，尘世间现有生物能与你的力量相提并论",value:20}]},{type:"group",groupId:1,detail:"智力",list:[{type:"attr",id:1,name:"胎教肄业",detail:"阿巴阿巴，如果你足够刻苦努力，或许能掌握基本的读写能力——至于学习魔法，成为法师是肯定不行了，只能期待血脉觉醒",value:-5},{type:"attr",id:2,name:"平庸",detail:"如果，我是说如果，如果你在学校学到的东西还没忘光的话，应该可以在异世界成为抄书员或是大学讲师，否则只能放弃在异世界发起工业革命的空洞梦想了",value:0},{type:"attr",id:3,name:"聪颖",detail:"你可以轻易掌握法术，记住生僻的知识，如果愿意花费时间和辛劳，钻研材料与机械结构，或许也能从零开始制造出蒸汽机和铁路，当然，或许成为远近闻名的博学者，进而不如上流社会更为现实。",value:10},{type:"attr",id:4,name:"七窍玲珑",detail:"所有的智者都以向你请教为荣，任何魔法技艺在你眼中都如同儿戏，你就是知识与智慧的具现化",value:20}]},{type:"group",groupId:1,detail:"基础体质",list:[{type:"attr",id:1,name:"弱不禁风",detail:"天气稍差你就会咳嗽，疫病总是能顺利找上你，或许你的余生要和草药为伴了",value:-5},{type:"attr",id:2,name:"普通",detail:"如果你被推进冰水，你可能会感冒，也可能不会",value:0},{type:"attr",id:3,name:"健壮如牛",detail:"常见的毒药对你来说危害不比啤酒更大，自动通过所有低于自身等级的即死鉴定，即使是致命伤，只要没有当场倒毙，也能在几天内恢复如初",value:10},{type:"attr",id:4,name:"生命之潮",detail:"你即使死去，旺盛的生命力也会让你的尸体从白骨中重新生成肉体，只有极为强大的魔法武器和诅咒才能彻底杀死你——不过要当心，这些东西并不罕见",value:20}]},{type:"group",groupId:1,name:"基础敏捷",list:[{type:"attr",id:1,name:"笨拙",detail:"你无法从事大部分精密的工作，如果你选择成为锁匠或是盗贼，那简直是一场灾难，需要相当程度的魔法道具和增益效果才能抵消你迟钝的神经系统",value:-5},{type:"attr",id:2,name:"普通",detail:"如果是哥布林弓箭手朝你放冷箭，你或许能躲开，但兽人丢出的投矛依然是个严重威胁，并且要经过专门训练才能通过地下城里的陷阱",value:0},{type:"attr",id:3,name:"轻盈如风",detail:"尽管在力量增强之前，长剑对你来说过于沉重，但比手半剑和重剑更轻的武器在你手中会化作华丽的剑刃风暴，并且常规陷阱已经对你无可奈何",value:10},{type:"attr",id:4,name:"快如惊雷",detail:"普通箭矢不仅无法命中你，甚至凡人箭手难以捕捉到你的身影，你可以在大部分范围魔法和爆炸物的缝隙中藏身，并且下雨天不用带伞",value:20}]},{type:"group",groupId:1,detail:"基础魅力",list:[{type:"attr",id:1,name:"丑陋",detail:"你是肥宅，畏缩，阴沉，相貌丑陋，外形已经在类人生物和魔物的边缘徘徊，所有人都会不自觉的厌恶你，这不是诅咒效果，因此无法被神术净化",value:-5},{type:"attr",id:2,name:"平平无奇",detail:"平平无奇的相貌，如果其他人有一双慧眼，或许可以从你身上发掘一些闪光点——在内在美方面",value:0},{type:"attr",id:3,name:"容貌出众",detail:"你的容貌相当俊美，一些城镇的统治者规定，如果你要造访当地，必须披上面纱，否则你的美貌会引发骚乱",value:10},{type:"attr",id:4,name:"国色天香",detail:"高卢人洗劫罗马，是为了抢走你的雕像，十字军洗劫君士坦丁堡，是为了拥有你的画像，文艺复兴时代，每个画家都以临摹你的相貌为荣，每个诗人都试图称颂你的美貌，当你皱眉时，至少有一个中队的骑士愿意为你赴汤蹈火",value:20}]},{type:"group",groupId:1,detail:"基础感知",list:[{type:"attr",id:1,name:"愚钝",detail:"你是如此感知和悟性底下且迟钝，当你的宿营地被哥布林突袭时，你是全小队最后一个发觉的，连现世都如此，更不用说感受神明的教诲与恩惠了——你永远无法掌握神术",value:-5},{type:"attr",id:2,name:"平常",detail:"你的感知普普通通，如果有盗贼试图在你面前潜行，并且灯光黑暗，那你最好贴着墙站着，并迅速准备照明手段",value:0},{type:"attr",id:3,name:"敏锐",detail:"你可以感受风的流动，当大地回春时，你是第一个知道的，你不仅能听到周遭的细响，也能感受到天界、深渊的悸动，通过与之共鸣，获得强大的神术施法能力",value:20},{type:"attr",id:4,name:"天人合一",detail:"世间的一切都逃不过你的法眼，宇宙的法则在你指尖被随意拨弄，通过冥想，你可以与整个世界交融为一体",value:20}]},{type:"group",groupId:1,detail:"基础运气",list:[{type:"attr",id:1,name:"噩运",detail:"你打开的十个宝箱中，九个是宝箱怪，当你强化装备时，失败率会原高于理论值……或许你应该皈依幸运女神。",value:-5},{type:"attr",id:2,name:"无事发生",detail:"你是概率学的标杆，去赌场尝试手气时，依然会被庄家当成韭菜收割",value:0},{type:"attr",id:3,name:"好运连连",detail:"显然你的运气有些离谱，每次击败怪物，总能从它们身上搜到超出规格的宝藏，并且大部分赌场在把你拉黑之前，都是你的提款机",value:10},{type:"attr",id:4,name:"命运之蛇",detail:"所谓命运，不过是你手中的玩物，即使用六发全满的左轮枪顶着脑袋开火，击锤也会卡住，但请小心，捉摸不定的命运不知何时就会反噬",value:20}]},{type:"group",groupId:1,detail:"以下为随意选择的项目",list:[]},{type:"attr",id:1,name:"全民通缉",detail:"无论是魔物还是秩序阵营都将你视为眼中钉，你的人头被悬以重赏，平时只能以假面目示人",value:-10},{type:"attr",id:2,name:"恶魔/天界凝注",detail:"有一个高等异界生物视你为肉中刺，它和它的爪牙会不遗余力的尝试穿过位面障壁，对你下毒手",value:-5},{type:"attr",id:3,name:"贵族出身",detail:"你诞生在一个贵族家庭，自幼接受良好的教育，并拥有在平民看来相当可观的资源",value:5},{type:"attr",id:4,name:"青梅竹马",detail:"你有个自幼一起长大的发小，你们感情相当好，而且她/他在长大之后，在战斗/生产的某个领域颇有天赋",value:10},{type:"attr",id:5,name:"录取通知书",detail:"你的到了帝国法师学院/神学院/骑士修会的录取通知，将有幸接受全阵营最高等的教育，并结交最为优秀的年轻人",value:10},{type:"attr",id:6,name:"龙蛋",detail:"你在转生之后，手边多了一颗即将孵化的龙蛋，而龙会把出生时第一眼看到的智慧生物视为父母",value:10},{type:"attr",id:7,name:"绝世神兵",detail:"你在转生之后，手边多了一把与你灵魂绑定的定制武器，它的属性超绝，永不丢失，永不磨损，并且可以用常规附魔手段继续强化下去",value:5},{type:"attr",id:8,name:"兽化症",detail:"极度愤怒或满月时，你会变成半人半兽的怪物，力大无穷且丧失理智，在绝大部分地区，兽化症都被视为是恶魔附体而遭到猎杀",value:-5},{type:"attr",id:9,name:"无尽钱袋",detail:"这个钱袋连接着其他世界古代法师帝国的金库，里面的金币大致相当于一个普通人辛苦工作一个月的工资，并且每天都会补充",value:5},{type:"attr",id:10,name:"天界军团/深渊军团",detail:"每个月一次，你可以通过漫长的咏唱和长达数小时的魔法阵绘制，召唤一支强大的异界军团来为你作战，他们会一直存在到第二天太阳升起",value:10},{type:"attr",id:11,name:"精灵之友",detail:"所有的精灵城邦都视你为准公民——即使是敌对阵营的精灵势力，也会对你保持友善",value:5},{type:"attr",id:12,name:"通晓语言",detail:"你精通大部分语言，甚至包括动物和魔法生物的，即使一棵树有了灵智，你也能与之交谈",value:5},{type:"attr",id:13,name:"不竭魔力",detail:"你的魔力无穷无尽，尽管法术威力与普通法师无异，但你的魔力值异乎寻常的高",value:10},{type:"attr",id:14,name:"被缚之神",detail:"每月随机一次，隐藏在你灵魂深处的邪灵将会苏醒，你只能眼睁睁看着自己的身体被用于制造灾难和毁灭，解除诅咒将是个漫长的过程",value:-10},{type:"attr",id:15,name:"半亡灵",detail:"你是个半亡灵，治疗法术只会伤害你，你也无法以活人使用的草药还治疗伤害，在魔法侦测中，你被显示为具有极高威胁的上位死灵，即使你的真实实力很弱",value:-5},{type:"attr",id:16,name:"末日时钟",detail:"你的身上带有一个灵魂绑定的时钟，如果时钟走到十二点，世界将会毁灭，你只能盲目的作出拯救世界的尝试，看看能不能让时针回拨",value:-10},{type:"attr",id:17,name:"剑意通玄",detail:"剑就像你的手那样，是你肢体的延伸，任何剑术你都能快速掌握，并且将其发挥到神乎其神的境界，你可以用普通的铁剑，轻易剖开全身重甲的魔物",value:10},{type:"attr",id:18,name:"龙之使徒",detail:"你和一条古龙是莫逆之交，时不时可以得到它的帮助，当然友谊是相互的，偶尔他也会向你暗示一些……回报。可以折现。",value:10},{type:"attr",id:19,name:"慢性毒素",detail:"你身上带有某种神秘的剧毒，必须每年饮用极为昂贵的药物才能压制，并且药物只能在少数几个炼金实验室中现场配置，现场服用",value:-5},{type:"attr",id:20,name:"身负巨债",detail:"你欠下相当于某个中等国家一年税收的巨款，并且你的债主极为强大，如果不想想办法，你余生都要为还债而头疼",value:-10},{type:"attr",id:21,name:"重度失眠",detail:"你罹患严重的超自然失眠症，必须在最高档的床铺上才能安然入睡，并且需要香薰和绝对的安静，而地城和野外显然不适合你休息，你只能进行一日以内的冒险，否则就只能熬夜",value:-5},{type:"attr",id:22,name:"网瘾少年",detail:"你随身携带一个量子光屏，可以浏览地球上的互联网镜像，因为是镜像，所以无法主动发送信息",value:15},{type:"attr",id:23,name:"异界豪宅",detail:"每天一次，你可以打开一扇通往半位面的门，门后是受你控制的一处悬浮虚空中的庄园，但你只能在其中停留十二小时",value:10},{type:"attr",id:24,name:"剧痛反馈",detail:"你的身体对痛苦极为敏感，麻醉剂和治疗魔法也难以缓解这种情况，即使是无关紧要的小伤口也会让你痛得直叫",value:-5},{type:"attr",id:25,name:"灵界灯塔",detail:"你的灵魂在虚空中亮得发红，魔物会不自觉的涌向你所在的区域，你定居的地方总会在短时间内成为最前线，或是被彻底摧毁",value:-5},{type:"attr",id:26,name:"随身老爷爷",detail:"你的灵魂中寄宿着古代的智者，他会在各个方面基于你指导，并且是真心的，不是为了夺取你的身体",value:10},{type:"attr",id:27,name:"二刺螈滤镜",detail:"异世界居民的画风会被转化为轻小说，猫耳娘，魅魔，精灵，应有尽有，并且不知为何，与你的性癖相当契合",value:10},{type:"attr",id:28,name:"可视化面板",detail:"你可以对自己和世界进行数据化观察，可以像rpg一样，精确看到万物的属性，并且附带一个集装箱大小的背包空间",value:10}];const u=a.exports.jsx,p=a.exports.jsxs,o=a.exports.Fragment,s=i.exports.createContext(30);function m(){const[e,t]=i.exports.useState(30);return i.exports.useEffect((()=>{r.on("changePoint",(e=>{t(e)}))}),[]),u(s.Provider,{value:e,children:u(s.Consumer,{children:e=>p("div",{className:"App",children:[u("h1",{children:"异界转生加点系统模拟器v0.1"}),u("h2",{children:"你刚刚结束了无聊的一生"}),u("h2",{children:"现在有一个异界转生的机会"}),p("h2",{children:["请用这",u("span",{className:"green",children:"30点"}),"点数在下列选项中购买需要的属性"]}),p("h2",{children:["如果觉得点数不够，且愿意献祭自身，获得诅咒，那么可以通过",u("span",{className:"red",children:"负面特质"}),"来获得额外点数"]}),p("div",{className:"now-point",children:["剩余可用点数：",e]}),u(c,{}),p("div",{children:["made by ",u("a",{href:"https://space.bilibili.com/81922/",children:"冬眠的龙凰"})," ",u("a",{href:"https://www.duread8.com/book/book_detail/100180354",children:"支持作者"})]})]})})})}console.log("杀不死你的，会让你更强大……虽然会很痛");const c=()=>u("div",{className:"content row",children:n.map((e=>{if("attr"===e.type){const{name:t,detail:a,value:i,id:l}=e;return u(y,{id:l||0,name:t||"",detail:a||"",value:i||0},l)}if("group"===e.type){const{detail:t,list:a}=e;return p(o,{children:[u("div",{className:"checkbox-detail",children:u("pre",{className:"doc",children:t})}),u(v,{list:a})]})}}))}),v=({list:e})=>{const[t,a]=i.exports.useState(0),l=i.exports.useRef(0);return u(s.Consumer,{children:i=>u("div",{className:"checkbox-holder",children:e.map((e=>{const{name:d,detail:n,value:p,id:o}=e;let s=i<p-l.current;return u("div",{className:"checkbox-item  col-md-3 col-sm-4",onClick:()=>{s||(r.emit("changePoint",i-(p-l.current)),a(o),l.current=p)},children:u(h,{id:o||0,name:d||"",detail:n||"",value:p||0,lock:s,focus:t===o})},o)}))})})},y=({name:e,detail:t,id:a,value:l})=>{const[d,n]=i.exports.useState(!1);return u(s.Consumer,{children:a=>p("div",{className:` button-block ${a<l&&!d?"lock":""} ${d?"have":""} col-md-3 col-sm-4`,onClick:()=>{a<l&&!d||(n(!d),r.emit("changePoint",d?a+l:a-l))},children:[u("input",{type:"button",className:d?"tertiary":"inverse",value:e}),u("div",{className:"point-value",children:p("mark",{className:l>=0?"secondary":"tertiary",children:[l>=0?"":"+",-1*l]})}),u("div",{className:"detail",children:t})]})})},h=({name:e,detail:t,id:a,value:i,lock:l,focus:d})=>u(s.Consumer,{children:a=>p("div",{className:`button-block ${l?"lock":""} ${d?"have":""}`,children:[u("input",{type:"button",className:d?"tertiary":"inverse",value:e}),u("div",{className:"point-value",children:p("mark",{className:i>=0?"secondary":"tertiary",children:[i>=0?"":"+",-1*i]})}),u("div",{className:"detail",children:t})]})});l.render(u(d.StrictMode,{children:u(m,{})}),document.getElementById("root"));
