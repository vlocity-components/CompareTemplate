"use strict";

/* Controllers */

var bpModule = angular.module("compare", ['ui.bootstrap']);

bpModule.directive('equalizeHeight', ['$timeout', function($timeout) {
    return {
        restrict: 'A',
        controller: function($scope) {
            //console.log('equalizeHeightFor - controller');
            var elements = [];
            this.addElement = function(element) {
                //console.log('adding element:', element);
                elements.push(element);
                //console.log(elements);
            }

            // resize elements once the last element is found
            this.resize = function() {
                $timeout(function() {
                    //console.log('finding the tallest ...');
                    // find the tallest
                    var tallest = 0,
                        height;
                    angular.forEach(elements, function(el) {
                        height = el[0].offsetHeight;
                        //console.log('height:', height);
                        if (height > tallest)
                            tallest = height;
                    });
                    //console.log('tallest:', tallest);
                    //console.log('resizing ...');
                    // resize
                    angular.forEach(elements, function(el) {
                        el[0].style.height = tallest + 'px';
                    });
                    //console.log('-- finished --');
                }, 0);
            };
        }
    };
}]);

bpModule.directive('equalizeHeightAdd', [function($timeout) {
    return {
        restrict: 'A',
        require: '^^equalizeHeight',
        link: function(scope, element, attrs, ctrl_for) {
            //console.log('equalizeHeightAdd - link');
            // add element to list of elements
            ctrl_for.addElement(element);
            if (scope.$last)
                ctrl_for.resize();
        }
    };
}]);

