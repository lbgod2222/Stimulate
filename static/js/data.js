var dataBase = [];
var current = 0;
dataBase = [
    {
        name:'许清',
        desc:`国内早期区块链项目布道者和投资者，深耕于科技服务领域的连续创业者；科技项目投资人，主要关注区块链、人工智能、
        医疗科技等领域的早期项目，力推区块链技术与各行业应用的融合。`,
        title:'合伙人、战略咨询顾问',
        img: 'xvqing.png'
    },
    {
        name:'田少杰',
        desc:`区块链技术爱好者和区块链早期项目投资者，致力于跨链技术的研究、推动区块链技术与行业应用的跨界融合；科技领域天使投资人，
        主要关注区块链、人工智能、医疗科技等领域的中早期项目。`,
        title:'合伙人、战略咨询顾问',
        img: 'tianshaojie.png'
    },
    {
        name:'郭海明',
        desc:`美国马里兰大学应用数学博士，在大数据分析建模、金融风险管理、金融科技领域有十五年以上的丰富经验。
        曾为多家银行及互联网金融公司提供大数据分析咨询服务，并在多家互联网金融公司担任首席数据官。
        对互联网金融及金融科技行业有深度的了解。`,
        title:'合伙人、战略咨询顾问',
        img: 'guohaiming.png'
    },
    {
        name:'王向',
        desc:`具有超过15年的软件设计开发经验，专注于身份认证、数据加密、和区块链技术，以及在金融领域的应用；
        曾经在中国参与创办并运营两家企业，深度了解中国市场并具有丰富的商务经验；目前致力于帮助区块链团队构建优质社区。`,
        title:'运营合伙人、战略咨询顾问',
        img: 'wangxiang.png'
    },
    {
        name:'张德涛',
        desc:`区块链爱好者和国内早期区块链项目投资者、连续创业者，拥有丰富的项目运营和推广经验，
        致力于区块链技术在各行业的应用推广；科技项目投资人，主要关注区块链、人工智能、光电等领域的早期项目。`,
        title:'首席运营官COO',
        img: 'zhangdetao.png'
    },
    {
        name:'威利.维申',
        desc:`Willi Vision拥有超过三十五年（娱乐、科技、房地产、生物科技、保险和银行等公司）融资的丰富经验。
        曾经为科技公司（1.38亿美元），娱乐企业（1.22亿美元）和数十部电影（2.12亿美元）筹集了大量的资金。
        Willi Vision拥有加州大学洛杉矶分校UCLA商业经济学学士学位、波士顿大学MBA学位和旧金山州立大学硕士学位。`,
        title:'',
        img: 'WilliVision.png'
    },
    {
        name:'迈特.哈蒙德',
        desc:`Matt Hammond是MediaLabPro的创始人和CEO，毕业于加州大学伯克利分校（UC Berkley）；
        业界知名的网络营销专家和用户界面设计师，拥有十多年开发网站和在线营销策略的经验；
        曾参与推广众多曾被媒体广泛报道的产品，媒体包括《纽约时报》、《商业周刊》、《个人电脑》、
        TechCrunch.com、《连线》和《计算机世界》等美国知名报刊杂志。`,
        title:'',
        img: 'MattHammond.png'
    },
    {
        name:'萨沙.博德斯基',
        desc:`Sasha Brodsky律师在商业法、房地产、商业合同和诉讼等领域有20年丰富经验，
        同时在娱乐业、版权、商标法等领域也多有建树。`,
        title:'',
        img: 'SashaBrodsky.png'
    },
];

$(document).ready(function(event, target){
    var baseNumber = 0;
    var presetArr = dataBase.slice(0,5);
    // render();
    var getPreset = function(){
        if (baseNumber+5>dataBase.length) {
            var tempNum = (baseNumber+5) - dataBase.length;
            var tempArr_1 = dataBase.slice(baseNumber, dataBase.length + 1);
            var tempArr_2 = dataBase.slice(0, tempNum);
            // console.log(baseNumber,tempNum, tempArr_1, tempArr_2);
            return tempArr_1.concat(tempArr_2);
        } else {
            presetArr = dataBase.slice(baseNumber, baseNumber+5);
            return presetArr;
        }
    }
    var nextOne = function(){
        if (baseNumber + 1 > dataBase.length) {
            baseNumber = 0;
        } else {
            baseNumber += 1;
        }
        presetArr = getPreset();
        render();
    }
    var preOne = function(){
        if (baseNumber -1 < 0) {
            baseNumber = dataBase.length;
        } else {
            baseNumber -= 1;
        }
        presetArr = getPreset();
        render();
    }
    // render the page
    var render = function(){
        // console.log(presetArr);
        $('.teamPage_info_bottom h3').text(presetArr[2].name);
        $('.teamPage_info_bottom b').text(presetArr[2].title);
        $('.teamPage_info_bottom pre').text(presetArr[2].desc);
        $('.teamPage_ava_l1').css('background-image', 'url(../static/img/'+presetArr[0].img+')');
        $('.teamPage_ava_l2').css('background-image', 'url(../static/img/'+presetArr[1].img+')');
        $('.teamPage_ava_r1').css('background-image', 'url(../static/img/'+presetArr[3].img+')');
        $('.teamPage_ava_r2').css('background-image', 'url(../static/img/'+presetArr[4].img+')');
        $('.teamPage_ava_mid').css('background-image', 'url(../static/img/'+presetArr[2].img+')');
        
    }
    var changeTo = function(num){
        var inc = baseNumber + (num -2);
        if (inc < 0) {
            baseNumber = dataBase.length - Math.abs(inc);
        } else if (inc > dataBase.length) {
            baseNumber = inc - dataBase.length;
        } else {
            baseNumber = baseNumber + (num -2);
        }
        // clearInterval();
        getPreset();
        presetArr = getPreset();
        render();
    }
    // monitor click action
    $('.teamPage_info_btnLeft').bind('click', function(){
        preOne();
    })
    $('.teamPage_info_btnRight').bind('click', function(){
        nextOne();
    })
    setInterval(function(){
        nextOne();
    }, 3000)
    $('.teamPage_info_upper div').each(function(index, value){
        $(this).bind('click', function(){
            console.log('clicked','index:',index,presetArr);
            if (index == 2) {
                return;
            }
            changeTo(index);
        });
    });
})