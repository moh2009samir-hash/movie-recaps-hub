// Club Stream: ربط القنوات بـ YouTube + الواجهة الجديدة
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

  var GROUP = {
    'ملخصات الأفلام والمسلسلات':'الأفلام والمسلسلات',
    'الكورة والرياضة':'الرياضة',
    'الألعاب والجيمينج':'الألعاب',
    'ملخصات الأنمي':'الأنمي',
    'البرمجة والتكنولوجيا وتطوير الذات':'التقنية',
    'الثقافة والعلوم والتاريخ':'العلوم'
  };
  var MAIN = ['الأفلام والمسلسلات','الرياضة','الألعاب','الأنمي','التقنية','العلوم'];
  function groupOf(sec){ return GROUP[sec] || 'المزيد'; }

  var HOURS = 12, PARTIAL_HOURS = 1, YT = [], base = null, FAILED = [], CHANS = [], CHF = 'الكل';

  // ---------- الستايل ----------
  var css = '' +
    '.cs-chips{display:flex;gap:8px;overflow-x:auto;padding:4px 0 14px}' +
    '.cs-chip{flex:none;border:1px solid #2a2a33;background:#19191F;color:#ddd;border-radius:20px;padding:7px 14px;font-size:14px;cursor:pointer}' +
    '.cs-chip.on{background:#7C3AED;border-color:#7C3AED;color:#fff}' +
    '.cs-cats{display:grid;grid-template-columns:1fr 1fr;gap:12px}' +
    '.cs-cat{border:1px solid #2a2a33;background:#19191F;color:#fff;border-radius:14px;padding:22px 12px;text-align:center;cursor:pointer;display:flex;flex-direction:column;gap:6px}' +
    '.cs-cat b{font-size:16px}.cs-cat small{color:#9a9aa5;font-size:13px}' +
    '.cs-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px 10px}' +
    '.cs-ch{display:flex;flex-direction:column;align-items:center;gap:8px;text-decoration:none;color:#fff;font-size:12px;text-align:center}' +
    '.cs-ch img,.cs-ch span{width:72px;height:72px;border-radius:50%;object-fit:cover;background:#E50914;color:#fff;display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700}' +
    '.cs-ch b{font-weight:600;line-height:1.3}' +
    '.cs-grid2{display:grid;grid-template-columns:1fr 1fr;gap:12px}' +
    '.cs-back{background:#19191F;color:#fff;border:1px solid #2a2a33;border-radius:10px;padding:8px 14px;margin:6px 0 10px;cursor:pointer}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  function wrapped(){ return base().concat(YT); }
  setInterval(function(){ if(window.vids !== wrapped){ base = window.vids; window.vids = wrapped; } }, 300);

  function api(path){
    return fetch('https://www.googleapis.com/youtube/v3/' + path + '&key=' + KEY).then(function(r){ return r.json(); });
  }
  function info(c){
    var isId = c[0].indexOf('UC') === 0 && c[0].length === 24;
    var q = isId ? 'id=' + c[0] : 'forHandle=' + encodeURIComponent('@' + c[0]);
    return api('channels?part=snippet,contentDetails&' + q).then(function(j){
      var it = j.items && j.items[0];
      if(!it){ throw new Error(j.error ? j.error.message : 'القناة مش موجودة'); }
      var t = it.snippet.thumbnails || {};
      return {
        up: it.contentDetails.relatedPlaylists.uploads,
        img: ((t.medium || t.default || {}).url) || '',
        url: isId ? 'https://www.youtube.com/channel/' + c[0] : 'https://www.youtube.com/@' + c[0]
      };
    });
  }
  function load(c, tries){
    return info(c).then(function(inf){
      return api('playlistItems?part=snippet&maxResults=8&playlistId=' + inf.up).then(function(p){
        if(p.error){ throw new Error(p.error.message); }
        var v = [];
        (p.items || []).forEach(function(it){
          var s = it.snippet, id = s.resourceId && s.resourceId.videoId;
          if(!id || s.title === 'Private video' || s.title === 'Deleted video') return;
          v.push({id:'yt-' + id, mid:null, title:s.title, ch:c[1], grp:groupOf(c[2]),
            date:(s.publishedAt || '').slice(0,10).replace(/-/g,'/'), vid:id,
            bg:'url(https://i.ytimg.com/vi/' + id + '/mqdefault.jpg) center/cover'});
        });
        if(!v.length) return null;
        return {name:c[1], ini:c[1].charAt(0), img:inf.img, url:inf.url, sec:c[2], v:v};
      });
    }).catch(function(e){
      if(tries < 1) return load(c, tries + 1);
      FAILED.push(c[1]);
      console.warn('YouTube: ما اتحملتش', c[0], e && e.message);
      return null;
    });
  }
  function byDate(a, b){ return a.date < b.date ? 1 : a.date > b.date ? -1 : 0; }

  function build(res){
    CHANS = [];
    YT.length = 0;
    res.forEach(function(r){
      if(!r) return;
      CHANS.push({name:r.name, ini:r.ini, img:r.img, url:r.url, sec:r.sec, group:groupOf(r.sec)});
      r.v.forEach(function(x){ YT.push(x); });
    });
    YT.sort(byDate);
    window.CHANNELS = CHANS.map(function(c){ return {name:c.name, ini:c.ini, blurb:c.group}; });
  }

  // ---------- الرئيسية ----------
  SCR.home = function(){
    var movies = window.vids().filter(function(v){ return String(v.id).indexOf('yt-') !== 0; });
    var s = '';
    if(movies.length) s += sec('أحدث الملخصات', row(movies.slice(0, 8), vcard));
    if(YT.length) s += sec('أحدث القيديوهات', row(YT.slice(0, 12), vcard));
    MAIN.forEach(function(g){
      var vs = YT.filter(function(x){ return x.grp === g; }).slice(0, 12);
      if(vs.length) s += sec(esc(g), row(vs, vcard));
    });
    return s;
  };

  // ---------- الأقسام ----------
  window.csOpen = function(g){ CHF = g; S.screen = 'channels'; render(); };
  window.csChip = function(g){ CHF = g; render(); };
  SCR.cats = function(){
    var cards = MAIN.concat(['المزيد']).map(function(g){
      var n = CHANS.filter(function(c){ return c.group === g; }).length;
      return '<button class="cs-cat" onclick="csOpen(\'' + g + '\')"><b>' + esc(g) + '</b><small>' + n + ' قناة</small></button>';
    }).join('');
    return sec('الأقسام', '<div class="cs-cats">' + cards + '</div>');
  };

  // ---------- القنوات ----------
  SCR.channels = function(){
    var chips = ['الكل'].concat(MAIN, ['المزيد']).map(function(g){
      return '<button class="cs-chip' + (CHF === g ? ' on' : '') + '" onclick="csChip(\'' + g + '\')">' + esc(g) + '</button>';
    }).join('');
    var list = CHANS.filter(function(c){ return CHF === 'الكل' || c.group === CHF; });
    var grid = list.map(function(c){
      var av = c.img ? '<img src="' + c.img + '" alt="">' : '<span>' + esc(c.ini) + '</span>';
      return '<a class="cs-ch" href="' + c.url + '" target="_blank" rel="noopener">' + av + '<b>' + esc(c.name) + '</b></a>';
    }).join('');
    if(!CHANS.length) return '<p style="text-align:center;color:#9a9aa5">جاري تحميل القنوات...</p>';
    return '<div class="cs-chips">' + chips + '</div><div class="cs-grid">' + grid + '</div>';
  };

  // ---------- الأنواع (بتتعرف من العنوان أو بيانات Firestore تلقائياً) ----------
  var GENRE_KEYS = {
    'أكشن': ['أكشن','اكشن','action'],
    'كوميدي': ['كوميدي','كوميديا','comedy','مضحك'],
    'دراما': ['دراما','drama'],
    'رعب': ['رعب','horror','مرعب'],
    'خيال علمي': ['خيال علمي','sci-fi','sci fi','science fiction'],
    'خيال': ['خيال','fantasy'],
    'رومانسي': ['رومانسي','رومانسية','romance','romantic'],
    'جريمة': ['جريمة','crime','بوليسي','غموض'],
    'تشويق': ['تشويق','thriller','إثارة'],
    'كرتون': ['كرتون','animation','أنمي','anime']
  };
  function matchGenre(v, g){
    var keys = GENRE_KEYS[g] || [g];
    var hay = String(v.title || '');
    if(String(v.id).indexOf('yt-') !== 0){
      // فيلم من Firestore: بنقرأ الحقول اللي اسمها فيه نوع/تصنيف
      (window.MOVIES || []).forEach(function(m){
        if(m && m.id === v.mid){
          Object.keys(m).forEach(function(k){
            if(/نوع|genre|cat|تصنيف/i.test(k)) hay += ' ' + String(m[k]);
          });
        }
      });
    }
    hay = hay.toLowerCase();
    return keys.some(function(k){ return hay.indexOf(k.toLowerCase()) >= 0; });
  }
  window.pickCat = function(c){ S.cat = c; S.q = ''; S.screen = 'genre'; render(); };
  SCR.genre = function(){
    var list = window.vids().filter(function(v){ return matchGenre(v, S.cat); });
    var body = list.length
      ? '<div class="cs-grid2">' + list.map(vcard).join('') + '</div>'
      : '<p style="text-align:center;color:#9a9aa5;padding:30px 0">مفيش فيديوهات في نوع ' + esc(S.cat) + ' لسه</p>';
    return '<button class="cs-back" onclick="go(\'home\')">رجوع</button>' + sec(esc(S.cat), body);
  };

  // ---------- التحميل والكاش ----------
  function apply(res){
    build(res);
    try{ render(); }catch(e){}
  }
  var cached = null;
  try{ cached = JSON.parse(localStorage.getItem('ytc5') || 'null'); }catch(e){}
  if(cached){
    var ttl = (cached.f ? PARTIAL_HOURS : HOURS) * 3600000;
    if(Date.now() - cached.t < ttl){ apply(cached.d); return; }
  }
  var seen = [];
  var UNIQUE = RAW.filter(function(c){
    if(seen.indexOf(c[0]) >= 0) return false;
    seen.push(c[0]); return true;
  });
  Promise.all(UNIQUE.map(function(c){ return load(c, 0); })).then(function(res){
    apply(res);
    try{ localStorage.setItem('ytc5', JSON.stringify({t:Date.now(), d:res, f:FAILED.length})); }catch(e){}
  });
})();
