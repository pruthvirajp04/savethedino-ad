const gameInput = { gameName: 'SaveTheDino', publisherName: '<FelicityGames>', surface: "test" };
//loading scripts
$.getScript(


    "https://g.glance-cdn.com/public/content/games/xiaomi/gamesAd.js",

    "gpid.js"

)
    .done(function (script, textStatus) {
        console.log(textStatus);
        window.GlanceGamingAdInterface.setupLibrary(gameInput, successCb, failCb);
    })
    .fail(function (jqxhr, settings, exception) {
        console.log("MLIB load failed, reason : ", exception);
    });


var LPBannerInstance, LBBannerInstance, StickyBannerInstance, replayInstance, GlanceGamingAdInstance, rewardInstance, _triggerReason;
var is_replay_noFill = false
var is_rewarded_noFill = false
var isRewardGranted = false
var isRewardedAdClosedByUser = false
// Objects for different ad format.
const LPMercObj = {
    adUnitName: "FelicityGames_SaveTheDino",
    pageName: 'PublisherName_GameName',               //Game Name
    categoryName: 'google',           //Publisher Name
    placementName: 'Test_Banner',
    containerID: "div-gpt-ad-2",            //Div Id for banner
    height: 250,
    width: 300,
    xc: '12.0',
    yc: '3.0',
    gpid: gpID,
}
const StickyObj = {
    adUnitName: "FelicityGames_SaveTheDino",
    pageName: 'PublisherName_GameName',               //Game Name
    categoryName: 'google',           //Publisher Name
    placementName: 'Test_Banner',
    containerID: "banner-ad",            //Div Id for banner
    height: 50,
    width: 320,
    xc: '12.0',
    yc: '3.0',
    gpid: gpID,
}

const LBBannerObj = {
    adUnitName: "FelicityGames_SaveTheDino",
    pageName: 'PublisherName_GameName',               //Game Name
    categoryName: 'google',           //Publisher Name
    placementName: 'Test_Banner',
    containerID: "div-gpt-ad-1",            //Div Id for banner
    height: 250,
    width: 300,
    xc: '12.0',
    yc: '3.0',
    gpid: gpID,
}

function successCb() {
    console.log("set up lib success")
    showBumperAd();

}
function failCb(reason) { }



const replayObj = {
    adUnitName: "FelicityGames_SaveTheDino",
    placementName: "Test_Replay",
    pageName: 'FelicityGames_SaveTheDino',
    categoryName: 'google',
    containerID: '',
    height: '',
    width: '',
    xc: '',
    yc: '',
    gpid: gpID,
}
const rewardObj = {
    adUnitName: "FelicityGames_SaveTheDino",
    placementName: "Test_Rewarded",
    pageName: 'FelicityGames_SaveTheDino',
    categoryName: 'google',
    containerID: '',
    height: '',
    width: '',
    xc: '',
    yc: '',
    gpid: gpID,
}


//banner ads callbacks 
function bannerCallbacks(obj) {


    obj.adInstance?.registerCallback('onAdLoadSucceed', (data) => {
        console.log('onAdLoadSucceeded Banner CALLBACK', data);

    });

    obj.adInstance?.registerCallback('onAdLoadFailed', (data) => {
        console.log('onAdLoadFailed  Banner CALLBACK', data);

    });

    obj.adInstance?.registerCallback('onAdDisplayed', (data) => {
        console.log('onAdDisplayed  Banner CALLBACK', data);
    });


}

function showGame() {
    if (recUI === 'true') {
        window.PwaGameCenterInterface.hideRecommendedSection();
        showcanvas();
    }

    else {
        $('#playMore').css("display", "none");
        $("#div-gpt-ad-1").html("");
    }
}