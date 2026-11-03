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
        let localCacheData = this.getLocal();
        if (localCacheData)
        {
            try
            {
                localCacheData = JSON.parse(localCacheData);
                if (!localCacheData || typeof localCacheData !== 'object')
                {
                    throw new Error('Dữ liệu cache không hợp lệ');
                }
            }
            catch (error)
            {
                console.error('Không thể đọc cache liên hệ:', error);
                localStorage.removeItem(APP.config.id + '_cache');
                localCacheData = null;
            }
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
        localStorage.setItem(APP.config.id + '_cache', JSON.stringify(APP.cache.data));
    },
    getLocal: function()
    {
        return localStorage.getItem(APP.config.id + '_cache');
    },
    setDanhSachXungho: function()
    {
        this.data.danhSachXungHo = [
            new XungHo({id: 0,   ten: "",   timKiem: ""}) ,
            new XungHo({id: 1,   ten: "ông",   timKiem: "5ong"}) ,
            new XungHo({id: 2,   ten: "bà",   timKiem: "6ba"}) ,
            new XungHo({id: 3,   ten: "bác",   timKiem: "bac"}) ,
            new XungHo({id: 4,   ten: "bố",   timKiem: "bo"}) ,
            new XungHo({id: 5,   ten: "mẹ",   timKiem: "me"}) ,
            new XungHo({id: 6,   ten: "cô",   timKiem: "3co"}) ,
            new XungHo({id: 7,   ten: "gì",   timKiem: "gi"}) ,
            new XungHo({id: 8,   ten: "chú",   timKiem: "4chu"}) ,
            new XungHo({id: 9,   ten: "cậu",   timKiem: "cau"}) ,
            new XungHo({id: 10,   ten: "anh",   timKiem: "1anh"}) ,
            new XungHo({id: 11,   ten: "chị",   timKiem: "2chi"}) ,
            new XungHo({id: 12,   ten: "em",   timKiem: "em"}) ,
            new XungHo({id: 13,   ten: "bạn",   timKiem: "ban"}) ,
            new XungHo({id: 14,   ten: "con",   timKiem: "con"}) ,
            new XungHo({id: 15,   ten: "cháu",   timKiem: "chau"}) ,
            new XungHo({id: 17,   ten: "cậu (em)",   timKiem: "cau (em)"}) ,
            new XungHo({id: 18,   ten: "thầy",   timKiem: "thay"}) ,
            new XungHo({id: 19,   ten: "mợ",   timKiem: "mo"})
        ];
        
        this.data.danhSachXungHo.sort((a, b) => 
            a.timKiem.localeCompare(b.timKiem)
        );
    },
    updateHistoryInfor: function()
    {        
        APP.cache.data.danhSachLichSu.forEach(lichSu => {
            console.log('update lich su', JSON.stringify(lichSu));
            let lienHe = APP.cache.data.danhSachLienHe.find(lh => String(lh.id) === String(lichSu.lienHeId));
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
