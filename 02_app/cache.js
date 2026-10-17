APP.cache = 
{
    data: {
        version: '',
        danhSachDonVi: [],
        danhSachPhongBan: [],
        danhSachTinh: [],
        danhSachPhuongXa: [],
        danhSachXungHo: [],
        newCache: false
    },
    init: async function()
    {
        let localCacheData = localStorage.getItem('a00001_cache');
        if (localCacheData)
        {
            //render
            this.data.version = localCacheData.version;

            this.danhSachDonVi = localCacheData.danhSachDonVi;
            this.danhSachPhongBan = localCacheData.danhSachPhongBan;
            this.danhSachTinh = localCacheData.danhSachTinh;
            this.danhSachPhuongXa = localCacheData.danhSachPhuongXa;

            //background: check cache version, and update cache and local
            this.update();
        }
        else
        {
            console.log('Cache.init: Không có local cache');
            await this.update();
        }
    },
    update: async function(localVersion)
    {
        let newCacheData = await APP.api.getNewCacheData('');
        if (newCacheData.newCache == false)
        {                
        }
        else
        {
            APP.cache.data = newCacheData.data;
        }
        this.setDanhSachXungho();
        this.setLocal();
    },
    setLocal: function()
    {
        localStorage.setItem('a00001_cache', APP.cache.data);
    },
    getLocal: function()
    {
        return localStorage.getItem('a00001_cache');
    },
    setDanhSachXungho: function()
    {
        this.danhSachXungHo = [
            new XungHo(0,"","") ,
            new XungHo(1,"ông","5ong") ,
            new XungHo(2,"bà","6ba") ,
            new XungHo(3,"bác","bac") ,
            new XungHo(4,"bố","bo") ,
            new XungHo(5,"mẹ","me") ,
            new XungHo(6,"cô","3co") ,
            new XungHo(7,"gì","gi") ,
            new XungHo(8,"chú","4chu") ,
            new XungHo(9,"cậu","cau") ,
            new XungHo(10,"anh","1anh") ,
            new XungHo(11,"chị","2chi") ,
            new XungHo(12,"em","em") ,
            new XungHo(13,"bạn","ban") ,
            new XungHo(14,"con","con") ,
            new XungHo(15,"cháu","chau") ,
            new XungHo(17,"cậu (em)","cau (em)") ,
            new XungHo(18,"thầy","thay") ,
            new XungHo(19,"mợ","mo") ,
        ];
    }
};


