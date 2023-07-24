var gameInput = { gameName: 'SaveTheDino', publisherName: 'FelicityGames' };

var queryParams = location.search.substring(1)?.split("&")
var isTestModeOn = queryParams.find((a) => {return a.startsWith('mode')})?.split("=")[1].toLowerCase() === 'test' ? true: false;
var gpID = queryParams.find((a) => {return a.startsWith('gpid')})?.split("=")[1]


if(isTestModeOn){
    gameInput['surface'] = 'test';
}

function progressBar(percentage){
    console.log("Loading Bar :", percentage)
}

function sendCustomAnalyticsEvent(eventType, extras) {
    console.log("AnalyticsEvent", eventType, extras);
}
//loading scripts
$.getScript(


    "https://g.glance-cdn.com/public/content/games/xiaomi/gamesAd.js"

)
    .done(function (script, textStatus) {
        console.log(textStatus);
        window.GlanceGamingAdInterface.setupLibrary(gameInput, successCb, failCb);
    })
    .fail(function (jqxhr, settings, exception) {
        console.log("MLIB load failed, reason : ", exception);
    });


var LPBannerInstance, StickyBannerInstance, replayInstance, GlanceGamingAdInstance, rewardInstance, _triggerReason;
var is_replay_noFill = false
var is_rewarded_noFill = false
var isRewardGranted = false
var isRewardedAdClosedByUser = false

var pageName = `${gameInput.publisherName}_${gameInput.gameName}`
var categoryName = isTestModeOn? 'google' : `${gameInput.publisherName}`
// Objects for different ad format.
var LPMercObj = {
    adUnitName: `${gameInput.publisherName}_${gameInput.gameName}_Gameload_Bottom`,
    pageName,               //Game Name
    categoryName,         //Publisher Name
    placementName: isTestModeOn? 'Test_Banner' : 'Gameload',
    containerID: "div-gpt-ad-2",            //Div Id for banner
    height: 250,
    width: 300,
    xc: '12.0',
    yc: '3.0',
    gpid: gpID,
}
var StickyObj = {
    adUnitName: `${gameInput.publisherName}_${gameInput.gameName}_Ingame_Bottom`,
    pageName,               //Game Name
    categoryName,         //Publisher Name
    placementName: isTestModeOn? 'Test_Banner' : 'Ingame',
    containerID: "banner-ad",            //Div Id for banner
    height: 50,
    width: 320,
    xc: '12.0',
    yc: '3.0',
    gpid: gpID,
}

function successCb() {
    console.log("set up lib success")
    showBumperAd();

}
function failCb(reason) { }



var replayObj = {
    adUnitName: `${gameInput.publisherName}_${gameInput.gameName}_FsReplay_Replay`,
    placementName: isTestModeOn? "Test_Replay" : "FsReplay",
    pageName,               //Game Name
    categoryName,         //Publisher Name
    containerID: '',
    height: '',
    width: '',
    xc: '',
    yc: '',
    gpid: gpID,
}
var rewardObj = {
    adUnitName: `${gameInput.publisherName}_${gameInput.gameName}_FsRewarded_Reward`,
    placementName: isTestModeOn? "Test_Rewarded": "FsRewarded",
    pageName,               //Game Name
    categoryName,         //Publisher Name
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
        console.log('onAdLoadSucceeded CALLBACK', data);
    });

    obj.adInstance?.registerCallback('onAdLoadFailed', (data) => {
        console.log('onAdLoadFailed  CALLBACK', data);
    });

    obj.adInstance?.registerCallback('onAdDisplayed', (data) => {
        console.log('onAdDisplayed  CALLBACK', data);
    });


}

function showGame() {
    if (recUI === 'true') {
        window.PwaGameCenterInterface.hideRecommendedSection();
        showcanvas();
    }

    else {
        $('#playMore').css("display", "none");
        LBBannerInstance.destroyAd();
        $("#div-gpt-ad-1").html("");
    }
}

function giveRewardSL() {
    sessionStorage.setItem("GiveRewardSL",1);
}
function cancelRewardSL() {
    sessionStorage.setItem("CancelRewardSL",1);
}   
function giveRewardCL() {
    sessionStorage.setItem("GiveRewardCL",1);
}
function cancelRewardCL() {
    sessionStorage.setItem("CancelRewardCL",1);
}
function giveRewardSH() {
    sessionStorage.setItem("GiveRewardSH",1);
}
function cancelRewardSH() {
    sessionStorage.setItem("CancelRewardSH",1);
}