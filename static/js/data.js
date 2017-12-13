var dataBase = [];
var current = 0;
dataBase = [
    {
        name:'许清',
        desc:`国内早期区块链项目布道者和投资者，连续创业者，科技服务领域深耕者,
        力推区块链技术与各行业应用的融合，科技项目投资人，关注区块链、
        人工智能、医疗科技等领域的早期项目。`,
        title:'合伙人、战略咨询顾问',
        img: 'xvqing.png'
    },
    {
        name:'田少杰',
        desc:`区块链技术爱好者，区块链早期项目投资者。
        致力于跨链技术的研究，推动区块链技术与行业应用的跨界融合，
        促进价值互联网的发展。科技领域天使投资人，主要关注区块链、
        人工智能、医疗科技等领域的中早期项目。`,
        title:'合伙人、战略咨询顾问',
        img: 'tianshaojie.png'
    },
    {
        name:'郭海明',
        desc:`郭海明为美国马里兰大学应用数学博士,在大数据分析建模、金融风险管理、金融科技领域有十五年以上的丰富经验。
        曾为多家银行及互联网金融公司提供大数据分析咨询服务.近年来曾在多家互联网金融公司担任首席数据官，
        对互联网金融及金融科技行业有深度的了解。`,
        title:'合伙人、战略咨询顾问',
        img: 'guohaiming.png'
    },
    {
        name:'王向',
        desc:`王向具有超过 15 年的软件设计开发经验，专注于身份认证、数据加密、和区块链技术，以及在金融领域的应用。
        此外，他曾经在中国参与创办和运营两家企业，对中国市场有深度了解和实际商务经验。
        目前，他为 ICO 团队提供帮助与加密代币社区的沟通和合作。`,
        title:'运营合伙人、战略咨询顾问',
        img: 'wangxiang.png'
    },
    {
        name:'张德涛',
        desc:`区块链爱好者，国内早期区块链项目投资者。
        连续创业者，拥有丰富的项目运营和推广经验，致力于区块链技术在各行业的应用推广。
        作为科技项目投资人，关注区块链、人工智能、光电等领域的早期项目。`,
        title:'',
        img: 'zhangdetao.png'
    },
    {
        name:'Willi Vision',
        desc:`威利.维申先生拥有超过三十五年为娱乐，科技，房地产，生物科技，保险和银行等公司融资的丰富经验。 
        他曾经为科技公司（1.38亿美元），娱乐企业（1.22亿美元）和数十部电影（2.12亿美元）筹集了大量的资金。
        他从著名的加州大学洛杉矶分校UCLA商业经济学本科毕业，后来更获得波士顿大学（欧洲扩展计划）MBA学位，
        并在旧金山州立大学获得广播传播硕士学位。`,
        title:'',
        img: 'WilliVision.png'
    },
    {
        name:'Matt Hammond',
        desc:`迈特.戴蒙先生是业界知名的网络营销专家和用户界面设计师，
        拥有十多年开发网站和在线营销策略的经验。
        他参与推广了众多曾被媒体广泛报道的产品,
        他也是互联网营销公司MediaLabPro的创始人和CEO`,
        title:'',
        img: 'MattHammond.png'
    },
    {
        name:'Sasha Brodsky',
        desc:`萨沙.博德斯基先生是具有20年丰富经验的律师。
        他主要专长是商业法，房地产，商业合同和诉讼。 
        他也有其他法律领域的经验，包括娱乐业，版权和商标法。`,
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
            console.log(baseNumber,tempNum, tempArr_1, tempArr_2);
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
        console.log(presetArr);
        $('.teamPage_info_bottom h3').text(presetArr[2].name);
        $('.teamPage_info_bottom b').text(presetArr[2].title);
        $('.teamPage_info_bottom pre').text(presetArr[2].desc);
        $('.teamPage_ava_l1').css('background-image', 'url(../static/img/'+presetArr[0].img+')');
        $('.teamPage_ava_l2').css('background-image', 'url(../static/img/'+presetArr[1].img+')');
        $('.teamPage_ava_r1').css('background-image', 'url(../static/img/'+presetArr[3].img+')');
        $('.teamPage_ava_r2').css('background-image', 'url(../static/img/'+presetArr[4].img+')');
        $('.teamPage_ava_mid').css('background-image', 'url(../static/img/'+presetArr[2].img+')');
        
    }
    // monitor click action
    $('.teamPage_info_btnLeft').bind('click', function(){
        preOne();
    })
    $('.teamPage_info_btnRight').bind('click', function(){
        nextOne();
    })
    render();
})