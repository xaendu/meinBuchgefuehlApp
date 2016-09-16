
var app = angular.module('buecherApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when('/gefuehle',{
			templateUrl: 'template/gefuehle.html'
		})
		.when('/buecher',{
			templateUrl: 'template/buecher.html'
		})
		.when('/formular',{
			templateUrl: 'template/form.html'
		})
		.when('/kontakt',{
			templateUrl: 'template/contact.html'
		})
		.otherwise('/gefuehle');
});


app.controller('contactCtrl', function($scope, $http){
	$scope.user = {};

	$scope.submitForm = function(){
		$http({
				method: 'POST',
				url: 'js/processContact.php',
				data: $scope.user,
				header: {'Content-Type': 'application/x-www-form-urlencoded'}
			})
			.success(function(data){
				if(data.errors){
					$scope.errorEmail = data.errors.email;
					$scope.message = [];

				}else{
					$scope.errorEmail = '';
					$scope.message = data.message;
				}
			});
	};
});

app.controller('formularCtrl', function($scope, $http){
	$scope.user = {};

	$scope.submitForm = function(){
		$http({
				method: 'POST',
				url: 'js/processForm.php',
				data: $scope.user,
				header: {'Content-Type': 'application/x-www-form-urlencoded'}
			})
			.success(function(data){
				if(data.errors){
					$scope.errorVorname = data.errors.vorname;
					$scope.errorNachname = data.errors.nachname;
					$scope.errorStrasse = data.errors.strasse;
					$scope.errorHausnummer = data.errors.hausnummer;
					$scope.errorPlz = data.errors.plz;
					$scope.errorStadt = data.errors.stadt;
					$scope.errorLand = data.errors.land;
					$scope.errorEmail = data.errors.email;
					$scope.errorKarte = data.errors.karte;
					$scope.errorKartennummer = data.errors.kartennr;
					$scope.errorPruefziffer = data.errors.pruefziffer;
					/*
					for(personalinfo in data){
						$scope.personalinfo = data.errors.personalinfo;
					}
					*/
					$scope.message = [];

				}else{
					
					$scope.errorVorname = '';
					$scope.errorNachname = '';
					$scope.errorStrasse = '';
					$scope.errorHausnummer = '';
					$scope.errorPlz = '';
					$scope.errorStadt = '';
					$scope.errorLand = '';
					$scope.errorEmail = '';
					$scope.errorKarte = '';
					$scope.errorKartennummer = '';
					$scope.errorPruefziffer = '';
					/*
					for(personalinfo in data){
						$scope.personalinfo = '';
					}
					*/
					$scope.message = data.message;
				}
			});
	};
});


