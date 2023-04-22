const mockTopTokens = [
  {
    dailyVolumeToken: '12683883654.592696269',
    dailyVolumeUSD: '1441.337416949995760954045043627453',
    token: {
      name: 'SimbaDoge',
      decimals: '9',
      tradeVolumeUSD: '33786.49510604088934270218501040016',
      symbol: 'SIMBAD',
    },
  },
  {
    dailyVolumeToken: '40.817774396625799122',
    dailyVolumeUSD: '0',
    token: {
      name: 'YM',
      decimals: '18',
      tradeVolumeUSD: '423.9370595139894430138247582540559',
      symbol: 'YM',
    },
  },
  {
    dailyVolumeToken: '58575.064090789225444347',
    dailyVolumeUSD: '2788.361867765896381770410626666163',
    token: {
      name: 'DDDS',
      decimals: '18',
      tradeVolumeUSD: '3290619.934505412257222290329048558',
      symbol: 'DDDS',
    },
  },
  {
    dailyVolumeToken: '22691.329999999999999999',
    dailyVolumeUSD: '61.22750267217198119141085433785126',
    token: {
      name: 'BoringDAO',
      decimals: '18',
      tradeVolumeUSD: '16251469.99807887258786081154992871',
      symbol: 'BORING',
    },
  },
  {
    dailyVolumeToken: '466552.896420333071941069',
    dailyVolumeUSD: '274.9052526286762568218188247352984',
    token: {
      name: 'LAN',
      decimals: '18',
      tradeVolumeUSD: '11338204.38863005192282631987446003',
      symbol: 'LAN',
    },
  },
  {
    dailyVolumeToken: '2245.260394501412644262',
    dailyVolumeUSD: '15754.04427342747953787962476854327',
    token: {
      name: 'TUQJ',
      decimals: '18',
      tradeVolumeUSD: '3321402.287415031590565600680822457',
      symbol: 'TUQJ',
    },
  },
  {
    dailyVolumeToken: '6676975.466328401',
    dailyVolumeUSD: '0',
    token: {
      name: 'Pepe Gangster',
      decimals: '9',
      tradeVolumeUSD: '1666.052266258814925591629538735023',
      symbol: 'Pgang',
    },
  },
  {
    dailyVolumeToken: '112.116982308515051282',
    dailyVolumeUSD: '466.6680479381043073680275240433861',
    token: {
      name: 'AW',
      decimals: '18',
      tradeVolumeUSD: '881694.3145438933440008942222158083',
      symbol: 'AW',
    },
  },
  {
    dailyVolumeToken: '308232.794646380651662026',
    dailyVolumeUSD: '7848.05656655167824501463948995023',
    token: {
      name: 'Capsule Coin',
      decimals: '18',
      tradeVolumeUSD: '63485436.54521674737897399824827214',
      symbol: 'CAPS',
    },
  },
  {
    dailyVolumeToken: '2653735.460168041',
    dailyVolumeUSD: '18033.89384837388498370617503397489',
    token: {
      name: 'CloudTx',
      decimals: '9',
      tradeVolumeUSD: '3296484.655129598568988346844449878',
      symbol: 'Cloud',
    },
  },
  {
    dailyVolumeToken: '21151455710500.532479605',
    dailyVolumeUSD: '29.16233825343894700306707713048423',
    token: {
      name: 'Euro Shiba Inu',
      decimals: '9',
      tradeVolumeUSD: '8780310.537769703386311905788463816',
      symbol: 'EShib',
    },
  },
  {
    dailyVolumeToken: '654.969191414724039206',
    dailyVolumeUSD: '110.5346244498835247588644133255135',
    token: {
      name: 'Mas',
      decimals: '18',
      tradeVolumeUSD: '54168533.63936620393154023046299347',
      symbol: 'MAS',
    },
  },
  {
    dailyVolumeToken: '308.486342634284317181',
    dailyVolumeUSD: '3.877322981812010449379741994736405',
    token: {
      name: 'Dohrnii',
      decimals: '18',
      tradeVolumeUSD: '6601953.335091878124856196790981841',
      symbol: 'DHN',
    },
  },
  {
    dailyVolumeToken: '435362555204.89234824103763578',
    dailyVolumeUSD: '0',
    token: {
      name: 'CSOP',
      decimals: '18',
      tradeVolumeUSD: '434.0661716431415863457530651172781',
      symbol: 'CSOP',
    },
  },
  {
    dailyVolumeToken: '50172219095943.086953367',
    dailyVolumeUSD: '5075.993397224036490092243316132792',
    token: {
      name: 'Wonderful',
      decimals: '9',
      tradeVolumeUSD: '233828.5610439233314576185985944599',
      symbol: 'WDF',
    },
  },
  {
    dailyVolumeToken: '1534.564506698194940366',
    dailyVolumeUSD: '0',
    token: {
      name: 'Hi five box',
      decimals: '18',
      tradeVolumeUSD: '17684.18489991912865424583825335344',
      symbol: 'Hi5Box',
    },
  },
  {
    dailyVolumeToken: '2691034922642930.272686295',
    dailyVolumeUSD: '837.7247684185761131946840015051437',
    token: {
      name: 'Cat',
      decimals: '9',
      tradeVolumeUSD: '3224719.964882552105696041975495012',
      symbol: 'Cat',
    },
  },
  {
    dailyVolumeToken: '745873229.203999202813059053',
    dailyVolumeUSD: '18.1316237233802424309962526562272',
    token: {
      name: '$PePe Coin',
      decimals: '18',
      tradeVolumeUSD: '491817.4929139458517013738142469514',
      symbol: '$PePe',
    },
  },
  {
    dailyVolumeToken: '257787.735896037331950763',
    dailyVolumeUSD: '155967.0600944053101953825249173002',
    token: {
      name: 'GSD',
      decimals: '18',
      tradeVolumeUSD: '972255.884884070658530460574386733',
      symbol: 'GSD',
    },
  },
  {
    dailyVolumeToken: '81988.88805',
    dailyVolumeUSD: '269.2707292254950405186964365131733',
    token: {
      name: 'EverSAFUv2',
      decimals: '5',
      tradeVolumeUSD: '1562981.65431528513515149197483174',
      symbol: 'ES2',
    },
  },
  {
    dailyVolumeToken: '178807.319112671759780868',
    dailyVolumeUSD: '2852.941865029014902000960638873608',
    token: {
      name: '8PAY Network',
      decimals: '18',
      tradeVolumeUSD: '84230421.69503882667449347633118111',
      symbol: '8PAY',
    },
  },
  {
    dailyVolumeToken: '2466.66666666666',
    dailyVolumeUSD: '14.95438682126330953646941578854715',
    token: {
      name: 'Algoblocks',
      decimals: '18',
      tradeVolumeUSD: '14495397.68649648789674180112215253',
      symbol: 'ALGOBLK',
    },
  },
  {
    dailyVolumeToken: '127250442.288839076',
    dailyVolumeUSD: '0',
    token: {
      name: 'Good Luck Token☝☝⚡⚡⚡⚡',
      decimals: '9',
      tradeVolumeUSD: '305562.4864257008916129904404214123',
      symbol: 'GLT',
    },
  },
  {
    dailyVolumeToken: '555789845605.590498312083929484',
    dailyVolumeUSD: '6131.836611005474072222762193894799',
    token: {
      name: 'Vita Inu',
      decimals: '18',
      tradeVolumeUSD: '70422296.76818312012420647591319343',
      symbol: 'VINU',
    },
  },
  {
    dailyVolumeToken: '5521.5995',
    dailyVolumeUSD: '0',
    token: {
      name: 'Mythral',
      decimals: '9',
      tradeVolumeUSD: '16203.08256511595937789963832205978',
      symbol: 'MYTH',
    },
  },
  {
    dailyVolumeToken: '134487.558294067578270616',
    dailyVolumeUSD: '5308.238069520404675731929070660776',
    token: {
      name: 'Cornucopias [via ChainPort.io]',
      decimals: '18',
      tradeVolumeUSD: '124726910.9870125181240317724048629',
      symbol: 'COPI',
    },
  },
  {
    dailyVolumeToken: '68623000.618254084384325028',
    dailyVolumeUSD: '0',
    token: {
      name: 'Metaverse ALL BEST ICO',
      decimals: '18',
      tradeVolumeUSD: '3668155.596009244341764066651743075',
      symbol: 'METAALLBI',
    },
  },
  {
    dailyVolumeToken: '231071.833265852',
    dailyVolumeUSD: '162.2148092720757112935292498625952',
    token: {
      name: 'SkyLight',
      decimals: '9',
      tradeVolumeUSD: '55016.07720690895913664340853747195',
      symbol: 'SKY',
    },
  },
  {
    dailyVolumeToken: '415040.488455729541189041',
    dailyVolumeUSD: '101.6158559649832426786321439568085',
    token: {
      name: 'Metagod',
      decimals: '18',
      tradeVolumeUSD: '743933.5198458520647872030424314852',
      symbol: 'MTG',
    },
  },
  {
    dailyVolumeToken: '15331397851.907608903873427001',
    dailyVolumeUSD: '1484813.989693019327876346567600499',
    token: {
      name: 'MetaDogeAI',
      decimals: '18',
      tradeVolumeUSD: '30041197.43536941915528936743371312',
      symbol: 'METADOGEAI',
    },
  },
  {
    dailyVolumeToken: '540192.88915111061016893',
    dailyVolumeUSD: '1393.430514004018221393607549965399',
    token: {
      name: 'UNMS',
      decimals: '18',
      tradeVolumeUSD: '156872.5001420218024432041268441815',
      symbol: 'UNMS',
    },
  },
  {
    dailyVolumeToken: '5229688.225098975',
    dailyVolumeUSD: '13476.04441708021837971170253366757',
    token: {
      name: 'Alphabet',
      decimals: '9',
      tradeVolumeUSD: '2924532.173052181069359051600812439',
      symbol: 'ALT',
    },
  },
  {
    dailyVolumeToken: '3696.415558184049815554',
    dailyVolumeUSD: '236.3105906187990776357713880491449',
    token: {
      name: 'Bull Perks',
      decimals: '18',
      tradeVolumeUSD: '134647063.5934458301946315216132847',
      symbol: 'BLP',
    },
  },
  {
    dailyVolumeToken: '115208612.094508903',
    dailyVolumeUSD: '60030.18546291165100629449416016618',
    token: {
      name: 'PokerFI.Finance',
      decimals: '9',
      tradeVolumeUSD: '53949677.20144790960608517997913223',
      symbol: 'PokerFI',
    },
  },
  {
    dailyVolumeToken: '551380.369766591334804344',
    dailyVolumeUSD: '10.08655201446651710758725076009166',
    token: {
      name: 'NodyToken',
      decimals: '18',
      tradeVolumeUSD: '2688129.062899431463108164220031925',
      symbol: 'NODY',
    },
  },
  {
    dailyVolumeToken: '646362.674126130596196787',
    dailyVolumeUSD: '0',
    token: {
      name: 'Giftedhands on BSC',
      decimals: '18',
      tradeVolumeUSD: '3153278.02533754813414443908382776',
      symbol: 'GHD',
    },
  },
  {
    dailyVolumeToken: '4442533.292087324414031878',
    dailyVolumeUSD: '21.54451387467043109874463354003553',
    token: {
      name: 'Golden Sparrow V2',
      decimals: '18',
      tradeVolumeUSD: '216393.0312023257731730776197153282',
      symbol: 'GSPV2',
    },
  },
  {
    dailyVolumeToken: '92024905.92231640522070471',
    dailyVolumeUSD: '10.91384684374626357529886607282091',
    token: {
      name: 'Bonker',
      decimals: '18',
      tradeVolumeUSD: '772606.2526909748814358577172185633',
      symbol: 'BONKER',
    },
  },
  {
    dailyVolumeToken: '14582.679650416730951776',
    dailyVolumeUSD: '7985.967182079243754525565252319196',
    token: {
      name: 'PiPiXia Community DAO',
      decimals: '18',
      tradeVolumeUSD: '1336853.531435295175438521377514959',
      symbol: 'PPX',
    },
  },
  {
    dailyVolumeToken: '13483486.475044',
    dailyVolumeUSD: '2866.9382292170650746006110733798',
    token: {
      name: 'Solarix',
      decimals: '6',
      tradeVolumeUSD: '12959264.31536533246195028416202589',
      symbol: 'Solarix',
    },
  },
  {
    dailyVolumeToken: '5992681235.900888088',
    dailyVolumeUSD: '0',
    token: {
      name: 'Shibmoon',
      decimals: '9',
      tradeVolumeUSD: '36417.87950943497245788885776246467',
      symbol: 'SBM',
    },
  },
  {
    dailyVolumeToken: '3206.32510555971321809',
    dailyVolumeUSD: '0',
    token: {
      name: 'ONE',
      decimals: '18',
      tradeVolumeUSD: '1249.635734408699958742002030842488',
      symbol: 'ONE',
    },
  },
  {
    dailyVolumeToken: '50.05',
    dailyVolumeUSD: '0',
    token: {
      name: 'Meta MVRS',
      decimals: '18',
      tradeVolumeUSD: '55306711.05442172424004700042122282',
      symbol: 'MVRS',
    },
  },
  {
    dailyVolumeToken: '3016404358.865742137041720855',
    dailyVolumeUSD: '0',
    token: {
      name: 'Peto Cat',
      decimals: '18',
      tradeVolumeUSD: '109935.9698460445871342068603062893',
      symbol: 'PTC',
    },
  },
  {
    dailyVolumeToken: '329.660142214535328144',
    dailyVolumeUSD: '14.94516066266271833790057118588464',
    token: {
      name: 'dibs.money',
      decimals: '18',
      tradeVolumeUSD: '26213642.01028548953578823295218229',
      symbol: 'DIBS',
    },
  },
  {
    dailyVolumeToken: '401.517801282826020737',
    dailyVolumeUSD: '98.96874703400175821335802758779179',
    token: {
      name: 'Ontology Token',
      decimals: '18',
      tradeVolumeUSD: '588917.790607423262942209939883301',
      symbol: 'ONT',
    },
  },
  {
    dailyVolumeToken: '106824.8101',
    dailyVolumeUSD: '81.61898626682735522220541595732231',
    token: {
      name: 'Subme',
      decimals: '4',
      tradeVolumeUSD: '25358469.26248042694906807307329768',
      symbol: 'SUB',
    },
  },
  {
    dailyVolumeToken: '776776.042049199',
    dailyVolumeUSD: '0',
    token: {
      name: 'EternalPepe',
      decimals: '9',
      tradeVolumeUSD: '101.5970815453925022670116391321542',
      symbol: 'ETPE',
    },
  },
  {
    dailyVolumeToken: '361602137.9800399744392083',
    dailyVolumeUSD: '12.98318758412279548693903612734466',
    token: {
      name: 'Floki Games Token',
      decimals: '18',
      tradeVolumeUSD: '2515562.128708511938286159350794295',
      symbol: 'FLOKIG',
    },
  },
  {
    dailyVolumeToken: '17084049.235066093477544572',
    dailyVolumeUSD: '239.3132114258337694639959492057906',
    token: {
      name: 'wShib.Net',
      decimals: '18',
      tradeVolumeUSD: '4647454.267910002592951925954644385',
      symbol: 'WSHIB',
    },
  },
  {
    dailyVolumeToken: '11902.30079996984719635',
    dailyVolumeUSD: '75.62393545207789515209234187981191',
    token: {
      name: 'ZMINE Token',
      decimals: '18',
      tradeVolumeUSD: '9166007.336155803102559709351533843',
      symbol: 'ZMN',
    },
  },
  {
    dailyVolumeToken: '11730.150353536082698589',
    dailyVolumeUSD: '75.36712098017310825692931801336114',
    token: {
      name: 'POG Coin',
      decimals: '18',
      tradeVolumeUSD: '24888528.62686485506803250607014984',
      symbol: 'POG',
    },
  },
  {
    dailyVolumeToken: '221271.501456376176689944',
    dailyVolumeUSD: '0',
    token: {
      name: 'Community',
      decimals: '18',
      tradeVolumeUSD: '16.33095486271720841584144603107952',
      symbol: 'UHD',
    },
  },
  {
    dailyVolumeToken: '70.32597076011995079',
    dailyVolumeUSD: '1148.956227941130612475546829276602',
    token: {
      name: "Falcon 9's",
      decimals: '18',
      tradeVolumeUSD: '3463597.288594067071848664803831117',
      symbol: "Falcon 9's",
    },
  },
  {
    dailyVolumeToken: '113896731364.498645604430144869',
    dailyVolumeUSD: '3.206893308857929238512657903578371',
    token: {
      name: 'DOGELK',
      decimals: '18',
      tradeVolumeUSD: '220410.2103637836668992284731239852',
      symbol: 'DOGELK',
    },
  },
  {
    dailyVolumeToken: '1765.073343407718422868',
    dailyVolumeUSD: '0',
    token: {
      name: 'CRED COIN PAY',
      decimals: '18',
      tradeVolumeUSD: '412846.5210561698878803046835874453',
      symbol: 'CRED',
    },
  },
  {
    dailyVolumeToken: '1834414841537.421763079',
    dailyVolumeUSD: '0',
    token: {
      name: 'DOGGER',
      decimals: '9',
      tradeVolumeUSD: '23009.59520743591584928127195675449',
      symbol: 'DOGGER',
    },
  },
  {
    dailyVolumeToken: '5883014.368605495618229299',
    dailyVolumeUSD: '40.90439944345448628311583136127274',
    token: {
      name: 'Half Pizza',
      decimals: '18',
      tradeVolumeUSD: '55429352.65207836959405458911500844',
      symbol: 'PIZA',
    },
  },
  {
    dailyVolumeToken: '1239341.295161491',
    dailyVolumeUSD: '78.98527335914602800313796448453335',
    token: {
      name: 'Anji',
      decimals: '9',
      tradeVolumeUSD: '21598464.10480641045133632037288696',
      symbol: 'ANJI',
    },
  },
  {
    dailyVolumeToken: '38.65',
    dailyVolumeUSD: '73.58293050353716326153052516347728',
    token: {
      name: 'Waves',
      decimals: '18',
      tradeVolumeUSD: '229604.3892937346296387333261671259',
      symbol: 'WAVES',
    },
  },
  {
    dailyVolumeToken: '0',
    dailyVolumeUSD: '0',
    token: {
      name: 'AGMX',
      decimals: '18',
      tradeVolumeUSD: '1641.795633365039035711463990290126',
      symbol: 'AGMX',
    },
  },
  {
    dailyVolumeToken: '126868.278712029492594211',
    dailyVolumeUSD: '218.4426745459613107653383378530788',
    token: {
      name: 'FRZ Solar System Coin',
      decimals: '18',
      tradeVolumeUSD: '555520.3562328294954969009427410879',
      symbol: 'FRZSSCOIN',
    },
  },
  {
    dailyVolumeToken: '1089.014234482484619525',
    dailyVolumeUSD: '1.221902647489192772172741955230907',
    token: {
      name: 'NEXTYPE',
      decimals: '18',
      tradeVolumeUSD: '17268383.02799828157327580417725261',
      symbol: 'NT',
    },
  },
  {
    dailyVolumeToken: '460000000',
    dailyVolumeUSD: '177.235062822289247385695783291628',
    token: {
      name: 'Fart',
      decimals: '18',
      tradeVolumeUSD: '159175.3730664306317311180749557117',
      symbol: 'FRT',
    },
  },
  {
    dailyVolumeToken: '604.714210025619667514',
    dailyVolumeUSD: '0',
    token: {
      name: 'SPX',
      decimals: '18',
      tradeVolumeUSD: '26433.15957754064882083564538596774',
      symbol: 'SX',
    },
  },
  {
    dailyVolumeToken: '5277473.705412353773231051',
    dailyVolumeUSD: '702.4134504322475856911700419413898',
    token: {
      name: 'AndaGold',
      decimals: '18',
      tradeVolumeUSD: '323975.2405851060900670226865100621',
      symbol: 'ADG',
    },
  },
  {
    dailyVolumeToken: '1676.10948005269407885',
    dailyVolumeUSD: '1.289431018473513833407292654903382',
    token: {
      name: 'Coinracer',
      decimals: '18',
      tradeVolumeUSD: '93225575.21617826084311587361680431',
      symbol: 'CRACE',
    },
  },
  {
    dailyVolumeToken: '43425453279893.101573804040433437',
    dailyVolumeUSD: '0',
    token: {
      name: 'Yorkie Iun',
      decimals: '18',
      tradeVolumeUSD: '78535.46904743688885582716066539516',
      symbol: 'YORKIE',
    },
  },
  {
    dailyVolumeToken: '16239.391847372960907359',
    dailyVolumeUSD: '214.9255766656445912022681123692596',
    token: {
      name: 'Shill',
      decimals: '18',
      tradeVolumeUSD: '28466851.04800019623005087160174662',
      symbol: 'SHILL',
    },
  },
  {
    dailyVolumeToken: '77075.659629208339059619',
    dailyVolumeUSD: '269.9055796882271362145494154783359',
    token: {
      name: 'Superalgos',
      decimals: '18',
      tradeVolumeUSD: '1635061.704142249086022440608652745',
      symbol: 'SA',
    },
  },
  {
    dailyVolumeToken: '1119.5875450547',
    dailyVolumeUSD: '1.176451375771745840427554884093772',
    token: {
      name: 'SOMNIUM',
      decimals: '10',
      tradeVolumeUSD: '4214492.840096471706816520430322849',
      symbol: 'SOM',
    },
  },
  {
    dailyVolumeToken: '7832.378712403856347463',
    dailyVolumeUSD: '0',
    token: {
      name: 'BNCCZ',
      decimals: '18',
      tradeVolumeUSD: '126.1106225240942461603402389063904',
      symbol: 'BNCCZ',
    },
  },
  {
    dailyVolumeToken: '4605.022318278212433849',
    dailyVolumeUSD: '272.7109606818307428667801845654849',
    token: {
      name: 'My DeFi Pet Token',
      decimals: '18',
      tradeVolumeUSD: '358521928.1144818441720824954289108',
      symbol: 'DPET',
    },
  },
  {
    dailyVolumeToken: '5285754331.166327998',
    dailyVolumeUSD: '145349.2727055137492562122472323673',
    token: {
      name: 'FLOKI',
      decimals: '9',
      tradeVolumeUSD: '273482459.11719634327769858497734',
      symbol: 'FLOKI',
    },
  },
  {
    dailyVolumeToken: '1154.132700383220795385',
    dailyVolumeUSD: '1308.065694154561614697343554494997',
    token: {
      name: 'HTKG',
      decimals: '18',
      tradeVolumeUSD: '1300.963024160597442502969480905436',
      symbol: 'HTKG',
    },
  },
  {
    dailyVolumeToken: '203253382.309546284399620136',
    dailyVolumeUSD: '10327.82902788000522379191257274386',
    token: {
      name: 'Halis',
      decimals: '18',
      tradeVolumeUSD: '2196847.677823543796490889164182819',
      symbol: 'HLS',
    },
  },
  {
    dailyVolumeToken: '1035.455467606330799132',
    dailyVolumeUSD: '0',
    token: {
      name: 'Plasma',
      decimals: '18',
      tradeVolumeUSD: '29579711.30408368041966010094222144',
      symbol: 'PPAY',
    },
  },
  {
    dailyVolumeToken: '9864.622294',
    dailyVolumeUSD: '0',
    token: {
      name: 'WCW',
      decimals: '6',
      tradeVolumeUSD: '2963782.776705423358514681795242995',
      symbol: 'WCW',
    },
  },
  {
    dailyVolumeToken: '1004484194.737131075',
    dailyVolumeUSD: '2730.602136098337365088135695778794',
    token: {
      name: 'Affinity',
      decimals: '9',
      tradeVolumeUSD: '991353.5131589117164056815347705912',
      symbol: 'AFNTY',
    },
  },
  {
    dailyVolumeToken: '799793.500014099',
    dailyVolumeUSD: '100.4863759898940325521103062605952',
    token: {
      name: 'CoinLock',
      decimals: '9',
      tradeVolumeUSD: '130410.6925014750886575530524514271',
      symbol: 'CoinLock',
    },
  },
  {
    dailyVolumeToken: '217227.746107952678368171',
    dailyVolumeUSD: '1504.835724758292129682639407388699',
    token: {
      name: 'Notable',
      decimals: '18',
      tradeVolumeUSD: '9154953.03733582409251898755353491',
      symbol: 'NBL',
    },
  },
  {
    dailyVolumeToken: '50570.968472793062172052',
    dailyVolumeUSD: '530.4677452210236750777689716940982',
    token: {
      name: 'MA',
      decimals: '18',
      tradeVolumeUSD: '4278569.110403078078419111805949729',
      symbol: 'MA',
    },
  },
  {
    dailyVolumeToken: '1132952.974940781253077609',
    dailyVolumeUSD: '767.1646089873338974964414351180719',
    token: {
      name: 'FoYuan',
      decimals: '18',
      tradeVolumeUSD: '332706.4618727238545601038089589441',
      symbol: 'FOY',
    },
  },
  {
    dailyVolumeToken: '666930600.834851333075755857',
    dailyVolumeUSD: '24844367.51982766767170113365326135',
    token: {
      name: 'Sui Token',
      decimals: '18',
      tradeVolumeUSD: '3725634.402241951675043700181959527',
      symbol: 'SUI',
    },
  },
  {
    dailyVolumeToken: '100100100100100429046.742294216',
    dailyVolumeUSD: '22759.33751195078239647446938967477',
    token: {
      name: 'Betswamp',
      decimals: '9',
      tradeVolumeUSD: '54348.09823845219560275238543650044',
      symbol: 'GNT',
    },
  },
  {
    dailyVolumeToken: '196856025.689034361692951667',
    dailyVolumeUSD: '0',
    token: {
      name: 'MoneydefiSwap',
      decimals: '18',
      tradeVolumeUSD: '2284436.258166792735527410117295879',
      symbol: 'MSD',
    },
  },
  {
    dailyVolumeToken: '57.4426',
    dailyVolumeUSD: '0',
    token: {
      name: 'Wrapped SOL (Wormhole)',
      decimals: '9',
      tradeVolumeUSD: '49488672.2095206780230560044322714',
      symbol: 'SOL',
    },
  },
  {
    dailyVolumeToken: '36570.605391610342999072',
    dailyVolumeUSD: '142.2752778913673465366334959922203',
    token: {
      name: 'Wizardia Token',
      decimals: '18',
      tradeVolumeUSD: '20962287.31775959625878139909224594',
      symbol: 'WZRD',
    },
  },
  {
    dailyVolumeToken: '1884859399708.141763072',
    dailyVolumeUSD: '80.52333699787699240720448612422377',
    token: {
      name: 'SafeBull',
      decimals: '9',
      tradeVolumeUSD: '51860998.33951286009253108578837839',
      symbol: 'SAFEBULL',
    },
  },
  {
    dailyVolumeToken: '2597741.19578341',
    dailyVolumeUSD: '0',
    token: {
      name: 'BloxRealEstate',
      decimals: '8',
      tradeVolumeUSD: '0',
      symbol: 'BLOX',
    },
  },
  {
    dailyVolumeToken: '203.732407172666118825',
    dailyVolumeUSD: '5.299177084060344081494061912941446',
    token: {
      name: 'RigelToken',
      decimals: '18',
      tradeVolumeUSD: '2050024.351363612866136403199017099',
      symbol: 'RGP',
    },
  },
  {
    dailyVolumeToken: '76253762175.066593682093662869',
    dailyVolumeUSD: '324.3418247518315262370612863912208',
    token: {
      name: 'SCROOGE',
      decimals: '18',
      tradeVolumeUSD: '10676700.82741908184623224942842914',
      symbol: 'SCROOGE',
    },
  },
  {
    dailyVolumeToken: '322020.593271823222426731',
    dailyVolumeUSD: '166.2429609705111125069590718073643',
    token: {
      name: 'Genie',
      decimals: '18',
      tradeVolumeUSD: '49822296.43516455592390992136955733',
      symbol: 'GNP',
    },
  },
  {
    dailyVolumeToken: '6789.862853248285682739',
    dailyVolumeUSD: '41.21033178745320125229369273636249',
    token: {
      name: 'FortuneCash',
      decimals: '18',
      tradeVolumeUSD: '197464.3689843900370836063528932773',
      symbol: 'FortuneCash',
    },
  },
  {
    dailyVolumeToken: '1986090.513033459009762181',
    dailyVolumeUSD: '0',
    token: {
      name: 'BitcoinBR Silver',
      decimals: '18',
      tradeVolumeUSD: '108.6831891263680379582911448842755',
      symbol: 'BTCBRS',
    },
  },
  {
    dailyVolumeToken: '17817.824844591719046778',
    dailyVolumeUSD: '0',
    token: {
      name: 'IHHR Token',
      decimals: '18',
      tradeVolumeUSD: '4227.309861417447521001381014303883',
      symbol: 'IHHR',
    },
  },
  {
    dailyVolumeToken: '38236.59',
    dailyVolumeUSD: '3.499510866393598806501998332732755',
    token: {
      name: 'Pizza Coin',
      decimals: '18',
      tradeVolumeUSD: '4656617.2025189147948657032634711',
      symbol: 'PIZZA',
    },
  },
  {
    dailyVolumeToken: '133391.070989481416855014',
    dailyVolumeUSD: '255.6719965105678111852986379988348',
    token: {
      name: 'Yield Protocol [via ChainPort.io]',
      decimals: '18',
      tradeVolumeUSD: '617774.9392126680462339517970698214',
      symbol: 'YIELD',
    },
  },
  {
    dailyVolumeToken: '2317741444802871.728078673',
    dailyVolumeUSD: '1770.982952771818126532474250776573',
    token: {
      name: 'Doge Floki Coin',
      decimals: '9',
      tradeVolumeUSD: '9790759.380980181155258123843595024',
      symbol: 'DOFI',
    },
  },
  {
    dailyVolumeToken: '13.208418314754295491',
    dailyVolumeUSD: '0',
    token: {
      name: 'LCGX',
      decimals: '18',
      tradeVolumeUSD: '242408.5030920728625797325094176727',
      symbol: 'LCGX',
    },
  },
];
