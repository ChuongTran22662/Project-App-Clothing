const INITIAL_STATE = {
    sections: [
        {
            title: 'pistol',
            imageUrl: 'https://fsb.zobj.net/crop.php?r=P6AcqRLkuFbpl6eCYPNXclvWRS4BSxkGAJ3N53Ot2xSnxPj4sFpHJJfkaL5sQNhh_L9rYzxtPi_1eIOMKaVsatn7I0RkF8YYeJx6YGqAXLBTA0GE1jLqostDQ5i3FgV8uj7lA5Pe8s0gFbCc',
            id: 1,
            linkUrl: 'shop/pistol'
        },
        {
            title: 'shotgun',
            imageUrl: 'https://cdn.hipwallpaper.com/i/32/70/a2I1Vk.jpg',
            id: 2,
            linkUrl: 'shop/shotgun'
        },
        {
            title: 'weapons',
            imageUrl: 'https://cdn1.epicgames.com/ue/product/Screenshot/3-1920x1080-8b4ed8582f5cac02627373dd8f8ef303.jpg',
            id: 3,
            linkUrl: 'shop/weapons'
        },
        {
            title: 'rifle',
            imageUrl: 'https://file.vforum.vn/hinh/2015/06/vforum-weapon-army-wallpaper-telasm-twalls-3.jpg',
            size: 'large',
            id: 4,
            linkUrl: 'shop/rifle'
        },
        {
            title: 'sniper',
            imageUrl: 'https://c4.wallpaperflare.com/wallpaper/822/871/630/weapons-heckler-and-koch-hk417-wallpaper-preview.jpg',
            size: 'large',
            id: 5,
            linkUrl: 'shop/sniper'
        }
    ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default directoryReducer;