app.controller('buchGefuehlCtrl', function($scope){
	
	$scope.selectGefuehl = function(selected){
		$scope.selectedGefuehlId = selected;
		$scope.query = {gefuehl:selected};
	};
	
	$scope.selectBuch = function(selected){
		$scope.selectedBuch = selected;
	};
	
	$scope.resetGefuehlSelection = function(){
		$scope.query = {};
	};

	$scope.buecher = [
		{
			'id': 1,
			'titel': 'Schöne, neue Welt',
			'autor': 'Aldous Huxley',
			'erscheinungsjahr': 1932,
			'preis': 20,
			'imgUrl': 'images/braveNewWorld.jpg',
			'gefuehl': 4
		},
		{
			'id': 2,
			'titel': 'Der Idiot',
			'autor': 'Fjodor Dostojewski',
			'erscheinungsjahr': 1869,
			'preis': 20,
			'imgUrl': 'images/derIdiot.jpg',
			'gefuehl': 2
		},
		{
			'id': 3,
			'titel': 'Alice im Wunderland',
			'autor': 'Lewis Carroll',
			'erscheinungsjahr': 1865,
			'preis': 20,
			'imgUrl': 'images/aliceImWunderland.jpg',
			'gefuehl': 1
		},
		{
			'id': 4,
			'titel': 'Die Reise zum Mittelpunkt der Erde',
			'autor': 'Jules Verne',
			'erscheinungsjahr': 1873,
			'preis': 20,
			'imgUrl': 'images/dieReiseZumMittelpunktDerErde.jpg',
			'gefuehl': 3
		},
		{
			'id': 5, 
			'titel': 'Das Leuchten der Stille',
			'autor': 'Nicholas Sparks',
			'erscheinungsjahr': 2006,
			'preis': 20,
			'imgUrl': 'images/dasLeuchtenDerStille.jpg',
			'gefuehl': 2
		},
		{
			'id': 6,
			'titel': '1984',
			'autor': 'George Orwell',
			'erscheinungsjahr': 1948,
			'preis': 20,
			'imgUrl': 'images/1984.jpg',
			'gefuehl': 4
		},
		{
			'id': 7,
			'titel': 'Setz dich hin und tue nichts',
			'autor': 'Li Zhi-Chang',
			'erscheinungsjahr': 2002,
			'preis': 20,
			'imgUrl': 'images/setzDichHinUndTueNichts.jpg',
			'gefuehl': 1
		},
		{
			'id': 8,
			'titel': 'Planet der Affen',
			'autor': 'Pierre Boulle',
			'erscheinungsjahr': 1963,
			'preis': 20,
			'imgUrl': 'images/planetDerAffen.jpg',
			'gefuehl': 4
		},
		{
			'id': 9,
			'titel': 'Die Verachtung',
			'autor': 'Alberto Moravia',
			'erscheinungsjahr': 1975,
			'preis': 20,
			'imgUrl': 'images/dieVerachtung.jpg',
			'gefuehl': 4
		},
		{
			'id': 10,
			'titel': 'Die Farbe Lila',
			'autor': 'Alice Walker',
			'erscheinungsjahr': 1982,
			'preis': 20,
			'imgUrl': 'images/dieFarbeLila.jpg',
			'gefuehl': 1
		},
		{
			'id': 11,
			'titel': 'Nicht ohne meine Tochter',
			'autor': 'Betty Mahmoody',
			'erscheinungsjahr': 1987,
			'preis': 20,
			'imgUrl': 'images/nichtOhneMeineTochter.jpg',
			'gefuehl': 4
		}
		,{
			'id': 12,
			'titel': 'Wir Kinder vom Bahnhof Zoo',
			'autor': 'Christiane F.',
			'erscheinungsjahr': 1987,
			'preis': 20,
			'imgUrl': 'images/wirKinderVomBahnhofZoo.jpg',
			'gefuehl': 2
		}
	];
	
	$scope.gefuehle = [
		{
			'id': 1,
			'imgUrl': 'images/glueck.jpg',
			'gefuehl': 'gluecklich'					
		},
		{
			'id': 2,
			'imgUrl': 'images/traurig.jpg',
			'gefuehl': 'traurig'
		},
		{
			'id': 3,
			'imgUrl': 'images/abenteuerlustig.jpg',
			'gefuehl': 'abenteuerlustig'
		},
		{
			'id': 4,
			'imgUrl': 'images/wuetend.jpg',
			'gefuehl': 'wuetend'
		}
	];
	
});
		
/*	
app.directive('slider', function($timeout){
	return{
		restrict: 'AE',
		replace: true,
		scope:{
			images: '='
		},
		templateUrl: 'template/sliderTemplate.html',
		link: function(scope, element, attrs){
			scope.currentIndex = 0;
			
			scope.next = function(){
				scope.currentIndex < scope.images.length-1 ? scope.currentIndex++ : scope.currentIndex = 0;
			};
	
			scope.$watch('currentIndex', function(){
				scope.images.forEach(function(image){
					image.visible = false;
				});
				scope.images[scope.currentIndex].visible = true;
			});
			
			var timer;
			var sliderFunc = function(){
				timer = $timeout(function(){
					scope.next();
					timer = $timeout(sliderFunc, 1000);
				}, 1000);
			};
			
			sliderFunc();
			
			scope.on('$destroy', function(){
				$timeout.cancel(timer);
			});
		}
	};
});
*/
	
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		