// ربط القنوات بـ YouTube: بيجيب آخر فيديوهات كل قناة ويعرضها في الرئيسية
(function(){
  var KEY = 'AIzaSyCf1Jy5JxAXicOjjMa-RpusehjMybwckxM'; // مقيّد بموقعنا فقط
  // [الـ handle أو الـ ID, الاسم اللي هيظهر, القسم]
  var RAW = [
    ['Watchitmena','WATCH IT','ملخصات الأفلام والمسلسلات'],
    ['FilmFeEl5amsena','فيلم في الخمسينة','ملخصات الأفلام والمسلسلات'],
    ['FilmGamed','فيلم جامد','ملخصات الأفلام والمسلسلات'],
    ['Mekawi','ملخصات مكاوي','ملخصات الأفلام والمسلسلات'],
    ['GeorgeAshraf','جورج أشرف','ملخصات الأفلام والمسلسلات'],
    ['Kokly','كوكلي','ملخصات الأفلام والمسلسلات'],
    ['MoviesRoom','موفيز روم','ملخصات الأفلام والمسلسلات'],
    ['HDDRAMA','HD DRAMA','ملخصات الأفلام والمسلسلات'],
    ['AlKholasaExtra','الخلاصة إكسترا','ملخصات الأفلام والمسلسلات'],
    ['FilmFeElBiko','فيلم في البيكو','ملخصات الأفلام والمسلسلات'],
    ['Filmtchino','فيلمتشينو','ملخصات الأفلام والمسلسلات'],
    ['FilmoAlaa','فيلمو علاء','ملخصات الأفلام والمسلسلات'],
    ['FilmCaps','Film Caps','ملخصات الأفلام والمسلسلات'],
    ['ONdrama','ON drama','ملخصات الأفلام والمسلسلات'],
    ['HashtagEnt','Hashtag Ent','ملخصات الأفلام والمسلسلات'],
    ['molakhasat7elwa','ملخصات حلوة','ملخصات الأفلام والمسلسلات'],
    ['filmalmashy','فيلم ع الماشي','ملخصات الأفلام والمسلسلات'],
    ['molakhasataflam1','ملخصات أفلام','ملخصات الأفلام والمسلسلات'],

    ['DawletElTlawa','دولة التلاوة','التلاوات القرآنية والابتهالات'],
    ['UCzU3jMTL1mFb3Ql9g-pRn9A','إسلام صبحي','التلاوات القرآنية والابتهالات'],
    ['UCB3EY4KFuHA5QCFeF4FCXJQ','مشاري راشد العفاسي','التلاوات القرآنية والابتهالات'],
    ['UCSHJkcRBcVBQ8rb1e_3w9zg','ياسر الدوسري','التلاوات القرآنية والابتهالات'],
    ['UCIiZpxs209kndl6lr34vBPw','ماهر المعيقلي','التلاوات القرآنية والابتهالات'],
    ['UCtMXCP6VpGslunPH_n9d5JQ','عبد الباسط عبد الصمد','التلاوات القرآنية والابتهالات'],
    ['UCeCrp7TiHatWJipMunlrr7g','محمد صديق المنشاوي','التلاوات القرآنية والابتهالات'],
    ['UCCE0cKhbYQJwliQeAo1Lcaw','هزاع البلوشي','التلاوات القرآنية والابتهالات'],
    ['UCJ_8KoQOwjrFF4jakh2QOsQ','أحمد النفيس','التلاوات القرآنية والابتهالات'],
    ['UCiIh1zmHHntyDH_ngg1pLfg','فارس عباد','التلاوات القرآنية والابتهالات'],
    ['UC8Mj0Pl-6HFBSo_94qEBJig','سعد الغامدي','التلاوات القرآنية والابتهالات'],
    ['UCi8-4FbrwETQ-bBQj1DL0yw','إدريس أبكر','التلاوات القرآنية والابتهالات'],
    ['UC0Yq158mUOviVNO2BiPjCAg','عبد الرحمن السديس','التلاوات القرآنية والابتهالات'],
    ['SaudAlShuraim','سعود الشريم','التلاوات القرآنية والابتهالات'],
    ['NasserAlQatami','ناصر القطامي','التلاوات القرآنية والابتهالات'],
    ['KhalidAlJaleel','خالد الجليل','التلاوات القرآنية والابتهالات'],
    ['RaadAlKurdi','رعد الكردي','التلاوات القرآنية والابتهالات'],
    ['WadeeAlYamani','وديع اليمني','التلاوات القرآنية والابتهالات'],
    ['AbdulrahmanMossad','عبد الرحمن مسعد','التلاوات القرآنية والابتهالات'],
    ['SherifMostafa','شريف مصطفى','التلاوات القرآنية والابتهالات'],
    ['OmarHishamAlArabi','عمر هشام العربي','التلاوات القرآنية والابتهالات'],
    ['MohammedAlLuhaidan','محمد اللحيدان','التلاوات القرآنية والابتهالات'],
    ['BandarBaleelah','بندر بليلة','التلاوات القرآنية والابتهالات'],
    ['AlHussary','محمود خليل الحصري','التلاوات القرآنية والابتهالات'],
    ['MustafaIsmail','مصطفى إسماعيل','التلاوات القرآنية والابتهالات'],
    ['MohamedRefaat','محمد رفعت','التلاوات القرآنية والابتهالات'],
    ['AlmajdQuran','قناة المجد للقرآن الكريم','التلاوات القرآنية والابتهالات'],
    ['SaudiQuranTv','القرآن الكريم (بث من الحرم)','التلاوات القرآنية والابتهالات'],
    ['UCkdyjOzo6jkrM2tvC4pnx7A','أجمل تلاوات القرآن الكريم','التلاوات القرآنية والابتهالات'],
    ['Quran_Ruqyah_Live','الرقية الشرعية مباشر','التلاوات القرآنية والابتهالات'],

    ['JoeHaTTab','جو حطاب','السفر والمغامرات والرحلات'],
    ['UC5yl8uedGsQBBGn3B7IF0eA','ابن حتوتة','السفر والمغامرات والرحلات'],
    ['KareemElsayed','كريم السيد','السفر والمغامرات والرحلات'],
    ['OmarFarooq','عمر فاروق','السفر والمغامرات والرحلات'],
    ['IbnHattutaTravels','قاسم الحتو','السفر والمغامرات والرحلات'],
    ['Khabib','خبيب','السفر والمغامرات والرحلات'],
    ['UCTQFFTSqy5VCmAYirXXGiAg','رحاليستا','السفر والمغامرات والرحلات'],
    ['UC_pWMQsAiI6cxSs6E9cOFxA','قاسم حداد','السفر والمغامرات والرحلات'],
    ['UCsMwmbSjoNF-NWFp5Zs7QIw','سعود الكندري','السفر والمغامرات والرحلات'],
    ['Haggagovic','حجاجوفيتش','السفر والمغامرات والرحلات'],
    ['AliGhozlan','علي غزلان','السفر والمغامرات والرحلات'],
    ['AbdullahAlJuma','عبد الله الجمعة','السفر والمغامرات والرحلات'],
    ['AhmedElBadawy','أحمد البدوي','السفر والمغامرات والرحلات'],
    ['MahmoudSarhan','محمود سرحان','السفر والمغامرات والرحلات'],
    ['UCEpr3HC0OmIPUQ-2XbTELPQ','سافر مع عزة','السفر والمغامرات والرحلات'],
    ['UC9KzLTLzh1intBwIulPQKlA','يوسف عهدي','السفر والمغامرات والرحلات'],
    ['RouguiAdventures','مغامرات الروقي','السفر والمغامرات والرحلات'],
    ['AbdullahHijazi','الحياة في أمريكا','السفر والمغامرات والرحلات'],
    ['UC5GjfpCXKB4D3FkyZjHRySw','رحلة 4K','السفر والمغامرات والرحلات'],
    ['UCEAalZ7fWFFLj4Y4AKSe4RA','الصوري','السفر والمغامرات والرحلات'],
    ['UC3Vw9hV8YYrpksbXK2xz3gg','محمد عبد اللطيف','السفر والمغامرات والرحلات'],
    ['UChgoWndUM5i99N_i-cxZYOA','بلال الحسيني','السفر والمغامرات والرحلات'],
    ['UCZoCGfPJOfRDSYNof4tvWiA','محمد حجازي','السفر والمغامرات والرحلات'],
    ['AlJazeeraTravel','برنامج المسافر (الجزيرة)','السفر والمغامرات والرحلات'],

    ['UCF7IOceliTr_6HQfPrUBwZw','الشيف شاهين','الطبخ والأكل وتجارب المطاعم'],
    ['UCSaq5NekrOZKCB_DyS734jA','آية حبيب','الطبخ والأكل وتجارب المطاعم'],
    ['UCqI_84SQbgyAk9g-ysj77gQ','أبو جوليا','الطبخ والأكل وتجارب المطاعم'],
    ['UC7OAYDUY75By8RUtxrrQzEQ','نادية السيد','الطبخ والأكل وتجارب المطاعم'],
    ['UCZ6XRv3XHbPia5fwz0Uq8Xw','الشيف عمر','الطبخ والأكل وتجارب المطاعم'],
    ['UClvCJMfEwg_hQlnFzJoZtSQ','هبة أبو الخير','الطبخ والأكل وتجارب المطاعم'],
    ['FatmaAbuHaty','فاطمة أبو حاتي','الطبخ والأكل وتجارب المطاعم'],
    ['MarwaElShafei','مروة الشافعي','الطبخ والأكل وتجارب المطاعم'],
    ['UCVXD2kNki3rfLMhF8uNIcBQ','أم وليد','الطبخ والأكل وتجارب المطاعم'],
    ['BasilElhaj','باسل الحاج','الطبخ والأكل وتجارب المطاعم'],
    ['AmrSherif','عمرو شريف','الطبخ والأكل وتجارب المطاعم'],
    ['ElAkeel','الأكيل','الطبخ والأكل وتجارب المطاعم'],
    ['UCAeYxQ-q5LngmtsCb8aVGuw','شيف بلال عمر','الطبخ والأكل وتجارب المطاعم'],
    ['ManalAlalem','منال العالم','الطبخ والأكل وتجارب المطاعم'],
    ['ChefHassan','شيف حسن','الطبخ والأكل وتجارب المطاعم'],
    ['ChefElSherbiny','شيف الشربيني','الطبخ والأكل وتجارب المطاعم'],
    ['SallyFouad','سالي فؤاد','الطبخ والأكل وتجارب المطاعم'],
    ['NaglaaElSharshaby','نجلاء الشرشابي','الطبخ والأكل وتجارب المطاعم'],
    ['RabahMuhammad','رباح محمد','الطبخ والأكل وتجارب المطاعم'],
    ['AtyabAlwasafat','أطيب الوصفات','الطبخ والأكل وتجارب المطاعم'],
    ['UCCjZrjq78BURV1OpxhBSS0A','مطبخ سمر','الطبخ والأكل وتجارب المطاعم'],
    ['UCRWtn__Vdk2FTet2IKWkYVQ','حبي حياتك ودلعي مطبخك','الطبخ والأكل وتجارب المطاعم'],
    ['UCUnkkmSbzuPzMlUDq-rxsfQ','أكل بيتي','الطبخ والأكل وتجارب المطاعم'],
    ['UCxJFfPJKILau17kwxvRSn6w','Food Rate','الطبخ والأكل وتجارب المطاعم'],
    ['MyCooking','طبخاتي','الطبخ والأكل وتجارب المطاعم'],

    ['arabgt','عرب جي تي','السيارات والمحركات'],
    ['HasanKutbi','حسن كتبي','السيارات والمحركات'],
    ['UCqLFMEtmRNcyMmWqaqg70tA','carwow العربية','السيارات والمحركات'],
    ['UC5GIkqRHM3lLxlnT1B2E_2g','حسن المسيباوي','السيارات والمحركات'],
    ['UCYKNBblWyGPJv_4-cjp8Oaw','Motorsport MENA','السيارات والمحركات'],
    ['SaudiAuto','سعودي أوتو','السيارات والمحركات'],
    ['AlmurabaNet','المربع نت','السيارات والمحركات'],
    ['StriveME','سترايف مي','السيارات والمحركات'],
    ['FahadAlwakala','فهد الوكالة','السيارات والمحركات'],
    ['Sayartak','سيارتك مع عبد الحق','السيارات والمحركات'],
    ['MahmoudKhairy','محمود خيري','السيارات والمحركات'],
    ['AhmedElWakeel','أحمد الوكيل','السيارات والمحركات'],
    ['TamerBashir','تامر بشير','السيارات والمحركات'],
    ['KareemDeeb','كريم ديب','السيارات والمحركات'],
    ['SuhaibShashaa','صهيب شعشاعة','السيارات والمحركات'],
    ['UCiNZzcyLdOr_C3sBmWa1dIQ','شام أوتو','السيارات والمحركات'],
    ['UCvEEdwY-FzpwUtAswIRy-nw','سيارات السعودية','السيارات والمحركات'],
    ['UCTJGQndLkMWKcpHQ1KBphtw','أوتو كاتش مع هاني داغستاني','السيارات والمحركات'],
    ['UCMTyVP02xzFu6ntPuMPstBQ','المهندس حسن','السيارات والمحركات'],
    ['iraq_cars1','سيارات العراق','السيارات والمحركات'],
    ['car_vlogs2018','نظرة في عالم السيارات','السيارات والمحركات'],
    ['reviewtube74','ReviewTUBE','السيارات والمحركات'],

    ['AnimeForAllPlus','أنمي للجميع','ملخصات الأنمي'],
    ['HERKLIZ','هركليز','ملخصات الأنمي'],
    ['Bta3Anime','بتاع انمي','ملخصات الأنمي'],
    ['SupeRPrestigE','SupeR PrestigE','ملخصات الأنمي'],
    ['AnimeTrack','Anime Track','ملخصات الأنمي'],
    ['UCRRkWJprAlxsJPzhLCG5ptg','Anime Room Max','ملخصات الأنمي'],
    ['molakhsanime','ملخص أنمي','ملخصات الأنمي'],
    ['3alam-al-anime','عالم الأنمي','ملخصات الأنمي'],

    ['UCGp7eD-NbJj1TqZAIQP6rKw','محمد عدنان','الكورة والرياضة'],
    ['UC0j1bJUOS_utB8q618YJ5Bw','ارزع - Erza3','الكورة والرياضة'],
    ['UC1UYd7UAzwOPIKpjNRkho3A','الهستيري','الكورة والرياضة'],
    ['AmrNasouhy','صباحو كورة','الكورة والرياضة'],
    ['MamdouhNasrAllah','ممدوح نصر الله (المدفع)','الكورة والرياضة'],
    ['UCRKzsmHJmegYjgMJQ0IUanw','سيلو سبورت','الكورة والرياضة'],
    ['UCohqCse2YII12V8bgC1k5Ew','عبد الله أشرف','الكورة والرياضة'],
    ['UCMqHY20IFCvAfRNE_IfM11A','الكرة وكريم','الكورة والرياضة'],
    ['UCt_YDnQzwJykMgTfXC37Imw','أحمد معطي','الكورة والرياضة'],
    ['UCKg6BySjyqNNncv1noPZ_FA','تكتيكات كرة القدم','الكورة والرياضة'],
    ['UCcJjpOeSWPRIs_LqbSLzYkQ','مان تو مان','الكورة والرياضة'],
    ['UCMCfh46Kpix5uQL66qGxwSg','فنتاكتك','الكورة والرياضة'],
    ['UCeGMC4FMBK36j6ANER_GfxA','الكوتش','الكورة والرياضة'],
    ['UCE2ynpwa090S3JNQHcMcfZQ','كورة × تكتيك','الكورة والرياضة'],
    ['UC7N7DXktAhFpRpYb3B6Hnxg','يلا كورة','الكورة والرياضة'],
    ['UCehv5jSvFUABYVuVTcWOugQ','في الجول','الكورة والرياضة'],
    ['beINSPORTS','beIN SPORTS العربية','الكورة والرياضة'],
    ['UC8_NcKfba7mBuKCyUiun3jQ','SSC الرياضية','الكورة والرياضة'],

    ['movies-v8b','الأفلام والمنوعات الهادفة','المحتوى الديني والشبابي الهادف'],
    ['YoussefElkott','يوسف القط','المحتوى الديني والشبابي الهادف'],
    ['UCp479sePW_R7NM8AhPyUDoQ','أمير منير','المحتوى الديني والشبابي الهادف'],
    ['UC2qcjzOEX3lxE73cyroWdiw','بودكاست وعي','المحتوى الديني والشبابي الهادف'],
    ['UC562PEzdpMULIOtinS79mzw','شريف علي','المحتوى الديني والشبابي الهادف'],
    ['UCAPzspa_3QnQwk56Sv-qm-Q','الشيخ أحمد عامر','المحتوى الديني والشبابي الهادف'],
    ['IslamMamdouh','إسلام ممدوح','المحتوى الديني والشبابي الهادف'],
    ['AmirMirza','أمير ميرزا','المحتوى الديني والشبابي الهادف'],
    ['MostafaHosny','مصطفى حسني','المحتوى الديني والشبابي الهادف'],
    ['UCG6w3_CMVYMLnx9j6XKBLDw','مشاري الخراز','المحتوى الديني والشبابي الهادف'],
    ['ElShaarawy','الشعراوي','المحتوى الديني والشبابي الهادف'],
    ['Nabulsi.Islamic','د. محمد راتب النابلسي','المحتوى الديني والشبابي الهادف'],
    ['othmanalkhamees','عثمان الخميس','المحتوى الديني والشبابي الهادف'],
    ['SalehAlmoghamsy','صالح المغامسي','المحتوى الديني والشبابي الهادف'],
    ['UCUkUDlhFG10P-CEJq7ED7JA','د. حازم شومان','المحتوى الديني والشبابي الهادف'],
    ['UCY8WKOYoGxPWfokI1RMRp5w','سمير مصطفى','المحتوى الديني والشبابي الهادف'],
    ['UCbuKuJHe7bM9maIA18wwg2Q','محمد الغليظ','المحتوى الديني والشبابي الهادف'],
    ['UCEBakrmegONj8KQmzbpkmeg','علاء حامد','المحتوى الديني والشبابي الهادف'],
    ['UCpBd9nrwei6IM7V8CyNftYA','ياسر ممدوح','المحتوى الديني والشبابي الهادف'],
    ['UCfQDF-gVpiSkuKeRtSEG5Kg','د. بدر المشاري','المحتوى الديني والشبابي الهادف'],
    ['UC5lvbLoyYcWeHpkO4r_SARw','سعد العتيق','المحتوى الديني والشبابي الهادف'],
    ['UC6MahKV9UFtwLlkKKz1dIYA','د. عمر عبد الكافي','المحتوى الديني والشبابي الهادف'],
    ['UCMRG4yULVQY2MYUhsmJnU3A','منصور السالمي','المحتوى الديني والشبابي الهادف'],
    ['SheikhKeshk','عبد الحميد كشك','المحتوى الديني والشبابي الهادف'],
    ['ZadTvChannel','زاد للإنتاج الإعلامي','المحتوى الديني والشبابي الهادف'],

    ['a5drcom','أخضر (تلخيص الكتب)','ملخصات الكتب والروايات'],
    ['Dupamicaffeine','دوباميكافين','ملخصات الكتب والروايات'],
    ['JeelYaqra','جيل يقرأ','ملخصات الكتب والروايات'],

    ['AlJazeeraDocumentary','الجزيرة الوثائقية','الوثائقيات والقصص الواقعية'],
    ['AsharqDocumentary','الشرق الوثائقية','الوثائقيات والقصص الواقعية'],
    ['NatGeoAbuDhabi','ناشونال جيوغرافيك أبوظبي','الوثائقيات والقصص الواقعية'],
    ['FaresAshour','فارس عاشور','الوثائقيات والقصص الواقعية'],
    ['AboTalalAlHamrani','أبو طلال الحمراني','الوثائقيات والقصص الواقعية'],
    ['Koil','كويلي','الوثائقيات والقصص الواقعية'],

    ['AlDaheeh','الدحيح','الثقافة والعلوم والتاريخ'],
    ['Tarikhstan','تاريخستان','الثقافة والعلوم والتاريخ'],
    ['Share3El3loom','شارع العلوم','الثقافة والعلوم والتاريخ'],
    ['Elesptalia','الاسبتالية','الثقافة والعلوم والتاريخ'],
    ['Egychology','إيجيكولوجي','الثقافة والعلوم والتاريخ'],
    ['3shwa2yat','عشوائيات','الثقافة والعلوم والتاريخ'],
    ['NidhalGuessoum','نضال قسوم','الثقافة والعلوم والتاريخ'],
    ['newmedia_life','نيو ميديا لايف','الثقافة والعلوم والتاريخ'],

    ['UCwjLh640nGXSGa9iHRS31ag','بودكاست فنجان','البودكاست العربي'],
    ['BidonWaraq','بودكاست بدون ورق','البودكاست العربي'],
    ['ABtalks','ABtalks','البودكاست العربي'],
    ['ArikaPodcast','بودكاست أريكة','البودكاست العربي'],
    ['Ma3KamelEhtyaty','مع كامل احتياطي','البودكاست العربي'],
    ['UCzcagWR2L7_k6f8yDY_FIFA','الصندوق الأسود','البودكاست العربي'],
    ['UCxJ35BUpX-xuXNZIHLwcfXg','بزنس بالعربي','البودكاست العربي'],
    ['AbajoraPodcast','بودكاست أبجورة','البودكاست العربي'],

    ['ElzeroWebSchool','الزيرو ويب سكول','البرمجة والتكنولوجيا وتطوير الذات'],
    ['DroosOnline4u','دروس أونلاين','البرمجة والتكنولوجيا وتطوير الذات'],
    ['YehiaRadwan','يحيى رضوان','البرمجة والتكنولوجيا وتطوير الذات'],
    ['AndroidBasha','أندرويد باشا','البرمجة والتكنولوجيا وتطوير الذات'],
    ['FaisalAlsaif','فيصل السيف','البرمجة والتكنولوجيا وتطوير الذات'],
    ['AliMuhammadAli','علي محمد علي','البرمجة والتكنولوجيا وتطوير الذات'],

    ['BanderitaX','بندر إكس','الألعاب والجيمينج'],
    ['AboFlah','أبو فلة','الألعاب والجيمينج'],
    ['SHoNgxBoNg','تحديات شونق بونق','الألعاب والجيمينج'],
    ['Topz','توبز','الألعاب والجيمينج'],
    ['TeamFalconsGG','فالكونز','الألعاب والجيمينج'],

    ['Alghafri','أحمد الغافري','المنوعات والترفيه'],
    ['BarryTube','باري تيوب','المنوعات والترفيه'],
    ['AhmedAburob','أحمد أبو الرب','المنوعات والترفيه'],
    ['FahadSal','فهد سال','المنوعات والترفيه'],
    ['Aziz','عزيز','المنوعات والترفيه'],
    ['MrShnb','مستر شنب','المنوعات والترفيه'],
    ['GhaithMarwan','غيث مروان','المنوعات والترفيه'],
    ['WessamQutob','وسام قطب','المنوعات والترفيه'],
    ['AnasElshayib','أنس الشايب','المنوعات والترفيه'],
    ['AbdallahAlawneh','عبد الله العلاونة','المنوعات والترفيه'],
    ['d7oomy999','دحومي 999','المنوعات والترفيه'],
    ['S7S','شؤون صغيرة','المنوعات والترفيه'],
    ['MahmoudIsmailTV','محمود إسماعيل','المنوعات والترفيه'],

    ['MokhbirEqtisadi','المخبر الاقتصادي+','الأخبار والاقتصاد والتحليل'],
    ['ajpluskibreet','AJ+ كبريت','الأخبار والاقتصاد والتحليل'],
    ['summaryegypt','ملخصات الأخبار','الأخبار والاقتصاد والتحليل'],
    ['AlarabyTube','العربي تيوب','الأخبار والاقتصاد والتحليل'],
    ['AlarabyTv_News','العربي - أخبار','الأخبار والاقتصاد والتحليل'],
    ['AsharqNews','الشرق للأخبار','الأخبار والاقتصاد والتحليل'],
    ['BBCNewsArabic','BBC News عربي','الأخبار والاقتصاد والتحليل'],
    ['AlQaheraNews','القاهرة الإخبارية','الأخبار والاقتصاد والتحليل'],
    ['aljazeera','الجزيرة','الأخبار والاقتصاد والتحليل'],
    ['SkyNewsArabia','سكاي نيوز عربية','الأخبار والاقتصاد والتحليل'],
    ['CNNEconomic','CNN الاقتصادية','الأخبار والاقتصاد والتحليل'],
    ['AsharqBusiness','اقتصاد الشرق مع بلومبرغ','الأخبار والاقتصاد والتحليل']
  ];

  // نشيل أي قناة مكررة (نفس الـ handle أو الـ ID) ونحتفظ بأول ظهور
  var CH = RAW.filter(function(c, i){
    return RAW.findIndex(function(x){ return x[0] === c[0]; }) === i;
  });

  var HOURS = 12, PARTIAL_HOURS = 1, YT = [], base = null, FAILED = [];

  function wrapped(){ return base().concat(YT); }
  setInterval(function(){ if(window.vids !== wrapped){ base = window.vids; window.vids = wrapped; } }, 300);

  function api(path){
    return fetch('https://www.googleapis.com/youtube/v3/' + path + '&key=' + KEY).then(function(r){ return r.json(); });
  }
  function uploadsOf(c){
    // لو عندنا ID قناة (يبدأ بـ UC) نطلع قايمة الرفع منه مباشرة، من غير خطوة زيادة
    if(c[0].indexOf('UC') === 0 && c[0].length === 24){
      return Promise.resolve('UU' + c[0].slice(2));
    }
    return api('channels?part=contentDetails&forHandle=' + encodeURIComponent('@' + c[0])).then(function(j){
      var up = j.items && j.items[0] && j.items[0].contentDetails.relatedPlaylists.uploads;
      if(!up){ throw new Error(j.error ? j.error.message : 'القناة مش موجودة'); }
      return up;
    });
  }
  function load(c, tries){
    return uploadsOf(c).then(function(up){
      return api('playlistItems?part=snippet&maxResults=8&playlistId=' + up).then(function(p){
        if(p.error){ throw new Error(p.error.message); }
        var v = [];
        (p.items || []).forEach(function(it){
          var s = it.snippet, id = s.resourceId && s.resourceId.videoId;
          if(!id || s.title === 'Private video' || s.title === 'Deleted video') return;
          v.push({id:'yt-' + id, mid:null, title:s.title, ch:c[1],
            date:(s.publishedAt || '').slice(0,10).replace(/-/g,'/'), vid:id,
            bg:'url(https://i.ytimg.com/vi/' + id + '/mqdefault.jpg) center/cover'});
        });
        return v.length ? {name:c[1], sec:c[2], v:v} : null;
      });
    }).catch(function(e){
      if(tries < 1) return load(c, tries + 1);
      FAILED.push(c[1]);
      console.warn('YouTube: ما اتحملتش', c[0], e && e.message);
      return null;
    });
  }
  function apply(res){
    var chans = [];
    YT.length = 0;
    res.forEach(function(r){
      if(!r) return;
      chans.push({name:r.name, ini:r.name.charAt(0), blurb:r.sec});
      r.v.forEach(function(x){ YT.push(x); });
    });
    if(chans.length){
      window.CHANNELS = chans;
      try{ if(window.S && S.screen === 'home') render(); }catch(e){}
    }
  }
  var cached = null;
  try{ cached = JSON.parse(localStorage.getItem('ytc3') || 'null'); }catch(e){}
  if(cached){
    var ttl = (cached.f ? PARTIAL_HOURS : HOURS) * 3600000;
    if(Date.now() - cached.t < ttl){ apply(cached.d); return; }
  }
  Promise.all(CH.map(function(c){ return load(c, 0); })).then(function(res){
    apply(res);
    try{ localStorage.setItem('ytc3', JSON.stringify({t:Date.now(), d:res, f:FAILED.length})); }catch(e){}
  });
})();
