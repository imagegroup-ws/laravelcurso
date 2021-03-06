app.config(function($routeProvider){
	
	$routeProvider
	.when('/', 	{
		templateUrl: 'parciales/home.html',
		controller: 'inicioCtrl'
	})
	.when('/profesores', 	{
		templateUrl: 'parciales/profesores.html',
		controller: 'profesoresCtrl'
	})
	.when('/alumnos', 	{
			templateUrl: 'parciales/alumnos.html',
			controller: 'alumnosCtrl'
		})
	.when('/tblProfesores', {
		templateUrl: 'parciales/tblProfesores.html',
	//	controller: 'listadoCtrl'
	})
	.otherwise({
	 redirectTo: '/' 
	});
});