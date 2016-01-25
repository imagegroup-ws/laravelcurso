(function(){

var app = angular.module('universidadApp', []);
app.controller('listadoCtrl', ['$scope', function ($scope) {

	$scope.personas = [
		{
		"id": 0,
		"sexo": "hombre",
		"nombre": "David Perdomo",
		"avatar": "dcp.jpg",
		"telefono": "776 157",
		"celular":"300445878"	
		},
				{
		"id": 1,
		"sexo": "mujer",
		"nombre": "Marte Perdomo",
		"avatar": "dcp.jpg",
		"telefono": "448 157",
		"celular":"30255565878"	
		},
		{
		"id": 2,
		"sexo": "hombre",
		"nombre": "Juan Pineda",
		"avatar": "dcp.jpg",
		"telefono": "448 157",
		"celular":"312400878"	
		},
		{
		"id": 3,
		"sexo": "mujer",
		"nombre": "Andrea Perdomo",
		"avatar": "dcp.jpg",
		"telefono": "776 157",
		"celular":"300445878"	
		},
		{
		"id": 4,
		"sexo": "hombre",
		"nombre": "Natalia Rios",
		"avatar": "dcp.jpg",
		"telefono": "2225585",
		"celular":"301552558"	
		},
		{
		"id": 5,
		"sexo": "hombre",
		"nombre": "CamiloPerdomo",
		"avatar": "dcp.jpg",
		"telefono": "2236 157",
		"celular":"315 5541256"	
		}
		];


}]);

})();