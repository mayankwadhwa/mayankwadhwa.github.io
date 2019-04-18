if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'MyGithubProfile'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'MyGithubProfile'.");
}
var MyGithubProfile = function (_, Kotlin) {
  'use strict';
  var throwCCE = Kotlin.throwCCE;
  var addClass = Kotlin.kotlin.dom.addClass_hhb33f$;
  var content;
  function main() {
    var tmp$, tmp$_0, tmp$_1;
    var imageElement = Kotlin.isType(tmp$ = document.createElement('img'), HTMLImageElement) ? tmp$ : throwCCE();
    var titleElement = Kotlin.isType(tmp$_0 = document.createElement('h1'), HTMLHeadingElement) ? tmp$_0 : throwCCE();
    var designationElement = Kotlin.isType(tmp$_1 = document.createElement('h3'), HTMLHeadingElement) ? tmp$_1 : throwCCE();
    imageElement.src = 'https://media.licdn.com/dms/image/C5603AQGWF8Lu85Cmaw/profile-displayphoto-shrink_200_200/0?e=1560988800&v=beta&t=dF6DPHFx31ndEOYQ3_X211di58ZPrw1ix2Ve_XNaPAw';
    titleElement.innerHTML = 'Mayank Wadhwa';
    designationElement.innerHTML = 'Mobile and Frontend Engineer';
    appendChild(content, [imageElement, titleElement, designationElement]);
    addClass(content, ['root']);
  }
  function appendChild($receiver, elements) {
    var tmp$;
    for (tmp$ = 0; tmp$ !== elements.length; ++tmp$) {
      var element = elements[tmp$];
      $receiver.appendChild(element);
    }
  }
  _.main = main;
  var tmp$;
  content = Kotlin.isType(tmp$ = document.getElementById('content'), HTMLDivElement) ? tmp$ : throwCCE();
  main();
  Kotlin.defineModule('MyGithubProfile', _);
  return _;
}(typeof MyGithubProfile === 'undefined' ? {} : MyGithubProfile, kotlin);
