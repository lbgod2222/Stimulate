var dataBase = [];
var current = 0;
dataBase = [
    {
        name:'许清',
        name_e:'Xv Qing',
        desc:`国内早期区块链项目布道者和投资者，深耕于科技服务领域的连续创业者；科技项目投资人，主要关注区块链、人工智能、
        医疗科技等领域的早期项目，力推区块链技术与各行业应用的融合。`,
        desc_e:`Mr. Xu is a preacher and investor in block chain projects early in China. He is a serial entrepreneur and he has extensive experience in science and technology services to integrate block chain technology and its applications in various industries. He is a professional investor in science and technology projects and mainly focuses on early projects of block chain, artificial intelligence, and medical technology areas.`,
        title:'合伙人、战略咨询顾问',
        title_e:'Partner、Strategy consulting adviser',
        img: 'xvqing.png'
    },
    {
        name:'田少杰',
        name_e:'Shaojie Tian',
        desc:`区块链技术爱好者和区块链早期项目投资者，致力于跨链技术的研究和推动区块链技术与行业应用的跨界融合；科技领域天使投资人，
        主要关注区块链、人工智能和医疗科技等领域的中早期项目。`,
        desc_e: `Mr. Tian is block chain technology enthusiasts, and an investor in block chain early projects. He commitment to research in Cross chain technology, promote to syncretize block chain technology and its applications in various industries, then boost the development of value Internet. He is also an angels in the field of science and technology, and mainly focuses on early projects of block chain、artificial intelligence、medical technology areas.`,
        title:'合伙人、战略咨询顾问',
        title_e:'Partner、Strategy consulting adviser',
        img: 'tianshaojie.png'
    },
    {
        name:'郭海明',
        name_e:'Haiming Guo',
        desc:`美国马里兰大学应用数学博士，在大数据分析建模、金融风险管理和金融科技领域有十五年以上的丰富经验。
        曾为多家银行及互联网金融公司提供大数据分析咨询服务，并在多家互联网金融公司担任首席数据官。
        对互联网金融及金融科技行业有深度的了解。`,
        desc_e:`Dr. HaimingGuo got a Ph.D in applied math from University of Maryland. He has over  15years of experience in big data analysis, statistical modeling, financial risk management and fin tech fields. He has provided big data analysis consulting service for several banks and internet finance companies in China. He has been chief data officer in several internet finance companies in recent years. He has an extensive knowledge in Chinese internet finance and fin tech areas.`,
        title:'合伙人、战略咨询顾问',
        title_e:'Partner、Strategy consulting adviser',
        img: 'guohaiming.png'
    },
    {
        name:'王向',
        name_e:'Xiang wang',
        desc:`具有超过15年的软件设计开发经验，专注于身份认证、数据加密和区块链技术，以及它们在金融领域的应用；
        曾经在中国参与创办并运营两家企业，深度了解中国市场并具有丰富的商务经验；目前致力于帮助区块链团队构建优质社区。`,
        desc_e:`Xiang Wang has over 15 years of experience with software design and development in Silicon Valley, specializing in FinTech, authentication, data encryption and blockchain technologies. He founded and operated two startup companies and has extensive knowledge and business experience both in China and USA. With rich experience in ICO and DAPP operation, he has deep understanding of blockchain ecosystem and DAPP. Currently he is dedicated to advising and helping top blockchain teams to develop global strategy and to build thriving oversea communities.`,
        title:'运营合伙人、战略咨询顾问',
        title_e:'Operating Partner、Strategy consulting adviser',
        img: 'wangxiang.png'
    },
    {
        name:'张德涛',
        name_e:'Detao Zhang',
        desc:`区块链爱好者和国内早期区块链项目投资者和连续创业者，拥有丰富的项目运营和推广经验，
        致力于区块链技术在各行业的应用推广；科技项目投资人，主要关注区块链、人工智能和光电等领域的早期项目。`,
        desc_e:`Mr Chang, blockchain enthusiast, investor in China's early blockchain project. He is a continuous entrepreneur with extensive experience in project operation and promotion, and is committed to promoting the application of blockchain technology in various industries. As a professional investor in science and technology projects. Mainly focuse on early projects in the areas of blockchain, artificial intelligence, optoelectronics, etc.`,
        title:'首席运营官',
        title_e:'COO',
        img: 'zhangdetao.png'
    },
    {
        name:'威利.维申',
        name_e:'Willi Vision',
        desc:`Willi Vision拥有超过三十五年（娱乐、科技、房地产、生物科技、保险和银行等公司）融资的丰富经验。曾经为科技公司（1.38亿美元），娱乐企业（1.22亿美元）和数十部电影（2.12亿美元）筹集了大量的资金。Willi Vision拥有加州大学洛杉矶分校UCLA商业经济学学士学位、波士顿大学MBA学位和旧金山州立大学硕士学位。`,
        desc_e:`For over thirty five years, Mr. Willi Vision has structured financing for companies in entertainment, technology, real estate, biotech, insurance and banking. He has raised millions of equity capital for technology companies (US$ 138 million), entertainment ventures (US$ 122 million) and dozens of motion picture films (US$ 212 million). He has a B.A. in Business Economics from UCLA, graduated summa cum laude earning a MBA from Boston University (European extension program), and has a Masters in Broadcast Communications from San Francisco State University.`,
        title:'',
        img: 'WilliVision.png'
    },
    {
        name:'迈特.哈蒙德',
        name_e:'Matt Hammond',
        desc:`Matt Hammond是MediaLabPro的创始人和CEO，毕业于加州大学伯克利分校（UC Berkley）；业界知名的网络营销专家和用户界面设计师，拥有十多年开发网站和在线营销策略的经验；曾参与推广众多曾被媒体广泛报道的产品，媒体包括《纽约时报》、《商业周刊》、《个人电脑》、TechCrunch.com、《连线》和《计算机世界》等美国知名报刊杂志。`,
        desc_e:`Matt Hammond is a respected web marketing expert and user interface designer with over ten years experience developing websites and online marketing strategies. He has created and promoted products covered by The New York Times, BusinessWeek, PC Magazine, TechCrunch.com, Wired Magazine, and ComputerWorld. He is also founder and CEO of MediaLabPro, whose clients includes NBA Development League, leading political advisories, medical comparison platforms, oil companies, real estate brokers, and major payment gateways. He graduated from UC Berkley.`,
        title:'',
        img: 'MattHammond.png'
    },
    {
        name:'萨沙.博德斯基',
        name_e:'Sasha Brodsky',
        desc:`Sasha Brodsky律师在商业法、房地产、商业合同和诉讼等领域有20年丰富经验，同时在娱乐业、版权、商标法等领域也多有建树。`,
        desc_e:`Mr. Sasha Brodsky has been practicing law in California for almost 20 years. He consults with clients primarily in the areas of Business, Real Estate, Contracts, and Litigation. He also practices in a range of other areas, including but not limited to Entertainment, Copyright, and Trademark.`,
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
        // clear
        $('.teamPage_info_bottom h3').text('');
        $('.teamPage_info_bottom b').text('');
        $('.teamPage_info_bottom p').text('');
        if (window.flag === 0) {
            $('.teamPage_info_bottom h3').text(presetArr[2].name);
            $('.teamPage_info_bottom b').text(presetArr[2].title);
            $('.teamPage_info_bottom p').text(presetArr[2].desc);
        } else {
            $('.teamPage_info_bottom h3').text(presetArr[2].name_e);
            $('.teamPage_info_bottom b').text(presetArr[2].title_e);
            $('.teamPage_info_bottom p').text(presetArr[2].desc_e);
        }
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
    var inter = setInterval(function(){
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
    // mouseover temp stop
    //
    //
    $('.teamPage_info_upper div, .teamPage_info_upper span').bind('click', function(e) {
        clearInterval(inter);
    });
})