bpModule.controller("compareController", function($scope, $modal, $log) {
    $scope.control = {
        "vlcSI": {
            "recSet": [{
                "calculationResults": [{
                    "Age": 25,
                    "Gender": "female",
                    "attributes": [{
                        "categoryName": "Features",
                        "name": "Baggage Loss, Delay & Damage",
                        "value": "40",
                        "dataType": "Currency",
                        "description": "Key"
                    }, {
                        "categoryName": "Features",
                        "name": "Emergency Medical",
                        "value": "Included",
                        "dataType": "Text",
                        "description": "Key"
                    }, {
                        "categoryName": "Features",
                        "name": "Flight & Travel Accident",
                        "value": "Included",
                        "dataType": "Text"
                    }, {
                        "categoryName": "Features",
                        "name": "Trip Cancellation & Interruption",
                        "value": "Not Included",
                        "dataType": "Text"
                    }, {
                        "name": "In Network",
                        "categoryName": "Deductible",
                        "value": "50",
                        "description": "Key",
                        "dataType": "Percent"
                    }, {
                        "name": "In Network Individual",
                        "categoryName": "Deductible",
                        "value": "60",
                        "description": "Key",
                        "dataType": "Currency"
                    }, {
                        "name": "Out of Network",
                        "categoryName": "Deductible",
                        "value": "30",
                        "dataType": "Currency"
                    }],
                    "ProductCode": "TI-NE",
                    "ProductName": "Non-Emergency Medical",
                    "MarketSegment": "Individual;Medicare",
                    "ProductType": "Medical",
                    "ProductSubType": "EPO",
                    "TotalPremium": 12.50,
                    "ID": "0"
                }, {
                    "Age": 30,
                    "Gender": "male",
                    "attributes": [{
                        "categoryName": "Features",
                        "name": "Baggage Loss, Delay & Damage",
                        "value": "40",
                        "dataType": "Currency",
                        "description": "Key"
                    }, {
                        "categoryName": "Features",
                        "name": "Emergency Medical",
                        "value": "Included",
                        "dataType": "Text",
                        "description": "Key"
                    }, {
                        "categoryName": "Features",
                        "name": "Flight & Travel Accident",
                        "value": "Included",
                        "dataType": "Text"
                    }, {
                        "categoryName": "Features",
                        "name": "Trip Cancellation & Interruption",
                        "value": "Not Included",
                        "dataType": "Text"
                    }, {
                        "name": "In Network",
                        "categoryName": "Deductible",
                        "value": "50",
                        "description": "Key",
                        "dataType": "Percent"
                    }, {
                        "name": "In Network Individual",
                        "categoryName": "Deductible",
                        "value": "60",
                        "description": "Key",
                        "dataType": "Currency"
                    }, {
                        "name": "Out of Network",
                        "categoryName": "Deductible",
                        "value": "30",
                        "dataType": "Currency"
                    }],
                    "ProductCode": "TI-NE",
                    "ProductName": "Non-Emergency Medical",
                    "MarketSegment": "Individual;Medicare",
                    "ProductType": "Medical",
                    "ProductSubType": "EPO",
                    "TotalPremium": 22.50,
                    "ID": "1"
                }],
                "aggregationResults": {
                    "TotalPrice": 30.00
                }
            }, {
                "calculationResults": [{
                    "Age": 25,
                    "Gender": "female",
                    "attributes": [{
                        "categoryName": "Features",
                        "name": "Baggage Loss, Delay & Damage",
                        "value": "Included",
                        "dataType": "Text",
                        "description": "Key"
                    }, {
                        "categoryName": "Features",
                        "name": "Emergency Medical",
                        "value": "Not Included",
                        "dataType": "Text",
                        "description": "Key"
                    }, {
                        "categoryName": "Features",
                        "name": "Flight & Travel Accident",
                        "value": "Included",
                        "dataType": "Text"
                    }, {
                        "categoryName": "Features",
                        "name": "Trip Cancellation & Interruption",
                        "value": "Not Included",
                        "dataType": "Text"
                    }, {
                        "name": "In Network",
                        "categoryName": "Deductible",
                        "value": "40",
                        "description": "Key",
                        "dataType": "Currency"
                    }, {
                        "name": "In Network Individual",
                        "categoryName": "Deductible",
                        "value": "60",
                        "description": "Key",
                        "dataType": "Currency"
                    }, {
                        "name": "Out of Network",
                        "categoryName": "Deductible",
                        "value": "100",
                        "dataType": "Percent"
                    }],
                    "ProductCode": "TI-AI",
                    "ProductName": "All-Inclusive",
                    "MarketSegment": "Individual",
                    "ProductType": "Medical",
                    "ProductSubType": "HMO",
                    "TotalPremium": 12.50,
                    "ID": "2"
                }, {
                    "Age": 30,
                    "Gender": "male",
                    "attributes": [{
                        "categoryName": "Features",
                        "name": "Baggage Loss, Delay & Damage",
                        "value": "Included",
                        "dataType": "Text",
                        "description": "Key"
                    }, {
                        "categoryName": "Features",
                        "name": "Emergency Medical",
                        "value": "Not Included",
                        "dataType": "Text",
                        "description": "Key"
                    }, {
                        "categoryName": "Features",
                        "name": "Flight & Travel Accident",
                        "value": "Included",
                        "dataType": "Text"
                    }, {
                        "categoryName": "Features",
                        "name": "Trip Cancellation & Interruption",
                        "value": "Not Included",
                        "dataType": "Text"
                    }, {
                        "name": "In Network",
                        "categoryName": "Deductible",
                        "value": "40",
                        "description": "Key",
                        "dataType": "Currency"
                    }, {
                        "name": "In Network Individual",
                        "categoryName": "Deductible",
                        "value": "60",
                        "description": "Key",
                        "dataType": "Currency"
                    }, {
                        "name": "Out of Network",
                        "categoryName": "Deductible",
                        "value": "100",
                        "dataType": "Percent"
                    }],
                    "ProductCode": "TI-AI",
                    "ProductName": "All-Inclusive",
                    "MarketSegment": "Individual",
                    "ProductType": "Medical",
                    "ProductSubType": "HMO",
                    "TotalPremium": 22.50,
                    "ID": "3"
                }],
                "aggregationResults": {
                    "TotalPrice": 31.00
                }
            }, {
                "calculationResults": [{
                    "Age": 25,
                    "Gender": "female",
                    "attributes": [{
                        "categoryName": "Features",
                        "name": "Baggage Loss, Delay & Damage",
                        "value": "Included",
                        "dataType": "Text",
                        "description": "Key"
                    }, {
                        "categoryName": "Features",
                        "name": "Emergency Medical",
                        "value": "Not included",
                        "dataType": "Text",
                        "description": "Key"
                    }, {
                        "categoryName": "Features",
                        "name": "Flight & Travel Accident",
                        "value": "Not included",
                        "dataType": "Text"
                    }, {
                        "categoryName": "Features",
                        "name": "Trip Cancellation & Interruption",
                        "value": "Included",
                        "dataType": "Text"
                    }, {
                        "name": "In Network",
                        "categoryName": "Deductible",
                        "value": "40",
                        "description": "Key",
                        "dataType": "Currency"
                    }, {
                        "name": "In Network Individual",
                        "categoryName": "Deductible",
                        "value": "60",
                        "description": "Key",
                        "dataType": "Currency"
                    }, {
                        "name": "Out of Network",
                        "categoryName": "Deductible",
                        "value": "100",
                        "dataType": "Percent"
                    }],
                    "ProductCode": "TI-EM",
                    "ProductName": "Emergency Medical",
                    "MarketSegment": "Government",
                    "ProductType": "Medical",
                    "ProductSubType": "PPO",
                    "TotalPremium": 12.50,
                    "ID": "4"
                }],
                "aggregationResults": {
                    "TotalPrice": 32.00
                }
            }, {
                "calculationResults": [{
                    "Age": 25,
                    "Gender": "female",
                    "attributes": [{
                        "categoryName": "Features",
                        "name": "Baggage Loss, Delay & Damage",
                        "value": "40",
                        "dataType": "Currency",
                        "description": "Key"
                    }, {
                        "categoryName": "Features",
                        "name": "Emergency Medical",
                        "value": "50",
                        "dataType": "Percent",
                        "description": "Key"
                    }, {
                        "categoryName": "Features",
                        "name": "Flight & Travel Accident",
                        "value": "50",
                        "dataType": "Currency"
                    }, {
                        "categoryName": "Features",
                        "name": "Trip Cancellation & Interruption",
                        "value": "60",
                        "dataType": "Percent"
                    }, {
                        "name": "In Network",
                        "categoryName": "Deductible",
                        "value": "60",
                        "description": "Key",
                        "dataType": "Percent"
                    }, {
                        "name": "In Network Individual",
                        "categoryName": "Deductible",
                        "value": "60",
                        "description": "Key",
                        "dataType": "Currency"
                    }, {
                        "name": "Out of Network",
                        "categoryName": "Deductible",
                        "value": "Not Included",
                        "dataType": "Text"
                    }],
                    "ProductCode": "TI-TC",
                    "ProductName": "Trip Cancellation",
                    "MarketSegment": "Individual",
                    "ProductType": "Medical",
                    "ProductSubType": "HMO",
                    "TotalPremium": 12.50,
                    "ID": "6"
                }, {
                    "Age": 30,
                    "Gender": "male",
                    "attributes": [{
                        "categoryName": "Features",
                        "name": "Baggage Loss, Delay & Damage",
                        "value": "40",
                        "dataType": "Currency",
                        "description": "Key"
                    }, {
                        "categoryName": "Features",
                        "name": "Emergency Medical",
                        "value": "50",
                        "dataType": "Percent",
                        "description": "Key"
                    }, {
                        "categoryName": "Features",
                        "name": "Flight & Travel Accident",
                        "value": "50",
                        "dataType": "Currency"
                    }, {
                        "categoryName": "Features",
                        "name": "Trip Cancellation & Interruption",
                        "value": "60",
                        "dataType": "Percent"
                    }, {
                        "name": "In Network",
                        "categoryName": "Deductible",
                        "value": "60",
                        "description": "Key",
                        "dataType": "Percent"
                    }, {
                        "name": "In Network Individual",
                        "categoryName": "Deductible",
                        "value": "60",
                        "description": "Key",
                        "dataType": "Currency"
                    }, {
                        "name": "Out of Network",
                        "categoryName": "Deductible",
                        "value": "Not Included",
                        "dataType": "Text"
                    }],
                    "ProductCode": "TI-TC",
                    "ProductName": "Trip Cancellation",
                    "MarketSegment": "Individual",
                    "ProductType": "Medical",
                    "ProductSubType": "HMO",
                    "TotalPremium": 22.50,
                    "ID": "7"
                }],
                "aggregationResults": {
                    "TotalPrice": 33.00
                }
            }, {
                "calculationResults": [{
                    "Age": 25,
                    "Gender": "female",
                    "attributes": [{
                        "categoryName": "OV",
                        "name": "Deductible",
                        "dataType": "Text",
                        "value": "$1000/2000"
                    }, {
                        "categoryName": "OV",
                        "name": "OOPM",
                        "dataType": "Text",
                        "value": "$6,850/13,700"
                    }, {
                        "categoryName": "OV",
                        "name": "OV",
                        "dataType": "Text",
                        "value": "$20/60"
                    }, {
                        "categoryName": "OV",
                        "name": "Rx Cost Share",
                        "dataType": "Text",
                        "value": "$15/$45/30%/40% Tiers 3 and 4 medical deductible, then coinsurance --per script maxes T3 $500 & T4: $600"
                    }],
                    "ProductCode": "AHMO20",
                    "ProductName": "Affordable HMO 20",
                    "MarketSegment": "Individual",
                    "ProductType": "Medical",
                    "ProductSubType": "HMO",
                    "TotalPremium": 12.50,
                    "ID": "8"
                }, {
                    "Age": 30,
                    "Gender": "male",
                    "attributes": [{
                        "categoryName": "OV",
                        "name": "Deductible",
                        "dataType": "Text",
                        "value": "$1000/2000"
                    }, {
                        "categoryName": "OV",
                        "name": "OOPM",
                        "dataType": "Text",
                        "value": "$6,850/13,700"
                    }, {
                        "categoryName": "OV",
                        "name": "OV",
                        "dataType": "Text",
                        "value": "$20/60"
                    }, {
                        "categoryName": "OV",
                        "name": "Rx Cost Share",
                        "dataType": "Text",
                        "value": "$15/$45/30%/40% Tiers 3 and 4 medical deductible, then coinsurance --per script maxes T3 $500 & T4: $600"
                    }],
                    "ProductCode": "AHMO20",
                    "ProductName": "Affordable HMO 20",
                    "MarketSegment": "Individual",
                    "ProductType": "Medical",
                    "ProductSubType": "HMO",
                    "TotalPremium": 22.50,
                    "ID": "9"
                }],
                "aggregationResults": {
                    "TotalPrice": 34.00
                }
            }, {
                "calculationResults": [{
                    "Age": 25,
                    "Gender": "female",
                    "attributes": [{
                        "categoryName": "OV",
                        "name": "Deductible",
                        "dataType": "Text",
                        "value": "$1250/$2500"
                    }, {
                        "categoryName": "OV",
                        "name": "OOPM",
                        "dataType": "Text",
                        "value": "$4750/$9500"
                    }, {
                        "categoryName": "OV",
                        "name": "OV",
                        "dataType": "Text",
                        "value": "$20/60"
                    }, {
                        "categoryName": "OV",
                        "name": "Rx Cost Share",
                        "value": "$15/$50/30%/40% Tiers 3 and 4 medical deductible, then coinsurance --per script maxes T3 $500 & T4: $600"
                    }],
                    "ProductCode": "AHMO20Dental",
                    "ProductName": "Affordable HMO 20 w/ dental",
                    "MarketSegment": "Individual",
                    "ProductType": "Medical",
                    "ProductSubType": "HMO",
                    "TotalPremium": 12.50,
                    "ID": "10"
                }, {
                    "Age": 30,
                    "Gender": "male",
                    "attributes": [{
                        "categoryName": "OV",
                        "name": "Deductible",
                        "dataType": "Text",
                        "value": "$1250/$2500"
                    }, {
                        "categoryName": "OV",
                        "name": "OOPM",
                        "dataType": "Text",
                        "value": "$4750/$9500"
                    }, {
                        "categoryName": "OV",
                        "name": "OV",
                        "dataType": "Text",
                        "value": "$20/60"
                    }, {
                        "categoryName": "OV",
                        "name": "Rx Cost Share",
                        "value": "$15/$50/30%/40% Tiers 3 and 4 medical deductible, then coinsurance --per script maxes T3 $500 & T4: $600"
                    }],
                    "ProductCode": "AHMO20Dental",
                    "ProductName": "Affordable HMO 20 w/ dental",
                    "MarketSegment": "Individual",
                    "ProductType": "Medical",
                    "ProductSubType": "HMO",
                    "TotalPremium": 22.50,
                    "ID": "11"
                }],
                "aggregationResults": {
                    "TotalPrice": 35.00
                }
            }],
            "error": "OK",
            "currencyCode": "GBP"
        }
    };
    $scope.carouselWidth = "width:" + parseInt(($scope.control.vlcSI.recSet.length * 222)+20) + "px";
    $scope.currencySymbol = "";
    $scope.currencyCode = $scope.control.vlcSI.currencyCode;
    $scope.currencyMap = [{
        "USD": "$"
    }, {
        "CAD": "$"
    }, {
        "EUR": "€"
    }, {
        "GBP": "£"
    }, {
        "JPY": "¥"
    }, {
        "KRW": "₩"
    }, {
        "CNY": "元"
    }];

    $scope.getSelectValues = function(filter_type) {
        var data = $scope.control.vlcSI['recSet'],
            products = [],
            selectArray = [];

        for(var i = 0; i < data.length; i++) {
            var interiorData = data[i].calculationResults;
            for(var j = 0; j < 1; j++) {
                products.push(interiorData[j]);
            }
        }
        for(var i = 0; i < products.length; i++) {
            var inSelectArray = false;
            for(var j = 0; j < selectArray.length; j++) {
                if(selectArray[j] === products[i][filter_type]) {
                    inSelectArray = true;
                }
            }
            if(!inSelectArray) {
                selectArray.push(products[i][filter_type]);
            }
        }
        return selectArray;
    };
    $scope.productTypes = $scope.getSelectValues("ProductType");
    $scope.productSubTypes = $scope.getSelectValues("ProductSubType");
    $scope.marketSegment = $scope.getSelectValues("MarketSegment");
    $scope.filters = {};

    $scope.filterChanged = function(data) {
        $scope.filteredProduct = data;
    };

    $scope.showProduct = function(product) {
        var filters = $scope.filters,
            shown = true;
        for(var prop in filters) {
            if(filters[prop] !== null && filters[prop] !== product[prop]) {
                shown = false;
            }
        }
        return shown;
    };

    $scope.formatPrice = function(price) {
        return parseFloat(price).toFixed(2);
    };

    $scope.getCurrencySymbol = function(code) {
        var currencySymbol = "";
        $scope.currencyMap.forEach(function(item) {
            if (item[code] !== undefined) {
                currencySymbol = item[code];
            }
        });
        return currencySymbol;
    };
    $scope.currencySymbol = $scope.getCurrencySymbol($scope.currencyCode);

    $scope.open = function(size) {

        var modalInstance = $modal.open({
            templateUrl: 'vlcCompareModal.html',
            controller: 'CompareModalCtrl',
            size: size,
            resolve: {
                content: function() {
                    return $scope.control.vlcSI;
                },
                currencySymbol: function() {
                    return $scope.currencySymbol;
                },
                currencyCode: function() {
                    return $scope.currencyCode;
                }
            }
        });

        modalInstance.result.then(function(selectedItem) {
            $scope.selected = selectedItem;
        }, function() {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };

    // user click - user selects one item in Selectable Items (container)
    // @param
    // control - Element
    // option - the item selected
    // index - index of the selected item
    // scp - Element scope
    $scope.onSelectItem = function(control, option, index, scp, bFlip)
    {
        if(control === undefined || control === null || option === undefined || option === null)
            return;
        // multi-select, single select
        var bSetVal = true;
        var response = [];
        if(bFlip)
        {
            if(option.vlcSelected === undefined || option.vlcSelected === null)
            {
                option.vlcSelected = bSetVal;
            }
            else
            {
                bSetVal = !option.vlcSelected;
                option.vlcSelected = bSetVal;
            }
        }

        // update 'Selectable Items' response
        var recSet = control.vlcSI[control.itemsKey];
        for(var i=0; i<recSet.length; i++)
        {
            if(i !== index && bSetVal && control.propSetMap.selectMode === 'Single')
                 recSet[i].vlcSelected = false;
            if(recSet[i].vlcSelected === true)
                response.push(recSet[i]);
        }

        if(response.length > 0)
            control.response = response;
        else
            control.response = null;

        if(control.propSetMap.dataJSON === true)
            scp.aggregate(scp, control.index, control.indexInParent, true, -1);
    };
});

bpModule.controller('CompareModalCtrl', function($scope, $modalInstance, content, currencySymbol, currencyCode) {
    $scope.categoryList = [];
    $scope.categoryMap = {};
    $scope.productList = [];
    $scope.currencySymbol = currencySymbol;
    $scope.currencyCode = currencyCode;

    $scope.attributesValueForProduct = function(productCode, categoryCode, attributeName) {
        return $scope.categoryMap[categoryCode]['attributes'][attributeName]['assignmentValues'][productCode];
    };

    $scope.transformData = function() {
        var data = content['recSet'],
            products = [];
        for(var i = 0; i < data.length; i++) {
            var interiorData = data[i].calculationResults;
            for(var j = 0; j < 1; j++) {
                products.push(interiorData[j]);
            }
        }
        for (var i = 0; i < products.length; i++) {
            var productAttributes = products[i];
            var product = {};
            product['name'] = productAttributes['ProductName'];
            product['code'] = productAttributes['ProductCode'];

            $scope.productList.push(product);
            var attributes = productAttributes['attributes'];
            for (var j = 0; j < attributes.length; j++) {
                var attributeAssignment = attributes[j];
                var categoryName = attributeAssignment['categoryName'];
                var attributeName = attributeAssignment['name'];
                var attributeValue = attributeAssignment['value'];
                var attributeDataType = attributeAssignment['dataType'];

                if ($scope.categoryMap[categoryName] == null) {
                    $scope.categoryList.push(categoryName);
                    var attributeMap = {};
                    var productAssignmentMap = {};
                    productAssignmentMap[product['code']] = {
                        "value": attributeValue,
                        "dataType": attributeDataType
                    };
                    attributeMap['assignmentValues'] = productAssignmentMap;
                    attributeMap['name'] = attributeName;
                    $scope.categoryMap[categoryName] = {};
                    $scope.categoryMap[categoryName]['attributes'] = {};
                    $scope.categoryMap[categoryName]['attributes'][attributeName] = attributeMap;
                } else {
                    var attributeMap = $scope.categoryMap[categoryName]['attributes'][attributeName];
                    if (attributeMap != null) {
                        var productAssignmentMap = attributeMap['assignmentValues'];
                        productAssignmentMap[product['code']] = {
                            "value": attributeValue,
                            "dataType": attributeDataType
                        };
                    } else {
                        attributeMap = {};
                        var productAssignmentMap = {};
                        productAssignmentMap[product['code']] = {
                            "value": attributeValue,
                            "dataType": attributeDataType
                        };
                        attributeMap['assignmentValues'] = productAssignmentMap;
                        attributeMap['name'] = attributeName;
                        $scope.categoryMap[categoryName]['attributes'][attributeName] = attributeMap;
                    }
                }
            }
        }
    };

    $scope.showCategory = function(category) {
        return ($scope.filteredCategory == null || category == $scope.filteredCategory);
    };

    $scope.selectedItemChanged = function(code) {
        $scope.filteredCategory = code;
    };

    $scope.transformData();

    $scope.cancel = function() {
        $modalInstance.dismiss('cancel');
    };
});
