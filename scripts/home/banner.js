function containerBanner(title, id, img, alt) {
    var containerBanner = 
                    `
                    <div class="containerImgBanner">
                        <div class="elementGroupBannerSnow">
                            <span class="titleBannerSnow">${title}</span>
                            <button class="btnBannerSnow" id="${id}">shop now</button>  
                        </div>
                        <img src="../images/${img}.png" class="imgBanner" alt="${alt}">
                    </div>
                    `;
    $('#containerBannerSnow').append(containerBanner);
};

$(document).ready(function() {
    containerBanner('masculino', 'btnBannerMan', 'bannerNeveMasculino', 'imgBannerMan');
    containerBanner('feminino', 'btnBannerWoman', 'bannerNeveFeminino', 'imgBannerWoman');
});