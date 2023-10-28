// document.addEventListener('DOMContentLoaded', function() {
//     var userAgent = window.navigator.userAgent,
//       platform = window.navigator.platform,
//       macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
//       windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
//       iosPlatforms = ['iPhone', 'iPad', 'iPod'],
//       os = null;

//   if (macosPlatforms.indexOf(platform) !== -1) {
//     os = 'Mac OS';
//   } else if (iosPlatforms.indexOf(platform) !== -1) {
//     os = 'iOS';
//   } else if (windowsPlatforms.indexOf(platform) !== -1) {
//     os = 'Windows';
//   } else if (/Android/.test(userAgent)) {
//     os = 'Android';
//   } else if (!os && /Linux/.test(platform)) {
//     os = 'Linux';
//   }

//     alert('osç'+os);
// }, false);
// alert(window.innerWidth );
// console.log(window.navigator);
function showHidden(id){
    var ele = document.getElementById(id);
    if(ele.style.display === "none"){
        ele.style.display = "block";
    } else {
        ele.style.display = "none";
    }
}

  


