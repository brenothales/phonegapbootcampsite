function adjustListMenuLeftPaddingTop(){document.getElementById("list-menu-left").style.paddingTop=window.innerHeight/3+"px"}var app=angular.module("app",["ngRoute"]);app.controller("AppController",["$scope",function(t){t.isPortuguese=!0,t.isEnglish=!1,t.isRouting=!1,t.snapperTransitionSpeed=.2,t.snapper=new Snap({element:document.getElementById("content"),disable:"right",transitionSpeed:t.snapperTransitionSpeed}),t.openSnapper=function(){"closed"===t.snapper.state().state?t.snapper.open("left"):t.snapper.close()},t.$on("$routeChangeStart",function(){t.isRouting=!0}),t.$on("$routeChangeSuccess",function(){t.isRouting=!1,document.getElementById("scroll").scrollTop=0})}]),app.factory("AppEventManager",["$rootScope",function(t){var e={};return e.tellMenuNewSectionLoaded=function(e){t.$broadcast("NewSectionLoaded",e)},e}]),app.config(["$routeProvider",function(t){t.when("/about",{templateUrl:"partials/about.html",controller:"AboutController"}).when("/quotes",{templateUrl:"partials/quotes.html",controller:"QuotesController"}).when("/instructors",{templateUrl:"partials/instructors.html",controller:"InstructorsController"}).when("/agenda",{templateUrl:"partials/agenda.html",controller:"AgendaController"}).when("/duration",{templateUrl:"partials/duration.html",controller:"DurationController"}).when("/registration",{templateUrl:"partials/registration.html",controller:"RegistrationController"}).when("/prerequisits",{templateUrl:"partials/prerequisits.html",controller:"PrerequisitsController"}).when("/target",{templateUrl:"partials/target.html",controller:"TargetController"}).when("/dateslocations",{templateUrl:"partials/dateslocations.html",controller:"DatesLocationsController"}).when("/videos",{templateUrl:"partials/videos.html",controller:"VideosController"}).when("/photos",{templateUrl:"partials/photos.html",controller:"PhotosController"}).when("/talktous",{templateUrl:"partials/talktous.html",controller:"TalktousController"}).otherwise({redirectTo:"/about"})}]),window.onload=function(){adjustListMenuLeftPaddingTop(),FastClick.attach(document.body),window.addEventListener("orientationchange",function(){adjustListMenuLeftPaddingTop()},!1)};