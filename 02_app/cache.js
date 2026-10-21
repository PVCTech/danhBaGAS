APP.cache = 
{
    data: {
        version: '',
        danhSachLienHe: [],
        danhSachLichSu: [],
        danhSachDonVi: [],
        danhSachPhongBan: [],
        danhSachTinh: [],
        danhSachPhuongXa: [],
        danhSachXungHo: [],
        newCache: false
    },
    init: async function()
    {
        console.log('Cache init');
        let localCacheData = this.getLocal(); //obj
        if (localCacheData && typeof localCacheData !== 'object')
        {
            localStorage.removeItem(APP.config.id + '_cache');
            localCacheData = null;
        }

        if (localCacheData)
        {
            console.log('Cache init: có cache local');
            this.data = localCacheData;
            this.convertCache();
        }

        await this.update(localCacheData && localCacheData.version || '');
    },
    update: async function(localVersion)
    {
        console.log('Cache upadting..');
        let newCacheData = await APP.api.getNewCacheData(localVersion);

        if (newCacheData.newCache == false)
        {
            console.log('Not need update');
        }
        else
        {
            console.log('update to new version');
            APP.cache.data = newCacheData.data;
            this.convertCache();
        }        
        this.setLocal();
    },
    convertCache: function()
    {
        APP.cache.data.danhSachLienHe   = APP.cache.data.danhSachLienHe.map(options => new LienHe(options));        
        APP.cache.data.danhSachDonVi    = APP.cache.data.danhSachDonVi.map(options => new DonVi(options));
        APP.cache.data.danhSachPhongBan = APP.cache.data.danhSachPhongBan.map(options => new PhongBan(options));
        APP.cache.data.danhSachTinh    = APP.cache.data.danhSachTinh.map(options => new Tinh(options));
        APP.cache.data.danhSachPhuongXa    = APP.cache.data.danhSachPhuongXa.map(options => new PhuongXa(options));
        this.setDanhSachXungho();
        this.updateHistoryInfor();
    },
    setLocal: function()
    {
        localStorage.setItem(APP.config.id + '_cache', APP.cache.data);
    },
    getLocal: function()
    {
        return localStorage.getItem(APP.config.id + '_cache');
    },
    setDanhSachXungho: function()
    {
        this.data.danhSachXungHo = [
            new XungHo({Id: 0,   Ten: "",   TimKiem: ""}) ,
            new XungHo({Id: 1,   Ten: "ông",   TimKiem: "5ong"}) ,
            new XungHo({Id: 2,   Ten: "bà",   TimKiem: "6ba"}) ,
            new XungHo({Id: 3,   Ten: "bác",   TimKiem: "bac"}) ,
            new XungHo({Id: 4,   Ten: "bố",   TimKiem: "bo"}) ,
            new XungHo({Id: 5,   Ten: "mẹ",   TimKiem: "me"}) ,
            new XungHo({Id: 6,   Ten: "cô",   TimKiem: "3co"}) ,
            new XungHo({Id: 7,   Ten: "gì",   TimKiem: "gi"}) ,
            new XungHo({Id: 8,   Ten: "chú",   TimKiem: "4chu"}) ,
            new XungHo({Id: 9,   Ten: "cậu",   TimKiem: "cau"}) ,
            new XungHo({Id: 10,   Ten: "anh",   TimKiem: "1anh"}) ,
            new XungHo({Id: 11,   Ten: "chị",   TimKiem: "2chi"}) ,
            new XungHo({Id: 12,   Ten: "em",   TimKiem: "em"}) ,
            new XungHo({Id: 13,   Ten: "bạn",   TimKiem: "ban"}) ,
            new XungHo({Id: 14,   Ten: "con",   TimKiem: "con"}) ,
            new XungHo({Id: 15,   Ten: "cháu",   TimKiem: "chau"}) ,
            new XungHo({Id: 17,   Ten: "cậu (em)",   TimKiem: "cau (em)"}) ,
            new XungHo({Id: 18,   Ten: "thầy",   TimKiem: "thay"}) ,
            new XungHo({Id: 19,   Ten: "mợ",   TimKiem: "mo"})
        ];
    },
    updateHistoryInfor: function()
    {        
        APP.cache.data.danhSachLichSu.forEach(lichSu => {
            let lienHe = APP.cache.data.danhSachLienHe.find(lh => String(lh.Id) === String(lichSu.lienHeId));
            lienHe.lichSuTruyCap = {ngay:lichSu.ngay, thang:lichSu.thang, nam:lichSu.nam, 
                gio:lichSu.gio, phut:lichSu.phut, giay: lichSu.giay};
        });
    },
    clear: function()
    {
        APP.cache.data = {
            version: '',
            danhSachLienHe: [],
            danhSachLichSu: [],
            danhSachDonVi: [],
            danhSachPhongBan: [],
            danhSachTinh: [],
            danhSachPhuongXa: [],
            danhSachXungHo: [],
            newCache: false
        };
    }
};
