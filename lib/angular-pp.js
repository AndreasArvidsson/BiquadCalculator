
+function () {
    "use strict";

    if (typeof angular === "undefined") {
        throw new Error("AngularJS must be included before Angular++");
    }

    /**
     * Makes it possible to create providers(controller, factories, services..) like:
     * 
     * module.controller("name", ["$scope"], function(s) {}))
     */
    var orgModule = angular.module;
    var providers = [
        "animation",
        "component",
        "components",
        "controller",
        "decorator",
        "directive",
        "factory",
        "filter",
        "provider",
        "service"
    ];
    var namelessProviders = [
        "run",
        "config"
    ];
    function updateProvider(module, providerName) {
        var orgProvider = module[providerName];
        module[providerName] = function (recipeName, factoryFunction, separateFunc) {
            //Dependency array and function callback as seperate items.
            if (factoryFunction instanceof Array && typeof separateFunc === "function") {
                factoryFunction.push(separateFunc);
            }
            //Default behavior.
            return orgProvider(recipeName, factoryFunction);
        };
    }
    function updateNamelessProvider(module, providerName) {
        var orgProvider = module[providerName];
        module[providerName] = function (factoryFunction, separateFunc) {
            //Dependency array and function callback as seperate items.
            if (factoryFunction instanceof Array && typeof separateFunc === "function") {
                factoryFunction.push(separateFunc);
            }
            //Default behavior.
            return orgProvider(factoryFunction);
        };
    }
    angular.module = function (name, requires, configFn) {
        var module = orgModule(name, requires, configFn);
        for (var i = 0; i < providers.length; ++i) {
            updateProvider(module, providers[i]);
        }
        for (var i = 0; i < namelessProviders.length; ++i) {
            updateNamelessProvider(module, namelessProviders[i]);
        }
        return module;
    };

 
   var angularPP = angular.module("angular++", []);

    angularPP.run(["$rootScope", "$controller"], function (rootScope, controller) {
        //Scope inheritance. Extend your scope with the scope of a another controller. 
        rootScope.extends = function (parentName) {
            controller(parentName, {$scope: this});
        };
    });

}();