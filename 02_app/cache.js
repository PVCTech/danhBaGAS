APP.cache = 
{
    data: {
        version: '',
        danhSachLienHe: [],
        danhSachXungHo: [],

        danhSachLichSu: [],
        danhSachSinhNhat: [],

        danhSachDonVi: [],
        danhSachPhongBan: [],

        danhSachTinh: [],
        danhSachPhuongXa: [],
        newCache: false
    },
    init: async function()
    {
        console.log('Cache init');
        const hasLocalCache = this.loadLocal();
        await this.update(hasLocalCache ? this.data.version : '');
        return hasLocalCache;
    },
    loadLocal: function()
    {
        const localCacheData = this.getLocal();
        if (!localCacheData) return false;

        try
        {
            const parsedData = JSON.parse(localCacheData);
            if (!this.isValidData(parsedData)) throw new Error('Dữ liệu cache không hợp lệ');

            console.log('Cache init: có cache local hợp lệ');
            this.data = parsedData;
            this.convertCache();
            return true;
        }
        catch (error)
        {
            console.error('Không thể đọc cache liên hệ:', error);
            localStorage.removeItem(APP.config.id + '_cache');
            this.data = {
                version: '',
                danhSachLienHe: [],
                danhSachXungHo: [],

                danhSachLichSu: [],
                danhSachSinhNhat: [],

                danhSachDonVi: [],
                danhSachPhongBan: [],

                danhSachTinh: [],
                danhSachPhuongXa: [],
                newCache: false
            };
            return false;
        }
    },
    isValidData: function(data)
    {
        const requiredLists = [
            'danhSachLienHe',
            'danhSachLichSu',
            'danhSachSinhNhat',
            'danhSachDonVi',
            'danhSachPhongBan',
            'danhSachTinh',
            'danhSachPhuongXa'
        ];
        return data &&
            typeof data === 'object' &&
            Object.prototype.hasOwnProperty.call(data, 'version') &&
            (typeof data.version === 'string' ||
                (typeof data.version === 'number' && Number.isFinite(data.version))) &&
            requiredLists.every(name =>
                Array.isArray(data[name]) &&
                data[name].every(item => item && typeof item === 'object')
            );
    },
    update: async function(localVersion)
    {
        console.log('Cache upadting..');
        let newCacheData = await APP.api.getNewCacheData(localVersion);

        if (!newCacheData || typeof newCacheData !== 'object')
        {
            throw new Error('Server trả về cache không hợp lệ');
        }

        if (newCacheData.newCache === false)
        {
            console.log('Not need update');
            return false;
        }
        else
        {
            if (!this.isValidData(newCacheData.data))
            {
                throw new Error('Server trả về dữ liệu cache mới không hợp lệ');
            }
            console.log('update to new version');
            APP.cache.data = newCacheData.data;
            APP.cache.data.danhSachSinhNhat = [];
            this.convertCache();
            this.setLocal();
            return true;
        }        
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
            let lienHe = APP.cache.data.danhSachLienHe.find(lh => String(lh.id) === String(lichSu.lienHeId));
            if (lienHe)
            {
                lienHe.lichSuTruyCap = {ngay:lichSu.ngay, thang:lichSu.thang, nam:lichSu.nam,
                    gio:lichSu.gio, phut:lichSu.phut, giay: lichSu.giay};
            }
        });
    },
    clear: function()
    {
        APP.cache.data = {
            version: '',
            danhSachLienHe: [],
            danhSachXungHo: [],

            danhSachLichSu: [],
            danhSachSinhNhat: [],

            danhSachDonVi: [],
            danhSachPhongBan: [],

            danhSachTinh: [],
            danhSachPhuongXa: [],
            newCache: false
        };
    }
};
