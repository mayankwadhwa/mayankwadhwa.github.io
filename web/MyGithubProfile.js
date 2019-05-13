if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'MyGithubProfile'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'MyGithubProfile'.");
}
var MyGithubProfile = function (_, Kotlin) {
  'use strict';
  var throwCCE = Kotlin.throwCCE;
  var content;
  function main() {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    var topContainerElement = Kotlin.isType(tmp$ = document.createElement('div'), HTMLDivElement) ? tmp$ : throwCCE();
    var textContainerElement = Kotlin.isType(tmp$_0 = document.createElement('div'), HTMLDivElement) ? tmp$_0 : throwCCE();
    var imageElement = Kotlin.isType(tmp$_1 = document.createElement('img'), HTMLImageElement) ? tmp$_1 : throwCCE();
    var titleElement = Kotlin.isType(tmp$_2 = document.createElement('h1'), HTMLHeadingElement) ? tmp$_2 : throwCCE();
    var designationElement = Kotlin.isType(tmp$_3 = document.createElement('h3'), HTMLHeadingElement) ? tmp$_3 : throwCCE();
    var emailElement = Kotlin.isType(tmp$_4 = document.createElement('h3'), HTMLHeadingElement) ? tmp$_4 : throwCCE();
    imageElement.src = 'https://media.licdn.com/dms/image/C5603AQGWF8Lu85Cmaw/profile-displayphoto-shrink_200_200/0?e=1560988800&v=beta&t=dF6DPHFx31ndEOYQ3_X211di58ZPrw1ix2Ve_XNaPAw';
    titleElement.innerHTML = 'Mayank Wadhwa';
    designationElement.innerHTML = 'Mobile and Frontend Engineer';
    emailElement.innerHTML = 'mayank.wadhwa@outlook.in';
    appendChild(textContainerElement, [imageElement, titleElement, designationElement, emailElement]);
    content.appendChild(textContainerElement);
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
