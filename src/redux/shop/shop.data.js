const SHOP_DATA = {
    pistol: {
        id: 1,
        title: 'Pistol',
        routeName: 'pistol',
        items: [
            {
                id: 1,
                name: 'GLOCK-17',
                imageUrl: 'https://static.turbosquid.com/Preview/001221/426/HI/3D-glock-17-gen-4_Z.jpg',
                price: 25
            },
            {
                id: 2,
                name: 'Smith & Wesson',
                imageUrl: 'https://www.juliegolob.com/wp-content/uploads/2018/04/MP-M2.0-Compact-with-Crimson-Trace-Green-Laserguard.jpg',
                price: 180
            },
            {
                id: 3,
                name: 'FN Herstal FNP-9',
                imageUrl: 'https://www.thefirearmblog.com/blog/wp-content/uploads/2015/10/Watermarked.jpg',
                price: 350
            },
            {
                id: 4,
                name: 'Beretta 92',
                imageUrl: 'https://mumcare.org/wp-content/uploads/2018/01/mo-thay-sung.jpg',
                price: 250
            },
            {
                id: 5,
                name: 'Walther P99',
                imageUrl: 'https://i.pinimg.com/originals/02/06/78/02067810fd6822ca0c797bca89071e61.jpg',
                price: 180
            },
            {
                id: 6,
                name: 'QSZ-92',
                imageUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/548ad90f-e77b-4ade-9c90-34fe7fecbfc6/dbug3v7-7036ce95-18a2-4f42-95a2-b0232332bb17.png',
                price: 140
            },
            {
                id: 7,
                name: 'M1911',
                imageUrl: 'https://thichdiy.com/wp-content/uploads/2016/05/33d67cf4b354c3243965cbca9f5c2340.jpg',
                price: 180
            },
            {
                id: 8,
                name: 'MK 23',
                imageUrl: 'https://sohanews.sohacdn.com/thumb_w/660/2017/photo-1-1507191240241.jpg',
                price: 140
            },
            {
                id: 9,
                name: 'HS 2000',
                imageUrl: 'https://preview.free3d.com/img/2012/11/2145880235046864700/s6q6cehw-900.jpg',
                price: 160
            }
        ]
    },
    weapons: {
        id: 2,
        title: 'Weapons',
        routeName: 'weapons',
        items: [
            {
                id: 10,
                name: 'KNIFE',
                imageUrl: 'https://forum.escapefromtarkov.com/uploads/monthly_2018_09/1342813099_Gt.jpg.4a05147a4ff06585b68007e487c5b829.jpg',
                price: 2200
            },
            {
                id: 11,
                name: 'OPS',
                imageUrl: 'https://cdn1.epicgames.com/ue/product/Screenshot/3-1920x1080-8b4ed8582f5cac02627373dd8f8ef303.jpg',
                price: 2800
            },
            {
                id: 12,
                name: 'PAN',
                imageUrl: 'https://gamek.mediacdn.vn/zoom/700_438/2018/5/2/image-1525237557509101203645.png',
                price: 1100
            },
            {
                id: 13,
                name: 'SWORD',
                imageUrl: 'https://sohanews.sohacdn.com/thumb_w/660/2015/kiem-0-1444389140407-0-122-1517-2185-crop-1444389154288.jpg',
                price: 1600
            }
        ]
    },
    shotgun: {
        id: 3,
        title: 'Shotgun',
        routeName: 'shotgun',
        items: [
            {
                id: 18,
                name: 'S12K',
                imageUrl: 'https://tabinoshop.com/wp-content/uploads/2020/01/mo-hinh-s12k-pubg-2.jpg',
                price: 1250
            },
            {
                id: 19,
                name: 'S1897',
                imageUrl: 'https://i.ytimg.com/vi/BWLMZKpeBnY/maxresdefault.jpg',
                price: 900
            },
            {
                id: 20,
                name: 'S686',
                imageUrl: 'https://static.turbosquid.com/Preview/2019/01/28__21_42_42/1.jpg6F05C736-5310-45BB-80BF-2B054EC37FAFLarge.jpg',
                price: 900
            },
            {
                id: 21,
                name: 'SAWED OFF',
                imageUrl: 'https://i.ytimg.com/vi/T6mDTBekSm4/maxresdefault.jpg',
                price: 1650
            },
            {
                id: 22,
                name: 'Win 94',
                imageUrl: 'https://zilliongamer.com/uploads/pubg-mobile/all-rifle/sniper-rifle/win-94/win-94.jpg',
                price: 1850
            }
        ]
    },
    rifle: {
        id: 4,
        title: 'Rifle',
        routeName: 'rifle',
        items: [
            {
                id: 23,
                name: 'M4A1',
                imageUrl: 'https://i.pinimg.com/originals/2f/da/17/2fda17f5d55ff6909d8301af75b0aa6b.jpg',
                price: 250
            },
            {
                id: 24,
                name: 'FN 2000',
                imageUrl: 'https://i.pinimg.com/originals/8e/d2/b8/8ed2b8ba5612ac970dc94ab9e85b5057.jpg',
                price: 200
            },
            {
                id: 25,
                name: 'COLT AR15',
                imageUrl: 'https://images7.alphacoders.com/303/thumb-1920-303642.jpg',
                price: 800
            },
            {
                id: 26,
                name: 'STEYR AUG',
                imageUrl: 'https://cdna.artstation.com/p/assets/images/images/000/330/664/large/mert-iskenderoglu-02.jpg?1417526980',
                price: 800
            },
            {
                id: 27,
                name: 'HK416',
                imageUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3ad524f9-adb4-4792-9779-cc572fd1e015/daiksw4-f16002cf-3585-48f1-b704-b4a156a93d25.jpg/v1/fill/w_1192,h_670,q_70,strp/bf4_s_hk416_render_test_by_thecsleader_daiksw4-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcLzNhZDUyNGY5LWFkYjQtNDc5Mi05Nzc5LWNjNTcyZmQxZTAxNVwvZGFpa3N3NC1mMTYwMDJjZi0zNTg1LTQ4ZjEtYjcwNC1iNGExNTZhOTNkMjUuanBnIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.zIRWkNOZBi1c87N_VmjQ7IQiuTco-9mF21RtvG5k_7o',
                price: 450
            },
            {
                id: 28,
                name: 'AK47',
                imageUrl: 'https://i.pinimg.com/originals/64/18/0c/64180ce0e16af53daa203f6b0189613f.jpg',
                price: 135
            },
            {
                id: 29,
                name: 'M4 Machine',
                imageUrl: 'https://www.itl.cat/pngfile/big/12-128401_machine-gun-wallpaper-full-of-weapons.jpg',
                price: 200
            }
        ]
    },
    sniper: {
        id: 5,
        title: 'Sniper',
        routeName: 'sniper',
        items: [
            {
                id: 30,
                name: 'AWM',
                imageUrl: 'https://images3.alphacoders.com/550/thumb-1920-55099.jpg',
                price: 3250
            },
            {
                id: 31,
                name: 'L115A3 AWM',
                imageUrl: 'https://www.elsetge.cat/myimg/f/12-128480_sniper-cool-guns-wallpaper-widescreen-de-armas-full.jpg',
                price: 200
            },
            {
                id: 32,
                name: 'Heckler & Koch PSG1',
                imageUrl: 'https://c4.wallpaperflare.com/wallpaper/822/871/630/weapons-heckler-and-koch-hk417-wallpaper-preview.jpg',
                price: 250
            },
            {
                id: 33,
                name: 'Barrett M82',
                imageUrl: 'https://wallpapercave.com/wp/wp3722135.jpg',
                price: 250
            },
            {
                id: 34,
                name: 'Cheytac-408 Cal',
                imageUrl: 'https://c4.wallpaperflare.com/wallpaper/37/770/413/weapons-guns-cartridges-sniper-rifle-wallpaper-preview.jpg',
                price: 400
            },
            {
                id: 35,
                name: 'Dragunov',
                imageUrl: 'https://i.pinimg.com/originals/df/80/b9/df80b9729f238e60c2d4e2ff18e0cdef.png',
                price: 250
            }
        ]
    }
};


export default SHOP_DATA;